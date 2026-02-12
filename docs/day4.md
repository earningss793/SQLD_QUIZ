제공해주신 강의안 [DAY4] 내용을 바탕으로, 수강생들이 헷갈리기 쉬운 함정과 핵심 개념을 점검할 수 있는 **SQLD 실전 대비 퀴즈 20선**을 제작해 드립니다.

---

# 📝 [DAY4] 실전 대비 퀴즈: GROUP BY & HAVING 완전 정복

### PART 1. 집계 함수의 기초와 NULL (1~5번)

**1. 다음 중 집계 함수(Aggregate Function)에 대한 설명으로 올바르지 않은 것은?**

* ① 여러 행의 값을 입력받아 하나의 요약된 값(단일 값)을 반환한다.
* ② `SUM`과 `AVG`는 숫자형 데이터에만 사용할 수 있다.
* ③ `MAX`와 `MIN`은 숫자뿐만 아니라 문자, 날짜 데이터에도 사용할 수 있다.
* ④ 모든 집계 함수는 NULL 값을 포함하여 연산한다.

> **정답:** ④
> **해설:** `COUNT(*)`를 제외한 모든 집계 함수(SUM, AVG, MAX, MIN 등)는 NULL 값을 **제외(무시)**하고 연산합니다.
> **힌트:** "NULL 처리 규칙 (매우 중요)" 파트를 다시 확인해보세요.

**2. 다음 테이블(DATA_TAB)을 참고하여 `SELECT COUNT(VAL) FROM DATA_TAB;`의 결과로 올바른 것은?**
| ID | VAL |
| :--- | :--- |
| 1 | 10 |
| 2 | NULL |
| 3 | 20 |
| 4 | NULL |
| 5 | 30 |

* ① 2
* ② 3
* ③ 5
* ④ NULL

> **정답:** ②
> **해설:** `COUNT(컬럼명)`은 NULL을 제외한 행의 수를 셉니다. 값이 있는 행은 ID 1, 3, 5번이므로 총 3개입니다. (`COUNT(*)`였다면 5가 정답입니다.)
> **힌트:** 별표(*)는 전체, 컬럼명은 NULL 제외!

**3. `AVG(COL)` 함수가 내부적으로 평균을 계산하는 방식으로 올바른 것은?**

* ① `SUM(COL) / COUNT(*)`
* ② `SUM(COL) / COUNT(COL)`
* ③ `SUM(COL) / (전체 행 개수)`
* ④ `(SUM(COL) + NULL) / COUNT(*)`

> **정답:** ②
> **해설:** 평균을 구할 때 분모는 'NULL이 아닌 값의 개수'가 되어야 합니다. 따라서 `SUM(COL)`을 `COUNT(COL)`로 나눈 것과 같습니다.
> **힌트:** NULL인 데이터는 분자(합계)에도, 분모(개수)에도 포함되지 않아요.

**4. 다음 SQL 문장 중 문법적으로 오류가 발생하는 것은?**

* ① `SELECT MAX(HIRE_DATE) FROM EMP;`
* ② `SELECT MIN(EMP_NAME) FROM EMP;`
* ③ `SELECT SUM(SALARY) FROM EMP WHERE SALARY > 1000;`
* ④ `SELECT DEPT_NO FROM EMP WHERE AVG(SALARY) >= 3000;`

> **정답:** ④
> **해설:** 집계 함수(`AVG`)는 `WHERE` 절에 직접 사용할 수 없습니다. 집계 결과에 대한 조건은 `HAVING` 절을 사용해야 합니다.
> **힌트:** WHERE 절은 그룹핑 전, 개별 행을 검사하는 곳입니다.

**5. `SUM(A + B)`와 `SUM(A) + SUM(B)`의 결과가 다를 수 있는 이유는 무엇인가?**

* ① 데이터 타입이 다르기 때문에
* ② 연산 순서와 NULL 처리 방식의 차이 때문에
* ③ GROUP BY 절의 유무 때문에
* ④ 데이터베이스 종류(Oracle, MySQL)의 차이 때문에

