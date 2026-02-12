# 📝 [SQLD 실전 대비] JOIN 완전 정복 20제

### [PART 1] 개념 및 기본 원리 (Q1 ~ Q3)

**Q1. 관계형 데이터베이스(RDB)에서 테이블을 쪼개는 '정규화(Normalization)'의 목적으로 가장 적절하지 않은 것은?**

① 데이터의 중복을 최소화하여 저장 공간을 효율적으로 사용하기 위함이다.
② 데이터 삽입, 수정, 삭제 시 발생할 수 있는 이상(Anomaly) 현상을 방지하기 위함이다.
③ 데이터의 무결성(Integrity)을 유지하기 위함이다.
④ JOIN 연산을 제거하여 무조건적인 조회 속도 향상을 꾀하기 위함이다.

* **정답:** ④
* **힌트:** 테이블을 쪼개면 조회 시 필연적으로 JOIN이 발생합니다.
* **해설:** 정규화는 데이터의 정확성과 일관성을 위해 수행합니다. 테이블이 쪼개지면 조회가 필요할 때 JOIN 연산을 수행해야 하므로, 단순 조회 속도는 정규화 전보다 느려질 수도 있습니다. (속도만을 위한다면 반정규화를 하기도 합니다.)

**Q2. 다음 중 JOIN에 대한 설명으로 옳은 것은?**

① JOIN을 수행하기 위해서는 두 테이블의 연결 컬럼명이 반드시 동일해야 한다.
② 두 테이블 간에 PK(Primary Key)와 FK(Foreign Key) 관계가 설정되어 있지 않으면 JOIN할 수 없다.
③ 일반적으로 N개의 테이블을 JOIN 하려면 최소 N-1개의 JOIN 조건이 필요하다.
④ ANSI 표준 문법에서는 JOIN 조건을 `WHERE` 절에 기술한다.

* **정답:** ③
* **힌트:** 기차(테이블) 3량을 연결하려면 연결고리는 몇 개가 필요할까요?
* **해설:** ① 컬럼명이 달라도 데이터 타입과 값이 호환되면 가능합니다. ② 논리적인 연관성만 있다면 FK가 없어도 JOIN 가능합니다. ④ ANSI 표준은 `ON` 절에 기술합니다.

**Q3. 다음 설명에 해당하는 JOIN의 종류는?**

> 두 테이블 간의 조인 조건이 정확히 일치(`=`)하는 경우에만 데이터를 반환한다. 교집합의 개념과 같다.

① INNER JOIN
② LEFT OUTER JOIN
③ CROSS JOIN
④ FULL OUTER JOIN

* **정답:** ①
* **힌트:** 가장 기본이 되는 '커플 매칭' 조인입니다.
* **해설:** 조건에 일치하는 행만 반환하는 것은 내부 조인(INNER JOIN)입니다.

---

### [PART 2] INNER JOIN과 문법 (Q4 ~ Q7)

**Q4. 다음 중 ANSI 표준 SQL 문법으로 올바르게 작성된 쿼리는?**

①

```sql
SELECT E.ENAME, D.DNAME
FROM EMP E, DEPT D
WHERE E.DEPTNO = D.DEPTNO;

```

②

```sql
SELECT E.ENAME, D.DNAME
FROM EMP E INNER JOIN DEPT D
ON E.DEPTNO = D.DEPTNO;

```

③

```sql
SELECT E.ENAME, D.DNAME
FROM EMP E JOIN DEPT D
WHERE E.DEPTNO = D.DEPTNO;

```

④

```sql
SELECT E.ENAME, D.DNAME
FROM EMP E INNER JOIN DEPT D
USING E.DEPTNO = D.DEPTNO;

```

* **정답:** ②
* **힌트:** ANSI 표준은 `JOIN`과 `ON`을 짝꿍으로 사용합니다.
* **해설:** ①은 Oracle 전용(과거) 문법입니다. ③은 ON 대신 WHERE를 써서 틀렸습니다. ④ USING 절에는 조건식이 아니라 컬럼명만 `USING (DEPTNO)` 형태로 들어갑니다.

**Q5. 다음 SQL 문에서 에러가 발생하는 원인은?**

