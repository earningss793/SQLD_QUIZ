
### 🏆 [SQLD 실전 대비] 고난도 취약 유형 집중 공략 20제

#### [유형 1] 계층형 질의: PRIOR의 방향성 및 동작 원리

**문항 1. 다음 EMP 테이블을 대상으로 계층형 질의를 수행하고자 한다. 말단 사원(자식)에서부터 사장(부모) 방향으로 거슬러 올라가는 역방향(Bottom-Up) 전개를 수행하기 위한 올바른 `CONNECT BY` 조건은 무엇인가?**

> **[EMP 테이블 구조]**
> EMPNO(사원번호, PK), ENAME(사원명), MGR(관리자사번, FK)

① `CONNECT BY EMPNO = MGR`
② `CONNECT BY PRIOR EMPNO = MGR`
③ `CONNECT BY PRIOR MGR = EMPNO`
④ `CONNECT BY MGR = PRIOR EMPNO`

* **정답:** ③
* **힌트:** `PRIOR` 키워드가 가리키는 대상이 '방금 읽은 현재 노드'임을 기억하십시오.
* **해설:** 역방향 전개는 현재 읽은 노드(자식)의 관리자사번(MGR)을 다음 검색 대상의 사원번호(EMPNO)로 삼아 부모를 찾아가는 방식입니다. 따라서 방금 읽은 자식 노드의 MGR에 `PRIOR`를 붙여 `CONNECT BY PRIOR MGR = EMPNO` (또는 `EMPNO = PRIOR MGR`)로 작성해야 합니다.

**문항 2. 아래의 계층형 쿼리를 실행했을 때, 데이터가 출력되는 순서와 정렬 기준에 대한 설명으로 가장 적절한 것은?**

```sql
SELECT EMPNO, ENAME, LEVEL
FROM EMP
START WITH MGR IS NULL
CONNECT BY PRIOR EMPNO = MGR
ORDER SIBLINGS BY ENAME DESC;

```

① 전체 데이터를 먼저 ENAME의 내림차순으로 정렬한 후 계층 구조를 생성한다.
② 루트 노드부터 시작하여 순방향(Top-Down)으로 전개하며, 동일한 부모를 가진 형제 노드들 사이에서만 ENAME을 기준으로 내림차순 정렬한다.
③ 역방향(Bottom-Up)으로 전개하며, 최하위 레벨부터 최상위 레벨 순으로 출력한다.
④ `ORDER SIBLINGS BY` 절로 인해 계층 구조가 무너지고 ENAME 내림차순으로 단순 출력된다.

* **정답:** ②
* **힌트:** `ORDER SIBLINGS BY`는 계층 구조(Tree)의 무결성을 유지하기 위한 전용 정렬 구문입니다.
* **해설:** `PRIOR EMPNO = MGR`은 순방향 전개를 의미합니다. `ORDER SIBLINGS BY`는 계층 구조를 훼손하지 않고, 같은 레벨(Level)에 속한 형제(Siblings) 노드들 간의 정렬만을 수행합니다.

**문항 3. 다음 중 계층형 질의의 가상 컬럼 및 함수에 대한 설명으로 올바르지 않은 것은?**
① `LEVEL`은 루트 데이터를 1로 시작하여 리프(Leaf) 데이터까지 하위로 내려갈수록 1씩 증가하는 가상 컬럼이다.
② `CONNECT_BY_ISLEAF`는 해당 노드가 트리의 최하단(자식이 없는 노드)일 경우 1을, 그렇지 않을 경우 0을 반환한다.
③ `SYS_CONNECT_BY_PATH(컬럼명, 구분자)`는 루트 노드부터 현재 노드까지의 경로를 지정된 구분자로 연결하여 문자열로 반환한다.
④ `CONNECT BY` 절에 `NOCYCLE` 옵션을 추가하면 순환(Cycle) 구조 발생 시 에러를 반환하고 쿼리 실행을 강제 중단한다.

* **정답:** ④
* **힌트:** `NOCYCLE` 옵션의 목적은 에러에 의한 중단이 아니라, 예외 처리를 통한 실행 유지에 있습니다.
* **해설:** `NOCYCLE` 옵션을 사용하면, 자식이 부모가 되고 부모가 다시 자식이 되는 무한 루프(Cycle) 데이터가 존재하더라도 런타임 에러를 발생시키지 않고 순환이 발생한 지점까지만 전개한 후 실행을 정상적으로 이어갑니다.

