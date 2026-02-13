import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Info, ChevronRight, ChevronLeft, Table as TableIcon, RefreshCcw, Award } from 'lucide-react';
import { quizzesByDay, dayInfo } from './data/quizzesByDay';

const DAY_MIN = 1;
const DAY_MAX = 20;

const QuizPage = () => {
  const { dayNum } = useParams();

  // "day2" -> "2", "2" -> "2"
  const parsedDayNum = dayNum ? dayNum.replace(/^day/, '') : null;
  const day = parsedDayNum == null
    ? 1
    : Math.max(DAY_MIN, Math.min(DAY_MAX, parseInt(parsedDayNum, 10) || 1));
  const quizList = quizzesByDay[day] ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // 일차가 바뀌면 퀴즈 상태 초기화
  useEffect(() => {
    resetQuiz();
  }, [day]);

  if (dayNum != null && (day < DAY_MIN || day > DAY_MAX)) {
    return <Navigate to="/day1" replace />;
  }

  if (!quizList.length) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center font-sans text-slate-900">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Day {day}</h2>
          <p className="text-slate-500">해당 일차 퀴즈는 준비 중입니다.</p>
          <p className="text-sm text-slate-400 mt-4">
            <Link to="/day1" className="text-blue-600 hover:underline">1일차 퀴즈</Link>로 이동
          </p>
        </div>
      </div>
    );
  }

  const currentQuiz = quizList[currentIndex];

  const handleOptionClick = (option) => {
    if (showResult) return;
    setSelectedOption(option.id);
    setShowResult(true);
    if (option.isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  const dayLabel = String(day).padStart(2, '0');

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
          <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">학습 완료!</h2>
          <p className="text-slate-500 mb-6">SQLD Day {dayLabel}를 마치셨네요.</p>
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
            <div className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">최종 점수</div>
            <div className="text-5xl font-black text-blue-600">{Math.round((score / quizList.length) * 100)}점</div>
            <div className="mt-2 text-slate-600 font-medium">{quizList.length}문항 중 {score}문항 정답</div>
          </div>
          <button
            onClick={resetQuiz}
            className="w-full flex items-center justify-center gap-2 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all"
          >
            <RefreshCcw size={18} /> 처음부터 다시 풀기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center font-sans text-slate-900">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="h-2 bg-slate-100 w-full">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / quizList.length) * 100}%` }}
          />
        </div>

        <div className="bg-white px-6 py-6 border-b border-slate-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em]">
              SQLD Day {String(day).padStart(2, '0')}: {dayInfo[day]?.title || "퀴즈"}
            </span>
            <span className="text-slate-400 text-sm font-bold">
              {currentIndex + 1} / {quizList.length}
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-800">{currentQuiz.category}</h1>
        </div>

        <div className="p-6 md:p-8">
          {/* 단일 테이블 레거시 지원 */}
          {currentQuiz.tableName && !currentQuiz.tables && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3 text-slate-500 font-bold uppercase text-xs tracking-wider">
                <TableIcon size={14} />
                <span>참조 테이블: {currentQuiz.tableName}</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      {currentQuiz.headers.map((header) => (
                        <th key={header} className="px-4 py-2 text-[11px] font-black text-slate-400 border-b border-slate-200 uppercase">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentQuiz.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-2 text-sm border-b border-slate-50 text-slate-600 font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 다중 테이블 지원 */}
          {currentQuiz.tables && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuiz.tables.map((table, tIndex) => (
                <div key={tIndex}>
                  <div className="flex items-center gap-2 mb-3 text-slate-500 font-bold uppercase text-xs tracking-wider">
                    <TableIcon size={14} />
                    <span>{table.name}</span>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          {table.headers.map((header) => (
                            <th key={header} className="px-4 py-2 text-[11px] font-black text-slate-400 border-b border-slate-200 uppercase">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-2 text-sm border-b border-slate-50 text-slate-600 font-medium">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-slate-800 leading-snug">
              {currentQuiz.question}
            </h2>
            {currentQuiz.code && (
              <div className="bg-slate-900 rounded-xl p-5 font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto shadow-inner border-l-4 border-blue-500">
                <pre>{currentQuiz.code}</pre>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3 mb-6">
            {currentQuiz.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isCorrect = option.isCorrect;
              let buttonClass = "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ";
              if (!showResult) {
                buttonClass += "border-slate-100 hover:border-blue-400 hover:bg-blue-50 bg-white group";
              } else {
                if (isCorrect) buttonClass += "border-green-500 bg-green-50 text-green-700";
                else if (isSelected) buttonClass += "border-red-500 bg-red-50 text-red-700";
                else buttonClass += "border-slate-50 bg-slate-50 text-slate-300";
              }
              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  disabled={showResult}
                  className={`${buttonClass} h-auto min-h-[3.5rem]`}
                >
                  <span className={`font-semibold text-sm md:text-base break-words whitespace-pre-wrap flex-1 pr-3 text-left ${!showResult && 'group-hover:text-blue-600'} ${/^(SELECT|INSERT|UPDATE|DELETE)\s/i.test(option.text)
                    ? "font-mono bg-slate-50 text-slate-700 p-3 rounded-lg block w-full my-1 border-l-4 border-blue-500 shadow-sm border border-slate-200"
                    : ""
                    }`}>
                    {(() => {
                      const text = option.text;
                      if (/^(SELECT|INSERT|UPDATE|DELETE)\s/i.test(text)) {
                        return text
                          .replace(/\s+(FROM|JOIN|LEFT|RIGHT|INNER|OUTER|WHERE|GROUP BY|HAVING|ORDER BY|UNION|INTERSECT|EXCEPT)/gi, '\n$1')
                          .replace(/\s+(AND|OR)\s/gi, '\n  $1 ');
                      }
                      return text;
                    })()}
                  </span>
                  {showResult && isCorrect && <CheckCircle2 className="text-green-500 shrink-0" size={22} />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-red-500 shrink-0" size={22} />}
                </button>
              );
            })}
          </div>

          {currentQuiz.hint && (
            <details className="group mb-6 rounded-xl border border-slate-200 bg-slate-50/80 overflow-hidden">
              <summary className="px-4 py-3 cursor-pointer font-semibold text-slate-600 hover:bg-slate-100/80 select-none list-none flex items-center gap-2 [&::-webkit-details-marker]:hidden">
                <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                힌트 보기
              </summary>
              <p className="px-4 pb-3 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                {currentQuiz.hint}
              </p>
            </details>
          )}

          {showResult && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className={`p-5 rounded-2xl mb-6 ${currentQuiz.options.find(o => o.id === selectedOption).isCorrect
                ? 'bg-green-100 text-green-800'
                : 'bg-red-50 text-red-800'
                }`}>
                <div className="flex gap-3">
                  <Info size={18} className="mt-1 shrink-0" />
                  <div>
                    <p className="font-bold mb-1 text-sm">
                      {currentQuiz.options.find(o => o.id === selectedOption).isCorrect ? "정답입니다!" : "오답입니다."}
                    </p>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {currentQuiz.rationale}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors shrink-0"
            >
              <ChevronLeft size={18} />
              이전
            </button>
            <button
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
            >
              {currentIndex === quizList.length - 1 ? "결과 확인하기" : "다음 문제 풀기"}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
