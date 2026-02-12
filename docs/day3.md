Q1. 다음 중 SQL 실행 순서로 올바른 것은?
SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY

FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY

FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY

SELECT → FROM → ORDER BY → WHERE → GROUP BY → HAVING

정답: 2

해설: SQL은 데이터를 먼저 가져오고(FROM), 필터링하고(WHERE), 그룹화한 뒤(GROUP BY/HAVING), 출력할 컬럼을 정하고(SELECT), 마지막에 정렬(ORDER BY)합니다.

힌트: "프웨구해셀오"라고 앞 글자만 따서 외워보세요!

Q2. 다음 중 ORDER BY 절에 대한 설명으로 틀린 것은?
기본 정렬 방식은 오름차순(ASC)이다.

SELECT 절에 정의한 별칭(Alias)을 사용할 수 있다.

SELECT 절에 없는 컬럼이라도 정렬 기준으로 사용할 수 있다. (단, GROUP BY 사용 시 예외)

항상 SQL 문장의 가장 처음에 위치해야 한다.

정답: 4

해설: ORDER BY는 항상 SQL 문장의 가장 마지막에 위치합니다.

힌트: 줄을 세우는 건 모든 작업이 다 끝난 '마지막' 단계예요.

Q3. Oracle 환경에서 ORDER BY SAL DESC를 실행했을 때, SAL 컬럼이 NULL인 데이터의 위치는?
가장 먼저 출력된다.

가장 나중에 출력된다.

무작위로 출력된다.

에러가 발생한다.

정답: 1

해설: Oracle은 NULL을 '무한대(가장 큰 값)'로 취급합니다. 따라서 내림차순(DESC) 정렬 시 가장 큰 값인 NULL이 맨 처음에 옵니다.

힌트: Oracle에서 NULL은 대장(가장 큰 값)입니다!

Q4. SQL Server 환경에서 ORDER BY SAL ASC를 실행했을 때, NULL 값의 위치는?
가장 먼저 출력된다.

가장 나중에 출력된다.

오름차순이므로 중간에 출력된다.

출력되지 않는다.

정답: 1

해설: SQL Server는 NULL을 '가장 작은 값'으로 취급합니다. 따라서 오름차순(ASC) 시 맨 처음에 옵니다.

힌트: SQL Server에서 NULL은 꼬맹이(가장 작은 값)입니다.

Q5. 다음 쿼리의 결과로 올바른 것은?
SELECT SUBSTR('SQLMaster', 4, 3) FROM DUAL; (Oracle 기준)

SQL

Mas

Master

ster

정답: 2

해설: 4번째 글자인 'M'부터 시작해서 3글자를 가져오므로 'Mas'가 됩니다.

힌트: (시작위치, 글자수)를 기억하세요!

Q6. 다음 중 숫자를 처리하는 함수와 결과가 잘못 연결된 것은?
ROUND(12.5, 0) → 13

FLOOR(12.9) → 12

CEIL(-1.2) → -2

TRUNC(12.56, 1) → 12.5

정답: 3

해설: CEIL은 나보다 크거나 같은 최소 정수입니다. -1.2보다 큰 정수 중 가장 작은 값은 -1입니다.

힌트: 음수 축에서는 -1이 -1.2보다 '큰' 값이라는 점 주의!

Q7. 현재 시간이 2026년 2월 11일 오후 2시일 때, 3시간 뒤를 구하는 식으로 옳은 것은? (Oracle)
SYSDATE + 3

SYSDATE + 3/24

SYSDATE + 3/60

SYSDATE + 180

정답: 2

해설: 날짜에 숫자를 더하면 '일' 단위로 계산됩니다. 3시간은 하루(24시간) 중 3시간이므로 3/24를 더해야 합니다.

힌트: 1일 = 24시간, 1시간 = 60분!

Q8. 다음 중 NULLIF(10, 10)의 결과값은?
10

0

NULL

에러 발생

정답: 3

해설: NULLIF(A, B)는 두 값이 같으면 NULL을, 다르면 A를 반환합니다.

힌트: "같으면 널(NULL)로 만들어버려!"

Q9. COALESCE(NULL, NULL, 'Success', 'Fail')의 결과값은?
NULL

Success

Fail

Success, Fail

정답: 2

해설: COALESCE는 인자 리스트 중 NULL이 아닌 첫 번째 값을 반환합니다.

힌트: "처음으로 나타나는 진짜 값을 찾아라!"

Q10. Oracle에서 NVL2(COMM, 'A', 'B') 함수에 대한 설명으로 옳은 것은?
COMM이 NULL이면 'A', 아니면 'B'를 반환한다.