#### [유형 2] 표를 토대로 한 SQL 쿼리문 추론

**문항 4. 다음 [부서별_매출] 테이블을 조회하여, 매출이 부서의 평균 매출보다 높은 부서와 매출액을 추출하고자 한다. 이를 달성하기 위한 가장 적절한 SQL 쿼리는 무엇인가?**

> **[부서별_매출]**
> DEPT_ID(부서ID), REVENUE(매출액)

①

```sql
SELECT DEPT_ID, REVENUE 
FROM 부서별_매출 A
WHERE REVENUE > (SELECT AVG(REVENUE) FROM 부서별_매출 B WHERE A.DEPT_ID = B.DEPT_ID);

```

②

```sql
SELECT DEPT_ID, REVENUE 
FROM 부서별_매출
WHERE REVENUE > AVG(REVENUE)
GROUP BY DEPT_ID;

```

③

```sql
SELECT DEPT_ID, REVENUE 
FROM 부서별_매출 A
HAVING REVENUE > (SELECT AVG(REVENUE) FROM 부서별_매출 B GROUP BY DEPT_ID);

```

④

```sql
SELECT DEPT_ID, REVENUE 
FROM 부서별_매출 
WHERE REVENUE > (SELECT AVG(REVENUE) FROM 부서별_매출);

```

* **정답:** ①
* **힌트:** 메인 쿼리의 특정 행을 서브쿼리로 전달하여 비교하는 '연관 서브쿼리(Correlated Subquery)'의 개념을 적용해야 합니다.
* **해설:** 각 부서의 매출액이 **'해당 부서'**의 평균 매출액보다 높은지를 비교해야 하므로, 메인 쿼리의 `DEPT_ID`를 서브쿼리로 전달하여 조건에 맞는 평균을 구하는 연관 서브쿼리(①번)를 작성해야 합니다. ②번은 WHERE 절에서 집계 함수를 사용할 수 없어 문법 오류가 발생합니다.

**문항 5. 아래 [주문] 테이블에서 `CUSTOMER_ID`별로 가장 높은 `AMOUNT`를 기록한 주문 데이터를 추출하고자 한다. 조건에 맞는 올바른 SQL 구문은?**

> **[주문]**
> ORDER_ID(주문번호), CUSTOMER_ID(고객ID), AMOUNT(주문금액)

① `SELECT * FROM 주문 WHERE AMOUNT IN (SELECT MAX(AMOUNT) FROM 주문 GROUP BY ORDER_ID);`
② `SELECT * FROM 주문 O1 WHERE AMOUNT = (SELECT MAX(AMOUNT) FROM 주문 O2 WHERE O1.CUSTOMER_ID = O2.CUSTOMER_ID);`
③ `SELECT CUSTOMER_ID, MAX(AMOUNT) FROM 주문 GROUP BY CUSTOMER_ID HAVING AMOUNT = MAX(AMOUNT);`
④ `SELECT * FROM 주문 WHERE AMOUNT >= ALL (SELECT AMOUNT FROM 주문 GROUP BY CUSTOMER_ID);`

* **정답:** ②
* **힌트:** 그룹화된 최댓값 정보만으로는 전체 원본 데이터(ORDER_ID 등)를 함께 출력할 수 없으므로 서브쿼리와 메인 쿼리의 조인 형태가 필요합니다.
* **해설:** 고객별 최댓값을 구한 후 해당 최댓값을 가진 원본 행을 추출해야 합니다. 연관 서브쿼리를 사용하여 현재 행의 `CUSTOMER_ID`에 해당하는 최대 `AMOUNT`를 구하고, 현재 행의 `AMOUNT`가 그 최댓값과 일치하는지 비교하는 ②번이 올바른 쿼리입니다.

**문항 6. 다음 [SALES] 테이블을 대상으로 집계 쿼리를 수행한 결과가 아래의 [결과 표]와 같았다. 이때 빈칸에 들어갈 알맞은 그룹 함수는 무엇인가?**

> **[SALES]**
> REGION(지역), PRODUCT(상품), AMT(매출)
> **[결과 표]**
> | REGION | PRODUCT | SUM(AMT) |
> |---|---|---|
> | 서울 | 노트북 | 100 |
> | 서울 | 마우스 | 50 |
> | 서울 | (NULL) | 150 |
> | 부산 | 노트북 | 200 |
> | 부산 | (NULL) | 200 |
> | (NULL) | (NULL) | 350 |