> **정답:** ②
> **해설:** `SUM(A+B)`는 행별로 더할 때 하나라도 NULL이면 그 행 전체가 NULL이 되어 합계에서 빠집니다. 반면 `SUM(A)+SUM(B)`는 각각의 합계를 구한 뒤 더하므로 NULL의 영향을 덜 받습니다.
> **힌트:** 1 + NULL = ?

---

### PART 2. GROUP BY의 이해 (6~10번)

**6. GROUP BY 절의 역할에 대한 설명으로 가장 적절한 것은?**

* ① 데이터를 정렬하기 위해 사용한다.
* ② 특정 컬럼을 기준으로 데이터를 그룹화하여 요약 통계를 내기 위해 사용한다.
* ③ 두 개 이상의 테이블을 연결하기 위해 사용한다.
* ④ 중복된 데이터를 제거하고 유니크한 값만 보기 위해 사용한다.

> **정답:** ②
> **해설:** GROUP BY는 데이터를 소그룹으로 묶고 집계 함수를 통해 요약 정보를 산출하는 것이 주 목적입니다.
> **힌트:** '팀별 회식비 정산' 비유를 떠올려보세요.

**7. 다음 SQL 쿼리가 에러를 발생시키는 이유는?**

```sql
SELECT 부서명, 사원명, AVG(급여)
FROM 사원
GROUP BY 부서명;

```

* ① GROUP BY 절에 별칭을 사용하지 않아서
* ② AVG 함수는 사원명과 함께 쓸 수 없어서
* ③ SELECT 절의 '사원명'이 GROUP BY 절에 포함되지 않아서
* ④ FROM 절의 테이블 별칭이 없어서

> **정답:** ③
> **해설:** `GROUP BY`를 사용하면 `SELECT` 절에는 '그룹핑 기준 컬럼(부서명)'이나 '집계 함수(AVG)'만 올 수 있습니다. 그룹화되지 않은 일반 컬럼(사원명)은 단독으로 조회할 수 없습니다.
> **힌트:** "마케팅팀의 평균 급여는 알 수 있지만, 마케팅팀의 '누구' 이름 하나를 찍을 순 없어요."

**8. GROUP BY 절 사용 시 주의사항으로 틀린 것은?**

* ① SELECT 절에 정의한 별칭(Alias)을 GROUP BY 절에서 사용할 수 있다.
* ② WHERE 절은 GROUP BY 절보다 먼저 실행된다.
* ③ 여러 개의 컬럼을 기준으로 그룹화할 수 있다.
* ④ 집계 함수를 제외한 SELECT 절의 모든 컬럼은 GROUP BY 절에 명시되어야 한다.

> **정답:** ①
> **해설:** 실행 순서상 `GROUP BY`가 `SELECT`보다 먼저 실행되므로, `SELECT`에서 만든 별칭을 `GROUP BY`에서 사용할 수 없습니다.
> **힌트:** 실행 순서: 프-웨-그-하-셀-오

**9. 다음 중 '지역별' 그리고 '성별' 가입자 수를 구하는 올바른 쿼리는?**

* ① `SELECT 지역, 성별, COUNT(*) FROM 회원 GROUP BY 지역;`
* ② `SELECT 지역, 성별, COUNT(*) FROM 회원 GROUP BY 지역, 성별;`
* ③ `SELECT 지역, COUNT(*) FROM 회원 GROUP BY 지역, 성별;`
* ④ `SELECT 성별, COUNT(*) FROM 회원 GROUP BY 지역;`

> **정답:** ②
> **해설:** 지역과 성별 두 가지 기준을 보고 싶다면, `SELECT`와 `GROUP BY` 모두에 두 컬럼이 명시되어야 합니다.
> **힌트:** 기준이 두 개라면 GROUP BY 뒤에도 콤마(,)로 두 개를 적어야 합니다.

**10. 아래 쿼리의 실행 결과에 대한 설명으로 옳은 것은?**

```sql
SELECT REGION, COUNT(*)
FROM SUBSCRIPTIONS
GROUP BY REGION;

```