COMM이 NULL이 아니면 'A', NULL이면 'B'를 반환한다.

COMM과 'A'가 같으면 'B'를 반환한다.

COMM이 'A'이면 NULL을 반환한다.

정답: 2

해설: NVL2(대상, NotNull일때, Null일때) 순서입니다.

힌트: NVL은 인자가 2개, NVL2는 인자가 3개!

Q11. 다음 중 문자를 대문자로 변환하는 함수는?
LOWER

UPPER

LENGTH

CONCAT

정답: 2

해설: UPPER는 대문자, LOWER는 소문자로 변환합니다.

힌트: Up(위로/크게), Low(아래로/작게).

Q12. SELECT 10 + NULL FROM DUAL;의 결과는?
10

0

NULL

에러

정답: 3

해설: NULL과의 산술 연산 결과는 무조건 NULL입니다.

힌트: NULL은 블랙홀과 같습니다. 모든 걸 NULL로 빨아들여요.

Q13. 다음 중 CASE 문의 문법으로 올바르지 않은 것은?
CASE WHEN 조건 THEN 결과 END

CASE 컬럼 WHEN 값 THEN 결과 ELSE 결과 END

CASE WHEN 조건 THEN 결과 ELSE 결과 END

IF 조건 THEN 결과 ELSE 결과 END

정답: 4

해설: SQL에서는 IF 대신 CASE 문을 사용합니다. (절차형 언어인 PL/SQL에서는 IF 사용 가능)

힌트: SQL의 조건 분기는 무조건 CASE!

Q14. ORDER BY 1, 2 DESC에서 '1'과 '2'가 의미하는 것은?
상수 1과 2를 정렬한다.

SELECT 절에 명시된 첫 번째 컬럼과 두 번째 컬럼을 의미한다.

데이터의 첫 번째 행과 두 번째 행을 의미한다.

아무런 의미가 없는 문법 오류다.

정답: 2

해설: ORDER BY 절에서는 컬럼의 순서 번호를 사용할 수 있습니다.

힌트: 첫 번째 컬럼으로 먼저 줄 세우고, 같으면 두 번째 컬럼으로!

Q15. 다음 중 문자열의 길이를 반환하는 함수로 짝지어진 것은? (Oracle, SQL Server 순)
LENGTH, LEN

LEN, LENGTH

SIZE, LENGTH

LENGTH, SIZE

정답: 1

해설: Oracle은 LENGTH, SQL Server는 LEN을 사용합니다.

힌트: SQL Server는 좀 더 짧게(LEN) 씁니다.

Q16. SELECT ENAME FROM EMP ORDER BY HIREDATE; 쿼리는 실행 가능한가?
가능하다.

SELECT 절에 HIREDATE가 없으므로 불가능하다.

GROUP BY가 없어서 불가능하다.

반드시 DESC를 써야 실행 가능하다.

정답: 1

해설: 일반 SELECT 문에서 ORDER BY 절에는 SELECT 절에 없는 컬럼을 사용할 수 있습니다.

힌트: 화면엔 이름만 보여도, 뒤에서는 입사일 순으로 서 있을 수 있죠.

Q17. MOD(15, 4)의 결과값은?
3

4

1

0

정답: 1

해설: 15를 4로 나누면 몫은 3이고 나머지는 3입니다. MOD는 나머지를 구하는 함수입니다.

힌트: 15 = (4 * 3) + 3

Q18. 다음 중 명시적 형변환 함수가 아닌 것은?
TO_CHAR

TO_DATE

CAST

CONCAT

정답: 4

해설: CONCAT은 문자열을 연결하는 함수입니다. 형변환 함수는 타입을 바꾸는 기능을 합니다.

힌트: TO_~ 로 시작하면 대부분 형변환 함수입니다.

Q19. SELECT SIGN(-50) FROM DUAL;의 결과는?
50

-50

-1

0

정답: 3

해설: SIGN 함수는 양수면 1, 음수면 -1, 0이면 0을 반환합니다.

힌트: 숫자의 '부호'만 알려주는 함수입니다.

Q20. 다음 쿼리의 실행 결과로 알맞은 것은? (Oracle 기준)
SELECT NVL(NULLIF('A', 'A'), 'Empty') FROM DUAL;

A

NULL

Empty

에러 발생

정답: 3

해설: 중첩 함수입니다. 안쪽 NULLIF('A', 'A')가 NULL을 반환하고, NVL(NULL, 'Empty')가 실행되어 최종적으로 'Empty'가 출력됩니다.

힌트: 괄호 안쪽부터 하나씩 해결하세요!