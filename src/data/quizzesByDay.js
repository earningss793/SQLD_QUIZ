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
    { id: 11, category: "OUTER JOIN과 Oracle", question: "다음 데이터 상황에서 결과값이 가장 많은 쿼리는?\n(회원: 100명, 구매이력: 50건-전원회원)", options: [{ id: 1, text: "SELECT * FROM 회원 INNER JOIN 구매이력 ...", isCorrect: false }, { id: 2, text: "SELECT * FROM 회원 LEFT OUTER JOIN 구매이력 ...", isCorrect: true }, { id: 3, text: "SELECT * FROM 회원 RIGHT OUTER JOIN 구매이력 ...", isCorrect: false }, { id: 4, text: "①과 ③의 결과 건수는 같다.", isCorrect: false }], rationale: "INNER JOIN: 50건 (교집합), LEFT JOIN: 100건 (회원 전체), RIGHT JOIN: 50건 (구매이력 전체). 따라서 ②번이 가장 많습니다.", hint: "①은 구매한 사람만(50명), ②는 구매 안 한 사람 포함(100명), ③은 구매이력 기준(50건)" },
    { id: 12, category: "OUTER JOIN과 Oracle", question: "Oracle의 (+) 문법으로 구현할 수 없는 조인은?", options: [{ id: 1, text: "INNER JOIN", isCorrect: false }, { id: 2, text: "LEFT OUTER JOIN", isCorrect: false }, { id: 3, text: "RIGHT OUTER JOIN", isCorrect: false }, { id: 4, text: "FULL OUTER JOIN", isCorrect: true }], rationale: "Oracle 전용 문법으로는 양쪽 모두에 (+)를 붙이는 FULL OUTER JOIN을 한 번에 수행할 수 없습니다. (UNION 연산자를 이용해야 함).", hint: "양쪽에 뿔(+)을 달 수는 없습니다." },
    { id: 13, category: "고급 조인", question: "NATURAL JOIN 사용 시 주의사항으로 옳은 것은?", options: [{ id: 1, text: "ON 절을 사용하여 구체적인 조인 조건을 명시해야 한다.", isCorrect: false }, { id: 2, text: "조인 기준이 되는 컬럼에는 테이블 별칭(Alias)을 사용할 수 없다.", isCorrect: true }, { id: 3, text: "서로 다른 이름의 컬럼끼리도 조인이 가능하다.", isCorrect: false }, { id: 4, text: "SQL Server(MSSQL)에서 가장 많이 사용하는 방식이다.", isCorrect: false }], rationale: "NATURAL JOIN은 이름과 타입이 같은 컬럼을 자동으로 찾으며, 해당 조인 컬럼 앞에는 테이블명이나 별칭 접두어를 붙이면 에러가 발생합니다.", hint: "\"우리 자연스럽게(NATURAL) 만났으니까, 니꺼 내꺼(Alias) 따지지 말자.\"" },
    { id: 14, category: "고급 조인", question: "다음 중 USING 절을 사용한 조인 쿼리 중 문법적으로 올바른 것은?", options: [{ id: 1, text: "SELECT E.ENAME, D.DEPTNO FROM EMP E JOIN DEPT D USING (E.DEPTNO = D.DEPTNO)", isCorrect: false }, { id: 2, text: "SELECT E.ENAME, DEPTNO FROM EMP E JOIN DEPT D USING (DEPTNO)", isCorrect: true }, { id: 3, text: "SELECT E.ENAME, D.DEPTNO FROM EMP E JOIN DEPT D USING (DEPTNO)", isCorrect: false }, { id: 4, text: "SELECT E.ENAME, DEPTNO FROM EMP E JOIN DEPT D ON USING (DEPTNO)", isCorrect: false }], rationale: "① 조건식이 아닌 컬럼명만 와야 함. ③ SELECT 절의 D.DEPTNO에서 별칭 사용 불가. ④ ON과 USING은 같이 쓸 수 없음.", hint: "USING 안에는 컬럼명만! 그리고 SELECT 절에서도 그 컬럼은 주인 없이(Alias 없이) 써야 합니다." },
    { id: 15, category: "고급 조인", question: "다음 SQL 문장의 조인 방식은?", code: "SELECT E.ENAME, S.GRADE\nFROM EMP E, SALGRADE S\nWHERE E.SAL BETWEEN S.LOSAL AND S.HISAL;", options: [{ id: 1, text: "EQUI JOIN", isCorrect: false }, { id: 2, text: "SELF JOIN", isCorrect: false }, { id: 3, text: "Non-EQUI JOIN", isCorrect: true }, { id: 4, text: "OUTER JOIN", isCorrect: false }], rationale: "조인 조건이 정확한 일치(=)가 아닌 범위나 부등호를 사용하는 경우를 비등가 조인(Non-EQUI JOIN)이라고 합니다.", hint: "등호(=)가 보이지 않고 범위(BETWEEN)를 체크하고 있습니다." },
    { id: 16, category: "고급 조인", question: "SELF JOIN에 대한 설명으로 가장 적절한 것은?", options: [{ id: 1, text: "자기 자신과는 조인할 수 없다.", isCorrect: false }, { id: 2, text: "반드시 테이블에 서로 다른 별칭(Alias)을 부여하여 식별해야 한다.", isCorrect: true }, { id: 3, text: "OUTER JOIN으로는 수행할 수 없다.", isCorrect: false }, { id: 4, text: "계층형 데이터(예: 부장-과장-대리)를 조회할 때 사용할 수 없다.", isCorrect: false }], rationale: "동일한 테이블을 조인하므로, 컴퓨터가 구분할 수 있도록 반드시 서로 다른 Alias(예: A, B)를 주어야 합니다.", hint: "거울을 보고 있는 나와 실제의 나를 구분하려면 이름표가 달라야 합니다." },
    { id: 17, category: "고급 조인", question: "3개의 테이블 A, B, C를 조인하려고 합니다. 올바른 JOIN 순서는? (A-B 연결, B-C 연결)", options: [{ id: 1, text: "순서는 상관없다.", isCorrect: false }, { id: 2, text: "A와 C를 먼저 조인하고 B를 조인한다.", isCorrect: false }, { id: 3, text: "A와 B를 조인한 결과에 C를 조인한다.", isCorrect: true }, { id: 4, text: "한 번의 ON 절에 3개 테이블 조건을 모두 쓴다.", isCorrect: false }], rationale: "조인은 논리적으로 두 테이블씩 차례대로 수행됩니다. 연결고리가 있는 A-B를 먼저 묶고, 그 결과(B가 포함됨)를 이용해 C와 묶습니다.", hint: "A와 B를 먼저, 그리고 그 결과와 C를." },
    { id: 18, category: "이미지 추론", question: "다음 3중 조인 쿼리 중 문법적 오류가 발생하는 것은?", options: [{ id: 1, text: "SELECT E.EMP_NAME, D.DEPT_NAME FROM ... WHERE E.DEPT_ID = D.DEPT_ID;", isCorrect: false }, { id: 2, text: "SELECT E.EMP_NAME, L.CITY FROM ... WHERE E.DEPT_ID = D.DEPT_ID AND D.LOC_ID = L.LOC_ID;", isCorrect: false }, { id: 3, text: "SELECT E.EMP_NAME, L.CITY FROM employees E, departments D, locations L WHERE E.DEPT_ID = D.DEPT_ID AND E.LOC_ID = L.LOC_ID;", isCorrect: true }, { id: 4, text: "SELECT D.DEPT_NAME, L.CITY FROM ... JOIN ... ON D.LOC_ID = L.LOC_ID;", isCorrect: false }], rationale: "EMPLOYEES 테이블에는 LOC_ID 컬럼이 없습니다. 따라서 E.LOC_ID라는 표현은 \"부적합한 식별자\" 오류를 발생시킵니다. 반드시 DEPARTMENTS(D)를 거쳐서 D.LOC_ID를 사용해야 합니다.", hint: "사원(E) 테이블에 도시코드(LOC_ID)가 있나요? 징검다리를 건너뛰면 안 됩니다." },
    { id: 19, category: "이미지 추론", question: "다음 PRODUCTS 테이블과 ORDERS 테이블에 대해 아래 SQL을 실행했을 때, 결과 건수로 올바른 것은?", tables: [{ name: "PRODUCTS (3건)", headers: ["NAME", "PRICE"], rows: [["A", "500"], ["B", "1500"], ["C", "2500"]] }, { name: "ORDERS (6건)", headers: ["ID", "CATEGORY", "AMOUNT"], rows: [["C01", "Elec", "1200"], ["C02", "Books", "50"], ["...", "...", "..."]] }], code: "SELECT P.PRODUCT_NAME, O.AMOUNT\nFROM PRODUCTS P, ORDERS O;", options: [{ id: 1, text: "3건", isCorrect: false }, { id: 2, text: "6건", isCorrect: false }, { id: 3, text: "9건", isCorrect: false }, { id: 4, text: "18건", isCorrect: true }], rationale: "두 테이블 간의 연결 조건이 없습니다. 조인 조건이 없을 때 데이터베이스는 모든 경우의 수를 조합하는 CROSS JOIN (Cartesian Product)을 수행합니다. 3 * 6 = 18건.", hint: "WHERE 절이나 ON 절(조인 조건)이 없는 조인을 눈여겨보세요." },
    { id: 20, category: "이미지 추론", question: "다음 PRODUCTS 테이블과 가상의 PRICE_GRADE 테이블을 조인하여 가격 등급을 매기려고 합니다. SQL 실행 결과로 올바른 것은?", tables: [{ name: "PRODUCTS", headers: ["NAME", "PRICE"], rows: [["A", "500"], ["B", "1500"], ["C", "2500"]] }, { name: "PRICE_GRADE", headers: ["GRADE", "MIN", "MAX"], rows: [["Low", "0", "1000"], ["Mid", "1001", "2000"], ["High", "2001", "9999"]] }], code: "SELECT P.PRODUCT_NAME, G.GRADE\nFROM PRODUCTS P\nJOIN PRICE_GRADE G\n  ON P.PRICE BETWEEN G.MIN_PRICE AND G.MAX_PRICE;", options: [{ id: 1, text: "A: Low / B: Mid / C: High", isCorrect: true }, { id: 2, text: "A: Low / B: NULL / C: High", isCorrect: false }, { id: 3, text: "A: Low / B: Low / C: Mid", isCorrect: false }, { id: 4, text: "결과 없음 (에러 발생)", isCorrect: false }], rationale: "Non-EQUI JOIN (비등가 조인): 조인 조건이 정확히 일치(=)하지 않아도, 범위(BETWEEN) 조건에 만족하면 조인이 성립합니다. A(500)->Low, B(1500)->Mid, C(2500)->High.", hint: "조인 조건에 등호(=)가 없어도 조인이 될까요? (Non-EQUI JOIN)" },
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
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
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
