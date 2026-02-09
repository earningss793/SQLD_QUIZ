/* global SQLD_QUIZ */

const STORAGE_KEY = "sqld_quiz_v1";
const SESSION_KEY = "sqld_quiz_session_v1";

function $(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element: #${id}`);
  return el;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function nowMs() {
  return Date.now();
}

function fmtPct(n) {
  if (!Number.isFinite(n)) return "-";
  return `${Math.round(n * 100)}%`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        totalAttempts: 0,
        correctAttempts: 0,
        wrongNote: {}, // { [qidBase]: { wrong: number, lastWrongAt: number, topic, difficulty } }
        topicPerf: {}, // { [topic]: {attempts, correct} }
      };
    }
    const parsed = JSON.parse(raw);
    return {
      totalAttempts: parsed.totalAttempts ?? 0,
      correctAttempts: parsed.correctAttempts ?? 0,
      wrongNote: parsed.wrongNote ?? {},
      topicPerf: parsed.topicPerf ?? {},
    };
  } catch {
    return {
      totalAttempts: 0,
      correctAttempts: 0,
      wrongNote: {},
      topicPerf: {},
    };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function baseId(qid) {
  // 템플릿으로 생성된 경우도 오답노트로 묶기 위해 prefix 정도로만 묶습니다.
  // ex: tpl_rank_xxx -> tpl_rank
  if (qid.startsWith("tpl_")) {
    const parts = qid.split("_");
    // id()가 `${prefix}_${random}_${date}` 형태로 생성하므로, 뒤 2개 토큰을 제거하면 prefix가 됩니다.
    if (parts.length >= 4) return parts.slice(0, -2).join("_");
    return qid;
  }
  return qid;
}

function topicLabel(t) {
  return (
    {
      sql: "SQL",
      modeling: "데이터 모델링",
      db: "DB/트랜잭션",
      tuning: "튜닝/인덱스",
      security: "보안/권한",
    }[t] ?? "기타"
  );
}

function difficultyLabel(d) {
  return (
    {
      easy: "하",
      medium: "중",
      hard: "상",
    }[d] ?? "-"
  );
}

function buildQuiz(questions, opts, state) {
  const count = clamp(Number(opts.count) || 20, 5, 50);
  const topic = opts.topic ?? "any";
  const difficulty = opts.difficulty ?? "any";
  const bias = opts.bias ?? "mixed";
  const wrongFirst = bias === "wrongFirst";
  const newFirst = bias === "newFirst";

  const filtered = questions.filter((q) => {
    if (topic !== "any" && q.topic !== topic) return false;
    if (difficulty !== "any" && q.difficulty !== difficulty) return false;
    return true;
  });

  // bias scoring
  const wrongSet = new Set(Object.keys(state.wrongNote || {}));
  const scored = filtered
    .map((q) => {
      const bid = baseId(q.id);
      const isWrong = wrongSet.has(bid);
      const score = wrongFirst ? (isWrong ? 2 : 0) : newFirst ? (isWrong ? 0 : 2) : isWrong ? 1 : 0;
      return { q, score, isWrong };
    })
    .sort((a, b) => b.score - a.score || (a.isWrong === b.isWrong ? 0 : a.isWrong ? -1 : 1));

  const picked = scored.slice(0, count).map((x) => x.q);
  return {
    id: `quiz_${nowMs().toString(36)}`,
    createdAt: nowMs(),
    opts,
    idx: 0,
    items: picked.map((q) => ({
      q,
      status: "unseen", // unseen | correct | wrong | skipped
      userAnswer: null,
      correct: null,
      answeredAt: null,
    })),
    finished: false,
    timer: {
      enabled: Boolean(opts.timerEnabled),
      durationMs: (Number(opts.minutes) || 30) * 60 * 1000,
      startedAt: null,
      remainingMs: null,
      expired: false,
    },
  };
}

function evalAnswer(item) {
  const q = item.q;
  if (q.type === "mcq") {
    const idx = Number(item.userAnswer);
    return idx === Number(q.answer);
  }
  const user = SQLD_QUIZ.normalizeShort(item.userAnswer);
  const ans = q.answer;
  if (Array.isArray(ans)) {
    const norm = new Set(ans.map(SQLD_QUIZ.normalizeShort));
    return norm.has(user);
  }
  const target = SQLD_QUIZ.normalizeShort(ans);
  if (!target) return false;
  if (user === target) return true;
  // CONNECT BY PRIOR 같은 경우는 핵심 토큰 포함으로도 정답 처리
  const tokens = target.split(" ").filter(Boolean);
  if (tokens.length >= 3) {
    return tokens.every((t) => user.includes(t));
  }
  return false;
}

function recordAttempt(state, q, correct) {
  state.totalAttempts += 1;
  if (correct) state.correctAttempts += 1;

  const tp = q.topic || "other";
  if (!state.topicPerf[tp]) state.topicPerf[tp] = { attempts: 0, correct: 0 };
  state.topicPerf[tp].attempts += 1;
  if (correct) state.topicPerf[tp].correct += 1;

  const bid = baseId(q.id);
  if (!correct) {
    if (!state.wrongNote[bid]) {
      state.wrongNote[bid] = { wrong: 0, lastWrongAt: 0, topic: q.topic, difficulty: q.difficulty };
    }
    state.wrongNote[bid].wrong += 1;
    state.wrongNote[bid].lastWrongAt = nowMs();
    state.wrongNote[bid].topic = q.topic;
    state.wrongNote[bid].difficulty = q.difficulty;
  }
}

function clearWrongForQuestion(state, q) {
  const bid = baseId(q.id);
  if (state.wrongNote[bid]) {
    delete state.wrongNote[bid];
  }
}

function renderStats(state) {
  $("statTotal").textContent = String(state.totalAttempts ?? 0);
  const acc = state.totalAttempts ? state.correctAttempts / state.totalAttempts : 0;
  $("statAcc").textContent = state.totalAttempts ? fmtPct(acc) : "-";
  $("statWrong").textContent = String(Object.keys(state.wrongNote || {}).length);

  const weak = Object.entries(state.topicPerf || {})
    .map(([topic, perf]) => {
      const attempts = perf.attempts || 0;
      const correct = perf.correct || 0;
      const rate = attempts ? correct / attempts : 0;
      return { topic, attempts, correct, rate };
    })
    .filter((x) => x.attempts >= 3)
    .sort((a, b) => a.rate - b.rate)
    .slice(0, 4);

  const wrap = $("weakTopics");
  wrap.innerHTML = "";
  if (!weak.length) {
    wrap.innerHTML = `<div class="muted" style="font-size:12px">영역별 취약도를 보려면 각 영역을 3문제 이상 풀어보세요.</div>`;
    return;
  }
  for (const w of weak) {
    const el = document.createElement("div");
    el.className = "chip chipBad";
    el.textContent = `${topicLabel(w.topic)} · ${fmtPct(w.rate)} (${w.correct}/${w.attempts})`;
    wrap.appendChild(el);
  }
}

function setVisible(id, on) {
  const el = $(id);
  el.classList.toggle("hidden", !on);
}

function renderExtras(extras) {
  const host = $("qExtras");
  host.innerHTML = "";
  if (!extras || !extras.length) return;
  for (const ex of extras) {
    if (ex.type === "note") {
      const d = document.createElement("div");
      d.className = "muted";
      d.style.fontSize = "12px";
      d.style.lineHeight = "1.5";
      d.textContent = ex.note || "";
      host.appendChild(d);
      continue;
    }
    if (ex.type === "code") {
      const wrap = document.createElement("div");
      if (ex.title) {
        const t = document.createElement("div");
        t.className = "tTitle";
        t.textContent = ex.title;
        wrap.appendChild(t);
      }
      const pre = document.createElement("pre");
      pre.className = "code";
      pre.innerHTML = escapeHtml(ex.code || "");
      wrap.appendChild(pre);
      host.appendChild(wrap);
      continue;
    }
    if (ex.type === "table") {
      const wrap = document.createElement("div");
      if (ex.title) {
        const t = document.createElement("div");
        t.className = "tTitle";
        t.textContent = ex.title;
        wrap.appendChild(t);
      }
      const tw = document.createElement("div");
      tw.className = "tableWrap";
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const trh = document.createElement("tr");
      for (const h of ex.headers || []) {
        const th = document.createElement("th");
        th.textContent = h;
        trh.appendChild(th);
      }
      thead.appendChild(trh);
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      for (const row of ex.rows || []) {
        const tr = document.createElement("tr");
        for (const val of row) {
          const td = document.createElement("td");
          td.textContent = val;
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      tw.appendChild(table);
      wrap.appendChild(tw);
      host.appendChild(wrap);
      continue;
    }
  }
}

function renderQuestion(quiz) {
  const item = quiz.items[quiz.idx];
  const q = item.q;

  $("progressText").textContent = `${quiz.idx + 1} / ${quiz.items.length}`;
  $("progressFill").style.width = `${((quiz.idx + 1) / quiz.items.length) * 100}%`;
  $("pillTopic").textContent = topicLabel(q.topic);
  $("pillDifficulty").textContent = `난이도 ${difficultyLabel(q.difficulty)}`;

  $("qStem").textContent = q.stem;
  renderExtras(q.extras);

  // reset inputs
  $("feedback").classList.add("hidden");
  $("feedback").classList.remove("fbGood", "fbBad", "fbWarn");
  $("feedback").innerHTML = "";
  $("btnNext").disabled = true;
  $("btnSubmit").disabled = false;

  // explanation box
  $("explainBody").innerHTML = q.explain || "";
  $("explainBox").open = false;

  // choices / short
  const choicesHost = $("qChoices");
  choicesHost.innerHTML = "";

  const isMcq = q.type === "mcq";
  setVisible("qChoices", isMcq);
  setVisible("qShort", !isMcq);

  if (isMcq) {
    const name = `mcq_${quiz.id}_${quiz.idx}`;
    q.choices.forEach((c, idx) => {
      const label = document.createElement("label");
      label.className = "choice";
      label.tabIndex = 0;
      label.innerHTML = `
        <input type="radio" name="${name}" value="${idx}" />
        <span>${escapeHtml(c)}</span>
      `;
      label.addEventListener("click", () => {
        for (const node of choicesHost.querySelectorAll(".choice")) node.classList.remove("selected");
        label.classList.add("selected");
      });
      label.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const radio = label.querySelector("input");
          radio.checked = true;
          label.click();
        }
      });
      choicesHost.appendChild(label);
    });
  } else {
    $("inputShort").value = "";
  }
}