```sql
SELECT REGION, PRODUCT, SUM(AMT)
FROM SALES
GROUP BY ( 빈칸 );

```

① `CUBE(REGION, PRODUCT)`
② `ROLLUP(REGION, PRODUCT)`
③ `GROUPING SETS(REGION, PRODUCT)`
④ `ROLLUP(PRODUCT, REGION)`

* **정답:** ②
* **힌트:** (지역별+상품별) 상세 ➔ (지역별) 소계 ➔ (전체) 총계 순으로 계층적 집계가 이루어졌습니다.
* **해설:** 결과 집합을 보면 (지역, 상품) 그룹화, (지역) 소계, () 전체 총계가 산출되었습니다. 이는 우측부터 요소를 하나씩 제거하며 계층적으로 집계하는 `ROLLUP(REGION, PRODUCT)`의 전형적인 결과입니다. 만약 `CUBE`였다면 (상품별) 소계 행도 존재해야 합니다.

**문항 7. 아래 [사원] 테이블을 조회할 때, 보너스(COMM)가 NULL인 사원은 급여(SAL)의 10%를, 보너스가 있는 사원은 급여의 20%를 '예상_수당'으로 출력하고자 한다. 빈칸 ( A )에 들어갈 가장 알맞은 단일행 함수는 무엇인가?**

```sql
SELECT EMPNO, 
       ( A )(COMM, SAL * 0.2, SAL * 0.1) AS 예상_수당
FROM 사원;

```

① `NVL`
② `NULLIF`
③ `COALESCE`
④ `NVL2`

* **정답:** ④
* **힌트:** 특정 속성의 값이 NULL인지 아닌지에 따라 두 가지 다른 수식을 분기 처리하는 함수입니다.
* **해설:** `NVL2(expr1, expr2, expr3)` 함수는 expr1이 NULL이 아니면 expr2를 반환하고, NULL이면 expr3를 반환합니다.

#### [유형 3] 동일한 결과를 반환하는 SQL문 추론 (동치성)

**문항 8. 다음 중 아래의 비연관 다중 행 서브쿼리 문장과 동일한 실행 결과를 반환하는 SQL 문장은 어느 것인가?**

```sql
SELECT ENAME FROM EMP 
WHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL');

```

① `SELECT ENAME FROM EMP E WHERE EXISTS (SELECT 1 FROM DEPT D WHERE E.DEPTNO = D.DEPTNO AND LOC = 'SEOUL');`
② `SELECT ENAME FROM EMP E WHERE DEPTNO = (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL');`
③ `SELECT ENAME FROM EMP E JOIN DEPT D ON E.EMPNO = D.DEPTNO WHERE D.LOC = 'SEOUL';`
④ `SELECT ENAME FROM EMP E WHERE DEPTNO = ANY (SELECT LOC FROM DEPT WHERE LOC = 'SEOUL');`

* **정답:** ①
* **힌트:** `IN` 연산자는 내부 서브쿼리에 해당하는 값이 존재하는지를 판별하므로, 상관 서브쿼리를 활용한 특정 존재 판별 연산자와 치환될 수 있습니다.
* **해설:** `IN` 구문은 메인 쿼리의 속성 값이 서브쿼리 결과 집합에 존재하는지 확인합니다. 이는 연관 서브쿼리를 활용한 `EXISTS` 연산자와 논리적으로 완벽하게 동일한 결과를 도출합니다. ②번은 서브쿼리가 다중 행을 반환할 경우 에러가 발생합니다.

**문항 9. 오라클(Oracle) 전용 외부 조인 문법으로 작성된 아래 쿼리를 ANSI 표준 SQL 문법으로 바르게 변환한 것은?**

```sql
SELECT E.ENAME, D.DNAME
FROM EMP E, DEPT D
WHERE E.DEPTNO(+) = D.DEPTNO;

```

① `SELECT E.ENAME, D.DNAME FROM EMP E LEFT OUTER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;`
② `SELECT E.ENAME, D.DNAME FROM EMP E RIGHT OUTER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;`
③ `SELECT E.ENAME, D.DNAME FROM EMP E FULL OUTER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;`
④ `SELECT E.ENAME, D.DNAME FROM EMP E INNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;`

* **정답:** ②
* **힌트:** 오라클 외부 조인 기호 `(+)`는 데이터가 부족하여 NULL 값으로 보충되어야 할 측에 위치합니다.
* **해설:** `E.DEPTNO(+) = D.DEPTNO`는 EMP(E) 테이블에 데이터가 부족하더라도 DEPT(D) 테이블의 모든 데이터를 보존하여 출력하라는 의미입니다. 즉, 기준이 되는 테이블이 오른쪽에 위치한 DEPT이므로 `RIGHT OUTER JOIN`과 동일합니다.