```sql
SELECT EMP.ENAME, D.DNAME
FROM EMP E
JOIN DEPT D ON E.DEPTNO = D.DEPTNO;

```

① `JOIN` 키워드 대신 `INNER JOIN`을 써야 한다.
② `DEPT` 테이블에는 `ENAME` 컬럼이 없기 때문이다.
③ `FROM` 절에서 정의한 별칭(Alias) `E`를 사용하지 않고 원래 테이블명 `EMP`를 사용했기 때문이다.
④ `ON` 절의 조건이 잘못되었다.

* **정답:** ③
* **힌트:** "별명을 지어줬으면 본명은 잊어라."
* **해설:** 테이블에 Alias를 부여하면, 해당 쿼리 내에서는 반드시 Alias를 사용해야 합니다. `EMP.ENAME`은 인식되지 않습니다.

**Q6. 다음 두 테이블을 조회할 때 발생하는 문제점과 해결책으로 올바른 것은?**

| 테이블 A (EMP) | 테이블 B (DEPT) |
| --- | --- |
| **DEPTNO** | **DEPTNO** |
| ENAME | DNAME |

```sql
SELECT DEPTNO, ENAME, DNAME
FROM EMP E
JOIN DEPT D ON E.DEPTNO = D.DEPTNO;

```

① 문제없음: 정상적으로 조회된다.
② 에러발생: `DEPTNO` 컬럼이 모호하므로 `E.DEPTNO` 또는 `D.DEPTNO`로 명시해야 한다.
③ 에러발생: `JOIN` 대신 `CROSS JOIN`을 사용해야 한다.
④ 에러발생: `SELECT` 절에는 `*`만 사용할 수 있다.

* **정답:** ②
* **힌트:** 컴퓨터는 "누구네 DEPTNO야?"라고 묻습니다. (Column Ambiguously Defined)
* **해설:** 두 테이블에 공통된 이름의 컬럼(`DEPTNO`)이 있을 때, 소유자를 명시하지 않으면 모호성 에러가 발생합니다.

**Q7. 다음 SQL의 실행 결과 건수는?**

* **테이블 A:** 행 10개 (PK: 1~10)
* **테이블 B:** 행 10개 (PK: 1~10)
* **조건:** A의 ID와 B의 ID가 같은 것만 조회

```sql
SELECT * FROM A CROSS JOIN B;

```

① 10건
② 20건
③ 100건
④ 0건

* **정답:** ③
* **힌트:** `CROSS JOIN`은 모든 경우의 수를 곱합니다. (Cartesian Product)
* **해설:**  건이 출력됩니다. 건.

---

### [PART 3] OUTER JOIN과 Oracle 문법 (Q8 ~ Q12)

**Q8. 다음 중 LEFT OUTER JOIN의 결과에 대한 설명으로 옳은 것은?**

① 왼쪽 테이블의 데이터는 모두 출력되고, 오른쪽 테이블에 매칭되는 데이터가 없으면 해당 컬럼은 NULL로 표시된다.
② 오른쪽 테이블의 데이터가 기준이 되어 모두 출력된다.
③ 양쪽 테이블에 공통으로 존재하는 데이터만 출력된다.
④ 조인 조건에 맞지 않는 데이터는 모두 삭제된다.

* **정답:** ①
* **힌트:** 문법 이름(`LEFT`)이 '주인공'의 위치를 알려줍니다.
* **해설:** LEFT OUTER JOIN은 왼쪽 테이블을 기준으로 삼습니다.

**Q9. Oracle 전용 문법인 `(+)` 기호의 올바른 사용법은?**

① 기준이 되어 데이터를 모두 출력해야 하는 쪽에 붙인다.
② 데이터가 없어서 NULL이 생성될 수 있는(부족한) 쪽에 붙인다.
③ `WHERE` 절이 아닌 `FROM` 절에 붙인다.
④ `LEFT JOIN`을 하고 싶으면 왼쪽 컬럼에 붙인다.

* **정답:** ②
* **힌트:** "없는 쪽에 플러스(+)를 붙여서 억지로 채워준다"고 암기하세요.
* **해설:** Oracle 문법에서 `(+)`는 조인 조건 중 데이터가 부족한 쪽(NULL이 나올 쪽)에 붙입니다. ANSI 기준 `LEFT JOIN`이라면 오른쪽 테이블 컬럼에 붙습니다.