function getUserAnswer(quiz) {
  const item = quiz.items[quiz.idx];
  const q = item.q;
  if (q.type === "mcq") {
    const checked = document.querySelector(`#qChoices input[type="radio"]:checked`);
    return checked ? Number(checked.value) : null;
  }
  const v = $("inputShort").value;
  return v?.trim() ? v.trim() : null;
}

function showFeedback(kind, html) {
  const fb = $("feedback");
  fb.classList.remove("hidden", "fbGood", "fbBad", "fbWarn");
  fb.classList.add(kind);
  fb.innerHTML = html;
}

function renderTimer(quiz) {
  const timer = quiz.timer;
  const el = $("timerText");
  if (!timer.enabled) {
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");
  const remaining = timer.remainingMs ?? timer.durationMs;
  const sec = Math.max(0, Math.floor(remaining / 1000));
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");
  el.textContent = `남은 시간 ${mm}:${ss}`;
}

function startTimer(quiz, onExpire) {
  if (!quiz.timer.enabled) return { stop: () => {} };
  quiz.timer.startedAt = nowMs();
  quiz.timer.remainingMs = quiz.timer.durationMs;
  let stopped = false;

  const tick = () => {
    if (stopped) return;
    const elapsed = nowMs() - quiz.timer.startedAt;
    quiz.timer.remainingMs = Math.max(0, quiz.timer.durationMs - elapsed);
    renderTimer(quiz);
    if (quiz.timer.remainingMs <= 0) {
      quiz.timer.expired = true;
      stopped = true;
      onExpire();
      return;
    }
    setTimeout(tick, 250);
  };
  tick();
  return { stop: () => (stopped = true) };
}

function exportResultBlob(payload) {
  const json = JSON.stringify(payload, null, 2);
  return new Blob([json], { type: "application/json;charset=utf-8" });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function main() {
  const state = loadState();
  renderStats(state);

  const questionBank = SQLD_QUIZ.buildQuestionBank();

  let quiz = null;
  let timerCtl = { stop: () => {} };

  function persist() {
    if (quiz) saveSession(quiz);
  }

  function setMinutesEnabled() {
    const enabled = $("checkTimer").checked;
    $("inputMinutes").disabled = !enabled;
  }

  $("checkTimer").addEventListener("change", setMinutesEnabled);
  setMinutesEnabled();

  function startNewQuiz({ wrongOnly = false } = {}) {
    const opts = {
      count: $("inputCount").value,
      difficulty: $("selectDifficulty").value,
      topic: $("selectTopic").value,
      bias: $("selectBias").value,
      showExplainAfterSubmit: $("checkShowExplainAfterSubmit").checked,
      timerEnabled: $("checkTimer").checked,
      minutes: $("inputMinutes").value,
    };

    let bank = questionBank;
    if (wrongOnly) {
      const wrongSet = new Set(Object.keys(state.wrongNote || {}));
      bank = questionBank.filter((q) => wrongSet.has(baseId(q.id)));
      if (bank.length < 5) {
        bank = questionBank.filter((q) => wrongSet.has(baseId(q.id))).concat(questionBank).slice(0, 50);
      }
    }

    quiz = buildQuiz(bank, opts, state);
    clearSession();
    persist();

    timerCtl.stop();
    timerCtl = startTimer(quiz, () => {
      finishQuiz("타이머 종료");
    });

    setVisible("cardWelcome", false);
    setVisible("cardResult", false);
    setVisible("cardQuiz", true);
    renderTimer(quiz);
    renderQuestion(quiz);
  }

  function finishQuiz(reason = "완료") {
    if (!quiz) return;
    quiz.finished = true;
    timerCtl.stop();
    persist();

    const total = quiz.items.length;
    const correct = quiz.items.filter((x) => x.status === "correct").length;
    const wrong = quiz.items.filter((x) => x.status === "wrong").length;
    const skipped = quiz.items.filter((x) => x.status === "skipped" || x.status === "unseen").length;

    $("resultScore").textContent = `${correct} / ${total}`;
    $("resultMeta").textContent = `${reason} · 정답 ${correct} · 오답 ${wrong} · 미답 ${skipped}`;

    const wrongHost = $("wrongList");
    wrongHost.innerHTML = "";
    const list = quiz.items
      .map((it, i) => ({ it, i }))
      .filter((x) => x.it.status !== "correct");

    if (!list.length) {
      wrongHost.innerHTML = `<div class="muted" style="font-size:12px">전부 정답입니다. 다음 회차는 난이도/영역을 올려보세요.</div>`;
    } else {
      for (const { it, i } of list) {
        const q = it.q;
        const div = document.createElement("div");
        div.className = "wrongItem";
        const ua =
          it.userAnswer == null
            ? "(미답)"
            : q.type === "mcq"
              ? q.choices?.[Number(it.userAnswer)] ?? String(it.userAnswer)
              : String(it.userAnswer);
        const ca =
          q.type === "mcq" ? q.choices?.[Number(q.answer)] ?? String(q.answer) : Array.isArray(q.answer) ? q.answer.join(" / ") : String(q.answer);
        div.innerHTML = `
          <div class="wrongItemTitle">${i + 1}. ${escapeHtml(q.stem)}</div>
          <div class="wrongItemMeta">${topicLabel(q.topic)} · 난이도 ${difficultyLabel(q.difficulty)}</div>
          <div class="wrongItemExplain"><b>내 답</b>: ${escapeHtml(ua)}<br/><b>정답</b>: ${escapeHtml(ca)}</div>
          <div class="wrongItemExplain" style="margin-top:8px">${q.explain || ""}</div>
        `;
        wrongHost.appendChild(div);
      }
    }

    setVisible("cardQuiz", false);
    setVisible("cardWelcome", false);
    setVisible("cardResult", true);
  }

  function submitCurrent() {
    if (!quiz || quiz.finished) return;
    const item = quiz.items[quiz.idx];
    if (item.status !== "unseen") return;

    const ua = getUserAnswer(quiz);
    if (ua == null) {
      showFeedback("fbWarn", "<b>답을 선택/입력해주세요.</b> (모르면 ‘건너뛰기’로 넘어갈 수 있어요.)");
      return;
    }

    item.userAnswer = ua;
    const correct = evalAnswer(item);
    item.correct = correct;
    item.answeredAt = nowMs();
    item.status = correct ? "correct" : "wrong";

    recordAttempt(state, item.q, correct);
    if (correct) clearWrongForQuestion(state, item.q);
    saveState(state);
    renderStats(state);
    persist();

    const q = item.q;
    const correctText =
      q.type === "mcq"
        ? `정답: <b>${escapeHtml(q.choices?.[Number(q.answer)] ?? String(q.answer))}</b>`
        : `정답 키워드: <b>${escapeHtml(Array.isArray(q.answer) ? q.answer.join(" / ") : String(q.answer))}</b>`;
    const userText =
      q.type === "mcq"
        ? `내 답: <b>${escapeHtml(q.choices?.[Number(ua)] ?? String(ua))}</b>`
        : `내 답: <b>${escapeHtml(String(ua))}</b>`;

    if (correct) {
      showFeedback("fbGood", `<b>정답입니다.</b><br/>${userText}<br/>${correctText}`);
    } else {
      showFeedback("fbBad", `<b>오답입니다.</b><br/>${userText}<br/>${correctText}`);
    }

    $("btnSubmit").disabled = true;
    $("btnNext").disabled = false;

    if (quiz.opts.showExplainAfterSubmit) $("explainBox").open = true;
  }

  function skipCurrent() {
    if (!quiz || quiz.finished) return;
    const item = quiz.items[quiz.idx];
    if (item.status !== "unseen") return;
    item.status = "skipped";
    item.userAnswer = null;
    item.correct = false;
    item.answeredAt = nowMs();
    persist();
    showFeedback("fbWarn", "<b>건너뛰었습니다.</b> 마지막 결과 화면에서 오답/미답을 한 번에 복습할 수 있어요.");
    $("btnSubmit").disabled = true;
    $("btnNext").disabled = false;
  }

  function next() {
    if (!quiz || quiz.finished) return;
    if (quiz.idx >= quiz.items.length - 1) {
      finishQuiz("퀴즈 종료");
      clearSession();
      return;
    }
    quiz.idx += 1;
    persist();
    renderQuestion(quiz);
  }

  $("btnStart").addEventListener("click", () => startNewQuiz());
  $("btnRetryWrong").addEventListener("click", () => startNewQuiz({ wrongOnly: true }));
  $("btnNewQuiz").addEventListener("click", () => startNewQuiz());
  $("btnSubmit").addEventListener("click", submitCurrent);
  $("btnSkip").addEventListener("click", skipCurrent);
  $("btnNext").addEventListener("click", next);

  window.addEventListener("keydown", (e) => {
    if (!quiz || quiz.finished) return;
    if (e.key === "Enter") {
      const nextEnabled = !$("btnNext").disabled;
      if (nextEnabled) next();
      else submitCurrent();
    }
  });

  $("btnResetStats").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SESSION_KEY);
    const fresh = loadState();
    renderStats(fresh);
    location.reload();
  });

  $("btnExport").addEventListener("click", () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      state: loadState(),
      session: loadSession(),
    };
    const blob = exportResultBlob(payload);
    downloadBlob(blob, `sqld-quiz-export-${Date.now()}.json`);
  });

  $("btnResume").addEventListener("click", () => {
    const sess = loadSession();
    if (!sess || sess.finished) {
      showFeedback("fbWarn", "<b>이어할 세션이 없습니다.</b> 새 퀴즈를 시작하세요.");
      return;
    }
    quiz = sess;
    timerCtl.stop();
    timerCtl = startTimer(quiz, () => finishQuiz("타이머 종료"));
    setVisible("cardWelcome", false);
    setVisible("cardResult", false);
    setVisible("cardQuiz", true);
    renderTimer(quiz);
    renderQuestion(quiz);
  });

  // 초기 resume 가능 여부 표시
  const sess = loadSession();
  $("btnResume").disabled = !(sess && !sess.finished && sess.items?.length);
}

document.addEventListener("DOMContentLoaded", main);