**문항 10. 다음 두 집합 연산자 쿼리 (가)와 (나)에 대한 논리적 평가로 가장 올바른 것은?**

> (가) `SELECT A, B FROM T1 UNION SELECT A, B FROM T2;`
> (나) `SELECT A, B FROM T1 UNION ALL SELECT A, B FROM T2;`

① 두 쿼리의 결과 집합 행(Row)의 수는 항상 동일하다.
② (가)는 중복된 튜플을 제거하기 위해 내부적으로 정렬 연산을 동반하지만, (나)는 단순 병합만 수행한다.
③ (나) 연산을 수행할 경우 두 테이블 간의 교집합에 해당하는 데이터만 중복 출력된다.
④ 실행 속도 및 성능적 관점에서 데이터베이스 옵티마이저는 항상 (가) 방식을 선호한다.

* **정답:** ②
* **힌트:** `UNION`은 수학적 합집합(중복 배제)을 구현하기 위한 추가 연산 비용이 발생합니다.
* **해설:** `UNION`은 중복 데이터를 제거하기 위해 암묵적인 `SORT UNIQUE` 연산을 수행하므로 시스템 부하가 높습니다. 반면 `UNION ALL`은 정렬 및 중복 검사 없이 결과를 그대로 수직 병합하므로 성능적으로 훨씬 유리합니다.

**문항 11. 다음 쿼리와 완벽하게 동일한 결과 집합(소계 포함)을 반환하는 대체 쿼리는 무엇인가?**

```sql
SELECT JOB, MGR, SUM(SAL)
FROM EMP
GROUP BY ROLLUP(JOB, MGR);

```

① `SELECT JOB, MGR, SUM(SAL) FROM EMP GROUP BY GROUPING SETS ((JOB, MGR), (JOB), (MGR), ());`
② `SELECT JOB, MGR, SUM(SAL) FROM EMP GROUP BY GROUPING SETS ((JOB, MGR), (MGR), ());`
③ `SELECT JOB, MGR, SUM(SAL) FROM EMP GROUP BY GROUPING SETS ((JOB, MGR), (JOB), ());`
④ `SELECT JOB, MGR, SUM(SAL) FROM EMP GROUP BY CUBE(JOB, MGR);`

* **정답:** ③
* **힌트:** `ROLLUP(A, B)`는 계층적 방향성을 가지며 (A, B) ➔ (A) ➔ () 의 단계로 소계를 산출합니다.
* **해설:** `ROLLUP(JOB, MGR)`은 명시된 순서에 따라 1) `(JOB, MGR)` 그룹화, 2) `(JOB)` 기준 소계, 3) `()` 전체 총계의 3가지 레벨을 생성합니다. 이는 `GROUPING SETS ((JOB, MGR), (JOB), ())`와 논리적으로 완전히 동일합니다.

#### [유형 4] 다음 SQL문의 실행 결과 예측 (오류 및 함정 포함)

**문항 12. 다음 [TB_NUM] 테이블을 대상으로 쿼리를 실행했을 때, 출력되는 최종 결과값(행의 수 아님)은 무엇인가?**

> **[TB_NUM]**
> | VAL1 | VAL2 |
> |---|---|
> | 10 | 20 |
> | NULL | 30 |
> | 40 | NULL |

```sql
SELECT SUM(VAL1 + VAL2) AS RESULT FROM TB_NUM;

```

① 100
② 30
③ 70
④ NULL

* **정답:** ②
* **힌트:** 행(Row) 단위의 산술 연산(`+`)이 우선 수행된 후, 컬럼 단위의 집계 함수(`SUM`)가 처리됩니다.
* **해설:** 행 단위 연산 시, NULL과의 산술 연산 결과는 무조건 NULL입니다.
1행: 10 + 20 = 30
2행: NULL + 30 = NULL
3행: 40 + NULL = NULL
이후 `SUM(30, NULL, NULL)`을 수행할 때 집계 함수는 NULL을 무시하므로 최종 결과는 30이 됩니다. (주의: `SUM(VAL1) + SUM(VAL2)`와 결과가 다릅니다.)

**문항 13. 아래의 `NOT IN` 조건문을 실행했을 때 출력되는 행의 건수로 올바른 것은?**

