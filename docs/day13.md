

### 📝 [DAY 13] SQL 관리 구문 실전 퀴즈 20선

**Q1. 다음 중 트랜잭션의 특성(ACID)과 그 설명이 올바르게 짝지어진 것은?**
| 특성 | 설명 |
| :--- | :--- |
| 가. 원자성 | 트랜잭션 실행 전후로 무결성 제약조건이 유지되어야 한다. |
| 나. 일관성 | 성공적으로 커밋된 결과는 영구적으로 보존되어야 한다. |
| 다. 고립성 | 연산은 모두 성공하거나 모두 실패해야 한다(All or Nothing). |
| 라. 지속성 | 트랜잭션 도중 다른 트랜잭션의 간섭을 받지 않아야 한다. |

1. 가 - 원자성
2. 나 - 일관성
3. 다 - 고립성
4. 라 - 지속성

* **정답:** 4
* **해설:** 가)는 일관성, 나)는 지속성, 다)는 원자성, 라)는 고립성에 대한 설명입니다.
* **힌트:** 일관성은 '정합성 유지', 원자성은 'All or Nothing'입니다.

**Q2. 아래 SQL 구문을 실행했을 때 발생할 수 있는 문제점으로 가장 적절한 것은?**

```sql
UPDATE EMP
SET SAL = SAL * 1.1;

```

1. 에러가 발생하며 쿼리가 실행되지 않는다.
2. 첫 번째 행의 SAL 값만 10% 인상된다.
3. 테이블의 모든 직원의 SAL 값이 10% 인상된다.
4. DDL 구문이므로 자동 커밋되어 롤백할 수 없다.

* **정답:** 3
* **해설:** UPDATE 구문에서 WHERE 절을 생략하면 테이블 내의 모든 데이터가 수정됩니다.
* **힌트:** 대참사 주의! 조건을 지정하는 절이 빠져 있습니다.

**Q3. 다음 DDL 명령어 중 성격이 다른 하나는 무엇인가?**

1. `CREATE`
2. `ALTER`
3. `TRUNCATE`
4. `DELETE`

* **정답:** 4
* **해설:** DELETE는 데이터 조작어(DML)이며, CREATE, ALTER, TRUNCATE는 데이터 정의어(DDL)입니다.
* **힌트:** 구조를 다루느냐, 안의 데이터를 조작하느냐의 차이입니다.

**Q4. 아래의 시나리오를 수행한 후, `ROLLBACK TO SP1;`을 실행했을 때의 결과로 옳은 것은?**

```sql
INSERT INTO DEPT VALUES (10, 'HR', 'SEOUL');
SAVEPOINT SP1;
INSERT INTO DEPT VALUES (20, 'IT', 'BUSAN');
SAVEPOINT SP2;

```

1. 10번, 20번 부서 데이터가 모두 취소된다.
2. 20번 부서 데이터 입력만 취소되고, SP2 저장점은 유지된다.
3. 20번 부서 데이터 입력이 취소되며, SP2 저장점은 영구 소멸된다.
4. 10번 부서 데이터만 DB에 영구 저장(Commit)된다.

* **정답:** 3
* **해설:** SP1으로 롤백하면 그 시점 이후에 발생한 모든 작업과 저장점(SP2)은 영구적으로 소멸됩니다. (미래 깃발 소멸 규칙)
* **힌트:** 과거로 타임머신을 타면 미래에 꽂았던 깃발은 어떻게 될까요?

**Q5. 데이터베이스의 삭제 명령어에 대한 설명으로 틀린 것은?**

1. `DELETE`는 Undo 로그를 기록하며 삭제하므로 속도가 상대적으로 느리다.
2. `TRUNCATE`는 테이블의 구조는 남기고 데이터를 모두 즉시 삭제한다.
3. `DROP`은 테이블의 데이터와 구조를 완전히 삭제하며 롤백이 불가하다.
4. `TRUNCATE`는 DML에 속하므로 사용자가 명시적으로 커밋해야 한다.

* **정답:** 4
* **해설:** TRUNCATE는 DDL(데이터 정의어)에 속하며, 실행 즉시 Auto-Commit 되므로 롤백할 수 없습니다.
* **힌트:** 빈출 3대 삭제 명령어 비교 표의 '언어 종류'를 떠올려보세요.