**Q10. 다음 ANSI SQL을 Oracle 문법으로 변환할 때 올바른 것은?**

```sql
-- [ANSI]
SELECT A.NAME, B.Team
FROM PLAYER A 
LEFT OUTER JOIN TEAM B ON A.TEAM_ID = B.TEAM_ID;

```

①

```sql
WHERE A.TEAM_ID = B.TEAM_ID(+)

```

②

```sql
WHERE A.TEAM_ID(+) = B.TEAM_ID

```

③

```sql
WHERE A.TEAM_ID(+) = B.TEAM_ID(+)

```

④

```sql
WHERE A.TEAM_ID = B.TEAM_ID

```

* **정답:** ①
* **힌트:** `LEFT JOIN` = 왼쪽이 주인 = 오른쪽이 부족함.
* **해설:** 왼쪽(`A`)을 모두 출력해야 하므로, 데이터가 부족한 오른쪽(`B`) 테이블 컬럼 뒤에 `(+)`를 붙여야 합니다.

**Q11. 다음 데이터 상황에서 결과값이 가장 많은 쿼리는?**

* **회원:** 100명
* **구매이력:** 50건 (모두 가입한 회원이 구매함, 비회원 구매 없음)

① `SELECT * FROM 회원 INNER JOIN 구매이력 (이하생략)`
② `SELECT * FROM 회원 LEFT OUTER JOIN 구매이력 (이하생략)`
③ `SELECT * FROM 회원 RIGHT OUTER JOIN 구매이력 (이하생략)`
④ ①과 ③의 결과 건수는 같다.

* **정답:** ②
* **힌트:** ①은 구매한 사람만(50명), ②는 구매 안 한 사람 포함(100명), ③은 구매이력 기준(50건)
* **해설:**
* INNER JOIN: 50건 (교집합)
* LEFT JOIN: 100건 (회원 전체)
* RIGHT JOIN: 50건 (구매이력 전체)
따라서 ②번이 가장 많습니다.



**Q12. Oracle의 `(+)` 문법으로 구현할 수 없는 조인은?**

① INNER JOIN
② LEFT OUTER JOIN
③ RIGHT OUTER JOIN
④ FULL OUTER JOIN

* **정답:** ④
* **힌트:** 양쪽에 뿔(`+`)을 달 수는 없습니다.
* **해설:** Oracle 전용 문법으로는 양쪽 모두에 `(+)`를 붙이는 FULL OUTER JOIN을 한 번에 수행할 수 없습니다. (UNION 연산자를 이용해야 함).

---

### [PART 4] 고급 조인 및 제약사항 (Q13 ~ Q17)

**Q13. NATURAL JOIN 사용 시 주의사항으로 옳은 것은?**

① `ON` 절을 사용하여 구체적인 조인 조건을 명시해야 한다.
② 조인 기준이 되는 컬럼에는 테이블 별칭(Alias)을 사용할 수 없다.
③ 서로 다른 이름의 컬럼끼리도 조인이 가능하다.
④ SQL Server(MSSQL)에서 가장 많이 사용하는 방식이다.

* **정답:** ②
* **힌트:** "우리 자연스럽게(NATURAL) 만났으니까, 니꺼 내꺼(Alias) 따지지 말자."
* **해설:** NATURAL JOIN은 이름과 타입이 같은 컬럼을 자동으로 찾으며, 해당 조인 컬럼 앞에는 테이블명이나 별칭 접두어를 붙이면 에러가 발생합니다.

**Q14. 다음 중 `USING` 절을 사용한 조인 쿼리 중 문법적으로 올바른 것은?**

①

```sql
SELECT E.ENAME, D.DEPTNO
FROM EMP E JOIN DEPT D USING (E.DEPTNO = D.DEPTNO)

```

②

```sql
SELECT E.ENAME, DEPTNO
FROM EMP E JOIN DEPT D USING (DEPTNO)

```

③

```sql
SELECT E.ENAME, D.DEPTNO
FROM EMP E JOIN DEPT D USING (DEPTNO)

```

④

```sql
SELECT E.ENAME, DEPTNO
FROM EMP E JOIN DEPT D ON USING (DEPTNO)

```