> **[EMP]** 테이블에 총 14건의 데이터가 존재한다.
> **[DEPT_TEMP]** 테이블에는 `DEPTNO` 값이 각각 `10, 20, NULL` 인 3건의 데이터가 존재한다.

```sql
SELECT COUNT(*) FROM EMP
WHERE DEPTNO NOT IN (SELECT DEPTNO FROM DEPT_TEMP);

```

① 0건
② 14건
③ 11건 (10, 20번 부서를 제외한 건수)
④ 에러 발생

* **정답:** ①
* **힌트:** `NOT IN` 연산자가 `NULL`과 논리적 비교(`!=`)를 수행할 때 발생하는 특수한 평가 규칙을 떠올리십시오.
* **해설:** `NOT IN` 연산은 내부적으로 `AND` 조건으로 전개됩니다. 즉, `DEPTNO != 10 AND DEPTNO != 20 AND DEPTNO != NULL`이 됩니다. 여기서 `DEPTNO != NULL`의 논리적 평가는 항상 `UNKNOWN`(False)이므로, 전체 AND 조건식이 거짓이 되어 출력되는 데이터는 0건이 됩니다.

**문항 14. 윈도우 함수의 프레임 지정과 관련하여, 다음 쿼리의 실행 결과로 2번째 행(금액 100)의 누적_합계 열에 출력될 값은 무엇인가?**

> **[매출]** 테이블 (금액 오름차순 정렬 상태)
> 1행: 금액 100 (A사)
> 2행: 금액 100 (B사)
> 3행: 금액 200 (C사)

```sql
SELECT 금액, 
       SUM(금액) OVER (ORDER BY 금액 
                       RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적_합계
FROM 매출;

```

① 100
② 200
③ 300
④ 400

* **정답:** ②
* **힌트:** `ROWS` 옵션과 `RANGE` 옵션이 동일한 값(Tie)을 처리하는 방식의 차이에 주목하십시오.
* **해설:** 윈도우 프레임을 `RANGE`로 지정하면, 행의 물리적 위치가 아닌 논리적 값 자체를 기준으로 범위를 묶습니다. 금액이 100으로 동일한 1행과 2행은 하나의 논리적 단위로 취급되므로, 1행과 2행의 누적_합계는 모두 두 값을 합산한 200으로 동일하게 출력됩니다.

**문항 15. 아래의 `CASE` 표현식을 포함한 SQL문이 실행되었을 때, 급여(SAL)가 2500인 사원이 반환받게 될 등급(GRADE)은 무엇인가?**

```sql
SELECT ENAME, SAL,
       CASE 
            WHEN SAL >= 1000 THEN 'C'
            WHEN SAL >= 2000 THEN 'B'
            WHEN SAL >= 3000 THEN 'A'
            ELSE 'D'
       END AS GRADE
FROM EMP;

```

① A
② B
③ C
④ D

* **정답:** ③
* **힌트:** `CASE` 표현식은 내부 조건을 위에서부터 아래로 순차적으로 평가하며, 단 하나라도 True에 도달하면 즉시 평가를 종료합니다.
* **해설:** SAL이 2500인 데이터는 위에서부터 평가됩니다. 가장 첫 번째 조건인 `WHEN SAL >= 1000`을 명백히 충족하므로, 시스템은 그 이하의 조건을 평가하지 않고 즉시 'C'를 반환합니다. 의도대로 'B'를 출력하려면 큰 숫자(>=3000) 조건부터 먼저 기술해야 합니다.

**문항 16. 테이블을 대상으로 `SELECT * FROM TABLE_A, TABLE_B;` 구문을 실행했을 때 데이터베이스 내부에서 처리되는 조인 연산의 정식 명칭과 그 결과로 올바른 것은? (단, A는 5행, B는 10행이다.)**
① INNER JOIN / 5행 출력
② FULL OUTER JOIN / 15행 출력
③ CROSS JOIN / 50행 출력
④ NATURAL JOIN / 5행 출력

* **정답:** ③
* **힌트:** `WHERE` 조건이나 `ON` 조인 조건이 완전히 누락된 다중 테이블 질의의 처리 결과입니다.
* **해설:** 조인 조건이 기술되지 않은 경우, 데이터베이스 옵티마이저는 첫 번째 테이블의 각 행에 두 번째 테이블의 모든 행을 결합하는 카티션 곱(Cartesian Product)을 생성합니다. 이는 ANSI 표준의 `CROSS JOIN`과 동일하며, 출력 건수는 5 × 10 = 50행이 됩니다.

