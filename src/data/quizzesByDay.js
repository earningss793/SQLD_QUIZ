/**
 * 일차별 퀴즈 데이터. Day1.md 문항·보기·정답·해설·힌트와 동일하게 맞춤.
 * Day1.md에는 쿼리 예시 블록이 없으므로 sql/tableName은 넣지 않음.
 */

export const dayInfo = {
  1: { title: "SELECT 기초" },
  2: { title: "WHERE 절 완전 정복" },
  3: { title: "단일행 함수와 정렬 (ORDER BY)" },
  4: { title: "GROUP BY & HAVING 완전 정복" },
  5: { title: "JOIN 완전 정복" },
  6: { title: "SQLD 실전 모의고사 (1~5강)" },
  7: { title: "SQLD 실전 모의고사 2 (1~5강)" },
  8: { title: "서브쿼리와 뷰" },
  9: { title: "집합 연산자와 그룹 함수" },
  10: { title: "윈도우 함수(Window Function)" },
};

export const quizzesByDay = {
  5: [
    { id: 1, category: "개념 및 기본 원리", question: "관계형 데이터베이스(RDB)에서 테이블을 쪼개는 '정규화(Normalization)'의 목적으로 가장 적절하지 않은 것은?", options: [{ id: 1, text: "데이터의 중복을 최소화하여 저장 공간을 효율적으로 사용하기 위함이다.", isCorrect: false }, { id: 2, text: "데이터 삽입, 수정, 삭제 시 발생할 수 있는 이상(Anomaly) 현상을 방지하기 위함이다.", isCorrect: false }, { id: 3, text: "데이터의 무결성(Integrity)을 유지하기 위함이다.", isCorrect: false }, { id: 4, text: "JOIN 연산을 제거하여 무조건적인 조회 속도 향상을 꾀하기 위함이다.", isCorrect: true }], rationale: "정규화는 데이터의 정확성과 일관성을 위해 수행합니다. 테이블이 쪼개지면 조회가 필요할 때 JOIN 연산을 수행해야 하므로, 단순 조회 속도는 정규화 전보다 느려질 수도 있습니다. (속도만을 위한다면 반정규화를 하기도 합니다.)", hint: "테이블을 쪼개면 조회 시 필연적으로 JOIN이 발생합니다." },
    { id: 2, category: "개념 및 기본 원리", question: "다음 중 JOIN에 대한 설명으로 옳은 것은?", options: [{ id: 1, text: "JOIN을 수행하기 위해서는 두 테이블의 연결 컬럼명이 반드시 동일해야 한다.", isCorrect: false }, { id: 2, text: "두 테이블 간에 PK(Primary Key)와 FK(Foreign Key) 관계가 설정되어 있지 않으면 JOIN할 수 없다.", isCorrect: false }, { id: 3, text: "일반적으로 N개의 테이블을 JOIN 하려면 최소 N-1개의 JOIN 조건이 필요하다.", isCorrect: true }, { id: 4, text: "ANSI 표준 문법에서는 JOIN 조건을 WHERE 절에 기술한다.", isCorrect: false }], rationale: "① 컬럼명이 달라도 데이터 타입과 값이 호환되면 가능합니다. ② 논리적인 연관성만 있다면 FK가 없어도 JOIN 가능합니다. ④ ANSI 표준은 ON 절에 기술합니다.", hint: "기차(테이블) 3량을 연결하려면 연결고리는 몇 개가 필요할까요?" },
    { id: 3, category: "개념 및 기본 원리", question: "다음 설명에 해당하는 JOIN의 종류는?", code: "두 테이블 간의 조인 조건이 정확히 일치(=)하는 경우에만 데이터를 반환한다. 교집합의 개념과 같다.", options: [{ id: 1, text: "INNER JOIN", isCorrect: true }, { id: 2, text: "LEFT OUTER JOIN", isCorrect: false }, { id: 3, text: "CROSS JOIN", isCorrect: false }, { id: 4, text: "FULL OUTER JOIN", isCorrect: false }], rationale: "조건에 일치하는 행만 반환하는 것은 내부 조인(INNER JOIN)입니다.", hint: "가장 기본이 되는 '커플 매칭' 조인입니다." },
    { id: 4, category: "INNER JOIN과 문법", question: "다음 중 ANSI 표준 SQL 문법으로 올바르게 작성된 쿼리는?", options: [{ id: 1, text: "SELECT E.ENAME, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO;", isCorrect: false }, { id: 2, text: "SELECT E.ENAME, D.DNAME FROM EMP E INNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;", isCorrect: true }, { id: 3, text: "SELECT E.ENAME, D.DNAME FROM EMP E JOIN DEPT D WHERE E.DEPTNO = D.DEPTNO;", isCorrect: false }, { id: 4, text: "SELECT E.ENAME, D.DNAME FROM EMP E INNER JOIN DEPT D USING E.DEPTNO = D.DEPTNO;", isCorrect: false }], rationale: "①은 Oracle 전용(과거) 문법입니다. ③은 ON 대신 WHERE를 써서 틀렸습니다. ④ USING 절에는 조건식이 아니라 컬럼명만 USING (DEPTNO) 형태로 들어갑니다.", hint: "ANSI 표준은 JOIN과 ON을 짝꿍으로 사용합니다." },
    { id: 5, category: "INNER JOIN과 문법", question: "다음 SQL 문에서 에러가 발생하는 원인은?", code: "SELECT EMP.ENAME, D.DNAME\nFROM EMP E\nJOIN DEPT D ON E.DEPTNO = D.DEPTNO;", options: [{ id: 1, text: "JOIN 키워드 대신 INNER JOIN을 써야 한다.", isCorrect: false }, { id: 2, text: "DEPT 테이블에는 ENAME 컬럼이 없기 때문이다.", isCorrect: false }, { id: 3, text: "FROM 절에서 정의한 별칭(Alias) E를 사용하지 않고 원래 테이블명 EMP를 사용했기 때문이다.", isCorrect: true }, { id: 4, text: "ON 절의 조건이 잘못되었다.", isCorrect: false }], rationale: "테이블에 Alias를 부여하면, 해당 쿼리 내에서는 반드시 Alias를 사용해야 합니다. EMP.ENAME은 인식되지 않습니다.", hint: "\"별명을 지어줬으면 본명은 잊어라.\"" },
    { id: 6, category: "INNER JOIN과 문법", question: "다음 두 테이블을 조회할 때 발생하는 문제점과 해결책으로 올바른 것은?", tables: [{ name: "테이블 A (EMP)", headers: ["DEPTNO", "ENAME"], rows: [["...", "..."]] }, { name: "테이블 B (DEPT)", headers: ["DEPTNO", "DNAME"], rows: [["...", "..."]] }], code: "SELECT DEPTNO, ENAME, DNAME\nFROM EMP E\nJOIN DEPT D ON E.DEPTNO = D.DEPTNO;", options: [{ id: 1, text: "문제없음: 정상적으로 조회된다.", isCorrect: false }, { id: 2, text: "에러발생: DEPTNO 컬럼이 모호하므로 E.DEPTNO 또는 D.DEPTNO로 명시해야 한다.", isCorrect: true }, { id: 3, text: "에러발생: JOIN 대신 CROSS JOIN을 사용해야 한다.", isCorrect: false }, { id: 4, text: "에러발생: SELECT 절에는 *만 사용할 수 있다.", isCorrect: false }], rationale: "두 테이블에 공통된 이름의 컬럼(DEPTNO)이 있을 때, 소유자를 명시하지 않으면 모호성 에러가 발생합니다.", hint: "컴퓨터는 \"누구네 DEPTNO야?\"라고 묻습니다. (Column Ambiguously Defined)" },
    { id: 7, category: "INNER JOIN과 문법", question: "다음 SQL의 실행 결과 건수는?\n(테이블 A: 10건, 테이블 B: 10건, 조건: ID가 같은 것만)", code: "SELECT * FROM A CROSS JOIN B;", options: [{ id: 1, text: "10건", isCorrect: false }, { id: 2, text: "20건", isCorrect: false }, { id: 3, text: "100건", isCorrect: true }, { id: 4, text: "0건", isCorrect: false }], rationale: "CROSS JOIN은 모든 경우의 수를 곱합니다. (Cartesian Product). 10 * 10 = 100건이 출력됩니다.", hint: "CROSS JOIN은 모든 경우의 수를 곱합니다. (Cartesian Product)" },
    { id: 8, category: "OUTER JOIN과 Oracle", question: "다음 중 LEFT OUTER JOIN의 결과에 대한 설명으로 옳은 것은?", options: [{ id: 1, text: "왼쪽 테이블의 데이터는 모두 출력되고, 오른쪽 테이블에 매칭되는 데이터가 없으면 해당 컬럼은 NULL로 표시된다.", isCorrect: true }, { id: 2, text: "오른쪽 테이블의 데이터가 기준이 되어 모두 출력된다.", isCorrect: false }, { id: 3, text: "양쪽 테이블에 공통으로 존재하는 데이터만 출력된다.", isCorrect: false }, { id: 4, text: "조인 조건에 맞지 않는 데이터는 모두 삭제된다.", isCorrect: false }], rationale: "LEFT OUTER JOIN은 왼쪽 테이블을 기준으로 삼습니다.", hint: "문법 이름(LEFT)이 '주인공'의 위치를 알려줍니다." },
    { id: 9, category: "OUTER JOIN과 Oracle", question: "Oracle 전용 문법인 (+) 기호의 올바른 사용법은?", options: [{ id: 1, text: "기준이 되어 데이터를 모두 출력해야 하는 쪽에 붙인다.", isCorrect: false }, { id: 2, text: "데이터가 없어서 NULL이 생성될 수 있는(부족한) 쪽에 붙인다.", isCorrect: true }, { id: 3, text: "WHERE 절이 아닌 FROM 절에 붙인다.", isCorrect: false }, { id: 4, text: "LEFT JOIN을 하고 싶으면 왼쪽 컬럼에 붙인다.", isCorrect: false }], rationale: "Oracle 문법에서 (+)는 조인 조건 중 데이터가 부족한 쪽(NULL이 나올 쪽)에 붙입니다. ANSI 기준 LEFT JOIN이라면 오른쪽 테이블 컬럼에 붙습니다.", hint: "\"없는 쪽에 플러스(+)를 붙여서 억지로 채워준다\"고 암기하세요." },
    { id: 10, category: "OUTER JOIN과 Oracle", question: "다음 ANSI SQL을 Oracle 문법으로 변환할 때 올바른 것은?", code: "-- [ANSI]\nSELECT A.NAME, B.Team\nFROM PLAYER A \nLEFT OUTER JOIN TEAM B ON A.TEAM_ID = B.TEAM_ID;", options: [{ id: 1, text: "WHERE A.TEAM_ID = B.TEAM_ID(+)", isCorrect: true }, { id: 2, text: "WHERE A.TEAM_ID(+) = B.TEAM_ID", isCorrect: false }, { id: 3, text: "WHERE A.TEAM_ID(+) = B.TEAM_ID(+)", isCorrect: false }, { id: 4, text: "WHERE A.TEAM_ID = B.TEAM_ID", isCorrect: false }], rationale: "왼쪽(A)을 모두 출력해야 하므로, 데이터가 부족한 오른쪽(B) 테이블 컬럼 뒤에 (+)를 붙여야 합니다.", hint: "LEFT JOIN = 왼쪽이 주인 = 오른쪽이 부족함." },
    { id: 11, category: "OUTER JOIN과 Oracle", question: "다음 데이터 상황에서 결과값이 가장 많은 쿼리는?\n(회원: 100명, 구매이력: 50건-전원회원)", options: [{ id: 1, text: "SELECT * FROM 회원 INNER JOIN 구매이력 (이하생략)", isCorrect: false }, { id: 2, text: "SELECT * FROM 회원 LEFT OUTER JOIN 구매이력 (이하생략)", isCorrect: true }, { id: 3, text: "SELECT * FROM 회원 RIGHT OUTER JOIN 구매이력 (이하생략)", isCorrect: false }, { id: 4, text: "①과 ③의 결과 건수는 같다.", isCorrect: false }], rationale: "INNER JOIN: 50건 (교집합), LEFT JOIN: 100건 (회원 전체), RIGHT JOIN: 50건 (구매이력 전체). 따라서 ②번이 가장 많습니다.", hint: "①은 구매한 사람만(50명), ②는 구매 안 한 사람 포함(100명), ③은 구매이력 기준(50건)" },
    { id: 12, category: "OUTER JOIN과 Oracle", question: "Oracle의 (+) 문법으로 구현할 수 없는 조인은?", options: [{ id: 1, text: "INNER JOIN", isCorrect: false }, { id: 2, text: "LEFT OUTER JOIN", isCorrect: false }, { id: 3, text: "RIGHT OUTER JOIN", isCorrect: false }, { id: 4, text: "FULL OUTER JOIN", isCorrect: true }], rationale: "Oracle 전용 문법으로는 양쪽 모두에 (+)를 붙이는 FULL OUTER JOIN을 한 번에 수행할 수 없습니다. (UNION 연산자를 이용해야 함).", hint: "양쪽에 뿔(+)을 달 수는 없습니다." },
    { id: 13, category: "고급 조인", question: "NATURAL JOIN 사용 시 주의사항으로 옳은 것은?", options: [{ id: 1, text: "ON 절을 사용하여 구체적인 조인 조건을 명시해야 한다.", isCorrect: false }, { id: 2, text: "조인 기준이 되는 컬럼에는 테이블 별칭(Alias)을 사용할 수 없다.", isCorrect: true }, { id: 3, text: "서로 다른 이름의 컬럼끼리도 조인이 가능하다.", isCorrect: false }, { id: 4, text: "SQL Server(MSSQL)에서 가장 많이 사용하는 방식이다.", isCorrect: false }], rationale: "NATURAL JOIN은 이름과 타입이 같은 컬럼을 자동으로 찾으며, 해당 조인 컬럼 앞에는 테이블명이나 별칭 접두어를 붙이면 에러가 발생합니다.", hint: "\"우리 자연스럽게(NATURAL) 만났으니까, 니꺼 내꺼(Alias) 따지지 말자.\"" },
    { id: 14, category: "고급 조인", question: "다음 중 USING 절을 사용한 조인 쿼리 중 문법적으로 올바른 것은?", options: [{ id: 1, text: "SELECT E.ENAME, D.DEPTNO FROM EMP E JOIN DEPT D USING (E.DEPTNO = D.DEPTNO)", isCorrect: false }, { id: 2, text: "SELECT E.ENAME, DEPTNO FROM EMP E JOIN DEPT D USING (DEPTNO)", isCorrect: true }, { id: 3, text: "SELECT E.ENAME, D.DEPTNO FROM EMP E JOIN DEPT D USING (DEPTNO)", isCorrect: false }, { id: 4, text: "SELECT E.ENAME, DEPTNO FROM EMP E JOIN DEPT D ON USING (DEPTNO)", isCorrect: false }], rationale: "① 조건식이 아닌 컬럼명만 와야 함. ③ SELECT 절의 D.DEPTNO에서 별칭 사용 불가. ④ ON과 USING은 같이 쓸 수 없음.", hint: "USING 안에는 컬럼명만! 그리고 SELECT 절에서도 그 컬럼은 주인 없이(Alias 없이) 써야 합니다." },
    { id: 15, category: "고급 조인", question: "다음 SQL 문장의 조인 방식은?", code: "SELECT E.ENAME, S.GRADE\nFROM EMP E, SALGRADE S\nWHERE E.SAL BETWEEN S.LOSAL AND S.HISAL;", options: [{ id: 1, text: "EQUI JOIN", isCorrect: false }, { id: 2, text: "SELF JOIN", isCorrect: false }, { id: 3, text: "Non-EQUI JOIN", isCorrect: true }, { id: 4, text: "OUTER JOIN", isCorrect: false }], rationale: "조인 조건이 정확한 일치(=)가 아닌 범위나 부등호를 사용하는 경우를 비등가 조인(Non-EQUI JOIN)이라고 합니다.", hint: "등호(=)가 보이지 않고 범위(BETWEEN)를 체크하고 있습니다." },
    { id: 16, category: "고급 조인", question: "SELF JOIN에 대한 설명으로 가장 적절한 것은?", options: [{ id: 1, text: "자기 자신과는 조인할 수 없다.", isCorrect: false }, { id: 2, text: "반드시 테이블에 서로 다른 별칭(Alias)을 부여하여 식별해야 한다.", isCorrect: true }, { id: 3, text: "OUTER JOIN으로는 수행할 수 없다.", isCorrect: false }, { id: 4, text: "계층형 데이터(예: 부장-과장-대리)를 조회할 때 사용할 수 없다.", isCorrect: false }], rationale: "동일한 테이블을 조인하므로, 컴퓨터가 구분할 수 있도록 반드시 서로 다른 Alias(예: A, B)를 주어야 합니다.", hint: "거울을 보고 있는 나와 실제의 나를 구분하려면 이름표가 달라야 합니다." },
    { id: 17, category: "고급 조인", question: "3개의 테이블 A, B, C를 조인하려고 합니다. 올바른 JOIN 순서는? (A-B 연결, B-C 연결)", options: [{ id: 1, text: "순서는 상관없다.", isCorrect: false }, { id: 2, text: "A와 C를 먼저 조인하고 B를 조인한다.", isCorrect: false }, { id: 3, text: "A와 B를 조인한 결과에 C를 조인한다.", isCorrect: true }, { id: 4, text: "한 번의 ON 절에 3개 테이블 조건을 모두 쓴다.", isCorrect: false }], rationale: "조인은 논리적으로 두 테이블씩 차례대로 수행됩니다. 연결고리가 있는 A-B를 먼저 묶고, 그 결과(B가 포함됨)를 이용해 C와 묶습니다.", hint: "A와 B를 먼저, 그리고 그 결과와 C를." },
    { id: 18, category: "SQL 추론", question: "다음 3중 조인 쿼리 중 문법적 오류가 발생하는 것은?", options: [{ id: 1, text: "SELECT E.EMP_NAME, D.DEPT_NAME FROM EMPLOYEES E, DEPARTMENTS D WHERE E.DEPT_ID = D.DEPT_ID;", isCorrect: false }, { id: 2, text: "SELECT E.EMP_NAME, L.CITY FROM EMPLOYEES E, DEPARTMENTS D, LOCATIONS L WHERE E.DEPT_ID = D.DEPT_ID AND D.LOC_ID = L.LOC_ID;", isCorrect: false }, { id: 3, text: "SELECT E.EMP_NAME, L.CITY FROM EMPLOYEES E, DEPARTMENTS D, LOCATIONS L WHERE E.DEPT_ID = D.DEPT_ID AND E.LOC_ID = L.LOC_ID;", isCorrect: true }, { id: 4, text: "SELECT D.DEPT_NAME, L.CITY FROM DEPARTMENTS D JOIN LOCATIONS L ON D.LOC_ID = L.LOC_ID;", isCorrect: false }], rationale: "EMPLOYEES 테이블에는 LOC_ID 컬럼이 없습니다. 따라서 E.LOC_ID라는 표현은 \"부적합한 식별자\" 오류를 발생시킵니다. 반드시 DEPARTMENTS(D)를 거쳐서 D.LOC_ID를 사용해야 합니다.", hint: "사원(E) 테이블에 도시코드(LOC_ID)가 있나요? 징검다리를 건너뛰면 안 됩니다." },
    { id: 19, category: "SQL 추론", question: "다음 PRODUCTS 테이블과 ORDERS 테이블에 대해 아래 SQL을 실행했을 때, 결과 건수로 올바른 것은?", tables: [{ name: "PRODUCTS (3건)", headers: ["NAME", "PRICE"], rows: [["A", "500"], ["B", "1500"], ["C", "2500"]] }, { name: "ORDERS (6건)", headers: ["ID", "CATEGORY", "AMOUNT"], rows: [["C01", "Elec", "1200"], ["C02", "Books", "50"], ["...", "...", "..."]] }], code: "SELECT P.PRODUCT_NAME, O.AMOUNT\nFROM PRODUCTS P, ORDERS O;", options: [{ id: 1, text: "3건", isCorrect: false }, { id: 2, text: "6건", isCorrect: false }, { id: 3, text: "9건", isCorrect: false }, { id: 4, text: "18건", isCorrect: true }], rationale: "두 테이블 간의 연결 조건이 없습니다. 조인 조건이 없을 때 데이터베이스는 모든 경우의 수를 조합하는 CROSS JOIN (Cartesian Product)을 수행합니다. 3 * 6 = 18건.", hint: "WHERE 절이나 ON 절(조인 조건)이 없는 조인을 눈여겨보세요." },
    { id: 20, category: "SQL 추론", question: "다음 PRODUCTS 테이블과 가상의 PRICE_GRADE 테이블을 조인하여 가격 등급을 매기려고 합니다. SQL 실행 결과로 올바른 것은?", tables: [{ name: "PRODUCTS", headers: ["NAME", "PRICE"], rows: [["A", "500"], ["B", "1500"], ["C", "2500"]] }, { name: "PRICE_GRADE", headers: ["GRADE", "MIN", "MAX"], rows: [["Low", "0", "1000"], ["Mid", "1001", "2000"], ["High", "2001", "9999"]] }], code: "SELECT P.PRODUCT_NAME, G.GRADE\nFROM PRODUCTS P\nJOIN PRICE_GRADE G\n  ON P.PRICE BETWEEN G.MIN_PRICE AND G.MAX_PRICE;", options: [{ id: 1, text: "A: Low / B: Mid / C: High", isCorrect: true }, { id: 2, text: "A: Low / B: NULL / C: High", isCorrect: false }, { id: 3, text: "A: Low / B: Low / C: Mid", isCorrect: false }, { id: 4, text: "결과 없음 (에러 발생)", isCorrect: false }], rationale: "Non-EQUI JOIN (비등가 조인): 조인 조건이 정확히 일치(=)하지 않아도, 범위(BETWEEN) 조건에 만족하면 조인이 성립합니다. A(500)->Low, B(1500)->Mid, C(2500)->High.", hint: "조인 조건에 등호(=)가 없어도 조인이 될까요? (Non-EQUI JOIN)" },
  ],
  4: [
    { id: 1, category: "집계 함수 기초", question: "다음 중 집계 함수(Aggregate Function)에 대한 설명으로 올바르지 않은 것은?", options: [{ id: 1, text: "여러 행의 값을 입력받아 하나의 요약된 값(단일 값)을 반환한다.", isCorrect: false }, { id: 2, text: "SUM과 AVG는 숫자형 데이터에만 사용할 수 있다.", isCorrect: false }, { id: 3, text: "MAX와 MIN은 숫자뿐만 아니라 문자, 날짜 데이터에도 사용할 수 있다.", isCorrect: false }, { id: 4, text: "모든 집계 함수는 NULL 값을 포함하여 연산한다.", isCorrect: true }], rationale: "COUNT(*)를 제외한 모든 집계 함수(SUM, AVG, MAX, MIN 등)는 NULL 값을 제외(무시)하고 연산합니다.", hint: "\"NULL 처리 규칙 (매우 중요)\" 파트를 다시 확인해보세요." },
    { id: 2, category: "집계 함수 기초", question: "다음 테이블(DATA_TAB)을 참고하여 SELECT COUNT(VAL) FROM DATA_TAB;의 결과로 올바른 것은?", tableName: "DATA_TAB", headers: ["ID", "VAL"], rows: [["1", "10"], ["2", "NULL"], ["3", "20"], ["4", "NULL"], ["5", "30"]], options: [{ id: 1, text: "2", isCorrect: false }, { id: 2, text: "3", isCorrect: true }, { id: 3, text: "5", isCorrect: false }, { id: 4, text: "NULL", isCorrect: false }], rationale: "COUNT(컬럼명)은 NULL을 제외한 행의 수를 셉니다. 값이 있는 행은 ID 1, 3, 5번이므로 총 3개입니다. (COUNT(*)였다면 5가 정답입니다.)", hint: "별표(*)는 전체, 컬럼명은 NULL 제외!" },
    { id: 3, category: "집계 함수 기초", question: "AVG(COL) 함수가 내부적으로 평균을 계산하는 방식으로 올바른 것은?", options: [{ id: 1, text: "SUM(COL) / COUNT(*)", isCorrect: false }, { id: 2, text: "SUM(COL) / COUNT(COL)", isCorrect: true }, { id: 3, text: "SUM(COL) / (전체 행 개수)", isCorrect: false }, { id: 4, text: "(SUM(COL) + NULL) / COUNT(*)", isCorrect: false }], rationale: "평균을 구할 때 분모는 'NULL이 아닌 값의 개수'가 되어야 합니다. 따라서 SUM(COL)을 COUNT(COL)로 나눈 것과 같습니다.", hint: "NULL인 데이터는 분자(합계)에도, 분모(개수)에도 포함되지 않아요." },
    { id: 4, category: "집계 함수 기초", question: "다음 SQL 문장 중 문법적으로 오류가 발생하는 것은?", options: [{ id: 1, text: "SELECT MAX(HIRE_DATE) FROM EMP;", isCorrect: false }, { id: 2, text: "SELECT MIN(EMP_NAME) FROM EMP;", isCorrect: false }, { id: 3, text: "SELECT SUM(SALARY) FROM EMP WHERE SALARY > 1000;", isCorrect: false }, { id: 4, text: "SELECT DEPT_NO FROM EMP WHERE AVG(SALARY) >= 3000;", isCorrect: true }], rationale: "집계 함수(AVG)는 WHERE 절에 직접 사용할 수 없습니다. 집계 결과에 대한 조건은 HAVING 절을 사용해야 합니다.", hint: "WHERE 절은 그룹핑 전, 개별 행을 검사하는 곳입니다." },
    { id: 5, category: "집계 함수 기초", question: "SUM(A + B)와 SUM(A) + SUM(B)의 결과가 다를 수 있는 이유는 무엇인가?", options: [{ id: 1, text: "데이터 타입이 다르기 때문에", isCorrect: false }, { id: 2, text: "연산 순서와 NULL 처리 방식의 차이 때문에", isCorrect: true }, { id: 3, text: "GROUP BY 절의 유무 때문에", isCorrect: false }, { id: 4, text: "데이터베이스 종류(Oracle, MySQL)의 차이 때문에", isCorrect: false }], rationale: "SUM(A+B)는 행별로 더할 때 하나라도 NULL이면 그 행 전체가 NULL이 되어 합계에서 빠집니다. 반면 SUM(A)+SUM(B)는 각각의 합계를 구한 뒤 더하므로 NULL의 영향을 덜 받습니다.", hint: "1 + NULL = ?" },
    { id: 6, category: "GROUP BY 이해", question: "GROUP BY 절의 역할에 대한 설명으로 가장 적절한 것은?", options: [{ id: 1, text: "데이터를 정렬하기 위해 사용한다.", isCorrect: false }, { id: 2, text: "특정 컬럼을 기준으로 데이터를 그룹화하여 요약 통계를 내기 위해 사용한다.", isCorrect: true }, { id: 3, text: "두 개 이상의 테이블을 연결하기 위해 사용한다.", isCorrect: false }, { id: 4, text: "중복된 데이터를 제거하고 유니크한 값만 보기 위해 사용한다.", isCorrect: false }], rationale: "GROUP BY는 데이터를 소그룹으로 묶고 집계 함수를 통해 요약 정보를 산출하는 것이 주 목적입니다.", hint: "'팀별 회식비 정산' 비유를 떠올려보세요." },
    { id: 7, category: "GROUP BY 이해", question: "다음 SQL 쿼리가 에러를 발생시키는 이유는?", code: "SELECT 부서명, 사원명, AVG(급여)\nFROM 사원\nGROUP BY 부서명;", options: [{ id: 1, text: "GROUP BY 절에 별칭을 사용하지 않아서", isCorrect: false }, { id: 2, text: "AVG 함수는 사원명과 함께 쓸 수 없어서", isCorrect: false }, { id: 3, text: "SELECT 절의 '사원명'이 GROUP BY 절에 포함되지 않아서", isCorrect: true }, { id: 4, text: "FROM 절의 테이블 별칭이 없어서", isCorrect: false }], rationale: "GROUP BY를 사용하면 SELECT 절에는 '그룹핑 기준 컬럼(부서명)'이나 '집계 함수(AVG)'만 올 수 있습니다. 그룹화되지 않은 일반 컬럼(사원명)은 단독으로 조회할 수 없습니다.", hint: "\"마케팅팀의 평균 급여는 알 수 있지만, 마케팅팀의 '누구' 이름 하나를 찍을 순 없어요.\"" },
    { id: 8, category: "GROUP BY 이해", question: "GROUP BY 절 사용 시 주의사항으로 틀린 것은?", options: [{ id: 1, text: "SELECT 절에 정의한 별칭(Alias)을 GROUP BY 절에서 사용할 수 있다.", isCorrect: true }, { id: 2, text: "WHERE 절은 GROUP BY 절보다 먼저 실행된다.", isCorrect: false }, { id: 3, text: "여러 개의 컬럼을 기준으로 그룹화할 수 있다.", isCorrect: false }, { id: 4, text: "집계 함수를 제외한 SELECT 절의 모든 컬럼은 GROUP BY 절에 명시되어야 한다.", isCorrect: false }], rationale: "실행 순서상 GROUP BY가 SELECT보다 먼저 실행되므로, SELECT에서 만든 별칭을 GROUP BY에서 사용할 수 없습니다.", hint: "실행 순서: 프-웨-그-하-셀-오" },
    { id: 9, category: "GROUP BY 이해", question: "다음 중 '지역별' 그리고 '성별' 가입자 수를 구하는 올바른 쿼리는?", options: [{ id: 1, text: "SELECT 지역, 성별, COUNT(*) FROM 회원 GROUP BY 지역;", isCorrect: false }, { id: 2, text: "SELECT 지역, 성별, COUNT(*) FROM 회원 GROUP BY 지역, 성별;", isCorrect: true }, { id: 3, text: "SELECT 지역, COUNT(*) FROM 회원 GROUP BY 지역, 성별;", isCorrect: false }, { id: 4, text: "SELECT 성별, COUNT(*) FROM 회원 GROUP BY 지역;", isCorrect: false }], rationale: "지역과 성별 두 가지 기준을 보고 싶다면, SELECT와 GROUP BY 모두에 두 컬럼이 명시되어야 합니다.", hint: "기준이 두 개라면 GROUP BY 뒤에도 콤마(,)로 두 개를 적어야 합니다." },
    { id: 10, category: "GROUP BY 이해", question: "아래 쿼리의 실행 결과에 대한 설명으로 옳은 것은?", code: "SELECT REGION, COUNT(*)\nFROM SUBSCRIPTIONS\nGROUP BY REGION;", options: [{ id: 1, text: "전체 구독자의 총합 1개 행만 출력된다.", isCorrect: false }, { id: 2, text: "각 REGION(지역)별로 행이 나뉘고, 해당 지역의 구독자 수가 계산된다.", isCorrect: true }, { id: 3, text: "REGION 컬럼에 중복된 값이 그대로 모두 출력된다.", isCorrect: false }, { id: 4, text: "에러가 발생한다.", isCorrect: false }], rationale: "GROUP BY REGION을 썼으므로 지역의 종류만큼 행이 생기고, COUNT(*)는 각 지역 그룹 내의 행 개수를 나타냅니다.", hint: "서울 100명, 부산 50명... 이런 식으로 나옵니다." },
    { id: 11, category: "HAVING vs WHERE", question: "WHERE 절과 HAVING 절의 가장 큰 차이점은 무엇인가?", options: [{ id: 1, text: "WHERE는 문자를 필터링하고 HAVING은 숫자를 필터링한다.", isCorrect: false }, { id: 2, text: "WHERE는 정렬을 하고 HAVING은 그룹핑을 한다.", isCorrect: false }, { id: 3, text: "WHERE는 그룹핑 전 개별 행을, HAVING은 그룹핑 후 집계 결과를 필터링한다.", isCorrect: true }, { id: 4, text: "차이가 없으며 서로 바꿔 써도 무방하다.", isCorrect: false }], rationale: "가장 핵심적인 차이입니다. 시점(전/후)과 대상(개별 행/그룹)이 다릅니다.", hint: "사과 선별 작업 비유! (썩은 사과 골라내기 vs 무게 미달 박스 골라내기)" },
    { id: 12, category: "HAVING vs WHERE", question: "\"부서별 평균 급여가 500 이상인 부서\"를 조회하려고 한다. 빈칸에 들어갈 알맞은 절은?", code: "SELECT DEPT_ID, AVG(SALARY)\nFROM EMP\nGROUP BY DEPT_ID\n(      ) AVG(SALARY) >= 500;", options: [{ id: 1, text: "WHERE", isCorrect: false }, { id: 2, text: "HAVING", isCorrect: true }, { id: 3, text: "ORDER BY", isCorrect: false }, { id: 4, text: "LIKE", isCorrect: false }], rationale: "AVG(SALARY)는 집계 함수의 결과입니다. 집계 결과에 조건을 걸 때는 반드시 HAVING을 써야 합니다.", hint: "집계 함수 조건은 무조건 HAVING!" },
    { id: 13, category: "HAVING vs WHERE", question: "다음 중 쿼리 실행 순서상 가장 늦게 처리되는 것은?", options: [{ id: 1, text: "WHERE", isCorrect: false }, { id: 2, text: "GROUP BY", isCorrect: false }, { id: 3, text: "HAVING", isCorrect: true }, { id: 4, text: "FROM", isCorrect: false }], rationale: "보기 중 순서는 FROM -> WHERE -> GROUP BY -> HAVING 입니다.", hint: "프-웨-그-하..." },
    { id: 14, category: "HAVING vs WHERE", question: "아래 쿼리가 에러가 나는 이유는?", code: "SELECT REGION, SUM(REVENUE)\nFROM SUBSCRIPTIONS\nHAVING SUM(REVENUE) > 10000\nGROUP BY REGION;", options: [{ id: 1, text: "SUM 함수를 썼기 때문", isCorrect: false }, { id: 2, text: "GROUP BY와 HAVING의 순서가 바뀌었기 때문", isCorrect: true }, { id: 3, text: "SELECT 절에 REVENUE가 없어서", isCorrect: false }, { id: 4, text: "FROM 절 뒤에는 바로 SELECT가 와야 해서", isCorrect: false }], rationale: "문법 작성 순서상 GROUP BY가 먼저 나오고 그 뒤에 HAVING이 나와야 합니다.", hint: "그룹을 먼저 만들어야(GROUP BY), 그 그룹을 거를 수(HAVING) 있죠." },
    { id: 15, category: "HAVING vs WHERE", question: "마케팅 실무 비유 중 'WHERE' 절에 해당하는 작업은?", options: [{ id: 1, text: "캠페인별로 성과를 묶어서 본다.", isCorrect: false }, { id: 2, text: "평균 클릭률이 5% 미만인 캠페인 그룹을 제외한다.", isCorrect: false }, { id: 3, text: "탈퇴한 회원의 데이터를 미리 제외하고 데이터를 가져온다.", isCorrect: true }, { id: 4, text: "캠페인별 총 매출액을 계산한다.", isCorrect: false }], rationale: "①, ④는 GROUP BY/집계, ②는 HAVING에 해당합니다. 원본 데이터에서 미리 조건을 걸어 가져오는 ③이 WHERE입니다.", hint: "데이터를 '가져올 때' 거르는 작업입니다." },
    { id: 16, category: "실행 순서와 심화", question: "SQL 쿼리의 논리적 실행 순서(Logical Execution Order)를 올바르게 나열한 것은?", options: [{ id: 1, text: "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY", isCorrect: false }, { id: 2, text: "FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY", isCorrect: false }, { id: 3, text: "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY", isCorrect: true }, { id: 4, text: "FROM -> WHERE -> GROUP BY -> SELECT -> HAVING -> ORDER BY", isCorrect: false }], rationale: "암기 필수! 프(FROM)-웨(WHERE)-그(GROUP BY)-하(HAVING)-셀(SELECT)-오(ORDER BY)", hint: "FWGHSO" },
    { id: 17, category: "실행 순서와 심화", question: "다음 중 SELECT 절에서 정의한 별칭(Alias)을 사용할 수 있는 유일한 절은?", options: [{ id: 1, text: "WHERE", isCorrect: false }, { id: 2, text: "GROUP BY", isCorrect: false }, { id: 3, text: "HAVING", isCorrect: false }, { id: 4, text: "ORDER BY", isCorrect: true }], rationale: "실행 순서상 SELECT가 가장 마지막에 가까우므로, 그보다 더 뒤에 실행되는 ORDER BY에서만 별칭을 알아볼 수 있습니다.", hint: "맨 마지막에 줄 세우기 할 때만 별명을 부를 수 있어요." },
    { id: 18, category: "실행 순서와 심화", question: "다음 쿼리의 실행 결과 해석으로 올바른 것은?", code: "SELECT PLAN, AVG(PRICE)\nFROM PLANS\nWHERE IS_ACTIVE = 'Y'\nGROUP BY PLAN\nHAVING AVG(PRICE) >= 10000;", options: [{ id: 1, text: "모든 플랜의 평균 가격을 구한 뒤, 활성화된('Y') 것만 남긴다.", isCorrect: false }, { id: 2, text: "활성화된 플랜들만 가지고 평균을 낸 뒤, 그 평균이 1만 원 이상인 플랜만 보여준다.", isCorrect: true }, { id: 3, text: "평균 가격이 1만 원 이상인 플랜을 먼저 찾고, 그중 활성화된 것을 찾는다.", isCorrect: false }, { id: 4, text: "활성화 여부와 상관없이 평균 가격이 1만 원 이상인 것을 찾는다.", isCorrect: false }], rationale: "순서: WHERE(활성화된 것만 남김) -> GROUP BY(플랜별로 묶음) -> HAVING(평균 1만 원 이상 필터링).", hint: "WHERE가 1차 관문, HAVING이 2차 관문입니다." },
    { id: 19, category: "실행 순서와 심화", question: "COUNT(*)와 COUNT(컬럼명)의 결과가 같으려면 어떤 조건이 필요한가?", options: [{ id: 1, text: "해당 컬럼에 중복된 값이 없어야 한다.", isCorrect: false }, { id: 2, text: "해당 컬럼에 NULL 값이 하나도 없어야 한다.", isCorrect: true }, { id: 3, text: "해당 컬럼이 숫자형이어야 한다.", isCorrect: false }, { id: 4, text: "테이블의 행 개수가 0개여야 한다.", isCorrect: false }], rationale: "COUNT(*)는 NULL 포함 전체, COUNT(컬럼)은 NULL 제외입니다. 따라서 NULL이 하나도 없다면 두 값은 같습니다.", hint: "NULL이 없으면 뺄 게 없으니까요." },
    { id: 20, category: "실행 순서와 심화", question: "아래 SQL에서 ORDER BY 절에 들어갈 수 없는 것은?", code: "SELECT DEPT_NAME, SUM(SALARY) AS TOTAL_SAL\nFROM EMP\nGROUP BY DEPT_NAME;", options: [{ id: 1, text: "ORDER BY DEPT_NAME", isCorrect: false }, { id: 2, text: "ORDER BY SUM(SALARY)", isCorrect: false }, { id: 3, text: "ORDER BY TOTAL_SAL", isCorrect: false }, { id: 4, text: "ORDER BY AVG(SALARY) (단, SELECT 절에 AVG는 없음)", isCorrect: false }, { id: 5, text: "ORDER BY EMP_NAME (단, EMP_NAME은 그룹핑되지 않음)", isCorrect: true }], rationale: "GROUP BY가 된 상태에서는 개별 행의 정보인 EMP_NAME으로 정렬할 수 없습니다. 하지만 ①,②,③은 물론이고, ④처럼 SELECT에 없더라도 집계 함수(AVG)를 기준으로 정렬하는 것은 가능합니다.", hint: "그룹핑된 상태에서 개별 사원 이름으로 줄을 세울 순 없겠죠?" },
  ],
  3: [
    { id: 1, category: "SQL 실행 순서", question: "다음 중 SQL 실행 순서로 올바른 것은?", options: [{ id: 1, text: "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY", isCorrect: false }, { id: 2, text: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY", isCorrect: true }, { id: 3, text: "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY", isCorrect: false }, { id: 4, text: "SELECT → FROM → ORDER BY → WHERE → GROUP BY → HAVING", isCorrect: false }], rationale: "SQL은 데이터를 먼저 가져오고(FROM), 필터링하고(WHERE), 그룹화한 뒤(GROUP BY/HAVING), 출력할 컬럼을 정하고(SELECT), 마지막에 정렬(ORDER BY)합니다.", hint: "\"프웨구해셀오\"라고 앞 글자만 따서 외워보세요!" },
    { id: 2, category: "정렬 (ORDER BY)", question: "다음 중 ORDER BY 절에 대한 설명으로 틀린 것은?", options: [{ id: 1, text: "기본 정렬 방식은 오름차순(ASC)이다.", isCorrect: false }, { id: 2, text: "SELECT 절에 정의한 별칭(Alias)을 사용할 수 있다.", isCorrect: false }, { id: 3, text: "SELECT 절에 없는 컬럼이라도 정렬 기준으로 사용할 수 있다.", isCorrect: false }, { id: 4, text: "항상 SQL 문장의 가장 처음에 위치해야 한다.", isCorrect: true }], rationale: "ORDER BY는 항상 SQL 문장의 가장 마지막에 위치합니다.", hint: "줄을 세우는 건 모든 작업이 다 끝난 '마지막' 단계예요." },
    { id: 3, category: "정렬 (ORDER BY)", question: "Oracle 환경에서 ORDER BY SAL DESC를 실행했을 때, SAL 컬럼이 NULL인 데이터의 위치는?", options: [{ id: 1, text: "가장 먼저 출력된다.", isCorrect: true }, { id: 2, text: "가장 나중에 출력된다.", isCorrect: false }, { id: 3, text: "무작위로 출력된다.", isCorrect: false }, { id: 4, text: "에러가 발생한다.", isCorrect: false }], rationale: "Oracle은 NULL을 '무한대(가장 큰 값)'로 취급합니다. 따라서 내림차순(DESC) 정렬 시 가장 큰 값인 NULL이 맨 처음에 옵니다.", hint: "Oracle에서 NULL은 대장(가장 큰 값)입니다!" },
    { id: 4, category: "정렬 (ORDER BY)", question: "SQL Server 환경에서 ORDER BY SAL ASC를 실행했을 때, NULL 값의 위치는?", options: [{ id: 1, text: "가장 먼저 출력된다.", isCorrect: true }, { id: 2, text: "가장 나중에 출력된다.", isCorrect: false }, { id: 3, text: "오름차순이므로 중간에 출력된다.", isCorrect: false }, { id: 4, text: "출력되지 않는다.", isCorrect: false }], rationale: "SQL Server는 NULL을 '가장 작은 값'으로 취급합니다. 따라서 오름차순(ASC) 시 맨 처음에 옵니다.", hint: "SQL Server에서 NULL은 꼬맹이(가장 작은 값)입니다." },
    { id: 5, category: "단일행 함수 (문자형)", question: "다음 쿼리의 결과로 올바른 것은?\nSELECT SUBSTR('SQLMaster', 4, 3) FROM DUAL; (Oracle 기준)", options: [{ id: 1, text: "SQL", isCorrect: false }, { id: 2, text: "Mas", isCorrect: true }, { id: 3, text: "Master", isCorrect: false }, { id: 4, text: "ster", isCorrect: false }], rationale: "4번째 글자인 'M'부터 시작해서 3글자를 가져오므로 'Mas'가 됩니다.", hint: "(시작위치, 글자수)를 기억하세요!" },
    { id: 6, category: "단일행 함수 (숫자형)", question: "다음 중 숫자를 처리하는 함수와 결과가 잘못 연결된 것은?", options: [{ id: 1, text: "ROUND(12.5, 0) → 13", isCorrect: false }, { id: 2, text: "FLOOR(12.9) → 12", isCorrect: false }, { id: 3, text: "CEIL(-1.2) → -2", isCorrect: true }, { id: 4, text: "TRUNC(12.56, 1) → 12.5", isCorrect: false }], rationale: "CEIL은 나보다 크거나 같은 최소 정수입니다. -1.2보다 큰 정수 중 가장 작은 값은 -1입니다.", hint: "음수 축에서는 -1이 -1.2보다 '큰' 값이라는 점 주의!" },
    { id: 7, category: "단일행 함수 (날짜형)", question: "현재 시간이 2026년 2월 11일 오후 2시일 때, 3시간 뒤를 구하는 식으로 옳은 것은? (Oracle)", options: [{ id: 1, text: "SYSDATE + 3", isCorrect: false }, { id: 2, text: "SYSDATE + 3/24", isCorrect: true }, { id: 3, text: "SYSDATE + 3/60", isCorrect: false }, { id: 4, text: "SYSDATE + 180", isCorrect: false }], rationale: "날짜에 숫자를 더하면 '일' 단위로 계산됩니다. 3시간은 하루(24시간) 중 3시간이므로 3/24를 더해야 합니다.", hint: "1일 = 24시간, 1시간 = 60분!" },
    { id: 8, category: "단일행 함수 (NULL 관련)", question: "다음 중 NULLIF(10, 10)의 결과값은?", options: [{ id: 1, text: "10", isCorrect: false }, { id: 2, text: "0", isCorrect: false }, { id: 3, text: "NULL", isCorrect: true }, { id: 4, text: "에러 발생", isCorrect: false }], rationale: "NULLIF(A, B)는 두 값이 같으면 NULL을, 다르면 A를 반환합니다.", hint: "\"같으면 널(NULL)로 만들어버려!\"" },
    { id: 9, category: "단일행 함수 (NULL 관련)", question: "COALESCE(NULL, NULL, 'Success', 'Fail')의 결과값은?", options: [{ id: 1, text: "NULL", isCorrect: false }, { id: 2, text: "Success", isCorrect: true }, { id: 3, text: "Fail", isCorrect: false }, { id: 4, text: "Success, Fail", isCorrect: false }], rationale: "COALESCE는 인자 리스트 중 NULL이 아닌 첫 번째 값을 반환합니다.", hint: "\"처음으로 나타나는 진짜 값을 찾아라!\"" },
    { id: 10, category: "단일행 함수 (NULL 관련)", question: "Oracle에서 NVL2(COMM, 'A', 'B') 함수에 대한 설명으로 옳은 것은?", options: [{ id: 1, text: "COMM이 NULL이면 'A', 아니면 'B'를 반환한다.", isCorrect: false }, { id: 2, text: "COMM이 NULL이 아니면 'A', NULL이면 'B'를 반환한다.", isCorrect: true }, { id: 3, text: "COMM과 'A'가 같으면 'B'를 반환한다.", isCorrect: false }, { id: 4, text: "COMM이 'A'이면 NULL을 반환한다.", isCorrect: false }], rationale: "NVL2(대상, NotNull일때, Null일때) 순서입니다.", hint: "NVL은 인자가 2개, NVL2는 인자가 3개!" },
    { id: 11, category: "단일행 함수 (문자형)", question: "다음 중 문자를 대문자로 변환하는 함수는?", options: [{ id: 1, text: "LOWER", isCorrect: false }, { id: 2, text: "UPPER", isCorrect: true }, { id: 3, text: "LENGTH", isCorrect: false }, { id: 4, text: "CONCAT", isCorrect: false }], rationale: "UPPER는 대문자, LOWER는 소문자로 변환합니다.", hint: "Up(위로/크게), Low(아래로/작게)." },
    { id: 12, category: "산술 연산과 NULL", question: "SELECT 10 + NULL FROM DUAL;의 결과는?", options: [{ id: 1, text: "10", isCorrect: false }, { id: 2, text: "0", isCorrect: false }, { id: 3, text: "NULL", isCorrect: true }, { id: 4, text: "에러", isCorrect: false }], rationale: "NULL과의 산술 연산 결과는 무조건 NULL입니다.", hint: "NULL은 블랙홀과 같습니다. 모든 걸 NULL로 빨아들여요." },
    { id: 13, category: "기타 함수 (CASE)", question: "다음 중 CASE 문의 문법으로 올바르지 않은 것은?", options: [{ id: 1, text: "CASE WHEN 조건 THEN 결과 END", isCorrect: false }, { id: 2, text: "CASE 컬럼 WHEN 값 THEN 결과 ELSE 결과 END", isCorrect: false }, { id: 3, text: "CASE WHEN 조건 THEN 결과 ELSE 결과 END", isCorrect: false }, { id: 4, text: "IF 조건 THEN 결과 ELSE 결과 END", isCorrect: true }], rationale: "SQL에서는 IF 대신 CASE 문을 사용합니다. (절차형 언어인 PL/SQL에서는 IF 사용 가능)", hint: "SQL의 조건 분기는 무조건 CASE!" },
    { id: 14, category: "정렬 (ORDER BY)", question: "ORDER BY 1, 2 DESC에서 '1'과 '2'가 의미하는 것은?", options: [{ id: 1, text: "상수 1과 2를 정렬한다.", isCorrect: false }, { id: 2, text: "SELECT 절에 명시된 첫 번째 컬럼과 두 번째 컬럼을 의미한다.", isCorrect: true }, { id: 3, text: "데이터의 첫 번째 행과 두 번째 행을 의미한다.", isCorrect: false }, { id: 4, text: "아무런 의미가 없는 문법 오류다.", isCorrect: false }], rationale: "ORDER BY 절에서는 컬럼의 순서 번호를 사용할 수 있습니다.", hint: "첫 번째 컬럼으로 먼저 줄 세우고, 같으면 두 번째 컬럼으로!" },
    { id: 15, category: "단일행 함수 (문자형)", question: "다음 중 문자열의 길이를 반환하는 함수로 짝지어진 것은? (Oracle, SQL Server 순)", options: [{ id: 1, text: "LENGTH, LEN", isCorrect: true }, { id: 2, text: "LEN, LENGTH", isCorrect: false }, { id: 3, text: "SIZE, LENGTH", isCorrect: false }, { id: 4, text: "LENGTH, SIZE", isCorrect: false }], rationale: "Oracle은 LENGTH, SQL Server는 LEN을 사용합니다.", hint: "SQL Server는 좀 더 짧게(LEN) 씁니다." },
    { id: 16, category: "정렬 (ORDER BY)", question: "SELECT ENAME FROM EMP ORDER BY HIREDATE; 쿼리는 실행 가능한가?", options: [{ id: 1, text: "가능하다.", isCorrect: true }, { id: 2, text: "SELECT 절에 HIREDATE가 없으므로 불가능하다.", isCorrect: false }, { id: 3, text: "GROUP BY가 없어서 불가능하다.", isCorrect: false }, { id: 4, text: "반드시 DESC를 써야 실행 가능하다.", isCorrect: false }], rationale: "일반 SELECT 문에서 ORDER BY 절에는 SELECT 절에 없는 컬럼을 사용할 수 있습니다.", hint: "화면엔 이름만 보여도, 뒤에서는 입사일 순으로 서 있을 수 있죠." },
    { id: 17, category: "단일행 함수 (숫자형)", question: "MOD(15, 4)의 결과값은?", options: [{ id: 1, text: "3", isCorrect: true }, { id: 2, text: "4", isCorrect: false }, { id: 3, text: "1", isCorrect: false }, { id: 4, text: "0", isCorrect: false }], rationale: "15를 4로 나누면 몫은 3이고 나머지는 3입니다. MOD는 나머지를 구하는 함수입니다.", hint: "15 = (4 * 3) + 3" },
    { id: 18, category: "단일행 함수 (형변환)", question: "다음 중 명시적 형변환 함수가 아닌 것은?", options: [{ id: 1, text: "TO_CHAR", isCorrect: false }, { id: 2, text: "TO_DATE", isCorrect: false }, { id: 3, text: "CAST", isCorrect: false }, { id: 4, text: "CONCAT", isCorrect: true }], rationale: "CONCAT은 문자열을 연결하는 함수입니다. 형변환 함수는 타입을 바꾸는 기능을 합니다.", hint: "TO_~ 로 시작하면 대부분 형변환 함수입니다." },
    { id: 19, category: "단일행 함수 (숫자형)", question: "SELECT SIGN(-50) FROM DUAL;의 결과는?", options: [{ id: 1, text: "50", isCorrect: false }, { id: 2, text: "-50", isCorrect: false }, { id: 3, text: "-1", isCorrect: true }, { id: 4, text: "0", isCorrect: false }], rationale: "SIGN 함수는 양수면 1, 음수면 -1, 0이면 0을 반환합니다.", hint: "숫자의 '부호'만 알려주는 함수입니다." },
    { id: 20, category: "단일행 함수 (NULL 관련)", question: "다음 쿼리의 실행 결과로 알맞은 것은? (Oracle 기준)\nSELECT NVL(NULLIF('A', 'A'), 'Empty') FROM DUAL;", options: [{ id: 1, text: "A", isCorrect: false }, { id: 2, text: "NULL", isCorrect: false }, { id: 3, text: "Empty", isCorrect: true }, { id: 4, text: "에러 발생", isCorrect: false }], rationale: "중첩 함수입니다. 안쪽 NULLIF('A', 'A')가 NULL을 반환하고, NVL(NULL, 'Empty')가 실행되어 최종적으로 'Empty'가 출력됩니다.", hint: "괄호 안쪽부터 하나씩 해결하세요!" },
  ],
  1: [
    { id: 1, category: "데이터베이스 구조", question: "데이터베이스의 '테이블(Table)'을 엑셀에 비유했을 때 가장 적절한 것은?", options: [{ id: 1, text: "데이터가 저장되는 '시트(Sheet)'", isCorrect: true }, { id: 2, text: "데이터의 속성을 나타내는 '열(Column)'", isCorrect: false }, { id: 3, text: "실제 데이터 한 줄인 '행(Row)'", isCorrect: false }, { id: 4, text: "계산을 수행하는 '함수(Function)'", isCorrect: false }], rationale: "테이블은 데이터가 격자 형태로 저장되는 가장 기본적인 공간으로, 엑셀의 시트와 대응됩니다.", hint: "전체 데이터가 담긴 '그릇'을 생각해보세요." },
    { id: 2, category: "기초 문법", question: "SQL 문법에서 \"어디로부터 가져올 것인가\"를 지정하는 키워드는?", options: [{ id: 1, text: "SELECT", isCorrect: false }, { id: 2, text: "FROM", isCorrect: true }, { id: 3, text: "WHERE", isCorrect: false }, { id: 4, text: "INTO", isCorrect: false }], rationale: "SELECT는 가져올 항목을, FROM은 그 데이터가 들어있는 테이블을 지정합니다.", hint: "\"가져와(SELECT) ~로부터(FROM)\" 순서를 기억하세요." },
    { id: 3, category: "전체 조회", question: "SELECT * FROM USER; 쿼리에서 아스테리스크(*)의 의미로 옳은 것은?", options: [{ id: 1, text: "데이터의 첫 번째 행만 가져온다.", isCorrect: false }, { id: 2, text: "테이블 내의 모든 컬럼(열)을 가져온다.", isCorrect: true }, { id: 3, text: "중복된 데이터를 제외하고 가져온다.", isCorrect: false }, { id: 4, text: "테이블의 이름만 조회한다.", isCorrect: false }], rationale: "*은 '모든 것(All)'을 의미하여 해당 테이블의 모든 컬럼을 한꺼번에 조회할 때 사용합니다.", hint: "'All'을 상징하는 기호를 떠올려 보세요." },
    { id: 4, category: "기초 문법", question: "여러 개의 특정 컬럼(예: 이름, 나이)을 조회할 때 컬럼명 사이에 사용하는 기호는?", options: [{ id: 1, text: "마침표 (.)", isCorrect: false }, { id: 2, text: "세미콜론 (;)", isCorrect: false }, { id: 3, text: "콤마 (,)", isCorrect: true }, { id: 4, text: "콜론 (:)", isCorrect: false }], rationale: "SELECT NAME, AGE FROM USER;와 같이 여러 컬럼을 구분할 때는 콤마를 사용합니다.", hint: "나열할 때 쓰는 일반적인 문장 부호와 같습니다." },
    { id: 5, category: "기초 문법", question: "다음 중 SQL 문장의 끝을 알리는 '마침표' 역할을 하며, 생략 시 실행되지 않는 것은?", options: [{ id: 1, text: ":", isCorrect: false }, { id: 2, text: "/", isCorrect: false }, { id: 3, text: ".", isCorrect: false }, { id: 4, text: ";", isCorrect: true }], rationale: "SQL 문장은 반드시 세미콜론(;)으로 끝나야 명령이 완료된 것으로 인식됩니다.", hint: "문장의 마무리를 짓는 기호입니다." },
    { id: 6, category: "별명(Alias)과 대소문자 규칙", question: "컬럼에 별명을 붙일 때 가장 권장되는(가독성이 좋은) 키워드는?", options: [{ id: 1, text: "IS", isCorrect: false }, { id: 2, text: "AS", isCorrect: true }, { id: 3, text: "LIKE", isCorrect: false }, { id: 4, text: "TO", isCorrect: false }], rationale: "컬럼명 AS 별명 형식이 별명임을 명시적으로 보여주어 가장 추천되는 방식입니다.", hint: "'~로서'라는 뜻의 영어 단어를 생각해보세요." },
    { id: 7, category: "별명(Alias)과 대소문자 규칙", question: "별명(Alias)에 '공백'이 포함된 경우(예: 회원 이름) 반드시 사용해야 하는 기호는?", options: [{ id: 1, text: "작은따옴표 (' ')", isCorrect: false }, { id: 2, text: "큰따옴표 (\" \")", isCorrect: true }, { id: 3, text: "대괄호 ([ ])", isCorrect: false }, { id: 4, text: "역따옴표 ( )", isCorrect: false }], rationale: "별명에 공백이나 특수문자가 있다면 큰따옴표로 감싸야 하나의 이름으로 인식합니다.", hint: "\"이름표는 크게(Big name tag)\" 붙이세요!" },
    { id: 8, category: "별명(Alias)과 대소문자 규칙", question: "SQL의 대소문자 구별에 대한 설명 중 틀린 것은?", options: [{ id: 1, text: "SELECT와 select는 동일하게 작동한다.", isCorrect: false }, { id: 2, text: "테이블 명은 대소문자를 가리지 않는 경우가 많다.", isCorrect: false }, { id: 3, text: "저장된 데이터 값 'HONG'과 'hong'은 같은 데이터로 취급된다.", isCorrect: true }, { id: 4, text: "키워드(SELECT, FROM)는 대문자로 쓰는 것이 관례적으로 보기 좋다.", isCorrect: false }], rationale: "SQL 문법 키워드는 대소문자를 가리지 않지만, 테이블 안에 들어있는 실제 '데이터 값'은 대소문자를 엄격히 구별합니다.", hint: "\"명령어는 관대하지만, 알맹이(데이터)는 꼼꼼하다\"고 기억하세요." },
    { id: 9, category: "별명(Alias)과 대소문자 규칙", question: "SELECT NAME 이름 FROM USER;와 같이 AS 없이 별명을 붙일 수 있는가?", options: [{ id: 1, text: "가능하다. 한 칸 띄우기만 하면 된다.", isCorrect: true }, { id: 2, text: "불가능하다. 반드시 AS를 써야 한다.", isCorrect: false }, { id: 3, text: "오직 숫자 별명일 때만 가능하다.", isCorrect: false }, { id: 4, text: "테이블 이름에만 가능하다.", isCorrect: false }], rationale: "AS는 생략 가능하며, 띄어쓰기만으로도 별명을 부여할 수 있습니다.", hint: "실습 예시 문법을 다시 한번 살펴보세요." },
    { id: 10, category: "별명(Alias)과 대소문자 규칙", question: "다음 중 문법적으로 틀린 별명 부여 방식은?", options: [{ id: 1, text: "SELECT NAME AS 이름", isCorrect: false }, { id: 2, text: "SELECT NAME \"이 름\"", isCorrect: false }, { id: 3, text: "SELECT NAME AS '이름'", isCorrect: true }, { id: 4, text: "SELECT NAME 별명", isCorrect: false }], rationale: "별명에는 작은따옴표(')를 쓰지 않습니다. 작은따옴표는 데이터 값을 감쌀 때 사용합니다.", hint: "작은따옴표는 '내용물' 전용입니다." },
    { id: 11, category: "산술 연산과 NULL", question: "SQL에서 사칙연산 우선순위가 가장 낮은 것은?", options: [{ id: 1, text: "* (곱하기)", isCorrect: false }, { id: 2, text: "/ (나누기)", isCorrect: false }, { id: 3, text: "+ (더하기)", isCorrect: true }, { id: 4, text: "( ) (괄호)", isCorrect: false }], rationale: "곱하기와 나누기가 먼저 계산되고, 더하기와 빼기는 나중에 계산됩니다.", hint: "초등 수학 산술 순위와 같습니다." },
    { id: 12, category: "산술 연산과 NULL", question: "SELECT 100 + 200 * 2 FROM DUAL; 의 결과값은?", options: [{ id: 1, text: "600", isCorrect: false }, { id: 2, text: "500", isCorrect: true }, { id: 3, text: "400", isCorrect: false }, { id: 4, text: "300", isCorrect: false }], rationale: "200 * 2가 먼저 계산되어 400이 되고, 여기에 100을 더해 500이 됩니다.", hint: "곱셈이 먼저입니다!" },
    { id: 13, category: "산술 연산과 NULL", question: "데이터베이스에서 NULL의 의미로 가장 적절한 것은?", options: [{ id: 1, text: "숫자 0", isCorrect: false }, { id: 2, text: "공백 문자 (' ')", isCorrect: false }, { id: 3, text: "알 수 없는 값 (Unknown / Missing)", isCorrect: true }, { id: 4, text: "테이블의 끝 (End of Table)", isCorrect: false }], rationale: "NULL은 0도 공백도 아닌, 값이 존재하지 않거나 무엇인지 모르는 상태를 뜻합니다.", hint: "\"정해지지 않은 무(無)의 상태\"라고 이해하세요." },
    { id: 14, category: "산술 연산과 NULL", question: "SELECT POINT * 10 FROM USER; 실행 시, POINT가 NULL인 행의 결과값은?", options: [{ id: 1, text: "0", isCorrect: false }, { id: 2, text: "10", isCorrect: false }, { id: 3, text: "NULL", isCorrect: true }, { id: 4, text: "에러 발생", isCorrect: false }], rationale: "NULL과 어떤 값을 산술 연산해도 그 결과는 무조건 NULL이 됩니다.", hint: "\"NULL이랑 놀면 다 망한다(NULL이 된다)\"는 명언(?)을 기억하세요." },
    { id: 15, category: "산술 연산과 NULL", question: "연산 순서를 강제로 바꾸고 싶을 때 사용하는 기호는?", options: [{ id: 1, text: "[ ]", isCorrect: false }, { id: 2, text: "{ }", isCorrect: false }, { id: 3, text: "( )", isCorrect: true }, { id: 4, text: "< >", isCorrect: false }], rationale: "괄호를 사용하면 괄호 안의 연산이 가장 먼저 수행됩니다.", hint: "수학에서의 괄호 역할과 동일합니다." },
    { id: 16, category: "심화 및 필수 테크닉", question: "오라클(Oracle)에서 테이블 데이터 없이 단순 계산(예: SELECT 1+1)을 하고 싶을 때 빌려 쓰는 가상 테이블은?", options: [{ id: 1, text: "DUMMY", isCorrect: false }, { id: 2, text: "VIRTUAL", isCorrect: false }, { id: 3, text: "DUAL", isCorrect: true }, { id: 4, text: "PRACTICE", isCorrect: false }], rationale: "DUAL 테이블은 결과가 1행인 가상의 연습장 테이블로, 오라클에서 필수적인 문법 요건을 맞추기 위해 사용합니다.", hint: "\"이중적인(Dual)\" 느낌의 짧은 이름을 떠올리세요." },
    { id: 17, category: "심화 및 필수 테크닉", question: "특정 컬럼의 중복된 값을 제거하고 '종류'만 보고 싶을 때 SELECT 바로 뒤에 붙이는 키워드는?", options: [{ id: 1, text: "UNIQUE", isCorrect: false }, { id: 2, text: "DISTINCT", isCorrect: true }, { id: 3, text: "SINGLE", isCorrect: false }, { id: 4, text: "GROUP", isCorrect: false }], rationale: "SELECT DISTINCT GRADE FROM USER;라고 쓰면 중복을 제거한 고유한 값만 출력됩니다.", hint: "\"뚜렷한, 별개의\"라는 뜻의 영어 단어입니다." },
    { id: 18, category: "심화 및 필수 테크닉", question: "문자열 데이터(예: 이름이 Hong인 경우)를 감쌀 때 반드시 써야 하는 기호는?", options: [{ id: 1, text: "작은따옴표 (' ')", isCorrect: true }, { id: 2, text: "큰따옴표 (\" \")", isCorrect: false }, { id: 3, text: "역따옴표 ( )", isCorrect: false }, { id: 4, text: "따옴표 없음", isCorrect: false }], rationale: "데이터 내용물(문자열, 날짜 등)은 작은따옴표로 감싸야 합니다.", hint: "\내용은 작게(Small content)\!" },
    { id: 19, category: "심화 및 필수 테크닉", question: "다음 중 SQL 문법에 대한 설명으로 옳은 것은?", options: [{ id: 1, text: "SELECT * FROM USER (세미콜론 없음)은 완벽한 문장이다.", isCorrect: false }, { id: 2, text: "SELECT DISTINCT NAME, AGE는 NAME만 중복 제거한다.", isCorrect: false }, { id: 3, text: "SELECT 10 / 0 FROM DUAL은 결과로 NULL을 낸다.", isCorrect: false }, { id: 4, text: "SELECT NAME AS \"회원 이름\"은 정상적인 문법이다.", isCorrect: true }], rationale: "별명에 공백이 있을 때 큰따옴표를 쓴 ④번이 정석입니다. ①은 세미콜론 누락, ②는 나열된 컬럼 조합 전체를 중복 제거함, ③은 0으로 나누기 에러가 발생합니다.", hint: "오늘 배운 '큰따옴표'의 용도를 다시 확인하세요." },
    { id: 20, category: "심화 및 필수 테크닉", question: "SELECT (POINT + 100) * 2 AS \"최종 점수\" FROM USER; 쿼리의 해석으로 옳은 것은?", options: [{ id: 1, text: "점수에 100을 더한 뒤 2를 곱하고, 그 컬럼 이름을 \"최종 점수\"라고 표시한다.", isCorrect: true }, { id: 2, text: "점수에 2를 곱한 뒤 100을 더하고, \"최종 점수\"라는 테이블에서 가져온다.", isCorrect: false }, { id: 3, text: "모든 유저의 POINT를 2로 바꾼다.", isCorrect: false }, { id: 4, text: "POINT가 100인 사람만 찾아서 2를 곱한다.", isCorrect: false }], rationale: "괄호 안의 덧셈이 먼저 수행되고 그다음 곱셈이 진행되며, AS 뒤의 별명이 결과창에 나타납니다.", hint: "산술 연산의 순서와 별명의 위치를 복합적으로 생각해보세요." },
  ],
  2: [
    {
      id: 1,
      category: "실행 순서",
      question: "SQL 문장의 논리적 실행 순서로 올바른 것은?",
      options: [
        { id: 1, text: "SELECT → FROM → WHERE", isCorrect: false },
        { id: 2, text: "FROM → SELECT → WHERE", isCorrect: false },
        { id: 3, text: "FROM → WHERE → SELECT", isCorrect: true },
        { id: 4, text: "WHERE → FROM → SELECT", isCorrect: false }
      ],
      rationale: "작성 순서와 달리 컴퓨터는 데이터를 먼저 찾고(FROM), 필터링한 뒤(WHERE), 최종적으로 보여줄 컬럼을 정합니다(SELECT).",
      hint: "재료를 먼저 가져오고(FROM), 손질한 뒤(WHERE), 접시에 담습니다(SELECT)."
    },
    {
      id: 2,
      category: "WHERE 절 기초",
      question: "다음 중 WHERE 절에서 사용할 수 없는 것은?",
      options: [
        { id: 1, text: "비교 연산자 (=, <>)", isCorrect: false },
        { id: 2, text: "SELECT 절에서 정의한 컬럼의 별칭(Alias)", isCorrect: true },
        { id: 3, text: "컬럼명", isCorrect: false },
        { id: 4, text: "리터럴 값 (숫자, 문자 등)", isCorrect: false }
      ],
      rationale: "WHERE 절 실행 시점에는 SELECT 절의 별칭을 아직 인식하지 못하기 때문에 에러가 발생합니다.",
      hint: "별칭은 SELECT 단계에서 부여되는데, WHERE는 그보다 먼저 실행됩니다."
    },
    {
      id: 3,
      category: "비교 연산자",
      question: "'급여가 3000이 아닌 사원'을 찾기 위해 WHERE 절에 쓸 수 있는 비교 연산자로 옳지 않은 것은?",
      options: [
        { id: 1, text: "SAL <> 3000", isCorrect: false },
        { id: 2, text: "SAL != 3000", isCorrect: false },
        { id: 3, text: "SAL ^= 3000", isCorrect: false },
        { id: 4, text: "SAL ~= 3000", isCorrect: true }
      ],
      rationale: "SQL에서 다르다는 표현은 <>, !=, ^=가 표준 혹은 널리 쓰이는 방식입니다.",
      hint: "SQL에서 '같지 않다'는 표기법은 여러 개가 있지만, 물결 모양은 사용하지 않습니다."
    },
    {
      id: 4,
      category: "기초 문법",
      question: "WHERE 1 = 1 이라는 조건의 의미로 가장 적절한 것은?",
      options: [
        { id: 1, text: "첫 번째 컬럼의 값이 1인 데이터를 찾는다.", isCorrect: false },
        { id: 2, text: "항상 참(True)이 되어 모든 행을 출력한다.", isCorrect: true },
        { id: 3, text: "데이터 중 숫자 1이 포함된 행만 필터링한다.", isCorrect: false },
        { id: 4, text: "문법 오류가 발생한다.", isCorrect: false }
      ],
      rationale: "조건이 항상 참이므로 필터링 없이 전체 데이터를 보여주며, 실무에서 쿼리 수정을 편하게 하기 위해 자주 씁니다.",
      hint: "1과 1은 항상 같습니다."
    },
    {
      id: 5,
      category: "데이터 값의 규칙",
      question: "데이터에 직업이 'MANAGER'라고 저장되어 있을 때, 다음 중 결과가 출력되는 쿼리는?",
      options: [
        { id: 1, text: "WHERE JOB = 'manager'", isCorrect: false },
        { id: 2, text: "WHERE JOB = 'Manager'", isCorrect: false },
        { id: 3, text: "WHERE JOB = 'MANAGER'", isCorrect: true },
        { id: 4, text: "WHERE JOB = ' MAN AGER '", isCorrect: false }
      ],
      rationale: "문자열 데이터는 대소문자와 공백까지 정확히 일치해야 검색됩니다.",
      hint: "SQL 명령어는 대소문자를 안 가리지만, '데이터 값'은 매우 엄격합니다."
    },
    {
      id: 6,
      category: "범위 연산자",
      question: "WHERE SAL BETWEEN 2000 AND 3000의 결과와 동일한 조건은?",
      options: [
        { id: 1, text: "WHERE SAL > 2000 AND SAL < 3000", isCorrect: false },
        { id: 2, text: "WHERE SAL >= 2000 AND SAL <= 3000", isCorrect: true },
        { id: 3, text: "WHERE SAL >= 2000 OR SAL <= 3000", isCorrect: false },
        { id: 4, text: "WHERE SAL > 2000 OR SAL < 3000", isCorrect: false }
      ],
      rationale: "BETWEEN A AND B는 '이상, 이하'의 개념으로 양쪽 끝 값을 모두 포함합니다.",
      hint: "BETWEEN은 경계값(2000, 3000)을 포함할까요, 안 할까요?"
    },
    {
      id: 7,
      category: "리스트 연산자",
      question: "WHERE JOB IN ('SALESMAN', 'ANALYST')의 의미로 옳은 것은?",
      options: [
        { id: 1, text: "직업이 SALESMAN이면서 동시에 ANALYST인 사람", isCorrect: false },
        { id: 2, text: "직업이 SALESMAN이거나 ANALYST인 사람", isCorrect: true },
        { id: 3, text: "직업이 SALESMAN도 아니고 ANALYST도 아닌 사람", isCorrect: false },
        { id: 4, text: "직업이 SALESMAN에서 ANALYST 사이의 범위에 있는 사람", isCorrect: false }
      ],
      rationale: "IN 연산자는 리스트에 나열된 값 중 하나라도 일치하면 데이터를 추출합니다.",
      hint: "IN은 여러 조건 중 하나라도 맞으면 OK인 'OR'의 집합입니다."
    },
    {
      id: 8,
      category: "패턴 매칭",
      question: "이름이 'K'로 시작하는 모든 사원을 찾기 위한 조건은?",
      options: [
        { id: 1, text: "WHERE ENAME LIKE 'K_'", isCorrect: false },
        { id: 2, text: "WHERE ENAME LIKE '%K'", isCorrect: false },
        { id: 3, text: "WHERE ENAME LIKE 'K%'", isCorrect: true },
        { id: 4, text: "WHERE ENAME LIKE '_K%'", isCorrect: false }
      ],
      rationale: "%는 0개 이상의 모든 문자를 의미하므로 'K%'는 K로 시작하는 모든 문자열을 찾습니다.",
      hint: "뒤에 글자 수가 몇 개든 상관없을 때 쓰는 와일드카드는 무엇일까요?"
    },
    {
      id: 9,
      category: "패턴 매칭",
      question: "WHERE ENAME LIKE '_A%' 조건이 의미하는 것은?",
      options: [
        { id: 1, text: "이름의 첫 글자가 A인 사람", isCorrect: false },
        { id: 2, text: "이름의 두 번째 글자가 A인 사람", isCorrect: true },
        { id: 3, text: "이름에 A가 포함된 모든 사람", isCorrect: false },
        { id: 4, text: "이름이 두 글자이면서 A로 끝나는 사람", isCorrect: false }
      ],
      rationale: "첫 번째 자리는 무엇이든 상관없고(_), 두 번째 자리가 A이며, 그 뒤는 상관없는(%) 데이터를 찾습니다.",
      hint: "_(언더바)는 딱 한 글자 자리를 차지합니다."
    },
    {
      id: 10,
      category: "NULL 연산자",
      question: "커미션(COMM) 컬럼의 값이 비어 있는 데이터를 찾기 위한 올바른 문법은?",
      options: [
        { id: 1, text: "WHERE COMM = NULL", isCorrect: false },
        { id: 2, text: "WHERE COMM IS NULL", isCorrect: true },
        { id: 3, text: "WHERE COMM = ''", isCorrect: false },
        { id: 4, text: "WHERE COMM IS EMPTY", isCorrect: false }
      ],
      rationale: "NULL 여부를 확인할 때는 반드시 IS NULL 또는 IS NOT NULL을 사용해야 합니다.",
      hint: "NULL은 '값'이 아니라 '상태'이므로 비교 연산자 =를 쓸 수 없습니다."
    },
    {
      id: 11,
      category: "논리 연산자",
      question: "논리 연산자의 우선순위가 높은 순서대로 나열된 것은?",
      options: [
        { id: 1, text: "AND > OR > NOT", isCorrect: false },
        { id: 2, text: "OR > AND > NOT", isCorrect: false },
        { id: 3, text: "NOT > AND > OR", isCorrect: true },
        { id: 4, text: "NOT > OR > AND", isCorrect: false }
      ],
      rationale: "연산자 우선순위를 모르면 괄호 없는 복합 조건문에서 엉뚱한 결과를 얻을 수 있습니다.",
      hint: "부정(NOT)이 가장 강하고, 그 다음이 교집합(AND)입니다."
    },
    {
      id: 12,
      category: "논리 연산자",
      question: "WHERE DEPTNO = 10 OR DEPTNO = 20 AND SAL > 2000 조건의 해석으로 옳은 것은?",
      options: [
        { id: 1, text: "10번 부서이거나 20번 부서인 사람 중 급여가 2000 초과인 사람", isCorrect: false },
        { id: 2, text: "10번 부서인 사람 전체 + (20번 부서이면서 급여가 2000 초과인 사람)", isCorrect: true },
        { id: 3, text: "10번 또는 20번 부서이면서 급여가 2000 이하인 사람", isCorrect: false },
        { id: 4, text: "모든 부서원 중 급여가 2000 초과인 사람", isCorrect: false }
      ],
      rationale: "우선순위에 따라 (DEPTNO = 20 AND SAL > 2000)이 먼저 묶이고, 여기에 10번 부서 조건이 OR로 결합됩니다.",
      hint: "AND가 OR보다 먼저 계산된다는 점에 주의하세요!"
    },
    {
      id: 13,
      category: "논리 연산자",
      question: "위 12번 문제에서 '10번 또는 20번 부서원 중에서 급여가 2000 초과인 사람'을 뽑으려면 어떻게 수정해야 할까?",
      options: [
        { id: 1, text: "WHERE DEPTNO IN (10, 20) OR SAL > 2000", isCorrect: false },
        { id: 2, text: "WHERE DEPTNO = 10 AND DEPTNO = 20 OR SAL > 2000", isCorrect: false },
        { id: 3, text: "WHERE (DEPTNO = 10 OR DEPTNO = 20) AND SAL > 2000", isCorrect: true },
        { id: 4, text: "수정할 필요 없다.", isCorrect: false }
      ],
      rationale: "괄호를 사용하면 우선순위를 강제로 지정하여 의도한 로직을 구현할 수 있습니다.",
      hint: "먼저 처리하고 싶은 조건은 수학처럼 '이것'으로 묶어줍니다."
    },
    {
      id: 14,
      category: "WHERE 절 기초",
      question: "다음 중 WHERE 절의 역할에 대한 설명으로 틀린 것은?",
      options: [
        { id: 1, text: "테이블의 가로줄(행)을 필터링한다.", isCorrect: false },
        { id: 2, text: "불필요한 데이터를 제거하여 시스템 부하를 줄인다.", isCorrect: false },
        { id: 3, text: "SELECT 절보다 늦게 실행되어 별칭 사용이 자유롭다.", isCorrect: true },
        { id: 4, text: "비교, 논리, SQL 특수 연산자를 활용할 수 있다.", isCorrect: false }
      ],
      rationale: "WHERE는 SELECT보다 먼저 실행되므로 별칭을 사용할 수 없습니다.",
      hint: "실행 순서 문제를 다시 떠올려 보세요."
    },
    {
      id: 15,
      category: "부정 연산자",
      question: "WHERE SAL NOT BETWEEN 1000 AND 2000의 의미는?",
      options: [
        { id: 1, text: "급여가 1000 미만이거나 2000 초과인 경우", isCorrect: true },
        { id: 2, text: "급여가 1000 이상 2000 이하인 경우", isCorrect: false },
        { id: 3, text: "급여가 딱 1000이거나 2000인 경우", isCorrect: false },
        { id: 4, text: "급여가 1500인 경우만 제외", isCorrect: false }
      ],
      rationale: "NOT은 조건의 결과를 반대로 바꾸므로, 해당 범위에 포함되지 않는 데이터를 찾습니다.",
      hint: "BETWEEN 결과(1000~2000)를 NOT으로 뒤집어 보세요."
    },
    {
      id: 16,
      category: "부정 연산자",
      question: "이름에 'A'가 들어가지 않는 사람을 찾는 조건은?",
      options: [
        { id: 1, text: "WHERE ENAME LIKE '%A%'", isCorrect: false },
        { id: 2, text: "WHERE ENAME NOT LIKE '%A%'", isCorrect: true },
        { id: 3, text: "WHERE ENAME <> '%A%'", isCorrect: false },
        { id: 4, text: "WHERE ENAME IS NOT 'A'", isCorrect: false }
      ],
      rationale: "LIKE 앞에 NOT을 붙여 패턴에 해당하지 않는 행을 필터링합니다.",
      hint: "패턴 검색의 부정은 NOT LIKE를 씁니다."
    },
    {
      id: 17,
      category: "NULL 연산자",
      question: "WHERE MGR IS NOT NULL의 의미는?",
      options: [
        { id: 1, text: "관리자(MGR)가 없는 사원을 찾는다.", isCorrect: false },
        { id: 2, text: "관리자(MGR)가 있는 사원(값이 비어있지 않은 사원)을 찾는다.", isCorrect: true },
        { id: 3, text: "관리자 이름이 NULL인 사원을 찾는다.", isCorrect: false },
        { id: 4, text: "오류가 발생하는 문장이다.", isCorrect: false }
      ],
      rationale: "IS NOT NULL은 해당 컬럼에 어떤 값이든 채워져 있는 경우를 의미합니다.",
      hint: "NULL이 아닌 상태를 찾는 조건입니다."
    },
    {
      id: 18,
      category: "연산자 특성",
      question: "다음 중 결과가 다른 하나는?",
      options: [
        { id: 1, text: "WHERE DEPTNO = 10 OR DEPTNO = 20", isCorrect: false },
        { id: 2, text: "WHERE DEPTNO IN (10, 20)", isCorrect: false },
        { id: 3, text: "WHERE DEPTNO ANY (10, 20)", isCorrect: false },
        { id: 4, text: "WHERE DEPTNO BETWEEN 10 AND 20", isCorrect: true }
      ],
      rationale: "BETWEEN은 10과 20 사이의 모든 값을 포함하지만, 1, 2번은 딱 10 또는 20인 경우만 찾습니다.",
      hint: "10과 20 사이에는 11, 12... 등의 숫자가 있을 수 있다는 점을 생각하세요."
    },
    {
      id: 19,
      category: "실행 순서",
      question: "SELECT 절에서 SAL * 12 AS 연봉이라고 했을 때, WHERE 절에서 연봉이 5000 이상인 데이터를 찾는 올바른 방법은?",
      options: [
        { id: 1, text: "WHERE 연봉 >= 5000", isCorrect: false },
        { id: 2, text: "WHERE SAL * 12 >= 5000", isCorrect: true },
        { id: 3, text: "WHERE AS 연봉 >= 5000", isCorrect: false },
        { id: 4, text: "방법이 없다.", isCorrect: false }
      ],
      rationale: "WHERE 절에서는 별칭 인식이 안 되므로 계산식이나 원래 컬럼명을 직접 써야 합니다.",
      hint: "별칭을 못 쓴다면 원래의 '식'을 그대로 가져와야 합니다."
    },
    {
      id: 20,
      category: "패턴 매칭",
      question: "WHERE ENAME LIKE 'S_T%' 조건으로 검색될 수 있는 이름은?",
      options: [
        { id: 1, text: "ST", isCorrect: false },
        { id: 2, text: "SCOTT", isCorrect: false },
        { id: 3, text: "SET", isCorrect: true },
        { id: 4, text: "SATURN", isCorrect: true }
      ],
      rationale: "SET은 S+E+T이고 뒤에 %가 0개이므로 가능, SATURN은 S+A+T+URN이므로 가능합니다. SCOTT은 세 번째 글자가 O라서 안 됩니다.",
      hint: "S(첫글자) + 아무거나 한 글자(_) + T(세번째) + 그 뒤는 자유(%)"
    }
  ],

  6: [
    { id: 1, category: "1~2강: SELECT와 WHERE 절", question: "다음 중 SQL 문법의 특징으로 가장 적절하지 않은 것은?", options: [{ id: 1, text: "SQL 문장은 세미콜론(;)으로 끝내야 실행된다.", isCorrect: false }, { id: 2, text: "SQL 명령어(SELECT, FROM 등)는 대소문자를 구별하지 않는다.", isCorrect: false }, { id: 3, text: "데이터 값('Kim', 'MANAGER')은 대소문자를 엄격히 구별한다.", isCorrect: false }, { id: 4, text: "산술 연산에서 NULL과 숫자를 더하면 0이 된다.", isCorrect: true }], rationale: "NULL은 '알 수 없는 값'이므로, 어떤 숫자와 연산해도 결과는 무조건 NULL입니다. (100 + NULL = NULL)", hint: "NULL은 0이 아닙니다." },
    { id: 2, category: "1~2강: SELECT와 WHERE 절", question: "별칭(Alias) 사용 규칙 중 옳은 것은?", options: [{ id: 1, text: "AS 키워드는 반드시 사용해야 한다.", isCorrect: false }, { id: 2, text: "별칭에 공백이 포함된 경우 작은따옴표(' ')로 감싸야 한다.", isCorrect: false }, { id: 3, text: "별칭에 공백이나 특수문자가 있으면 큰따옴표(\" \")를 사용해야 한다.", isCorrect: true }, { id: 4, text: "WHERE 절에서 SELECT 절의 별칭을 사용하여 필터링할 수 있다.", isCorrect: false }], rationale: "별칭에 공백이 있을 때는 반드시 큰따옴표(\")를 써야 합니다. WHERE 절은 SELECT 절보다 먼저 실행되므로 SELECT에서 만든 별칭을 인식하지 못합니다.", hint: "이름표(Alias)는 크게(\") 붙인다고 생각하세요." },
    { id: 3, category: "1~2강: SELECT와 WHERE 절", question: "다음 중 이름이 'K'로 시작하고 세 번째 글자가 'M'인 데이터를 찾는 조건으로 옳은 것은?", options: [{ id: 1, text: "WHERE NAME LIKE 'K%M'", isCorrect: false }, { id: 2, text: "WHERE NAME LIKE 'K_M%'", isCorrect: true }, { id: 3, text: "WHERE NAME LIKE 'K%M%'", isCorrect: false }, { id: 4, text: "WHERE NAME LIKE 'K_M_'", isCorrect: false }], rationale: "'K'로 시작(K), 두 번째 글자 상관없음(_), 세 번째 글자(M), 그 뒤는 상관없음(%)의 조합입니다.", hint: "'_'는 딱 한 글자, '%'는 글자 수 제한이 없습니다." },
    { id: 4, category: "1~2강: SELECT와 WHERE 절", question: "다음 중 보너스(COMM)가 NULL인 사원을 조회하는 올바른 쿼리는?", options: [{ id: 1, text: "SELECT * FROM EMP WHERE COMM = NULL;", isCorrect: false }, { id: 2, text: "SELECT * FROM EMP WHERE COMM != NULL;", isCorrect: false }, { id: 3, text: "SELECT * FROM EMP WHERE COMM IS NULL;", isCorrect: true }, { id: 4, text: "SELECT * FROM EMP WHERE COMM IS NOT NULL;", isCorrect: false }], rationale: "NULL은 값이 아니므로 '=' 연산자를 쓸 수 없고, 반드시 IS NULL 연산자를 사용해야 합니다.", hint: "비어있는 상태를 묻는 전용 연산자가 있습니다." },
    { id: 5, category: "1~2강: SELECT와 WHERE 절", question: "연산자 우선순위에 따라 다음 조건의 결과로 옳은 것은?", code: "WHERE DEPTNO = 10 OR DEPTNO = 20 AND SAL > 2500", options: [{ id: 1, text: "10번 부서이거나 20번 부서인 사람 중 급여가 2500 초과인 사원", isCorrect: false }, { id: 2, text: "10번 부서인 사람 전체와, 20번 부서이면서 급여가 2500 초과인 사원", isCorrect: true }, { id: 3, text: "부서와 상관없이 급여가 2500 초과인 사원", isCorrect: false }, { id: 4, text: "10번과 20번 부서 사원 중 급여가 2500 이하인 사원", isCorrect: false }], rationale: "논리 연산자 순위는 NOT > AND > OR입니다. 따라서 AND 조건이 먼저 계산됩니다.", hint: "AND가 OR보다 힘이 더 셉니다." },
    { id: 6, category: "3강: ORDER BY와 함수", question: "다음 중 SQL 실행 순서로 올바른 것은?", options: [{ id: 1, text: "SELECT → FROM → WHERE → ORDER BY", isCorrect: false }, { id: 2, text: "FROM → SELECT → WHERE → ORDER BY", isCorrect: false }, { id: 3, text: "FROM → WHERE → SELECT → ORDER BY", isCorrect: true }, { id: 4, text: "WHERE → FROM → SELECT → ORDER BY", isCorrect: false }], rationale: "재료 창고(FROM)에서 재료를 손질(WHERE)한 뒤, 플레이팅(SELECT)하고, 마지막에 줄을 세웁니다(ORDER BY).", hint: "'프-웨-셀-오'를 기억하세요. (중간에 그룹핑이 빠진 기초 순서)" },
    { id: 7, category: "3강: ORDER BY와 함수", question: "Oracle 환경에서 ORDER BY SAL ASC를 실행했을 때, SAL이 NULL인 데이터는 어디에 위치하는가?", options: [{ id: 1, text: "가장 처음에 출력된다.", isCorrect: false }, { id: 2, text: "가장 마지막에 출력된다.", isCorrect: true }, { id: 3, text: "무작위로 출력된다.", isCorrect: false }, { id: 4, text: "출력에서 제외된다.", isCorrect: false }], rationale: "Oracle은 NULL을 가장 큰 값으로 취급하므로 오름차순(ASC) 시 맨 뒤에 옵니다. (SQL Server는 반대)", hint: "Oracle에서 NULL은 끝판왕(가장 큰 값)입니다." },
    { id: 8, category: "3강: ORDER BY와 함수", question: "SELECT SUBSTR('SQLD_PASS', 6, 2) FROM DUAL;의 결과값은?", options: [{ id: 1, text: "'PA'", isCorrect: true }, { id: 2, text: "'AS'", isCorrect: false }, { id: 3, text: "'SS'", isCorrect: false }, { id: 4, text: "'D_'", isCorrect: false }], rationale: "6번째 글자인 'P'부터 시작하여 2글자를 가져오므로 'PA'가 됩니다.", hint: "시작 위치와 가져올 개수를 확인하세요." },
    { id: 9, category: "3강: ORDER BY와 함수", question: "다음 중 NULL 처리 함수에 대한 설명으로 틀린 것은?", options: [{ id: 1, text: "NVL(A, B): A가 NULL이면 B를 반환한다.", isCorrect: false }, { id: 2, text: "NULLIF(A, B): A와 B가 같으면 NULL을 반환한다.", isCorrect: false }, { id: 3, text: "COALESCE(A, B, C): 리스트 중 NULL이 아닌 최초의 값을 반환한다.", isCorrect: false }, { id: 4, text: "NVL2(A, B, C): A가 NULL이면 B를, 아니면 C를 반환한다.", isCorrect: true }], rationale: "NVL2(A, B, C)는 A가 NULL이 아니면 B를, NULL이면 C를 반환합니다.", hint: "NVL2는 'NULL이 아닐 때'가 먼저 옵니다." },
    { id: 10, category: "3강: ORDER BY와 함수", question: "CASE 문의 두 가지 방식 중 'Searched Case Expression'의 특징은?", options: [{ id: 1, text: "CASE 뒤에 바로 컬럼명을 쓴다.", isCorrect: false }, { id: 2, text: "WHEN 뒤에 비교 연산자나 복합 조건을 자유롭게 쓸 수 있다.", isCorrect: true }, { id: 3, text: "등호(=) 비교만 가능하다.", isCorrect: false }, { id: 4, text: "Oracle의 DECODE 함수와 완전히 동일한 문법이다.", isCorrect: false }], rationale: "Searched Case는 CASE WHEN 조건 THEN ... 형태이며 다양한 조건을 걸 수 있습니다.", hint: "CASE WHEN SAL >= 3000과 같은 형태입니다." },
    { id: 11, category: "4강: GROUP BY와 HAVING", question: "다음 중 집계 함수와 NULL의 관계에 대한 설명으로 틀린 것은?", options: [{ id: 1, text: "COUNT(*)은 NULL을 포함하여 전체 행 수를 샌다.", isCorrect: false }, { id: 2, text: "COUNT(컬럼명)은 NULL을 제외한 행 수를 샌다.", isCorrect: false }, { id: 3, text: "SUM(컬럼명)은 NULL을 0으로 치환하여 합산한다.", isCorrect: true }, { id: 4, text: "AVG(컬럼명)은 NULL인 행을 분모에서 제외하고 평균을 구한다.", isCorrect: false }], rationale: "집계 함수(SUM, AVG 등)는 NULL 값을 무시(제외)하고 연산합니다. 0으로 치환하는 것이 아닙니다.", hint: "대부분의 집계 함수는 NULL을 투명인간 취급합니다." },
    { id: 12, category: "4강: GROUP BY와 HAVING", question: "다음 쿼리에서 에러가 발생하는 이유는?", code: "SELECT DEPTNO, ENAME, AVG(SAL) FROM EMP GROUP BY DEPTNO;", options: [{ id: 1, text: "집계 함수를 SELECT 절에 썼기 때문에", isCorrect: false }, { id: 2, text: "GROUP BY 절에 ENAME 컬럼이 없기 때문에", isCorrect: true }, { id: 3, text: "WHERE 절이 없기 때문에", isCorrect: false }, { id: 4, text: "AVG 함수에 별칭을 주지 않았기 때문에", isCorrect: false }], rationale: "GROUP BY를 사용할 경우, SELECT 절에는 GROUP BY에 명시된 컬럼이나 집계 함수만 올 수 있습니다.", hint: "그룹으로 묶었는데, 묶이지 않은 개별 데이터(이름)를 부르라고 하면 컴퓨터는 혼란에 빠집니다." },
    { id: 13, category: "4강: GROUP BY와 HAVING", question: "WHERE 절과 HAVING 절의 차이점으로 옳은 것은?", options: [{ id: 1, text: "WHERE 절에서도 집계 함수를 사용할 수 있다.", isCorrect: false }, { id: 2, text: "HAVING 절은 반드시 GROUP BY 절보다 먼저 실행된다.", isCorrect: false }, { id: 3, text: "WHERE 절은 개별 행을, HAVING 절은 그룹화된 결과를 필터링한다.", isCorrect: true }, { id: 4, text: "HAVING 절에는 일반 컬럼 조건만 올 수 있다.", isCorrect: false }], rationale: "WHERE는 그룹화 전 필터링, HAVING은 그룹화 후 집계 결과 필터링입니다.", hint: "\"박스에 담기 전(WHERE) vs 담은 후 무게 측정(HAVING)\" 비유를 떠올리세요." },
    { id: 14, category: "4강: GROUP BY와 HAVING", question: "SQL 전체 실행 순서(Logical Execution Order)를 올바르게 나열한 것은?", options: [{ id: 1, text: "FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY", isCorrect: true }, { id: 2, text: "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY", isCorrect: false }, { id: 3, text: "FROM - GROUP BY - WHERE - HAVING - SELECT - ORDER BY", isCorrect: false }, { id: 4, text: "FROM - WHERE - SELECT - GROUP BY - HAVING - ORDER BY", isCorrect: false }], rationale: "프-웨-그-하-셀-오(FWGHSO) 순서입니다.", hint: "이 순서는 SQLD 시험의 핵심 암기 사항입니다." },
    { id: 15, category: "5강: JOIN", question: "다음 중 INNER JOIN에 대한 설명으로 옳은 것은?", options: [{ id: 1, text: "한쪽 테이블에만 데이터가 있어도 모두 출력한다.", isCorrect: false }, { id: 2, text: "조인 조건에 맞는 교집합 데이터만 출력한다.", isCorrect: true }, { id: 3, text: "조건 없이 두 테이블의 모든 행을 곱하여 출력한다.", isCorrect: false }, { id: 4, text: "ANSI 표준에서는 WHERE 절에 조인 조건을 쓴다.", isCorrect: false }], rationale: "INNER JOIN은 양쪽 테이블에 모두 데이터가 존재하는 '커플' 데이터만 가져옵니다.", hint: "벤다이어그램의 교집합 영역입니다." },
    { id: 16, category: "5강: JOIN", question: "LEFT OUTER JOIN의 결과에 대한 설명으로 옳은 것은?", options: [{ id: 1, text: "오른쪽 테이블의 모든 데이터가 출력된다.", isCorrect: false }, { id: 2, text: "조인 조건에 맞는 데이터가 없으면 왼쪽 테이블 데이터도 출력되지 않는다.", isCorrect: false }, { id: 3, text: "왼쪽 테이블의 모든 데이터가 출력되며, 오른쪽 테이블에 짝이 없으면 NULL로 표시된다.", isCorrect: true }, { id: 4, text: "양쪽 테이블의 모든 데이터가 합쳐져서 출력된다.", isCorrect: false }], rationale: "LEFT 테이블은 무조건 다 나오고, 매칭되는 오른쪽 데이터가 없으면 NULL 처리됩니다.", hint: "마케팅 타겟팅(전체 회원 중 구매 안 한 사람 찾기)에 자주 씁니다." },
    { id: 17, category: "5강: JOIN", question: "Oracle 전용 조인 문법에서 WHERE D.DEPTNO = E.DEPTNO(+)의 의미는?", options: [{ id: 1, text: "EMP(E) 테이블 기준 LEFT OUTER JOIN", isCorrect: false }, { id: 2, text: "DEPT(D) 테이블 기준 LEFT OUTER JOIN", isCorrect: true }, { id: 3, text: "FULL OUTER JOIN", isCorrect: false }, { id: 4, text: "INNER JOIN", isCorrect: false }], rationale: "(+) 기호는 데이터가 부족한 쪽에 붙입니다. DEPT는 그대로 다 나오고 EMP가 부족하므로 DEPT 기준 조인입니다.", hint: "(+)가 붙은 반대쪽 테이블이 주인(기준)입니다." },
    { id: 18, category: "5강: JOIN", question: "NATURAL JOIN 사용 시 주의사항으로 옳은 것은?", options: [{ id: 1, text: "ON 절을 사용하여 조인 조건을 명시해야 한다.", isCorrect: false }, { id: 2, text: "조인 컬럼에 테이블 별칭(Alias)을 붙일 수 없다.", isCorrect: true }, { id: 3, text: "동일한 이름의 컬럼이 없어도 자동으로 조인된다.", isCorrect: false }, { id: 4, text: "WHERE 절에서 조인 컬럼을 쓸 때 반드시 테이블 별칭을 써야 한다.", isCorrect: false }], rationale: "NATURAL JOIN은 컬럼명을 자동으로 매칭하므로, 해당 컬럼에 별칭(E.DEPTNO 등)을 붙이면 에러가 납니다.", hint: "자동으로 합쳐졌으니 주인(별칭)을 따지지 말라는 뜻입니다." },
    { id: 19, category: "5강: JOIN", question: "사원 테이블(14행)과 부서 테이블(4행)을 CROSS JOIN 했을 때 결과 행의 개수는?", options: [{ id: 1, text: "14개", isCorrect: false }, { id: 2, text: "4개", isCorrect: false }, { id: 3, text: "18개", isCorrect: false }, { id: 4, text: "56개", isCorrect: true }], rationale: "CROSS JOIN(카티션 곱)은 모든 조합을 구하므로 14 * 4 = 56이 됩니다.", hint: "두 테이블의 행 수를 곱하면 됩니다." },
    { id: 20, category: "5강: JOIN", question: "다음 중 비등가 조인(Non-EQUI JOIN)이 필요한 상황은?", options: [{ id: 1, text: "사원번호와 부서번호가 일치하는 데이터를 찾을 때", isCorrect: false }, { id: 2, text: "사원의 급여가 급여 등급 테이블의 최소~최대 범위에 있는지 확인할 때", isCorrect: true }, { id: 3, text: "두 테이블의 컬럼 이름이 완전히 같을 때", isCorrect: false }, { id: 4, text: "한쪽 테이블에만 데이터가 있는 경우를 찾을 때", isCorrect: false }], rationale: "등호(=)가 아닌 BETWEEN, >, < 등의 연산자로 범위를 조인하는 것이 비등가 조인입니다.", hint: "딱 맞아떨어지는 값 대신 범위를 비교할 때 씁니다." },
  ],
  7: [
    // Part 1: SELECT, WHERE, 연산자 (1~10번)
    { id: 1, category: "Part 1: SELECT, WHERE, 연산자", question: "다음 중 SQL 문장의 실행 순서로 올바른 것은?", options: [{ id: 1, text: "SELECT - FROM - WHERE - ORDER BY", isCorrect: false }, { id: 2, text: "FROM - WHERE - SELECT - ORDER BY", isCorrect: true }, { id: 3, text: "FROM - SELECT - WHERE - ORDER BY", isCorrect: false }, { id: 4, text: "WHERE - FROM - SELECT - ORDER BY", isCorrect: false }], rationale: "데이터베이스는 먼저 테이블을 찾고(FROM), 조건에 맞는 행을 걸러낸 뒤(WHERE), 보여줄 컬럼을 선택하고(SELECT), 마지막으로 정렬(ORDER BY)합니다.", hint: "\"어디서(FROM) 가져와서, 어떻게 거르고(WHERE), 뭘 보여줄지(SELECT)\" 순서입니다." },
    { id: 2, category: "Part 1: SELECT, WHERE, 연산자", question: "다음 중 별칭(Alias) 사용 시 오류가 발생하는 경우는?", options: [{ id: 1, text: "SELECT NAME AS 이름 FROM USER;", isCorrect: false }, { id: 2, text: "SELECT NAME 이름 FROM USER;", isCorrect: false }, { id: 3, text: "SELECT NAME \"내 이름\" FROM USER;", isCorrect: false }, { id: 4, text: "SELECT NAME '이름' FROM USER;", isCorrect: true }], rationale: "별칭에 공백이 있거나 특수문자가 있을 때는 반드시 큰따옴표(\" \")를 써야 합니다. 작은따옴표(' ')는 문자열 값을 의미할 때 씁니다.", hint: "이름표(Alias)는 크게(\") 붙이세요!" },
    { id: 3, category: "Part 1: SELECT, WHERE, 연산자", question: "[테이블: TB1]에 데이터 (100, NULL, 50)이 있을 때 다음 쿼리의 결과는?", code: "SELECT SUM(COL1 + 10) FROM TB1;", options: [{ id: 1, text: "180", isCorrect: false }, { id: 2, text: "160", isCorrect: false }, { id: 3, text: "170", isCorrect: true }, { id: 4, text: "NULL", isCorrect: false }], rationale: "행 단위 연산 (100+10), (NULL+10), (50+10)의 결과는 110, NULL, 60입니다. SUM은 NULL을 제외하고 계산하므로 110 + 60 = 170이 됩니다.", hint: "NULL과 숫자를 더하면 무조건 NULL입니다." },
    { id: 4, category: "Part 1: SELECT, WHERE, 연산자", question: "WHERE NAME LIKE '_A%' 조건에 맞는 데이터는?", options: [{ id: 1, text: "APPLE", isCorrect: false }, { id: 2, text: "BANANA", isCorrect: true }, { id: 3, text: "CAT", isCorrect: false }, { id: 4, text: "ALARM", isCorrect: false }], rationale: "_는 딱 한 글자를 의미하고 그 다음이 A여야 하므로, 두 번째 글자가 'A'인 단어를 찾습니다.", hint: "밑줄 하나당 한 글자입니다." },
    { id: 5, category: "Part 1: SELECT, WHERE, 연산자", question: "다음 중 NULL인 값을 조회하고자 할 때 올바른 조건식은?", options: [{ id: 1, text: "WHERE COMM = NULL", isCorrect: false }, { id: 2, text: "WHERE COMM IS NULL", isCorrect: true }, { id: 3, text: "WHERE COMM == NULL", isCorrect: false }, { id: 4, text: "WHERE COMM IS NOT NULL", isCorrect: false }], rationale: "NULL은 값이 아니므로 = 연산자로 비교할 수 없으며 반드시 IS NULL을 사용해야 합니다.", hint: "비어있는지 물어볼 때는 전용 단어를 씁니다." },
    { id: 6, category: "Part 1: SELECT, WHERE, 연산자", question: "BETWEEN 10 AND 20 조건과 동일한 의미를 가진 조건식은?", options: [{ id: 1, text: "COL > 10 AND COL < 20", isCorrect: false }, { id: 2, text: "COL >= 10 OR COL <= 20", isCorrect: false }, { id: 3, text: "COL >= 10 AND COL <= 20", isCorrect: true }, { id: 4, text: "COL > 10 OR COL < 20", isCorrect: false }], rationale: "BETWEEN은 경계값 10과 20을 모두 포함하는 이상/이하 조건입니다.", hint: "양 끝값을 포함한다는 점이 핵심입니다." },
    { id: 7, category: "Part 1: SELECT, WHERE, 연산자", question: "IN (10, 20, 30) 연산자와 동일한 결과를 내는 조건식은?", options: [{ id: 1, text: "COL = 10 OR COL = 20 OR COL = 30", isCorrect: true }, { id: 2, text: "COL = 10 AND COL = 20 AND COL = 30", isCorrect: false }, { id: 3, text: "COL >= 10 AND COL <= 30", isCorrect: false }, { id: 4, text: "COL = 10 OR 20 OR 30", isCorrect: false }], rationale: "IN은 나열된 값 중 하나라도 일치하면 되는 합집합(OR) 연산입니다.", hint: "\"이 중에 하나라도 있으면 가져와\"라는 뜻입니다." },
    { id: 8, category: "Part 1: SELECT, WHERE, 연산자", question: "WHERE 1=1과 같은 조건이 실무에서 자주 사용되는 주된 이유는?", options: [{ id: 1, text: "무조건 참이 되어 모든 행을 출력하기 위해", isCorrect: false }, { id: 2, text: "성능을 최적화하기 위해", isCorrect: false }, { id: 3, text: "쿼리 문법 오류를 방지하고 조건을 동적으로 추가하기 편하기 위해", isCorrect: true }, { id: 4, text: "인덱스를 태우기 위해", isCorrect: false }], rationale: "기본 조건을 깔아두면 이후에 AND로 조건을 덧붙이기 매우 편리하여 실무(마케팅 타겟팅 추출 등)에서 자주 씁니다.", hint: "코드의 유연성을 위해 사용합니다." },
    { id: 9, category: "Part 1: SELECT, WHERE, 연산자", question: "다음 중 연산자 우선순위가 가장 높은 것은?", options: [{ id: 1, text: "OR", isCorrect: false }, { id: 2, text: "AND", isCorrect: false }, { id: 3, text: "NOT", isCorrect: false }, { id: 4, text: "괄호 ()", isCorrect: true }], rationale: "수학과 마찬가지로 괄호 안의 조건이 가장 먼저 처리됩니다. 논리 연산자 중에서는 NOT > AND > OR 순입니다.", hint: "가장 먼저 계산하고 싶은 건 괄호로 묶으세요." },
    { id: 10, category: "Part 1: SELECT, WHERE, 연산자", question: "[테이블: TB]에 행이 10개 있을 때 다음 쿼리의 결과는?", code: "SELECT COUNT(*) FROM TB WHERE 1=2;", options: [{ id: 1, text: "0", isCorrect: true }, { id: 2, text: "10", isCorrect: false }, { id: 3, text: "NULL", isCorrect: false }, { id: 4, text: "에러 발생", isCorrect: false }], rationale: "1=2는 항상 거짓이므로 필터링되는 행이 하나도 없습니다. 행이 없으므로 COUNT의 결과는 0입니다.", hint: "조건이 거짓이면 아무것도 남지 않습니다." },

    // Part 2: 단일행 함수 및 CASE (11~20번)
    { id: 11, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT ROUND(123.456, 1) FROM DUAL;의 결과는?", options: [{ id: 1, text: "123", isCorrect: false }, { id: 2, text: "123.5", isCorrect: true }, { id: 3, text: "123.4", isCorrect: false }, { id: 4, text: "123.46", isCorrect: false }], rationale: "소수점 첫째 자리까지 표시하라는 의미이므로, 둘째 자리(5)에서 반올림하여 123.5가 됩니다.", hint: "지정된 자릿수까지 남긴다고 생각하세요." },
    { id: 12, category: "Part 2: 단일행 함수 및 CASE", question: "다음 SQL의 결과로 올바른 것은? (우선순위 주의)", tables: [{ name: "PROD", headers: ["NAME", "PRICE"], rows: [["A", 2500]] }], code: "SELECT CASE WHEN PRICE > 1000 THEN '고가' WHEN PRICE > 2000 THEN '초고가' ELSE '일반' END FROM PROD;", options: [{ id: 1, text: "고가", isCorrect: true }, { id: 2, text: "초고가", isCorrect: false }, { id: 3, text: "일반", isCorrect: false }, { id: 4, text: "NULL", isCorrect: false }], rationale: "CASE문은 위에서부터 순차적으로 조건을 검사하며, 첫 번째 만족하는 조건에서 멈춥니다. 2500은 1000보다 크므로 바로 '고가'를 반환합니다.", hint: "첨부이미지 12번의 핵심 함정입니다!" },
    { id: 13, category: "Part 2: 단일행 함수 및 CASE", question: "NVL2(COMM, '수당있음', '수당없음')의 동작 방식으로 옳은 것은?", options: [{ id: 1, text: "COMM이 NULL이면 '수당있음', 아니면 '수당없음'", isCorrect: false }, { id: 2, text: "COMM이 NULL이 아니면 '수당있음', NULL이면 '수당없음'", isCorrect: true }, { id: 3, text: "COMM과 '수당있음'이 같으면 '수당없음' 반환", isCorrect: false }, { id: 4, text: "COMM이 NULL인 경우만 '수당있음' 반환", isCorrect: false }], rationale: "NVL2(대상, NOT_NULL일때, NULL일때) 순서로 작동합니다.", hint: "2번 인자가 긍정(Not Null)입니다." },
    { id: 14, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT LOWER('SQLD Pass') FROM DUAL;의 결과는?", options: [{ id: 1, text: "SQLD PASS", isCorrect: false }, { id: 2, text: "sqld pass", isCorrect: true }, { id: 3, text: "Sqld Pass", isCorrect: false }, { id: 4, text: "sqld Pass", isCorrect: false }], rationale: "LOWER 함수는 모든 대문자를 소문자로 변환합니다.", hint: "영어 그대로 '낮춘다'는 뜻입니다." },
    { id: 15, category: "Part 2: 단일행 함수 및 CASE", question: "다음 중 날짜 함수에 대한 설명으로 틀린 것은? (Oracle 기준)", options: [{ id: 1, text: "SYSDATE는 현재 날짜와 시간을 반환한다.", isCorrect: false }, { id: 2, text: "날짜 + 1은 해당 날짜에 1시간을 더한 결과를 반환한다.", isCorrect: true }, { id: 3, text: "EXTRACT(YEAR FROM SYSDATE)는 현재 연도를 숫자로 추출한다.", isCorrect: false }, { id: 4, text: "날짜 - 날짜의 결과는 두 날짜 사이의 일수 차이다.", isCorrect: false }], rationale: "날짜에 숫자를 더하면 '일(Day)' 단위로 계산됩니다. + 1은 1일(24시간)을 더하는 것입니다.", hint: "기본 단위는 '하루'입니다." },
    { id: 16, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT NULLIF(100, 100) FROM DUAL;의 결과는?", options: [{ id: 1, text: "100", isCorrect: false }, { id: 2, text: "0", isCorrect: false }, { id: 3, text: "NULL", isCorrect: true }, { id: 4, text: "에러 발생", isCorrect: false }], rationale: "NULLIF(A, B)는 두 값이 같으면 NULL을, 다르면 A를 반환합니다.", hint: "\"같으면 NULL로 처리해라\"는 뜻입니다." },
    { id: 17, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT COALESCE(NULL, NULL, 'C', 'D') FROM DUAL;의 결과는?", options: [{ id: 1, text: "NULL", isCorrect: false }, { id: 2, text: "'C'", isCorrect: true }, { id: 3, text: "'D'", isCorrect: false }, { id: 4, text: "'C, D'", isCorrect: false }], rationale: "COALESCE는 인자 리스트 중 NULL이 아닌 첫 번째 값을 반환합니다.", hint: "비어있지 않은 첫 번째 데이터를 찾을 때 유용합니다." },
    { id: 18, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT CEIL(12.1), FLOOR(12.9) FROM DUAL;의 결과로 올바른 조합은?", options: [{ id: 1, text: "12, 12", isCorrect: false }, { id: 2, text: "13, 13", isCorrect: false }, { id: 3, text: "12, 13", isCorrect: false }, { id: 4, text: "13, 12", isCorrect: true }], rationale: "CEIL(천장)은 올림하여 13, FLOOR(바닥)은 내림하여 12가 됩니다.", hint: "위(천장)를 볼지, 아래(바닥)를 볼지 생각하세요." },
    { id: 19, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT SUBSTR('MARKETER', 2, 3) FROM DUAL;의 결과는?", options: [{ id: 1, text: "MAR", isCorrect: false }, { id: 2, text: "ARK", isCorrect: true }, { id: 3, text: "RKE", isCorrect: false }, { id: 4, text: "KET", isCorrect: false }], rationale: "2번째 글자('A')부터 시작하여 3글자를 가져오므로 'ARK'가 됩니다.", hint: "시작 위치와 길이를 정확히 세어보세요." },
    { id: 20, category: "Part 2: 단일행 함수 및 CASE", question: "SELECT LTRIM('  SQL  ') FROM DUAL;의 결과는? (공백 표시 주의)", options: [{ id: 1, text: "'SQL  '", isCorrect: true }, { id: 2, text: "'  SQL'", isCorrect: false }, { id: 3, text: "'SQL'", isCorrect: false }, { id: 4, text: "' SQL '", isCorrect: false }], rationale: "LTRIM은 왼쪽(Left)의 공백만 제거합니다. 오른쪽 공백은 남아있습니다.", hint: "어느 쪽(L/R)을 깎아낼지 결정합니다." },

    // Part 3: GROUP BY 및 HAVING (21~30번)
    { id: 21, category: "Part 3: GROUP BY 및 HAVING", question: "다음 ORDERS 테이블에 대해 SQL 실행 결과로 올바른 고객 ID는?", tables: [{ name: "ORDER", headers: ["ID", "AMT"], rows: [["C01", 500], ["C02", 50], ["C01", 100]] }], code: "SELECT ID FROM ORDERS GROUP BY ID HAVING COUNT(*) >= 2 AND SUM(AMT) > 500;", options: [{ id: 1, text: "C01", isCorrect: true }, { id: 2, text: "C02", isCorrect: false }, { id: 3, text: "C01, C02 모두", isCorrect: false }, { id: 4, text: "결과 없음", isCorrect: false }], rationale: "C01은 2건이며 합계가 600이므로 두 조건을 모두 만족합니다. C02는 1건이므로 탈락입니다.", hint: "첨부이미지 13번의 다중 조건 판별 문제입니다." },
    { id: 22, category: "Part 3: GROUP BY 및 HAVING", question: "SELECT DEPTNO, SUM(SAL) FROM EMP GROUP BY DEPTNO; 쿼리에서 GROUP BY의 역할은?", options: [{ id: 1, text: "급여 순으로 정렬한다.", isCorrect: false }, { id: 2, text: "부서별로 행을 묶어 합계를 낼 기준을 정한다.", isCorrect: true }, { id: 3, text: "중복된 부서 번호를 제거하고 조회한다.", isCorrect: false }, { id: 4, text: "부서 번호가 있는 행만 거른다.", isCorrect: false }], rationale: "동일한 컬럼 값을 가진 데이터들을 소그룹으로 묶어 집계 함수를 적용하게 합니다.", hint: "엑셀의 피벗 테이블과 같습니다." },
    { id: 23, category: "Part 3: GROUP BY 및 HAVING", question: "다음 중 HAVING 절에 대한 설명으로 올바른 것은?", options: [{ id: 1, text: "WHERE 절보다 먼저 실행된다.", isCorrect: false }, { id: 2, text: "집계 함수를 사용한 조건 필터링이 가능하다.", isCorrect: true }, { id: 3, text: "모든 SQL 문장에 반드시 포함되어야 한다.", isCorrect: false }, { id: 4, text: "그룹화하기 전의 개별 행을 필터링한다.", isCorrect: false }], rationale: "HAVING은 그룹화된 이후의 집계 결과(SUM, AVG 등)를 필터링할 때 씁니다.", hint: "\"그룹의 조건\"은 HAVING입니다." },
    { id: 24, category: "Part 3: GROUP BY 및 HAVING", question: "COUNT(*)와 COUNT(COMM)의 차이점으로 옳은 것은?", options: [{ id: 1, text: "차이가 없다.", isCorrect: false }, { id: 2, text: "COUNT(*)은 NULL을 포함하고, COUNT(COMM)은 NULL을 제외한다.", isCorrect: true }, { id: 3, text: "COUNT(*)은 NULL을 제외하고, COUNT(COMM)은 NULL을 포함한다.", isCorrect: false }, { id: 4, text: "COUNT(COMM)은 중복된 값은 하나만 샌다.", isCorrect: false }], rationale: "아스테리스크(*)는 행 자체의 개수를 세므로 NULL을 포함하지만, 컬럼명을 지정하면 해당 컬럼이 NULL인 행은 뺍니다.", hint: "컬럼을 콕 집으면 \"그 안에 값이 들어있는지\" 따지게 됩니다." },
    { id: 25, category: "Part 3: GROUP BY 및 HAVING", question: "다음 쿼리 중 문법 오류가 발생하는 것은?", options: [{ id: 1, text: "SELECT DEPTNO FROM EMP GROUP BY DEPTNO;", isCorrect: false }, { id: 2, text: "SELECT DEPTNO, COUNT(*) FROM EMP GROUP BY DEPTNO;", isCorrect: false }, { id: 3, text: "SELECT DEPTNO, SAL FROM EMP GROUP BY DEPTNO;", isCorrect: true }, { id: 4, text: "SELECT MAX(SAL) FROM EMP GROUP BY DEPTNO;", isCorrect: false }], rationale: "GROUP BY 절에 없는 일반 컬럼(SAL)을 SELECT 절에 단독으로 적을 수 없습니다.", hint: "그룹으로 묶었으면 \"그 그룹의 대표값(집계)\"만 보여줘야 합니다." },
    { id: 26, category: "Part 3: GROUP BY 및 HAVING", question: "SELECT DEPTNO 부서, SUM(SAL) 합계 FROM EMP GROUP BY 부서; 가 오류인 이유는?", options: [{ id: 1, text: "별칭에 한글을 썼기 때문에", isCorrect: false }, { id: 2, text: "GROUP BY 절에는 SELECT에서 정한 별칭을 쓸 수 없기 때문에", isCorrect: true }, { id: 3, text: "SUM 함수에는 별칭을 줄 수 없기 때문에", isCorrect: false }, { id: 4, text: "FROM 절이 마지막에 와야 하기 때문에", isCorrect: false }], rationale: "실행 순서상 GROUP BY가 SELECT보다 먼저이므로, 아직 태어나지 않은 별칭을 GROUP BY가 인식할 수 없습니다.", hint: "실행 순서 \"프-웨-그-하-셀-오\"를 다시 떠올리세요." },
    { id: 27, category: "Part 3: GROUP BY 및 HAVING", question: "다음 중 성격이 다른 집계 함수는?", options: [{ id: 1, text: "SUM", isCorrect: false }, { id: 2, text: "AVG", isCorrect: false }, { id: 3, text: "COUNT", isCorrect: false }, { id: 4, text: "SUBSTR", isCorrect: true }], rationale: "앞의 세 개는 여러 행을 묶어 하나로 만드는 집계 함수이고, SUBSTR은 각 행마다 실행되는 단일행 함수입니다.", hint: "\"뭉치느냐, 따로 노느냐\"의 차이입니다." },
    { id: 28, category: "Part 3: GROUP BY 및 HAVING", question: "부서별 평균 급여가 3000 이상인 부서만 조회하고 싶을 때 적절한 구문은?", options: [{ id: 1, text: "WHERE AVG(SAL) >= 3000", isCorrect: false }, { id: 2, text: "HAVING AVG(SAL) >= 3000", isCorrect: true }, { id: 3, text: "GROUP BY AVG(SAL) >= 3000", isCorrect: false }, { id: 4, text: "ORDER BY AVG(SAL) >= 3000", isCorrect: false }], rationale: "집계 결과에 대한 조건은 반드시 HAVING 절을 사용해야 합니다.", hint: "WHERE 절에서는 집계 함수를 쓸 수 없습니다." },
    { id: 29, category: "Part 3: GROUP BY 및 HAVING", question: "[TB1]에 데이터 (10, 20, NULL)이 있을 때 AVG(COL1)의 결과는?", options: [{ id: 1, text: "10", isCorrect: false }, { id: 2, text: "15", isCorrect: true }, { id: 3, text: "20", isCorrect: false }, { id: 4, text: "NULL", isCorrect: false }], rationale: "AVG는 NULL을 제외하므로 30 / 2 = 15가 됩니다. (분모에서도 제외됨)", hint: "NULL은 없는 셈 치고 남은 숫자들의 평균을 냅니다." },
    { id: 30, category: "Part 3: GROUP BY 및 HAVING", question: "집계 함수 MAX, MIN이 처리할 수 있는 데이터 타입은?", options: [{ id: 1, text: "숫자형만 가능", isCorrect: false }, { id: 2, text: "숫자형과 날짜형만 가능", isCorrect: false }, { id: 3, text: "숫자형, 날짜형, 문자형 모두 가능", isCorrect: true }, { id: 4, text: "날짜형만 가능", isCorrect: false }], rationale: "최대/최소는 숫자뿐만 아니라 가나다순(문자), 과거/미래(날짜) 모두 비교 가능합니다.", hint: "\"가장 큰 것과 작은 것\"은 글자나 날짜에서도 정할 수 있습니다." },

    // Part 4: JOIN 및 복합 응용 (31~40번)
    { id: 31, category: "Part 4: JOIN 및 복합 응용", question: "3개 테이블 조인 시 오류가 발생하는 주된 원인은?", options: [{ id: 1, text: "조인 조건을 WHERE 절에 써서", isCorrect: false }, { id: 2, text: "별칭(Alias)을 부여하지 않아서", isCorrect: false }, { id: 3, text: "존재하지 않는 테이블의 컬럼을 조인 조건으로 사용해서 (부적합한 식별자)", isCorrect: true }, { id: 4, text: "컬럼 이름이 서로 달라서", isCorrect: false }], rationale: "EMP.DEPT_ID = DEPT.DEPT_ID와 같이 실제 테이블에 있는 컬럼끼리 매칭해야 합니다. 엉뚱한 테이블 별칭을 가져다 쓰면 '부적합한 식별자' 에러가 납니다.", hint: "별칭(e, d, l)이 어떤 테이블을 가리키는지, 그 테이블에 그 컬럼이 진짜 있는지 확인하세요." },
    { id: 32, category: "Part 4: JOIN 및 복합 응용", question: "INNER JOIN에 대한 설명으로 틀린 것은?", options: [{ id: 1, text: "두 테이블 모두에 조인 컬럼 값이 있는 행만 조회된다.", isCorrect: false }, { id: 2, text: "조인 조건에 =(등호)를 사용하면 등가 조인(EQUI JOIN)이라 한다.", isCorrect: false }, { id: 3, text: "어느 한쪽에만 데이터가 있는 경우도 출력한다.", isCorrect: true }, { id: 4, text: "교집합과 같은 개념이다.", isCorrect: false }], rationale: "한쪽에만 있는 데이터를 출력하는 것은 OUTER JOIN입니다. INNER JOIN은 공통된 것만 보여줍니다.", hint: "\"서로 마음이 맞아야만(매칭) 나온다\"고 생각하세요." },
    { id: 33, category: "Part 4: JOIN 및 복합 응용", question: "LEFT OUTER JOIN에서 오른쪽 테이블에 매칭되는 데이터가 없을 때 결과는?", options: [{ id: 1, text: "결과에서 제외된다.", isCorrect: false }, { id: 2, text: "에러가 발생한다.", isCorrect: false }, { id: 3, text: "왼쪽 데이터만 나오고 오른쪽 데이터 자리는 NULL로 채워진다.", isCorrect: true }, { id: 4, text: "왼쪽 데이터도 NULL로 나온다.", isCorrect: false }], rationale: "기준이 되는 왼쪽 테이블은 무조건 다 보여주고, 짝이 없는 오른쪽은 빈칸(NULL)으로 둡니다.", hint: "마케팅 타겟(왼쪽)에게 구매 이력(오른쪽)을 붙일 때, 안 산 사람은 NULL로 뜨겠죠?" },
    { id: 34, category: "Part 4: JOIN 및 복합 응용", question: "다음 중 NATURAL JOIN의 특징이 아닌 것은?", options: [{ id: 1, text: "두 테이블에서 이름이 같은 모든 컬럼을 자동으로 조인한다.", isCorrect: false }, { id: 2, text: "ON 절을 명시적으로 사용할 수 없다.", isCorrect: false }, { id: 3, text: "조인 컬럼에 테이블 별칭을 붙여서 사용해야 한다.", isCorrect: true }, { id: 4, text: "USING 절과 같이 사용할 수 없다.", isCorrect: false }], rationale: "NATURAL JOIN의 가장 큰 특징은 조인 컬럼에 별칭을 붙이면 오류가 난다는 점입니다.", hint: "자동으로 합쳐졌으므로 누구의 것인지 따지지 않습니다." },
    { id: 35, category: "Part 4: JOIN 및 복합 응용", question: "테이블 A(행 3개)와 테이블 B(행 5개)를 CROSS JOIN 했을 때 결과 행의 개수는?", options: [{ id: 1, text: "3개", isCorrect: false }, { id: 2, text: "5개", isCorrect: false }, { id: 3, text: "8개", isCorrect: false }, { id: 4, text: "15개", isCorrect: true }], rationale: "모든 조합을 다 만드는 카티션 곱이므로 3 * 5 = 15가 됩니다.", hint: "연결 고리가 없을 때 발생하는 '폭발적인' 결과입니다." },
    { id: 36, category: "Part 4: JOIN 및 복합 응용", question: "3개의 테이블을 조인할 때 필요한 최소 조인 조건의 개수는?", options: [{ id: 1, text: "1개", isCorrect: false }, { id: 2, text: "2개", isCorrect: true }, { id: 3, text: "3개", isCorrect: false }, { id: 4, text: "제한 없음", isCorrect: false }], rationale: "N개의 테이블을 조인하려면 최소 N-1개의 연결 고리가 필요합니다.", hint: "다리를 몇 개 놓아야 세 섬을 이을 수 있는지 생각해보세요." },
    { id: 37, category: "Part 4: JOIN 및 복합 응용", question: "다음 중 Non-EQUI JOIN(비등가 조인)이 사용되는 사례는?", options: [{ id: 1, text: "사원번호가 일치하는 부서명 찾기", isCorrect: false }, { id: 2, text: "고객 등급 테이블에서 점수가 특정 범위(BETWEEN)에 있는 등급 가져오기", isCorrect: true }, { id: 3, text: "이름이 같은 사원 목록 조회", isCorrect: false }, { id: 4, text: "부서번호가 10번인 사원 조회", isCorrect: false }], rationale: "등호(=)가 아닌 범위 연산자나 비교 연산자로 조인하는 방식입니다.", hint: "\"딱 맞는 값\"이 아니라 \"이 범위 안\"인지 따질 때 씁니다." },
    { id: 38, category: "Part 4: JOIN 및 복합 응용", question: "USING 절을 사용한 조인에서 주의할 점은?", options: [{ id: 1, text: "조인 컬럼의 데이터 타입이 달라도 된다.", isCorrect: false }, { id: 2, text: "조인 컬럼에 별칭을 붙이면 오류가 발생한다.", isCorrect: true }, { id: 3, text: "ON 절을 반드시 함께 써야 한다.", isCorrect: false }, { id: 4, text: "서로 다른 이름의 컬럼을 묶을 때 쓴다.", isCorrect: false }], rationale: "USING (DEPTNO)와 같이 쓰며, 이 컬럼에는 테이블 별칭을 붙일 수 없습니다.", hint: "NATURAL JOIN과 마찬가지로 \"공통 컬럼\"에 대한 매너입니다." },
    { id: 39, category: "Part 4: JOIN 및 복합 응용", question: "EMP(사원), DEPT(부서), LOC(위치) 3개 테이블 조인 시 올바른 순서는?", options: [{ id: 1, text: "EMP와 DEPT를 먼저 조인한 결과와 LOC를 조인한다.", isCorrect: true }, { id: 2, text: "3개를 동시에 한 번에 섞는다.", isCorrect: false }, { id: 3, text: "LOC와 EMP를 먼저 직접 조인한다. (관계가 없어도)", isCorrect: false }, { id: 4, text: "상관없으나 보통 1번처럼 순차적으로 처리된다.", isCorrect: false }], rationale: "논리적으로 두 테이블을 먼저 조인하여 가상의 테이블을 만들고, 그 결과를 다음 테이블과 연결합니다.", hint: "사원은 부서에 속해 있고, 부서는 특정 위치에 있다는 연결 고리를 따라갑니다." },
    { id: 40, category: "Part 4: JOIN 및 복합 응용", question: "SELECT * FROM A, B; (WHERE 절 없음) 쿼리의 결과는 무엇인가?", options: [{ id: 1, text: "에러가 발생한다.", isCorrect: false }, { id: 2, text: "두 테이블의 합집합이 나온다.", isCorrect: false }, { id: 3, text: "CROSS JOIN 결과가 나온다.", isCorrect: true }, { id: 4, text: "조인 조건이 없으므로 아무것도 출력되지 않는다.", isCorrect: false }], rationale: "WHERE 절에 조인 조건을 명시하지 않으면 시스템은 자동으로 모든 행을 곱하는 CROSS JOIN을 수행합니다.", hint: "실수로 조건을 빼먹었을 때 마주하게 되는 데이터 폭탄입니다." },

    // 실전 추론 10문항 (41~50번)
    {
      id: 41,
      category: "실전 추론",
      question: "[CASE문 우선순위] 다음 PRODUCT 테이블을 대상으로 쿼리를 실행했을 때, 'C' 상품의 PRICE_LEVEL은 무엇인가?",
      tables: [{ name: "PRODUCT", headers: ["PRODUCT_ID", "NAME", "PRICE"], rows: [[101, "A", 500], [102, "B", 1500], [103, "C", 3000]] }],
      code: "SELECT NAME,\n       CASE WHEN PRICE >= 1000 THEN 'Gold'\n            WHEN PRICE >= 2000 THEN 'VIP'\n            ELSE 'Normal'\n       END AS PRICE_LEVEL\nFROM PRODUCT;",
      options: [{ id: 1, text: "Gold", isCorrect: true }, { id: 2, text: "VIP", isCorrect: false }, { id: 3, text: "Normal", isCorrect: false }, { id: 4, text: "NULL", isCorrect: false }],
      rationale: "CASE문은 만족하는 첫 번째 조건을 만나면 즉시 종료됩니다. 3000은 첫 번째 조건인 PRICE >= 1000을 이미 만족하므로 'Gold'를 반환하고 끝납니다. 'VIP'를 원했다면 큰 숫자 조건부터 먼저 써야 합니다.",
      hint: "\"먼저 만나는 놈이 임자\"입니다."
    },
    {
      id: 42,
      category: "실전 추론",
      question: "[HAVING절 복합 필터링] 다음 SALES 테이블에서 쿼리 실행 결과로 출력되는 CATEGORY는?",
      tables: [{ name: "SALES", headers: ["CATEGORY", "AMOUNT", "COUNT"], rows: [["Food", 500, 1], ["Food", 600, 1], ["App", 1200, 1], ["App", 100, 1]] }],
      code: "SELECT CATEGORY\nFROM SALES\nGROUP BY CATEGORY\nHAVING COUNT(*) >= 2 AND SUM(AMOUNT) > 1500;",
      options: [{ id: 1, text: "Food", isCorrect: false }, { id: 2, text: "App", isCorrect: false }, { id: 3, text: "Food, App 모두", isCorrect: false }, { id: 4, text: "결과 없음", isCorrect: true }],
      rationale: "Food는 합계가 1100이라 탈락, App은 합계가 1300이라 탈락입니다. 두 조건을 동시에 만족하는 그룹이 없습니다.",
      hint: "그룹화한 후 '합계'와 '개수'를 각각 계산해보세요."
    },
    {
      id: 43,
      category: "실전 추론",
      question: "[NULL과 집계 함수] 다음 MEMBER 테이블에서 AVG(POINT)의 결과값은?",
      tables: [{ name: "MEMBER", headers: ["NAME", "POINT"], rows: [["KIM", 100], ["LEE", 200], ["PARK", "NULL"]] }],
      code: "SELECT AVG(POINT) FROM MEMBER;",
      options: [{ id: 1, text: "100", isCorrect: false }, { id: 2, text: "150", isCorrect: true }, { id: 3, text: "0", isCorrect: false }, { id: 4, text: "NULL", isCorrect: false }],
      rationale: "AVG 함수는 NULL을 제외하고 계산합니다. 따라서 300 / 2 = 150이 됩니다. 분모에서도 NULL인 행은 빠집니다.",
      hint: "집계 함수에게 NULL은 투명인간입니다."
    },
    {
      id: 44,
      category: "실전 추론",
      question: "[3개 테이블 조인 결과] 다음 테이블 관계에서 쿼리 결과로 출력되는 행(Row)의 수는?",
      tables: [
        { name: "EMP", headers: ["NAME", "DEPTNO"], rows: [["(5명)", 10], ["(5명)", 20]] },
        { name: "DEPT", headers: ["DEPTNO"], rows: [[10], [20], [30]] },
        { name: "LOC", headers: ["DEPTNO", "CITY"], rows: [[10, "서울"], [20, "부산"]] }
      ],
      code: "SELECT E.NAME, L.CITY\nFROM EMP E, DEPT D, LOC L\nWHERE E.DEPTNO = D.DEPTNO\n  AND D.DEPTNO = L.DEPTNO;",
      options: [{ id: 1, text: "3개", isCorrect: false }, { id: 2, text: "5개", isCorrect: false }, { id: 3, text: "10개", isCorrect: true }, { id: 4, text: "15개", isCorrect: false }],
      rationale: "10번 부서 5명은 서울로, 20번 부서 5명은 부산으로 매칭됩니다. 총 10명의 사원이 모두 매칭되므로 10행이 출력됩니다.",
      hint: "사원 한 명당 최종적으로 어떤 도시가 붙는지 따라가 보세요."
    },
    {
      id: 45,
      category: "실전 추론",
      question: "[실행 순서와 별칭 오류] 다음 중 실행 시 오류가 발생하는 쿼리는?",
      options: [{ id: 1, text: "SELECT NAME AS 이름 FROM USER ORDER BY 이름;", isCorrect: false }, { id: 2, text: "SELECT NAME AS 이름 FROM USER WHERE NAME = 'KIM';", isCorrect: false }, { id: 3, text: "SELECT NAME AS 이름 FROM USER WHERE 이름 = 'KIM';", isCorrect: true }, { id: 4, text: "SELECT NAME FROM USER WHERE NAME LIKE 'K%';", isCorrect: false }],
      rationale: "WHERE 절은 SELECT 절보다 먼저 실행됩니다. 따라서 WHERE 절은 아직 생성되지 않은 별칭인 '이름'을 알 수 없습니다.",
      hint: "프-웨-셀-오! (FROM-WHERE-SELECT-ORDER BY)"
    },
    {
      id: 46,
      category: "실전 추론",
      question: "[LEFT JOIN과 NULL] 다음 두 테이블을 LEFT OUTER JOIN 했을 때, 결과에서 ORDER_ID가 NULL인 사원의 이름은?\n\n* EMP: KIM, LEE (2명)\n* ORDERS: KIM만 1건 주문",
      code: "SELECT E.NAME, O.ORDER_ID\nFROM EMP E LEFT OUTER JOIN ORDERS O\nON E.NAME = O.NAME;",
      options: [{ id: 1, text: "KIM", isCorrect: false }, { id: 2, text: "LEE", isCorrect: true }, { id: 3, text: "KIM, LEE", isCorrect: false }, { id: 4, text: "없음", isCorrect: false }],
      rationale: "LEFT JOIN은 왼쪽(EMP)을 다 보여줍니다. KIM은 주문이 있어 ID가 붙지만, LEE는 주문이 없으므로 ID 자리에 NULL이 채워집니다.",
      hint: "\"주문 안 한 사람 찾기\"의 전형적인 문제입니다."
    },
    {
      id: 47,
      category: "실전 추론",
      question: "[산술 연산과 NULL] 다음 쿼리의 결과값으로 올바른 것은?",
      code: "SELECT NVL(100 + NULL, 50) FROM DUAL;",
      options: [{ id: 1, text: "150", isCorrect: false }, { id: 2, text: "100", isCorrect: false }, { id: 3, text: "50", isCorrect: true }, { id: 4, text: "NULL", isCorrect: false }],
      rationale: "100 + NULL의 결과는 NULL입니다. NVL(NULL, 50)이 되므로 최종 결과는 50입니다.",
      hint: "괄호 안의 연산부터 천천히 해결하세요."
    },
    {
      id: 48,
      category: "실전 추론",
      question: "[DISTINCT의 범위] 다음 테이블에서 쿼리 실행 시 출력되는 행의 수는?",
      tables: [{ name: "TABLE", headers: ["DEPT", "JOB"], rows: [[10, "CLERK"], [10, "CLERK"], [10, "MANAGER"], [20, "CLERK"]] }],
      code: "SELECT DISTINCT DEPT, JOB FROM TABLE;",
      options: [{ id: 1, text: "1개", isCorrect: false }, { id: 2, text: "2개", isCorrect: false }, { id: 3, text: "3개", isCorrect: true }, { id: 4, text: "4개", isCorrect: false }],
      rationale: "DISTINCT는 나열된 모든 컬럼의 조합을 하나로 봅니다. (10, CLERK) 조합이 2개이므로 하나로 합쳐져 총 3쌍이 남습니다.",
      hint: "(부서+직업) 세트가 중복되는지 보세요."
    },
    {
      id: 49,
      category: "실전 추론",
      question: "[비등가 조인 추론] 사원 'KIM'의 급여가 2500일 때, 다음 쿼리에서 KIM에게 부여될 GRADE는?",
      tables: [{ name: "SAL_GRADE", headers: ["GRADE", "MIN_SAL", "MAX_SAL"], rows: [["A", 1000, 2000], ["B", 2001, 3000]] }],
      code: "SELECT S.GRADE\nFROM EMP E, SAL_GRADE S\nWHERE E.NAME = 'KIM'\n  AND E.SAL BETWEEN S.MIN_SAL AND S.MAX_SAL;",
      options: [{ id: 1, text: "A등급", isCorrect: false }, { id: 2, text: "B등급", isCorrect: true }, { id: 3, text: "NULL", isCorrect: false }, { id: 4, text: "에러 발생", isCorrect: false }],
      rationale: "2500은 2001과 3000 사이(BETWEEN)에 해당하므로 B등급과 매칭됩니다.",
      hint: "숫자가 어느 범위 바구니에 들어가는지 찾으세요."
    },
    {
      id: 50,
      category: "실전 추론",
      question: "[문자 함수와 인덱스] SELECT SUBSTR('20260214', 5, 2) FROM DUAL;의 결과로 올바른 것은?",
      options: [{ id: 1, text: "2026", isCorrect: false }, { id: 2, text: "0214", isCorrect: false }, { id: 3, text: "02", isCorrect: true }, { id: 4, text: "14", isCorrect: false }],
      rationale: "5번째 글자인 '0'부터 시작하여 2글자를 추출하므로 '02'가 나옵니다.",
      hint: "마케팅 데이터에서 '월'만 뽑아낼 때 아주 많이 쓰는 방식입니다."
    }
  ],
  8: [
    {
      id: 1,
      category: "서브쿼리/뷰 기초",
      question: "다음 중 서브쿼리에 대한 설명으로 가장 적절하지 않은 것은?",
      options: [
        { id: 1, text: "서브쿼리는 항상 괄호 ()로 감싸야 한다.", isCorrect: false },
        { id: 2, text: "서브쿼리는 메인 쿼리의 컬럼을 참조할 수 있다.", isCorrect: false },
        { id: 3, text: "메인 쿼리는 서브쿼리의 컬럼을 자유롭게 참조할 수 있다.", isCorrect: true },
        { id: 4, text: "서브쿼리 내에서는 원칙적으로 ORDER BY 절을 사용할 수 없다.", isCorrect: false }
      ],
      rationale: "서브쿼리는 메인 쿼리의 컬럼을 사용할 수 있는 '상속' 구조를 가지지만, 반대로 메인 쿼리가 서브쿼리의 컬럼을 사용하는 것은 불가능합니다.",
      hint: "'마트료시카' 인형을 떠올려 보세요. 안쪽 인형은 바깥쪽을 알 수 있지만, 바깥쪽은 안쪽의 세부 내용을 바로 꺼내 쓸 수 없습니다."
    },
    {
      id: 2,
      category: "서브쿼리/뷰 기초",
      question: "다음 중 뷰(VIEW)의 특징으로 보기 어려운 것은?",
      options: [
        { id: 1, text: "독립성: 테이블 구조가 바뀌어도 뷰 정의만 수정하면 응용 프로그램에 영향이 적다.", isCorrect: false },
        { id: 2, text: "보안성: 사용자에게 숨기고 싶은 특정 컬럼을 제외하고 노출할 수 있다.", isCorrect: false },
        { id: 3, text: "영속성: 뷰를 생성하면 실제 데이터가 별도의 저장 공간에 물리적으로 복사된다.", isCorrect: true },
        { id: 4, text: "편리성: 복잡한 JOIN 쿼리를 뷰로 만들어 간단하게 조회할 수 있다.", isCorrect: false }
      ],
      rationale: "뷰는 '가상 테이블'로, 실제 데이터를 저장하지 않고 쿼리 정의(TEXT)만 저장합니다.",
      hint: "뷰는 거울과 같습니다. 물체(데이터)는 테이블에 있고, 뷰는 그 모습을 비춰줄 뿐입니다."
    },
    {
      id: 3,
      category: "서브쿼리/뷰 기초",
      question: "SELECT 절에 사용되어 마치 하나의 컬럼처럼 동작하는 서브쿼리의 명칭은?",
      options: [
        { id: 1, text: "인라인 뷰(Inline View)", isCorrect: false },
        { id: 2, text: "스칼라 서브쿼리(Scalar Subquery)", isCorrect: true },
        { id: 3, text: "중첩 서브쿼리(Nested Subquery)", isCorrect: false },
        { id: 4, text: "연관 서브쿼리(Correlated Subquery)", isCorrect: false }
      ],
      rationale: "SELECT 절에 위치하여 단일 행, 단일 컬럼 값을 반환하는 서브쿼리를 '스칼라 서브쿼리'라고 부릅니다.",
      hint: "'스칼라'는 수학에서 단일 값을 의미하는 용어입니다."
    },
    {
      id: 4,
      category: "서브쿼리/뷰 기초",
      question: "다음 중 뷰를 생성(또는 수정)할 때 사용하는 SQL 명령어로 옳은 것은?",
      options: [
        { id: 1, text: "UPDATE VIEW", isCorrect: false },
        { id: 2, text: "ALTER VIEW", isCorrect: false },
        { id: 3, text: "CREATE OR REPLACE VIEW", isCorrect: true },
        { id: 4, text: "MODIFY VIEW", isCorrect: false }
      ],
      rationale: "뷰의 정의를 변경할 때는 ALTER 대신 DROP 후 CREATE 하거나, CREATE OR REPLACE VIEW를 사용하여 덮어쓰기 합니다.",
      hint: "뷰는 구조를 수정하는 게 아니라 '다시 정의'하는 개념입니다."
    },
    {
      id: 5,
      category: "서브쿼리/뷰 기초",
      question: "단일 행 서브쿼리 연산자가 아닌 것은?",
      options: [
        { id: 1, text: "=", isCorrect: false },
        { id: 2, text: "<>", isCorrect: false },
        { id: 3, text: ">=", isCorrect: false },
        { id: 4, text: "ANY", isCorrect: true }
      ],
      rationale: "ANY, IN, ALL 등은 서브쿼리 결과가 여러 개일 때 사용하는 '다중 행 연산자'입니다.",
      hint: "= 뒤에 결과가 2개 나오면 에러가 난다는 사실을 기억하세요!"
    },
    {
      id: 6,
      category: "서브쿼리 연산자/위치",
      question: "다음 SQL 문에서 사용된 서브쿼리의 종류는?",
      code: "SELECT E.ENAME, E.SAL\nFROM EMP E, (SELECT DEPTNO, AVG(SAL) AS AVGSAL FROM EMP GROUP BY DEPTNO) D\nWHERE E.DEPTNO = D.DEPTNO AND E.SAL > D.AVGSAL;",
      options: [
        { id: 1, text: "스칼라 서브쿼리", isCorrect: false },
        { id: 2, text: "인라인 뷰", isCorrect: true },
        { id: 3, text: "중첩 서브쿼리", isCorrect: false },
        { id: 4, text: "상호연관 서브쿼리", isCorrect: false }
      ],
      rationale: "FROM 절에 위치하여 가상의 테이블 역할을 하는 서브쿼리를 '인라인 뷰'라고 합니다.",
      hint: "\"FROM 절에 있는 쿼리는 테이블 대타!\""
    },
    {
      id: 7,
      category: "서브쿼리 연산자/위치",
      question: "다음 중 다중 행 연산자와 그 의미가 바르게 연결되지 않은 것은?",
      options: [
        { id: 1, text: "IN : 서브쿼리 결과 중 하나라도 일치하면 참", isCorrect: false },
        { id: 2, text: "> ALL : 서브쿼리 결과의 모든 값보다 커야 함 (최대값보다 큼)", isCorrect: false },
        { id: 3, text: "< ANY : 서브쿼리 결과의 모든 값보다 작아야 함 (최대값보다 작음)", isCorrect: true },
        { id: 4, text: "EXISTS : 서브쿼리 결과가 1건이라도 존재하면 참", isCorrect: false }
      ],
      rationale: "< ANY는 결과값 중 최소한 하나보다만 작으면 되므로, 결과의 '최대값'보다 작으면 참이 됩니다. (모든 값보다 작으려면 < ALL 사용)",
      hint: "ANY는 '어느 하나라도', ALL은 '모조리 다'라고 해석하세요."
    },
    {
      id: 8,
      category: "서브쿼리 연산자/위치",
      question: "다음 SQL의 실행 결과로 적절한 것은? (EMP 테이블의 최고 급여는 5000이다)",
      code: "SELECT ENAME FROM EMP \nWHERE SAL >= (SELECT MAX(SAL) FROM EMP);",
      options: [
        { id: 1, text: "급여가 5000인 사원들만 조회된다.", isCorrect: true },
        { id: 2, text: "모든 사원이 조회된다.", isCorrect: false },
        { id: 3, text: "문법 오류가 발생한다.", isCorrect: false },
        { id: 4, text: "아무도 조회되지 않는다.", isCorrect: false }
      ],
      rationale: "서브쿼리에서 MAX(SAL)은 단일 값을 반환하므로 = 또는 >= 연산자와 함께 사용 가능한 단일 행 서브쿼리입니다.",
      hint: "집계 함수(MAX, MIN, AVG)가 사용된 서브쿼리는 보통 1개의 값만 뱉어냅니다."
    },
    {
      id: 9,
      category: "서브쿼리 연산자/위치",
      question: "다음 중 뷰(VIEW)를 통해 DML(INSERT, UPDATE 등)을 수행할 수 없는 경우는?",
      options: [
        { id: 1, text: "뷰 정의에 단일 테이블만 사용된 경우", isCorrect: false },
        { id: 2, text: "뷰 정의에 GROUP BY 절이 포함된 경우", isCorrect: true },
        { id: 3, text: "뷰 정의에 WHERE 절 조건이 포함된 경우", isCorrect: false },
        { id: 4, text: "뷰 정의 시 모든 컬럼에 별칭을 사용한 경우", isCorrect: false }
      ],
      rationale: "GROUP BY, DISTINCT, 집계 함수 등이 포함된 뷰는 데이터의 원천이 불분명해지므로 DML 작업이 불가능합니다.",
      hint: "\"뭉쳐진 데이터를 어떻게 낱개로 수정하겠어?\"라고 생각하면 쉽습니다."
    },
    {
      id: 10,
      category: "서브쿼리 연산자/위치",
      question: "서브쿼리가 메인 쿼리의 컬럼을 포함하고 있어, 메인 쿼리의 각 행마다 서브쿼리가 반복 실행되는 형태는?",
      options: [
        { id: 1, text: "비연관 서브쿼리", isCorrect: false },
        { id: 2, text: "인라인 뷰", isCorrect: false },
        { id: 3, text: "연관 서브쿼리", isCorrect: true },
        { id: 4, text: "스칼라 서브쿼리", isCorrect: false }
      ],
      rationale: "메인 쿼리의 값을 서브쿼리에 전달하여 조건에 맞는지 확인하는 방식을 '연관(Correlated) 서브쿼리'라고 합니다.",
      hint: "서브쿼리 안에 메인 테이블의 별칭(Alias)이 들어가 있는지 확인하세요."
    },
    {
      id: 11,
      category: "서브쿼리 함정/주의사항",
      question: "다음 SQL의 결과로 조회되는 행의 개수는? (EMP 테이블의 MGR 컬럼에 NULL이 하나 존재한다고 가정한다)",
      code: "SELECT COUNT(*) FROM EMP\nWHERE EMPNO NOT IN (SELECT MGR FROM EMP);",
      options: [
        { id: 1, text: "MGR에 없는 사원 수만큼 출력", isCorrect: false },
        { id: 2, text: "전체 사원 수 출력", isCorrect: false },
        { id: 3, text: "0건 출력", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false }
      ],
      rationale: "NOT IN 연산 시 서브쿼리 결과에 NULL이 포함되어 있으면, 비교 결과가 모두 UNKNOWN이 되어 최종적으로 아무것도 조회되지 않습니다. (매우 빈출!)",
      hint: "NOT IN과 NULL이 만나면 '폭탄'이 터져서 결과가 다 사라진다고 외우세요."
    },
    {
      id: 12,
      category: "서브쿼리 함정/주의사항",
      question: "다음 중 스칼라 서브쿼리에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "서브쿼리의 결과가 2건 이상이어도 첫 번째 행을 사용한다.", isCorrect: false },
        { id: 2, text: "서브쿼리의 결과가 0건(데이터 없음)이면 에러가 발생한다.", isCorrect: false },
        { id: 3, text: "서브쿼리의 결과가 0건이면 NULL을 반환한다.", isCorrect: true },
        { id: 4, text: "가독성을 위해 주로 FROM 절에 사용한다.", isCorrect: false }
      ],
      rationale: "스칼라 서브쿼리는 결과가 없으면 에러 대신 NULL을 반환하며, 2건 이상이면 에러가 발생합니다.",
      hint: "SELECT 절에 넣었는데 값이 없으면 그냥 빈칸(NULL)이 나온다고 생각하세요."
    },
    {
      id: 13,
      category: "서브쿼리 함정/주의사항",
      question: "다음 중 서브쿼리를 사용할 수 없는 절은?",
      options: [
        { id: 1, text: "SELECT 절", isCorrect: false },
        { id: 2, text: "WHERE 절", isCorrect: false },
        { id: 3, text: "HAVING 절", isCorrect: false },
        { id: 4, text: "GROUP BY 절", isCorrect: true }
      ],
      rationale: "SQL 표준상 GROUP BY 절에는 서브쿼리를 사용할 수 없습니다.",
      hint: "그룹을 묶는 기준 자체를 쿼리로 동적으로 만들 수는 없습니다."
    },
    {
      id: 14,
      category: "서브쿼리 함정/주의사항",
      question: "다음 SQL 문장의 빈칸에 들어갈 연산자로 부서번호 30번 사원들 중 급여가 가장 적은 사람보다 더 적게 받는 사원을 조회하고자 할 때 적절한 것은?",
      code: "SELECT ENAME, SAL FROM EMP\nWHERE SAL < (빈칸) (SELECT SAL FROM EMP WHERE DEPTNO = 30);",
      options: [
        { id: 1, text: "IN", isCorrect: false },
        { id: 2, text: "ANY", isCorrect: false },
        { id: 3, text: "ALL", isCorrect: true },
        { id: 4, text: "EXISTS", isCorrect: false }
      ],
      rationale: "\"가장 적은 사람보다 더 적다\"는 것은 \"모든 사람보다 적다\"는 뜻이므로 < ALL을 사용해야 합니다.",
      hint: "< ALL은 최소값보다 작음, > ALL은 최대값보다 큼!"
    },
    {
      id: 15,
      category: "서브쿼리 함정/주의사항",
      question: "뷰(VIEW)를 삭제할 때 발생하는 현상으로 옳은 것은?",
      options: [
        { id: 1, text: "뷰를 참조하고 있는 다른 뷰들은 자동으로 삭제된다.", isCorrect: false },
        { id: 2, text: "뷰가 참조하고 있는 원본 테이블의 데이터도 함께 삭제된다.", isCorrect: false },
        { id: 3, text: "뷰의 정의(TEXT)만 삭제되고 원본 테이블에는 영향이 없다.", isCorrect: true },
        { id: 4, text: "뷰를 삭제하려면 반드시 원본 테이블을 먼저 삭제해야 한다.", isCorrect: false }
      ],
      rationale: "뷰는 가상 테이블이므로 정의만 삭제될 뿐 실제 데이터(테이블)에는 영향을 주지 않습니다.",
      hint: "거울을 깬다고 해서 실물이 사라지지는 않습니다."
    },
    {
      id: 16,
      category: "서브쿼리/뷰 심화",
      question: "다음 중 뷰(VIEW)에 대한 설명으로 가장 부적절한 것은?",
      options: [
        { id: 1, text: "뷰는 자신만의 인덱스를 생성하여 조회 성능을 높일 수 있다.", isCorrect: true },
        { id: 2, text: "뷰는 복잡한 질의를 단순화하여 가독성을 높여준다.", isCorrect: false },
        { id: 3, text: "뷰를 정의할 때 ORDER BY 절을 사용할 수 있다.", isCorrect: false },
        { id: 4, text: "테이블 구조가 변경되어도 뷰의 정의를 통해 데이터 독립성을 확보할 수 있다.", isCorrect: false }
      ],
      rationale: "뷰는 실제 데이터를 가지지 않으므로 자신만의 물리적 인덱스를 가질 수 없습니다. (원본 테이블의 인덱스를 활용할 뿐입니다.)",
      hint: "인덱스는 '데이터 위치'를 저장하는 것인데, 뷰는 데이터가 없으니 위치를 저장할 수 없겠죠?"
    },
    {
      id: 17,
      category: "서브쿼리/뷰 심화",
      question: "아래 SQL의 실행 결과와 동일한 결과를 내는 구문은?",
      code: "SELECT ENAME FROM EMP E\nWHERE EXISTS (SELECT 1 FROM DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC = 'SEOUL');",
      options: [
        { id: 1, text: "SELECT ENAME FROM EMP WHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')", isCorrect: true },
        { id: 2, text: "SELECT ENAME FROM EMP WHERE DEPTNO = (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')", isCorrect: false },
        { id: 3, text: "SELECT ENAME FROM EMP WHERE DEPTNO ANY (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')", isCorrect: false },
        { id: 4, text: "SELECT ENAME FROM EMP WHERE DEPTNO ALL (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')", isCorrect: false }
      ],
      rationale: "EXISTS는 존재 여부만 확인하며, 이는 보통 IN 연산자를 사용한 비연관 서브쿼리와 동일한 결과를 냅니다. (단, 서울에 해당하는 부서가 여러 개일 수 있으므로 =은 위험합니다.)",
      hint: "EXISTS는 IN과 친구라고 생각하면 편합니다."
    },
    {
      id: 18,
      category: "서브쿼리/뷰 심화",
      question: "다음 중 연관 서브쿼리(Correlated Subquery)의 특징이 아닌 것은?",
      options: [
        { id: 1, text: "서브쿼리 내에 메인 쿼리의 컬럼이 존재한다.", isCorrect: false },
        { id: 2, text: "메인 쿼리의 결과가 서브쿼리로 전달되고, 다시 그 결과가 메인 쿼리에 영향을 준다.", isCorrect: false },
        { id: 3, text: "서브쿼리가 먼저 실행되어 단 한 번만 결과를 메인 쿼리에 전달한다.", isCorrect: true },
        { id: 4, text: "성능상 비연관 서브쿼리보다 불리할 수 있다.", isCorrect: false }
      ],
      rationale: "연관 서브쿼리는 메인 쿼리의 각 행을 읽을 때마다 서브쿼리가 반복해서 실행됩니다. 한 번만 실행되는 것은 비연관 서브쿼리의 특징입니다.",
      hint: "'연관'되어 있으니 계속 서로 주고받아야 해서 바쁘다고 생각하세요."
    },
    {
      id: 19,
      category: "서브쿼리/뷰 심화",
      question: "SQL Server(MSSQL) 환경에서 다음 중 오류가 발생하는 쿼리는?",
      options: [
        { id: 1, text: "SELECT 절의 스칼라 서브쿼리", isCorrect: false },
        { id: 2, text: "FROM 절의 인라인 뷰", isCorrect: false },
        { id: 3, text: "다중 컬럼 서브쿼리 (예: WHERE (A, B) IN (SELECT A, B FROM ... ))", isCorrect: true },
        { id: 4, text: "WHERE 절의 다중 행 서브쿼리", isCorrect: false }
      ],
      rationale: "다중 컬럼 서브쿼리(여러 컬럼을 한꺼번에 비교)는 오라클에서는 지원하지만 SQL Server에서는 지원하지 않는 문법입니다. (시험 단골 포인트!)",
      hint: "\"가로로 여러 개 묶어서 비교하는 건 오라클 전용!\""
    },
    {
      id: 20,
      category: "서브쿼리/뷰 심화",
      question: "다음은 TOP-N 쿼리를 작성하는 SQL이다. 빈칸에 들어갈 내용으로 적절한 것은?",
      code: "SELECT ENAME, SAL\nFROM (SELECT ENAME, SAL FROM EMP (  빈칸  ))\nWHERE ROWNUM <= 5;",
      options: [
        { id: 1, text: "GROUP BY SAL", isCorrect: false },
        { id: 2, text: "ORDER BY SAL DESC", isCorrect: true },
        { id: 3, text: "HAVING SAL > 3000", isCorrect: false },
        { id: 4, text: "WHERE SAL IS NOT NULL", isCorrect: false }
      ],
      rationale: "오라클에서 상위 N개를 뽑으려면 인라인 뷰 안에서 먼저 ORDER BY로 정렬을 한 뒤, 바깥에서 ROWNUM으로 잘라야 합니다.",
      hint: "\"서브쿼리에서 예외적으로 정렬이 허용되는 유일한 케이스\"가 바로 이것입니다!"
    }
  ],
  9: [
    {
      id: 1,
      category: "집합 연산자 기초",
      question: "집합 연산자를 사용하여 두 개의 SELECT 문을 결합할 때, 반드시 지켜야 할 규칙으로 옳지 않은 것은?",
      options: [
        { id: 1, text: "두 쿼리의 컬럼 개수가 동일해야 한다.", isCorrect: false },
        { id: 2, text: "각 컬럼의 데이터 타입이 상호 호환 가능해야 한다.", isCorrect: false },
        { id: 3, text: "두 쿼리의 컬럼 명칭이 반드시 동일해야 한다.", isCorrect: true },
        { id: 4, text: "SELECT 절의 컬럼 순서가 일치해야 한다.", isCorrect: false }
      ],
      rationale: "컬럼 명칭이 달라도 데이터 타입과 개수만 맞으면 결합이 가능합니다. 결과의 컬럼명은 첫 번째 SELECT 문을 따릅니다.",
      hint: "'틀(구조)'은 맞춰야 하지만, '이름표'는 첫 번째 사람 것을 빌려 쓴다고 생각하세요."
    },
    {
      id: 2,
      category: "집합 연산자 기초",
      question: "다음 중 두 집합의 중복된 행을 제거하고 합집합 결과를 반환하는 연산자는?",
      options: [
        { id: 1, text: "UNION", isCorrect: true },
        { id: 2, text: "UNION ALL", isCorrect: false },
        { id: 3, text: "INTERSECT", isCorrect: false },
        { id: 4, text: "MINUS", isCorrect: false }
      ],
      rationale: "UNION은 합집합을 구하면서 중복을 제거하고 정렬을 수행합니다. UNION ALL은 중복을 포함합니다.",
      hint: "UNION은 '유니크(Unique)'하게 합친다고 기억하세요."
    },
    {
      id: 3,
      category: "집합 연산자 기초",
      question: "다음 중 두 테이블에서 공통으로 존재하는 행만 추출하고 싶을 때 사용하는 집합 연산자는?",
      options: [
        { id: 1, text: "UNION", isCorrect: false },
        { id: 2, text: "MINUS", isCorrect: false },
        { id: 3, text: "INTERSECT", isCorrect: true },
        { id: 4, text: "EXCEPT", isCorrect: false }
      ],
      rationale: "INTERSECT는 교집합을 의미하며 양쪽에 모두 존재하는 데이터만 결과로 냅니다.",
      hint: "벤다이어그램의 겹치는 부분을 떠올려 보세요."
    },
    {
      id: 4,
      category: "집합 연산자 기초",
      question: "SQL Server 환경에서 차집합을 구하기 위해 사용하는 연산자는?",
      options: [
        { id: 1, text: "MINUS", isCorrect: false },
        { id: 2, text: "EXCEPT", isCorrect: true },
        { id: 3, text: "DIFFERENCE", isCorrect: false },
        { id: 4, text: "SUBTRACT", isCorrect: false }
      ],
      rationale: "Oracle은 MINUS를 사용하지만, SQL Server(T-SQL)는 EXCEPT를 사용합니다.",
      hint: "\"Oracle은 마이너스(-), MS는 익셉트(Except)!\""
    },
    {
      id: 5,
      category: "그룹 함수 기초",
      question: "GROUP BY ROLLUP(DEPTNO) 쿼리를 실행했을 때 나오는 결과의 구성으로 옳은 것은?",
      options: [
        { id: 1, text: "부서별 합계만 출력된다.", isCorrect: false },
        { id: 2, text: "전체 총계만 출력된다.", isCorrect: false },
        { id: 3, text: "부서별 합계와 전체 총계가 함께 출력된다.", isCorrect: true },
        { id: 4, text: "부서별 합계와 직업별 합계가 함께 출력된다.", isCorrect: false }
      ],
      rationale: "ROLLUP은 나열된 컬럼에 대해 계층적인 소계와 전체 총계를 생성합니다.",
      hint: "\"롤(ROLL)업은 아래에서 위로 말아 올리듯 총계까지 낸다!\""
    },
    {
      id: 6,
      category: "집합 연산자 중급",
      question: "집합 연산자를 사용한 SQL 문에서 ORDER BY 절의 위치로 가장 적절한 것은?",
      options: [
        { id: 1, text: "첫 번째 SELECT 문 바로 뒤", isCorrect: false },
        { id: 2, text: "각 SELECT 문 마다 각각 사용", isCorrect: false },
        { id: 3, text: "마지막 SELECT 문의 맨 마지막에 딱 한 번 사용", isCorrect: true },
        { id: 4, text: "집합 연산자 바로 앞에 사용", isCorrect: false }
      ],
      rationale: "ORDER BY는 집합 연산으로 합쳐진 전체 결과에 대해 적용되므로 맨 마지막에 위치해야 합니다.",
      hint: "모든 데이터가 다 모인 다음에 정렬(줄 세우기)을 해야 의미가 있겠죠?"
    },
    {
      id: 7,
      category: "집합 연산자 중급",
      question: "UNION과 UNION ALL의 성능 차이에 대한 설명으로 가장 적절한 것은?",
      options: [
        { id: 1, text: "UNION은 중복 제거를 위해 내부적으로 정렬을 수행하므로 UNION ALL보다 느리다.", isCorrect: true },
        { id: 2, text: "UNION ALL은 중복을 확인해야 하므로 UNION보다 느리다.", isCorrect: false },
        { id: 3, text: "두 연산자의 성능 차이는 없다.", isCorrect: false },
        { id: 4, text: "UNION ALL은 인덱스를 사용할 수 없어 UNION보다 느리다.", isCorrect: false }
      ],
      rationale: "UNION은 중복 제거(Distinct)를 위해 데이터 정렬(Sort) 과정을 거치므로 시스템 부하가 더 큽니다.",
      hint: "\"중복 검사 안 하고 그냥 붙이는 UNION ALL이 광속이다!\""
    },
    {
      id: 8,
      category: "그룹 함수 중급",
      question: "GROUP BY ROLLUP(A, B)의 집계 조합으로 옳은 것은?",
      options: [
        { id: 1, text: "(A, B), (A), ()", isCorrect: true },
        { id: 2, text: "(A, B), (B), ()", isCorrect: false },
        { id: 3, text: "(A, B), (A), (B)", isCorrect: false },
        { id: 4, text: "(A), (B), ()", isCorrect: false }
      ],
      rationale: "ROLLUP은 오른쪽 인수를 하나씩 제거하며 집계합니다. (A, B) -> (A) -> () 순서입니다.",
      hint: "오른쪽 끝에서부터 하나씩 지우개로 지워나간다고 생각하세요."
    },
    {
      id: 9,
      category: "그룹 함수 중급",
      question: "다음 중 모든 가능한 조합에 대해 다차원적인 집계를 생성하는 함수는?",
      options: [
        { id: 1, text: "ROLLUP", isCorrect: false },
        { id: 2, text: "CUBE", isCorrect: true },
        { id: 3, text: "GROUPING SETS", isCorrect: false },
        { id: 4, text: "RANK", isCorrect: false }
      ],
      rationale: "CUBE는 결합 가능한 모든 조합(2^N)에 대해 소계와 총계를 구합니다.",
      hint: "정육면체(Cube)처럼 모든 면을 다 집계한다고 이해하세요."
    },
    {
      id: 10,
      category: "집합 연산자 중급",
      question: "집합 연산자 사용 시 데이터 타입에 대한 설명 중 옳은 것은?",
      options: [
        { id: 1, text: "문자와 숫자를 결합하면 자동으로 문자로 변환되어 결합된다.", isCorrect: false },
        { id: 2, text: "데이터 타입이 달라도 컬럼 순서만 맞으면 오류가 발생하지 않는다.", isCorrect: false },
        { id: 3, text: "데이터 타입은 반드시 일치하거나 상호 호환 가능한 유형이어야 한다.", isCorrect: true },
        { id: 4, text: "날짜형과 숫자형은 집합 연산이 불가능하다.", isCorrect: false }
      ],
      rationale: "집합 연산자는 암시적 형변환을 일부 지원하지만, 원칙적으로 데이터 타입이 호환되어야 하며 다를 경우 오류가 발생할 확률이 높습니다.",
      hint: "\"사과는 사과끼리, 배는 배끼리 쌓아야 안 무너집니다.\""
    },
    {
      id: 11,
      category: "그룹 함수 상급",
      question: "GROUP BY CUBE(A, B, C)를 수행했을 때 생성되는 집계 조합의 총 개수는? (전체 총계 포함)",
      options: [
        { id: 1, text: "3개", isCorrect: false },
        { id: 2, text: "4개", isCorrect: false },
        { id: 3, text: "7개", isCorrect: false },
        { id: 4, text: "8개", isCorrect: true }
      ],
      rationale: "CUBE의 집계 조합은 2^N개입니다. 인수가 3개이므로 2^3 = 8개입니다.",
      hint: "조합(Combination)의 모든 경우의 수입니다."
    },
    {
      id: 12,
      category: "집합 연산자 상급",
      question: "INTERSECT 연산자에 대한 설명으로 적절하지 않은 것은?",
      options: [
        { id: 1, text: "두 집합의 공통된 행을 반환한다.", isCorrect: false },
        { id: 2, text: "중복된 행은 하나로 표시된다.", isCorrect: false },
        { id: 3, text: "내부적으로 정렬 작업을 수행한다.", isCorrect: false },
        { id: 4, text: "첫 번째 집합에만 존재하는 행을 반환한다.", isCorrect: true }
      ],
      rationale: "④번 설명은 MINUS(또는 EXCEPT)에 대한 설명입니다.",
      hint: "INTERSECT는 '교집합'입니다."
    },
    {
      id: 13,
      category: "그룹 함수 상급",
      question: "GROUP BY ROLLUP(A, B)와 GROUP BY ROLLUP(B, A)의 결과에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "두 결과는 항상 동일하다.", isCorrect: false },
        { id: 2, text: "계층 구조가 다르므로 소계의 구성과 행의 수가 달라질 수 있다.", isCorrect: true },
        { id: 3, text: "전체 총계 행의 값이 서로 다르게 계산된다.", isCorrect: false },
        { id: 4, text: "두 함수 모두 모든 조합의 소계를 출력한다.", isCorrect: false }
      ],
      rationale: "ROLLUP은 인수의 순서에 따라 계층(Hierarchy)이 결정되므로 순서가 중요합니다.",
      hint: "\"부서별 직업합계\"와 \"직업별 부서합계\"는 소계의 의미가 다릅니다."
    },
    {
      id: 14,
      category: "그룹 함수 상급",
      question: "다음 중 원하는 집계 대상 컬럼을 자유롭게 나열하여 특정 소계만 구하고 싶을 때 가장 효율적인 함수는?",
      options: [
        { id: 1, text: "ROLLUP", isCorrect: false },
        { id: 2, text: "CUBE", isCorrect: false },
        { id: 3, text: "GROUPING SETS", isCorrect: true },
        { id: 4, text: "CASE WHEN", isCorrect: false }
      ],
      rationale: "GROUPING SETS는 지정한 조합만 집계하므로 불필요한 연산을 줄이고 유연하게 사용 가능합니다.",
      hint: "\"원하는 것만 쏙쏙 골라 담는 그룹핑 세츠!\""
    },
    {
      id: 15,
      category: "그룹 함수 상급",
      question: "GROUPING 함수가 반환하는 값의 의미로 옳은 것은?",
      options: [
        { id: 1, text: "해당 행이 실제 데이터 행이면 1, 집계 행이면 0을 반환한다.", isCorrect: false },
        { id: 2, text: "해당 행이 소계/총계를 위해 생성된 행이면 1, 아니면 0을 반환한다.", isCorrect: true },
        { id: 3, text: "해당 컬럼의 NULL 값을 0으로 변환한다.", isCorrect: false },
        { id: 4, text: "그룹화된 행의 개수를 반환한다.", isCorrect: false }
      ],
      rationale: "GROUPING 함수는 집계용으로 생성된 NULL을 판별하기 위해 사용하며, 집계 행일 때 1을 반환합니다.",
      hint: "\"집계 행이 맞나요? (1: Yes / 0: No)\""
    },
    {
      id: 16,
      category: "그룹 함수 심화",
      question: "다음 중 GROUP BY ROLLUP(A, B)와 동일한 결과를 반환하는 것은?",
      options: [
        { id: 1, text: "GROUP BY GROUPING SETS((A, B), (A), ())", isCorrect: true },
        { id: 2, text: "GROUP BY GROUPING SETS((A, B), (B), ())", isCorrect: false },
        { id: 3, text: "GROUP BY CUBE(A, B)", isCorrect: false },
        { id: 4, text: "GROUP BY A, B UNION ALL GROUP BY A", isCorrect: false }
      ],
      rationale: "ROLLUP의 계층 구조를 GROUPING SETS로 풀어서 표현하면 (A,B), (A), ()와 같습니다. ()는 전체 총계를 의미합니다.",
      hint: "시험에 정말 자주 나옵니다! ROLLUP을 수동으로 구현하는 법을 익히세요."
    },
    {
      id: 17,
      category: "집합 연산자 심화",
      question: "집합 연산자 사용 시 NULL 값의 처리에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "집합 연산자는 NULL을 값으로 인식하지 못해 무시한다.", isCorrect: false },
        { id: 2, text: "두 행의 컬럼 값이 모두 NULL이면 서로 다른 값으로 간주하여 중복 제거가 안 된다.", isCorrect: false },
        { id: 3, text: "집합 연산자는 NULL을 서로 동일한 값으로 인식하여 중복을 제거한다.", isCorrect: true },
        { id: 4, text: "UNION ALL에서만 NULL이 표시된다.", isCorrect: false }
      ],
      rationale: "WHERE 절 비교와 달리, 집합 연산자(UNION, INTERSECT 등)는 NULL을 같은 값으로 취급하여 중복을 제거합니다.",
      hint: "\"집합 연산자 세계에서는 NULL끼리 친구(동일함)입니다.\""
    },
    {
      id: 18,
      category: "그룹 함수 심화",
      question: "다음 SQL의 결과로 가장 적절한 것은?",
      code: "SELECT JOB, SUM(SAL) FROM EMP\nGROUP BY GROUPING SETS((JOB), ());",
      options: [
        { id: 1, text: "직업별 합계만 출력된다.", isCorrect: false },
        { id: 2, text: "전체 총계만 출력된다.", isCorrect: false },
        { id: 3, text: "직업별 합계와 전체 총계가 출력된다.", isCorrect: true },
        { id: 4, text: "오류가 발생한다.", isCorrect: false }
      ],
      rationale: "(JOB)은 직업별 합계를, ()는 빈 괄호로 전체 총계를 의미합니다.",
      hint: "GROUPING SETS 안의 빈 괄호는 GRAND TOTAL의 마법 주문입니다."
    },
    {
      id: 19,
      category: "집합 연산자 심화",
      question: "성능 최적화 관점에서 UNION ALL이 가능한 상황임에도 UNION을 사용하는 것이 부적절한 이유는?",
      options: [
        { id: 1, text: "UNION은 결과가 항상 더 적게 나오기 때문이다.", isCorrect: false },
        { id: 2, text: "불필요한 정렬(Sort) 부하가 발생하여 응답 속도가 느려지기 때문이다.", isCorrect: true },
        { id: 3, text: "UNION은 인덱스 스캔을 강제하기 때문이다.", isCorrect: false },
        { id: 4, text: "UNION은 서브쿼리 내에서 사용이 불가능하기 때문이다.", isCorrect: false }
      ],
      rationale: "데이터의 중복이 없다는 것을 이미 알고 있다면, 정렬 부하가 있는 UNION보다는 UNION ALL이 훨씬 효율적입니다.",
      hint: "\"DB에게 힘든 정렬 시키지 마세요!\""
    },
    {
      id: 20,
      category: "그룹 함수 심화",
      question: "아래 SQL의 빈칸에 들어갈 코드로 '부서 합계'라는 명칭을 부여하고 싶을 때 가장 적절한 것은?",
      code: "SELECT \n    CASE WHEN (  빈칸  ) = 1 THEN '부서 합계' ELSE JOB END AS 명칭,\n    SUM(SAL)\nFROM EMP\nGROUP BY ROLLUP(JOB);",
      options: [
        { id: 1, text: "COUNT(JOB)", isCorrect: false },
        { id: 2, text: "GROUPING(JOB)", isCorrect: true },
        { id: 3, text: "NVL(JOB)", isCorrect: false },
        { id: 4, text: "ISNULL(JOB)", isCorrect: false }
      ],
      rationale: "ROLLUP으로 인해 생성된 소계 행은 GROUPING(컬럼)의 결과가 1이 됩니다. 이를 CASE나 DECODE로 처리해 이름을 바꿉니다.",
      hint: "GROUPING은 보고서의 예쁜 이름을 만들어주는 일등공신입니다."
    }
  ],
  10: [
    {
      id: 1,
      category: "윈도우 함수 기초",
      question: "다음 중 윈도우 함수와 GROUP BY 절의 차이점에 대한 설명으로 가장 적절한 것은?",
      options: [
        { id: 1, text: "윈도우 함수는 행의 수를 줄이지만, GROUP BY는 행의 수를 유지한다.", isCorrect: false },
        { id: 2, text: "윈도우 함수는 행의 수를 유지하지만, GROUP BY는 행의 수를 줄인다.", isCorrect: true },
        { id: 3, text: "두 기능 모두 행의 수를 줄여서 집계 결과를 보여준다.", isCorrect: false },
        { id: 4, text: "윈도우 함수는 SELECT 절에서 사용할 수 없다.", isCorrect: false }
      ],
      rationale: "GROUP BY는 데이터를 그룹별로 압축(집계)하여 행 수가 줄어들지만, 윈도우 함수는 개별 행의 상세 정보를 유지하면서 분석 결과를 옆에 추가합니다.",
      hint: "내 성적표 옆에 '반 평균'이 찍히는지, 아니면 '반 평균'만 덜렁 나오는지 생각해보세요."
    },
    {
      id: 2,
      category: "윈도우 함수 기초",
      question: "윈도우 함수 사용 시 반드시 함께 작성해야 하는 필수 키워드는?",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "GROUP BY", isCorrect: false },
        { id: 3, text: "OVER", isCorrect: true },
        { id: 4, text: "HAVING", isCorrect: false }
      ],
      rationale: "윈도우 함수는 항상 '함수() OVER ( ... )' 형식을 갖춰야 합니다.",
      hint: "창문(Window)을 넘어서(OVER) 본다고 외우세요!"
    },
    {
      id: 3,
      category: "윈도우 함수 기초",
      question: "다음 중 동점자가 있을 때 동일 순위를 부여하고, 그 다음 순위는 건너뛰는(예: 1등, 1등, 3등) 함수는?",
      options: [
        { id: 1, text: "RANK", isCorrect: true },
        { id: 2, text: "DENSE_RANK", isCorrect: false },
        { id: 3, text: "ROW_NUMBER", isCorrect: false },
        { id: 4, text: "NTILE", isCorrect: false }
      ],
      rationale: "RANK는 올림픽 방식처럼 공동 순위만큼 다음 숫자를 건너뜁니다.",
      hint: "1등이 두 명이면 2등 없이 바로 3등으로 가는 냉정한 함수입니다."
    },
    {
      id: 4,
      category: "윈도우 함수 기초",
      question: "값이 동일하더라도 무조건 고유한 일련번호를 부여하는(예: 1, 2, 3, 4) 순위 함수는?",
      options: [
        { id: 1, text: "RANK", isCorrect: false },
        { id: 2, text: "DENSE_RANK", isCorrect: false },
        { id: 3, text: "ROW_NUMBER", isCorrect: true },
        { id: 4, text: "CUME_DIST", isCorrect: false }
      ],
      rationale: "ROW_NUMBER는 동일한 값에 대해서도 순차적인 고유 번호를 부여합니다.",
      hint: "출석 번호처럼 무조건 겹치지 않게 매기는 번호입니다."
    },
    {
      id: 5,
      category: "윈도우 함수 기초",
      question: "윈도우 함수 내부에서 '전체를 어떤 기준으로 나눌 것인가'를 지정하는 구문은?",
      options: [
        { id: 1, text: "ORDER BY", isCorrect: false },
        { id: 2, text: "PARTITION BY", isCorrect: true },
        { id: 3, text: "GROUP BY", isCorrect: false },
        { id: 4, text: "ROWS BETWEEN", isCorrect: false }
      ],
      rationale: "PARTITION BY는 전체 집합을 특정 기준(예: 부서, 성별)으로 나누는 역할을 합니다.",
      hint: "\"부서별\"로 등수를 매기고 싶다면 'PARTITION BY 부서'입니다."
    },
    {
      id: 6,
      category: "윈도우 함수 중급",
      question: "다음 데이터를 보고 DENSE_RANK() OVER (ORDER BY 점수 DESC)를 적용했을 때, 90점인 학생의 순위는? (데이터: 100점, 100점, 90점, 80점)",
      options: [
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "2", isCorrect: true },
        { id: 3, text: "3", isCorrect: false },
        { id: 4, text: "4", isCorrect: false }
      ],
      rationale: "DENSE_RANK는 공동 순위가 있어도 다음 숫자를 이어서 매깁니다. (1, 1, 2, 3)",
      hint: "빽빽하다는 뜻의 'Dense'답게 순위 사이에 빈틈이 없습니다."
    },
    {
      id: 7,
      category: "윈도우 함수 중급",
      question: "PARTITION BY DEPTNO를 사용하여 순위를 매길 때 발생하는 현상으로 옳은 것은?",
      options: [
        { id: 1, text: "부서 번호가 바뀌어도 순위는 계속 누적된다.", isCorrect: false },
        { id: 2, text: "부서 번호가 바뀔 때마다 순위가 1등부터 다시 시작된다.", isCorrect: true },
        { id: 3, text: "부서별로 한 명의 사원만 조회된다.", isCorrect: false },
        { id: 4, text: "전체 사원의 평균 급여가 출력된다.", isCorrect: false }
      ],
      rationale: "PARTITION BY로 나뉜 그룹이 변경되면 윈도우 함수의 계산은 다시 초기화(Reset)됩니다.",
      hint: "각 부서마다 '과탑'을 따로 뽑는다고 생각하세요."
    },
    {
      id: 8,
      category: "윈도우 함수 중급",
      question: "10명의 사원을 NTILE(3)으로 나누었을 때, 각 조의 인원 배분으로 옳은 것은?",
      options: [
        { id: 1, text: "4명, 3명, 3명", isCorrect: true },
        { id: 2, text: "3명, 3명, 4명", isCorrect: false },
        { id: 3, text: "3명, 3명, 3명, 1명", isCorrect: false },
        { id: 4, text: "5명, 5명, 0명", isCorrect: false }
      ],
      rationale: "NTILE(N)은 최대한 균등하게 나누되, 나머지가 생기면 앞의 조부터 한 명씩 더 배정합니다.",
      hint: "앞에서부터 한 명씩 더 챙겨주는 조 편성입니다."
    },
    {
      id: 9,
      category: "윈도우 함수 중급",
      question: "다음 중 윈도우 함수를 사용할 수 있는 위치로 옳은 것은?",
      options: [
        { id: 1, text: "SELECT 절", isCorrect: true },
        { id: 2, text: "WHERE 절", isCorrect: false },
        { id: 3, text: "GROUP BY 절", isCorrect: false },
        { id: 4, text: "HAVING 절", isCorrect: false }
      ],
      rationale: "윈도우 함수는 결과 집합이 결정된 후 적용되므로 SELECT 절에서만 사용할 수 있습니다. (정렬을 위해 ORDER BY 절에도 사용 가능)",
      hint: "필터링(WHERE)은 윈도우 함수보다 먼저 일어납니다."
    },
    {
      id: 10,
      category: "윈도우 함수 중급",
      question: "OVER 절 안에 ORDER BY가 없을 때 SUM(SAL) OVER()의 결과는?",
      options: [
        { id: 1, text: "급여순으로 누적된 합계", isCorrect: false },
        { id: 2, text: "해당 그룹(또는 전체)의 총 합계", isCorrect: true },
        { id: 3, text: "모든 행에 0이 출력됨", isCorrect: false },
        { id: 4, text: "오류 발생", isCorrect: false }
      ],
      rationale: "순서(ORDER BY)가 없으면 누적 계산을 할 수 없으므로 전체 합계를 모든 행에 동일하게 보여줍니다.",
      hint: "누적하려면 줄을 세워야 합니다. 줄이 없으면 그냥 통째로 더합니다."
    },
    {
      id: 11,
      category: "윈도우 함수 상급",
      question: "바로 이전 행의 특정 컬럼 값을 가져오는 함수는?",
      options: [
        { id: 1, text: "LEAD", isCorrect: false },
        { id: 2, text: "LAG", isCorrect: true },
        { id: 3, text: "FIRST_VALUE", isCorrect: false },
        { id: 4, text: "LAST_VALUE", isCorrect: false }
      ],
      rationale: "LAG는 현재 행을 기준으로 이전 행의 데이터를 가져옵니다.",
      hint: "게임에서 렉(Lag) 걸리면 뒤처지는 것을 떠올리세요."
    },
    {
      id: 12,
      category: "윈도우 함수 상급",
      question: "다음 SQL의 결과로 가장 적절한 것은?",
      code: "SELECT 월, 매출, LAG(매출, 1, 0) OVER (ORDER BY 월) AS 전월매출\nFROM 월별매출표;",
      options: [
        { id: 1, text: "1월의 '전월매출'은 NULL로 나온다.", isCorrect: false },
        { id: 2, text: "1월의 '전월매출'은 0으로 나온다.", isCorrect: true },
        { id: 3, text: "이전 달 매출이 없으면 오류가 발생한다.", isCorrect: false },
        { id: 4, text: "12월의 다음 달 매출을 가져온다.", isCorrect: false }
      ],
      rationale: "LAG의 세 번째 인자는 값이 없을 때(NULL일 때) 보여줄 기본값을 지정합니다.",
      hint: "NULL 대신 0을 넣어서 계산하기 편하게 만든 쿼리입니다."
    },
    {
      id: 13,
      category: "윈도우 함수 상급",
      question: "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING의 의미는?",
      options: [
        { id: 1, text: "맨 처음부터 현재 행까지", isCorrect: false },
        { id: 2, text: "현재 행부터 맨 마지막까지", isCorrect: false },
        { id: 3, text: "바로 앞 행, 현재 행, 바로 다음 행 (총 3줄)", isCorrect: true },
        { id: 4, text: "전체 행", isCorrect: false }
      ],
      rationale: "현재 행을 기준으로 앞(PRECEDING) 1줄과 뒤(FOLLOWING) 1줄을 포함한 범위를 의미합니다.",
      hint: "나를 중심으로 앞뒤 동료 한 명씩만 챙기는 범위입니다."
    },
    {
      id: 14,
      category: "윈도우 함수 상급",
      question: "다음 중 누적 분포를 구하는 함수로, 나보다 순위가 높거나 같은 사람의 비율을 0~1 사이로 반환하는 함수는?",
      options: [
        { id: 1, text: "PERCENT_RANK", isCorrect: false },
        { id: 2, text: "CUME_DIST", isCorrect: true },
        { id: 3, text: "RATIO_TO_REPORT", isCorrect: false },
        { id: 4, text: "NTILE", isCorrect: false }
      ],
      rationale: "CUME_DIST는 누적 분포를 계산하며, (나보다 작거나 같은 값의 수 / 전체 건수)를 반환합니다.",
      hint: "4명 중 1등이면 1/4 = 0.25가 나옵니다."
    },
    {
      id: 15,
      category: "윈도우 함수 상급",
      question: "윈도우 함수에서 UNBOUNDED PRECEDING의 의미는?",
      options: [
        { id: 1, text: "현재 행의 값", isCorrect: false },
        { id: 2, text: "파티션의 맨 마지막 행", isCorrect: false },
        { id: 3, text: "파티션의 맨 첫 번째 행 (끝없는 이전)", isCorrect: true },
        { id: 4, text: "값이 NULL인 행", isCorrect: false }
      ],
      rationale: "윈도우 범위의 시작점을 파티션의 첫 번째 행으로 고정할 때 사용합니다.",
      hint: "누적 합계를 구할 때 '맨 처음부터'를 의미하는 필수 키워드입니다."
    },
    {
      id: 16,
      category: "윈도우 함수 심화",
      question: "다음 중 ROWS와 RANGE의 차이점에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "ROWS는 값의 크기를 기준으로, RANGE는 행의 개수를 기준으로 계산한다.", isCorrect: false },
        { id: 2, text: "ROWS는 물리적인 행의 위치를, RANGE는 논리적인 값의 크기를 기준으로 한다.", isCorrect: true },
        { id: 3, text: "두 키워드 모두 결과가 항상 동일하다.", isCorrect: false },
        { id: 4, text: "RANGE는 동점자가 있어도 무조건 한 행씩 누적한다.", isCorrect: false }
      ],
      rationale: "ROWS는 행 번호로 범위를 잡고, RANGE는 컬럼의 값을 기준으로 범위를 잡습니다.",
      hint: "값이 같은 데이터가 여러 개 있을 때 RANGE는 한꺼번에 묶어서 처리합니다."
    },
    {
      id: 17,
      category: "윈도우 함수 심화",
      question: "아래 데이터를 보고 SUM(금액) OVER (ORDER BY 금액 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)를 실행했을 때, 두 번째 100원 행의 결과값은? (데이터: 100원(A), 100원(B), 300원(C))",
      options: [
        { id: 1, text: "100", isCorrect: false },
        { id: 2, text: "200", isCorrect: true },
        { id: 3, text: "500", isCorrect: false },
        { id: 4, text: "0", isCorrect: false }
      ],
      rationale: "RANGE는 값이 같은(100원) 행들을 하나의 논리적 그룹으로 보기 때문에 A, B행 모두 합산된 200을 출력합니다.",
      hint: "값이 같으면 '동지'로 보고 한방에 계산하는 것이 RANGE의 특징입니다."
    },
    {
      id: 18,
      category: "윈도우 함수 심화",
      question: "LAST_VALUE 함수를 사용할 때 ORDER BY만 적고 범위를 지정하지 않으면 현재 행의 값이 나오는 이유는 무엇인가?",
      options: [
        { id: 1, text: "함수가 고장 났기 때문이다.", isCorrect: false },
        { id: 2, text: "윈도우 함수의 기본 범위(Default)가 UNBOUNDED PRECEDING AND CURRENT ROW이기 때문이다.", isCorrect: true },
        { id: 3, text: "LAST_VALUE는 원래 현재 행까지만 읽는다.", isCorrect: false },
        { id: 4, text: "ORDER BY를 쓰면 자동으로 ROWS 모드가 되기 때문이다.", isCorrect: false }
      ],
      rationale: "기본 범위가 '처음부터 현재 행'까지이므로, 현재 행이 그 윈도우 안에서는 항상 '마지막'이 됩니다.",
      hint: "진짜 마지막을 보려면 창문을 UNBOUNDED FOLLOWING(끝까지) 열어줘야 합니다."
    },
    {
      id: 19,
      category: "윈도우 함수 심화",
      question: "전체 합계 대비 현재 행의 값이 차지하는 비율을 구하는 함수는?",
      options: [
        { id: 1, text: "RATIO_TO_REPORT", isCorrect: true },
        { id: 2, text: "PERCENT_RANK", isCorrect: false },
        { id: 3, text: "CUME_DIST", isCorrect: false },
        { id: 4, text: "ROW_NUMBER", isCorrect: false }
      ],
      rationale: "RATIO_TO_REPORT는 파티션 내 전체 합계에 대한 개별 행의 비중을 계산합니다.",
      hint: "\"내 월급 / 우리 부서 전체 월급 합계\"를 구할 때 딱입니다."
    },
    {
      id: 20,
      category: "윈도우 함수 심화",
      question: "SQL의 논리적 실행 순서상 윈도우 함수가 실행되는 시점은?",
      options: [
        { id: 1, text: "WHERE 절 실행 직후", isCorrect: false },
        { id: 2, text: "SELECT 절에서 컬럼이 선택될 때", isCorrect: true },
        { id: 3, text: "ORDER BY 절 실행 직후", isCorrect: false },
        { id: 4, text: "FROM 절에서 데이터를 읽을 때", isCorrect: false }
      ],
      rationale: "윈도우 함수는 WHERE, GROUP BY, HAVING 절까지 모두 완료된 후 SELECT 단계에서 계산됩니다.",
      hint: "모든 필터링과 그룹화가 끝난 '최종 명단' 위에서 계산이 시작됩니다."
    }
  ],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
};