* ① 전체 구독자의 총합 1개 행만 출력된다.
* ② 각 REGION(지역)별로 행이 나뉘고, 해당 지역의 구독자 수가 계산된다.
* ③ REGION 컬럼에 중복된 값이 그대로 모두 출력된다.
* ④ 에러가 발생한다.

> **정답:** ②
> **해설:** `GROUP BY REGION`을 썼으므로 지역의 종류만큼 행이 생기고, `COUNT(*)`는 각 지역 그룹 내의 행 개수를 나타냅니다.
> **힌트:** 서울 100명, 부산 50명... 이런 식으로 나옵니다.

---

### PART 3. HAVING과 WHERE의 차이 (11~15번)

**11. WHERE 절과 HAVING 절의 가장 큰 차이점은 무엇인가?**

* ① WHERE는 문자를 필터링하고 HAVING은 숫자를 필터링한다.
* ② WHERE는 정렬을 하고 HAVING은 그룹핑을 한다.
* ③ WHERE는 그룹핑 전 개별 행을, HAVING은 그룹핑 후 집계 결과를 필터링한다.
* ④ 차이가 없으며 서로 바꿔 써도 무방하다.

> **정답:** ③
> **해설:** 가장 핵심적인 차이입니다. 시점(전/후)과 대상(개별 행/그룹)이 다릅니다.
> **힌트:** 사과 선별 작업 비유! (썩은 사과 골라내기 vs 무게 미달 박스 골라내기)

**12. "부서별 평균 급여가 500 이상인 부서"를 조회하려고 한다. 빈칸에 들어갈 알맞은 절은?**

```sql
SELECT DEPT_ID, AVG(SALARY)
FROM EMP
GROUP BY DEPT_ID
(      ) AVG(SALARY) >= 500;

```

* ① WHERE
* ② HAVING
* ③ ORDER BY
* ④ LIKE

> **정답:** ②
> **해설:** `AVG(SALARY)`는 집계 함수의 결과입니다. 집계 결과에 조건을 걸 때는 반드시 `HAVING`을 써야 합니다.
> **힌트:** 집계 함수 조건은 무조건 HAVING!

**13. 다음 중 쿼리 실행 순서상 가장 늦게 처리되는 것은?**

* ① WHERE
* ② GROUP BY
* ③ HAVING
* ④ FROM

> **정답:** ③
> **해설:** 보기 중 순서는 FROM -> WHERE -> GROUP BY -> HAVING 입니다.
> **힌트:** 프-웨-그-하...

**14. 아래 쿼리가 에러가 나는 이유는?**

```sql
SELECT REGION, SUM(REVENUE)
FROM SUBSCRIPTIONS
HAVING SUM(REVENUE) > 10000
GROUP BY REGION;

```

* ① SUM 함수를 썼기 때문
* ② GROUP BY와 HAVING의 순서가 바뀌었기 때문
* ③ SELECT 절에 REVENUE가 없어서
* ④ FROM 절 뒤에는 바로 SELECT가 와야 해서

> **정답:** ②
> **해설:** 문법 작성 순서상 `GROUP BY`가 먼저 나오고 그 뒤에 `HAVING`이 나와야 합니다.
> **힌트:** 그룹을 먼저 만들어야(GROUP BY), 그 그룹을 거를 수(HAVING) 있죠.

**15. 마케팅 실무 비유 중 'WHERE' 절에 해당하는 작업은?**

* ① 캠페인별로 성과를 묶어서 본다.
* ② 평균 클릭률이 5% 미만인 캠페인 그룹을 제외한다.
* ③ 탈퇴한 회원의 데이터를 미리 제외하고 데이터를 가져온다.
* ④ 캠페인별 총 매출액을 계산한다.

> **정답:** ③
> **해설:** ①, ④는 GROUP BY/집계, ②는 HAVING에 해당합니다. 원본 데이터에서 미리 조건을 걸어 가져오는 ③이 WHERE입니다.
> **힌트:** 데이터를 '가져올 때' 거르는 작업입니다.

---