#### [유형 5] 고난도 윈도우 함수 및 실행 계획 추론

**문항 17. 윈도우 함수 중 누적 백분율(Cumulative Distribution)을 구하는 함수로, "전체 파티션의 행 수 대비 현재 행보다 작거나 같은 값을 가진 행의 수"를 계산하여 0 초과 1 이하의 범위로 반환하는 함수는 무엇인가?**
① `PERCENT_RANK`
② `CUME_DIST`
③ `RATIO_TO_REPORT`
④ `NTILE`

* **정답:** ②
* **힌트:** 현재 행이 전체 분포에서 상위 몇 퍼센트 구간에 누적되어 위치하는지를 확인하는 통계 함수입니다.
* **해설:** `CUME_DIST`는 파티션 내의 누적 분포를 구하는 함수입니다. `PERCENT_RANK`는 순위를 백분율로(0~1 사이) 나타내지만 수식(`(순위-1)/(전체행수-1)`)이 다릅니다. `RATIO_TO_REPORT`는 파티션 총합 대비 해당 행 값의 비중을 구합니다.

**문항 18. 동일한 데이터가 중복해서 존재하는 상황에서, 1위부터 순차적으로 고유한 순위를 부여하되 동점자에 대해서도 1위, 2위, 3위와 같이 서로 다른 일련번호를 무조건 강제 할당하는 윈도우 함수는 무엇인가?**
① `RANK`
② `DENSE_RANK`
③ `ROW_NUMBER`
④ `NTILE`

* **정답:** ③
* **힌트:** 데이터베이스에서 페이징(Paging) 처리를 할 때 가장 고유한 행 식별자로 활용하기 좋은 함수입니다.
* **해설:** `ROW_NUMBER` 함수는 정렬 기준 값이 동일(Tie)하더라도 시스템 내부의 처리 순서에 따라 무조건 고유하고 연속적인 일련번호(1, 2, 3...)를 순차적으로 부여합니다.

**문항 19. 다음 중 실행 시점의 문제로 인하여 문법 에러(Syntax Error)를 유발하는 SQL 문장은 어느 것인가?**
① `SELECT DEPTNO, SUM(SAL) AS TOT_SAL FROM EMP GROUP BY DEPTNO HAVING SUM(SAL) > 5000;`
② `SELECT DEPTNO AS 부서, SUM(SAL) FROM EMP GROUP BY DEPTNO ORDER BY 부서;`
③ `SELECT DEPTNO AS 부서, SUM(SAL) FROM EMP GROUP BY 부서;`
④ `SELECT * FROM (SELECT ENAME, SAL FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 5;`

* **정답:** ③
* **힌트:** 옵티마이저의 논리적 실행 순서를 상기해 보십시오. `GROUP BY` 절이 먼저 실행됩니까, `SELECT` 절이 먼저 실행됩니까?
* **해설:** 논리적 실행 순서상 `GROUP BY` 절은 `SELECT` 절보다 먼저 파싱되고 실행됩니다. 따라서 `SELECT` 절에서 정의된 별칭(Alias)인 '부서'는 `GROUP BY` 단계에서 시스템이 인식하지 못하여 "부적합한 식별자" 에러를 발생시킵니다. (별칭은 ORDER BY 절에서만 사용 가능합니다.)

**문항 20. 아래의 `PIVOT` 함수를 포함한 SQL 쿼리에서 논리적 연산의 필수 구성 요소로 가장 적절한 것은?**

```sql
SELECT *
FROM SALES
PIVOT (
    ( A )
    FOR REGION IN ('SEOUL' AS 서울, 'BUSAN' AS 부산)
);

```

① `WHERE AMT > 1000`
② `SUM(AMT)`
③ `ORDER BY REGION`
④ `GROUP BY REGION`

* **정답:** ②
* **힌트:** 행(Row) 데이터를 열(Column)로 변환할 때, 기존의 세로축과 새로운 가로축이 교차하는 지점(Cell)에 들어갈 값을 '어떻게' 산출할지 지시해야 합니다.
* **해설:** `PIVOT` 구문은 데이터를 재배치하여 열로 확장하는 과정에서 교차점에 해당하는 다수의 데이터 행들을 단일 값으로 압축해야 하므로, (A) 위치에 `SUM`, `MAX`, `COUNT` 등과 같은 **집계 함수**가 필수적으로 포함되어야 합니다.