* **정답:** ②
* **힌트:** `USING` 안에는 컬럼명만! 그리고 SELECT 절에서도 그 컬럼은 주인 없이(Alias 없이) 써야 합니다.
* **해설:** ① 조건식이 아닌 컬럼명만 와야 함. ③ SELECT 절의 `D.DEPTNO`에서 별칭 사용 불가. ④ ON과 USING은 같이 쓸 수 없음.

**Q15. 다음 SQL 문장의 조인 방식은?**

```sql
SELECT E.ENAME, S.GRADE
FROM EMP E, SALGRADE S
WHERE E.SAL BETWEEN S.LOSAL AND S.HISAL;

```

① EQUI JOIN
② SELF JOIN
③ Non-EQUI JOIN
④ OUTER JOIN

* **정답:** ③
* **힌트:** 등호(`=`)가 보이지 않고 범위(`BETWEEN`)를 체크하고 있습니다.
* **해설:** 조인 조건이 정확한 일치(`=`)가 아닌 범위나 부등호를 사용하는 경우를 비등가 조인(Non-EQUI JOIN)이라고 합니다.

**Q16. SELF JOIN에 대한 설명으로 가장 적절한 것은?**

① 자기 자신과는 조인할 수 없다.
② 반드시 테이블에 서로 다른 별칭(Alias)을 부여하여 식별해야 한다.
③ `OUTER JOIN`으로는 수행할 수 없다.
④ 계층형 데이터(예: 부장-과장-대리)를 조회할 때 사용할 수 없다.

* **정답:** ②
* **힌트:** 거울을 보고 있는 나와 실제의 나를 구분하려면 이름표가 달라야 합니다.
* **해설:** 동일한 테이블을 조인하므로, 컴퓨터가 구분할 수 있도록 반드시 서로 다른 Alias(예: A, B)를 주어야 합니다.

**Q17. 3개의 테이블 A, B, C를 조인하려고 합니다. A와 B는 `ID`로, B와 C는 `CODE`로 연결됩니다. 올바른 JOIN 순서는?**

① 순서는 상관없다.
② A와 C를 먼저 조인하고 B를 조인한다.
③ A와 B를 조인한 결과에 C를 조인한다.
④ 한 번의 `ON` 절에 3개 테이블 조건을 모두 쓴다.

* **정답:** ③ (또는 ①도 논리적으로는 맞으나 실행 계획상 ③이 일반적 설명)
* **해설:** 조인은 논리적으로 두 테이블씩 차례대로 수행됩니다. 연결고리가 있는 A-B를 먼저 묶고, 그 결과(B가 포함됨)를 이용해 C와 묶습니다. (A와 C는 직접 연결고리가 없으므로 ②번은 불가능합니다.)

---

### [PART 5] 이미지 추론 및 응용 (Q18 ~ Q20)

**Q18. 다음 3중 조인 쿼리 중 문법적 오류가 발생하는 것은?**

* **테이블 구조:**
* `EMPLOYEES` (EMP_ID, EMP_NAME, DEPT_ID)
* `DEPARTMENTS` (DEPT_ID, DEPT_NAME, LOC_ID)
* `LOCATIONS` (LOC_ID, CITY)



①

```sql
SELECT E.EMP_NAME, D.DEPT_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEPT_ID = D.DEPT_ID;

```

②

```sql
SELECT E.EMP_NAME, L.CITY
FROM EMPLOYEES E, DEPARTMENTS D, LOCATIONS L
WHERE E.DEPT_ID = D.DEPT_ID
  AND D.LOC_ID = L.LOC_ID;

```

③

```sql
SELECT E.EMP_NAME, L.CITY
FROM EMPLOYEES E, DEPARTMENTS D, LOCATIONS L
WHERE E.DEPT_ID = D.DEPT_ID
  AND E.LOC_ID = L.LOC_ID;

```

④

```sql
SELECT D.DEPT_NAME, L.CITY
FROM DEPARTMENTS D 
JOIN LOCATIONS L ON D.LOC_ID = L.LOC_ID;

```