**Q6. 다음 MERGE 구문에 대한 설명으로 옳지 않은 것은?**

```sql
MERGE INTO EMP_TARGET T
USING EMP_SOURCE S
   ON (T.EMPNO = S.EMPNO)
WHEN MATCHED THEN
    UPDATE SET T.SAL = S.SAL
    DELETE WHERE (T.SAL < 2000)
WHEN NOT MATCHED THEN
    INSERT (EMPNO, ENAME, SAL) VALUES (S.EMPNO, S.ENAME, S.SAL);

```

1. 타겟 테이블과 소스 테이블의 EMPNO가 같으면 UPDATE를 수행한다.
2. 두 테이블의 EMPNO가 일치하지 않으면 INSERT를 수행한다.
3. DELETE 구문은 소스 테이블의 전체 데이터 중 SAL이 2000 미만인 것을 모두 삭제한다.
4. 하나의 SQL 문장으로 조건에 따른 INSERT와 UPDATE 처리가 가능하다.

* **정답:** 3
* **해설:** MERGE 문 내의 DELETE는 조건이 매치되어 'UPDATE가 실제로 수행된 행'들에 한해서만 실행 여부를 평가하여 삭제합니다.
* **힌트:** MERGE + DELETE의 ★시험 빈출 포인트를 확인하세요.

**Q7. 아래 구문을 실행한 후 테이블 구조에 대한 설명으로 옳은 것은?**

```sql
ALTER TABLE DEPT DROP COLUMN LOC;

```

1. LOC 컬럼 안의 데이터만 지워지고 컬럼 구조는 남는다.
2. LOC 컬럼이 삭제되며, 실수했다면 ROLLBACK을 통해 복구할 수 있다.
3. LOC 컬럼이 삭제되며, DDL 구문이므로 ROLLBACK이 불가능하다.
4. 구문 오류가 발생한다. (Oracle 기준)

* **정답:** 3
* **해설:** ALTER는 DDL 명령어이므로 실행 즉시 Auto-Commit이 발생하여 롤백이 불가능합니다.
* **힌트:** 구조를 변경하는 DDL 명령어의 공통적인 특징을 기억하세요.

**Q8. 아래 일련의 트랜잭션 작업을 수행한 후, DEPT 테이블에 최종적으로 저장된 행의 개수는? (초기 데이터는 0건, Oracle 기준)**

```sql
INSERT INTO DEPT VALUES (10, 'SALES');
INSERT INTO DEPT VALUES (20, 'MARKETING');
CREATE TABLE TEMP_TABLE (ID NUMBER);
ROLLBACK;

```

1. 0개
2. 1개
3. 2개
4. 3개

* **정답:** 3
* **해설:** DML(INSERT) 수행 후 DDL(CREATE TABLE)을 실행하면, DDL 실행 시점에 이전 트랜잭션이 자동으로 커밋(Auto-Commit)됩니다. 따라서 마지막의 ROLLBACK은 아무런 효과가 없습니다.
* **힌트:** DDL 명령어가 트랜잭션에 미치는 영향을 생각해보세요. (OX 퀴즈 빈출)

**Q9. 테이블 제약조건(Constraint)에 대한 설명 중 올바른 것은?**

1. PRIMARY KEY는 중복 값을 허용하지 않지만, NULL은 1개까지 허용한다.
2. UNIQUE KEY는 중복 값을 허용하지 않으며, 여러 개의 NULL 값 입력을 허용한다.
3. NOT NULL 제약조건은 중복 값 입력을 방지한다.
4. 하나의 테이블에는 여러 개의 PRIMARY KEY를 설정할 수 있다.

* **정답:** 2
* **해설:** NULL은 '데이터가 없는 상태'이므로 UNIQUE KEY에서는 다중 NULL 값 입력이 허용됩니다. PRIMARY KEY는 NULL 불가이며 테이블당 1개만 가능합니다.
* **힌트:** UNIQUE KEY의 ★심화 포인트 부분입니다.

**Q10. 다른 테이블에서 외래키(Foreign Key)로 참조하고 있는 부모 테이블을 강제로 완전 삭제하고자 할 때 사용하는 명령어 옵션은?**