### PART 4. 실행 순서와 심화 (16~20번)

**16. SQL 쿼리의 논리적 실행 순서(Logical Execution Order)를 올바르게 나열한 것은?**

* ① SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY
* ② FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY
* ③ FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY
* ④ FROM -> WHERE -> GROUP BY -> SELECT -> HAVING -> ORDER BY

> **정답:** ③
> **해설:** 암기 필수! **프(FROM)-웨(WHERE)-그(GROUP BY)-하(HAVING)-셀(SELECT)-오(ORDER BY)**
> **힌트:** FWGHSO

**17. 다음 중 `SELECT` 절에서 정의한 별칭(Alias)을 사용할 수 있는 유일한 절은?**

* ① WHERE
* ② GROUP BY
* ③ HAVING
* ④ ORDER BY

> **정답:** ④
> **해설:** 실행 순서상 `SELECT`가 가장 마지막에 가까우므로, 그보다 더 뒤에 실행되는 `ORDER BY`에서만 별칭을 알아볼 수 있습니다.
> **힌트:** 맨 마지막에 줄 세우기 할 때만 별명을 부를 수 있어요.

**18. 다음 쿼리의 실행 결과 해석으로 올바른 것은?**

```sql
SELECT PLAN, AVG(PRICE)
FROM PLANS
WHERE IS_ACTIVE = 'Y'
GROUP BY PLAN
HAVING AVG(PRICE) >= 10000;

```

* ① 모든 플랜의 평균 가격을 구한 뒤, 활성화된('Y') 것만 남긴다.
* ② 활성화된 플랜들만 가지고 평균을 낸 뒤, 그 평균이 1만 원 이상인 플랜만 보여준다.
* ③ 평균 가격이 1만 원 이상인 플랜을 먼저 찾고, 그중 활성화된 것을 찾는다.
* ④ 활성화 여부와 상관없이 평균 가격이 1만 원 이상인 것을 찾는다.

> **정답:** ②
> **해설:** 순서: `WHERE`(활성화된 것만 남김) -> `GROUP BY`(플랜별로 묶음) -> `HAVING`(평균 1만 원 이상 필터링).
> **힌트:** WHERE가 1차 관문, HAVING이 2차 관문입니다.

**19. `COUNT(*)`와 `COUNT(컬럼명)`의 결과가 같으려면 어떤 조건이 필요한가?**

* ① 해당 컬럼에 중복된 값이 없어야 한다.
* ② 해당 컬럼에 NULL 값이 하나도 없어야 한다.
* ③ 해당 컬럼이 숫자형이어야 한다.
* ④ 테이블의 행 개수가 0개여야 한다.

> **정답:** ②
> **해설:** `COUNT(*)`는 NULL 포함 전체, `COUNT(컬럼)`은 NULL 제외입니다. 따라서 NULL이 하나도 없다면 두 값은 같습니다.
> **힌트:** NULL이 없으면 뺄 게 없으니까요.

**20. 아래 SQL에서 `ORDER BY` 절에 들어갈 수 없는 것은?**

```sql
SELECT DEPT_NAME, SUM(SALARY) AS TOTAL_SAL
FROM EMP
GROUP BY DEPT_NAME;

```

* ① `ORDER BY DEPT_NAME`
* ② `ORDER BY SUM(SALARY)`
* ③ `ORDER BY TOTAL_SAL`
* ④ `ORDER BY AVG(SALARY)` (단, SELECT 절에 AVG는 없음)
* ⑤ `ORDER BY EMP_NAME` (단, EMP_NAME은 그룹핑되지 않음)

> **정답:** ⑤
> **해설:** `GROUP BY`가 된 상태에서는 개별 행의 정보인 `EMP_NAME`으로 정렬할 수 없습니다. 하지만 ①,②,③은 물론이고, ④처럼 SELECT에 없더라도 집계 함수(`AVG`)를 기준으로 정렬하는 것은 가능합니다.
> **힌트:** 그룹핑된 상태에서 개별 사원 이름으로 줄을 세울 순 없겠죠?