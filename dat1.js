import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, ChevronRight, Table as TableIcon, RefreshCcw, Award } from 'lucide-react';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const quizList = [
    {
      id: 1,
      category: "데이터베이스 구조",
      tableName: "USER",
      headers: ["ID", "NAME", "AGE", "GRADE"],
      rows: [
        [1, "홍길동", 20, "Silver"],
        [2, "김철수", 25, "Gold"],
      ],
      question: "데이터베이스의 '테이블(Table)'을 엑셀에 비유했을 때 가장 적절한 것은?",
      sql: null,
      options: [
        { id: 1, text: "데이터가 저장되는 '시트(Sheet)'", isCorrect: true },
        { id: 2, text: "데이터의 속성을 나타내는 '열(Column)'", isCorrect: false },
        { id: 3, text: "실제 데이터 한 줄인 '행(Row)'", isCorrect: false },
        { id: 4, text: "계산을 수행하는 '함수(Function)'", isCorrect: false },
      ],
      rationale: "테이블은 데이터가 격자 형태로 저장되는 가장 기본적인 공간으로, 엑셀의 시트와 대응됩니다."
    },
    {
      id: 2,
      category: "기초 문법",
      question: "SQL 문법에서 '어디로부터 가져올 것인가'를 지정하는 키워드는?",
      sql: "SELECT [컬럼명]\nFROM [테이블명];",
      options: [
        { id: 1, text: "SELECT", isCorrect: false },
        { id: 2, text: "FROM", isCorrect: true },
        { id: 3, text: "WHERE", isCorrect: false },
        { id: 4, text: "INTO", isCorrect: false },
      ],
      rationale: "SELECT는 가져올 항목을, FROM은 그 데이터가 들어있는 테이블을 지정합니다."
    },
    {
      id: 3,
      category: "전체 조회",
      question: "다음 쿼리에서 아스테리스크(*)의 의미로 옳은 것은?",
      sql: "SELECT *\nFROM USER;",
      options: [
        { id: 1, text: "첫 번째 행만 조회", isCorrect: false },
        { id: 2, text: "모든 컬럼(열) 조회", isCorrect: true },
        { id: 3, text: "중복 제외 조회", isCorrect: false },
        { id: 4, text: "테이블 이름 조회", isCorrect: false },
      ],
      rationale: "*은 '모든 것(All)'을 의미하여 해당 테이블의 모든 컬럼을 한꺼번에 조회할 때 사용합니다."
    },
    {
        id: 4,
        category: "산술 연산과 NULL",
        tableName: "DUAL (가상 테이블)",
        headers: ["계산식"],
        rows: [["500 + NULL"]],
        question: "다음 SQL 문을 실행했을 때 예상되는 결과값은?",
        sql: "SELECT 500 + NULL\nFROM DUAL;",
        options: [
          { id: 1, text: "500", isCorrect: false },
          { id: 2, text: "0", isCorrect: false },
          { id: 3, text: "NULL", isCorrect: true },
          { id: 4, text: "Error", isCorrect: false },
        ],
        rationale: "NULL은 알 수 없는 값(Unknown)이므로, 어떤 숫자와 연산해도 결과는 항상 NULL이 됩니다."
    },
    {
        id: 5,
        category: "별명(Alias) 규칙",
        question: "별명(Alias)에 '공백'이 포함된 경우 반드시 사용해야 하는 기호는?",
        sql: "SELECT NAME AS \"회원 이름\"\nFROM USER;",
        options: [
          { id: 1, text: "작은따옴표 (' ')", isCorrect: false },
          { id: 2, text: "큰따옴표 (\" \")", isCorrect: true },
          { id: 3, text: "대괄호 ([ ])", isCorrect: false },
          { id: 4, text: "역따옴표 (` `)", isCorrect: false },
        ],
        rationale: "별명에 공백이나 특수문자가 있다면 큰따옴표(\" \")로 감싸야 하나의 이름(식별자)으로 인식합니다."
    }
    // ... 나머지 15문항도 동일한 구조로 추가 가능합니다.
  ];

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

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
          <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">학습 완료!</h2>
          <p className="text-slate-500 mb-6">SQLD의 첫걸음을 떼셨네요.</p>
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
        
        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 w-full">
          <div 
            className="h-full bg-blue-500 transition-all duration-500" 
            style={{ width: `${((currentIndex + 1) / quizList.length) * 100}%` }}
          ></div>
        </div>

        {/* Header */}
        <div className="bg-white px-6 py-6 border-b border-slate-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em]">
              SQLD Day 01: SELECT 기초
            </span>
            <span className="text-slate-400 text-sm font-bold">
              {currentIndex + 1} / {quizList.length}
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-800">{currentQuiz.category}</h1>
        </div>

        <div className="p-6 md:p-8">
          {/* Data Table Section (Conditional) */}
          {currentQuiz.tableName && (
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

          {/* Question & SQL */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-slate-800 leading-snug">
              {currentQuiz.question}
            </h2>
            {currentQuiz.sql && (
              <div className="bg-slate-900 rounded-xl p-5 font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto shadow-inner border-l-4 border-blue-500">
                <pre>{currentQuiz.sql}</pre>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            {currentQuiz.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isCorrect = option.isCorrect;
              
              let buttonClass = "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ";
              if (!showResult) {
                buttonClass += "border-slate-100 hover:border-blue-400 hover:bg-blue-50 bg-white group";
              } else {
                if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-700";
                } else if (isSelected) {
                  buttonClass += "border-red-500 bg-red-50 text-red-700";
                } else {
                  buttonClass += "border-slate-50 bg-slate-50 text-slate-300";
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <span className={`font-semibold ${!showResult && 'group-hover:text-blue-600'}`}>{option.text}</span>
                  {showResult && isCorrect && <CheckCircle2 className="text-green-500" size={22} />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-red-500" size={22} />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Button */}
          {showResult && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className={`p-5 rounded-2xl mb-6 ${
                currentQuiz.options.find(o => o.id === selectedOption).isCorrect 
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

              <button 
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
              >
                {currentIndex === quizList.length - 1 ? "결과 확인하기" : "다음 문제 풀기"}
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;