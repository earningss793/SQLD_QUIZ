import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, ChevronRight, Table as TableIcon, RefreshCcw, Award } from 'lucide-react';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const quizList = [
    // 1부: 데이터베이스 구조와 기초 문법 (Q1~Q5)
    {
      id: 1,
      category: "데이터베이스 구조",
      tableName: "USER",
      headers: ["ID", "NAME", "AGE", "GRADE"],
      rows: [[1, "홍길동", 20, "Silver"], [2, "김철수", 25, "Gold"]],
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
      question: "SQL 문법에서 \"어디로부터 가져올 것인가\"를 지정하는 키워드는?",
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
      question: "SELECT * FROM USER; 쿼리에서 아스테리스크(*)의 의미로 옳은 것은?",
      sql: "SELECT *\nFROM USER;",
      options: [
        { id: 1, text: "데이터의 첫 번째 행만 가져온다.", isCorrect: false },
        { id: 2, text: "테이블 내의 모든 컬럼(열)을 가져온다.", isCorrect: true },
        { id: 3, text: "중복된 데이터를 제외하고 가져온다.", isCorrect: false },
        { id: 4, text: "테이블의 이름만 조회한다.", isCorrect: false },
      ],
      rationale: "*은 '모든 것(All)'을 의미하여 해당 테이블의 모든 컬럼을 한꺼번에 조회할 때 사용합니다."
    },
    {
      id: 4,
      category: "기초 문법",
      question: "여러 개의 특정 컬럼(예: 이름, 나이)을 조회할 때 컬럼명 사이에 사용하는 기호는?",
      sql: "SELECT NAME, AGE\nFROM USER;",
      options: [
        { id: 1, text: "마침표 (.)", isCorrect: false },
        { id: 2, text: "세미콜론 (;)", isCorrect: false },
        { id: 3, text: "콤마 (,)", isCorrect: true },
        { id: 4, text: "콜론 (:)", isCorrect: false },
      ],
      rationale: "SELECT NAME, AGE FROM USER;와 같이 여러 컬럼을 구분할 때는 콤마를 사용합니다."
    },
    {
      id: 5,
      category: "기초 문법",
      question: "다음 중 SQL 문장의 끝을 알리는 '마침표' 역할을 하며, 생략 시 실행되지 않는 것은?",
      sql: null,
      options: [
        { id: 1, text: ":", isCorrect: false },
        { id: 2, text: "/", isCorrect: false },
        { id: 3, text: ".", isCorrect: false },
        { id: 4, text: ";", isCorrect: true },
      ],
      rationale: "SQL 문장은 반드시 세미콜론(;)으로 끝나야 명령이 완료된 것으로 인식됩니다."
    },
    // 2부: 별명(Alias)과 대소문자 규칙 (Q6~Q10)
    {
      id: 6,
      category: "별명(Alias)과 대소문자",
      question: "컬럼에 별명을 붙일 때 가장 권장되는(가독성이 좋은) 키워드는?",
      sql: "SELECT NAME AS 회원명\nFROM USER;",
      options: [
        { id: 1, text: "IS", isCorrect: false },
        { id: 2, text: "AS", isCorrect: true },
        { id: 3, text: "LIKE", isCorrect: false },
        { id: 4, text: "TO", isCorrect: false },
      ],
      rationale: "컬럼명 AS 별명 형식이 별명임을 명시적으로 보여주어 가장 추천되는 방식입니다."
    },
    {
      id: 7,
      category: "별명(Alias)과 대소문자",
      question: "별명(Alias)에 '공백'이 포함된 경우(예: 회원 이름) 반드시 사용해야 하는 기호는?",
      sql: "SELECT NAME AS \"회원 이름\"\nFROM USER;",
      options: [
        { id: 1, text: "작은따옴표 (' ')", isCorrect: false },
        { id: 2, text: "큰따옴표 (\" \")", isCorrect: true },
        { id: 3, text: "대괄호 ([ ])", isCorrect: false },
        { id: 4, text: "역따옴표 (` `)", isCorrect: false },
      ],
      rationale: "별명에 공백이나 특수문자가 있다면 큰따옴표로 감싸야 하나의 이름으로 인식합니다."
    },
    {
      id: 8,
      category: "별명(Alias)과 대소문자",
      question: "SQL의 대소문자 구별에 대한 설명 중 틀린 것은?",
      sql: null,
      options: [
        { id: 1, text: "SELECT와 select는 동일하게 작동한다.", isCorrect: false },
        { id: 2, text: "테이블 명은 대소문자를 가리지 않는 경우가 많다.", isCorrect: false },
        { id: 3, text: "저장된 데이터 값 'HONG'과 'hong'은 같은 데이터로 취급된다.", isCorrect: true },
        { id: 4, text: "키워드(SELECT, FROM)는 대문자로 쓰는 것이 관례적으로 보기 좋다.", isCorrect: false },
      ],
      rationale: "SQL 문법 키워드는 대소문자를 가리지 않지만, 테이블 안에 들어있는 실제 '데이터 값'은 대소문자를 엄격히 구별합니다."
    },
    {
      id: 9,
      category: "별명(Alias)과 대소문자",
      question: "SELECT NAME 이름 FROM USER;와 같이 AS 없이 별명을 붙일 수 있는가?",
      sql: "SELECT NAME 이름\nFROM USER;",
      options: [
        { id: 1, text: "가능하다. 한 칸 띄우기만 하면 된다.", isCorrect: true },
        { id: 2, text: "불가능하다. 반드시 AS를 써야 한다.", isCorrect: false },
        { id: 3, text: "오직 숫자 별명일 때만 가능하다.", isCorrect: false },
        { id: 4, text: "테이블 이름에만 가능하다.", isCorrect: false },
      ],
      rationale: "AS는 생략 가능하며, 띄어쓰기만으로도 별명을 부여할 수 있습니다."
    },
    {
      id: 10,
      category: "별명(Alias)과 대소문자",
      question: "다음 중 문법적으로 틀린 별명 부여 방식은?",
      sql: null,
      options: [
        { id: 1, text: "SELECT NAME AS 이름", isCorrect: false },
        { id: 2, text: "SELECT NAME \"이 름\"", isCorrect: false },
        { id: 3, text: "SELECT NAME AS '이름'", isCorrect: true },
        { id: 4, text: "SELECT NAME 별명", isCorrect: false },
      ],
      rationale: "별명에는 작은따옴표(')를 쓰지 않습니다. 작은따옴표는 데이터 값을 감쌀 때 사용합니다."
    },
    // 3부: 산술 연산과 NULL (Q11~Q15)
    {
      id: 11,
      category: "산술 연산과 NULL",
      question: "SQL에서 사칙연산 우선순위가 가장 낮은 것은?",
      sql: null,
      options: [
        { id: 1, text: "* (곱하기)", isCorrect: false },
        { id: 2, text: "/ (나누기)", isCorrect: false },
        { id: 3, text: "+ (더하기)", isCorrect: true },
        { id: 4, text: "( ) (괄호)", isCorrect: false },
      ],
      rationale: "곱하기와 나누기가 먼저 계산되고, 더하기와 빼기는 나중에 계산됩니다."
    },
    {
      id: 12,
      category: "산술 연산과 NULL",
      tableName: "DUAL (가상 테이블)",
      headers: ["계산식"],
      rows: [["100 + 200 * 2"]],
      question: "SELECT 100 + 200 * 2 FROM DUAL; 의 결과값은?",
      sql: "SELECT 100 + 200 * 2\nFROM DUAL;",
      options: [
        { id: 1, text: "600", isCorrect: false },
        { id: 2, text: "500", isCorrect: true },
        { id: 3, text: "400", isCorrect: false },
        { id: 4, text: "300", isCorrect: false },
      ],
      rationale: "200 * 2가 먼저 계산되어 400이 되고, 여기에 100을 더해 500이 됩니다."
    },
    {
      id: 13,
      category: "산술 연산과 NULL",
      question: "데이터베이스에서 NULL의 의미로 가장 적절한 것은?",
      sql: null,
      options: [
        { id: 1, text: "숫자 0", isCorrect: false },
        { id: 2, text: "공백 문자 (' ')", isCorrect: false },
        { id: 3, text: "알 수 없는 값 (Unknown / Missing)", isCorrect: true },
        { id: 4, text: "테이블의 끝 (End of Table)", isCorrect: false },
      ],
      rationale: "NULL은 0도 공백도 아닌, 값이 존재하지 않거나 무엇인지 모르는 상태를 뜻합니다."
    },
    {
      id: 14,
      category: "산술 연산과 NULL",
      question: "SELECT POINT * 10 FROM USER; 실행 시, POINT가 NULL인 행의 결과값은?",
      sql: "SELECT POINT * 10\nFROM USER;",
      options: [
        { id: 1, text: "0", isCorrect: false },
        { id: 2, text: "10", isCorrect: false },
        { id: 3, text: "NULL", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale: "NULL과 어떤 값을 산술 연산해도 그 결과는 무조건 NULL이 됩니다."
    },
    {
      id: 15,
      category: "산술 연산과 NULL",
      question: "연산 순서를 강제로 바꾸고 싶을 때 사용하는 기호는?",
      sql: null,
      options: [
        { id: 1, text: "[ ]", isCorrect: false },
        { id: 2, text: "{ }", isCorrect: false },
        { id: 3, text: "( )", isCorrect: true },
        { id: 4, text: "< >", isCorrect: false },
      ],
      rationale: "괄호를 사용하면 괄호 안의 연산이 가장 먼저 수행됩니다."
    },
    // 4부: 심화 및 필수 테크닉 (Q16~Q20)
    {
      id: 16,
      category: "심화 및 필수 테크닉",
      question: "오라클(Oracle)에서 테이블 데이터 없이 단순 계산(예: SELECT 1+1)을 하고 싶을 때 빌려 쓰는 가상 테이블은?",
      sql: "SELECT 1 + 1\nFROM ??? ;",
      options: [
        { id: 1, text: "DUMMY", isCorrect: false },
        { id: 2, text: "VIRTUAL", isCorrect: false },
        { id: 3, text: "DUAL", isCorrect: true },
        { id: 4, text: "PRACTICE", isCorrect: false },
      ],
      rationale: "DUAL 테이블은 결과가 1행인 가상의 연습장 테이블로, 오라클에서 필수적인 문법 요건을 맞추기 위해 사용합니다."
    },
    {
      id: 17,
      category: "심화 및 필수 테크닉",
      question: "특정 컬럼의 중복된 값을 제거하고 '종류'만 보고 싶을 때 SELECT 바로 뒤에 붙이는 키워드는?",
      sql: "SELECT ??? GRADE\nFROM USER;",
      options: [
        { id: 1, text: "UNIQUE", isCorrect: false },
        { id: 2, text: "DISTINCT", isCorrect: true },
        { id: 3, text: "SINGLE", isCorrect: false },
        { id: 4, text: "GROUP", isCorrect: false },
      ],
      rationale: "SELECT DISTINCT GRADE FROM USER;라고 쓰면 중복을 제거한 고유한 값만 출력됩니다."
    },
    {
      id: 18,
      category: "심화 및 필수 테크닉",
      question: "문자열 데이터(예: 이름이 'Hong'인 경우)를 감쌀 때 반드시 써야 하는 기호는?",
      sql: "SELECT * FROM USER\nWHERE NAME = 'Hong';",
      options: [
        { id: 1, text: "작은따옴표 (' ')", isCorrect: true },
        { id: 2, text: "큰따옴표 (\" \")", isCorrect: false },
        { id: 3, text: "역따옴표 (` `)", isCorrect: false },
        { id: 4, text: "따옴표 없음", isCorrect: false },
      ],
      rationale: "데이터 내용물(문자열, 날짜 등)은 작은따옴표로 감싸야 합니다."
    },
    {
      id: 19,
      category: "심화 및 필수 테크닉",
      question: "다음 중 SQL 문법에 대한 설명으로 옳은 것은?",
      sql: null,
      options: [
        { id: 1, text: "SELECT * FROM USER (세미콜론 없음)은 완벽한 문장이다.", isCorrect: false },
        { id: 2, text: "SELECT DISTINCT NAME, AGE는 NAME만 중복 제거한다.", isCorrect: false },
        { id: 3, text: "SELECT 10 / 0 FROM DUAL은 결과로 NULL을 낸다.", isCorrect: false },
        { id: 4, text: "SELECT NAME AS \"회원 이름\"은 정상적인 문법이다.", isCorrect: true },
      ],
      rationale: "별명에 공백이 있을 때 큰따옴표를 쓴 ④번이 정석입니다. ①은 세미콜론 누락, ②는 나열된 컬럼 조합 전체를 중복 제거함, ③은 0으로 나누기 에러가 발생합니다."
    },
    {
      id: 20,
      category: "심화 및 필수 테크닉",
      question: "SELECT (POINT + 100) * 2 AS \"최종 점수\" FROM USER; 쿼리의 해석으로 옳은 것은?",
      sql: "SELECT (POINT + 100) * 2 AS \"최종 점수\"\nFROM USER;",
      options: [
        { id: 1, text: "점수에 100을 더한 뒤 2를 곱하고, 그 컬럼 이름을 \"최종 점수\"라고 표시한다.", isCorrect: true },
        { id: 2, text: "점수에 2를 곱한 뒤 100을 더하고, \"최종 점수\"라는 테이블에서 가져온다.", isCorrect: false },
        { id: 3, text: "모든 유저의 POINT를 2로 바꾼다.", isCorrect: false },
        { id: 4, text: "POINT가 100인 사람만 찾아서 2를 곱한다.", isCorrect: false },
      ],
      rationale: "괄호 안의 덧셈이 먼저 수행되고 그다음 곱셈이 진행되며, AS 뒤의 별명이 결과창에 나타납니다."
    },
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