* **정답:** ③
* **힌트:** 사원(E) 테이블에 도시코드(LOC_ID)가 있나요? 징검다리를 건너뛰면 안 됩니다.
* **해설:** `EMPLOYEES` 테이블에는 `LOC_ID` 컬럼이 없습니다. 따라서 `E.LOC_ID`라는 표현은 "부적합한 식별자" 오류를 발생시킵니다. 반드시 `DEPARTMENTS`(`D`)를 거쳐서 `D.LOC_ID`를 사용해야 합니다.

---

### **Q19. 다음 `PRODUCTS` 테이블과 `ORDERS` 테이블에 대해 아래 SQL을 실행했을 때, 결과 건수로 올바른 것은?**

**[PRODUCTS 테이블]** (총 3건)
| PRODUCT_NAME | PRICE |
| :--- | :--- |
| A | 500 |
| B | 1500 |
| C | 2500 |

**[ORDERS 테이블]** (총 6건)
| CUSTOMER_ID | PRODUCT_CATEGORY | AMOUNT |
| :--- | :--- | :--- |
| C01 | Electronics | 1200 |
| C02 | Books | 50 |
| C01 | Electronics | 800 |
| C03 | Groceries | 100 |
| C02 | Books | 70 |
| C01 | Books | 60 |

**[SQL]**

```sql
SELECT P.PRODUCT_NAME, O.AMOUNT
FROM PRODUCTS P, ORDERS O;

```

**[보기]**
① 3건
② 6건
③ 9건
④ 18건

**[정답 및 해설]**

* **정답:** **④**
* **힌트:** `WHERE` 절이나 `ON` 절(조인 조건)이 없는 조인을 눈여겨보세요.
* **해설:**
* SQL문을 보면 두 테이블 간의 **연결 조건(WHERE 또는 ON)** 이 전혀 없습니다.
* 조인 조건이 없을 때 데이터베이스는 **모든 경우의 수**를 조합하는 **CROSS JOIN (Cartesian Product, 카티션 곱)** 을 수행합니다.
* 계산 공식:  (테이블 A의 행 수  테이블 B의 행 수)
* 따라서 `PRODUCTS`(3건)  `ORDERS`(6건) = **18건**이 출력됩니다.
* *시험 Tip: 실수로 INNER JOIN처럼 생각해서 공통된 컬럼을 찾으려 하면 안 됩니다!*



---

### **Q20. 다음 `PRODUCTS` 테이블과 가상의 `PRICE_GRADE` 테이블을 조인하여 가격 등급을 매기려고 합니다. SQL 실행 결과로 올바른 것은?**

**[PRODUCTS 테이블]**
| PRODUCT_NAME | PRICE |
| :--- | :--- |
| A | 500 |
| B | 1500 |
| C | 2500 |

**[PRICE_GRADE 테이블]** (가상 데이터)
| GRADE | MIN_PRICE | MAX_PRICE |
| :--- | :--- | :--- |
| Low | 0 | 1000 |
| Mid | 1001 | 2000 |
| High | 2001 | 9999 |

**[SQL]**

```sql
SELECT P.PRODUCT_NAME, G.GRADE
FROM PRODUCTS P
JOIN PRICE_GRADE G
  ON P.PRICE BETWEEN G.MIN_PRICE AND G.MAX_PRICE;

```

**[보기]**
①
A: Low / B: Mid / C: High
②
A: Low / B: NULL / C: High
③
A: Low / B: Low / C: Mid
④
결과 없음 (에러 발생)

**[정답 및 해설]**

* **정답:** **①**
* **힌트:** 조인 조건에 등호(`=`)가 없어도 조인이 될까요? (Non-EQUI JOIN)
* **해설:**
* **Non-EQUI JOIN (비등가 조인):** 조인 조건이 정확히 일치(`=`)하지 않아도, **범위(`BETWEEN`)** 나 부등호 조건에 만족하면 조인이 성립합니다.
* **A 제품(500):** 0 ~ 1000 사이이므로 **Low** 등급과 매칭
* **B 제품(1500):** 1001 ~ 2000 사이이므로 **Mid** 등급과 매칭
* **C 제품(2500):** 2001 ~ 9999 사이이므로 **High** 등급과 매칭
* 따라서 모든 제품이 각자의 가격 범위에 맞는 등급과 정상적으로 조인됩니다.