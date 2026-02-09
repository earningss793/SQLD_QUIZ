/* global window */

/**
 * Question object shape
 * - id: string
 * - type: "mcq" | "short"
 * - topic: "sql" | "modeling" | "db" | "tuning" | "security"
 * - difficulty: "easy" | "medium" | "hard"
 * - stem: string
 * - choices?: string[] (mcq)
 * - answer: number | string | string[]  (mcq: index, short: token(s))
 * - explain: string (HTML allowed)
 * - extras?: array of {type:"code"|"table"|"note", title?:string, code?:string, headers?:string[], rows?:string[][], note?:string}
 * - tags?: string[]
 */

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function id(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
}

function normalizeShort(s) {
  return String(s ?? "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, " ");
}

function makeTemplateQuestions() {
  const templates = [];

  // 1) Window function (LAG/LEAD)
  templates.push(() => {
    const fn = pick(["LAG", "LEAD"]);
    const order = pick(["날짜 DESC", "매출일자 ASC"]);
    const col = pick(["매출액", "점수", "금액"]);
    const alias = fn === "LAG" ? "PREV_VAL" : "NEXT_VAL";
    const qid = id("tpl_win_laglead");
    return {
      id: qid,
      type: "short",
      topic: "sql",
      difficulty: "medium",
      stem: `아래 SQL의 빈칸에 들어갈 분석함수는? (${fn} / ${order} 맥락)`,
      extras: [
        {
          type: "code",
          title: "SQL",
          code:
            "SELECT 키, " +
            col +
            ",\n" +
            `       ______(${col}) OVER (ORDER BY ${order}) AS ${alias}\n` +
            "  FROM T;",
        },
      ],
      answer: fn,
      explain:
        `<ul>
          <li><b>${fn}</b>는 현재 행 기준으로 ${fn === "LAG" ? "이전" : "이후"} 행의 값을 가져옵니다.</li>
          <li>ORDER BY 방향에 따라 “이전/이후”의 의미가 바뀌므로, 문제의 정렬 방향을 같이 확인하세요.</li>
        </ul>`,
      tags: ["분석함수", "윈도우함수", "LAG", "LEAD"],
    };
  });

  // 2) Ranking function
  templates.push(() => {
    const fn = pick(["RANK", "DENSE_RANK", "ROW_NUMBER"]);
    const qid = id("tpl_rank");
    return {
      id: qid,
      type: "short",
      topic: "sql",
      difficulty: "medium",
      stem: "아래 결과처럼 동점은 같은 순위로 처리하고(1,2,2,4), 다음 순위는 건너뛰는 함수는?",
      extras: [
        {
          type: "code",
          title: "SQL(빈칸)",
          code:
            "SELECT 사원명, 부서, 급여,\n" +
            "       ______() OVER (PARTITION BY 부서 ORDER BY 급여 DESC) AS 순위\n" +
            "  FROM 직원;",
        },
      ],
      answer: "RANK",
      explain:
        `<ul>
          <li><b>RANK()</b>: 동점 동일 순위, 다음 순위는 건너뜀 (1,2,2,4)</li>
          <li>DENSE_RANK(): 다음 순위 안 건너뜀 (1,2,2,3)</li>
          <li>ROW_NUMBER(): 동점도 서로 다른 번호 (1,2,3,4)</li>
        </ul>`,
      tags: ["분석함수", "순위함수"],
    };
  });

  // 3) NULL 처리 (NVL/COALESCE/CASE)
  templates.push(() => {
    const target = pick(["배송완료일", "이메일", "종료일"]);
    const qid = id("tpl_null_case");
    return {
      id: qid,
      type: "short",
      topic: "sql",
      difficulty: "easy",
      stem: `아래 SQL의 빈칸에 들어갈 함수는? (${target}이 NULL이면 '배송중' 아니면 '배송완료')`,
      extras: [
        {
          type: "code",
          title: "SQL",
          code:
            "SELECT 송장번호,\n" +
            `       ______(${target}, '배송완료', '배송중') AS 배송상태\n` +
            "  FROM 배송현황;",
        },
      ],
      answer: "NVL2",
      explain:
        `<ul>
          <li><b>NVL2(expr, value_if_not_null, value_if_null)</b></li>
          <li>문제처럼 “NULL/NOT NULL에 따라 서로 다른 값”이면 NVL2가 가장 직관적입니다.</li>
        </ul>`,
      tags: ["NULL", "NVL2"],
    };
  });

  // 4) CONNECT BY PRIOR 방향
  templates.push(() => {
    const qid = id("tpl_connect_by");
    return {
      id: qid,
      type: "short",
      topic: "sql",
      difficulty: "hard",
      stem: "계층형 쿼리에서 자식 → 부모 방향으로 타고 올라가려면 CONNECT BY 절에 무엇을 써야 할까?",
      extras: [
        {
          type: "code",
          title: "SQL(빈칸)",
          code:
            "SELECT 메뉴명, LEVEL\n" +
            "  FROM 메뉴\n" +
            " START WITH 메뉴명 = '아메리카노'\n" +
            " CONNECT BY ________;",
        },
        {
          type: "note",
          note:
            "일반적으로 (부모ID) = (상위메뉴ID), 자식의 상위메뉴ID가 부모의 메뉴ID를 참조한다고 가정합니다.",
        },
      ],
      answer: "PRIOR 상위메뉴ID = 메뉴ID",
      explain:
        `<ul>
          <li>자식에서 부모로 올라가려면: <b>PRIOR 자식의 상위키 = 부모의 키</b> 형태가 됩니다.</li>
          <li>즉 (현재행의) 상위메뉴ID가 (PRIOR의) 메뉴ID를 가리키도록 씁니다.</li>
        </ul>
        <div class="muted">예시: CONNECT BY PRIOR 상위메뉴ID = 메뉴ID</div>`,
      tags: ["계층형쿼리", "CONNECT BY", "PRIOR"],
    };
  });

  // 5) GROUPING SETS / ROLLUP
  templates.push(() => {
    const qid = id("tpl_grouping_sets");
    return {
      id: qid,
      type: "short",
      topic: "sql",
      difficulty: "hard",
      stem: "ROLLUP(연도, 월)과 동일한 결과를 내려면 GROUPING SETS의 빈칸은?",
      extras: [
        {
          type: "code",
          title: "SQL",
          code:
            "(가)\n" +
            "SELECT 연도, 월, SUM(매출액)\n" +
            "  FROM 월별매출\n" +
            " GROUP BY ROLLUP(연도, 월);\n\n" +
            "(나)\n" +
            "SELECT 연도, 월, SUM(매출액)\n" +
            "  FROM 월별매출\n" +
            " GROUP BY GROUPING SETS ( ______ );",
        },
      ],
      answer: "(연도, 월), (연도), ()",
      explain:
        `<ul>
          <li>ROLLUP(연도, 월)은 (연도,월) → (연도) → (전체) 집계를 생성합니다.</li>
          <li>GROUPING SETS로 풀면 <b>((연도,월), (연도), ())</b> 입니다.</li>
        </ul>`,
      tags: ["집계", "ROLLUP", "GROUPING SETS"],
    };
  });

  return templates;
}

const BASE_QUESTIONS = [
  {
    id: "mcq_join_outer_1",
    type: "mcq",
    topic: "sql",
    difficulty: "easy",
    stem: "LEFT OUTER JOIN의 결과로 가장 올바른 설명은?",
    choices: [
      "왼쪽 테이블에 없는 행은 결과에서 제외된다.",
      "오른쪽 테이블에 없는 매칭은 NULL로 채워지고, 왼쪽 행은 유지된다.",
      "양쪽 테이블 모두 매칭되는 행만 나온다.",
      "FULL OUTER JOIN과 동일하다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li><b>LEFT OUTER JOIN</b>: 왼쪽(기준) 테이블은 모두 유지, 오른쪽은 매칭이 없으면 NULL.</li>
        <li>INNER JOIN은 “매칭되는 행만”입니다.</li>
      </ul>`,
    tags: ["JOIN", "OUTER JOIN"],
  },
  {
    id: "mcq_null_sum_1",
    type: "mcq",
    topic: "sql",
    difficulty: "medium",
    stem: "SUM(colA + colB)에서 colA나 colB가 NULL인 행은 어떻게 처리되는가?",
    choices: [
      "NULL은 0으로 자동 변환되어 더해진다.",
      "colA + colB가 NULL이 될 수 있어, 해당 행의 표현식 결과는 NULL이 된다.",
      "SUM이 NULL을 만나면 전체 결과가 NULL이 된다.",
      "SUM은 NULL을 만나면 즉시 중단한다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li>산술 연산에서 NULL이 포함되면 결과는 일반적으로 NULL이 됩니다.</li>
        <li>그래서 합산을 원하면 <b>NVL/COALESCE</b>로 0 대체 후 더하는 패턴이 자주 나옵니다.</li>
      </ul>`,
    tags: ["NULL", "집계"],
  },
  {
    id: "mcq_tx_truncate_1",
    type: "mcq",
    topic: "db",
    difficulty: "medium",
    stem: "TRUNCATE에 대한 설명으로 옳은 것은?",
    choices: [
      "DML이며 ROLLBACK으로 되돌릴 수 있다.",
      "DDL이며 일반적으로 암묵적 COMMIT이 발생한다.",
      "DELETE보다 항상 느리다.",
      "WHERE 조건을 사용할 수 있다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li><b>TRUNCATE</b>는 DDL로 분류되며, DBMS에 따라 암묵적 COMMIT이 발생하는 것이 핵심 포인트입니다.</li>
        <li>반면 DELETE는 DML이고 ROLLBACK 대상입니다(트랜잭션 내에서).</li>
      </ul>`,
    tags: ["트랜잭션", "DDL", "TRUNCATE"],
  },
  {
    id: "mcq_groupby_where_having",
    type: "mcq",
    topic: "sql",
    difficulty: "easy",
    stem: "GROUP BY와 함께 사용할 때 HAVING의 역할로 옳은 것은?",
    choices: [
      "그룹화 이전 행을 필터링한다.",
      "그룹화 이후 집계 결과(그룹)를 필터링한다.",
      "ORDER BY를 대체한다.",
      "NULL을 0으로 바꾼다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li><b>WHERE</b>: 그룹화 이전(행 단위) 필터</li>
        <li><b>HAVING</b>: 그룹화 이후(그룹/집계 결과) 필터</li>
      </ul>`,
    tags: ["GROUP BY", "HAVING", "WHERE"],
  },
  {
    id: "mcq_index_like_1",
    type: "mcq",
    topic: "tuning",
    difficulty: "medium",
    stem: "B-Tree 인덱스가 일반적으로 사용되기 어려운 LIKE 패턴은?",
    choices: ["LIKE 'ABC%'", "LIKE 'A%'", "LIKE '%ABC'", "LIKE 'AB%CD%'"],
    answer: 2,
    explain:
      `<ul>
        <li>전방 일치(prefix)인 <b>'ABC%'</b>는 인덱스 활용 가능성이 높습니다.</li>
        <li>후방/중간 와일드카드(<b>'%ABC'</b>)는 선두 컬럼 범위를 줄일 수 없어 인덱스 사용이 어려운 대표 케이스입니다.</li>
      </ul>`,
    tags: ["인덱스", "LIKE"],
  },
  {
    id: "mcq_modeling_key_1",
    type: "mcq",
    topic: "modeling",
    difficulty: "easy",
    stem: "후보키(candidate key)에 대한 설명으로 옳은 것은?",
    choices: [
      "유일성은 만족하지만 최소성은 만족하지 않아도 된다.",
      "유일성과 최소성을 모두 만족하는 키이다.",
      "항상 기본키(Primary Key)와 동일하다.",
      "외래키(Foreign Key)를 의미한다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li>후보키는 <b>유일성 + 최소성</b>을 만족하는 속성(또는 속성 집합)입니다.</li>
        <li>후보키 중 선택된 1개가 기본키가 됩니다.</li>
      </ul>`,
    tags: ["데이터모델링", "키"],
  },
  {
    id: "mcq_security_role_1",
    type: "mcq",
    topic: "security",
    difficulty: "easy",
    stem: "ROLE(역할)에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "개별 사용자의 비밀번호를 저장하는 객체이다.",
      "권한들을 묶어 사용자/그룹에 부여하기 위한 권한 집합(그룹)이다.",
      "테이블의 행 단위 접근을 제어하는 뷰이다.",
      "DDL만 실행할 수 있는 특별 계정이다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li><b>ROLE</b>은 여러 권한을 묶어 관리 편의성을 제공하는 객체(권한의 집합)입니다.</li>
      </ul>`,
    tags: ["보안", "권한", "ROLE"],
  },
  {
    id: "short_set_ops_minus",
    type: "short",
    topic: "sql",
    difficulty: "medium",
    stem: "집합 연산자 중 ‘왼쪽 결과 - 오른쪽 결과’를 의미하는 연산자는?",
    answer: "MINUS",
    explain:
      `<ul>
        <li>Oracle 계열에서는 차집합을 <b>MINUS</b>로 표현합니다.</li>
        <li>ANSI SQL에서는 EXCEPT를 사용하는 DBMS도 있습니다.</li>
      </ul>`,
    tags: ["집합연산", "MINUS"],
  },
  {
    id: "mcq_or_and_precedence",
    type: "mcq",
    topic: "sql",
    difficulty: "medium",
    stem: "WHERE 절에서 AND/OR 우선순위에 대한 설명으로 옳은 것은?",
    choices: [
      "OR이 AND보다 우선이다.",
      "AND가 OR보다 우선이다.",
      "항상 왼쪽부터 평가하므로 우선순위는 없다.",
      "DBMS마다 달라 예측할 수 없다.",
    ],
    answer: 1,
    explain:
      `<ul>
        <li>일반적으로 <b>AND가 OR보다 우선</b>입니다.</li>
        <li>혼동 방지를 위해 괄호로 의도를 명확히 하는 습관이 중요합니다.</li>
      </ul>`,
    tags: ["WHERE", "우선순위"],
  },
];

function buildQuestionBank() {
  const templates = makeTemplateQuestions();
  const questions = BASE_QUESTIONS.slice();

  // Add a batch of templated questions each run
  const templated = [];
  for (let i = 0; i < 120; i++) {
    templated.push(pick(templates)());
  }
  return shuffle(questions.concat(templated));
}

window.SQLD_QUIZ = {
  buildQuestionBank,
  normalizeShort,
};