1. `DROP TABLE DEPT FORCE;`
2. `DROP TABLE DEPT CASCADE CONSTRAINTS;`
3. `DELETE TABLE DEPT CASCADE;`
4. `TRUNCATE TABLE DEPT FORCE;`

* **정답:** 2
* **해설:** 참조 중인 제약조건까지 함께 지워버리면서 테이블을 삭제하려면 `CASCADE CONSTRAINTS` 옵션을 사용해야 합니다.
* **힌트:** '연쇄적으로 제약조건을 끊어낸다'는 의미의 키워드입니다.

**Q11. 컬럼명을 변경하는 올바른 DDL 구문은 무엇인가? (Oracle 기준)**

1. `RENAME COLUMN LOC TO LOCATION FROM DEPT;`
2. `ALTER TABLE DEPT MODIFY COLUMN LOC TO LOCATION;`
3. `ALTER TABLE DEPT RENAME COLUMN LOC TO LOCATION;`
4. `UPDATE DEPT RENAME LOC = LOCATION;`

* **정답:** 3
* **해설:** 컬럼의 이름을 변경할 때는 `ALTER TABLE 테이블명 RENAME COLUMN 기존컬럼 TO 새컬럼;` 형식을 사용합니다.
* **힌트:** 테이블의 구조를 변경하는 명령어(ALTER)의 하위 기능입니다.

**Q12. 아래 쿼리의 빈칸 (A)에 들어갈 제약조건으로 가장 알맞은 것은?**

```sql
CREATE TABLE EMP (
    SAL NUMBER(7,2) (   A   ) (SAL > 0)
);

```

1. NOT NULL
2. UNIQUE
3. PRIMARY KEY
4. CHECK

* **정답:** 4
* **해설:** 설정한 조건식(예: 급여가 0보다 커야 함)을 만족하는 데이터만 입력을 허용하는 제약조건은 CHECK입니다.
* **힌트:** 입력될 값을 '검사'하는 제약조건입니다.

**Q13. DCL의 역할 중 하나인 ROLE에 대한 설명으로 가장 적절한 것은?**

1. 테이블 구조를 변경하는 권한을 의미한다.
2. 한 번 부여하면 REVOKE로 다시 회수할 수 없는 강력한 시스템 권한이다.
3. 다수의 권한을 하나로 묶어 사용자에게 일괄 부여하기 위해 사용하는 권한들의 묶음이다.
4. 트랜잭션의 커밋과 롤백을 제어하는 객체이다.

* **정답:** 3
* **해설:** ROLE은 여러 사용자와 권한들 사이에서 중개 역할을 하는 권한의 세트(묶음)로, 효율적인 권한 관리를 위해 사용됩니다.
* **힌트:** CONNECT, RESOURCE 같은 것들이 기본 제공되는 ROLE입니다.

**Q14. 컬럼을 명시하지 않고 INSERT 구문을 작성할 때 지켜야 할 필수 조건은?**

```sql
INSERT INTO EMP VALUES (1001, '지유', 3000);

```

1. 테이블의 첫 번째 컬럼부터 순서대로 3개만 입력하면 된다.
2. 테이블의 전체 컬럼 순서 및 데이터 타입에 맞춰 모든 값을 생략 없이 입력해야 한다.
3. 반드시 PRIMARY KEY 컬럼의 값만 입력해야 한다.
4. 빈 값이 들어가야 하는 곳은 시스템이 자동으로 파악하여 제외해 준다.

* **정답:** 2
* **해설:** 컬럼명을 생략할 경우, 반드시 대상 테이블의 전체 컬럼 수와 순서에 맞게 VALUES 값을 나열해야 합니다.
* **힌트:** 1교시 1.1 기본 DML 명령어의 INSERT 주의사항을 떠올려보세요.

**Q15. 다음 중 DBMS별 트랜잭션 기본 모드의 차이에 대한 설명으로 올바른 것은?**

1. Oracle은 기본적으로 Auto-Commit 모드로 동작한다.
2. SQL Server는 DML 수행 후 반드시 사용자가 명시적으로 COMMIT을 해야 반영된다.
3. Oracle은 DML 수행 후 명시적으로 COMMIT이나 ROLLBACK을 해야 트랜잭션이 종료된다.
4. 두 DBMS 모두 DDL 명령어 수행 시 롤백이 가능하다.

* **정답:** 3
* **해설:** Oracle은 수동 커밋(명시적 COMMIT/ROLLBACK 필요)이 기본이며, SQL Server는 Auto-Commit이 기본 모드입니다.
* **힌트:** 2교시의 [주의!] DBMS별 트랜잭션 기본 모드 차이 부분을 참고하세요.

**Q16. 이미 생성된 테이블에 제약조건을 사후에 추가하려고 한다. 올바른 구문은?**

1. `ALTER TABLE DEPT ADD PRIMARY KEY (DEPTNO);`
2. `ALTER TABLE DEPT ADD CONSTRAINT PK_DEPT PRIMARY KEY (DEPTNO);`
3. `CREATE CONSTRAINT PK_DEPT PRIMARY KEY ON DEPT(DEPTNO);`
4. `UPDATE TABLE DEPT SET CONSTRAINT PK_DEPT = PRIMARY KEY(DEPTNO);`

* **정답:** 2
* **해설:** 이미 존재하는 테이블에 제약조건을 추가할 때는 `ALTER TABLE 테이블명 ADD CONSTRAINT 제약조건명 제약조건타입 (컬럼);`을 사용합니다.
* **힌트:** DDL 명령어 중 테이블 구조를 '변경'하는 명령어를 찾아보세요.

**Q17. 부여했던 권한을 회수하기 위해 사용하는 올바른 DCL 구문은?**

1. `DELETE SELECT ON EMP FROM SCOTT;`
2. `DROP SELECT ON EMP FROM SCOTT;`
3. `ROLLBACK SELECT ON EMP TO SCOTT;`
4. `REVOKE SELECT ON EMP FROM SCOTT;`

* **정답:** 4
* **해설:** 권한을 회수할 때는 REVOKE 문을 사용합니다. (부여할 때는 GRANT)
* **힌트:** DCL(데이터 제어어)에 속하는 명령어를 고르세요.

**Q18. 테이블의 모든 데이터를 가장 빠르게 비우면서 용량을 초기화하고 싶을 때 적합한 쿼리는?**

1. `DELETE FROM DEPT;`
2. `DROP TABLE DEPT;`
3. `TRUNCATE TABLE DEPT;`
4. `FORMAT TABLE DEPT;`

* **정답:** 3
* **해설:** TRUNCATE는 Undo 로그를 남기지 않고 저장 공간을 초기화하므로 데이터를 가장 빠르게 비울 수 있습니다. 구조는 유지됩니다.
* **힌트:** 3대 삭제 명령어 비교 표에서 '모든 데이터만 즉시 삭제'를 찾아보세요.

**Q19. 데이터를 조회하는 SELECT 문은 데이터베이스에 변형을 일으키지 않아 별도로 어떤 언어로 분류하기도 하는가?**

1. DDL (Data Definition Language)
2. TCL (Transaction Control Language)
3. DQL (Data Query Language)
4. DCL (Data Control Language)

* **정답:** 3
* **해설:** 데이터의 조회를 목적으로 하는 SELECT는 넓은 의미로 DML에 속하지만, 별도로 질의어인 DQL로 분류하기도 합니다.
* **힌트:** Query(질의)라는 단어가 포함되어 있습니다.

**Q20. Oracle 기준 데이터 타입 변경을 위한 올바른 SQL 구문은?**

1. `ALTER TABLE DEPT MODIFY (LOC VARCHAR2(20));`
2. `ALTER TABLE DEPT ALTER COLUMN LOC VARCHAR2(20);`
3. `CHANGE TABLE DEPT MODIFY LOC VARCHAR2(20);`
4. `UPDATE TABLE DEPT SET LOC TYPE VARCHAR2(20);`

* **정답:** 1
* **해설:** Oracle에서 데이터 타입을 변경할 때는 `MODIFY`를 사용합니다. (SQL Server는 `ALTER COLUMN` 사용)
* **힌트:** 3.1 DDL 명령어 종류 중 데이터 타입 변경 부분을 확인하세요.

---