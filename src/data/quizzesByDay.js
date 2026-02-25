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
  11: { title: "Top N/셀프 조인/계층형 질의" },
  12: { title: "PIVOT & 정규표현식" },
  13: { title: "SQL 관리 구문 실전 퀴즈 20선" },
  14: { title: "SQLD DAY 8~13 실전 대비 40문항 퀴즈" },
  15: { title: "데이터 모델링 실전 암기 퀴즈 20선" },
  16: { title: "엔터티와 속성 : 실전 복합 모의고사 20선" },
  17: { title: "관계와 식별자 : 실전 모의고사 20선" },
  18: { title: "데이터 모델링 정규화 퀴즈" },
  142: { title: "SQLD 합격 대비 실전 모의고사 (50문항)" },
};

export const quizzesByDay = {
  15: [
    {
      id: 1,
      category: "데이터 모델링 기초",
      question: "데이터 모델링의 3대 특징으로 올바르지 않은 것은?",
      options: [
        { id: 1, text: "추상화 (Abstraction)", isCorrect: false },
        { id: 2, text: "복제성 (Duplication)", isCorrect: true },
        { id: 3, text: "단순화 (Simplification)", isCorrect: false },
        { id: 4, text: "명확화 (Clarity)", isCorrect: false },
      ],
      rationale:
        "모델링은 현실 세계를 그대로 복제하는 것이 아닙니다. 불필요한 것을 버리는 '추상화' 과정이 필수입니다.",
      hint: "3대 특징의 앞글자는 '추.단.명'입니다.",
    },
    {
      id: 2,
      category: "데이터 모델링 기초",
      question:
        "데이터 모델링의 특징 중 '현실의 불필요한 디테일을 버리고 공통점만 뽑아내는 것'을 의미하는 것은?",
      options: [
        { id: 1, text: "추상화", isCorrect: true },
        { id: 2, text: "단순화", isCorrect: false },
        { id: 3, text: "명확화", isCorrect: false },
        { id: 4, text: "정규화", isCorrect: false },
      ],
      rationale:
        "추상화는 복잡한 현실에서 아이디어와 포괄적인 공통점을 추출하는 작업입니다.",
      hint: "'포괄적', '아이디어'라는 키워드와 짝꿍입니다.",
    },
    {
      id: 3,
      category: "데이터 모델링 단계",
      question:
        "데이터베이스 설계 시 진행되는 데이터 모델링의 순서로 알맞은 것은?",
      options: [
        {
          id: 1,
          text: "논리적 모델링 ➔ 개념적 모델링 ➔ 물리적 모델링",
          isCorrect: false,
        },
        {
          id: 2,
          text: "물리적 모델링 ➔ 논리적 모델링 ➔ 개념적 모델링",
          isCorrect: false,
        },
        {
          id: 3,
          text: "개념적 모델링 ➔ 논리적 모델링 ➔ 물리적 모델링",
          isCorrect: true,
        },
        {
          id: 4,
          text: "개념적 모델링 ➔ 물리적 모델링 ➔ 논리적 모델링",
          isCorrect: false,
        },
      ],
      rationale: "거시적(숲)에서 미시적(나무) 순서로 진행됩니다.",
      hint: '"개논물 난다" 암기 팁을 떠올려보세요!',
    },
    {
      id: 4,
      category: "데이터 모델링 단계",
      question:
        "다음 중 '개념적 데이터 모델링' 단계에 대한 설명으로 가장 적절한 것은?",
      options: [
        { id: 1, text: "물리적인 저장 구조를 설계한다.", isCorrect: false },
        {
          id: 2,
          text: "핵심 산출물로 ERD(E-R 다이어그램)를 작성한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "데이터의 중복을 제거하는 정규화를 수행한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "특정 DBMS(Oracle 등)의 특성을 고려한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "개념적 모델링은 가장 추상적인 단계로, 큰 그림을 그리기 위해 주제 영역과 핵심 엔터티를 도출하고 ERD를 작성합니다.",
      hint: "1단계는 고객과 소통하며 '큰 그림(도면)'을 그리는 단계입니다.",
    },
    {
      id: 5,
      category: "데이터 모델링 단계",
      question:
        "다음 중 '논리적 데이터 모델링' 단계의 핵심 특징으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "하드웨어의 저장 공간과 인덱스를 설계한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "데이터 모델링 중 재사용성이 가장 낮다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "비즈니스 규칙을 구체화하며, 정규화를 수행하여 중복을 제거한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "구체적인 데이터베이스 관리 시스템(DBMS)에 종속적이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "논리적 모델링은 식별자, 속성, 관계를 정의하고 중복 배제를 위한 정규화(Normalization)를 수행하는 가장 중요한 단계입니다. 재사용성도 가장 높습니다.",
      hint: "정규화 = 논리적 모델링!",
    },
    {
      id: 6,
      category: "데이터 모델링 단계",
      question:
        "'물리적 데이터 모델링' 단계에서 수행하는 작업으로 올바른 것은?",
      options: [
        { id: 1, text: "엔터티(Entity) 도출", isCorrect: false },
        { id: 2, text: "정규화(Normalization) 수행", isCorrect: false },
        {
          id: 3,
          text: "성능(Performance)을 고려한 인덱스 및 파티셔닝 설계",
          isCorrect: true,
        },
        { id: 4, text: "비즈니스 룰 정의", isCorrect: false },
      ],
      rationale:
        "3단계인 물리적 모델링은 실제 하드웨어에 데이터를 어떻게 넣을지, 어떻게 하면 성능이 빠를지를 결정합니다.",
      hint: "'성능', '저장 공간', '특정 DBMS'가 핵심 키워드입니다.",
    },
    {
      id: 7,
      category: "데이터 모델링 관점",
      question:
        "모델링의 3가지 관점 중 '업무가 어떻게 흘러가는가(How)'를 분석하는 관점은?",
      options: [
        { id: 1, text: "데이터 관점", isCorrect: false },
        { id: 2, text: "프로세스 관점", isCorrect: true },
        { id: 3, text: "상관 관점", isCorrect: false },
        { id: 4, text: "시간 관점", isCorrect: false },
      ],
      rationale:
        "실제 업무의 흐름(Work flow)과 처리 방법을 보는 것은 프로세스(Process) 관점입니다.",
      hint: "How = 프로세스!",
    },
    {
      id: 8,
      category: "데이터 모델링 관점",
      question:
        "모델링 관점 중 '주문이 발생하면 재고가 줄어든다'와 같이 데이터와 프로세스의 상호작용을 파악하고 CRUD 매트릭스로 검증하는 관점은?",
      options: [
        { id: 1, text: "데이터 관점", isCorrect: false },
        { id: 2, text: "프로세스 관점", isCorrect: false },
        { id: 3, text: "상관관계 (Correlation) 관점", isCorrect: true },
        { id: 4, text: "구조 관점", isCorrect: false },
      ],
      rationale:
        "데이터와 프로세스가 서로 어떤 영향을 주고받는지 검증하는 것은 상관관계 관점입니다.",
      hint: "상호작용 = 상관관계.",
    },
    {
      id: 9,
      category: "데이터베이스 스키마와 독립성",
      question:
        "데이터베이스의 스키마 구조 중, '조직 전체의 관점'을 통합하여 DBA(관리자)가 관리하며, 하나의 데이터베이스에 오직 1개만 존재하는 스키마는?",
      options: [
        { id: 1, text: "외부 스키마", isCorrect: false },
        { id: 2, text: "개념 스키마", isCorrect: true },
        { id: 3, text: "내부 스키마", isCorrect: false },
        { id: 4, text: "전체 스키마", isCorrect: false },
      ],
      rationale:
        "모든 사용자 관점을 통합한 총괄 데이터베이스 설계도가 바로 개념 스키마입니다.",
      hint: "스키마 구조 3단계의 핵심 키워드는 [외·개·내]입니다. 중간을 담당하는 녀석을 찾으세요.",
    },
    {
      id: 10,
      category: "데이터베이스 스키마와 독립성",
      question:
        "사용자나 개별 응용 프로그램 관점에서 바라보는 스키마로, 쇼핑몰의 '마이페이지'처럼 전체 DB 중 일부분만 정의하며 여러 개가 존재할 수 있는 것은?",
      options: [
        { id: 1, text: "내부 스키마", isCorrect: false },
        { id: 2, text: "논리 스키마", isCorrect: false },
        { id: 3, text: "개념 스키마", isCorrect: false },
        { id: 4, text: "외부 스키마", isCorrect: true },
      ],
      rationale: "개별 사용자가 보는 뷰(View)의 집합이 외부 스키마입니다.",
      hint: "'사용자 눈에 띄는 껍데기(외부)'라고 생각하세요.",
    },
    {
      id: 11,
      category: "데이터베이스 스키마와 독립성",
      question: "다음 중 '물리적 데이터 독립성'에 대한 설명으로 알맞은 것은?",
      options: [
        {
          id: 1,
          text: "개념 스키마가 변경되어도 외부 스키마에 영향을 주지 않는다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "응용 프로그램 코드가 변경되어도 사용자는 이를 알지 못한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "내부 스키마(저장 장치, 인덱스 등)가 변경되어도 개념 스키마나 외부 스키마에 영향을 주지 않는다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "외부 스키마가 변경되어도 개념 스키마에 영향을 주지 않는다.",
          isCorrect: false,
        },
      ],
      rationale:
        "하드디스크 교체나 인덱스 추가 등 물리적인 내부 스키마의 변경이 상위 논리 구조에 영향을 주지 않는 성질입니다.",
      hint: "내부 스키마 ➔ 물리적 독립성.",
    },
    {
      id: 12,
      category: "데이터베이스 스키마와 독립성",
      question:
        "'관리자가 고객 등급 테이블을 새로 추가(개념 스키마 변경)하더라도, 기존 사용자의 마이페이지 화면 코드(외부 스키마)는 수정할 필요가 없다'는 현상은 무엇을 보장하기 때문인가?",
      options: [
        { id: 1, text: "물리적 데이터 독립성", isCorrect: false },
        { id: 2, text: "논리적 데이터 독립성", isCorrect: true },
        { id: 3, text: "외부 매핑", isCorrect: false },
        { id: 4, text: "무결성 제약조건", isCorrect: false },
      ],
      rationale:
        "개념 스키마가 변경되어도 외부 스키마에 영향이 없는 것을 논리적 데이터 독립성이라고 합니다.",
      hint: "테이블 구조의 변경 ➔ 논리적 변경.",
    },
    {
      id: 13,
      category: "데이터베이스 스키마와 독립성",
      question:
        "데이터 독립성을 유지하기 위해 각 단계 사이를 연결해 주는 '통역사'를 무엇이라 하는가?",
      options: [
        { id: 1, text: "스키마 (Schema)", isCorrect: false },
        { id: 2, text: "매핑 / 사상 (Mapping)", isCorrect: true },
        { id: 3, text: "인덱스 (Index)", isCorrect: false },
        { id: 4, text: "뷰 (View)", isCorrect: false },
      ],
      rationale:
        "외부-개념 사이, 개념-내부 사이를 이어주는 다리 역할을 사상(Mapping)이라고 합니다.",
      hint: "5.2. 사상(Mapping) 파트를 확인하세요.",
    },
    {
      id: 14,
      category: "데이터베이스 스키마와 독립성",
      question:
        "외부 스키마와 개념 스키마 사이를 연결해 주며, 논리적 데이터 독립성을 보장하는 사상(Mapping)은?",
      options: [
        { id: 1, text: "외부/내부 사상", isCorrect: false },
        { id: 2, text: "물리적 사상", isCorrect: false },
        { id: 3, text: "개념/내부 사상", isCorrect: false },
        { id: 4, text: "외부/개념 사상 (논리적 사상)", isCorrect: true },
      ],
      rationale:
        "외부와 개념을 이어주므로 '외부/개념 사상'이며, 이는 논리적 데이터 독립성을 보장합니다.",
      hint: "이름 그대로 외부와 개념을 연결합니다.",
    },
    {
      id: 15,
      category: "ERD (Entity Relationship Diagram)",
      question:
        "ERD(Entity Relationship Diagram)를 구성하는 기본 3요소에 해당하지 않는 것은?",
      options: [
        { id: 1, text: "프로세스 (Process)", isCorrect: true },
        { id: 2, text: "엔터티 (Entity)", isCorrect: false },
        { id: 3, text: "속성 (Attribute)", isCorrect: false },
        { id: 4, text: "관계 (Relationship)", isCorrect: false },
      ],
      rationale:
        "ERD의 3요소는 엔터티(박스), 속성(글씨), 관계(선)입니다. 프로세스는 모델링의 '관점' 중 하나입니다.",
      hint: "E(Entity) R(Relationship) D. 속성도 포함됩니다.",
    },
    {
      id: 16,
      category: "ERD (Entity Relationship Diagram)",
      question: "ERD 작성 시 가장 우선적으로 수행해야 하는 단계는?",
      options: [
        { id: 1, text: "관계의 필수 여부 기술", isCorrect: false },
        { id: 2, text: "엔터티 간 관계 설정", isCorrect: false },
        { id: 3, text: "엔터티(주인공) 도출 및 그리기", isCorrect: true },
        { id: 4, text: "관계명 기술", isCorrect: false },
      ],
      rationale:
        "설계도를 그릴 때는 주인공인 엔터티(Entity)를 가장 먼저 파악하고 그려야 합니다.",
      hint: "6.1 ERD 작성 순서의 1번을 확인하세요.",
    },
    {
      id: 17,
      category: "ERD (Entity Relationship Diagram)",
      question: "ERD 작성 순서 중 가장 마지막에 수행하는 작업은 보통 무엇인가?",
      options: [
        { id: 1, text: "엔터티 도출", isCorrect: false },
        { id: 2, text: "엔터티 배치", isCorrect: false },
        {
          id: 3,
          text: "관계의 참여도(1:1, 1:N) 및 필수/선택 여부 기술",
          isCorrect: true,
        },
        { id: 4, text: "관계 설정", isCorrect: false },
      ],
      rationale:
        "엔터티 배치 ➔ 관계선 연결 ➔ 관계명 ➔ 참여도 ➔ 필수 여부 순으로 구체화됩니다.",
      hint: "선을 그리고 나서 그 선의 디테일(선택사양 등)을 기술합니다.",
    },
    {
      id: 18,
      category: "좋은 데이터 모델의 요건",
      question:
        "좋은 데이터 모델의 요건 중 '업무에 필요한 데이터가 모델에 빠짐없이 정의되어야 한다'는 것을 의미하는 것은?",
      options: [
        { id: 1, text: "중복 배제", isCorrect: false },
        { id: 2, text: "데이터 재사용", isCorrect: false },
        { id: 3, text: "업무 규칙", isCorrect: false },
        { id: 4, text: "완전성", isCorrect: true },
      ],
      rationale:
        "모든 필요 데이터가 다 들어있어야 한다는 것은 완전성(Completeness)을 뜻합니다.",
      hint: "완벽하게 다 있다 = 완전성.",
    },
    {
      id: 19,
      category: "좋은 데이터 모델의 요건",
      question:
        "좋은 데이터 모델의 요건 중 '동일한 데이터가 여러 곳에 저장되지 않도록 정규화를 통해 해소하는 것'을 의미하는 것은?",
      options: [
        { id: 1, text: "완전성", isCorrect: false },
        { id: 2, text: "중복 배제", isCorrect: true },
        { id: 3, text: "데이터 재사용", isCorrect: false },
        { id: 4, text: "무결성", isCorrect: false },
      ],
      rationale:
        "같은 데이터가 여러 군데 있으면 수정 시 데이터 불일치가 일어날 수 있으므로 중복을 배제해야 합니다.",
      hint: "정규화의 핵심 목적입니다.",
    },
    {
      id: 20,
      category: "데이터 모델링 종합",
      question: "다음 중 데이터 모델링에 대한 설명으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "데이터베이스를 구축하기 위한 설계도를 그리는 과정이다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "약속된 규약(기호)을 통해 복잡한 현실을 단순하게 표현한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "한 가지 의미로 통일되게 기술하여 애매모호함을 제거해야 한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "개념적 모델링은 특정 DBMS(오라클 등)의 특징을 반영하여 세밀하게 설계한다.",
          isCorrect: true,
        },
      ],
      rationale:
        "특정 DBMS에 종속적으로 세밀하게 설계하는 것은 '물리적 모델링(3단계)'입니다. 개념적 모델링은 가장 추상적인 큰 그림입니다.",
      hint: "개념적 모델링은 숲을 보는 단계라 구체적인 DB 종류는 신경 쓰지 않습니다.",
    },
  ],
  5: [
    {
      id: 1,
      category: "개념 및 기본 원리",
      question:
        "관계형 데이터베이스(RDB)에서 테이블을 쪼개는 '정규화(Normalization)'의 목적으로 가장 적절하지 않은 것은?",
      options: [
        {
          id: 1,
          text: "데이터의 중복을 최소화하여 저장 공간을 효율적으로 사용하기 위함이다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "데이터 삽입, 수정, 삭제 시 발생할 수 있는 이상(Anomaly) 현상을 방지하기 위함이다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "데이터의 무결성(Integrity)을 유지하기 위함이다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "JOIN 연산을 제거하여 무조건적인 조회 속도 향상을 꾀하기 위함이다.",
          isCorrect: true,
        },
      ],
      rationale:
        "정규화는 데이터의 정확성과 일관성을 위해 수행합니다. 테이블이 쪼개지면 조회가 필요할 때 JOIN 연산을 수행해야 하므로, 단순 조회 속도는 정규화 전보다 느려질 수도 있습니다. (속도만을 위한다면 반정규화를 하기도 합니다.)",
      hint: "테이블을 쪼개면 조회 시 필연적으로 JOIN이 발생합니다.",
    },
    {
      id: 2,
      category: "개념 및 기본 원리",
      question: "다음 중 JOIN에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "JOIN을 수행하기 위해서는 두 테이블의 연결 컬럼명이 반드시 동일해야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "두 테이블 간에 PK(Primary Key)와 FK(Foreign Key) 관계가 설정되어 있지 않으면 JOIN할 수 없다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "일반적으로 N개의 테이블을 JOIN 하려면 최소 N-1개의 JOIN 조건이 필요하다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "ANSI 표준 문법에서는 JOIN 조건을 WHERE 절에 기술한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "① 컬럼명이 달라도 데이터 타입과 값이 호환되면 가능합니다. ② 논리적인 연관성만 있다면 FK가 없어도 JOIN 가능합니다. ④ ANSI 표준은 ON 절에 기술합니다.",
      hint: "기차(테이블) 3량을 연결하려면 연결고리는 몇 개가 필요할까요?",
    },
    {
      id: 3,
      category: "개념 및 기본 원리",
      question: "다음 설명에 해당하는 JOIN의 종류는?",
      code: "두 테이블 간의 조인 조건이 정확히 일치(=)하는 경우에만 데이터를 반환한다. 교집합의 개념과 같다.",
      options: [
        { id: 1, text: "INNER JOIN", isCorrect: true },
        { id: 2, text: "LEFT OUTER JOIN", isCorrect: false },
        { id: 3, text: "CROSS JOIN", isCorrect: false },
        { id: 4, text: "FULL OUTER JOIN", isCorrect: false },
      ],
      rationale:
        "조건에 일치하는 행만 반환하는 것은 내부 조인(INNER JOIN)입니다.",
      hint: "가장 기본이 되는 '커플 매칭' 조인입니다.",
    },
    {
      id: 4,
      category: "INNER JOIN과 문법",
      question: "다음 중 ANSI 표준 SQL 문법으로 올바르게 작성된 쿼리는?",
      options: [
        {
          id: 1,
          text: "SELECT E.ENAME, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT E.ENAME, D.DNAME FROM EMP E INNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;",
          isCorrect: true,
        },
        {
          id: 3,
          text: "SELECT E.ENAME, D.DNAME FROM EMP E JOIN DEPT D WHERE E.DEPTNO = D.DEPTNO;",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SELECT E.ENAME, D.DNAME FROM EMP E INNER JOIN DEPT D USING E.DEPTNO = D.DEPTNO;",
          isCorrect: false,
        },
      ],
      rationale:
        "①은 Oracle 전용(과거) 문법입니다. ③은 ON 대신 WHERE를 써서 틀렸습니다. ④ USING 절에는 조건식이 아니라 컬럼명만 USING (DEPTNO) 형태로 들어갑니다.",
      hint: "ANSI 표준은 JOIN과 ON을 짝꿍으로 사용합니다.",
    },
    {
      id: 5,
      category: "INNER JOIN과 문법",
      question: "다음 SQL 문에서 에러가 발생하는 원인은?",
      code: "SELECT EMP.ENAME, D.DNAME\nFROM EMP E\nJOIN DEPT D ON E.DEPTNO = D.DEPTNO;",
      options: [
        {
          id: 1,
          text: "JOIN 키워드 대신 INNER JOIN을 써야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "DEPT 테이블에는 ENAME 컬럼이 없기 때문이다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "FROM 절에서 정의한 별칭(Alias) E를 사용하지 않고 원래 테이블명 EMP를 사용했기 때문이다.",
          isCorrect: true,
        },
        { id: 4, text: "ON 절의 조건이 잘못되었다.", isCorrect: false },
      ],
      rationale:
        "테이블에 Alias를 부여하면, 해당 쿼리 내에서는 반드시 Alias를 사용해야 합니다. EMP.ENAME은 인식되지 않습니다.",
      hint: '"별명을 지어줬으면 본명은 잊어라."',
    },
    {
      id: 6,
      category: "INNER JOIN과 문법",
      question:
        "다음 두 테이블을 조회할 때 발생하는 문제점과 해결책으로 올바른 것은?",
      tables: [
        {
          name: "테이블 A (EMP)",
          headers: ["DEPTNO", "ENAME"],
          rows: [["...", "..."]],
        },
        {
          name: "테이블 B (DEPT)",
          headers: ["DEPTNO", "DNAME"],
          rows: [["...", "..."]],
        },
      ],
      code: "SELECT DEPTNO, ENAME, DNAME\nFROM EMP E\nJOIN DEPT D ON E.DEPTNO = D.DEPTNO;",
      options: [
        { id: 1, text: "문제없음: 정상적으로 조회된다.", isCorrect: false },
        {
          id: 2,
          text: "에러발생: DEPTNO 컬럼이 모호하므로 E.DEPTNO 또는 D.DEPTNO로 명시해야 한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "에러발생: JOIN 대신 CROSS JOIN을 사용해야 한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "에러발생: SELECT 절에는 *만 사용할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "두 테이블에 공통된 이름의 컬럼(DEPTNO)이 있을 때, 소유자를 명시하지 않으면 모호성 에러가 발생합니다.",
      hint: '컴퓨터는 "누구네 DEPTNO야?"라고 묻습니다. (Column Ambiguously Defined)',
    },
    {
      id: 7,
      category: "INNER JOIN과 문법",
      question:
        "다음 SQL의 실행 결과 건수는?\n(테이블 A: 10건, 테이블 B: 10건, 조건: ID가 같은 것만)",
      code: "SELECT * FROM A CROSS JOIN B;",
      options: [
        { id: 1, text: "10건", isCorrect: false },
        { id: 2, text: "20건", isCorrect: false },
        { id: 3, text: "100건", isCorrect: true },
        { id: 4, text: "0건", isCorrect: false },
      ],
      rationale:
        "CROSS JOIN은 모든 경우의 수를 곱합니다. (Cartesian Product). 10 * 10 = 100건이 출력됩니다.",
      hint: "CROSS JOIN은 모든 경우의 수를 곱합니다. (Cartesian Product)",
    },
    {
      id: 8,
      category: "OUTER JOIN과 Oracle",
      question: "다음 중 LEFT OUTER JOIN의 결과에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "왼쪽 테이블의 데이터는 모두 출력되고, 오른쪽 테이블에 매칭되는 데이터가 없으면 해당 컬럼은 NULL로 표시된다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "오른쪽 테이블의 데이터가 기준이 되어 모두 출력된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "양쪽 테이블에 공통으로 존재하는 데이터만 출력된다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "조인 조건에 맞지 않는 데이터는 모두 삭제된다.",
          isCorrect: false,
        },
      ],
      rationale: "LEFT OUTER JOIN은 왼쪽 테이블을 기준으로 삼습니다.",
      hint: "문법 이름(LEFT)이 '주인공'의 위치를 알려줍니다.",
    },
    {
      id: 9,
      category: "OUTER JOIN과 Oracle",
      question: "Oracle 전용 문법인 (+) 기호의 올바른 사용법은?",
      options: [
        {
          id: 1,
          text: "기준이 되어 데이터를 모두 출력해야 하는 쪽에 붙인다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "데이터가 없어서 NULL이 생성될 수 있는(부족한) 쪽에 붙인다.",
          isCorrect: true,
        },
        { id: 3, text: "WHERE 절이 아닌 FROM 절에 붙인다.", isCorrect: false },
        {
          id: 4,
          text: "LEFT JOIN을 하고 싶으면 왼쪽 컬럼에 붙인다.",
          isCorrect: false,
        },
      ],
      rationale:
        "Oracle 문법에서 (+)는 조인 조건 중 데이터가 부족한 쪽(NULL이 나올 쪽)에 붙입니다. ANSI 기준 LEFT JOIN이라면 오른쪽 테이블 컬럼에 붙습니다.",
      hint: '"없는 쪽에 플러스(+)를 붙여서 억지로 채워준다"고 암기하세요.',
    },
    {
      id: 10,
      category: "OUTER JOIN과 Oracle",
      question: "다음 ANSI SQL을 Oracle 문법으로 변환할 때 올바른 것은?",
      code: "-- [ANSI]\nSELECT A.NAME, B.Team\nFROM PLAYER A \nLEFT OUTER JOIN TEAM B ON A.TEAM_ID = B.TEAM_ID;",
      options: [
        { id: 1, text: "WHERE A.TEAM_ID = B.TEAM_ID(+)", isCorrect: true },
        { id: 2, text: "WHERE A.TEAM_ID(+) = B.TEAM_ID", isCorrect: false },
        { id: 3, text: "WHERE A.TEAM_ID(+) = B.TEAM_ID(+)", isCorrect: false },
        { id: 4, text: "WHERE A.TEAM_ID = B.TEAM_ID", isCorrect: false },
      ],
      rationale:
        "왼쪽(A)을 모두 출력해야 하므로, 데이터가 부족한 오른쪽(B) 테이블 컬럼 뒤에 (+)를 붙여야 합니다.",
      hint: "LEFT JOIN = 왼쪽이 주인 = 오른쪽이 부족함.",
    },
    {
      id: 11,
      category: "OUTER JOIN과 Oracle",
      question:
        "다음 데이터 상황에서 결과값이 가장 많은 쿼리는?\n(회원: 100명, 구매이력: 50건-전원회원)",
      options: [
        {
          id: 1,
          text: "SELECT * FROM 회원 INNER JOIN 구매이력 (이하생략)",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT * FROM 회원 LEFT OUTER JOIN 구매이력 (이하생략)",
          isCorrect: true,
        },
        {
          id: 3,
          text: "SELECT * FROM 회원 RIGHT OUTER JOIN 구매이력 (이하생략)",
          isCorrect: false,
        },
        { id: 4, text: "①과 ③의 결과 건수는 같다.", isCorrect: false },
      ],
      rationale:
        "INNER JOIN: 50건 (교집합), LEFT JOIN: 100건 (회원 전체), RIGHT JOIN: 50건 (구매이력 전체). 따라서 ②번이 가장 많습니다.",
      hint: "①은 구매한 사람만(50명), ②는 구매 안 한 사람 포함(100명), ③은 구매이력 기준(50건)",
    },
    {
      id: 12,
      category: "OUTER JOIN과 Oracle",
      question: "Oracle의 (+) 문법으로 구현할 수 없는 조인은?",
      options: [
        { id: 1, text: "INNER JOIN", isCorrect: false },
        { id: 2, text: "LEFT OUTER JOIN", isCorrect: false },
        { id: 3, text: "RIGHT OUTER JOIN", isCorrect: false },
        { id: 4, text: "FULL OUTER JOIN", isCorrect: true },
      ],
      rationale:
        "Oracle 전용 문법으로는 양쪽 모두에 (+)를 붙이는 FULL OUTER JOIN을 한 번에 수행할 수 없습니다. (UNION 연산자를 이용해야 함).",
      hint: "양쪽에 뿔(+)을 달 수는 없습니다.",
    },
    {
      id: 13,
      category: "고급 조인",
      question: "NATURAL JOIN 사용 시 주의사항으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "ON 절을 사용하여 구체적인 조인 조건을 명시해야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "조인 기준이 되는 컬럼에는 테이블 별칭(Alias)을 사용할 수 없다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "서로 다른 이름의 컬럼끼리도 조인이 가능하다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SQL Server(MSSQL)에서 가장 많이 사용하는 방식이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "NATURAL JOIN은 이름과 타입이 같은 컬럼을 자동으로 찾으며, 해당 조인 컬럼 앞에는 테이블명이나 별칭 접두어를 붙이면 에러가 발생합니다.",
      hint: '"우리 자연스럽게(NATURAL) 만났으니까, 니꺼 내꺼(Alias) 따지지 말자."',
    },
    {
      id: 14,
      category: "고급 조인",
      question:
        "다음 중 USING 절을 사용한 조인 쿼리 중 문법적으로 올바른 것은?",
      options: [
        {
          id: 1,
          text: "SELECT E.ENAME, D.DEPTNO FROM EMP E JOIN DEPT D USING (E.DEPTNO = D.DEPTNO)",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT E.ENAME, DEPTNO FROM EMP E JOIN DEPT D USING (DEPTNO)",
          isCorrect: true,
        },
        {
          id: 3,
          text: "SELECT E.ENAME, D.DEPTNO FROM EMP E JOIN DEPT D USING (DEPTNO)",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SELECT E.ENAME, DEPTNO FROM EMP E JOIN DEPT D ON USING (DEPTNO)",
          isCorrect: false,
        },
      ],
      rationale:
        "① 조건식이 아닌 컬럼명만 와야 함. ③ SELECT 절의 D.DEPTNO에서 별칭 사용 불가. ④ ON과 USING은 같이 쓸 수 없음.",
      hint: "USING 안에는 컬럼명만! 그리고 SELECT 절에서도 그 컬럼은 주인 없이(Alias 없이) 써야 합니다.",
    },
    {
      id: 15,
      category: "고급 조인",
      question: "다음 SQL 문장의 조인 방식은?",
      code: "SELECT E.ENAME, S.GRADE\nFROM EMP E, SALGRADE S\nWHERE E.SAL BETWEEN S.LOSAL AND S.HISAL;",
      options: [
        { id: 1, text: "EQUI JOIN", isCorrect: false },
        { id: 2, text: "SELF JOIN", isCorrect: false },
        { id: 3, text: "Non-EQUI JOIN", isCorrect: true },
        { id: 4, text: "OUTER JOIN", isCorrect: false },
      ],
      rationale:
        "조인 조건이 정확한 일치(=)가 아닌 범위나 부등호를 사용하는 경우를 비등가 조인(Non-EQUI JOIN)이라고 합니다.",
      hint: "등호(=)가 보이지 않고 범위(BETWEEN)를 체크하고 있습니다.",
    },
    {
      id: 16,
      category: "고급 조인",
      question: "SELF JOIN에 대한 설명으로 가장 적절한 것은?",
      options: [
        { id: 1, text: "자기 자신과는 조인할 수 없다.", isCorrect: false },
        {
          id: 2,
          text: "반드시 테이블에 서로 다른 별칭(Alias)을 부여하여 식별해야 한다.",
          isCorrect: true,
        },
        { id: 3, text: "OUTER JOIN으로는 수행할 수 없다.", isCorrect: false },
        {
          id: 4,
          text: "계층형 데이터(예: 부장-과장-대리)를 조회할 때 사용할 수 없다.",
          isCorrect: false,
        },
      ],
      rationale:
        "동일한 테이블을 조인하므로, 컴퓨터가 구분할 수 있도록 반드시 서로 다른 Alias(예: A, B)를 주어야 합니다.",
      hint: "거울을 보고 있는 나와 실제의 나를 구분하려면 이름표가 달라야 합니다.",
    },
    {
      id: 17,
      category: "고급 조인",
      question:
        "3개의 테이블 A, B, C를 조인하려고 합니다. 올바른 JOIN 순서는? (A-B 연결, B-C 연결)",
      options: [
        { id: 1, text: "순서는 상관없다.", isCorrect: false },
        {
          id: 2,
          text: "A와 C를 먼저 조인하고 B를 조인한다.",
          isCorrect: false,
        },
        { id: 3, text: "A와 B를 조인한 결과에 C를 조인한다.", isCorrect: true },
        {
          id: 4,
          text: "한 번의 ON 절에 3개 테이블 조건을 모두 쓴다.",
          isCorrect: false,
        },
      ],
      rationale:
        "조인은 논리적으로 두 테이블씩 차례대로 수행됩니다. 연결고리가 있는 A-B를 먼저 묶고, 그 결과(B가 포함됨)를 이용해 C와 묶습니다.",
      hint: "A와 B를 먼저, 그리고 그 결과와 C를.",
    },
    {
      id: 18,
      category: "SQL 추론",
      question: "다음 3중 조인 쿼리 중 문법적 오류가 발생하는 것은?",
      options: [
        {
          id: 1,
          text: "SELECT E.EMP_NAME, D.DEPT_NAME FROM EMPLOYEES E, DEPARTMENTS D WHERE E.DEPT_ID = D.DEPT_ID;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT E.EMP_NAME, L.CITY FROM EMPLOYEES E, DEPARTMENTS D, LOCATIONS L WHERE E.DEPT_ID = D.DEPT_ID AND D.LOC_ID = L.LOC_ID;",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT E.EMP_NAME, L.CITY FROM EMPLOYEES E, DEPARTMENTS D, LOCATIONS L WHERE E.DEPT_ID = D.DEPT_ID AND E.LOC_ID = L.LOC_ID;",
          isCorrect: true,
        },
        {
          id: 4,
          text: "SELECT D.DEPT_NAME, L.CITY FROM DEPARTMENTS D JOIN LOCATIONS L ON D.LOC_ID = L.LOC_ID;",
          isCorrect: false,
        },
      ],
      rationale:
        'EMPLOYEES 테이블에는 LOC_ID 컬럼이 없습니다. 따라서 E.LOC_ID라는 표현은 "부적합한 식별자" 오류를 발생시킵니다. 반드시 DEPARTMENTS(D)를 거쳐서 D.LOC_ID를 사용해야 합니다.',
      hint: "사원(E) 테이블에 도시코드(LOC_ID)가 있나요? 징검다리를 건너뛰면 안 됩니다.",
    },
    {
      id: 19,
      category: "SQL 추론",
      question:
        "다음 PRODUCTS 테이블과 ORDERS 테이블에 대해 아래 SQL을 실행했을 때, 결과 건수로 올바른 것은?",
      tables: [
        {
          name: "PRODUCTS (3건)",
          headers: ["NAME", "PRICE"],
          rows: [
            ["A", "500"],
            ["B", "1500"],
            ["C", "2500"],
          ],
        },
        {
          name: "ORDERS (6건)",
          headers: ["ID", "CATEGORY", "AMOUNT"],
          rows: [
            ["C01", "Elec", "1200"],
            ["C02", "Books", "50"],
            ["...", "...", "..."],
          ],
        },
      ],
      code: "SELECT P.PRODUCT_NAME, O.AMOUNT\nFROM PRODUCTS P, ORDERS O;",
      options: [
        { id: 1, text: "3건", isCorrect: false },
        { id: 2, text: "6건", isCorrect: false },
        { id: 3, text: "9건", isCorrect: false },
        { id: 4, text: "18건", isCorrect: true },
      ],
      rationale:
        "두 테이블 간의 연결 조건이 없습니다. 조인 조건이 없을 때 데이터베이스는 모든 경우의 수를 조합하는 CROSS JOIN (Cartesian Product)을 수행합니다. 3 * 6 = 18건.",
      hint: "WHERE 절이나 ON 절(조인 조건)이 없는 조인을 눈여겨보세요.",
    },
    {
      id: 20,
      category: "SQL 추론",
      question:
        "다음 PRODUCTS 테이블과 가상의 PRICE_GRADE 테이블을 조인하여 가격 등급을 매기려고 합니다. SQL 실행 결과로 올바른 것은?",
      tables: [
        {
          name: "PRODUCTS",
          headers: ["NAME", "PRICE"],
          rows: [
            ["A", "500"],
            ["B", "1500"],
            ["C", "2500"],
          ],
        },
        {
          name: "PRICE_GRADE",
          headers: ["GRADE", "MIN", "MAX"],
          rows: [
            ["Low", "0", "1000"],
            ["Mid", "1001", "2000"],
            ["High", "2001", "9999"],
          ],
        },
      ],
      code: "SELECT P.PRODUCT_NAME, G.GRADE\nFROM PRODUCTS P\nJOIN PRICE_GRADE G\n  ON P.PRICE BETWEEN G.MIN_PRICE AND G.MAX_PRICE;",
      options: [
        { id: 1, text: "A: Low / B: Mid / C: High", isCorrect: true },
        { id: 2, text: "A: Low / B: NULL / C: High", isCorrect: false },
        { id: 3, text: "A: Low / B: Low / C: Mid", isCorrect: false },
        { id: 4, text: "결과 없음 (에러 발생)", isCorrect: false },
      ],
      rationale:
        "Non-EQUI JOIN (비등가 조인): 조인 조건이 정확히 일치(=)하지 않아도, 범위(BETWEEN) 조건에 만족하면 조인이 성립합니다. A(500)->Low, B(1500)->Mid, C(2500)->High.",
      hint: "조인 조건에 등호(=)가 없어도 조인이 될까요? (Non-EQUI JOIN)",
    },
  ],
  4: [
    {
      id: 1,
      category: "집계 함수 기초",
      question:
        "다음 중 집계 함수(Aggregate Function)에 대한 설명으로 올바르지 않은 것은?",
      options: [
        {
          id: 1,
          text: "여러 행의 값을 입력받아 하나의 요약된 값(단일 값)을 반환한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SUM과 AVG는 숫자형 데이터에만 사용할 수 있다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "MAX와 MIN은 숫자뿐만 아니라 문자, 날짜 데이터에도 사용할 수 있다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "모든 집계 함수는 NULL 값을 포함하여 연산한다.",
          isCorrect: true,
        },
      ],
      rationale:
        "COUNT(*)를 제외한 모든 집계 함수(SUM, AVG, MAX, MIN 등)는 NULL 값을 제외(무시)하고 연산합니다.",
      hint: '"NULL 처리 규칙 (매우 중요)" 파트를 다시 확인해보세요.',
    },
    {
      id: 2,
      category: "집계 함수 기초",
      question:
        "다음 테이블(DATA_TAB)을 참고하여 SELECT COUNT(VAL) FROM DATA_TAB;의 결과로 올바른 것은?",
      tableName: "DATA_TAB",
      headers: ["ID", "VAL"],
      rows: [
        ["1", "10"],
        ["2", "NULL"],
        ["3", "20"],
        ["4", "NULL"],
        ["5", "30"],
      ],
      options: [
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: true },
        { id: 3, text: "5", isCorrect: false },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "COUNT(컬럼명)은 NULL을 제외한 행의 수를 셉니다. 값이 있는 행은 ID 1, 3, 5번이므로 총 3개입니다. (COUNT(*)였다면 5가 정답입니다.)",
      hint: "별표(*)는 전체, 컬럼명은 NULL 제외!",
    },
    {
      id: 3,
      category: "집계 함수 기초",
      question:
        "AVG(COL) 함수가 내부적으로 평균을 계산하는 방식으로 올바른 것은?",
      options: [
        { id: 1, text: "SUM(COL) / COUNT(*)", isCorrect: false },
        { id: 2, text: "SUM(COL) / COUNT(COL)", isCorrect: true },
        { id: 3, text: "SUM(COL) / (전체 행 개수)", isCorrect: false },
        { id: 4, text: "(SUM(COL) + NULL) / COUNT(*)", isCorrect: false },
      ],
      rationale:
        "평균을 구할 때 분모는 'NULL이 아닌 값의 개수'가 되어야 합니다. 따라서 SUM(COL)을 COUNT(COL)로 나눈 것과 같습니다.",
      hint: "NULL인 데이터는 분자(합계)에도, 분모(개수)에도 포함되지 않아요.",
    },
    {
      id: 4,
      category: "집계 함수 기초",
      question: "다음 SQL 문장 중 문법적으로 오류가 발생하는 것은?",
      options: [
        { id: 1, text: "SELECT MAX(HIRE_DATE) FROM EMP;", isCorrect: false },
        { id: 2, text: "SELECT MIN(EMP_NAME) FROM EMP;", isCorrect: false },
        {
          id: 3,
          text: "SELECT SUM(SALARY) FROM EMP WHERE SALARY > 1000;",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SELECT DEPT_NO FROM EMP WHERE AVG(SALARY) >= 3000;",
          isCorrect: true,
        },
      ],
      rationale:
        "집계 함수(AVG)는 WHERE 절에 직접 사용할 수 없습니다. 집계 결과에 대한 조건은 HAVING 절을 사용해야 합니다.",
      hint: "WHERE 절은 그룹핑 전, 개별 행을 검사하는 곳입니다.",
    },
    {
      id: 5,
      category: "집계 함수 기초",
      question:
        "SUM(A + B)와 SUM(A) + SUM(B)의 결과가 다를 수 있는 이유는 무엇인가?",
      options: [
        { id: 1, text: "데이터 타입이 다르기 때문에", isCorrect: false },
        {
          id: 2,
          text: "연산 순서와 NULL 처리 방식의 차이 때문에",
          isCorrect: true,
        },
        { id: 3, text: "GROUP BY 절의 유무 때문에", isCorrect: false },
        {
          id: 4,
          text: "데이터베이스 종류(Oracle, MySQL)의 차이 때문에",
          isCorrect: false,
        },
      ],
      rationale:
        "SUM(A+B)는 행별로 더할 때 하나라도 NULL이면 그 행 전체가 NULL이 되어 합계에서 빠집니다. 반면 SUM(A)+SUM(B)는 각각의 합계를 구한 뒤 더하므로 NULL의 영향을 덜 받습니다.",
      hint: "1 + NULL = ?",
    },
    {
      id: 6,
      category: "GROUP BY 이해",
      question: "GROUP BY 절의 역할에 대한 설명으로 가장 적절한 것은?",
      options: [
        { id: 1, text: "데이터를 정렬하기 위해 사용한다.", isCorrect: false },
        {
          id: 2,
          text: "특정 컬럼을 기준으로 데이터를 그룹화하여 요약 통계를 내기 위해 사용한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "두 개 이상의 테이블을 연결하기 위해 사용한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "중복된 데이터를 제거하고 유니크한 값만 보기 위해 사용한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "GROUP BY는 데이터를 소그룹으로 묶고 집계 함수를 통해 요약 정보를 산출하는 것이 주 목적입니다.",
      hint: "'팀별 회식비 정산' 비유를 떠올려보세요.",
    },
    {
      id: 7,
      category: "GROUP BY 이해",
      question: "다음 SQL 쿼리가 에러를 발생시키는 이유는?",
      code: "SELECT 부서명, 사원명, AVG(급여)\nFROM 사원\nGROUP BY 부서명;",
      options: [
        {
          id: 1,
          text: "GROUP BY 절에 별칭을 사용하지 않아서",
          isCorrect: false,
        },
        {
          id: 2,
          text: "AVG 함수는 사원명과 함께 쓸 수 없어서",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT 절의 '사원명'이 GROUP BY 절에 포함되지 않아서",
          isCorrect: true,
        },
        { id: 4, text: "FROM 절의 테이블 별칭이 없어서", isCorrect: false },
      ],
      rationale:
        "GROUP BY를 사용하면 SELECT 절에는 '그룹핑 기준 컬럼(부서명)'이나 '집계 함수(AVG)'만 올 수 있습니다. 그룹화되지 않은 일반 컬럼(사원명)은 단독으로 조회할 수 없습니다.",
      hint: "\"마케팅팀의 평균 급여는 알 수 있지만, 마케팅팀의 '누구' 이름 하나를 찍을 순 없어요.\"",
    },
    {
      id: 8,
      category: "GROUP BY 이해",
      question: "GROUP BY 절 사용 시 주의사항으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "SELECT 절에 정의한 별칭(Alias)을 GROUP BY 절에서 사용할 수 있다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "WHERE 절은 GROUP BY 절보다 먼저 실행된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "여러 개의 컬럼을 기준으로 그룹화할 수 있다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "집계 함수를 제외한 SELECT 절의 모든 컬럼은 GROUP BY 절에 명시되어야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "실행 순서상 GROUP BY가 SELECT보다 먼저 실행되므로, SELECT에서 만든 별칭을 GROUP BY에서 사용할 수 없습니다.",
      hint: "실행 순서: 프-웨-그-하-셀-오",
    },
    {
      id: 9,
      category: "GROUP BY 이해",
      question:
        "다음 중 '지역별' 그리고 '성별' 가입자 수를 구하는 올바른 쿼리는?",
      options: [
        {
          id: 1,
          text: "SELECT 지역, 성별, COUNT(*) FROM 회원 GROUP BY 지역;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT 지역, 성별, COUNT(*) FROM 회원 GROUP BY 지역, 성별;",
          isCorrect: true,
        },
        {
          id: 3,
          text: "SELECT 지역, COUNT(*) FROM 회원 GROUP BY 지역, 성별;",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SELECT 성별, COUNT(*) FROM 회원 GROUP BY 지역;",
          isCorrect: false,
        },
      ],
      rationale:
        "지역과 성별 두 가지 기준을 보고 싶다면, SELECT와 GROUP BY 모두에 두 컬럼이 명시되어야 합니다.",
      hint: "기준이 두 개라면 GROUP BY 뒤에도 콤마(,)로 두 개를 적어야 합니다.",
    },
    {
      id: 10,
      category: "GROUP BY 이해",
      question: "아래 쿼리의 실행 결과에 대한 설명으로 옳은 것은?",
      code: "SELECT REGION, COUNT(*)\nFROM SUBSCRIPTIONS\nGROUP BY REGION;",
      options: [
        {
          id: 1,
          text: "전체 구독자의 총합 1개 행만 출력된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "각 REGION(지역)별로 행이 나뉘고, 해당 지역의 구독자 수가 계산된다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "REGION 컬럼에 중복된 값이 그대로 모두 출력된다.",
          isCorrect: false,
        },
        { id: 4, text: "에러가 발생한다.", isCorrect: false },
      ],
      rationale:
        "GROUP BY REGION을 썼으므로 지역의 종류만큼 행이 생기고, COUNT(*)는 각 지역 그룹 내의 행 개수를 나타냅니다.",
      hint: "서울 100명, 부산 50명... 이런 식으로 나옵니다.",
    },
    {
      id: 11,
      category: "HAVING vs WHERE",
      question: "WHERE 절과 HAVING 절의 가장 큰 차이점은 무엇인가?",
      options: [
        {
          id: 1,
          text: "WHERE는 문자를 필터링하고 HAVING은 숫자를 필터링한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "WHERE는 정렬을 하고 HAVING은 그룹핑을 한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "WHERE는 그룹핑 전 개별 행을, HAVING은 그룹핑 후 집계 결과를 필터링한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "차이가 없으며 서로 바꿔 써도 무방하다.",
          isCorrect: false,
        },
      ],
      rationale:
        "가장 핵심적인 차이입니다. 시점(전/후)과 대상(개별 행/그룹)이 다릅니다.",
      hint: "사과 선별 작업 비유! (썩은 사과 골라내기 vs 무게 미달 박스 골라내기)",
    },
    {
      id: 12,
      category: "HAVING vs WHERE",
      question:
        '"부서별 평균 급여가 500 이상인 부서"를 조회하려고 한다. 빈칸에 들어갈 알맞은 절은?',
      code: "SELECT DEPT_ID, AVG(SALARY)\nFROM EMP\nGROUP BY DEPT_ID\n(      ) AVG(SALARY) >= 500;",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "HAVING", isCorrect: true },
        { id: 3, text: "ORDER BY", isCorrect: false },
        { id: 4, text: "LIKE", isCorrect: false },
      ],
      rationale:
        "AVG(SALARY)는 집계 함수의 결과입니다. 집계 결과에 조건을 걸 때는 반드시 HAVING을 써야 합니다.",
      hint: "집계 함수 조건은 무조건 HAVING!",
    },
    {
      id: 13,
      category: "HAVING vs WHERE",
      question: "다음 중 쿼리 실행 순서상 가장 늦게 처리되는 것은?",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "GROUP BY", isCorrect: false },
        { id: 3, text: "HAVING", isCorrect: true },
        { id: 4, text: "FROM", isCorrect: false },
      ],
      rationale: "보기 중 순서는 FROM -> WHERE -> GROUP BY -> HAVING 입니다.",
      hint: "프-웨-그-하...",
    },
    {
      id: 14,
      category: "HAVING vs WHERE",
      question: "아래 쿼리가 에러가 나는 이유는?",
      code: "SELECT REGION, SUM(REVENUE)\nFROM SUBSCRIPTIONS\nHAVING SUM(REVENUE) > 10000\nGROUP BY REGION;",
      options: [
        { id: 1, text: "SUM 함수를 썼기 때문", isCorrect: false },
        {
          id: 2,
          text: "GROUP BY와 HAVING의 순서가 바뀌었기 때문",
          isCorrect: true,
        },
        { id: 3, text: "SELECT 절에 REVENUE가 없어서", isCorrect: false },
        {
          id: 4,
          text: "FROM 절 뒤에는 바로 SELECT가 와야 해서",
          isCorrect: false,
        },
      ],
      rationale:
        "문법 작성 순서상 GROUP BY가 먼저 나오고 그 뒤에 HAVING이 나와야 합니다.",
      hint: "그룹을 먼저 만들어야(GROUP BY), 그 그룹을 거를 수(HAVING) 있죠.",
    },
    {
      id: 15,
      category: "HAVING vs WHERE",
      question: "마케팅 실무 비유 중 'WHERE' 절에 해당하는 작업은?",
      options: [
        { id: 1, text: "캠페인별로 성과를 묶어서 본다.", isCorrect: false },
        {
          id: 2,
          text: "평균 클릭률이 5% 미만인 캠페인 그룹을 제외한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "탈퇴한 회원의 데이터를 미리 제외하고 데이터를 가져온다.",
          isCorrect: true,
        },
        { id: 4, text: "캠페인별 총 매출액을 계산한다.", isCorrect: false },
      ],
      rationale:
        "①, ④는 GROUP BY/집계, ②는 HAVING에 해당합니다. 원본 데이터에서 미리 조건을 걸어 가져오는 ③이 WHERE입니다.",
      hint: "데이터를 '가져올 때' 거르는 작업입니다.",
    },
    {
      id: 16,
      category: "실행 순서와 심화",
      question:
        "SQL 쿼리의 논리적 실행 순서(Logical Execution Order)를 올바르게 나열한 것은?",
      options: [
        {
          id: 1,
          text: "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY",
          isCorrect: false,
        },
        {
          id: 2,
          text: "FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY",
          isCorrect: false,
        },
        {
          id: 3,
          text: "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
          isCorrect: true,
        },
        {
          id: 4,
          text: "FROM -> WHERE -> GROUP BY -> SELECT -> HAVING -> ORDER BY",
          isCorrect: false,
        },
      ],
      rationale:
        "암기 필수! 프(FROM)-웨(WHERE)-그(GROUP BY)-하(HAVING)-셀(SELECT)-오(ORDER BY)",
      hint: "FWGHSO",
    },
    {
      id: 17,
      category: "실행 순서와 심화",
      question:
        "다음 중 SELECT 절에서 정의한 별칭(Alias)을 사용할 수 있는 유일한 절은?",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "GROUP BY", isCorrect: false },
        { id: 3, text: "HAVING", isCorrect: false },
        { id: 4, text: "ORDER BY", isCorrect: true },
      ],
      rationale:
        "실행 순서상 SELECT가 가장 마지막에 가까우므로, 그보다 더 뒤에 실행되는 ORDER BY에서만 별칭을 알아볼 수 있습니다.",
      hint: "맨 마지막에 줄 세우기 할 때만 별명을 부를 수 있어요.",
    },
    {
      id: 18,
      category: "실행 순서와 심화",
      question: "다음 쿼리의 실행 결과 해석으로 올바른 것은?",
      code: "SELECT PLAN, AVG(PRICE)\nFROM PLANS\nWHERE IS_ACTIVE = 'Y'\nGROUP BY PLAN\nHAVING AVG(PRICE) >= 10000;",
      options: [
        {
          id: 1,
          text: "모든 플랜의 평균 가격을 구한 뒤, 활성화된('Y') 것만 남긴다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "활성화된 플랜들만 가지고 평균을 낸 뒤, 그 평균이 1만 원 이상인 플랜만 보여준다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "평균 가격이 1만 원 이상인 플랜을 먼저 찾고, 그중 활성화된 것을 찾는다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "활성화 여부와 상관없이 평균 가격이 1만 원 이상인 것을 찾는다.",
          isCorrect: false,
        },
      ],
      rationale:
        "순서: WHERE(활성화된 것만 남김) -> GROUP BY(플랜별로 묶음) -> HAVING(평균 1만 원 이상 필터링).",
      hint: "WHERE가 1차 관문, HAVING이 2차 관문입니다.",
    },
    {
      id: 19,
      category: "실행 순서와 심화",
      question:
        "COUNT(*)와 COUNT(컬럼명)의 결과가 같으려면 어떤 조건이 필요한가?",
      options: [
        {
          id: 1,
          text: "해당 컬럼에 중복된 값이 없어야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "해당 컬럼에 NULL 값이 하나도 없어야 한다.",
          isCorrect: true,
        },
        { id: 3, text: "해당 컬럼이 숫자형이어야 한다.", isCorrect: false },
        { id: 4, text: "테이블의 행 개수가 0개여야 한다.", isCorrect: false },
      ],
      rationale:
        "COUNT(*)는 NULL 포함 전체, COUNT(컬럼)은 NULL 제외입니다. 따라서 NULL이 하나도 없다면 두 값은 같습니다.",
      hint: "NULL이 없으면 뺄 게 없으니까요.",
    },
    {
      id: 20,
      category: "실행 순서와 심화",
      question: "아래 SQL에서 ORDER BY 절에 들어갈 수 없는 것은?",
      code: "SELECT DEPT_NAME, SUM(SALARY) AS TOTAL_SAL\nFROM EMP\nGROUP BY DEPT_NAME;",
      options: [
        { id: 1, text: "ORDER BY DEPT_NAME", isCorrect: false },
        { id: 2, text: "ORDER BY SUM(SALARY)", isCorrect: false },
        { id: 3, text: "ORDER BY TOTAL_SAL", isCorrect: false },
        {
          id: 4,
          text: "ORDER BY AVG(SALARY) (단, SELECT 절에 AVG는 없음)",
          isCorrect: false,
        },
        {
          id: 5,
          text: "ORDER BY EMP_NAME (단, EMP_NAME은 그룹핑되지 않음)",
          isCorrect: true,
        },
      ],
      rationale:
        "GROUP BY가 된 상태에서는 개별 행의 정보인 EMP_NAME으로 정렬할 수 없습니다. 하지만 ①,②,③은 물론이고, ④처럼 SELECT에 없더라도 집계 함수(AVG)를 기준으로 정렬하는 것은 가능합니다.",
      hint: "그룹핑된 상태에서 개별 사원 이름으로 줄을 세울 순 없겠죠?",
    },
  ],
  3: [
    {
      id: 1,
      category: "SQL 실행 순서",
      question: "다음 중 SQL 실행 순서로 올바른 것은?",
      options: [
        {
          id: 1,
          text: "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
          isCorrect: false,
        },
        {
          id: 2,
          text: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
          isCorrect: true,
        },
        {
          id: 3,
          text: "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SELECT → FROM → ORDER BY → WHERE → GROUP BY → HAVING",
          isCorrect: false,
        },
      ],
      rationale:
        "SQL은 데이터를 먼저 가져오고(FROM), 필터링하고(WHERE), 그룹화한 뒤(GROUP BY/HAVING), 출력할 컬럼을 정하고(SELECT), 마지막에 정렬(ORDER BY)합니다.",
      hint: '"프웨구해셀오"라고 앞 글자만 따서 외워보세요!',
    },
    {
      id: 2,
      category: "정렬 (ORDER BY)",
      question: "다음 중 ORDER BY 절에 대한 설명으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "기본 정렬 방식은 오름차순(ASC)이다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT 절에 정의한 별칭(Alias)을 사용할 수 있다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT 절에 없는 컬럼이라도 정렬 기준으로 사용할 수 있다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "항상 SQL 문장의 가장 처음에 위치해야 한다.",
          isCorrect: true,
        },
      ],
      rationale: "ORDER BY는 항상 SQL 문장의 가장 마지막에 위치합니다.",
      hint: "줄을 세우는 건 모든 작업이 다 끝난 '마지막' 단계예요.",
    },
    {
      id: 3,
      category: "정렬 (ORDER BY)",
      question:
        "Oracle 환경에서 ORDER BY SAL DESC를 실행했을 때, SAL 컬럼이 NULL인 데이터의 위치는?",
      options: [
        { id: 1, text: "가장 먼저 출력된다.", isCorrect: true },
        { id: 2, text: "가장 나중에 출력된다.", isCorrect: false },
        { id: 3, text: "무작위로 출력된다.", isCorrect: false },
        { id: 4, text: "에러가 발생한다.", isCorrect: false },
      ],
      rationale:
        "Oracle은 NULL을 '무한대(가장 큰 값)'로 취급합니다. 따라서 내림차순(DESC) 정렬 시 가장 큰 값인 NULL이 맨 처음에 옵니다.",
      hint: "Oracle에서 NULL은 대장(가장 큰 값)입니다!",
    },
    {
      id: 4,
      category: "정렬 (ORDER BY)",
      question:
        "SQL Server 환경에서 ORDER BY SAL ASC를 실행했을 때, NULL 값의 위치는?",
      options: [
        { id: 1, text: "가장 먼저 출력된다.", isCorrect: true },
        { id: 2, text: "가장 나중에 출력된다.", isCorrect: false },
        { id: 3, text: "오름차순이므로 중간에 출력된다.", isCorrect: false },
        { id: 4, text: "출력되지 않는다.", isCorrect: false },
      ],
      rationale:
        "SQL Server는 NULL을 '가장 작은 값'으로 취급합니다. 따라서 오름차순(ASC) 시 맨 처음에 옵니다.",
      hint: "SQL Server에서 NULL은 꼬맹이(가장 작은 값)입니다.",
    },
    {
      id: 5,
      category: "단일행 함수 (문자형)",
      question:
        "다음 쿼리의 결과로 올바른 것은?\nSELECT SUBSTR('SQLMaster', 4, 3) FROM DUAL; (Oracle 기준)",
      options: [
        { id: 1, text: "SQL", isCorrect: false },
        { id: 2, text: "Mas", isCorrect: true },
        { id: 3, text: "Master", isCorrect: false },
        { id: 4, text: "ster", isCorrect: false },
      ],
      rationale:
        "4번째 글자인 'M'부터 시작해서 3글자를 가져오므로 'Mas'가 됩니다.",
      hint: "(시작위치, 글자수)를 기억하세요!",
    },
    {
      id: 6,
      category: "단일행 함수 (숫자형)",
      question: "다음 중 숫자를 처리하는 함수와 결과가 잘못 연결된 것은?",
      options: [
        { id: 1, text: "ROUND(12.5, 0) → 13", isCorrect: false },
        { id: 2, text: "FLOOR(12.9) → 12", isCorrect: false },
        { id: 3, text: "CEIL(-1.2) → -2", isCorrect: true },
        { id: 4, text: "TRUNC(12.56, 1) → 12.5", isCorrect: false },
      ],
      rationale:
        "CEIL은 나보다 크거나 같은 최소 정수입니다. -1.2보다 큰 정수 중 가장 작은 값은 -1입니다.",
      hint: "음수 축에서는 -1이 -1.2보다 '큰' 값이라는 점 주의!",
    },
    {
      id: 7,
      category: "단일행 함수 (날짜형)",
      question:
        "현재 시간이 2026년 2월 11일 오후 2시일 때, 3시간 뒤를 구하는 식으로 옳은 것은? (Oracle)",
      options: [
        { id: 1, text: "SYSDATE + 3", isCorrect: false },
        { id: 2, text: "SYSDATE + 3/24", isCorrect: true },
        { id: 3, text: "SYSDATE + 3/60", isCorrect: false },
        { id: 4, text: "SYSDATE + 180", isCorrect: false },
      ],
      rationale:
        "날짜에 숫자를 더하면 '일' 단위로 계산됩니다. 3시간은 하루(24시간) 중 3시간이므로 3/24를 더해야 합니다.",
      hint: "1일 = 24시간, 1시간 = 60분!",
    },
    {
      id: 8,
      category: "단일행 함수 (NULL 관련)",
      question: "다음 중 NULLIF(10, 10)의 결과값은?",
      options: [
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "0", isCorrect: false },
        { id: 3, text: "NULL", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale: "NULLIF(A, B)는 두 값이 같으면 NULL을, 다르면 A를 반환합니다.",
      hint: '"같으면 널(NULL)로 만들어버려!"',
    },
    {
      id: 9,
      category: "단일행 함수 (NULL 관련)",
      question: "COALESCE(NULL, NULL, 'Success', 'Fail')의 결과값은?",
      options: [
        { id: 1, text: "NULL", isCorrect: false },
        { id: 2, text: "Success", isCorrect: true },
        { id: 3, text: "Fail", isCorrect: false },
        { id: 4, text: "Success, Fail", isCorrect: false },
      ],
      rationale:
        "COALESCE는 인자 리스트 중 NULL이 아닌 첫 번째 값을 반환합니다.",
      hint: '"처음으로 나타나는 진짜 값을 찾아라!"',
    },
    {
      id: 10,
      category: "단일행 함수 (NULL 관련)",
      question:
        "Oracle에서 NVL2(COMM, 'A', 'B') 함수에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "COMM이 NULL이면 'A', 아니면 'B'를 반환한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "COMM이 NULL이 아니면 'A', NULL이면 'B'를 반환한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "COMM과 'A'가 같으면 'B'를 반환한다.",
          isCorrect: false,
        },
        { id: 4, text: "COMM이 'A'이면 NULL을 반환한다.", isCorrect: false },
      ],
      rationale: "NVL2(대상, NotNull일때, Null일때) 순서입니다.",
      hint: "NVL은 인자가 2개, NVL2는 인자가 3개!",
    },
    {
      id: 11,
      category: "단일행 함수 (문자형)",
      question: "다음 중 문자를 대문자로 변환하는 함수는?",
      options: [
        { id: 1, text: "LOWER", isCorrect: false },
        { id: 2, text: "UPPER", isCorrect: true },
        { id: 3, text: "LENGTH", isCorrect: false },
        { id: 4, text: "CONCAT", isCorrect: false },
      ],
      rationale: "UPPER는 대문자, LOWER는 소문자로 변환합니다.",
      hint: "Up(위로/크게), Low(아래로/작게).",
    },
    {
      id: 12,
      category: "산술 연산과 NULL",
      question: "SELECT 10 + NULL FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "0", isCorrect: false },
        { id: 3, text: "NULL", isCorrect: true },
        { id: 4, text: "에러", isCorrect: false },
      ],
      rationale: "NULL과의 산술 연산 결과는 무조건 NULL입니다.",
      hint: "NULL은 블랙홀과 같습니다. 모든 걸 NULL로 빨아들여요.",
    },
    {
      id: 13,
      category: "기타 함수 (CASE)",
      question: "다음 중 CASE 문의 문법으로 올바르지 않은 것은?",
      options: [
        { id: 1, text: "CASE WHEN 조건 THEN 결과 END", isCorrect: false },
        {
          id: 2,
          text: "CASE 컬럼 WHEN 값 THEN 결과 ELSE 결과 END",
          isCorrect: false,
        },
        {
          id: 3,
          text: "CASE WHEN 조건 THEN 결과 ELSE 결과 END",
          isCorrect: false,
        },
        { id: 4, text: "IF 조건 THEN 결과 ELSE 결과 END", isCorrect: true },
      ],
      rationale:
        "SQL에서는 IF 대신 CASE 문을 사용합니다. (절차형 언어인 PL/SQL에서는 IF 사용 가능)",
      hint: "SQL의 조건 분기는 무조건 CASE!",
    },
    {
      id: 14,
      category: "정렬 (ORDER BY)",
      question: "ORDER BY 1, 2 DESC에서 '1'과 '2'가 의미하는 것은?",
      options: [
        { id: 1, text: "상수 1과 2를 정렬한다.", isCorrect: false },
        {
          id: 2,
          text: "SELECT 절에 명시된 첫 번째 컬럼과 두 번째 컬럼을 의미한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "데이터의 첫 번째 행과 두 번째 행을 의미한다.",
          isCorrect: false,
        },
        { id: 4, text: "아무런 의미가 없는 문법 오류다.", isCorrect: false },
      ],
      rationale: "ORDER BY 절에서는 컬럼의 순서 번호를 사용할 수 있습니다.",
      hint: "첫 번째 컬럼으로 먼저 줄 세우고, 같으면 두 번째 컬럼으로!",
    },
    {
      id: 15,
      category: "단일행 함수 (문자형)",
      question:
        "다음 중 문자열의 길이를 반환하는 함수로 짝지어진 것은? (Oracle, SQL Server 순)",
      options: [
        { id: 1, text: "LENGTH, LEN", isCorrect: true },
        { id: 2, text: "LEN, LENGTH", isCorrect: false },
        { id: 3, text: "SIZE, LENGTH", isCorrect: false },
        { id: 4, text: "LENGTH, SIZE", isCorrect: false },
      ],
      rationale: "Oracle은 LENGTH, SQL Server는 LEN을 사용합니다.",
      hint: "SQL Server는 좀 더 짧게(LEN) 씁니다.",
    },
    {
      id: 16,
      category: "정렬 (ORDER BY)",
      question:
        "SELECT ENAME FROM EMP ORDER BY HIREDATE; 쿼리는 실행 가능한가?",
      options: [
        { id: 1, text: "가능하다.", isCorrect: true },
        {
          id: 2,
          text: "SELECT 절에 HIREDATE가 없으므로 불가능하다.",
          isCorrect: false,
        },
        { id: 3, text: "GROUP BY가 없어서 불가능하다.", isCorrect: false },
        { id: 4, text: "반드시 DESC를 써야 실행 가능하다.", isCorrect: false },
      ],
      rationale:
        "일반 SELECT 문에서 ORDER BY 절에는 SELECT 절에 없는 컬럼을 사용할 수 있습니다.",
      hint: "화면엔 이름만 보여도, 뒤에서는 입사일 순으로 서 있을 수 있죠.",
    },
    {
      id: 17,
      category: "단일행 함수 (숫자형)",
      question: "MOD(15, 4)의 결과값은?",
      options: [
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
        { id: 4, text: "0", isCorrect: false },
      ],
      rationale:
        "15를 4로 나누면 몫은 3이고 나머지는 3입니다. MOD는 나머지를 구하는 함수입니다.",
      hint: "15 = (4 * 3) + 3",
    },
    {
      id: 18,
      category: "단일행 함수 (형변환)",
      question: "다음 중 명시적 형변환 함수가 아닌 것은?",
      options: [
        { id: 1, text: "TO_CHAR", isCorrect: false },
        { id: 2, text: "TO_DATE", isCorrect: false },
        { id: 3, text: "CAST", isCorrect: false },
        { id: 4, text: "CONCAT", isCorrect: true },
      ],
      rationale:
        "CONCAT은 문자열을 연결하는 함수입니다. 형변환 함수는 타입을 바꾸는 기능을 합니다.",
      hint: "TO_~ 로 시작하면 대부분 형변환 함수입니다.",
    },
    {
      id: 19,
      category: "단일행 함수 (숫자형)",
      question: "SELECT SIGN(-50) FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "-50", isCorrect: false },
        { id: 3, text: "-1", isCorrect: true },
        { id: 4, text: "0", isCorrect: false },
      ],
      rationale: "SIGN 함수는 양수면 1, 음수면 -1, 0이면 0을 반환합니다.",
      hint: "숫자의 '부호'만 알려주는 함수입니다.",
    },
    {
      id: 20,
      category: "단일행 함수 (NULL 관련)",
      question:
        "다음 쿼리의 실행 결과로 알맞은 것은? (Oracle 기준)\nSELECT NVL(NULLIF('A', 'A'), 'Empty') FROM DUAL;",
      options: [
        { id: 1, text: "A", isCorrect: false },
        { id: 2, text: "NULL", isCorrect: false },
        { id: 3, text: "Empty", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale:
        "중첩 함수입니다. 안쪽 NULLIF('A', 'A')가 NULL을 반환하고, NVL(NULL, 'Empty')가 실행되어 최종적으로 'Empty'가 출력됩니다.",
      hint: "괄호 안쪽부터 하나씩 해결하세요!",
    },
  ],
  1: [
    {
      id: 1,
      category: "데이터베이스 구조",
      question:
        "데이터베이스의 '테이블(Table)'을 엑셀에 비유했을 때 가장 적절한 것은?",
      options: [
        { id: 1, text: "데이터가 저장되는 '시트(Sheet)'", isCorrect: true },
        {
          id: 2,
          text: "데이터의 속성을 나타내는 '열(Column)'",
          isCorrect: false,
        },
        { id: 3, text: "실제 데이터 한 줄인 '행(Row)'", isCorrect: false },
        { id: 4, text: "계산을 수행하는 '함수(Function)'", isCorrect: false },
      ],
      rationale:
        "테이블은 데이터가 격자 형태로 저장되는 가장 기본적인 공간으로, 엑셀의 시트와 대응됩니다.",
      hint: "전체 데이터가 담긴 '그릇'을 생각해보세요.",
    },
    {
      id: 2,
      category: "기초 문법",
      question: 'SQL 문법에서 "어디로부터 가져올 것인가"를 지정하는 키워드는?',
      options: [
        { id: 1, text: "SELECT", isCorrect: false },
        { id: 2, text: "FROM", isCorrect: true },
        { id: 3, text: "WHERE", isCorrect: false },
        { id: 4, text: "INTO", isCorrect: false },
      ],
      rationale:
        "SELECT는 가져올 항목을, FROM은 그 데이터가 들어있는 테이블을 지정합니다.",
      hint: '"가져와(SELECT) ~로부터(FROM)" 순서를 기억하세요.',
    },
    {
      id: 3,
      category: "전체 조회",
      question:
        "SELECT * FROM USER; 쿼리에서 아스테리스크(*)의 의미로 옳은 것은?",
      options: [
        { id: 1, text: "데이터의 첫 번째 행만 가져온다.", isCorrect: false },
        {
          id: 2,
          text: "테이블 내의 모든 컬럼(열)을 가져온다.",
          isCorrect: true,
        },
        { id: 3, text: "중복된 데이터를 제외하고 가져온다.", isCorrect: false },
        { id: 4, text: "테이블의 이름만 조회한다.", isCorrect: false },
      ],
      rationale:
        "*은 '모든 것(All)'을 의미하여 해당 테이블의 모든 컬럼을 한꺼번에 조회할 때 사용합니다.",
      hint: "'All'을 상징하는 기호를 떠올려 보세요.",
    },
    {
      id: 4,
      category: "기초 문법",
      question:
        "여러 개의 특정 컬럼(예: 이름, 나이)을 조회할 때 컬럼명 사이에 사용하는 기호는?",
      options: [
        { id: 1, text: "마침표 (.)", isCorrect: false },
        { id: 2, text: "세미콜론 (;)", isCorrect: false },
        { id: 3, text: "콤마 (,)", isCorrect: true },
        { id: 4, text: "콜론 (:)", isCorrect: false },
      ],
      rationale:
        "SELECT NAME, AGE FROM USER;와 같이 여러 컬럼을 구분할 때는 콤마를 사용합니다.",
      hint: "나열할 때 쓰는 일반적인 문장 부호와 같습니다.",
    },
    {
      id: 5,
      category: "기초 문법",
      question:
        "다음 중 SQL 문장의 끝을 알리는 '마침표' 역할을 하며, 생략 시 실행되지 않는 것은?",
      options: [
        { id: 1, text: ":", isCorrect: false },
        { id: 2, text: "/", isCorrect: false },
        { id: 3, text: ".", isCorrect: false },
        { id: 4, text: ";", isCorrect: true },
      ],
      rationale:
        "SQL 문장은 반드시 세미콜론(;)으로 끝나야 명령이 완료된 것으로 인식됩니다.",
      hint: "문장의 마무리를 짓는 기호입니다.",
    },
    {
      id: 6,
      category: "별명(Alias)과 대소문자 규칙",
      question: "컬럼에 별명을 붙일 때 가장 권장되는(가독성이 좋은) 키워드는?",
      options: [
        { id: 1, text: "IS", isCorrect: false },
        { id: 2, text: "AS", isCorrect: true },
        { id: 3, text: "LIKE", isCorrect: false },
        { id: 4, text: "TO", isCorrect: false },
      ],
      rationale:
        "컬럼명 AS 별명 형식이 별명임을 명시적으로 보여주어 가장 추천되는 방식입니다.",
      hint: "'~로서'라는 뜻의 영어 단어를 생각해보세요.",
    },
    {
      id: 7,
      category: "별명(Alias)과 대소문자 규칙",
      question:
        "별명(Alias)에 '공백'이 포함된 경우(예: 회원 이름) 반드시 사용해야 하는 기호는?",
      options: [
        { id: 1, text: "작은따옴표 (' ')", isCorrect: false },
        { id: 2, text: '큰따옴표 (" ")', isCorrect: true },
        { id: 3, text: "대괄호 ([ ])", isCorrect: false },
        { id: 4, text: "역따옴표 ( )", isCorrect: false },
      ],
      rationale:
        "별명에 공백이나 특수문자가 있다면 큰따옴표로 감싸야 하나의 이름으로 인식합니다.",
      hint: '"이름표는 크게(Big name tag)" 붙이세요!',
    },
    {
      id: 8,
      category: "별명(Alias)과 대소문자 규칙",
      question: "SQL의 대소문자 구별에 대한 설명 중 틀린 것은?",
      options: [
        {
          id: 1,
          text: "SELECT와 select는 동일하게 작동한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "테이블 명은 대소문자를 가리지 않는 경우가 많다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "저장된 데이터 값 'HONG'과 'hong'은 같은 데이터로 취급된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "키워드(SELECT, FROM)는 대문자로 쓰는 것이 관례적으로 보기 좋다.",
          isCorrect: false,
        },
      ],
      rationale:
        "SQL 문법 키워드는 대소문자를 가리지 않지만, 테이블 안에 들어있는 실제 '데이터 값'은 대소문자를 엄격히 구별합니다.",
      hint: '"명령어는 관대하지만, 알맹이(데이터)는 꼼꼼하다"고 기억하세요.',
    },
    {
      id: 9,
      category: "별명(Alias)과 대소문자 규칙",
      question:
        "SELECT NAME 이름 FROM USER;와 같이 AS 없이 별명을 붙일 수 있는가?",
      options: [
        { id: 1, text: "가능하다. 한 칸 띄우기만 하면 된다.", isCorrect: true },
        { id: 2, text: "불가능하다. 반드시 AS를 써야 한다.", isCorrect: false },
        { id: 3, text: "오직 숫자 별명일 때만 가능하다.", isCorrect: false },
        { id: 4, text: "테이블 이름에만 가능하다.", isCorrect: false },
      ],
      rationale:
        "AS는 생략 가능하며, 띄어쓰기만으로도 별명을 부여할 수 있습니다.",
      hint: "실습 예시 문법을 다시 한번 살펴보세요.",
    },
    {
      id: 10,
      category: "별명(Alias)과 대소문자 규칙",
      question: "다음 중 문법적으로 틀린 별명 부여 방식은?",
      options: [
        { id: 1, text: "SELECT NAME AS 이름", isCorrect: false },
        { id: 2, text: 'SELECT NAME "이 름"', isCorrect: false },
        { id: 3, text: "SELECT NAME AS '이름'", isCorrect: true },
        { id: 4, text: "SELECT NAME 별명", isCorrect: false },
      ],
      rationale:
        "별명에는 작은따옴표(')를 쓰지 않습니다. 작은따옴표는 데이터 값을 감쌀 때 사용합니다.",
      hint: "작은따옴표는 '내용물' 전용입니다.",
    },
    {
      id: 11,
      category: "산술 연산과 NULL",
      question: "SQL에서 사칙연산 우선순위가 가장 낮은 것은?",
      options: [
        { id: 1, text: "* (곱하기)", isCorrect: false },
        { id: 2, text: "/ (나누기)", isCorrect: false },
        { id: 3, text: "+ (더하기)", isCorrect: true },
        { id: 4, text: "( ) (괄호)", isCorrect: false },
      ],
      rationale:
        "곱하기와 나누기가 먼저 계산되고, 더하기와 빼기는 나중에 계산됩니다.",
      hint: "초등 수학 산술 순위와 같습니다.",
    },
    {
      id: 12,
      category: "산술 연산과 NULL",
      question: "SELECT 100 + 200 * 2 FROM DUAL; 의 결과값은?",
      options: [
        { id: 1, text: "600", isCorrect: false },
        { id: 2, text: "500", isCorrect: true },
        { id: 3, text: "400", isCorrect: false },
        { id: 4, text: "300", isCorrect: false },
      ],
      rationale:
        "200 * 2가 먼저 계산되어 400이 되고, 여기에 100을 더해 500이 됩니다.",
      hint: "곱셈이 먼저입니다!",
    },
    {
      id: 13,
      category: "산술 연산과 NULL",
      question: "데이터베이스에서 NULL의 의미로 가장 적절한 것은?",
      options: [
        { id: 1, text: "숫자 0", isCorrect: false },
        { id: 2, text: "공백 문자 (' ')", isCorrect: false },
        { id: 3, text: "알 수 없는 값 (Unknown / Missing)", isCorrect: true },
        { id: 4, text: "테이블의 끝 (End of Table)", isCorrect: false },
      ],
      rationale:
        "NULL은 0도 공백도 아닌, 값이 존재하지 않거나 무엇인지 모르는 상태를 뜻합니다.",
      hint: '"정해지지 않은 무(無)의 상태"라고 이해하세요.',
    },
    {
      id: 14,
      category: "산술 연산과 NULL",
      question:
        "SELECT POINT * 10 FROM USER; 실행 시, POINT가 NULL인 행의 결과값은?",
      options: [
        { id: 1, text: "0", isCorrect: false },
        { id: 2, text: "10", isCorrect: false },
        { id: 3, text: "NULL", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale:
        "NULL과 어떤 값을 산술 연산해도 그 결과는 무조건 NULL이 됩니다.",
      hint: '"NULL이랑 놀면 다 망한다(NULL이 된다)"는 명언(?)을 기억하세요.',
    },
    {
      id: 15,
      category: "산술 연산과 NULL",
      question: "연산 순서를 강제로 바꾸고 싶을 때 사용하는 기호는?",
      options: [
        { id: 1, text: "[ ]", isCorrect: false },
        { id: 2, text: "{ }", isCorrect: false },
        { id: 3, text: "( )", isCorrect: true },
        { id: 4, text: "< >", isCorrect: false },
      ],
      rationale: "괄호를 사용하면 괄호 안의 연산이 가장 먼저 수행됩니다.",
      hint: "수학에서의 괄호 역할과 동일합니다.",
    },
    {
      id: 16,
      category: "심화 및 필수 테크닉",
      question:
        "오라클(Oracle)에서 테이블 데이터 없이 단순 계산(예: SELECT 1+1)을 하고 싶을 때 빌려 쓰는 가상 테이블은?",
      options: [
        { id: 1, text: "DUMMY", isCorrect: false },
        { id: 2, text: "VIRTUAL", isCorrect: false },
        { id: 3, text: "DUAL", isCorrect: true },
        { id: 4, text: "PRACTICE", isCorrect: false },
      ],
      rationale:
        "DUAL 테이블은 결과가 1행인 가상의 연습장 테이블로, 오라클에서 필수적인 문법 요건을 맞추기 위해 사용합니다.",
      hint: '"이중적인(Dual)" 느낌의 짧은 이름을 떠올리세요.',
    },
    {
      id: 17,
      category: "심화 및 필수 테크닉",
      question:
        "특정 컬럼의 중복된 값을 제거하고 '종류'만 보고 싶을 때 SELECT 바로 뒤에 붙이는 키워드는?",
      options: [
        { id: 1, text: "UNIQUE", isCorrect: false },
        { id: 2, text: "DISTINCT", isCorrect: true },
        { id: 3, text: "SINGLE", isCorrect: false },
        { id: 4, text: "GROUP", isCorrect: false },
      ],
      rationale:
        "SELECT DISTINCT GRADE FROM USER;라고 쓰면 중복을 제거한 고유한 값만 출력됩니다.",
      hint: '"뚜렷한, 별개의"라는 뜻의 영어 단어입니다.',
    },
    {
      id: 18,
      category: "심화 및 필수 테크닉",
      question:
        "문자열 데이터(예: 이름이 Hong인 경우)를 감쌀 때 반드시 써야 하는 기호는?",
      options: [
        { id: 1, text: "작은따옴표 (' ')", isCorrect: true },
        { id: 2, text: '큰따옴표 (" ")', isCorrect: false },
        { id: 3, text: "역따옴표 ( )", isCorrect: false },
        { id: 4, text: "따옴표 없음", isCorrect: false },
      ],
      rationale: "데이터 내용물(문자열, 날짜 등)은 작은따옴표로 감싸야 합니다.",
      hint: "\내용은 작게(Small content)\!",
    },
    {
      id: 19,
      category: "심화 및 필수 테크닉",
      question: "다음 중 SQL 문법에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "SELECT * FROM USER (세미콜론 없음)은 완벽한 문장이다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT DISTINCT NAME, AGE는 NAME만 중복 제거한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT 10 / 0 FROM DUAL은 결과로 NULL을 낸다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: 'SELECT NAME AS "회원 이름"은 정상적인 문법이다.',
          isCorrect: true,
        },
      ],
      rationale:
        "별명에 공백이 있을 때 큰따옴표를 쓴 ④번이 정석입니다. ①은 세미콜론 누락, ②는 나열된 컬럼 조합 전체를 중복 제거함, ③은 0으로 나누기 에러가 발생합니다.",
      hint: "오늘 배운 '큰따옴표'의 용도를 다시 확인하세요.",
    },
    {
      id: 20,
      category: "심화 및 필수 테크닉",
      question:
        'SELECT (POINT + 100) * 2 AS "최종 점수" FROM USER; 쿼리의 해석으로 옳은 것은?',
      options: [
        {
          id: 1,
          text: '점수에 100을 더한 뒤 2를 곱하고, 그 컬럼 이름을 "최종 점수"라고 표시한다.',
          isCorrect: true,
        },
        {
          id: 2,
          text: '점수에 2를 곱한 뒤 100을 더하고, "최종 점수"라는 테이블에서 가져온다.',
          isCorrect: false,
        },
        { id: 3, text: "모든 유저의 POINT를 2로 바꾼다.", isCorrect: false },
        {
          id: 4,
          text: "POINT가 100인 사람만 찾아서 2를 곱한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "괄호 안의 덧셈이 먼저 수행되고 그다음 곱셈이 진행되며, AS 뒤의 별명이 결과창에 나타납니다.",
      hint: "산술 연산의 순서와 별명의 위치를 복합적으로 생각해보세요.",
    },
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
        { id: 4, text: "WHERE → FROM → SELECT", isCorrect: false },
      ],
      rationale:
        "작성 순서와 달리 컴퓨터는 데이터를 먼저 찾고(FROM), 필터링한 뒤(WHERE), 최종적으로 보여줄 컬럼을 정합니다(SELECT).",
      hint: "재료를 먼저 가져오고(FROM), 손질한 뒤(WHERE), 접시에 담습니다(SELECT).",
    },
    {
      id: 2,
      category: "WHERE 절 기초",
      question: "다음 중 WHERE 절에서 사용할 수 없는 것은?",
      options: [
        { id: 1, text: "비교 연산자 (=, <>)", isCorrect: false },
        {
          id: 2,
          text: "SELECT 절에서 정의한 컬럼의 별칭(Alias)",
          isCorrect: true,
        },
        { id: 3, text: "컬럼명", isCorrect: false },
        { id: 4, text: "리터럴 값 (숫자, 문자 등)", isCorrect: false },
      ],
      rationale:
        "WHERE 절 실행 시점에는 SELECT 절의 별칭을 아직 인식하지 못하기 때문에 에러가 발생합니다.",
      hint: "별칭은 SELECT 단계에서 부여되는데, WHERE는 그보다 먼저 실행됩니다.",
    },
    {
      id: 3,
      category: "비교 연산자",
      question:
        "'급여가 3000이 아닌 사원'을 찾기 위해 WHERE 절에 쓸 수 있는 비교 연산자로 옳지 않은 것은?",
      options: [
        { id: 1, text: "SAL <> 3000", isCorrect: false },
        { id: 2, text: "SAL != 3000", isCorrect: false },
        { id: 3, text: "SAL ^= 3000", isCorrect: false },
        { id: 4, text: "SAL ~= 3000", isCorrect: true },
      ],
      rationale:
        "SQL에서 다르다는 표현은 <>, !=, ^=가 표준 혹은 널리 쓰이는 방식입니다.",
      hint: "SQL에서 '같지 않다'는 표기법은 여러 개가 있지만, 물결 모양은 사용하지 않습니다.",
    },
    {
      id: 4,
      category: "기초 문법",
      question: "WHERE 1 = 1 이라는 조건의 의미로 가장 적절한 것은?",
      options: [
        {
          id: 1,
          text: "첫 번째 컬럼의 값이 1인 데이터를 찾는다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "항상 참(True)이 되어 모든 행을 출력한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "데이터 중 숫자 1이 포함된 행만 필터링한다.",
          isCorrect: false,
        },
        { id: 4, text: "문법 오류가 발생한다.", isCorrect: false },
      ],
      rationale:
        "조건이 항상 참이므로 필터링 없이 전체 데이터를 보여주며, 실무에서 쿼리 수정을 편하게 하기 위해 자주 씁니다.",
      hint: "1과 1은 항상 같습니다.",
    },
    {
      id: 5,
      category: "데이터 값의 규칙",
      question:
        "데이터에 직업이 'MANAGER'라고 저장되어 있을 때, 다음 중 결과가 출력되는 쿼리는?",
      options: [
        { id: 1, text: "WHERE JOB = 'manager'", isCorrect: false },
        { id: 2, text: "WHERE JOB = 'Manager'", isCorrect: false },
        { id: 3, text: "WHERE JOB = 'MANAGER'", isCorrect: true },
        { id: 4, text: "WHERE JOB = ' MAN AGER '", isCorrect: false },
      ],
      rationale:
        "문자열 데이터는 대소문자와 공백까지 정확히 일치해야 검색됩니다.",
      hint: "SQL 명령어는 대소문자를 안 가리지만, '데이터 값'은 매우 엄격합니다.",
    },
    {
      id: 6,
      category: "범위 연산자",
      question: "WHERE SAL BETWEEN 2000 AND 3000의 결과와 동일한 조건은?",
      options: [
        { id: 1, text: "WHERE SAL > 2000 AND SAL < 3000", isCorrect: false },
        { id: 2, text: "WHERE SAL >= 2000 AND SAL <= 3000", isCorrect: true },
        { id: 3, text: "WHERE SAL >= 2000 OR SAL <= 3000", isCorrect: false },
        { id: 4, text: "WHERE SAL > 2000 OR SAL < 3000", isCorrect: false },
      ],
      rationale:
        "BETWEEN A AND B는 '이상, 이하'의 개념으로 양쪽 끝 값을 모두 포함합니다.",
      hint: "BETWEEN은 경계값(2000, 3000)을 포함할까요, 안 할까요?",
    },
    {
      id: 7,
      category: "리스트 연산자",
      question: "WHERE JOB IN ('SALESMAN', 'ANALYST')의 의미로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "직업이 SALESMAN이면서 동시에 ANALYST인 사람",
          isCorrect: false,
        },
        {
          id: 2,
          text: "직업이 SALESMAN이거나 ANALYST인 사람",
          isCorrect: true,
        },
        {
          id: 3,
          text: "직업이 SALESMAN도 아니고 ANALYST도 아닌 사람",
          isCorrect: false,
        },
        {
          id: 4,
          text: "직업이 SALESMAN에서 ANALYST 사이의 범위에 있는 사람",
          isCorrect: false,
        },
      ],
      rationale:
        "IN 연산자는 리스트에 나열된 값 중 하나라도 일치하면 데이터를 추출합니다.",
      hint: "IN은 여러 조건 중 하나라도 맞으면 OK인 'OR'의 집합입니다.",
    },
    {
      id: 8,
      category: "패턴 매칭",
      question: "이름이 'K'로 시작하는 모든 사원을 찾기 위한 조건은?",
      options: [
        { id: 1, text: "WHERE ENAME LIKE 'K_'", isCorrect: false },
        { id: 2, text: "WHERE ENAME LIKE '%K'", isCorrect: false },
        { id: 3, text: "WHERE ENAME LIKE 'K%'", isCorrect: true },
        { id: 4, text: "WHERE ENAME LIKE '_K%'", isCorrect: false },
      ],
      rationale:
        "%는 0개 이상의 모든 문자를 의미하므로 'K%'는 K로 시작하는 모든 문자열을 찾습니다.",
      hint: "뒤에 글자 수가 몇 개든 상관없을 때 쓰는 와일드카드는 무엇일까요?",
    },
    {
      id: 9,
      category: "패턴 매칭",
      question: "WHERE ENAME LIKE '_A%' 조건이 의미하는 것은?",
      options: [
        { id: 1, text: "이름의 첫 글자가 A인 사람", isCorrect: false },
        { id: 2, text: "이름의 두 번째 글자가 A인 사람", isCorrect: true },
        { id: 3, text: "이름에 A가 포함된 모든 사람", isCorrect: false },
        {
          id: 4,
          text: "이름이 두 글자이면서 A로 끝나는 사람",
          isCorrect: false,
        },
      ],
      rationale:
        "첫 번째 자리는 무엇이든 상관없고(_), 두 번째 자리가 A이며, 그 뒤는 상관없는(%) 데이터를 찾습니다.",
      hint: "_(언더바)는 딱 한 글자 자리를 차지합니다.",
    },
    {
      id: 10,
      category: "NULL 연산자",
      question:
        "커미션(COMM) 컬럼의 값이 비어 있는 데이터를 찾기 위한 올바른 문법은?",
      options: [
        { id: 1, text: "WHERE COMM = NULL", isCorrect: false },
        { id: 2, text: "WHERE COMM IS NULL", isCorrect: true },
        { id: 3, text: "WHERE COMM = ''", isCorrect: false },
        { id: 4, text: "WHERE COMM IS EMPTY", isCorrect: false },
      ],
      rationale:
        "NULL 여부를 확인할 때는 반드시 IS NULL 또는 IS NOT NULL을 사용해야 합니다.",
      hint: "NULL은 '값'이 아니라 '상태'이므로 비교 연산자 =를 쓸 수 없습니다.",
    },
    {
      id: 11,
      category: "논리 연산자",
      question: "논리 연산자의 우선순위가 높은 순서대로 나열된 것은?",
      options: [
        { id: 1, text: "AND > OR > NOT", isCorrect: false },
        { id: 2, text: "OR > AND > NOT", isCorrect: false },
        { id: 3, text: "NOT > AND > OR", isCorrect: true },
        { id: 4, text: "NOT > OR > AND", isCorrect: false },
      ],
      rationale:
        "연산자 우선순위를 모르면 괄호 없는 복합 조건문에서 엉뚱한 결과를 얻을 수 있습니다.",
      hint: "부정(NOT)이 가장 강하고, 그 다음이 교집합(AND)입니다.",
    },
    {
      id: 12,
      category: "논리 연산자",
      question:
        "WHERE DEPTNO = 10 OR DEPTNO = 20 AND SAL > 2000 조건의 해석으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "10번 부서이거나 20번 부서인 사람 중 급여가 2000 초과인 사람",
          isCorrect: false,
        },
        {
          id: 2,
          text: "10번 부서인 사람 전체 + (20번 부서이면서 급여가 2000 초과인 사람)",
          isCorrect: true,
        },
        {
          id: 3,
          text: "10번 또는 20번 부서이면서 급여가 2000 이하인 사람",
          isCorrect: false,
        },
        {
          id: 4,
          text: "모든 부서원 중 급여가 2000 초과인 사람",
          isCorrect: false,
        },
      ],
      rationale:
        "우선순위에 따라 (DEPTNO = 20 AND SAL > 2000)이 먼저 묶이고, 여기에 10번 부서 조건이 OR로 결합됩니다.",
      hint: "AND가 OR보다 먼저 계산된다는 점에 주의하세요!",
    },
    {
      id: 13,
      category: "논리 연산자",
      question:
        "위 12번 문제에서 '10번 또는 20번 부서원 중에서 급여가 2000 초과인 사람'을 뽑으려면 어떻게 수정해야 할까?",
      options: [
        {
          id: 1,
          text: "WHERE DEPTNO IN (10, 20) OR SAL > 2000",
          isCorrect: false,
        },
        {
          id: 2,
          text: "WHERE DEPTNO = 10 AND DEPTNO = 20 OR SAL > 2000",
          isCorrect: false,
        },
        {
          id: 3,
          text: "WHERE (DEPTNO = 10 OR DEPTNO = 20) AND SAL > 2000",
          isCorrect: true,
        },
        { id: 4, text: "수정할 필요 없다.", isCorrect: false },
      ],
      rationale:
        "괄호를 사용하면 우선순위를 강제로 지정하여 의도한 로직을 구현할 수 있습니다.",
      hint: "먼저 처리하고 싶은 조건은 수학처럼 '이것'으로 묶어줍니다.",
    },
    {
      id: 14,
      category: "WHERE 절 기초",
      question: "다음 중 WHERE 절의 역할에 대한 설명으로 틀린 것은?",
      options: [
        { id: 1, text: "테이블의 가로줄(행)을 필터링한다.", isCorrect: false },
        {
          id: 2,
          text: "불필요한 데이터를 제거하여 시스템 부하를 줄인다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT 절보다 늦게 실행되어 별칭 사용이 자유롭다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "비교, 논리, SQL 특수 연산자를 활용할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "WHERE는 SELECT보다 먼저 실행되므로 별칭을 사용할 수 없습니다.",
      hint: "실행 순서 문제를 다시 떠올려 보세요.",
    },
    {
      id: 15,
      category: "부정 연산자",
      question: "WHERE SAL NOT BETWEEN 1000 AND 2000의 의미는?",
      options: [
        {
          id: 1,
          text: "급여가 1000 미만이거나 2000 초과인 경우",
          isCorrect: true,
        },
        { id: 2, text: "급여가 1000 이상 2000 이하인 경우", isCorrect: false },
        { id: 3, text: "급여가 딱 1000이거나 2000인 경우", isCorrect: false },
        { id: 4, text: "급여가 1500인 경우만 제외", isCorrect: false },
      ],
      rationale:
        "NOT은 조건의 결과를 반대로 바꾸므로, 해당 범위에 포함되지 않는 데이터를 찾습니다.",
      hint: "BETWEEN 결과(1000~2000)를 NOT으로 뒤집어 보세요.",
    },
    {
      id: 16,
      category: "부정 연산자",
      question: "이름에 'A'가 들어가지 않는 사람을 찾는 조건은?",
      options: [
        { id: 1, text: "WHERE ENAME LIKE '%A%'", isCorrect: false },
        { id: 2, text: "WHERE ENAME NOT LIKE '%A%'", isCorrect: true },
        { id: 3, text: "WHERE ENAME <> '%A%'", isCorrect: false },
        { id: 4, text: "WHERE ENAME IS NOT 'A'", isCorrect: false },
      ],
      rationale: "LIKE 앞에 NOT을 붙여 패턴에 해당하지 않는 행을 필터링합니다.",
      hint: "패턴 검색의 부정은 NOT LIKE를 씁니다.",
    },
    {
      id: 17,
      category: "NULL 연산자",
      question: "WHERE MGR IS NOT NULL의 의미는?",
      options: [
        { id: 1, text: "관리자(MGR)가 없는 사원을 찾는다.", isCorrect: false },
        {
          id: 2,
          text: "관리자(MGR)가 있는 사원(값이 비어있지 않은 사원)을 찾는다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "관리자 이름이 NULL인 사원을 찾는다.",
          isCorrect: false,
        },
        { id: 4, text: "오류가 발생하는 문장이다.", isCorrect: false },
      ],
      rationale:
        "IS NOT NULL은 해당 컬럼에 어떤 값이든 채워져 있는 경우를 의미합니다.",
      hint: "NULL이 아닌 상태를 찾는 조건입니다.",
    },
    {
      id: 18,
      category: "연산자 특성",
      question: "다음 중 결과가 다른 하나는?",
      options: [
        { id: 1, text: "WHERE DEPTNO = 10 OR DEPTNO = 20", isCorrect: false },
        { id: 2, text: "WHERE DEPTNO IN (10, 20)", isCorrect: false },
        { id: 3, text: "WHERE DEPTNO = ANY (10, 20)", isCorrect: false },
        { id: 4, text: "WHERE DEPTNO BETWEEN 10 AND 20", isCorrect: true },
      ],
      rationale:
        "BETWEEN은 10과 20 사이의 모든 값을 포함하지만, 1, 2번은 딱 10 또는 20인 경우만 찾습니다.",
      hint: "10과 20 사이에는 11, 12... 등의 숫자가 있을 수 있다는 점을 생각하세요.",
    },
    {
      id: 19,
      category: "실행 순서",
      question:
        "SELECT 절에서 SAL * 12 AS 연봉이라고 했을 때, WHERE 절에서 연봉이 5000 이상인 데이터를 찾는 올바른 방법은?",
      options: [
        { id: 1, text: "WHERE 연봉 >= 5000", isCorrect: false },
        { id: 2, text: "WHERE SAL * 12 >= 5000", isCorrect: true },
        { id: 3, text: "WHERE AS 연봉 >= 5000", isCorrect: false },
        { id: 4, text: "방법이 없다.", isCorrect: false },
      ],
      rationale:
        "WHERE 절에서는 별칭 인식이 안 되므로 계산식이나 원래 컬럼명을 직접 써야 합니다.",
      hint: "별칭을 못 쓴다면 원래의 '식'을 그대로 가져와야 합니다.",
    },
    {
      id: 20,
      category: "패턴 매칭",
      question: "WHERE ENAME LIKE 'S_T%' 조건으로 검색될 수 있는 이름은?",
      options: [
        { id: 1, text: "ST", isCorrect: false },
        { id: 2, text: "SCOTT", isCorrect: false },
        { id: 3, text: "SET", isCorrect: true },
        { id: 4, text: "SATURN", isCorrect: true },
      ],
      rationale:
        "SET은 S+E+T이고 뒤에 %가 0개이므로 가능, SATURN은 S+A+T+URN이므로 가능합니다. SCOTT은 세 번째 글자가 O라서 안 됩니다.",
      hint: "S(첫글자) + 아무거나 한 글자(_) + T(세번째) + 그 뒤는 자유(%)",
    },
  ],

  6: [
    {
      id: 1,
      category: "1~2강: SELECT와 WHERE 절",
      question: "다음 중 SQL 문법의 특징으로 가장 적절하지 않은 것은?",
      options: [
        {
          id: 1,
          text: "SQL 문장은 세미콜론(;)으로 끝내야 실행된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SQL 명령어(SELECT, FROM 등)는 대소문자를 구별하지 않는다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "데이터 값('Kim', 'MANAGER')은 대소문자를 엄격히 구별한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "산술 연산에서 NULL과 숫자를 더하면 0이 된다.",
          isCorrect: true,
        },
      ],
      rationale:
        "NULL은 '알 수 없는 값'이므로, 어떤 숫자와 연산해도 결과는 무조건 NULL입니다. (100 + NULL = NULL)",
      hint: "NULL은 0이 아닙니다.",
    },
    {
      id: 2,
      category: "1~2강: SELECT와 WHERE 절",
      question: "별칭(Alias) 사용 규칙 중 옳은 것은?",
      options: [
        { id: 1, text: "AS 키워드는 반드시 사용해야 한다.", isCorrect: false },
        {
          id: 2,
          text: "별칭에 공백이 포함된 경우 작은따옴표(' ')로 감싸야 한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: '별칭에 공백이나 특수문자가 있으면 큰따옴표(" ")를 사용해야 한다.',
          isCorrect: true,
        },
        {
          id: 4,
          text: "WHERE 절에서 SELECT 절의 별칭을 사용하여 필터링할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        '별칭에 공백이 있을 때는 반드시 큰따옴표(")를 써야 합니다. WHERE 절은 SELECT 절보다 먼저 실행되므로 SELECT에서 만든 별칭을 인식하지 못합니다.',
      hint: '이름표(Alias)는 크게(") 붙인다고 생각하세요.',
    },
    {
      id: 3,
      category: "1~2강: SELECT와 WHERE 절",
      question:
        "다음 중 이름이 'K'로 시작하고 세 번째 글자가 'M'인 데이터를 찾는 조건으로 옳은 것은?",
      options: [
        { id: 1, text: "WHERE NAME LIKE 'K%M'", isCorrect: false },
        { id: 2, text: "WHERE NAME LIKE 'K_M%'", isCorrect: true },
        { id: 3, text: "WHERE NAME LIKE 'K%M%'", isCorrect: false },
        { id: 4, text: "WHERE NAME LIKE 'K_M_'", isCorrect: false },
      ],
      rationale:
        "'K'로 시작(K), 두 번째 글자 상관없음(_), 세 번째 글자(M), 그 뒤는 상관없음(%)의 조합입니다.",
      hint: "'_'는 딱 한 글자, '%'는 글자 수 제한이 없습니다.",
    },
    {
      id: 4,
      category: "1~2강: SELECT와 WHERE 절",
      question: "다음 중 보너스(COMM)가 NULL인 사원을 조회하는 올바른 쿼리는?",
      options: [
        {
          id: 1,
          text: "SELECT * FROM EMP WHERE COMM = NULL;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT * FROM EMP WHERE COMM != NULL;",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT * FROM EMP WHERE COMM IS NULL;",
          isCorrect: true,
        },
        {
          id: 4,
          text: "SELECT * FROM EMP WHERE COMM IS NOT NULL;",
          isCorrect: false,
        },
      ],
      rationale:
        "NULL은 값이 아니므로 '=' 연산자를 쓸 수 없고, 반드시 IS NULL 연산자를 사용해야 합니다.",
      hint: "비어있는 상태를 묻는 전용 연산자가 있습니다.",
    },
    {
      id: 5,
      category: "1~2강: SELECT와 WHERE 절",
      question: "연산자 우선순위에 따라 다음 조건의 결과로 옳은 것은?",
      code: "WHERE DEPTNO = 10 OR DEPTNO = 20 AND SAL > 2500",
      options: [
        {
          id: 1,
          text: "10번 부서이거나 20번 부서인 사람 중 급여가 2500 초과인 사원",
          isCorrect: false,
        },
        {
          id: 2,
          text: "10번 부서인 사람 전체와, 20번 부서이면서 급여가 2500 초과인 사원",
          isCorrect: true,
        },
        {
          id: 3,
          text: "부서와 상관없이 급여가 2500 초과인 사원",
          isCorrect: false,
        },
        {
          id: 4,
          text: "10번과 20번 부서 사원 중 급여가 2500 이하인 사원",
          isCorrect: false,
        },
      ],
      rationale:
        "논리 연산자 순위는 NOT > AND > OR입니다. 따라서 AND 조건이 먼저 계산됩니다.",
      hint: "AND가 OR보다 힘이 더 셉니다.",
    },
    {
      id: 6,
      category: "3강: ORDER BY와 함수",
      question: "다음 중 SQL 실행 순서로 올바른 것은?",
      options: [
        { id: 1, text: "SELECT → FROM → WHERE → ORDER BY", isCorrect: false },
        { id: 2, text: "FROM → SELECT → WHERE → ORDER BY", isCorrect: false },
        { id: 3, text: "FROM → WHERE → SELECT → ORDER BY", isCorrect: true },
        { id: 4, text: "WHERE → FROM → SELECT → ORDER BY", isCorrect: false },
      ],
      rationale:
        "재료 창고(FROM)에서 재료를 손질(WHERE)한 뒤, 플레이팅(SELECT)하고, 마지막에 줄을 세웁니다(ORDER BY).",
      hint: "'프-웨-셀-오'를 기억하세요. (중간에 그룹핑이 빠진 기초 순서)",
    },
    {
      id: 7,
      category: "3강: ORDER BY와 함수",
      question:
        "Oracle 환경에서 ORDER BY SAL ASC를 실행했을 때, SAL이 NULL인 데이터는 어디에 위치하는가?",
      options: [
        { id: 1, text: "가장 처음에 출력된다.", isCorrect: false },
        { id: 2, text: "가장 마지막에 출력된다.", isCorrect: true },
        { id: 3, text: "무작위로 출력된다.", isCorrect: false },
        { id: 4, text: "출력에서 제외된다.", isCorrect: false },
      ],
      rationale:
        "Oracle은 NULL을 가장 큰 값으로 취급하므로 오름차순(ASC) 시 맨 뒤에 옵니다. (SQL Server는 반대)",
      hint: "Oracle에서 NULL은 끝판왕(가장 큰 값)입니다.",
    },
    {
      id: 8,
      category: "3강: ORDER BY와 함수",
      question: "SELECT SUBSTR('SQLD_PASS', 6, 2) FROM DUAL;의 결과값은?",
      options: [
        { id: 1, text: "'PA'", isCorrect: true },
        { id: 2, text: "'AS'", isCorrect: false },
        { id: 3, text: "'SS'", isCorrect: false },
        { id: 4, text: "'D_'", isCorrect: false },
      ],
      rationale:
        "6번째 글자인 'P'부터 시작하여 2글자를 가져오므로 'PA'가 됩니다.",
      hint: "시작 위치와 가져올 개수를 확인하세요.",
    },
    {
      id: 9,
      category: "3강: ORDER BY와 함수",
      question: "다음 중 NULL 처리 함수에 대한 설명으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "NVL(A, B): A가 NULL이면 B를 반환한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "NULLIF(A, B): A와 B가 같으면 NULL을 반환한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "COALESCE(A, B, C): 리스트 중 NULL이 아닌 최초의 값을 반환한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "NVL2(A, B, C): A가 NULL이면 B를, 아니면 C를 반환한다.",
          isCorrect: true,
        },
      ],
      rationale:
        "NVL2(A, B, C)는 A가 NULL이 아니면 B를, NULL이면 C를 반환합니다.",
      hint: "NVL2는 'NULL이 아닐 때'가 먼저 옵니다.",
    },
    {
      id: 10,
      category: "3강: ORDER BY와 함수",
      question:
        "CASE 문의 두 가지 방식 중 'Searched Case Expression'의 특징은?",
      options: [
        { id: 1, text: "CASE 뒤에 바로 컬럼명을 쓴다.", isCorrect: false },
        {
          id: 2,
          text: "WHEN 뒤에 비교 연산자나 복합 조건을 자유롭게 쓸 수 있다.",
          isCorrect: true,
        },
        { id: 3, text: "등호(=) 비교만 가능하다.", isCorrect: false },
        {
          id: 4,
          text: "Oracle의 DECODE 함수와 완전히 동일한 문법이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "Searched Case는 CASE WHEN 조건 THEN ... 형태이며 다양한 조건을 걸 수 있습니다.",
      hint: "CASE WHEN SAL >= 3000과 같은 형태입니다.",
    },
    {
      id: 11,
      category: "4강: GROUP BY와 HAVING",
      question: "다음 중 집계 함수와 NULL의 관계에 대한 설명으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "COUNT(*)은 NULL을 포함하여 전체 행 수를 샌다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "COUNT(컬럼명)은 NULL을 제외한 행 수를 샌다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SUM(컬럼명)은 NULL을 0으로 치환하여 합산한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "AVG(컬럼명)은 NULL인 행을 분모에서 제외하고 평균을 구한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "집계 함수(SUM, AVG 등)는 NULL 값을 무시(제외)하고 연산합니다. 0으로 치환하는 것이 아닙니다.",
      hint: "대부분의 집계 함수는 NULL을 투명인간 취급합니다.",
    },
    {
      id: 12,
      category: "4강: GROUP BY와 HAVING",
      question: "다음 쿼리에서 에러가 발생하는 이유는?",
      code: "SELECT DEPTNO, ENAME, AVG(SAL) FROM EMP GROUP BY DEPTNO;",
      options: [
        {
          id: 1,
          text: "집계 함수를 SELECT 절에 썼기 때문에",
          isCorrect: false,
        },
        {
          id: 2,
          text: "GROUP BY 절에 ENAME 컬럼이 없기 때문에",
          isCorrect: true,
        },
        { id: 3, text: "WHERE 절이 없기 때문에", isCorrect: false },
        {
          id: 4,
          text: "AVG 함수에 별칭을 주지 않았기 때문에",
          isCorrect: false,
        },
      ],
      rationale:
        "GROUP BY를 사용할 경우, SELECT 절에는 GROUP BY에 명시된 컬럼이나 집계 함수만 올 수 있습니다.",
      hint: "그룹으로 묶었는데, 묶이지 않은 개별 데이터(이름)를 부르라고 하면 컴퓨터는 혼란에 빠집니다.",
    },
    {
      id: 13,
      category: "4강: GROUP BY와 HAVING",
      question: "WHERE 절과 HAVING 절의 차이점으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "WHERE 절에서도 집계 함수를 사용할 수 있다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "HAVING 절은 반드시 GROUP BY 절보다 먼저 실행된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "WHERE 절은 개별 행을, HAVING 절은 그룹화된 결과를 필터링한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "HAVING 절에는 일반 컬럼 조건만 올 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "WHERE는 그룹화 전 필터링, HAVING은 그룹화 후 집계 결과 필터링입니다.",
      hint: '"박스에 담기 전(WHERE) vs 담은 후 무게 측정(HAVING)" 비유를 떠올리세요.',
    },
    {
      id: 14,
      category: "4강: GROUP BY와 HAVING",
      question:
        "SQL 전체 실행 순서(Logical Execution Order)를 올바르게 나열한 것은?",
      options: [
        {
          id: 1,
          text: "FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY",
          isCorrect: true,
        },
        {
          id: 2,
          text: "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY",
          isCorrect: false,
        },
        {
          id: 3,
          text: "FROM - GROUP BY - WHERE - HAVING - SELECT - ORDER BY",
          isCorrect: false,
        },
        {
          id: 4,
          text: "FROM - WHERE - SELECT - GROUP BY - HAVING - ORDER BY",
          isCorrect: false,
        },
      ],
      rationale: "프-웨-그-하-셀-오(FWGHSO) 순서입니다.",
      hint: "이 순서는 SQLD 시험의 핵심 암기 사항입니다.",
    },
    {
      id: 15,
      category: "5강: JOIN",
      question: "다음 중 INNER JOIN에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "한쪽 테이블에만 데이터가 있어도 모두 출력한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "조인 조건에 맞는 교집합 데이터만 출력한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "조건 없이 두 테이블의 모든 행을 곱하여 출력한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "ANSI 표준에서는 WHERE 절에 조인 조건을 쓴다.",
          isCorrect: false,
        },
      ],
      rationale:
        "INNER JOIN은 양쪽 테이블에 모두 데이터가 존재하는 '커플' 데이터만 가져옵니다.",
      hint: "벤다이어그램의 교집합 영역입니다.",
    },
    {
      id: 16,
      category: "5강: JOIN",
      question: "LEFT OUTER JOIN의 결과에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "오른쪽 테이블의 모든 데이터가 출력된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "조인 조건에 맞는 데이터가 없으면 왼쪽 테이블 데이터도 출력되지 않는다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "왼쪽 테이블의 모든 데이터가 출력되며, 오른쪽 테이블에 짝이 없으면 NULL로 표시된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "양쪽 테이블의 모든 데이터가 합쳐져서 출력된다.",
          isCorrect: false,
        },
      ],
      rationale:
        "LEFT 테이블은 무조건 다 나오고, 매칭되는 오른쪽 데이터가 없으면 NULL 처리됩니다.",
      hint: "마케팅 타겟팅(전체 회원 중 구매 안 한 사람 찾기)에 자주 씁니다.",
    },
    {
      id: 17,
      category: "5강: JOIN",
      question:
        "Oracle 전용 조인 문법에서 WHERE D.DEPTNO = E.DEPTNO(+)의 의미는?",
      options: [
        { id: 1, text: "EMP(E) 테이블 기준 LEFT OUTER JOIN", isCorrect: false },
        { id: 2, text: "DEPT(D) 테이블 기준 LEFT OUTER JOIN", isCorrect: true },
        { id: 3, text: "FULL OUTER JOIN", isCorrect: false },
        { id: 4, text: "INNER JOIN", isCorrect: false },
      ],
      rationale:
        "(+) 기호는 데이터가 부족한 쪽에 붙입니다. DEPT는 그대로 다 나오고 EMP가 부족하므로 DEPT 기준 조인입니다.",
      hint: "(+)가 붙은 반대쪽 테이블이 주인(기준)입니다.",
    },
    {
      id: 18,
      category: "5강: JOIN",
      question: "NATURAL JOIN 사용 시 주의사항으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "ON 절을 사용하여 조인 조건을 명시해야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "조인 컬럼에 테이블 별칭(Alias)을 붙일 수 없다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "동일한 이름의 컬럼이 없어도 자동으로 조인된다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "WHERE 절에서 조인 컬럼을 쓸 때 반드시 테이블 별칭을 써야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "NATURAL JOIN은 컬럼명을 자동으로 매칭하므로, 해당 컬럼에 별칭(E.DEPTNO 등)을 붙이면 에러가 납니다.",
      hint: "자동으로 합쳐졌으니 주인(별칭)을 따지지 말라는 뜻입니다.",
    },
    {
      id: 19,
      category: "5강: JOIN",
      question:
        "사원 테이블(14행)과 부서 테이블(4행)을 CROSS JOIN 했을 때 결과 행의 개수는?",
      options: [
        { id: 1, text: "14개", isCorrect: false },
        { id: 2, text: "4개", isCorrect: false },
        { id: 3, text: "18개", isCorrect: false },
        { id: 4, text: "56개", isCorrect: true },
      ],
      rationale:
        "CROSS JOIN(카티션 곱)은 모든 조합을 구하므로 14 * 4 = 56이 됩니다.",
      hint: "두 테이블의 행 수를 곱하면 됩니다.",
    },
    {
      id: 20,
      category: "5강: JOIN",
      question: "다음 중 비등가 조인(Non-EQUI JOIN)이 필요한 상황은?",
      options: [
        {
          id: 1,
          text: "사원번호와 부서번호가 일치하는 데이터를 찾을 때",
          isCorrect: false,
        },
        {
          id: 2,
          text: "사원의 급여가 급여 등급 테이블의 최소~최대 범위에 있는지 확인할 때",
          isCorrect: true,
        },
        {
          id: 3,
          text: "두 테이블의 컬럼 이름이 완전히 같을 때",
          isCorrect: false,
        },
        {
          id: 4,
          text: "한쪽 테이블에만 데이터가 있는 경우를 찾을 때",
          isCorrect: false,
        },
      ],
      rationale:
        "등호(=)가 아닌 BETWEEN, >, < 등의 연산자로 범위를 조인하는 것이 비등가 조인입니다.",
      hint: "딱 맞아떨어지는 값 대신 범위를 비교할 때 씁니다.",
    },
  ],
  7: [
    // Part 1: SELECT, WHERE, 연산자 (1~10번)
    {
      id: 1,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "다음 중 SQL 문장의 실행 순서로 올바른 것은?",
      options: [
        { id: 1, text: "SELECT - FROM - WHERE - ORDER BY", isCorrect: false },
        { id: 2, text: "FROM - WHERE - SELECT - ORDER BY", isCorrect: true },
        { id: 3, text: "FROM - SELECT - WHERE - ORDER BY", isCorrect: false },
        { id: 4, text: "WHERE - FROM - SELECT - ORDER BY", isCorrect: false },
      ],
      rationale:
        "데이터베이스는 먼저 테이블을 찾고(FROM), 조건에 맞는 행을 걸러낸 뒤(WHERE), 보여줄 컬럼을 선택하고(SELECT), 마지막으로 정렬(ORDER BY)합니다.",
      hint: '"어디서(FROM) 가져와서, 어떻게 거르고(WHERE), 뭘 보여줄지(SELECT)" 순서입니다.',
    },
    {
      id: 2,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "다음 중 별칭(Alias) 사용 시 오류가 발생하는 경우는?",
      options: [
        { id: 1, text: "SELECT NAME AS 이름 FROM USER;", isCorrect: false },
        { id: 2, text: "SELECT NAME 이름 FROM USER;", isCorrect: false },
        { id: 3, text: 'SELECT NAME "내 이름" FROM USER;', isCorrect: false },
        { id: 4, text: "SELECT NAME '이름' FROM USER;", isCorrect: true },
      ],
      rationale:
        "별칭에 공백이 있거나 특수문자가 있을 때는 반드시 큰따옴표(\" \")를 써야 합니다. 작은따옴표(' ')는 문자열 값을 의미할 때 씁니다.",
      hint: '이름표(Alias)는 크게(") 붙이세요!',
    },
    {
      id: 3,
      category: "Part 1: SELECT, WHERE, 연산자",
      question:
        "[테이블: TB1]에 데이터 (100, NULL, 50)이 있을 때 다음 쿼리의 결과는?",
      code: "SELECT SUM(COL1 + 10) FROM TB1;",
      options: [
        { id: 1, text: "180", isCorrect: false },
        { id: 2, text: "160", isCorrect: false },
        { id: 3, text: "170", isCorrect: true },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "행 단위 연산 (100+10), (NULL+10), (50+10)의 결과는 110, NULL, 60입니다. SUM은 NULL을 제외하고 계산하므로 110 + 60 = 170이 됩니다.",
      hint: "NULL과 숫자를 더하면 무조건 NULL입니다.",
    },
    {
      id: 4,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "WHERE NAME LIKE '_A%' 조건에 맞는 데이터는?",
      options: [
        { id: 1, text: "APPLE", isCorrect: false },
        { id: 2, text: "BANANA", isCorrect: true },
        { id: 3, text: "COAT", isCorrect: false },
        { id: 4, text: "ALARM", isCorrect: false },
      ],
      rationale:
        "_는 딱 한 글자를 의미하고 그 다음이 A여야 하므로, 두 번째 글자가 'A'인 단어를 찾습니다.",
      hint: "밑줄 하나당 한 글자입니다.",
    },
    {
      id: 5,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "다음 중 NULL인 값을 조회하고자 할 때 올바른 조건식은?",
      options: [
        { id: 1, text: "WHERE COMM = NULL", isCorrect: false },
        { id: 2, text: "WHERE COMM IS NULL", isCorrect: true },
        { id: 3, text: "WHERE COMM == NULL", isCorrect: false },
        { id: 4, text: "WHERE COMM IS NOT NULL", isCorrect: false },
      ],
      rationale:
        "NULL은 값이 아니므로 = 연산자로 비교할 수 없으며 반드시 IS NULL을 사용해야 합니다.",
      hint: "비어있는지 물어볼 때는 전용 단어를 씁니다.",
    },
    {
      id: 6,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "BETWEEN 10 AND 20 조건과 동일한 의미를 가진 조건식은?",
      options: [
        { id: 1, text: "COL > 10 AND COL < 20", isCorrect: false },
        { id: 2, text: "COL >= 10 OR COL <= 20", isCorrect: false },
        { id: 3, text: "COL >= 10 AND COL <= 20", isCorrect: true },
        { id: 4, text: "COL > 10 OR COL < 20", isCorrect: false },
      ],
      rationale:
        "BETWEEN은 경계값 10과 20을 모두 포함하는 이상/이하 조건입니다.",
      hint: "양 끝값을 포함한다는 점이 핵심입니다.",
    },
    {
      id: 7,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "IN (10, 20, 30) 연산자와 동일한 결과를 내는 조건식은?",
      options: [
        { id: 1, text: "COL = 10 OR COL = 20 OR COL = 30", isCorrect: true },
        { id: 2, text: "COL = 10 AND COL = 20 AND COL = 30", isCorrect: false },
        { id: 3, text: "COL >= 10 AND COL <= 30", isCorrect: false },
        { id: 4, text: "COL = 10 OR 20 OR 30", isCorrect: false },
      ],
      rationale:
        "IN은 나열된 값 중 하나라도 일치하면 되는 합집합(OR) 연산입니다.",
      hint: '"이 중에 하나라도 있으면 가져와"라는 뜻입니다.',
    },
    {
      id: 8,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "WHERE 1=1과 같은 조건이 실무에서 자주 사용되는 주된 이유는?",
      options: [
        {
          id: 1,
          text: "무조건 참이 되어 모든 행을 출력하기 위해",
          isCorrect: false,
        },
        { id: 2, text: "성능을 최적화하기 위해", isCorrect: false },
        {
          id: 3,
          text: "쿼리 문법 오류를 방지하고 조건을 동적으로 추가하기 편하기 위해",
          isCorrect: true,
        },
        { id: 4, text: "인덱스를 태우기 위해", isCorrect: false },
      ],
      rationale:
        "기본 조건을 깔아두면 이후에 AND로 조건을 덧붙이기 매우 편리하여 실무(마케팅 타겟팅 추출 등)에서 자주 씁니다.",
      hint: "코드의 유연성을 위해 사용합니다.",
    },
    {
      id: 9,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "다음 중 연산자 우선순위가 가장 높은 것은?",
      options: [
        { id: 1, text: "OR", isCorrect: false },
        { id: 2, text: "AND", isCorrect: false },
        { id: 3, text: "NOT", isCorrect: false },
        { id: 4, text: "괄호 ()", isCorrect: true },
      ],
      rationale:
        "수학과 마찬가지로 괄호 안의 조건이 가장 먼저 처리됩니다. 논리 연산자 중에서는 NOT > AND > OR 순입니다.",
      hint: "가장 먼저 계산하고 싶은 건 괄호로 묶으세요.",
    },
    {
      id: 10,
      category: "Part 1: SELECT, WHERE, 연산자",
      question: "[테이블: TB]에 행이 10개 있을 때 다음 쿼리의 결과는?",
      code: "SELECT COUNT(*) FROM TB WHERE 1=2;",
      options: [
        { id: 1, text: "0", isCorrect: true },
        { id: 2, text: "10", isCorrect: false },
        { id: 3, text: "NULL", isCorrect: false },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale:
        "1=2는 항상 거짓이므로 필터링되는 행이 하나도 없습니다. 행이 없으므로 COUNT의 결과는 0입니다.",
      hint: "조건이 거짓이면 아무것도 남지 않습니다.",
    },

    // Part 2: 단일행 함수 및 CASE (11~20번)
    {
      id: 11,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "SELECT ROUND(123.456, 1) FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "123", isCorrect: false },
        { id: 2, text: "123.5", isCorrect: true },
        { id: 3, text: "123.4", isCorrect: false },
        { id: 4, text: "123.46", isCorrect: false },
      ],
      rationale:
        "소수점 첫째 자리까지 표시하라는 의미이므로, 둘째 자리(5)에서 반올림하여 123.5가 됩니다.",
      hint: "지정된 자릿수까지 남긴다고 생각하세요.",
    },
    {
      id: 12,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "다음 SQL의 결과로 올바른 것은? (우선순위 주의)",
      tables: [
        { name: "PROD", headers: ["NAME", "PRICE"], rows: [["A", 2500]] },
      ],
      code: "SELECT CASE WHEN PRICE > 1000 THEN '고가' WHEN PRICE > 2000 THEN '초고가' ELSE '일반' END FROM PROD;",
      options: [
        { id: 1, text: "고가", isCorrect: true },
        { id: 2, text: "초고가", isCorrect: false },
        { id: 3, text: "일반", isCorrect: false },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "CASE문은 위에서부터 순차적으로 조건을 검사하며, 첫 번째 만족하는 조건에서 멈춥니다. 2500은 1000보다 크므로 바로 '고가'를 반환합니다.",
      hint: "첨부이미지 12번의 핵심 함정입니다!",
    },
    {
      id: 13,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "NVL2(COMM, '수당있음', '수당없음')의 동작 방식으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "COMM이 NULL이면 '수당있음', 아니면 '수당없음'",
          isCorrect: false,
        },
        {
          id: 2,
          text: "COMM이 NULL이 아니면 '수당있음', NULL이면 '수당없음'",
          isCorrect: true,
        },
        {
          id: 3,
          text: "COMM과 '수당있음'이 같으면 '수당없음' 반환",
          isCorrect: false,
        },
        {
          id: 4,
          text: "COMM이 NULL인 경우만 '수당있음' 반환",
          isCorrect: false,
        },
      ],
      rationale: "NVL2(대상, NOT_NULL일때, NULL일때) 순서로 작동합니다.",
      hint: "2번 인자가 긍정(Not Null)입니다.",
    },
    {
      id: 14,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "SELECT LOWER('SQLD Pass') FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "SQLD PASS", isCorrect: false },
        { id: 2, text: "sqld pass", isCorrect: true },
        { id: 3, text: "Sqld Pass", isCorrect: false },
        { id: 4, text: "sqld Pass", isCorrect: false },
      ],
      rationale: "LOWER 함수는 모든 대문자를 소문자로 변환합니다.",
      hint: "영어 그대로 '낮춘다'는 뜻입니다.",
    },
    {
      id: 15,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "다음 중 날짜 함수에 대한 설명으로 틀린 것은? (Oracle 기준)",
      options: [
        {
          id: 1,
          text: "SYSDATE는 현재 날짜와 시간을 반환한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "날짜 + 1은 해당 날짜에 1시간을 더한 결과를 반환한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "EXTRACT(YEAR FROM SYSDATE)는 현재 연도를 숫자로 추출한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "날짜 - 날짜의 결과는 두 날짜 사이의 일수 차이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "날짜에 숫자를 더하면 '일(Day)' 단위로 계산됩니다. + 1은 1일(24시간)을 더하는 것입니다.",
      hint: "기본 단위는 '하루'입니다.",
    },
    {
      id: 16,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "SELECT NULLIF(100, 100) FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "100", isCorrect: false },
        { id: 2, text: "0", isCorrect: false },
        { id: 3, text: "NULL", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale: "NULLIF(A, B)는 두 값이 같으면 NULL을, 다르면 A를 반환합니다.",
      hint: '"같으면 NULL로 처리해라"는 뜻입니다.',
    },
    {
      id: 17,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "SELECT COALESCE(NULL, NULL, 'C', 'D') FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "NULL", isCorrect: false },
        { id: 2, text: "'C'", isCorrect: true },
        { id: 3, text: "'D'", isCorrect: false },
        { id: 4, text: "'C, D'", isCorrect: false },
      ],
      rationale:
        "COALESCE는 인자 리스트 중 NULL이 아닌 첫 번째 값을 반환합니다.",
      hint: "비어있지 않은 첫 번째 데이터를 찾을 때 유용합니다.",
    },
    {
      id: 18,
      category: "Part 2: 단일행 함수 및 CASE",
      question:
        "SELECT CEIL(12.1), FLOOR(12.9) FROM DUAL;의 결과로 올바른 조합은?",
      options: [
        { id: 1, text: "12, 12", isCorrect: false },
        { id: 2, text: "13, 13", isCorrect: false },
        { id: 3, text: "12, 13", isCorrect: false },
        { id: 4, text: "13, 12", isCorrect: true },
      ],
      rationale:
        "CEIL(천장)은 올림하여 13, FLOOR(바닥)은 내림하여 12가 됩니다.",
      hint: "위(천장)를 볼지, 아래(바닥)를 볼지 생각하세요.",
    },
    {
      id: 19,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "SELECT SUBSTR('MARKETER', 2, 3) FROM DUAL;의 결과는?",
      options: [
        { id: 1, text: "MAR", isCorrect: false },
        { id: 2, text: "ARK", isCorrect: true },
        { id: 3, text: "RKE", isCorrect: false },
        { id: 4, text: "KET", isCorrect: false },
      ],
      rationale:
        "2번째 글자('A')부터 시작하여 3글자를 가져오므로 'ARK'가 됩니다.",
      hint: "시작 위치와 길이를 정확히 세어보세요.",
    },
    {
      id: 20,
      category: "Part 2: 단일행 함수 및 CASE",
      question: "SELECT LTRIM('  SQL  ') FROM DUAL;의 결과는? (공백 표시 주의)",
      options: [
        { id: 1, text: "'SQL  '", isCorrect: true },
        { id: 2, text: "'  SQL'", isCorrect: false },
        { id: 3, text: "'SQL'", isCorrect: false },
        { id: 4, text: "' SQL '", isCorrect: false },
      ],
      rationale:
        "LTRIM은 왼쪽(Left)의 공백만 제거합니다. 오른쪽 공백은 남아있습니다.",
      hint: "어느 쪽(L/R)을 깎아낼지 결정합니다.",
    },

    // Part 3: GROUP BY 및 HAVING (21~30번)
    {
      id: 21,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "다음 ORDERS 테이블에 대해 SQL 실행 결과로 올바른 고객 ID는?",
      tables: [
        {
          name: "ORDER",
          headers: ["ID", "AMT"],
          rows: [
            ["C01", 500],
            ["C02", 50],
            ["C01", 100],
          ],
        },
      ],
      code: "SELECT ID FROM ORDERS GROUP BY ID HAVING COUNT(*) >= 2 AND SUM(AMT) > 500;",
      options: [
        { id: 1, text: "C01", isCorrect: true },
        { id: 2, text: "C02", isCorrect: false },
        { id: 3, text: "C01, C02 모두", isCorrect: false },
        { id: 4, text: "결과 없음", isCorrect: false },
      ],
      rationale:
        "C01은 2건이며 합계가 600이므로 두 조건을 모두 만족합니다. C02는 1건이므로 탈락입니다.",
      hint: "첨부이미지 13번의 다중 조건 판별 문제입니다.",
    },
    {
      id: 22,
      category: "Part 3: GROUP BY 및 HAVING",
      question:
        "SELECT DEPTNO, SUM(SAL) FROM EMP GROUP BY DEPTNO; 쿼리에서 GROUP BY의 역할은?",
      options: [
        { id: 1, text: "급여 순으로 정렬한다.", isCorrect: false },
        {
          id: 2,
          text: "부서별로 행을 묶어 합계를 낼 기준을 정한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "중복된 부서 번호를 제거하고 조회한다.",
          isCorrect: false,
        },
        { id: 4, text: "부서 번호가 있는 행만 거른다.", isCorrect: false },
      ],
      rationale:
        "동일한 컬럼 값을 가진 데이터들을 소그룹으로 묶어 집계 함수를 적용하게 합니다.",
      hint: "엑셀의 피벗 테이블과 같습니다.",
    },
    {
      id: 23,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "다음 중 HAVING 절에 대한 설명으로 올바른 것은?",
      options: [
        { id: 1, text: "WHERE 절보다 먼저 실행된다.", isCorrect: false },
        {
          id: 2,
          text: "집계 함수를 사용한 조건 필터링이 가능하다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "모든 SQL 문장에 반드시 포함되어야 한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "그룹화하기 전의 개별 행을 필터링한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "HAVING은 그룹화된 이후의 집계 결과(SUM, AVG 등)를 필터링할 때 씁니다.",
      hint: '"그룹의 조건"은 HAVING입니다.',
    },
    {
      id: 24,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "COUNT(*)와 COUNT(COMM)의 차이점으로 옳은 것은?",
      options: [
        { id: 1, text: "차이가 없다.", isCorrect: false },
        {
          id: 2,
          text: "COUNT(*)은 NULL을 포함하고, COUNT(COMM)은 NULL을 제외한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "COUNT(*)은 NULL을 제외하고, COUNT(COMM)은 NULL을 포함한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "COUNT(COMM)은 중복된 값은 하나만 샌다.",
          isCorrect: false,
        },
      ],
      rationale:
        "아스테리스크(*)는 행 자체의 개수를 세므로 NULL을 포함하지만, 컬럼명을 지정하면 해당 컬럼이 NULL인 행은 뺍니다.",
      hint: '컬럼을 콕 집으면 "그 안에 값이 들어있는지" 따지게 됩니다.',
    },
    {
      id: 25,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "다음 쿼리 중 문법 오류가 발생하는 것은?",
      options: [
        {
          id: 1,
          text: "SELECT DEPTNO FROM EMP GROUP BY DEPTNO;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT DEPTNO, COUNT(*) FROM EMP GROUP BY DEPTNO;",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT DEPTNO, SAL FROM EMP GROUP BY DEPTNO;",
          isCorrect: true,
        },
        {
          id: 4,
          text: "SELECT MAX(SAL) FROM EMP GROUP BY DEPTNO;",
          isCorrect: false,
        },
      ],
      rationale:
        "GROUP BY 절에 없는 일반 컬럼(SAL)을 SELECT 절에 단독으로 적을 수 없습니다.",
      hint: '그룹으로 묶었으면 "그 그룹의 대표값(집계)"만 보여줘야 합니다.',
    },
    {
      id: 26,
      category: "Part 3: GROUP BY 및 HAVING",
      question:
        "SELECT DEPTNO 부서, SUM(SAL) 합계 FROM EMP GROUP BY 부서; 가 오류인 이유는?",
      options: [
        { id: 1, text: "별칭에 한글을 썼기 때문에", isCorrect: false },
        {
          id: 2,
          text: "GROUP BY 절에는 SELECT에서 정한 별칭을 쓸 수 없기 때문에",
          isCorrect: true,
        },
        {
          id: 3,
          text: "SUM 함수에는 별칭을 줄 수 없기 때문에",
          isCorrect: false,
        },
        {
          id: 4,
          text: "FROM 절이 마지막에 와야 하기 때문에",
          isCorrect: false,
        },
      ],
      rationale:
        "실행 순서상 GROUP BY가 SELECT보다 먼저이므로, 아직 태어나지 않은 별칭을 GROUP BY가 인식할 수 없습니다.",
      hint: '실행 순서 "프-웨-그-하-셀-오"를 다시 떠올리세요.',
    },
    {
      id: 27,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "다음 중 성격이 다른 집계 함수는?",
      options: [
        { id: 1, text: "SUM", isCorrect: false },
        { id: 2, text: "AVG", isCorrect: false },
        { id: 3, text: "COUNT", isCorrect: false },
        { id: 4, text: "SUBSTR", isCorrect: true },
      ],
      rationale:
        "앞의 세 개는 여러 행을 묶어 하나로 만드는 집계 함수이고, SUBSTR은 각 행마다 실행되는 단일행 함수입니다.",
      hint: '"뭉치느냐, 따로 노느냐"의 차이입니다.',
    },
    {
      id: 28,
      category: "Part 3: GROUP BY 및 HAVING",
      question:
        "부서별 평균 급여가 3000 이상인 부서만 조회하고 싶을 때 적절한 구문은?",
      options: [
        { id: 1, text: "WHERE AVG(SAL) >= 3000", isCorrect: false },
        { id: 2, text: "HAVING AVG(SAL) >= 3000", isCorrect: true },
        { id: 3, text: "GROUP BY AVG(SAL) >= 3000", isCorrect: false },
        { id: 4, text: "ORDER BY AVG(SAL) >= 3000", isCorrect: false },
      ],
      rationale: "집계 결과에 대한 조건은 반드시 HAVING 절을 사용해야 합니다.",
      hint: "WHERE 절에서는 집계 함수를 쓸 수 없습니다.",
    },
    {
      id: 29,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "[TB1]에 데이터 (10, 20, NULL)이 있을 때 AVG(COL1)의 결과는?",
      options: [
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "15", isCorrect: true },
        { id: 3, text: "20", isCorrect: false },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "AVG는 NULL을 제외하므로 30 / 2 = 15가 됩니다. (분모에서도 제외됨)",
      hint: "NULL은 없는 셈 치고 남은 숫자들의 평균을 냅니다.",
    },
    {
      id: 30,
      category: "Part 3: GROUP BY 및 HAVING",
      question: "집계 함수 MAX, MIN이 처리할 수 있는 데이터 타입은?",
      options: [
        { id: 1, text: "숫자형만 가능", isCorrect: false },
        { id: 2, text: "숫자형과 날짜형만 가능", isCorrect: false },
        { id: 3, text: "숫자형, 날짜형, 문자형 모두 가능", isCorrect: true },
        { id: 4, text: "날짜형만 가능", isCorrect: false },
      ],
      rationale:
        "최대/최소는 숫자뿐만 아니라 가나다순(문자), 과거/미래(날짜) 모두 비교 가능합니다.",
      hint: '"가장 큰 것과 작은 것"은 글자나 날짜에서도 정할 수 있습니다.',
    },

    // Part 4: JOIN 및 복합 응용 (31~40번)
    {
      id: 31,
      category: "Part 4: JOIN 및 복합 응용",
      question: "3개 테이블 조인 시 오류가 발생하는 주된 원인은?",
      options: [
        { id: 1, text: "조인 조건을 WHERE 절에 써서", isCorrect: false },
        { id: 2, text: "별칭(Alias)을 부여하지 않아서", isCorrect: false },
        {
          id: 3,
          text: "존재하지 않는 테이블의 컬럼을 조인 조건으로 사용해서 (부적합한 식별자)",
          isCorrect: true,
        },
        { id: 4, text: "컬럼 이름이 서로 달라서", isCorrect: false },
      ],
      rationale:
        "EMP.DEPT_ID = DEPT.DEPT_ID와 같이 실제 테이블에 있는 컬럼끼리 매칭해야 합니다. 엉뚱한 테이블 별칭을 가져다 쓰면 '부적합한 식별자' 에러가 납니다.",
      hint: "별칭(e, d, l)이 어떤 테이블을 가리키는지, 그 테이블에 그 컬럼이 진짜 있는지 확인하세요.",
    },
    {
      id: 32,
      category: "Part 4: JOIN 및 복합 응용",
      question: "INNER JOIN에 대한 설명으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "두 테이블 모두에 조인 컬럼 값이 있는 행만 조회된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "조인 조건에 =(등호)를 사용하면 등가 조인(EQUI JOIN)이라 한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "어느 한쪽에만 데이터가 있는 경우도 출력한다.",
          isCorrect: true,
        },
        { id: 4, text: "교집합과 같은 개념이다.", isCorrect: false },
      ],
      rationale:
        "한쪽에만 있는 데이터를 출력하는 것은 OUTER JOIN입니다. INNER JOIN은 공통된 것만 보여줍니다.",
      hint: '"서로 마음이 맞아야만(매칭) 나온다"고 생각하세요.',
    },
    {
      id: 33,
      category: "Part 4: JOIN 및 복합 응용",
      question:
        "LEFT OUTER JOIN에서 오른쪽 테이블에 매칭되는 데이터가 없을 때 결과는?",
      options: [
        { id: 1, text: "결과에서 제외된다.", isCorrect: false },
        { id: 2, text: "에러가 발생한다.", isCorrect: false },
        {
          id: 3,
          text: "왼쪽 데이터만 나오고 오른쪽 데이터 자리는 NULL로 채워진다.",
          isCorrect: true,
        },
        { id: 4, text: "왼쪽 데이터도 NULL로 나온다.", isCorrect: false },
      ],
      rationale:
        "기준이 되는 왼쪽 테이블은 무조건 다 보여주고, 짝이 없는 오른쪽은 빈칸(NULL)으로 둡니다.",
      hint: "마케팅 타겟(왼쪽)에게 구매 이력(오른쪽)을 붙일 때, 안 산 사람은 NULL로 뜨겠죠?",
    },
    {
      id: 34,
      category: "Part 4: JOIN 및 복합 응용",
      question: "다음 중 NATURAL JOIN의 특징이 아닌 것은?",
      options: [
        {
          id: 1,
          text: "두 테이블에서 이름이 같은 모든 컬럼을 자동으로 조인한다.",
          isCorrect: false,
        },
        { id: 2, text: "ON 절을 명시적으로 사용할 수 없다.", isCorrect: false },
        {
          id: 3,
          text: "조인 컬럼에 테이블 별칭을 붙여서 사용해야 한다.",
          isCorrect: true,
        },
        { id: 4, text: "USING 절과 같이 사용할 수 없다.", isCorrect: false },
      ],
      rationale:
        "NATURAL JOIN의 가장 큰 특징은 조인 컬럼에 별칭을 붙이면 오류가 난다는 점입니다.",
      hint: "자동으로 합쳐졌으므로 누구의 것인지 따지지 않습니다.",
    },
    {
      id: 35,
      category: "Part 4: JOIN 및 복합 응용",
      question:
        "테이블 A(행 3개)와 테이블 B(행 5개)를 CROSS JOIN 했을 때 결과 행의 개수는?",
      options: [
        { id: 1, text: "3개", isCorrect: false },
        { id: 2, text: "5개", isCorrect: false },
        { id: 3, text: "8개", isCorrect: false },
        { id: 4, text: "15개", isCorrect: true },
      ],
      rationale: "모든 조합을 다 만드는 카티션 곱이므로 3 * 5 = 15가 됩니다.",
      hint: "연결 고리가 없을 때 발생하는 '폭발적인' 결과입니다.",
    },
    {
      id: 36,
      category: "Part 4: JOIN 및 복합 응용",
      question: "3개의 테이블을 조인할 때 필요한 최소 조인 조건의 개수는?",
      options: [
        { id: 1, text: "1개", isCorrect: false },
        { id: 2, text: "2개", isCorrect: true },
        { id: 3, text: "3개", isCorrect: false },
        { id: 4, text: "제한 없음", isCorrect: false },
      ],
      rationale:
        "N개의 테이블을 조인하려면 최소 N-1개의 연결 고리가 필요합니다.",
      hint: "다리를 몇 개 놓아야 세 섬을 이을 수 있는지 생각해보세요.",
    },
    {
      id: 37,
      category: "Part 4: JOIN 및 복합 응용",
      question: "다음 중 Non-EQUI JOIN(비등가 조인)이 사용되는 사례는?",
      options: [
        { id: 1, text: "사원번호가 일치하는 부서명 찾기", isCorrect: false },
        {
          id: 2,
          text: "고객 등급 테이블에서 점수가 특정 범위(BETWEEN)에 있는 등급 가져오기",
          isCorrect: true,
        },
        { id: 3, text: "이름이 같은 사원 목록 조회", isCorrect: false },
        { id: 4, text: "부서번호가 10번인 사원 조회", isCorrect: false },
      ],
      rationale:
        "등호(=)가 아닌 범위 연산자나 비교 연산자로 조인하는 방식입니다.",
      hint: '"딱 맞는 값"이 아니라 "이 범위 안"인지 따질 때 씁니다.',
    },
    {
      id: 38,
      category: "Part 4: JOIN 및 복합 응용",
      question: "USING 절을 사용한 조인에서 주의할 점은?",
      options: [
        {
          id: 1,
          text: "조인 컬럼의 데이터 타입이 달라도 된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "조인 컬럼에 별칭을 붙이면 오류가 발생한다.",
          isCorrect: true,
        },
        { id: 3, text: "ON 절을 반드시 함께 써야 한다.", isCorrect: false },
        {
          id: 4,
          text: "서로 다른 이름의 컬럼을 묶을 때 쓴다.",
          isCorrect: false,
        },
      ],
      rationale:
        "USING (DEPTNO)와 같이 쓰며, 이 컬럼에는 테이블 별칭을 붙일 수 없습니다.",
      hint: 'NATURAL JOIN과 마찬가지로 "공통 컬럼"에 대한 매너입니다.',
    },
    {
      id: 39,
      category: "Part 4: JOIN 및 복합 응용",
      question:
        "EMP(사원), DEPT(부서), LOC(위치) 3개 테이블 조인 시 올바른 순서는?",
      options: [
        {
          id: 1,
          text: "EMP와 DEPT를 먼저 조인한 결과와 LOC를 조인한다.",
          isCorrect: true,
        },
        { id: 2, text: "3개를 동시에 한 번에 섞는다.", isCorrect: false },
        {
          id: 3,
          text: "LOC와 EMP를 먼저 직접 조인한다. (관계가 없어도)",
          isCorrect: false,
        },
        {
          id: 4,
          text: "상관없으나 보통 1번처럼 순차적으로 처리된다.",
          isCorrect: false,
        },
      ],
      rationale:
        "논리적으로 두 테이블을 먼저 조인하여 가상의 테이블을 만들고, 그 결과를 다음 테이블과 연결합니다.",
      hint: "사원은 부서에 속해 있고, 부서는 특정 위치에 있다는 연결 고리를 따라갑니다.",
    },
    {
      id: 40,
      category: "Part 4: JOIN 및 복합 응용",
      question: "SELECT * FROM A, B; (WHERE 절 없음) 쿼리의 결과는 무엇인가?",
      options: [
        { id: 1, text: "에러가 발생한다.", isCorrect: false },
        { id: 2, text: "두 테이블의 합집합이 나온다.", isCorrect: false },
        { id: 3, text: "CROSS JOIN 결과가 나온다.", isCorrect: true },
        {
          id: 4,
          text: "조인 조건이 없으므로 아무것도 출력되지 않는다.",
          isCorrect: false,
        },
      ],
      rationale:
        "WHERE 절에 조인 조건을 명시하지 않으면 시스템은 자동으로 모든 행을 곱하는 CROSS JOIN을 수행합니다.",
      hint: "실수로 조건을 빼먹었을 때 마주하게 되는 데이터 폭탄입니다.",
    },

    // 실전 추론 10문항 (41~50번)
    {
      id: 41,
      category: "실전 추론",
      question:
        "[CASE문 우선순위] 다음 PRODUCT 테이블을 대상으로 쿼리를 실행했을 때, 'C' 상품의 PRICE_LEVEL은 무엇인가?",
      tables: [
        {
          name: "PRODUCT",
          headers: ["PRODUCT_ID", "NAME", "PRICE"],
          rows: [
            [101, "A", 500],
            [102, "B", 1500],
            [103, "C", 3000],
          ],
        },
      ],
      code: "SELECT NAME,\n       CASE WHEN PRICE >= 1000 THEN 'Gold'\n            WHEN PRICE >= 2000 THEN 'VIP'\n            ELSE 'Normal'\n       END AS PRICE_LEVEL\nFROM PRODUCT;",
      options: [
        { id: 1, text: "Gold", isCorrect: true },
        { id: 2, text: "VIP", isCorrect: false },
        { id: 3, text: "Normal", isCorrect: false },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "CASE문은 만족하는 첫 번째 조건을 만나면 즉시 종료됩니다. 3000은 첫 번째 조건인 PRICE >= 1000을 이미 만족하므로 'Gold'를 반환하고 끝납니다. 'VIP'를 원했다면 큰 숫자 조건부터 먼저 써야 합니다.",
      hint: '"먼저 만나는 놈이 임자"입니다.',
    },
    {
      id: 42,
      category: "실전 추론",
      question:
        "[HAVING절 복합 필터링] 다음 SALES 테이블에서 쿼리 실행 결과로 출력되는 CATEGORY는?",
      tables: [
        {
          name: "SALES",
          headers: ["CATEGORY", "AMOUNT", "COUNT"],
          rows: [
            ["Food", 500, 1],
            ["Food", 600, 1],
            ["App", 1200, 1],
            ["App", 100, 1],
          ],
        },
      ],
      code: "SELECT CATEGORY\nFROM SALES\nGROUP BY CATEGORY\nHAVING COUNT(*) >= 2 AND SUM(AMOUNT) > 1500;",
      options: [
        { id: 1, text: "Food", isCorrect: false },
        { id: 2, text: "App", isCorrect: false },
        { id: 3, text: "Food, App 모두", isCorrect: false },
        { id: 4, text: "결과 없음", isCorrect: true },
      ],
      rationale:
        "Food는 합계가 1100이라 탈락, App은 합계가 1300이라 탈락입니다. 두 조건을 동시에 만족하는 그룹이 없습니다.",
      hint: "그룹화한 후 '합계'와 '개수'를 각각 계산해보세요.",
    },
    {
      id: 43,
      category: "실전 추론",
      question:
        "[NULL과 집계 함수] 다음 MEMBER 테이블에서 AVG(POINT)의 결과값은?",
      tables: [
        {
          name: "MEMBER",
          headers: ["NAME", "POINT"],
          rows: [
            ["KIM", 100],
            ["LEE", 200],
            ["PARK", "NULL"],
          ],
        },
      ],
      code: "SELECT AVG(POINT) FROM MEMBER;",
      options: [
        { id: 1, text: "100", isCorrect: false },
        { id: 2, text: "150", isCorrect: true },
        { id: 3, text: "0", isCorrect: false },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "AVG 함수는 NULL을 제외하고 계산합니다. 따라서 300 / 2 = 150이 됩니다. 분모에서도 NULL인 행은 빠집니다.",
      hint: "집계 함수에게 NULL은 투명인간입니다.",
    },
    {
      id: 44,
      category: "실전 추론",
      question:
        "[3개 테이블 조인 결과] 다음 테이블 관계에서 쿼리 결과로 출력되는 행(Row)의 수는?",
      tables: [
        {
          name: "EMP",
          headers: ["NAME", "DEPTNO"],
          rows: [
            ["(5명)", 10],
            ["(5명)", 20],
          ],
        },
        { name: "DEPT", headers: ["DEPTNO"], rows: [[10], [20], [30]] },
        {
          name: "LOC",
          headers: ["DEPTNO", "CITY"],
          rows: [
            [10, "서울"],
            [20, "부산"],
          ],
        },
      ],
      code: "SELECT E.NAME, L.CITY\nFROM EMP E, DEPT D, LOC L\nWHERE E.DEPTNO = D.DEPTNO\n  AND D.DEPTNO = L.DEPTNO;",
      options: [
        { id: 1, text: "3개", isCorrect: false },
        { id: 2, text: "5개", isCorrect: false },
        { id: 3, text: "10개", isCorrect: true },
        { id: 4, text: "15개", isCorrect: false },
      ],
      rationale:
        "10번 부서 5명은 서울로, 20번 부서 5명은 부산으로 매칭됩니다. 총 10명의 사원이 모두 매칭되므로 10행이 출력됩니다.",
      hint: "사원 한 명당 최종적으로 어떤 도시가 붙는지 따라가 보세요.",
    },
    {
      id: 45,
      category: "실전 추론",
      question:
        "[실행 순서와 별칭 오류] 다음 중 실행 시 오류가 발생하는 쿼리는?",
      options: [
        {
          id: 1,
          text: "SELECT NAME AS 이름 FROM USER ORDER BY 이름;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT NAME AS 이름 FROM USER WHERE NAME = 'KIM';",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT NAME AS 이름 FROM USER WHERE 이름 = 'KIM';",
          isCorrect: true,
        },
        {
          id: 4,
          text: "SELECT NAME FROM USER WHERE NAME LIKE 'K%';",
          isCorrect: false,
        },
      ],
      rationale:
        "WHERE 절은 SELECT 절보다 먼저 실행됩니다. 따라서 WHERE 절은 아직 생성되지 않은 별칭인 '이름'을 알 수 없습니다.",
      hint: "프-웨-셀-오! (FROM-WHERE-SELECT-ORDER BY)",
    },
    {
      id: 46,
      category: "실전 추론",
      question:
        "[LEFT JOIN과 NULL] 다음 두 테이블을 LEFT OUTER JOIN 했을 때, 결과에서 ORDER_ID가 NULL인 사원의 이름은?\n\n* EMP: KIM, LEE (2명)\n* ORDERS: KIM만 1건 주문",
      code: "SELECT E.NAME, O.ORDER_ID\nFROM EMP E LEFT OUTER JOIN ORDERS O\nON E.NAME = O.NAME;",
      options: [
        { id: 1, text: "KIM", isCorrect: false },
        { id: 2, text: "LEE", isCorrect: true },
        { id: 3, text: "KIM, LEE", isCorrect: false },
        { id: 4, text: "없음", isCorrect: false },
      ],
      rationale:
        "LEFT JOIN은 왼쪽(EMP)을 다 보여줍니다. KIM은 주문이 있어 ID가 붙지만, LEE는 주문이 없으므로 ID 자리에 NULL이 채워집니다.",
      hint: '"주문 안 한 사람 찾기"의 전형적인 문제입니다.',
    },
    {
      id: 47,
      category: "실전 추론",
      question: "[산술 연산과 NULL] 다음 쿼리의 결과값으로 올바른 것은?",
      code: "SELECT NVL(100 + NULL, 50) FROM DUAL;",
      options: [
        { id: 1, text: "150", isCorrect: false },
        { id: 2, text: "100", isCorrect: false },
        { id: 3, text: "50", isCorrect: true },
        { id: 4, text: "NULL", isCorrect: false },
      ],
      rationale:
        "100 + NULL의 결과는 NULL입니다. NVL(NULL, 50)이 되므로 최종 결과는 50입니다.",
      hint: "괄호 안의 연산부터 천천히 해결하세요.",
    },
    {
      id: 48,
      category: "실전 추론",
      question:
        "[DISTINCT의 범위] 다음 테이블에서 쿼리 실행 시 출력되는 행의 수는?",
      tables: [
        {
          name: "TABLE",
          headers: ["DEPT", "JOB"],
          rows: [
            [10, "CLERK"],
            [10, "CLERK"],
            [10, "MANAGER"],
            [20, "CLERK"],
          ],
        },
      ],
      code: "SELECT DISTINCT DEPT, JOB FROM TABLE;",
      options: [
        { id: 1, text: "1개", isCorrect: false },
        { id: 2, text: "2개", isCorrect: false },
        { id: 3, text: "3개", isCorrect: true },
        { id: 4, text: "4개", isCorrect: false },
      ],
      rationale:
        "DISTINCT는 나열된 모든 컬럼의 조합을 하나로 봅니다. (10, CLERK) 조합이 2개이므로 하나로 합쳐져 총 3쌍이 남습니다.",
      hint: "(부서+직업) 세트가 중복되는지 보세요.",
    },
    {
      id: 49,
      category: "실전 추론",
      question:
        "[비등가 조인 추론] 사원 'KIM'의 급여가 2500일 때, 다음 쿼리에서 KIM에게 부여될 GRADE는?",
      tables: [
        {
          name: "SAL_GRADE",
          headers: ["GRADE", "MIN_SAL", "MAX_SAL"],
          rows: [
            ["A", 1000, 2000],
            ["B", 2001, 3000],
          ],
        },
      ],
      code: "SELECT S.GRADE\nFROM EMP E, SAL_GRADE S\nWHERE E.NAME = 'KIM'\n  AND E.SAL BETWEEN S.MIN_SAL AND S.MAX_SAL;",
      options: [
        { id: 1, text: "A등급", isCorrect: false },
        { id: 2, text: "B등급", isCorrect: true },
        { id: 3, text: "NULL", isCorrect: false },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale:
        "2500은 2001과 3000 사이(BETWEEN)에 해당하므로 B등급과 매칭됩니다.",
      hint: "숫자가 어느 범위 바구니에 들어가는지 찾으세요.",
    },
    {
      id: 50,
      category: "실전 추론",
      question:
        "[문자 함수와 인덱스] SELECT SUBSTR('20260214', 5, 2) FROM DUAL;의 결과로 올바른 것은?",
      options: [
        { id: 1, text: "2026", isCorrect: false },
        { id: 2, text: "0214", isCorrect: false },
        { id: 3, text: "02", isCorrect: true },
        { id: 4, text: "14", isCorrect: false },
      ],
      rationale:
        "5번째 글자인 '0'부터 시작하여 2글자를 추출하므로 '02'가 나옵니다.",
      hint: "마케팅 데이터에서 '월'만 뽑아낼 때 아주 많이 쓰는 방식입니다.",
    },
  ],
  8: [
    {
      id: 1,
      category: "서브쿼리/뷰 기초",
      question: "다음 중 서브쿼리에 대한 설명으로 가장 적절하지 않은 것은?",
      options: [
        {
          id: 1,
          text: "서브쿼리는 항상 괄호 ()로 감싸야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "서브쿼리는 메인 쿼리의 컬럼을 참조할 수 있다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "메인 쿼리는 서브쿼리의 컬럼을 자유롭게 참조할 수 있다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "서브쿼리 내에서는 원칙적으로 ORDER BY 절을 사용할 수 없다.",
          isCorrect: false,
        },
      ],
      rationale:
        "서브쿼리는 메인 쿼리의 컬럼을 사용할 수 있는 '상속' 구조를 가지지만, 반대로 메인 쿼리가 서브쿼리의 컬럼을 사용하는 것은 불가능합니다.",
      hint: "'마트료시카' 인형을 떠올려 보세요. 안쪽 인형은 바깥쪽을 알 수 있지만, 바깥쪽은 안쪽의 세부 내용을 바로 꺼내 쓸 수 없습니다.",
    },
    {
      id: 2,
      category: "서브쿼리/뷰 기초",
      question: "다음 중 뷰(VIEW)의 특징으로 보기 어려운 것은?",
      options: [
        {
          id: 1,
          text: "독립성: 테이블 구조가 바뀌어도 뷰 정의만 수정하면 응용 프로그램에 영향이 적다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "보안성: 사용자에게 숨기고 싶은 특정 컬럼을 제외하고 노출할 수 있다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "영속성: 뷰를 생성하면 실제 데이터가 별도의 저장 공간에 물리적으로 복사된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "편리성: 복잡한 JOIN 쿼리를 뷰로 만들어 간단하게 조회할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "뷰는 '가상 테이블'로, 실제 데이터를 저장하지 않고 쿼리 정의(TEXT)만 저장합니다.",
      hint: "뷰는 거울과 같습니다. 물체(데이터)는 테이블에 있고, 뷰는 그 모습을 비춰줄 뿐입니다.",
    },
    {
      id: 3,
      category: "서브쿼리/뷰 기초",
      question:
        "SELECT 절에 사용되어 마치 하나의 컬럼처럼 동작하는 서브쿼리의 명칭은?",
      options: [
        { id: 1, text: "인라인 뷰(Inline View)", isCorrect: false },
        { id: 2, text: "스칼라 서브쿼리(Scalar Subquery)", isCorrect: true },
        { id: 3, text: "중첩 서브쿼리(Nested Subquery)", isCorrect: false },
        { id: 4, text: "연관 서브쿼리(Correlated Subquery)", isCorrect: false },
      ],
      rationale:
        "SELECT 절에 위치하여 단일 행, 단일 컬럼 값을 반환하는 서브쿼리를 '스칼라 서브쿼리'라고 부릅니다.",
      hint: "'스칼라'는 수학에서 단일 값을 의미하는 용어입니다.",
    },
    {
      id: 4,
      category: "서브쿼리/뷰 기초",
      question:
        "다음 중 뷰를 생성(또는 수정)할 때 사용하는 SQL 명령어로 옳은 것은?",
      options: [
        { id: 1, text: "UPDATE VIEW", isCorrect: false },
        { id: 2, text: "ALTER VIEW", isCorrect: false },
        { id: 3, text: "CREATE OR REPLACE VIEW", isCorrect: true },
        { id: 4, text: "MODIFY VIEW", isCorrect: false },
      ],
      rationale:
        "뷰의 정의를 변경할 때는 ALTER 대신 DROP 후 CREATE 하거나, CREATE OR REPLACE VIEW를 사용하여 덮어쓰기 합니다.",
      hint: "뷰는 구조를 수정하는 게 아니라 '다시 정의'하는 개념입니다.",
    },
    {
      id: 5,
      category: "서브쿼리/뷰 기초",
      question: "단일 행 서브쿼리 연산자가 아닌 것은?",
      options: [
        { id: 1, text: "=", isCorrect: false },
        { id: 2, text: "<>", isCorrect: false },
        { id: 3, text: ">=", isCorrect: false },
        { id: 4, text: "ANY", isCorrect: true },
      ],
      rationale:
        "ANY, IN, ALL 등은 서브쿼리 결과가 여러 개일 때 사용하는 '다중 행 연산자'입니다.",
      hint: "= 뒤에 결과가 2개 나오면 에러가 난다는 사실을 기억하세요!",
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
        { id: 4, text: "상호연관 서브쿼리", isCorrect: false },
      ],
      rationale:
        "FROM 절에 위치하여 가상의 테이블 역할을 하는 서브쿼리를 '인라인 뷰'라고 합니다.",
      hint: '"FROM 절에 있는 쿼리는 테이블 대타!"',
    },
    {
      id: 7,
      category: "서브쿼리 연산자/위치",
      question: "다음 중 다중 행 연산자와 그 의미가 바르게 연결되지 않은 것은?",
      options: [
        {
          id: 1,
          text: "IN : 서브쿼리 결과 중 하나라도 일치하면 참",
          isCorrect: false,
        },
        {
          id: 2,
          text: "> ALL : 서브쿼리 결과의 모든 값보다 커야 함 (최대값보다 큼)",
          isCorrect: false,
        },
        {
          id: 3,
          text: "< ANY : 서브쿼리 결과의 모든 값보다 작아야 함 (최대값보다 작음)",
          isCorrect: true,
        },
        {
          id: 4,
          text: "EXISTS : 서브쿼리 결과가 1건이라도 존재하면 참",
          isCorrect: false,
        },
      ],
      rationale:
        "< ANY는 결과값 중 최소한 하나보다만 작으면 되므로, 결과의 '최대값'보다 작으면 참이 됩니다. (모든 값보다 작으려면 < ALL 사용)",
      hint: "ANY는 '어느 하나라도', ALL은 '모조리 다'라고 해석하세요.",
    },
    {
      id: 8,
      category: "서브쿼리 연산자/위치",
      question:
        "다음 SQL의 실행 결과로 적절한 것은? (EMP 테이블의 최고 급여는 5000이다)",
      code: "SELECT ENAME FROM EMP \nWHERE SAL >= (SELECT MAX(SAL) FROM EMP);",
      options: [
        { id: 1, text: "급여가 5000인 사원들만 조회된다.", isCorrect: true },
        { id: 2, text: "모든 사원이 조회된다.", isCorrect: false },
        { id: 3, text: "문법 오류가 발생한다.", isCorrect: false },
        { id: 4, text: "아무도 조회되지 않는다.", isCorrect: false },
      ],
      rationale:
        "서브쿼리에서 MAX(SAL)은 단일 값을 반환하므로 = 또는 >= 연산자와 함께 사용 가능한 단일 행 서브쿼리입니다.",
      hint: "집계 함수(MAX, MIN, AVG)가 사용된 서브쿼리는 보통 1개의 값만 뱉어냅니다.",
    },
    {
      id: 9,
      category: "서브쿼리 연산자/위치",
      question:
        "다음 중 뷰(VIEW)를 통해 DML(INSERT, UPDATE 등)을 수행할 수 없는 경우는?",
      options: [
        {
          id: 1,
          text: "뷰 정의에 단일 테이블만 사용된 경우",
          isCorrect: false,
        },
        { id: 2, text: "뷰 정의에 GROUP BY 절이 포함된 경우", isCorrect: true },
        {
          id: 3,
          text: "뷰 정의에 WHERE 절 조건이 포함된 경우",
          isCorrect: false,
        },
        {
          id: 4,
          text: "뷰 정의 시 모든 컬럼에 별칭을 사용한 경우",
          isCorrect: false,
        },
      ],
      rationale:
        "GROUP BY, DISTINCT, 집계 함수 등이 포함된 뷰는 데이터의 원천이 불분명해지므로 DML 작업이 불가능합니다.",
      hint: '"뭉쳐진 데이터를 어떻게 낱개로 수정하겠어?"라고 생각하면 쉽습니다.',
    },
    {
      id: 10,
      category: "서브쿼리 연산자/위치",
      question:
        "서브쿼리가 메인 쿼리의 컬럼을 포함하고 있어, 메인 쿼리의 각 행마다 서브쿼리가 반복 실행되는 형태는?",
      options: [
        { id: 1, text: "비연관 서브쿼리", isCorrect: false },
        { id: 2, text: "인라인 뷰", isCorrect: false },
        { id: 3, text: "연관 서브쿼리", isCorrect: true },
        { id: 4, text: "스칼라 서브쿼리", isCorrect: false },
      ],
      rationale:
        "메인 쿼리의 값을 서브쿼리에 전달하여 조건에 맞는지 확인하는 방식을 '연관(Correlated) 서브쿼리'라고 합니다.",
      hint: "서브쿼리 안에 메인 테이블의 별칭(Alias)이 들어가 있는지 확인하세요.",
    },
    {
      id: 11,
      category: "서브쿼리 함정/주의사항",
      question:
        "다음 SQL의 결과로 조회되는 행의 개수는? (EMP 테이블의 MGR 컬럼에 NULL이 하나 존재한다고 가정한다)",
      code: "SELECT COUNT(*) FROM EMP\nWHERE EMPNO NOT IN (SELECT MGR FROM EMP);",
      options: [
        { id: 1, text: "MGR에 없는 사원 수만큼 출력", isCorrect: false },
        { id: 2, text: "전체 사원 수 출력", isCorrect: false },
        { id: 3, text: "0건 출력", isCorrect: true },
        { id: 4, text: "에러 발생", isCorrect: false },
      ],
      rationale:
        "NOT IN 연산 시 서브쿼리 결과에 NULL이 포함되어 있으면, 비교 결과가 모두 UNKNOWN이 되어 최종적으로 아무것도 조회되지 않습니다. (매우 빈출!)",
      hint: "NOT IN과 NULL이 만나면 '폭탄'이 터져서 결과가 다 사라진다고 외우세요.",
    },
    {
      id: 12,
      category: "서브쿼리 함정/주의사항",
      question: "다음 중 스칼라 서브쿼리에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "서브쿼리의 결과가 2건 이상이어도 첫 번째 행을 사용한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "서브쿼리의 결과가 0건(데이터 없음)이면 에러가 발생한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "서브쿼리의 결과가 0건이면 NULL을 반환한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "가독성을 위해 주로 FROM 절에 사용한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "스칼라 서브쿼리는 결과가 없으면 에러 대신 NULL을 반환하며, 2건 이상이면 에러가 발생합니다.",
      hint: "SELECT 절에 넣었는데 값이 없으면 그냥 빈칸(NULL)이 나온다고 생각하세요.",
    },
    {
      id: 13,
      category: "서브쿼리 함정/주의사항",
      question: "다음 중 서브쿼리를 사용할 수 없는 절은?",
      options: [
        { id: 1, text: "SELECT 절", isCorrect: false },
        { id: 2, text: "WHERE 절", isCorrect: false },
        { id: 3, text: "HAVING 절", isCorrect: false },
        { id: 4, text: "GROUP BY 절", isCorrect: true },
      ],
      rationale: "SQL 표준상 GROUP BY 절에는 서브쿼리를 사용할 수 없습니다.",
      hint: "그룹을 묶는 기준 자체를 쿼리로 동적으로 만들 수는 없습니다.",
    },
    {
      id: 14,
      category: "서브쿼리 함정/주의사항",
      question:
        "다음 SQL 문장의 빈칸에 들어갈 연산자로 부서번호 30번 사원들 중 급여가 가장 적은 사람보다 더 적게 받는 사원을 조회하고자 할 때 적절한 것은?",
      code: "SELECT ENAME, SAL FROM EMP\nWHERE SAL < (빈칸) (SELECT SAL FROM EMP WHERE DEPTNO = 30);",
      options: [
        { id: 1, text: "IN", isCorrect: false },
        { id: 2, text: "ANY", isCorrect: false },
        { id: 3, text: "ALL", isCorrect: true },
        { id: 4, text: "EXISTS", isCorrect: false },
      ],
      rationale:
        '"가장 적은 사람보다 더 적다"는 것은 "모든 사람보다 적다"는 뜻이므로 < ALL을 사용해야 합니다.',
      hint: "< ALL은 최소값보다 작음, > ALL은 최대값보다 큼!",
    },
    {
      id: 15,
      category: "서브쿼리 함정/주의사항",
      question: "뷰(VIEW)를 삭제할 때 발생하는 현상으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "뷰를 참조하고 있는 다른 뷰들은 자동으로 삭제된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "뷰가 참조하고 있는 원본 테이블의 데이터도 함께 삭제된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "뷰의 정의(TEXT)만 삭제되고 원본 테이블에는 영향이 없다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "뷰를 삭제하려면 반드시 원본 테이블을 먼저 삭제해야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "뷰는 가상 테이블이므로 정의만 삭제될 뿐 실제 데이터(테이블)에는 영향을 주지 않습니다.",
      hint: "거울을 깬다고 해서 실물이 사라지지는 않습니다.",
    },
    {
      id: 16,
      category: "서브쿼리/뷰 심화",
      question: "다음 중 뷰(VIEW)에 대한 설명으로 가장 부적절한 것은?",
      options: [
        {
          id: 1,
          text: "뷰는 자신만의 인덱스를 생성하여 조회 성능을 높일 수 있다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "뷰는 복잡한 질의를 단순화하여 가독성을 높여준다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "뷰를 정의할 때 ORDER BY 절을 사용할 수 있다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "테이블 구조가 변경되어도 뷰의 정의를 통해 데이터 독립성을 확보할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "뷰는 실제 데이터를 가지지 않으므로 자신만의 물리적 인덱스를 가질 수 없습니다. (원본 테이블의 인덱스를 활용할 뿐입니다.)",
      hint: "인덱스는 '데이터 위치'를 저장하는 것인데, 뷰는 데이터가 없으니 위치를 저장할 수 없겠죠?",
    },
    {
      id: 17,
      category: "서브쿼리/뷰 심화",
      question: "아래 SQL의 실행 결과와 동일한 결과를 내는 구문은?",
      code: "SELECT ENAME FROM EMP E\nWHERE EXISTS (SELECT 1 FROM DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC = 'SEOUL');",
      options: [
        {
          id: 1,
          text: "SELECT ENAME FROM EMP WHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')",
          isCorrect: true,
        },
        {
          id: 2,
          text: "SELECT ENAME FROM EMP WHERE DEPTNO = (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT ENAME FROM EMP WHERE DEPTNO ANY (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SELECT ENAME FROM EMP WHERE DEPTNO ALL (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL')",
          isCorrect: false,
        },
      ],
      rationale:
        "EXISTS는 존재 여부만 확인하며, 이는 보통 IN 연산자를 사용한 비연관 서브쿼리와 동일한 결과를 냅니다. (단, 서울에 해당하는 부서가 여러 개일 수 있으므로 =은 위험합니다.)",
      hint: "EXISTS는 IN과 친구라고 생각하면 편합니다.",
    },
    {
      id: 18,
      category: "서브쿼리/뷰 심화",
      question:
        "다음 중 연관 서브쿼리(Correlated Subquery)의 특징이 아닌 것은?",
      options: [
        {
          id: 1,
          text: "서브쿼리 내에 메인 쿼리의 컬럼이 존재한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "메인 쿼리의 결과가 서브쿼리로 전달되고, 다시 그 결과가 메인 쿼리에 영향을 준다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "서브쿼리가 먼저 실행되어 단 한 번만 결과를 메인 쿼리에 전달한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "성능상 비연관 서브쿼리보다 불리할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "연관 서브쿼리는 메인 쿼리의 각 행을 읽을 때마다 서브쿼리가 반복해서 실행됩니다. 한 번만 실행되는 것은 비연관 서브쿼리의 특징입니다.",
      hint: "'연관'되어 있으니 계속 서로 주고받아야 해서 바쁘다고 생각하세요.",
    },
    {
      id: 19,
      category: "서브쿼리/뷰 심화",
      question: "SQL Server(MSSQL) 환경에서 다음 중 오류가 발생하는 쿼리는?",
      options: [
        { id: 1, text: "SELECT 절의 스칼라 서브쿼리", isCorrect: false },
        { id: 2, text: "FROM 절의 인라인 뷰", isCorrect: false },
        {
          id: 3,
          text: "다중 컬럼 서브쿼리 (예: WHERE (A, B) IN (SELECT A, B FROM ... ))",
          isCorrect: true,
        },
        { id: 4, text: "WHERE 절의 다중 행 서브쿼리", isCorrect: false },
      ],
      rationale:
        "다중 컬럼 서브쿼리(여러 컬럼을 한꺼번에 비교)는 오라클에서는 지원하지만 SQL Server에서는 지원하지 않는 문법입니다. (시험 단골 포인트!)",
      hint: '"가로로 여러 개 묶어서 비교하는 건 오라클 전용!"',
    },
    {
      id: 20,
      category: "서브쿼리/뷰 심화",
      question:
        "다음은 TOP-N 쿼리를 작성하는 SQL이다. 빈칸에 들어갈 내용으로 적절한 것은?",
      code: "SELECT ENAME, SAL\nFROM (SELECT ENAME, SAL FROM EMP (  빈칸  ))\nWHERE ROWNUM <= 5;",
      options: [
        { id: 1, text: "GROUP BY SAL", isCorrect: false },
        { id: 2, text: "ORDER BY SAL DESC", isCorrect: true },
        { id: 3, text: "HAVING SAL > 3000", isCorrect: false },
        { id: 4, text: "WHERE SAL IS NOT NULL", isCorrect: false },
      ],
      rationale:
        "오라클에서 상위 N개를 뽑으려면 인라인 뷰 안에서 먼저 ORDER BY로 정렬을 한 뒤, 바깥에서 ROWNUM으로 잘라야 합니다.",
      hint: '"서브쿼리에서 예외적으로 정렬이 허용되는 유일한 케이스"가 바로 이것입니다!',
    },
  ],
  9: [
    {
      id: 1,
      category: "집합 연산자 기초",
      question:
        "집합 연산자를 사용하여 두 개의 SELECT 문을 결합할 때, 반드시 지켜야 할 규칙으로 옳지 않은 것은?",
      options: [
        {
          id: 1,
          text: "두 쿼리의 컬럼 개수가 동일해야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "각 컬럼의 데이터 타입이 상호 호환 가능해야 한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "두 쿼리의 컬럼 명칭이 반드시 동일해야 한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "SELECT 절의 컬럼 순서가 일치해야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "컬럼 명칭이 달라도 데이터 타입과 개수만 맞으면 결합이 가능합니다. 결과의 컬럼명은 첫 번째 SELECT 문을 따릅니다.",
      hint: "'틀(구조)'은 맞춰야 하지만, '이름표'는 첫 번째 사람 것을 빌려 쓴다고 생각하세요.",
    },
    {
      id: 2,
      category: "집합 연산자 기초",
      question:
        "다음 중 두 집합의 중복된 행을 제거하고 합집합 결과를 반환하는 연산자는?",
      options: [
        { id: 1, text: "UNION", isCorrect: true },
        { id: 2, text: "UNION ALL", isCorrect: false },
        { id: 3, text: "INTERSECT", isCorrect: false },
        { id: 4, text: "MINUS", isCorrect: false },
      ],
      rationale:
        "UNION은 합집합을 구하면서 중복을 제거하고 정렬을 수행합니다. UNION ALL은 중복을 포함합니다.",
      hint: "UNION은 '유니크(Unique)'하게 합친다고 기억하세요.",
    },
    {
      id: 3,
      category: "집합 연산자 기초",
      question:
        "다음 중 두 테이블에서 공통으로 존재하는 행만 추출하고 싶을 때 사용하는 집합 연산자는?",
      options: [
        { id: 1, text: "UNION", isCorrect: false },
        { id: 2, text: "MINUS", isCorrect: false },
        { id: 3, text: "INTERSECT", isCorrect: true },
        { id: 4, text: "EXCEPT", isCorrect: false },
      ],
      rationale:
        "INTERSECT는 교집합을 의미하며 양쪽에 모두 존재하는 데이터만 결과로 냅니다.",
      hint: "벤다이어그램의 겹치는 부분을 떠올려 보세요.",
    },
    {
      id: 4,
      category: "집합 연산자 기초",
      question: "SQL Server 환경에서 차집합을 구하기 위해 사용하는 연산자는?",
      options: [
        { id: 1, text: "MINUS", isCorrect: false },
        { id: 2, text: "EXCEPT", isCorrect: true },
        { id: 3, text: "DIFFERENCE", isCorrect: false },
        { id: 4, text: "SUBTRACT", isCorrect: false },
      ],
      rationale:
        "Oracle은 MINUS를 사용하지만, SQL Server(T-SQL)는 EXCEPT를 사용합니다.",
      hint: '"Oracle은 마이너스(-), MS는 익셉트(Except)!"',
    },
    {
      id: 5,
      category: "그룹 함수 기초",
      question:
        "GROUP BY ROLLUP(DEPTNO) 쿼리를 실행했을 때 나오는 결과의 구성으로 옳은 것은?",
      options: [
        { id: 1, text: "부서별 합계만 출력된다.", isCorrect: false },
        { id: 2, text: "전체 총계만 출력된다.", isCorrect: false },
        {
          id: 3,
          text: "부서별 합계와 전체 총계가 함께 출력된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "부서별 합계와 직업별 합계가 함께 출력된다.",
          isCorrect: false,
        },
      ],
      rationale:
        "ROLLUP은 나열된 컬럼에 대해 계층적인 소계와 전체 총계를 생성합니다.",
      hint: '"롤(ROLL)업은 아래에서 위로 말아 올리듯 총계까지 낸다!"',
    },
    {
      id: 6,
      category: "집합 연산자 중급",
      question:
        "집합 연산자를 사용한 SQL 문에서 ORDER BY 절의 위치로 가장 적절한 것은?",
      options: [
        { id: 1, text: "첫 번째 SELECT 문 바로 뒤", isCorrect: false },
        { id: 2, text: "각 SELECT 문 마다 각각 사용", isCorrect: false },
        {
          id: 3,
          text: "마지막 SELECT 문의 맨 마지막에 딱 한 번 사용",
          isCorrect: true,
        },
        { id: 4, text: "집합 연산자 바로 앞에 사용", isCorrect: false },
      ],
      rationale:
        "ORDER BY는 집합 연산으로 합쳐진 전체 결과에 대해 적용되므로 맨 마지막에 위치해야 합니다.",
      hint: "모든 데이터가 다 모인 다음에 정렬(줄 세우기)을 해야 의미가 있겠죠?",
    },
    {
      id: 7,
      category: "집합 연산자 중급",
      question:
        "UNION과 UNION ALL의 성능 차이에 대한 설명으로 가장 적절한 것은?",
      options: [
        {
          id: 1,
          text: "UNION은 중복 제거를 위해 내부적으로 정렬을 수행하므로 UNION ALL보다 느리다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "UNION ALL은 중복을 확인해야 하므로 UNION보다 느리다.",
          isCorrect: false,
        },
        { id: 3, text: "두 연산자의 성능 차이는 없다.", isCorrect: false },
        {
          id: 4,
          text: "UNION ALL은 인덱스를 사용할 수 없어 UNION보다 느리다.",
          isCorrect: false,
        },
      ],
      rationale:
        "UNION은 중복 제거(Distinct)를 위해 데이터 정렬(Sort) 과정을 거치므로 시스템 부하가 더 큽니다.",
      hint: '"중복 검사 안 하고 그냥 붙이는 UNION ALL이 광속이다!"',
    },
    {
      id: 8,
      category: "그룹 함수 중급",
      question: "GROUP BY ROLLUP(A, B)의 집계 조합으로 옳은 것은?",
      options: [
        { id: 1, text: "(A, B), (A), ()", isCorrect: true },
        { id: 2, text: "(A, B), (B), ()", isCorrect: false },
        { id: 3, text: "(A, B), (A), (B)", isCorrect: false },
        { id: 4, text: "(A), (B), ()", isCorrect: false },
      ],
      rationale:
        "ROLLUP은 오른쪽 인수를 하나씩 제거하며 집계합니다. (A, B) -> (A) -> () 순서입니다.",
      hint: "오른쪽 끝에서부터 하나씩 지우개로 지워나간다고 생각하세요.",
    },
    {
      id: 9,
      category: "그룹 함수 중급",
      question:
        "다음 중 모든 가능한 조합에 대해 다차원적인 집계를 생성하는 함수는?",
      options: [
        { id: 1, text: "ROLLUP", isCorrect: false },
        { id: 2, text: "CUBE", isCorrect: true },
        { id: 3, text: "GROUPING SETS", isCorrect: false },
        { id: 4, text: "RANK", isCorrect: false },
      ],
      rationale:
        "CUBE는 결합 가능한 모든 조합(2^N)에 대해 소계와 총계를 구합니다.",
      hint: "정육면체(Cube)처럼 모든 면을 다 집계한다고 이해하세요.",
    },
    {
      id: 10,
      category: "집합 연산자 중급",
      question: "집합 연산자 사용 시 데이터 타입에 대한 설명 중 옳은 것은?",
      options: [
        {
          id: 1,
          text: "문자와 숫자를 결합하면 자동으로 문자로 변환되어 결합된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "데이터 타입이 달라도 컬럼 순서만 맞으면 오류가 발생하지 않는다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "데이터 타입은 반드시 일치하거나 상호 호환 가능한 유형이어야 한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "날짜형과 숫자형은 집합 연산이 불가능하다.",
          isCorrect: false,
        },
      ],
      rationale:
        "집합 연산자는 암시적 형변환을 일부 지원하지만, 원칙적으로 데이터 타입이 호환되어야 하며 다를 경우 오류가 발생할 확률이 높습니다.",
      hint: '"사과는 사과끼리, 배는 배끼리 쌓아야 안 무너집니다."',
    },
    {
      id: 11,
      category: "그룹 함수 상급",
      question:
        "GROUP BY CUBE(A, B, C)를 수행했을 때 생성되는 집계 조합의 총 개수는? (전체 총계 포함)",
      options: [
        { id: 1, text: "3개", isCorrect: false },
        { id: 2, text: "4개", isCorrect: false },
        { id: 3, text: "7개", isCorrect: false },
        { id: 4, text: "8개", isCorrect: true },
      ],
      rationale:
        "CUBE의 집계 조합은 2^N개입니다. 인수가 3개이므로 2^3 = 8개입니다.",
      hint: "조합(Combination)의 모든 경우의 수입니다.",
    },
    {
      id: 12,
      category: "집합 연산자 상급",
      question: "INTERSECT 연산자에 대한 설명으로 적절하지 않은 것은?",
      options: [
        { id: 1, text: "두 집합의 공통된 행을 반환한다.", isCorrect: false },
        { id: 2, text: "중복된 행은 하나로 표시된다.", isCorrect: false },
        { id: 3, text: "내부적으로 정렬 작업을 수행한다.", isCorrect: false },
        {
          id: 4,
          text: "첫 번째 집합에만 존재하는 행을 반환한다.",
          isCorrect: true,
        },
      ],
      rationale: "④번 설명은 MINUS(또는 EXCEPT)에 대한 설명입니다.",
      hint: "INTERSECT는 '교집합'입니다.",
    },
    {
      id: 13,
      category: "그룹 함수 상급",
      question:
        "GROUP BY ROLLUP(A, B)와 GROUP BY ROLLUP(B, A)의 결과에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "두 결과는 항상 동일하다.", isCorrect: false },
        {
          id: 2,
          text: "계층 구조가 다르므로 소계의 구성과 행의 수가 달라질 수 있다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "전체 총계 행의 값이 서로 다르게 계산된다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "두 함수 모두 모든 조합의 소계를 출력한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "ROLLUP은 인수의 순서에 따라 계층(Hierarchy)이 결정되므로 순서가 중요합니다.",
      hint: '"부서별 직업합계"와 "직업별 부서합계"는 소계의 의미가 다릅니다.',
    },
    {
      id: 14,
      category: "그룹 함수 상급",
      question:
        "다음 중 원하는 집계 대상 컬럼을 자유롭게 나열하여 특정 소계만 구하고 싶을 때 가장 효율적인 함수는?",
      options: [
        { id: 1, text: "ROLLUP", isCorrect: false },
        { id: 2, text: "CUBE", isCorrect: false },
        { id: 3, text: "GROUPING SETS", isCorrect: true },
        { id: 4, text: "CASE WHEN", isCorrect: false },
      ],
      rationale:
        "GROUPING SETS는 지정한 조합만 집계하므로 불필요한 연산을 줄이고 유연하게 사용 가능합니다.",
      hint: '"원하는 것만 쏙쏙 골라 담는 그룹핑 세츠!"',
    },
    {
      id: 15,
      category: "그룹 함수 상급",
      question: "GROUPING 함수가 반환하는 값의 의미로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "해당 행이 실제 데이터 행이면 1, 집계 행이면 0을 반환한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "해당 행이 소계/총계를 위해 생성된 행이면 1, 아니면 0을 반환한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "해당 컬럼의 NULL 값을 0으로 변환한다.",
          isCorrect: false,
        },
        { id: 4, text: "그룹화된 행의 개수를 반환한다.", isCorrect: false },
      ],
      rationale:
        "GROUPING 함수는 집계용으로 생성된 NULL을 판별하기 위해 사용하며, 집계 행일 때 1을 반환합니다.",
      hint: '"집계 행이 맞나요? (1: Yes / 0: No)"',
    },
    {
      id: 16,
      category: "그룹 함수 심화",
      question: "다음 중 GROUP BY ROLLUP(A, B)와 동일한 결과를 반환하는 것은?",
      options: [
        {
          id: 1,
          text: "GROUP BY GROUPING SETS((A, B), (A), ())",
          isCorrect: true,
        },
        {
          id: 2,
          text: "GROUP BY GROUPING SETS((A, B), (B), ())",
          isCorrect: false,
        },
        { id: 3, text: "GROUP BY CUBE(A, B)", isCorrect: false },
        { id: 4, text: "GROUP BY A, B UNION ALL GROUP BY A", isCorrect: false },
      ],
      rationale:
        "ROLLUP의 계층 구조를 GROUPING SETS로 풀어서 표현하면 (A,B), (A), ()와 같습니다. ()는 전체 총계를 의미합니다.",
      hint: "시험에 정말 자주 나옵니다! ROLLUP을 수동으로 구현하는 법을 익히세요.",
    },
    {
      id: 17,
      category: "집합 연산자 심화",
      question: "집합 연산자 사용 시 NULL 값의 처리에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "집합 연산자는 NULL을 값으로 인식하지 못해 무시한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "두 행의 컬럼 값이 모두 NULL이면 서로 다른 값으로 간주하여 중복 제거가 안 된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "집합 연산자는 NULL을 서로 동일한 값으로 인식하여 중복을 제거한다.",
          isCorrect: true,
        },
        { id: 4, text: "UNION ALL에서만 NULL이 표시된다.", isCorrect: false },
      ],
      rationale:
        "WHERE 절 비교와 달리, 집합 연산자(UNION, INTERSECT 등)는 NULL을 같은 값으로 취급하여 중복을 제거합니다.",
      hint: '"집합 연산자 세계에서는 NULL끼리 친구(동일함)입니다."',
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
        { id: 4, text: "오류가 발생한다.", isCorrect: false },
      ],
      rationale:
        "(JOB)은 직업별 합계를, ()는 빈 괄호로 전체 총계를 의미합니다.",
      hint: "GROUPING SETS 안의 빈 괄호는 GRAND TOTAL의 마법 주문입니다.",
    },
    {
      id: 19,
      category: "집합 연산자 심화",
      question:
        "성능 최적화 관점에서 UNION ALL이 가능한 상황임에도 UNION을 사용하는 것이 부적절한 이유는?",
      options: [
        {
          id: 1,
          text: "UNION은 결과가 항상 더 적게 나오기 때문이다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "불필요한 정렬(Sort) 부하가 발생하여 응답 속도가 느려지기 때문이다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "UNION은 인덱스 스캔을 강제하기 때문이다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "UNION은 서브쿼리 내에서 사용이 불가능하기 때문이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "데이터의 중복이 없다는 것을 이미 알고 있다면, 정렬 부하가 있는 UNION보다는 UNION ALL이 훨씬 효율적입니다.",
      hint: '"DB에게 힘든 정렬 시키지 마세요!"',
    },
    {
      id: 20,
      category: "그룹 함수 심화",
      question:
        "아래 SQL의 빈칸에 들어갈 코드로 '부서 합계'라는 명칭을 부여하고 싶을 때 가장 적절한 것은?",
      code: "SELECT \n    CASE WHEN (  빈칸  ) = 1 THEN '부서 합계' ELSE JOB END AS 명칭,\n    SUM(SAL)\nFROM EMP\nGROUP BY ROLLUP(JOB);",
      options: [
        { id: 1, text: "COUNT(JOB)", isCorrect: false },
        { id: 2, text: "GROUPING(JOB)", isCorrect: true },
        { id: 3, text: "NVL(JOB)", isCorrect: false },
        { id: 4, text: "ISNULL(JOB)", isCorrect: false },
      ],
      rationale:
        "ROLLUP으로 인해 생성된 소계 행은 GROUPING(컬럼)의 결과가 1이 됩니다. 이를 CASE나 DECODE로 처리해 이름을 바꿉니다.",
      hint: "GROUPING은 보고서의 예쁜 이름을 만들어주는 일등공신입니다.",
    },
  ],
  10: [
    {
      id: 1,
      category: "윈도우 함수 기초",
      question:
        "다음 중 윈도우 함수와 GROUP BY 절의 차이점에 대한 설명으로 가장 적절한 것은?",
      options: [
        {
          id: 1,
          text: "윈도우 함수는 행의 수를 줄이지만, GROUP BY는 행의 수를 유지한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "윈도우 함수는 행의 수를 유지하지만, GROUP BY는 행의 수를 줄인다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "두 기능 모두 행의 수를 줄여서 집계 결과를 보여준다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "윈도우 함수는 SELECT 절에서 사용할 수 없다.",
          isCorrect: false,
        },
      ],
      rationale:
        "GROUP BY는 데이터를 그룹별로 압축(집계)하여 행 수가 줄어들지만, 윈도우 함수는 개별 행의 상세 정보를 유지하면서 분석 결과를 옆에 추가합니다.",
      hint: "내 성적표 옆에 '반 평균'이 찍히는지, 아니면 '반 평균'만 덜렁 나오는지 생각해보세요.",
    },
    {
      id: 2,
      category: "윈도우 함수 기초",
      question: "윈도우 함수 사용 시 반드시 함께 작성해야 하는 필수 키워드는?",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "GROUP BY", isCorrect: false },
        { id: 3, text: "OVER", isCorrect: true },
        { id: 4, text: "HAVING", isCorrect: false },
      ],
      rationale:
        "윈도우 함수는 항상 '함수() OVER ( ... )' 형식을 갖춰야 합니다.",
      hint: "창문(Window)을 넘어서(OVER) 본다고 외우세요!",
    },
    {
      id: 3,
      category: "윈도우 함수 기초",
      question:
        "다음 중 동점자가 있을 때 동일 순위를 부여하고, 그 다음 순위는 건너뛰는(예: 1등, 1등, 3등) 함수는?",
      options: [
        { id: 1, text: "RANK", isCorrect: true },
        { id: 2, text: "DENSE_RANK", isCorrect: false },
        { id: 3, text: "ROW_NUMBER", isCorrect: false },
        { id: 4, text: "NTILE", isCorrect: false },
      ],
      rationale: "RANK는 올림픽 방식처럼 공동 순위만큼 다음 숫자를 건너뜁니다.",
      hint: "1등이 두 명이면 2등 없이 바로 3등으로 가는 냉정한 함수입니다.",
    },
    {
      id: 4,
      category: "윈도우 함수 기초",
      question:
        "값이 동일하더라도 무조건 고유한 일련번호를 부여하는(예: 1, 2, 3, 4) 순위 함수는?",
      options: [
        { id: 1, text: "RANK", isCorrect: false },
        { id: 2, text: "DENSE_RANK", isCorrect: false },
        { id: 3, text: "ROW_NUMBER", isCorrect: true },
        { id: 4, text: "CUME_DIST", isCorrect: false },
      ],
      rationale:
        "ROW_NUMBER는 동일한 값에 대해서도 순차적인 고유 번호를 부여합니다.",
      hint: "출석 번호처럼 무조건 겹치지 않게 매기는 번호입니다.",
    },
    {
      id: 5,
      category: "윈도우 함수 기초",
      question:
        "윈도우 함수 내부에서 '전체를 어떤 기준으로 나눌 것인가'를 지정하는 구문은?",
      options: [
        { id: 1, text: "ORDER BY", isCorrect: false },
        { id: 2, text: "PARTITION BY", isCorrect: true },
        { id: 3, text: "GROUP BY", isCorrect: false },
        { id: 4, text: "ROWS BETWEEN", isCorrect: false },
      ],
      rationale:
        "PARTITION BY는 전체 집합을 특정 기준(예: 부서, 성별)으로 나누는 역할을 합니다.",
      hint: "\"부서별\"로 등수를 매기고 싶다면 'PARTITION BY 부서'입니다.",
    },
    {
      id: 6,
      category: "윈도우 함수 중급",
      question:
        "다음 데이터를 보고 DENSE_RANK() OVER (ORDER BY 점수 DESC)를 적용했을 때, 90점인 학생의 순위는? (데이터: 100점, 100점, 90점, 80점)",
      options: [
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "2", isCorrect: true },
        { id: 3, text: "3", isCorrect: false },
        { id: 4, text: "4", isCorrect: false },
      ],
      rationale:
        "DENSE_RANK는 공동 순위가 있어도 다음 숫자를 이어서 매깁니다. (1, 1, 2, 3)",
      hint: "빽빽하다는 뜻의 'Dense'답게 순위 사이에 빈틈이 없습니다.",
    },
    {
      id: 7,
      category: "윈도우 함수 중급",
      question:
        "PARTITION BY DEPTNO를 사용하여 순위를 매길 때 발생하는 현상으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "부서 번호가 바뀌어도 순위는 계속 누적된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "부서 번호가 바뀔 때마다 순위가 1등부터 다시 시작된다.",
          isCorrect: true,
        },
        { id: 3, text: "부서별로 한 명의 사원만 조회된다.", isCorrect: false },
        { id: 4, text: "전체 사원의 평균 급여가 출력된다.", isCorrect: false },
      ],
      rationale:
        "PARTITION BY로 나뉜 그룹이 변경되면 윈도우 함수의 계산은 다시 초기화(Reset)됩니다.",
      hint: "각 부서마다 '과탑'을 따로 뽑는다고 생각하세요.",
    },
    {
      id: 8,
      category: "윈도우 함수 중급",
      question:
        "10명의 사원을 NTILE(3)으로 나누었을 때, 각 조의 인원 배분으로 옳은 것은?",
      options: [
        { id: 1, text: "4명, 3명, 3명", isCorrect: true },
        { id: 2, text: "3명, 3명, 4명", isCorrect: false },
        { id: 3, text: "3명, 3명, 3명, 1명", isCorrect: false },
        { id: 4, text: "5명, 5명, 0명", isCorrect: false },
      ],
      rationale:
        "NTILE(N)은 최대한 균등하게 나누되, 나머지가 생기면 앞의 조부터 한 명씩 더 배정합니다.",
      hint: "앞에서부터 한 명씩 더 챙겨주는 조 편성입니다.",
    },
    {
      id: 9,
      category: "윈도우 함수 중급",
      question: "다음 중 윈도우 함수를 사용할 수 있는 위치로 옳은 것은?",
      options: [
        { id: 1, text: "SELECT 절", isCorrect: true },
        { id: 2, text: "WHERE 절", isCorrect: false },
        { id: 3, text: "GROUP BY 절", isCorrect: false },
        { id: 4, text: "HAVING 절", isCorrect: false },
      ],
      rationale:
        "윈도우 함수는 결과 집합이 결정된 후 적용되므로 SELECT 절에서만 사용할 수 있습니다. (정렬을 위해 ORDER BY 절에도 사용 가능)",
      hint: "필터링(WHERE)은 윈도우 함수보다 먼저 일어납니다.",
    },
    {
      id: 10,
      category: "윈도우 함수 중급",
      question: "OVER 절 안에 ORDER BY가 없을 때 SUM(SAL) OVER()의 결과는?",
      options: [
        { id: 1, text: "급여순으로 누적된 합계", isCorrect: false },
        { id: 2, text: "해당 그룹(또는 전체)의 총 합계", isCorrect: true },
        { id: 3, text: "모든 행에 0이 출력됨", isCorrect: false },
        { id: 4, text: "오류 발생", isCorrect: false },
      ],
      rationale:
        "순서(ORDER BY)가 없으면 누적 계산을 할 수 없으므로 전체 합계를 모든 행에 동일하게 보여줍니다.",
      hint: "누적하려면 줄을 세워야 합니다. 줄이 없으면 그냥 통째로 더합니다.",
    },
    {
      id: 11,
      category: "윈도우 함수 상급",
      question: "바로 이전 행의 특정 컬럼 값을 가져오는 함수는?",
      options: [
        { id: 1, text: "LEAD", isCorrect: false },
        { id: 2, text: "LAG", isCorrect: true },
        { id: 3, text: "FIRST_VALUE", isCorrect: false },
        { id: 4, text: "LAST_VALUE", isCorrect: false },
      ],
      rationale: "LAG는 현재 행을 기준으로 이전 행의 데이터를 가져옵니다.",
      hint: "게임에서 렉(Lag) 걸리면 뒤처지는 것을 떠올리세요.",
    },
    {
      id: 12,
      category: "윈도우 함수 상급",
      question: "다음 SQL의 결과로 가장 적절한 것은?",
      code: "SELECT 월, 매출, LAG(매출, 1, 0) OVER (ORDER BY 월) AS 전월매출\nFROM 월별매출표;",
      options: [
        { id: 1, text: "1월의 '전월매출'은 NULL로 나온다.", isCorrect: false },
        { id: 2, text: "1월의 '전월매출'은 0으로 나온다.", isCorrect: true },
        {
          id: 3,
          text: "이전 달 매출이 없으면 오류가 발생한다.",
          isCorrect: false,
        },
        { id: 4, text: "12월의 다음 달 매출을 가져온다.", isCorrect: false },
      ],
      rationale:
        "LAG의 세 번째 인자는 값이 없을 때(NULL일 때) 보여줄 기본값을 지정합니다.",
      hint: "NULL 대신 0을 넣어서 계산하기 편하게 만든 쿼리입니다.",
    },
    {
      id: 13,
      category: "윈도우 함수 상급",
      question: "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING의 의미는?",
      options: [
        { id: 1, text: "맨 처음부터 현재 행까지", isCorrect: false },
        { id: 2, text: "현재 행부터 맨 마지막까지", isCorrect: false },
        {
          id: 3,
          text: "바로 앞 행, 현재 행, 바로 다음 행 (총 3줄)",
          isCorrect: true,
        },
        { id: 4, text: "전체 행", isCorrect: false },
      ],
      rationale:
        "현재 행을 기준으로 앞(PRECEDING) 1줄과 뒤(FOLLOWING) 1줄을 포함한 범위를 의미합니다.",
      hint: "나를 중심으로 앞뒤 동료 한 명씩만 챙기는 범위입니다.",
    },
    {
      id: 14,
      category: "윈도우 함수 상급",
      question:
        "다음 중 누적 분포를 구하는 함수로, 나보다 순위가 높거나 같은 사람의 비율을 0~1 사이로 반환하는 함수는?",
      options: [
        { id: 1, text: "PERCENT_RANK", isCorrect: false },
        { id: 2, text: "CUME_DIST", isCorrect: true },
        { id: 3, text: "RATIO_TO_REPORT", isCorrect: false },
        { id: 4, text: "NTILE", isCorrect: false },
      ],
      rationale:
        "CUME_DIST는 누적 분포를 계산하며, (나보다 작거나 같은 값의 수 / 전체 건수)를 반환합니다.",
      hint: "4명 중 1등이면 1/4 = 0.25가 나옵니다.",
    },
    {
      id: 15,
      category: "윈도우 함수 상급",
      question: "윈도우 함수에서 UNBOUNDED PRECEDING의 의미는?",
      options: [
        { id: 1, text: "현재 행의 값", isCorrect: false },
        { id: 2, text: "파티션의 맨 마지막 행", isCorrect: false },
        {
          id: 3,
          text: "파티션의 맨 첫 번째 행 (끝없는 이전)",
          isCorrect: true,
        },
        { id: 4, text: "값이 NULL인 행", isCorrect: false },
      ],
      rationale:
        "윈도우 범위의 시작점을 파티션의 첫 번째 행으로 고정할 때 사용합니다.",
      hint: "누적 합계를 구할 때 '맨 처음부터'를 의미하는 필수 키워드입니다.",
    },
    {
      id: 16,
      category: "윈도우 함수 심화",
      question: "다음 중 ROWS와 RANGE의 차이점에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "ROWS는 값의 크기를 기준으로, RANGE는 행의 개수를 기준으로 계산한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "ROWS는 물리적인 행의 위치를, RANGE는 논리적인 값의 크기를 기준으로 한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "두 키워드 모두 결과가 항상 동일하다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "RANGE는 동점자가 있어도 무조건 한 행씩 누적한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "ROWS는 행 번호로 범위를 잡고, RANGE는 컬럼의 값을 기준으로 범위를 잡습니다.",
      hint: "값이 같은 데이터가 여러 개 있을 때 RANGE는 한꺼번에 묶어서 처리합니다.",
    },
    {
      id: 17,
      category: "윈도우 함수 심화",
      question:
        "아래 데이터를 보고 SUM(금액) OVER (ORDER BY 금액 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)를 실행했을 때, 두 번째 100원 행의 결과값은? (데이터: 100원(A), 100원(B), 300원(C))",
      options: [
        { id: 1, text: "100", isCorrect: false },
        { id: 2, text: "200", isCorrect: true },
        { id: 3, text: "500", isCorrect: false },
        { id: 4, text: "0", isCorrect: false },
      ],
      rationale:
        "RANGE는 값이 같은(100원) 행들을 하나의 논리적 그룹으로 보기 때문에 A, B행 모두 합산된 200을 출력합니다.",
      hint: "값이 같으면 '동지'로 보고 한방에 계산하는 것이 RANGE의 특징입니다.",
    },
    {
      id: 18,
      category: "윈도우 함수 심화",
      question:
        "LAST_VALUE 함수를 사용할 때 ORDER BY만 적고 범위를 지정하지 않으면 현재 행의 값이 나오는 이유는 무엇인가?",
      options: [
        { id: 1, text: "함수가 고장 났기 때문이다.", isCorrect: false },
        {
          id: 2,
          text: "윈도우 함수의 기본 범위(Default)가 UNBOUNDED PRECEDING AND CURRENT ROW이기 때문이다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "LAST_VALUE는 원래 현재 행까지만 읽는다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "ORDER BY를 쓰면 자동으로 ROWS 모드가 되기 때문이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "기본 범위가 '처음부터 현재 행'까지이므로, 현재 행이 그 윈도우 안에서는 항상 '마지막'이 됩니다.",
      hint: "진짜 마지막을 보려면 창문을 UNBOUNDED FOLLOWING(끝까지) 열어줘야 합니다.",
    },
    {
      id: 19,
      category: "윈도우 함수 심화",
      question: "전체 합계 대비 현재 행의 값이 차지하는 비율을 구하는 함수는?",
      options: [
        { id: 1, text: "RATIO_TO_REPORT", isCorrect: true },
        { id: 2, text: "PERCENT_RANK", isCorrect: false },
        { id: 3, text: "CUME_DIST", isCorrect: false },
        { id: 4, text: "ROW_NUMBER", isCorrect: false },
      ],
      rationale:
        "RATIO_TO_REPORT는 파티션 내 전체 합계에 대한 개별 행의 비중을 계산합니다.",
      hint: '"내 월급 / 우리 부서 전체 월급 합계"를 구할 때 딱입니다.',
    },
    {
      id: 20,
      category: "윈도우 함수 심화",
      question: "SQL의 논리적 실행 순서상 윈도우 함수가 실행되는 시점은?",
      options: [
        { id: 1, text: "WHERE 절 실행 직후", isCorrect: false },
        { id: 2, text: "SELECT 절에서 컬럼이 선택될 때", isCorrect: true },
        { id: 3, text: "ORDER BY 절 실행 직후", isCorrect: false },
        { id: 4, text: "FROM 절에서 데이터를 읽을 때", isCorrect: false },
      ],
      rationale:
        "윈도우 함수는 WHERE, GROUP BY, HAVING 절까지 모두 완료된 후 SELECT 단계에서 계산됩니다.",
      hint: "모든 필터링과 그룹화가 끝난 '최종 명단' 위에서 계산이 시작됩니다.",
    },
  ],
  11: [
    {
      id: 1,
      category: "Level 1: 기초 다지기",
      question:
        "Oracle에서 급여(SAL)가 높은 상위 5명을 뽑기 위해 ROWNUM을 사용할 때, 올바른 쿼리 구조는?",
      options: [
        {
          id: 1,
          text: "SELECT * FROM EMP WHERE ROWNUM <= 5 ORDER BY SAL DESC;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SELECT * FROM EMP ORDER BY SAL DESC WHERE ROWNUM <= 5;",
          isCorrect: false,
        },
        {
          id: 3,
          text: "SELECT * FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 5;",
          isCorrect: true,
        },
        {
          id: 4,
          text: "SELECT * FROM EMP WHERE ROWNUM < 6;",
          isCorrect: false,
        },
      ],
      rationale:
        "Oracle의 ROWNUM은 ORDER BY보다 먼저 실행되므로, 서브쿼리(인라인 뷰)로 정렬을 먼저 수행한 뒤 추출해야 합니다.",
      hint: "번호표는 줄을 다 선 다음에 나눠줘야 공평하겠죠?",
    },
    {
      id: 2,
      category: "Level 1: 기초 다지기",
      question:
        "SQL Server에서 TOP (5) WITH TIES를 사용했을 때 나타날 수 있는 현상은?",
      options: [
        { id: 1, text: "무조건 5개의 행만 출력된다.", isCorrect: false },
        {
          id: 2,
          text: "급여가 동일한 공동 5등이 있다면 5행을 초과하여 출력될 수 있다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "5등까지만 출력하고 나머지 동점자는 버린다.",
          isCorrect: false,
        },
        { id: 4, text: "상위 5%의 데이터를 출력한다.", isCorrect: false },
      ],
      rationale:
        "WITH TIES 옵션은 마지막 순위와 동일한 값을 가진 행들을 모두 포함시켜 출력합니다.",
      hint: "'의리 있는 5등'을 떠올려 보세요.",
    },
    {
      id: 3,
      category: "Level 1: 기초 다지기",
      question: "셀프 조인(Self Join)을 수행할 때 반드시 지켜야 하는 규칙은?",
      options: [
        {
          id: 1,
          text: "반드시 LEFT OUTER JOIN을 사용해야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "두 테이블의 컬럼명이 완전히 달라야 한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "동일 테이블을 사용하므로 테이블 별칭(Alias)을 다르게 지정해야 한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "WHERE 절에 반드시 ROWNUM 조건을 넣어야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "컴ピュー터가 같은 테이블을 서로 다른 개체로 인식하게 하려면 별칭(E, M 등)이 필수입니다.",
      hint: "도플갱어에게 서로 다른 이름표를 붙여준다고 생각하세요.",
    },
    {
      id: 4,
      category: "Level 1: 기초 다지기",
      question:
        "계층형 질의에서 최상위 노드(Root)부터 전개를 시작하도록 지정하는 구문은?",
      options: [
        { id: 1, text: "CONNECT BY", isCorrect: false },
        { id: 2, text: "ORDER SIBLINGS BY", isCorrect: false },
        { id: 3, text: "START WITH", isCorrect: true },
        { id: 4, text: "PRIOR", isCorrect: false },
      ],
      rationale:
        "START WITH는 계층 구조의 시작점(뿌리)을 지정하는 조건절입니다.",
      hint: '"누구부터 시작할까?"라는 질문에 대한 답입니다.',
    },
    {
      id: 5,
      category: "Level 1: 기초 다지기",
      question:
        "계층형 질의의 가상 컬럼 중, 현재 노드의 깊이(Root=1, 자식=2...)를 나타내는 것은?",
      options: [
        { id: 1, text: "LEVEL", isCorrect: true },
        { id: 2, text: "CONNECT_BY_ISLEAF", isCorrect: false },
        { id: 3, text: "ROWNUM", isCorrect: false },
        { id: 4, text: "DEPTH", isCorrect: false },
      ],
      rationale:
        "LEVEL은 트리 구조에서 해당 데이터가 몇 번째 층에 있는지를 숫자로 반환합니다.",
      hint: "아파트 층수를 세는 것과 비슷합니다.",
    },
    {
      id: 6,
      category: "Level 2: 응용하기",
      question:
        "다음 데이터를 기준으로 RANK() 함수를 사용하여 급여 순위를 매겼을 때, 결과값이 순서대로 옳은 것은? (데이터: 김철수(500), 이영희(400), 박민수(400), 최정윤(300))",
      options: [
        { id: 1, text: "1, 2, 3, 4", isCorrect: false },
        { id: 2, text: "1, 2, 2, 3", isCorrect: false },
        { id: 3, text: "1, 2, 2, 4", isCorrect: true },
        { id: 4, text: "1, 1, 2, 3", isCorrect: false },
      ],
      rationale:
        "RANK()는 공동 순위만큼 숫자를 건너뜁니다. 2등이 2명이므로 3등을 건너뛰고 4등이 나옵니다.",
      hint: "올림픽이나 수능 등수 계산법을 생각해보세요.",
    },
    {
      id: 7,
      category: "Level 2: 응용하기",
      question:
        "셀프 조인을 활용해 '나의 상사 이름'을 조회하려고 합니다. 빈칸에 알맞은 조인 조건은?",
      code: "SELECT E.ENAME AS 사원, M.ENAME AS 상사\nFROM EMP E JOIN EMP M ON (  빈칸  );",
      options: [
        { id: 1, text: "E.EMPNO = M.EMPNO", isCorrect: false },
        { id: 2, text: "E.MGR = M.MGR", isCorrect: false },
        { id: 3, text: "E.MGR = M.EMPNO", isCorrect: true },
        { id: 4, text: "E.EMPNO = M.MGR", isCorrect: false },
      ],
      rationale:
        "내 줄에 적힌 관리자 번호(E.MGR)와 일치하는 사번(M.EMPNO)을 가진 사람을 관리자 테이블(M)에서 찾아야 합니다.",
      hint: "내 수첩에 적힌 '상사 사번'을 들고 사번 명부를 뒤지러 가야죠.",
    },
    {
      id: 8,
      category: "Level 2: 응용하기",
      question:
        "계층형 질의에서 CONNECT BY PRIOR 사번 = 관리자사번의 전개 방향은?",
      options: [
        { id: 1, text: "역방향 (부하 -> 상사)", isCorrect: false },
        { id: 2, text: "순방향 (상사 -> 부하)", isCorrect: true },
        { id: 3, text: "수평방향 (동료 -> 동료)", isCorrect: false },
        { id: 4, text: "무작위방향", isCorrect: false },
      ],
      rationale:
        "PRIOR가 부모 쪽에 붙어 있으면 부모에서 자식으로 내려가는 순방향 전개입니다.",
      hint: "PRIOR 뒤에 오는 '사번'이 먼저 읽힌 데이터(상사)입니다.",
    },
    {
      id: 9,
      category: "Level 2: 응용하기",
      question:
        "SYS_CONNECT_BY_PATH(ENAME, '/') 함수의 결과 예시로 적절한 것은?",
      options: [
        { id: 1, text: "1/2/3/4", isCorrect: false },
        { id: 2, text: "사장/부장/대리", isCorrect: false },
        { id: 3, text: "/김사장/이부장/최대리", isCorrect: true },
        { id: 4, text: "최대리 > 이부장 > 김사장", isCorrect: false },
      ],
      rationale:
        "루트 노드부터 현재 노드까지의 경로를 지정한 구분자와 함께 문자열로 연결해줍니다.",
      hint: "윈도우 탐색기 주소창의 폴더 경로와 비슷합니다.",
    },
    {
      id: 10,
      category: "Level 2: 응용하기",
      question:
        "다음 중 최신 표준 문법인 OFFSET FETCH를 사용하여 6등부터 10등까지의 데이터를 출력하는 구문은?",
      options: [
        { id: 1, text: "FETCH NEXT 5 ROWS ONLY", isCorrect: false },
        {
          id: 2,
          text: "OFFSET 6 ROWS FETCH NEXT 5 ROWS ONLY",
          isCorrect: false,
        },
        {
          id: 3,
          text: "OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY",
          isCorrect: true,
        },
        {
          id: 4,
          text: "OFFSET 5 ROWS FETCH NEXT 10 ROWS ONLY",
          isCorrect: false,
        },
      ],
      rationale:
        "6등부터 보려면 앞의 5명(OFFSET 5)을 건너뛰고, 그 후 5개(FETCH NEXT 5)를 가져와야 합니다.",
      hint: "건너뛸 개수를 먼저 정하세요.",
    },
    {
      id: 11,
      category: "Level 3: 함정 탈출",
      question: "다음 SQL의 실행 결과로 올바른 것은?",
      code: "SELECT ENAME FROM EMP WHERE ROWNUM = 2;",
      options: [
        { id: 1, text: "2번째 행의 사원명이 출력된다.", isCorrect: false },
        { id: 2, text: "에러가 발생한다.", isCorrect: false },
        { id: 3, text: "아무 결과도 출력되지 않는다 (0건).", isCorrect: true },
        { id: 4, text: "전체 사원이 출력된다.", isCorrect: false },
      ],
      rationale:
        "ROWNUM은 1번이 확정되어야 2번이 생성됩니다. 조건에서 1번을 배제했으므로 2번은 영원히 나타나지 않습니다.",
      hint: "1등 없는 2등은 존재할 수 없습니다.",
    },
    {
      id: 12,
      category: "Level 3: 함정 탈출",
      question:
        "아래 테이블 구조에서 '사원'에서 '사장'으로 올라가는 역방향 조회를 하려고 합니다. 올바른 CONNECT BY 조건은?",
      tables: [
        {
          name: "EMP 테이블 (일부)",
          headers: ["사번(EMPNO)", "관리자(MGR)"],
          rows: [
            ["100(사장)", "NULL"],
            ["200(부장)", "100"],
          ],
        },
      ],
      options: [
        { id: 1, text: "CONNECT BY PRIOR EMPNO = MGR", isCorrect: false },
        { id: 2, text: "CONNECT BY PRIOR MGR = EMPNO", isCorrect: true },
        { id: 3, text: "CONNECT BY MGR = EMPNO", isCorrect: false },
        { id: 4, text: "CONNECT BY EMPNO = MGR", isCorrect: false },
      ],
      rationale:
        "현재 데이터(부하)의 관리자 번호(MGR)를 이전 데이터(PRIOR)의 사번으로 찾아 올라가야 합니다.",
      hint: "PRIOR는 '방금 읽은 사람'입니다.",
    },
    {
      id: 13,
      category: "Level 3: 함정 탈출",
      question:
        "계층형 질의에서 형제 노드들끼리의 순서를 이름순으로 정렬하면서도 트리 구조를 깨뜨리지 않는 방법은?",
      options: [
        { id: 1, text: "ORDER BY ENAME", isCorrect: false },
        { id: 2, text: "GROUP BY ENAME", isCorrect: false },
        { id: 3, text: "ORDER SIBLINGS BY ENAME", isCorrect: true },
        { id: 4, text: "SORT BY ENAME", isCorrect: false },
      ],
      rationale:
        "일반 ORDER BY를 쓰면 계층이 무시되고 전체가 섞여버립니다. 계층 내 정렬은 SIBLINGS가 필수입니다.",
      hint: "'형제(Siblings)'라는 단어를 기억하세요.",
    },
    {
      id: 14,
      category: "Level 3: 함정 탈출",
      question:
        "셀프 조인을 수행한 결과, 상사가 없는 '사장' 데이터가 결과에서 누락되었습니다. 이를 방지하기 위한 조인 방법은?",
      options: [
        { id: 1, text: "INNER JOIN", isCorrect: false },
        { id: 2, text: "FULL OUTER JOIN", isCorrect: false },
        { id: 3, text: "LEFT OUTER JOIN", isCorrect: true },
        { id: 4, text: "CROSS JOIN", isCorrect: false },
      ],
      rationale:
        "사원(E) 테이블에는 있지만 상사(M) 테이블에는 대응하는 데이터가 없는 경우(MGR IS NULL)에도 출력하려면 왼쪽 외부 조인이 필요합니다.",
      hint: "상사가 없어도 '사원'으로서의 정보는 나와야 합니다.",
    },
    {
      id: 15,
      category: "Level 3: 함정 탈출",
      question: "WHERE CONNECT_BY_ISLEAF = 1 조건을 추가했을 때의 결과는?",
      options: [
        { id: 1, text: "사장님만 출력된다.", isCorrect: false },
        { id: 2, text: "부장님들만 출력된다.", isCorrect: false },
        {
          id: 3,
          text: "부하 직원이 없는 최하위 팀원들만 출력된다.",
          isCorrect: true,
        },
        { id: 4, text: "모든 데이터가 출력된다.", isCorrect: false },
      ],
      rationale: "ISLEAF는 자식이 없는 말단 노드일 때 1을 반환합니다.",
      hint: "나뭇잎(Leaf)은 나무의 가장 끝부분에 달려 있죠.",
    },
    {
      id: 16,
      category: "Level 4: 최고난도",
      question: "다음 쿼리의 실행 결과로 알맞은 순서는?",
      tables: [
        {
          name: "조직도",
          headers: [
            "사원번호(EMPNO)",
            "이름(ENAME)",
            "관리자번호(MGR)",
            "직급",
          ],
          rows: [
            ["101", "김사장 (CEO)", "NULL", "사장"],
            ["201", "이부장", "101", "부장"],
            ["202", "박부장", "101", "부장"],
            ["301", "최대리", "201", "대리"],
            ["302", "정사원", "301", "사원"],
          ],
        },
      ],
      code: "SELECT ENAME FROM EMP\nSTART WITH ENAME = '이부장'\nCONNECT BY PRIOR EMPNO = MGR\nORDER SIBLINGS BY ENAME;",
      options: [
        { id: 1, text: "이부장 - 박부장 - 최대리 - 정사원", isCorrect: false },
        { id: 2, text: "이부장 - 최대리 - 정사원", isCorrect: true },
        { id: 3, text: "김사장 - 이부장 - 최대리 - 정사원", isCorrect: false },
        { id: 4, text: "이부장 - 최대리", isCorrect: false },
      ],
      rationale:
        "시작점이 '이부장'이므로 김사장과 박부장은 제외됩니다. 이부장 아래의 계층인 최대리, 정사원만 출력됩니다.",
      hint: "START WITH가 필터링 역할을 한다는 점에 주의하세요.",
    },
    {
      id: 17,
      category: "Level 4: 최고난도",
      question:
        "아래 쿼리의 결과에서 RK가 3인 사람은 몇 명인가? (SAL 데이터: A(100), B(100), C(90), D(80), E(80))",
      code: "SELECT ENAME, DENSE_RANK() OVER (ORDER BY SAL DESC) AS RK FROM EMP;",
      options: [
        { id: 1, text: "0명", isCorrect: false },
        { id: 2, text: "1명", isCorrect: false },
        { id: 3, text: "2명", isCorrect: true },
        { id: 4, text: "3명", isCorrect: false },
      ],
      rationale:
        "100(A, B)은 공동 1등, 그다음 점수인 90(C)은 2등, 그다음 점수인 80(D, E)은 3등이 됩니다. DENSE_RANK는 순위를 건너뛰지 않습니다.",
      hint: "DENSE는 '빽빽하게' 순위를 채웁니다.",
    },
    {
      id: 18,
      category: "Level 4: 최고난도",
      question:
        "계층형 질의에서 PRIOR 키워드를 다음과 같이 사용했을 때 발생하는 현상은?",
      code: "SELECT ... FROM EMP\nSTART WITH ENAME = '정사원'\nCONNECT BY EMPNO = PRIOR MGR;",
      options: [
        {
          id: 1,
          text: "정사원부터 시작하여 사장까지 거슬러 올라간다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "정사원부터 시작하여 그 아래 부하들을 조회한다.",
          isCorrect: false,
        },
        { id: 3, text: "에러가 발생한다.", isCorrect: false },
        { id: 4, text: "정사원 한 명만 출력되고 종료된다.", isCorrect: false },
      ],
      rationale:
        "PRIOR가 부모(MGR) 쪽에 붙어 있으면 부모(MGR)를 찾아 올라가는 역방향 전개입니다.",
      hint: "내 관리자 번호를 사번으로 가진 사람을 '직전 데이터'로 삼겠다는 뜻입니다.",
    },
    {
      id: 19,
      category: "Level 4: 최고난도",
      question: "다음 SQL 결과로 출력되는 행의 수는?",
      tables: [
        {
          name: "EMP 테이블 (일부)",
          headers: ["사번", "이름", "급여"],
          rows: [
            ["1", "김", "500"],
            ["2", "이", "500"],
            ["3", "박", "400"],
            ["4", "최", "300"],
          ],
        },
      ],
      code: "SELECT TOP (2) WITH TIES 이름 FROM EMP ORDER BY 급여 DESC;",
      options: [
        { id: 1, text: "1개", isCorrect: false },
        { id: 2, text: "2개", isCorrect: true },
        { id: 3, text: "3개", isCorrect: false },
        { id: 4, text: "4개", isCorrect: false },
      ],
      rationale:
        "급여가 500인 김과 이가 공동 1등입니다. 2개를 뽑으라고 했으므로 1등 두 명이 출력되고 끝납니다. (만약 박도 500이었다면 3개가 나왔을 것입니다.)",
      hint: "'마지막 순위'의 동점자가 있는지를 확인하세요.",
    },
    {
      id: 20,
      category: "Level 4: 최고난도",
      question: "계층형 쿼리와 셀프 조인에 대한 설명 중 틀린 것은?",
      options: [
        {
          id: 1,
          text: "계층형 쿼리는 한 번의 작성으로 무제한 깊이의 트리를 탐색할 수 있다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "셀프 조인은 계층의 깊이가 깊어질수록 JOIN 문을 계속 추가해야 하므로 불리하다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "CONNECT BY 절에서 PRIOR는 반드시 컬럼명 왼쪽에만 올 수 있다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "셀프 조인은 서로 다른 별칭을 사용해 논리적으로 두 개의 테이블로 분리한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "PRIOR 키워드는 비교 대상 컬럼 중 어느 쪽에 붙느냐가 전개 방향을 결정할 뿐, 연산자(=)를 기준으로 좌/우 위치는 상관없다",
      hint: "문법적 위치보다는 '누구의 데이터인가'라는 논리가 중요합니다.",
    },
  ],
  12: [
    {
      id: 1,
      category: "PIVOT & UNPIVOT",
      question:
        "다음 중 데이터의 행(Row)을 열(Column)로 변환하여 집계 보고서(Wide Data)를 만들 때 사용하는 SQL 구문은 무엇인가?",
      options: [
        { id: 1, text: "UNPIVOT", isCorrect: false },
        { id: 2, text: "PIVOT", isCorrect: true },
        { id: 3, text: "GROUP BY", isCorrect: false },
        { id: 4, text: "CROSS JOIN", isCorrect: false },
      ],
      rationale:
        "행 단위로 길게 나열된 데이터(Long Data)를 열 단위로 회전시켜 가로로 넓은(Wide Data) 요약 보고서를 만드는 기능은 PIVOT입니다.",
      hint: "엑셀의 '피벗 테이블'을 떠올려보세요! 가로로 펼쳐줍니다.",
    },
    {
      id: 2,
      category: "PIVOT & UNPIVOT",
      question: "PIVOT 절을 구성할 때 반드시 포함되어야 하는 요소는 무엇인가?",
      options: [
        { id: 1, text: "WHERE 조건절", isCorrect: false },
        { id: 2, text: "ORDER BY 절", isCorrect: false },
        { id: 3, text: "집계 함수(SUM, MAX 등)", isCorrect: true },
        { id: 4, text: "HAVING 절", isCorrect: false },
      ],
      rationale:
        "PIVOT은 데이터를 열로 펼치면서 교차하는 지점의 값을 요약해야 하므로 집계 함수(SUM, COUNT, MAX 등)가 필수적으로 요구됩니다.",
      hint: "가로세로가 만나는 칸에 '무슨 값'을 넣을지 컴퓨터에게 알려줘야 합니다.",
    },
    {
      id: 3,
      category: "PIVOT & UNPIVOT",
      question:
        "다음 [원본 테이블]을 보고 아래 PIVOT 쿼리를 실행했을 때의 결과를 유추하시오.",
      tables: [
        {
          name: "원본 테이블: 실적",
          headers: ["부서", "월", "매출"],
          rows: [
            ["영업1팀", "1월", "100"],
            ["영업1팀", "2월", "150"],
            ["영업2팀", "1월", "200"],
          ],
        },
      ],
      code: "SELECT *\nFROM 실적\nPIVOT (\n    SUM(매출) \n    FOR 월 IN ('1월' AS \"1월매출\", '2월' AS \"2월매출\")\n);",
      options: [
        {
          id: 1,
          text: "행은 '영업1팀', '영업2팀' 2줄로 나오고, 열은 '1월매출', '2월매출'이 된다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "행은 3줄 그대로 유지되고, 열만 추가된다.",
          isCorrect: false,
        },
        { id: 3, text: "에러가 발생한다.", isCorrect: false },
        {
          id: 4,
          text: "열이 '영업1팀', '영업2팀'으로 변경된다.",
          isCorrect: false,
        },
      ],
      rationale:
        "`FOR 월 IN (...)` 구문에 의해 '월' 데이터가 열(Column)로 변환되며, 부서별로 그룹화되어 영업1팀과 영업2팀 총 2개의 행으로 요약됩니다.",
      hint: "PIVOT의 결과는 기준이 되는 컬럼(부서)당 1줄씩 나옵니다.",
    },
    {
      id: 4,
      category: "PIVOT & UNPIVOT",
      question:
        "위 3번 문제의 쿼리 결과에서, '영업2팀'의 '2월매출' 칸에 들어갈 값은 무엇인가?",
      options: [
        { id: 1, text: "0", isCorrect: false },
        { id: 2, text: "NULL", isCorrect: true },
        { id: 3, text: "200", isCorrect: false },
        { id: 4, text: "에러", isCorrect: false },
      ],
      rationale:
        "원본 데이터에 영업2팀의 2월 매출 데이터가 존재하지 않으므로, PIVOT 후 해당 교차 지점의 값은 빈 공간인 NULL로 채워집니다.",
      hint: "없는 데이터는 0이 아니라 '비어있음'으로 처리됩니다.",
    },
    {
      id: 5,
      category: "PIVOT & UNPIVOT",
      question: "다음 중 UNPIVOT에 대한 설명으로 올바른 것은?",
      options: [
        {
          id: 1,
          text: "여러 행에 퍼져있는 데이터를 하나의 행으로 합친다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "열(Column)로 넓게 퍼져있는 데이터를 행(Row)으로 길게 내린다.",
          isCorrect: true,
        },
        { id: 3, text: "집계 함수를 반드시 사용해야 한다.", isCorrect: false },
        { id: 4, text: "데이터를 암호화하는 기능이다.", isCorrect: false },
      ],
      rationale:
        "UNPIVOT은 PIVOT의 반대로, 열(Column) 단위로 나열된 데이터를 행(Row) 단위로 회전시켜 정규화(Long Data)하는 데 사용합니다.",
      hint: "넓은(Wide) 데이터를 길게(Long) 풀어헤칩니다.",
    },
    {
      id: 6,
      category: "PIVOT & UNPIVOT",
      question:
        "다음 [피벗 테이블]을 보고 쿼리를 실행한 후의 결과 행(Row)의 개수는 총 몇 개인가?",
      tables: [
        {
          name: "피벗 테이블: 성적",
          headers: ["이름", "KOREAN", "ENGLISH"],
          rows: [
            ["김철수", "90", "80"],
            ["이영희", "100", "95"],
          ],
        },
      ],
      code: "SELECT 이름, 과목, 점수\nFROM 성적\nUNPIVOT (\n    점수 FOR 과목 IN (KOREAN, ENGLISH)\n);",
      options: [
        { id: 1, text: "2개", isCorrect: false },
        { id: 2, text: "3개", isCorrect: false },
        { id: 3, text: "4개", isCorrect: true },
        { id: 4, text: "6개", isCorrect: false },
      ],
      rationale:
        "학생 1명당 국어, 영어 2개의 열이 행으로 분리됩니다. 김철수 2행, 이영희 2행이 생성되어 총 4행이 됩니다.",
      hint: "2명 * 2과목 = ?",
    },
    {
      id: 7,
      category: "PIVOT & UNPIVOT",
      question: "아래 PIVOT 쿼리의 빈칸 ( A )에 들어갈 예약어로 알맞은 것은?",
      code: "SELECT * FROM SALES\nPIVOT ( SUM(AMOUNT) (   A   ) QUARTER IN ('Q1', 'Q2') );",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "ON", isCorrect: false },
        { id: 3, text: "FOR", isCorrect: true },
        { id: 4, text: "SELECT", isCorrect: false },
      ],
      rationale:
        "열로 변환할 기준 컬럼을 지정할 때는 `FOR 컬럼명 IN (값 리스트)` 문법을 사용합니다.",
      hint: '"~를 위해(대신에)" 열을 만든다는 느낌으로 접근하세요.',
    },
    {
      id: 8,
      category: "PIVOT & UNPIVOT",
      question:
        "PIVOT을 수행할 때 `IN` 절 내부에 명시되지 않은 데이터는 어떻게 처리되는가?",
      options: [
        {
          id: 1,
          text: "별도의 열(기타)로 자동으로 묶여서 출력된다.",
          isCorrect: false,
        },
        { id: 2, text: "쿼리 실행 시 에러가 발생한다.", isCorrect: false },
        {
          id: 3,
          text: "결과 테이블의 열로 변환되지 않고 결과에서 제외된다.",
          isCorrect: true,
        },
        { id: 4, text: "모두 행 데이터로 강제 변환된다.", isCorrect: false },
      ],
      rationale:
        "`IN` 절 안에 명시한 값들만 새로운 열(Column)로 만들어지며, 명시되지 않은 값들은 피벗 결과에서 아예 제외됩니다.",
      hint: "명령한 열만 예쁘게 만들어줍니다.",
    },
    {
      id: 9,
      category: "PIVOT & UNPIVOT",
      question: "UNPIVOT 쿼리를 작성할 때 주의사항으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "UNPIVOT 안에 들어가는 열(Column)들의 데이터 타입이 동일해야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`IN` 절 안에 행으로 바꿀 기존 열의 이름들을 적어준다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "UNPIVOT은 데이터를 집계(SUM 등)하는 과정을 필수로 포함한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "피벗된 데이터를 다시 정규화할 때 유용하다.",
          isCorrect: false,
        },
      ],
      rationale:
        "PIVOT은 집계 함수가 필수지만, UNPIVOT은 단순히 열을 행으로 내리는 작업이므로 집계 함수를 사용하지 않습니다.",
      hint: "UNPIVOT은 펼쳐진 걸 다시 정리만 할 뿐, 계산하지 않아요.",
    },
    {
      id: 10,
      category: "정규표현식",
      question: "정규표현식에서 문자열의 '시작'을 의미하는 메타 문자는?",
      options: [
        { id: 1, text: "$", isCorrect: false },
        { id: 2, text: "^", isCorrect: true },
        { id: 3, text: "*", isCorrect: false },
        { id: 4, text: "?", isCorrect: false },
      ],
      rationale:
        "`^`는 문자열의 시작을 나타냅니다. 예를 들어 `^A`는 A로 시작하는 문자열을 의미합니다.",
      hint: '꺽쇠가 맨 앞에 있으면 "여기서부터 시작!"입니다.',
    },
    {
      id: 11,
      category: "정규표현식",
      question:
        "다음 중 임의의 한 문자(개행 제외)를 의미하는 정규식 메타 문자는?",
      options: [
        { id: 1, text: ". (마침표)", isCorrect: true },
        { id: 2, text: "+ (더하기)", isCorrect: false },
        { id: 3, text: "* (별표)", isCorrect: false },
        { id: 4, text: "\\d", isCorrect: false },
      ],
      rationale:
        "`.`은 어떤 문자든 딱 1글자를 대신합니다. `a.b`는 a와 b 사이에 임의의 한 글자가 있는 문자열(acb, a1b 등)과 매칭됩니다.",
      hint: "빈칸 하나를 채우는 마법의 점!",
    },
    {
      id: 12,
      category: "정규표현식",
      question: "정규식 패턴에서 `*`와 `+`의 차이점을 올바르게 설명한 것은?",
      options: [
        {
          id: 1,
          text: "`*`는 0개 이상, `+`는 1개 이상을 의미한다.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "`*`는 1개 이상, `+`는 0개 이상을 의미한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`*`는 숫자를, `+`는 문자를 의미한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "차이가 없으며 서로 완벽히 대체 가능하다.",
          isCorrect: false,
        },
      ],
      rationale:
        "`*`는 앞에 있는 문자가 아예 없어도(0개) 허용하지만, `+`는 최소한 1개는 있어야 매칭됩니다.",
      hint: "`+`는 플러스니까 무조건 하나는 더해져 있어야 한다고 외워보세요!",
    },
    {
      id: 13,
      category: "정규표현식",
      question: "정규표현식 `[^0-9]`가 의미하는 것은 무엇인가?",
      options: [
        {
          id: 1,
          text: "0부터 9까지의 숫자로 시작하는 문자열",
          isCorrect: false,
        },
        { id: 2, text: "0부터 9까지의 숫자 중 하나", isCorrect: false },
        {
          id: 3,
          text: "0부터 9까지의 숫자가 '아닌' 임의의 한 문자",
          isCorrect: true,
        },
        { id: 4, text: "0과 9로 끝나는 문자열", isCorrect: false },
      ],
      rationale:
        "대괄호 `[ ]` 안의 맨 앞에 있는 `^`는 NOT(제외)의 의미를 가집니다. 따라서 숫자가 아닌 문자를 찾습니다.",
      hint: "괄호 밖의 `^`는 시작, 괄호 안의 `[^ ]`는 부정(NOT)입니다. (시험 단골 함정!)",
    },
    {
      id: 14,
      category: "정규표현식",
      question: "다음 쿼리의 실행 결과로 출력될 데이터는 무엇인가?",
      code: "SELECT REGEXP_SUBSTR('가나다라1234마바사', '\d+') AS RESULT\nFROM DUAL;",
      options: [
        { id: 1, text: "가나다라", isCorrect: false },
        { id: 2, text: "1234", isCorrect: true },
        { id: 3, text: "마바사", isCorrect: false },
        { id: 4, text: "1", isCorrect: false },
      ],
      rationale:
        "`\\d`는 숫자를 의미하며, `+`는 1개 이상 연속됨을 의미합니다. `REGEXP_SUBSTR`은 매칭되는 첫 번째 덩어리를 추출하므로 연속된 숫자 '1234'가 추출됩니다.",
      hint: "숫자(\\d) 덩어리(+)를 쏙(SUBSTR) 뽑아냅니다.",
    },
    {
      id: 15,
      category: "정규표현식",
      question: "아래 쿼리의 목적으로 가장 알맞은 것은?",
      code: "SELECT ENAME FROM EMP \nWHERE REGEXP_LIKE(ENAME, 'A$');",
      options: [
        { id: 1, text: "이름이 'A'로 시작하는 사원 검색", isCorrect: false },
        { id: 2, text: "이름에 'A'가 포함된 사원 검색", isCorrect: false },
        { id: 3, text: "이름이 'A'로 끝나는 사원 검색", isCorrect: true },
        { id: 4, text: "이름이 딱 한 글자 'A'인 사원 검색", isCorrect: false },
      ],
      rationale:
        "`$` 메타 문자는 문자열의 '끝'을 의미합니다. 따라서 `A$`는 맨 마지막 글자가 A인 데이터를 찾습니다.",
      hint: "달러 기호($)는 항상 끝에 붙죠!",
    },
    {
      id: 16,
      category: "정규표현식",
      question:
        "다음 중 정규표현식 메타 문자 자체(예: 마침표 `.`)를 일반 문자로 취급하여 검색하고 싶을 때 사용하는 방법은?",
      options: [
        { id: 1, text: "대문자로 작성한다.", isCorrect: false },
        { id: 2, text: "앞에 역슬래시(`\\`)를 붙인다.", isCorrect: true },
        { id: 3, text: "따옴표로 감싼다.", isCorrect: false },
        { id: 4, text: "괄호로 감싼다.", isCorrect: false },
      ],
      rationale:
        "메타 문자의 특별한 기능을 없애고 단순 문자로 인식하게 하려면 이스케이프 문자인 `\\`를 앞에 붙여야 합니다. (예: `\\.`)",
      hint: "마법의 힘을 빼앗는 빗자루()입니다.",
    },
    {
      id: 17,
      category: "정규표현식",
      question:
        "아래 쿼리에서 마스킹 처리를 위해 사용한 정규식 함수의 원리로 옳은 것은?",
      code: "SELECT REGEXP_REPLACE('010-1234-5678', '([0-9]{3})-([0-9]{4})-([0-9]{4})', '\\1-****-\\3') \nFROM DUAL;",
      options: [
        {
          id: 1,
          text: "`\\1`과 `\\3`은 원본 문자열의 첫 번째 글자와 세 번째 글자를 의미한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "괄호 `( )`로 묶은 그룹 중 첫 번째 그룹과 세 번째 그룹의 값을 그대로 가져온다는 의미이다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "`\\1`은 하이픈을 추가하는 명령이다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "숫자를 문자로 강제 형변환하는 명령이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "괄호 `( )`는 그룹핑을 의미하며, `\\1`, `\\2`, `\\3`은 각각 패턴에서 괄호로 묶인 첫 번째, 두 번째, 세 번째 데이터 덩어리를 기억했다가 그대로 호출하는 역할(역참조)을 합니다.",
      hint: "첫 번째 괄호 = `\\1`, 세 번째 괄호 = `\\3`",
    },
    {
      id: 18,
      category: "정규표현식",
      question: "다음 정규표현식 `a?b`가 매칭할 수 없는 문자열은?",
      options: [
        { id: 1, text: "b", isCorrect: false },
        { id: 2, text: "ab", isCorrect: false },
        { id: 3, text: "aab", isCorrect: true },
        { id: 4, text: "매칭 불가능한 문자열은 없다.", isCorrect: false },
      ],
      rationale:
        "`?`는 선행 문자(a)가 0번 또는 1번만 등장해야 함을 의미합니다. 따라서 b(0번), ab(1번)는 가능하지만, a가 2번 연속된 aab는 패턴에 맞지 않습니다.",
      hint: '물음표(?)는 "있거나 없거나(0 or 1)" 입니다. 여러 개는 안 돼요!',
    },
    {
      id: 19,
      category: "정규표현식",
      question: "`REGEXP_INSTR` 함수의 주요 역할은 무엇인가?",
      options: [
        { id: 1, text: "일치하는 패턴의 문자열을 치환한다.", isCorrect: false },
        { id: 2, text: "일치하는 패턴의 문자열을 추출한다.", isCorrect: false },
        {
          id: 3,
          text: "패턴이 일치하는지 여부를 TRUE/FALSE로 반환한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "패턴과 일치하는 부분의 '시작 위치(인덱스 번호)'를 숫자로 반환한다.",
          isCorrect: true,
        },
      ],
      rationale:
        "`INSTR` 함수 자체가 문자열 내에서 특정 문자의 위치를 찾는 함수입니다. `REGEXP_INSTR`은 이를 정규식 패턴으로 확장하여, 패턴이 시작되는 위치를 반환합니다.",
      hint: "Index of String! 숫자가 나옵니다.",
    },
    {
      id: 20,
      category: "정규표현식",
      question:
        "다음 조건을 만족하는 이메일 패턴을 찾고자 할 때, 가장 적절한 정규표현식은?",
      code: "[조건] 영문자나 숫자로 1글자 이상 시작하고, 바로 뒤에 '@' 기호가 오며, 그 뒤에 영문자나 숫자가 1글자 이상 와야 함.",
      options: [
        { id: 1, text: "^[a-zA-Z0-9]+@[a-zA-Z0-9]+", isCorrect: true },
        { id: 2, text: "^[a-zA-Z0-9]*@[a-zA-Z0-9]*", isCorrect: false },
        { id: 3, text: "^[a-zA-Z0-9]?@[a-zA-Z0-9]?", isCorrect: false },
        { id: 4, text: "^[a-zA-Z0-9]@[a-zA-Z0-9]", isCorrect: false },
      ],
      rationale:
        "'1글자 이상'이 필수이므로 `+` 기호를 사용해야 합니다. `*`는 0글자도 허용하고, `?`는 0 또는 1글자만, 기호가 없으면 딱 1글자만 의미합니다.",
      hint: '"최소 1개 이상"은 무조건 플러스(+)입니다!',
    },
  ],
  13: [],
  14: [],

  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  13: [
    {
      id: 1,
      category: "트랜잭션 관리",
      question:
        "다음 중 트랜잭션의 특성(ACID)과 그 설명이 올바르게 짝지어진 것은?",
      tables: [
        {
          name: "특성 설명표",
          headers: ["특성", "설명"],
          rows: [
            [
              "가. 원자성",
              "트랜잭션 실행 전후로 무결성 제약조건이 유지되어야 한다.",
            ],
            [
              "나. 일관성",
              "성공적으로 커밋된 결과는 영구적으로 보존되어야 한다.",
            ],
            [
              "다. 고립성",
              "연산은 모두 성공하거나 모두 실패해야 한다(All or Nothing).",
            ],
            [
              "라. 지속성",
              "트랜잭션 도중 다른 트랜잭션의 간섭을 받지 않아야 한다.",
            ],
          ],
        },
      ],
      options: [
        { id: 1, text: "가 - 원자성", isCorrect: false },
        { id: 2, text: "나 - 일관성", isCorrect: false },
        { id: 3, text: "다 - 고립성", isCorrect: false },
        { id: 4, text: "라 - 지속성", isCorrect: true },
      ],
      rationale:
        "가)는 일관성, 나)는 지속성, 다)는 원자성, 라)는 고립성에 대한 설명입니다.",
      hint: "일관성은 '정합성 유지', 원자성은 'All or Nothing'입니다.",
    },
    {
      id: 2,
      category: "DML",
      question:
        "아래 SQL 구문을 실행했을 때 발생할 수 있는 문제점으로 가장 적절한 것은?",
      code: "UPDATE EMP\nSET SAL = SAL * 1.1;",
      options: [
        {
          id: 1,
          text: "에러가 발생하며 쿼리가 실행되지 않는다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "첫 번째 행의 SAL 값만 10% 인상된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "테이블의 모든 직원의 SAL 값이 10% 인상된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "DDL 구문이므로 자동 커밋되어 롤백할 수 없다.",
          isCorrect: false,
        },
      ],
      rationale:
        "UPDATE 구문에서 WHERE 절을 생략하면 테이블 내의 모든 데이터가 수정됩니다.",
      hint: "대참사 주의! 조건을 지정하는 절이 빠져 있습니다.",
    },
    {
      id: 3,
      category: "DDL 및 DML 구분",
      question: "다음 DDL 명령어 중 성격이 다른 하나는 무엇인가?",
      options: [
        { id: 1, text: "CREATE", isCorrect: false },
        { id: 2, text: "ALTER", isCorrect: false },
        { id: 3, text: "TRUNCATE", isCorrect: false },
        { id: 4, text: "DELETE", isCorrect: true },
      ],
      rationale:
        "DELETE는 데이터 조작어(DML)이며, CREATE, ALTER, TRUNCATE는 데이터 정의어(DDL)입니다.",
      hint: "구조를 다루느냐, 안의 데이터를 조작하느냐의 차이입니다.",
    },
    {
      id: 4,
      category: "TCL (SAVEPOINT)",
      question:
        "아래의 시나리오를 수행한 후, `ROLLBACK TO SP1;`을 실행했을 때의 결과로 옳은 것은?",
      code: "INSERT INTO DEPT VALUES (10, 'HR', 'SEOUL');\nSAVEPOINT SP1;\nINSERT INTO DEPT VALUES (20, 'IT', 'BUSAN');\nSAVEPOINT SP2;",
      options: [
        {
          id: 1,
          text: "10번, 20번 부서 데이터가 모두 취소된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "20번 부서 데이터 입력만 취소되고, SP2 저장점은 유지된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "20번 부서 데이터 입력이 취소되며, SP2 저장점은 영구 소멸된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "10번 부서 데이터만 DB에 영구 저장(Commit)된다.",
          isCorrect: false,
        },
      ],
      rationale:
        "SP1으로 롤백하면 그 시점 이후에 발생한 모든 작업과 저장점(SP2)은 영구적으로 소멸됩니다. (미래 깃발 소멸 규칙)",
      hint: "과거로 타임머신을 타면 미래에 꽂았던 깃발은 어떻게 될까요?",
    },
    {
      id: 5,
      category: "삭제 명령어 비교",
      question: "데이터베이스의 삭제 명령어에 대한 설명으로 틀린 것은?",
      options: [
        {
          id: 1,
          text: "DELETE는 Undo 로그를 기록하며 삭제하므로 속도가 상대적으로 느리다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "TRUNCATE는 테이블의 구조는 남기고 데이터를 모두 즉시 삭제한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "DROP은 테이블의 데이터와 구조를 완전히 삭제하며 롤백이 불가하다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "TRUNCATE는 DML에 속하므로 사용자가 명시적으로 커밋해야 한다.",
          isCorrect: true,
        },
      ],
      rationale:
        "TRUNCATE는 DDL(데이터 정의어)에 속하며, 실행 즉시 Auto-Commit 되므로 롤백할 수 없습니다.",
      hint: "빈출 3대 삭제 명령어 비교 표의 '언어 종류'를 떠올려보세요.",
    },
    {
      id: 6,
      category: "MERGE 문",
      question: "다음 MERGE 구문에 대한 설명으로 옳지 않은 것은?",
      code: "MERGE INTO EMP_TARGET T\nUSING EMP_SOURCE S\n   ON (T.EMPNO = S.EMPNO)\nWHEN MATCHED THEN\n    UPDATE SET T.SAL = S.SAL\n    DELETE WHERE (T.SAL < 2000)\nWHEN NOT MATCHED THEN\n    INSERT (EMPNO, ENAME, SAL) VALUES (S.EMPNO, S.ENAME, S.SAL);",
      options: [
        {
          id: 1,
          text: "타겟 테이블과 소스 테이블의 EMPNO가 같으면 UPDATE를 수행한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "두 테이블의 EMPNO가 일치하지 않으면 INSERT를 수행한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "DELETE 구문은 소스 테이블의 전체 데이터 중 SAL이 2000 미만인 것을 모두 삭제한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "하나의 SQL 문장으로 조건에 따른 INSERT와 UPDATE 처리가 가능하다.",
          isCorrect: false,
        },
      ],
      rationale:
        "MERGE 문 내의 DELETE는 조건이 매치되어 'UPDATE가 실제로 수행된 행'들에 한해서만 실행 여부를 평가하여 삭제합니다.",
      hint: "MERGE + DELETE의 ★시험 빈출 포인트를 확인하세요.",
    },
    {
      id: 7,
      category: "DDL (ALTER)",
      question: "아래 구문을 실행한 후 테이블 구조에 대한 설명으로 옳은 것은?",
      code: "ALTER TABLE DEPT DROP COLUMN LOC;",
      options: [
        {
          id: 1,
          text: "LOC 컬럼 안의 데이터만 지워지고 컬럼 구조는 남는다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "LOC 컬럼이 삭제되며, 실수했다면 ROLLBACK을 통해 복구할 수 있다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "LOC 컬럼이 삭제되며, DDL 구문이므로 ROLLBACK이 불가능하다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "구문 오류가 발생한다. (Oracle 기준)",
          isCorrect: false,
        },
      ],
      rationale:
        "ALTER는 DDL 명령어이므로 실행 즉시 Auto-Commit이 발생하여 롤백이 불가능합니다.",
      hint: "구조를 변경하는 DDL 명령어의 공통적인 특징을 기억하세요.",
    },
    {
      id: 8,
      category: "트랜잭션 (Auto-Commit)",
      question:
        "아래 일련의 트랜잭션 작업을 수행한 후, DEPT 테이블에 최종적으로 저장된 행의 개수는? (초기 데이터는 0건, Oracle 기준)",
      code: "INSERT INTO DEPT VALUES (10, 'SALES');\nINSERT INTO DEPT VALUES (20, 'MARKETING');\nCREATE TABLE TEMP_TABLE (ID NUMBER);\nROLLBACK;",
      options: [
        { id: 1, text: "0개", isCorrect: false },
        { id: 2, text: "1개", isCorrect: false },
        { id: 3, text: "2개", isCorrect: true },
        { id: 4, text: "3개", isCorrect: false },
      ],
      rationale:
        "DML(INSERT) 수행 후 DDL(CREATE TABLE)을 실행하면, DDL 실행 시점에 이전 트랜잭션이 자동으로 커밋(Auto-Commit)됩니다. 따라서 마지막의 ROLLBACK은 아무런 효과가 없습니다.",
      hint: "DDL 명령어가 트랜잭션에 미치는 영향을 생각해보세요. (OX 퀴즈 빈출)",
    },
    {
      id: 9,
      category: "제약조건",
      question: "테이블 제약조건(Constraint)에 대한 설명 중 올바른 것은?",
      options: [
        {
          id: 1,
          text: "PRIMARY KEY는 중복 값을 허용하지 않지만, NULL은 1개까지 허용한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "UNIQUE KEY는 중복 값을 허용하지 않으며, 여러 개의 NULL 값 입력을 허용한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "NOT NULL 제약조건은 중복 값 입력을 방지한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "하나의 테이블에는 여러 개의 PRIMARY KEY를 설정할 수 있다.",
          isCorrect: false,
        },
      ],
      rationale:
        "NULL은 '데이터가 없는 상태'이므로 UNIQUE KEY에서는 다중 NULL 값 입력이 허용됩니다. PRIMARY KEY는 NULL 불가이며 테이블당 1개만 가능합니다.",
      hint: "UNIQUE KEY의 ★심화 포인트 부분입니다.",
    },
    {
      id: 10,
      category: "DDL (DROP)",
      question:
        "다른 테이블에서 외래키(Foreign Key)로 참조하고 있는 부모 테이블을 강제로 완전 삭제하고자 할 때 사용하는 명령어 옵션은?",
      options: [
        { id: 1, text: "DROP TABLE DEPT FORCE;", isCorrect: false },
        {
          id: 2,
          text: "DROP TABLE DEPT CASCADE CONSTRAINTS;",
          isCorrect: true,
        },
        { id: 3, text: "DELETE TABLE DEPT CASCADE;", isCorrect: false },
        { id: 4, text: "TRUNCATE TABLE DEPT FORCE;", isCorrect: false },
      ],
      rationale:
        "참조 중인 제약조건까지 함께 지워버리면서 테이블을 삭제하려면 CASCADE CONSTRAINTS 옵션을 사용해야 합니다.",
      hint: "'연쇄적으로 제약조건을 끊어낸다'는 의미의 키워드입니다.",
    },
    {
      id: 11,
      category: "DDL (RENAME)",
      question: "컬럼명을 변경하는 올바른 DDL 구문은 무엇인가? (Oracle 기준)",
      options: [
        {
          id: 1,
          text: "RENAME COLUMN LOC TO LOCATION FROM DEPT;",
          isCorrect: false,
        },
        {
          id: 2,
          text: "ALTER TABLE DEPT MODIFY COLUMN LOC TO LOCATION;",
          isCorrect: false,
        },
        {
          id: 3,
          text: "ALTER TABLE DEPT RENAME COLUMN LOC TO LOCATION;",
          isCorrect: true,
        },
        { id: 4, text: "UPDATE DEPT RENAME LOC = LOCATION;", isCorrect: false },
      ],
      rationale:
        "컬럼의 이름을 변경할 때는 ALTER TABLE 테이블명 RENAME COLUMN 기존컬럼 TO 새컬럼; 형식을 사용합니다.",
      hint: "테이블의 구조를 변경하는 명령어(ALTER)의 하위 기능입니다.",
    },
    {
      id: 12,
      category: "제약조건",
      question: "아래 쿼리의 빈칸 (A)에 들어갈 제약조건으로 가장 알맞은 것은?",
      code: "CREATE TABLE EMP (\n    SAL NUMBER(7,2) (   A   ) (SAL > 0)\n);",
      options: [
        { id: 1, text: "NOT NULL", isCorrect: false },
        { id: 2, text: "UNIQUE", isCorrect: false },
        { id: 3, text: "PRIMARY KEY", isCorrect: false },
        { id: 4, text: "CHECK", isCorrect: true },
      ],
      rationale:
        "설정한 조건식(예: 급여가 0보다 커야 함)을 만족하는 데이터만 입력을 허용하는 제약조건은 CHECK입니다.",
      hint: "입력될 값을 '검사'하는 제약조건입니다.",
    },
    {
      id: 13,
      category: "DCL (ROLE)",
      question: "DCL의 역할 중 하나인 ROLE에 대한 설명으로 가장 적절한 것은?",
      options: [
        {
          id: 1,
          text: "테이블 구조를 변경하는 권한을 의미한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "한 번 부여하면 REVOKE로 다시 회수할 수 없는 강력한 시스템 권한이다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "다수의 권한을 하나로 묶어 사용자에게 일괄 부여하기 위해 사용하는 권한들의 묶음이다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "트랜잭션의 커밋과 롤백을 제어하는 객체이다.",
          isCorrect: false,
        },
      ],
      rationale:
        "ROLE은 여러 사용자와 권한들 사이에서 중개 역할을 하는 권한의 세트(묶음)로, 효율적인 권한 관리를 위해 사용됩니다.",
      hint: "CONNECT, RESOURCE 같은 것들이 기본 제공되는 ROLE입니다.",
    },
    {
      id: 14,
      category: "DML (INSERT)",
      question:
        "컬럼을 명시하지 않고 INSERT 구문을 작성할 때 지켜야 할 필수 조건은?",
      code: "INSERT INTO EMP VALUES (1001, '지유', 3000);",
      options: [
        {
          id: 1,
          text: "테이블의 첫 번째 컬럼부터 순서대로 3개만 입력하면 된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "테이블의 전체 컬럼 순서 및 데이터 타입에 맞춰 모든 값을 생략 없이 입력해야 생략 없이 입력해야 한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "반드시 PRIMARY KEY 컬럼의 값만 입력해야 한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "빈 값이 들어가야 하는 곳은 시스템이 자동으로 파악하여 제외해 준다.",
          isCorrect: false,
        },
      ],
      rationale:
        "컬럼명을 생략할 경우, 반드시 대상 테이블의 전체 컬럼 수와 순서에 맞게 VALUES 값을 나열해야 합니다.",
      hint: "1교시 1.1 기본 DML 명령어의 INSERT 주의사항을 떠올려보세요.",
    },
    {
      id: 15,
      category: "트랜잭션",
      question:
        "다음 중 DBMS별 트랜잭션 기본 모드의 차이에 대한 설명으로 올바른 것은?",
      options: [
        {
          id: 1,
          text: "Oracle은 기본적으로 Auto-Commit 모드로 동작한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "SQL Server는 DML 수행 후 반드시 사용자가 명시적으로 COMMIT을 해야 반영된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Oracle은 DML 수행 후 명시적으로 COMMIT이나 ROLLBACK을 해야 트랜잭션이 종료된다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "두 DBMS 모두 DDL 명령어 수행 시 롤백이 가능하다.",
          isCorrect: false,
        },
      ],
      rationale:
        "Oracle은 수동 커밋(명시적 COMMIT/ROLLBACK 필요)이 기본이며, SQL Server는 Auto-Commit이 기본 모드입니다.",
      hint: "2교시의 [주의!] DBMS별 트랜잭션 기본 모드 차이 부분을 참고하세요.",
    },
    {
      id: 16,
      category: "DDL (ALTER)",
      question:
        "이미 생성된 테이블에 제약조건을 사후에 추가하려고 한다. 올바른 구문은?",
      options: [
        {
          id: 1,
          text: "ALTER TABLE DEPT ADD PRIMARY KEY (DEPTNO);",
          isCorrect: false,
        },
        {
          id: 2,
          text: "ALTER TABLE DEPT ADD CONSTRAINT PK_DEPT PRIMARY KEY (DEPTNO);",
          isCorrect: true,
        },
        {
          id: 3,
          text: "CREATE CONSTRAINT PK_DEPT PRIMARY KEY ON DEPT(DEPTNO);",
          isCorrect: false,
        },
        {
          id: 4,
          text: "UPDATE TABLE DEPT SET CONSTRAINT PK_DEPT = PRIMARY KEY(DEPTNO);",
          isCorrect: false,
        },
      ],
      rationale:
        "이미 존재하는 테이블에 제약조건을 추가할 때는 ALTER TABLE 테이블명 ADD CONSTRAINT 제약조건명 제약조건타입 (컬럼);을 사용합니다.",
      hint: "DDL 명령어 중 테이블 구조를 '변경'하는 명령어를 찾아보세요.",
    },
    {
      id: 17,
      category: "DCL (REVOKE)",
      question: "부여했던 권한을 회수하기 위해 사용하는 올바른 DCL 구문은?",
      options: [
        { id: 1, text: "DELETE SELECT ON EMP FROM SCOTT;", isCorrect: false },
        { id: 2, text: "DROP SELECT ON EMP FROM SCOTT;", isCorrect: false },
        { id: 3, text: "ROLLBACK SELECT ON EMP TO SCOTT;", isCorrect: false },
        { id: 4, text: "REVOKE SELECT ON EMP FROM SCOTT;", isCorrect: true },
      ],
      rationale:
        "권한을 회수할 때는 REVOKE 문을 사용합니다. (부여할 때는 GRANT)",
      hint: "DCL(데이터 제어어)에 속하는 명령어를 고르세요.",
    },
    {
      id: 18,
      category: "삭제 명령어 비교",
      question:
        "테이블의 모든 데이터를 가장 빠르게 비우면서 용량을 초기화하고 싶을 때 적합한 쿼리는?",
      options: [
        { id: 1, text: "DELETE FROM DEPT;", isCorrect: false },
        { id: 2, text: "DROP TABLE DEPT;", isCorrect: false },
        { id: 3, text: "TRUNCATE TABLE DEPT;", isCorrect: true },
        { id: 4, text: "FORMAT TABLE DEPT;", isCorrect: false },
      ],
      rationale:
        "TRUNCATE는 Undo 로그를 남기지 않고 저장 공간을 초기화하므로 데이터를 가장 빠르게 비울 수 데이터를 가장 빠르게 비울 수 있습니다. 구조는 유지됩니다.",
      hint: "3대 삭제 명령어 비교 표에서 '모든 데이터만 즉시 삭제'를 찾아보세요.",
    },
    {
      id: 19,
      category: "명령어 분류",
      question:
        "데이터를 조회하는 SELECT 문은 데이터베이스에 변형을 일으키지 않아 별도로 어떤 언어로 분류하기도 하는가?",
      options: [
        { id: 1, text: "DDL (Data Definition Language)", isCorrect: false },
        { id: 2, text: "TCL (Transaction Control Language)", isCorrect: false },
        { id: 3, text: "DQL (Data Query Language)", isCorrect: true },
        { id: 4, text: "DCL (Data Control Language)", isCorrect: false },
      ],
      rationale:
        "데이터의 조회를 목적으로 하는 SELECT는 넓은 의미로 DML에 속하지만, 별도로 질의어인 DQL로 분류하기도 합니다.",
      hint: "Query(질의)라는 단어가 포함되어 있습니다.",
    },
    {
      id: 20,
      category: "DDL (ALTER)",
      question: "Oracle 기준 데이터 타입 변경을 위한 올바른 SQL 구문은?",
      options: [
        {
          id: 1,
          text: "ALTER TABLE DEPT MODIFY (LOC VARCHAR2(20));",
          isCorrect: true,
        },
        {
          id: 2,
          text: "ALTER TABLE DEPT ALTER COLUMN LOC VARCHAR2(20);",
          isCorrect: false,
        },
        {
          id: 3,
          text: "CHANGE TABLE DEPT MODIFY LOC VARCHAR2(20);",
          isCorrect: false,
        },
        {
          id: 4,
          text: "UPDATE TABLE DEPT SET LOC TYPE VARCHAR2(20);",
          isCorrect: false,
        },
      ],
      rationale:
        "Oracle에서 데이터 타입을 변경할 때는 MODIFY를 사용합니다. (SQL Server는 ALTER COLUMN 사용)",
      hint: "3.1 DDL 명령어 종류 중 데이터 타입 변경 부분을 확인하세요.",
    },
  ],
  14: [
    {
      id: 1,
      category: "[DAY 8] \uc11c\ube0c\ucffc\ub9ac & \ubdf0 (Subquery & View)",
      question:
        "\ub2e4\uc74c \uc911 \uc11c\ube0c\ucffc\ub9ac\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uac00\uc7a5 \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc11c\ube0c\ucffc\ub9ac\ub294 \uba54\uc778\ucffc\ub9ac\uc758 \uceec\ub7fc\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc11c\ube0c\ucffc\ub9ac\ub294 \ud56d\uc0c1 \uad04\ud638 `()`\ub85c \uac10\uc2f8\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc11c\ube0c\ucffc\ub9ac \ub0b4\uc5d0\uc11c\ub294 \uc6d0\uce59\uc801\uc73c\ub85c `ORDER BY` \uc808\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uba54\uc778\ucffc\ub9ac\ub294 \uc11c\ube0c\ucffc\ub9ac\uc758 \uceec\ub7fc\uc744 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "\uc11c\ube0c\ucffc\ub9ac\ub294 \uba54\uc778\ucffc\ub9ac\uc758 \uceec\ub7fc\uc744 \uc4f8 \uc218 \uc788\uc9c0\ub9cc(\uc0c1\uc18d), \uba54\uc778\ucffc\ub9ac\ub294 \uc11c\ube0c\ucffc\ub9ac\uc758 \uceec\ub7fc\uc744 \uc9c1\uc811 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      hint: "\ub9c8\ud2b8\ub8cc\uc2dc\uce74 \uc778\ud615\ucc98\ub7fc '\uc548'\uc5d0 \uc788\ub294 \uc778\ud615\uc740 '\ubc16'\uc744 \ubcfc \uc218 \uc788\uc9c0\ub9cc, '\ubc16'\uc5d0\uc11c\ub294 '\uc548'\uc758 \uc138\ubd80 \uceec\ub7fc\uc774 \uc548 \ubcf4\uc785\ub2c8\ub2e4.",
    },
    {
      id: 2,
      category: "[DAY 8] \uc11c\ube0c\ucffc\ub9ac & \ubdf0 (Subquery & View)",
      question:
        "\ub2e4\uc74c SQL\uc758 \uc2e4\ud589 \uacb0\uacfc\ub85c \ucd9c\ub825\ub418\ub294 \ud589\uc758 \uc218\ub294?",
      code: "SELECT * FROM EMP\nWHERE DEPTNO NOT IN (SELECT DEPTNO FROM DEPT WHERE LOC IN ('NEW YORK', NULL));",
      options: [
        { id: 1, text: "0\uac74", isCorrect: true },
        {
          id: 2,
          text: "DEPTNO\uac00 10\uc774 \uc544\ub2cc \ubaa8\ub4e0 \ud589",
          isCorrect: false,
        },
        {
          id: 3,
          text: "NULL\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \ud589",
          isCorrect: false,
        },
        { id: 4, text: "\uc5d0\ub7ec \ubc1c\uc0dd", isCorrect: false },
      ],
      rationale:
        "`NOT IN` \uc5f0\uc0b0\uc790 \ub4a4 \uc11c\ube0c\ucffc\ub9ac \uacb0\uacfc\uc5d0 `NULL`\uc774 \ud3ec\ud568\ub418\uba74 \uc804\uccb4 \uba54\uc778\ucffc\ub9ac \uacb0\uacfc\ub294 \ubb34\uc870\uac74 0\uac74(Empty set)\uc785\ub2c8\ub2e4.",
      hint: "[DAY 8]\uc758 'NOT IN + NULL' \ud568\uc815\uc744 \uae30\uc5b5\ud558\uc138\uc694!",
    },
    {
      id: 3,
      category: "[DAY 8] \uc11c\ube0c\ucffc\ub9ac & \ubdf0 (Subquery & View)",
      question:
        "\ub2e4\uc74c \uc911 \uc2a4\uce7c\ub77c \uc11c\ube0c\ucffc\ub9ac(Scalar Subquery)\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc62c\ubc14\ub978 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "FROM \uc808\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc11c\ube0c\ucffc\ub9ac\uc774\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ubc18\ub4dc\uc2dc 1\ud589 1\uc5f4\uc758 \ub2e8\uc77c \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uacb0\uacfc\uac00 2\uac74 \uc774\uc0c1\uc774\uc5b4\ub3c4 \uc790\ub3d9\uc73c\ub85c \uccab \ubc88\uc9f8 \ud589\ub9cc \ubc18\ud658\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc8fc\ub85c \ub370\uc774\ud130\uc758 \uc0ad\uc81c \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\uc2a4\uce7c\ub77c \uc11c\ube0c\ucffc\ub9ac\ub294 SELECT \uc808\uc5d0\uc11c \ub9c8\uce58 \ud558\ub098\uc758 '\uac12(Scalar)'\ucc98\ub7fc \uc0ac\uc6a9\ub418\ubbc0\ub85c \ubc18\ub4dc\uc2dc 1\ud589 1\uc5f4\ub9cc \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4.",
      hint: "1x1\uc758 \ub2e8\uc77c \uac12\uc744 \uae30\uc5b5\ud558\uc138\uc694.",
    },
    {
      id: 4,
      category: "[DAY 8] \uc11c\ube0c\ucffc\ub9ac & \ubdf0 (Subquery & View)",
      question:
        "\ubdf0(View)\uc758 \ud2b9\uc9d5 \uc911 '\ub3c5\ub9bd\uc131'\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\ubdf0 \uc790\uccb4\uc5d0 \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud558\uc5ec \uc870\ud68c \uc131\ub2a5\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \ub192\uc77c \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ud14c\uc774\ube14 \uad6c\uc870\uac00 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ubdf0\ub97c \uc0ac\uc6a9\ud558\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc218\uc815\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ubdf0\ub294 \ubb3c\ub9ac\uc801\uc778 \uc800\uc7a5 \uacf5\uac04\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \ucc28\uc9c0\ud558\uc5ec \ub370\uc774\ud130\ub97c \ubcf4\uc874\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc5ec\ub7ec \ud14c\uc774\ube14\uc744 \uc870\uc778\ud55c \ubdf0\ub294 \ud56d\uc0c1 DML \uc791\uc5c5\uc774 \ub3c5\ub9bd\uc801\uc73c\ub85c \uac00\ub2a5\ud558\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub17c\ub9ac\uc801 \ub370\uc774\ud130 \ub3c5\ub9bd\uc131\uc740 \uc6d0\ubcf8 \ud14c\uc774\ube14\uc758 \uad6c\uc870 \ubcc0\ud654\ub97c \ubdf0\uc758 \uc815\uc758 \uc218\uc815\uc744 \ud1b5\ud574 \ud761\uc218\ud568\uc73c\ub85c\uc368 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc601\ud5a5\uc774 \uac00\uc9c0 \uc54a\uac8c \ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",
      hint: "'\ub3c5\u00b7\ud3b8\u00b7\ubcf4' \uc911 \uccab \ubc88\uc9f8 \ud2b9\uc9d5\uc785\ub2c8\ub2e4.",
    },
    {
      id: 5,
      category: "[DAY 8] \uc11c\ube0c\ucffc\ub9ac & \ubdf0 (Subquery & View)",
      question:
        "\ub2e4\uc74c \uc911 \ubdf0(View)\ub97c \uc0ad\uc81c\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \ud604\uc0c1\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc6d0\ubcf8 \ud14c\uc774\ube14\uc758 \ub370\uc774\ud130\ub3c4 \ud568\uaed8 \uc0ad\uc81c\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ubdf0\ub97c \ucc38\uc870\ud558\uace0 \uc788\ub294 \ub2e4\ub978 \ubdf0\ub294 \uc790\ub3d9\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc6d0\ubcf8 \ud14c\uc774\ube14\uc5d0\ub294 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uace0 \ubdf0\uc758 \uc815\uc758\ub9cc \uc0ad\uc81c\ub41c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\ubdf0\ub97c \uc0ad\uc81c\ud558\ub824\uba74 \ubc18\ub4dc\uc2dc `ALTER VIEW` \uba85\ub839\uc5b4\ub97c \uc368\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ubdf0\ub294 \uc2e4\uccb4\uac00 \uc5c6\ub294 \uac00\uc0c1 \ud14c\uc774\ube14\uc774\ubbc0\ub85c \uc0ad\uc81c(`DROP VIEW`) \uc2dc \ud14d\uc2a4\ud2b8 \uc815\uc758\ub9cc \uc0ac\ub77c\uc9c0\uace0 \uc6d0\ubcf8 \ub370\uc774\ud130\ub294 \ubb34\uc0ac\ud569\ub2c8\ub2e4.",
      hint: "\uc2e4\uccb4(\ub370\uc774\ud130)\ub294 \ud14c\uc774\ube14\uc5d0, \uaecd\ub370\uae30(\uc815\uc758)\ub294 \ubdf0\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.",
    },
    {
      id: 6,
      category:
        "[DAY 9] \uc9d1\ud569 \uc5f0\uc0b0\uc790 & \uadf8\ub8f9 \ud568\uc218 (Set & Group)",
      question:
        "\ub2e4\uc74c \uc911 `UNION`\uacfc `UNION ALL`\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`UNION`\uc740 \uacb0\uacfc\uc5d0\uc11c \uc911\ubcf5\ub41c \ud589\uc744 \uc81c\uac70\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`UNION ALL`\uc740 \uc911\ubcf5\ub41c \ud589\uc744 \ud3ec\ud568\ud558\uc5ec \ubaa8\ub4e0 \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc900\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`UNION`\uc740 \uc911\ubcf5 \uc81c\uac70\ub97c \uc704\ud574 \ub0b4\ubd80\uc801\uc73c\ub85c \uc815\ub82c\uc744 \uc218\ud589\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "`UNION ALL`\uc740 \uc815\ub82c\uc744 \uc218\ud589\ud558\ubbc0\ub85c `UNION`\ubcf4\ub2e4 \uc18d\ub3c4\uac00 \ub290\ub9ac\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "`UNION ALL`\uc740 \uc815\ub82c\uacfc \uc911\ubcf5 \uc81c\uac70\ub97c \ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 `UNION`\ubcf4\ub2e4 \uc18d\ub3c4\uac00 \ud6e8\uc52c \ube60\ub985\ub2c8\ub2e4.",
      hint: "\uc815\ub82c(Sort)\uc740 DB\uc5d0\uac8c \ud070 \ubd80\ub2f4\uc744 \uc8fc\ub294 \uc791\uc5c5\uc785\ub2c8\ub2e4.",
    },
    {
      id: 7,
      category:
        "[DAY 9] \uc9d1\ud569 \uc5f0\uc0b0\uc790 & \uadf8\ub8f9 \ud568\uc218 (Set & Group)",
      question:
        "\uc544\ub798 \ud14c\uc774\ube14 \ub370\uc774\ud130\uc5d0 \ub300\ud574 SQL\uc744 \uc2e4\ud589\ud588\uc744 \ub54c \uacb0\uacfc\ub85c \uc633\uc740 \uac83\uc740?\n[TABLE A: {1, 2, 2, 3}], [TABLE B: {2, 3, 4}]",
      code: "SELECT ID FROM A\nINTERSECT\nSELECT ID FROM B;",
      options: [
        { id: 1, text: "{2, 3}", isCorrect: true },
        { id: 2, text: "{1, 2, 3, 4}", isCorrect: false },
        { id: 3, text: "{2, 2, 3}", isCorrect: false },
        { id: 4, text: "{1}", isCorrect: false },
      ],
      rationale:
        "`INTERSECT`\ub294 \uad50\uc9d1\ud569\uc774\uba70, \uc9d1\ud569 \uc5f0\uc0b0\uc790\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc911\ubcf5\uc744 \uc81c\uac70\ud55c \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.",
      hint: "\uad50\uc9d1\ud569\uc744 \uad6c\ud558\uace0 \uc911\ubcf5\uc744 \uc9c0\uc6b0\uc138\uc694.",
    },
    {
      id: 8,
      category:
        "[DAY 9] \uc9d1\ud569 \uc5f0\uc0b0\uc790 & \uadf8\ub8f9 \ud568\uc218 (Set & Group)",
      question:
        "`GROUP BY ROLLUP(A, B)`\uc758 \uacb0\uacfc\uc640 \ub3d9\uc77c\ud55c \uc9d1\ud569\uc744 \uc0dd\uc131\ud558\ub294 `GROUPING SETS` \uad6c\ubb38\uc740?",
      options: [
        { id: 1, text: "`GROUPING SETS(A, B, ())`", isCorrect: false },
        { id: 2, text: "`GROUPING SETS((A, B), (A), ())`", isCorrect: true },
        { id: 3, text: "`GROUPING SETS((A, B), (B), ())`", isCorrect: false },
        { id: 4, text: "`GROUPING SETS(A, B)`", isCorrect: false },
      ],
      rationale:
        "`ROLLUP(A, B)`\ub294 (A, B) \uc0c1\uc138, (A) \uc18c\uacc4, () \uc804\uccb4 \ucd1d\uacc4\ub97c \uad6c\ud569\ub2c8\ub2e4.",
      hint: "\uacc4\uce35\uc801 \uc9d1\uacc4\uc758 \uc21c\uc11c\ub97c \uc0dd\uac01\ud558\uc138\uc694 (A+B -> A -> All).",
    },
    {
      id: 9,
      category:
        "[DAY 9] \uc9d1\ud569 \uc5f0\uc0b0\uc790 & \uadf8\ub8f9 \ud568\uc218 (Set & Group)",
      question:
        "\ub2e4\uc74c \uc911 `CUBE` \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc778\uc218\uc758 \uc21c\uc11c\uac00 \ubc14\ub00c\uba74 \uacb0\uacfc\uc758 \uc9d1\ud569 \uc790\uccb4\uac00 \ub2ec\ub77c\uc9c4\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uacc4\uce35\uc801\uc778 \uad6c\uc870\ub85c \uc18c\uacc4\ub9cc \uc0b0\ucd9c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uacb0\ud569 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \ud56d\ubaa9\uc5d0 \ub300\ud574 \ub2e4\ucc28\uc6d0 \uc9d1\uacc4\ub97c \uc218\ud589\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`ROLLUP`\ubcf4\ub2e4 \uc2dc\uc2a4\ud15c \ubd80\ud558\uac00 \uc801\uc5b4 \uc2e4\ubb34\uc5d0\uc11c \uad8c\uc7a5\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`CUBE`\ub294 \uac1c\uc758 \ubaa8\ub4e0 \uc870\ud569\uc744 \uc9d1\uacc4\ud558\ubbc0\ub85c \uc2dc\uc2a4\ud15c \ubd80\ud558\uac00 \ub9e4\uc6b0 \ud07d\ub2c8\ub2e4.",
      hint: "'\ubaa8\ub4e0 \uacbd\uc6b0\uc758 \uc218'\uac00 \ud0a4\uc6cc\ub4dc\uc785\ub2c8\ub2e4.",
    },
    {
      id: 10,
      category:
        "[DAY 9] \uc9d1\ud569 \uc5f0\uc0b0\uc790 & \uadf8\ub8f9 \ud568\uc218 (Set & Group)",
      question:
        "\uc544\ub798 SQL\uc5d0\uc11c `GROUPING` \ud568\uc218\uc758 \uacb0\uacfc\uac00 1\uc778 \ud589\uc758 \uc758\ubbf8\ub294?",
      code: "SELECT DEPTNO, GROUPING(DEPTNO), SUM(SAL)\nFROM EMP GROUP BY ROLLUP(DEPTNO);",
      options: [
        {
          id: 1,
          text: "\ud574\ub2f9 \ud589\uc774 \uc2e4\uc81c \ub370\uc774\ud130\uc784\uc744 \uc758\ubbf8\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ud574\ub2f9 \ud589\uc774 \uc9d1\uacc4(\uc18c\uacc4/\ucd1d\uacc4)\ub97c \uc704\ud574 \uc0dd\uc131\ub41c \ud589\uc784\uc744 \uc758\ubbf8\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ud574\ub2f9 \uceec\ub7fc\uc5d0 \uc2e4\uc81c `NULL` \uac12\uc774 \ub4e4\uc5b4\uc788\uc74c\uc744 \uc758\ubbf8\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc5ec \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc558\uc74c\uc744 \uc758\ubbf8\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`GROUPING` \ud568\uc218\ub294 \ud574\ub2f9 \uceec\ub7fc\uc774 \uc9d1\uacc4\uc5d0 \uc0ac\uc6a9\ub418\uc5b4 `NULL`\ub85c \ud45c\uc2dc\ub41c \uacbd\uc6b0 1\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.",
      hint: "\uc774\ub984\ud45c\ub97c \ub2ec\uc544\uc904 '\uc9d1\uacc4 \ud589'\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud0d0\uc9c0\uae30\uc785\ub2c8\ub2e4.",
    },
    {
      id: 11,
      category:
        "[DAY 9] \uc9d1\ud569 \uc5f0\uc0b0\uc790 & \uadf8\ub8f9 \ud568\uc218 (Set & Group)",
      question:
        "\ub2e4\uc74c \uc911 \uc9d1\ud569 \uc5f0\uc0b0\uc790 \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d\uc73c\ub85c \ud2c0\ub9b0 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "SELECT \uc808\uc758 \uceec\ub7fc \uc218\uac00 \ub3d9\uc77c\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc0c1\ucc9c/\ud558\ucc9c \uceec\ub7fc\uc758 \ub370\uc774\ud130 \ud0c0\uc785\uc774 \uc0c1\ud638 \ud638\ud658\ub418\uc5b4\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "ORDER BY \uc808\uc740 \uac01 SELECT \ubb38\ub9c8\ub2e4 \uac1c\ubcc4\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\ucd9c\ub825\ub418\ub294 \uceec\ub7fc\uba85\uc740 \uccab \ubc88\uc9f8 SELECT \ubb38\uc758 \uceec\ub7fc\uba85\uc744 \ub530\ub978\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`ORDER BY`\ub294 \uc9d1\ud569 \uc5f0\uc0b0\uc758 \ub9e8 \ub9c8\uc9c0\ub9c9\uc5d0 \ub2e8 \ud55c \ubc88\ub9cc \uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      hint: "\uacb0\uacfc\uac00 \ub2e4 \ud569\uccd0\uc9c4 \ud6c4\uc5d0 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc904\uc744 \uc138\uc6cc\uc57c \ud569\ub2c8\ub2e4.",
    },
    {
      id: 12,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "`RANK()`, `DENSE_RANK()`, `ROW_NUMBER()` \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`RANK`\ub294 \ub3d9\uc77c \uc21c\uc704\uac00 \uc788\uc744 \uacbd\uc6b0 \ub2e4\uc74c \uc21c\uc704\ub97c \uac74\ub108\ub6f4\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`DENSE_RANK`\ub294 \ub3d9\uc77c \uc21c\uc704\uac00 \uc788\uc5b4\ub3c4 \ub2e4\uc74c \uc21c\uc704\ub97c \uc5f0\uc18d\ud574\uc11c \ubd80\uc5ec\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`ROW_NUMBER`\ub294 \ub3d9\uc77c\ud55c \uac12\uc774\ub77c\ub3c4 \uc720\uc77c\ud55c \uc21c\uc704\ub97c \ubd80\uc5ec\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc138 \ud568\uc218 \ubaa8\ub450 `PARTITION BY` \uc808\uc774 \uc5c6\uc73c\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "`PARTITION BY`\ub294 \uc120\ud0dd \uc0ac\ud56d\uc785\ub2c8\ub2e4. \uc5c6\uc73c\uba74 \uc804\uccb4 \ub370\uc774\ud130\ub97c \ud558\ub098\uc758 \uadf8\ub8f9\uc73c\ub85c \ubcf4\uace0 \uc21c\uc704\ub97c \ub9e4\uae41\ub2c8\ub2e4.",
      hint: "\ub4f1\uc218 \ub9e4\uae30\ub294 \ubc95\uc758 \ucc28\uc774\ub9cc \uae30\uc5b5\ud558\uc138\uc694.",
    },
    {
      id: 13,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "\ub2e4\uc74c \ub370\uc774\ud130\ub97c \uae30\uc900\uc73c\ub85c `SUM(AMT) OVER(ORDER BY DATE ROWS BETWEEN 1 PRECEDING AND CURRENT ROW)`\uc758 3\ubc88\uc9f8 \ud589 \uacb0\uacfc\uac12\uc740?\n[Row1: 100], [Row2: 200], [Row3: 300]",
      options: [
        { id: 1, text: "600", isCorrect: false },
        { id: 2, text: "500", isCorrect: true },
        { id: 3, text: "300", isCorrect: false },
        { id: 4, text: "400", isCorrect: false },
      ],
      rationale:
        "\ud604\uc7ac \ud589(300)\uacfc \uadf8 \uc55e\uc758 1\uac1c \ud589(200)\uc744 \ub354\ud558\ubbc0\ub85c 500\uc785\ub2c8\ub2e4.",
      hint: "`ROWS 1 PRECEDING`\uc740 '\ub098\uc640 \ub0b4 \uc55e\uc0ac\ub78c'\uc785\ub2c8\ub2e4.",
    },
    {
      id: 14,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "\uc708\ub3c4\uc6b0 \ud568\uc218\uc758 \uae30\ubcf8 \ubc94\uc704(Default Window Frame)\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`ORDER BY`\uac00 \uc5c6\uc744 \ub54c: \ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 (`ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`)",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`ORDER BY`\uac00 \uc788\uc744 \ub54c: \ucc98\uc74c\ubd80\ud130 \ud604\uc7ac \ud589\uae4c\uc9c0 (`RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`)",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`ORDER BY` \uc720\ubb34\uc640 \uc0c1\uad00\uc5c6\uc774 \ud56d\uc0c1 \ud604\uc7ac \ud589\ub9cc \uacc4\uc0b0\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\u2460\uacfc \u2461 \ubaa8\ub450 \ub9de\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "`ORDER BY`\uac00 \uc788\uc73c\uba74 \ub204\uc801\uc758 \uc758\ubbf8\uac00 \uc0dd\uaca8 '\ud604\uc7ac \ud589\uae4c\uc9c0'\uac00 \uae30\ubcf8\uac12\uc774 \ub429\ub2c8\ub2e4.",
      hint: "[DAY 10]\uc758 \ud83d\udea8 \uc8fc\uc758\uc0ac\ud56d \ud30c\ud2b8\ub97c \ub2e4\uc2dc \ubcf4\uc138\uc694!",
    },
    {
      id: 15,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "`LAG`\uc640 `LEAD` \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`LAG`\ub294 \uc774\ud6c4 \ud589\uc758 \uac12\uc744 \uac00\uc838\uc628\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`LEAD`\ub294 \uc774\uc804 \ud589\uc758 \uac12\uc744 \uac00\uc838\uc628\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`LAG(SAL, 1, 0)`\uc5d0\uc11c 0\uc740 \uac00\uc838\uc62c \uac12\uc774 \uc5c6\uc744 \ub54c \ucd9c\ub825\ud560 \uae30\ubcf8\uac12\uc774\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\ub450 \ud568\uc218\ub294 \ubc18\ub4dc\uc2dc `GROUP BY`\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`LAG`\ub294 \uc774\uc804(\uacfc\uac70), `LEAD`\ub294 \uc774\ud6c4(\ubbf8\ub798) \uac12\uc744 \uac00\uc838\uc635\ub2c8\ub2e4. 3\ubc88\uc9f8 \uc778\uc790\ub294 `NULL` \ub300\uc751 \uac12\uc785\ub2c8\ub2e4.",
      hint: "Lagging(\ub4a4\ucc98\uc9d0) = \uacfc\uac70, Lead(\uc120\ub3c4) = \ubbf8\ub798.",
    },
    {
      id: 16,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "\ub2e4\uc74c \uc911 `RATIO_TO_REPORT` \ud568\uc218\uc758 \uc6a9\ub3c4\ub294?",
      options: [
        {
          id: 1,
          text: "\ud30c\ud2f0\uc158 \ub0b4\uc758 \ub204\uc801 \ubc31\ubd84\uc728\uc744 \uad6c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc804\uccb4 \ud569\uacc4 \ub300\ube44 \ud604\uc7ac \ud589\uc758 \uac12\uc758 \ube44\uc728\uc744 \uad6c\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ud604\uc7ac \ud589\uacfc \uc55e\ub4a4 \ud589\uc758 \ud3c9\uade0\uc744 \uad6c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc804\uccb4 \ub370\uc774\ud130\uc758 \uc911\uc559\uac12\uc744 \uad6c\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub9ac\ud3ec\ud2b8 \ube44\uc911\uc744 \uad6c\ud560 \ub54c \uc4f0\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",
      hint: "\ub0b4 \uae09\uc5ec / \uc804\uccb4 \uae09\uc5ec \ud569\uacc4.",
    },
    {
      id: 17,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "`NTILE(4)` \ud568\uc218\ub97c 10\uac1c\uc758 \ud589\uc5d0 \uc801\uc6a9\ud588\uc744 \ub54c, \uac01 \uadf8\ub8f9\uc5d0 \ubc30\uc815\ub418\ub294 \ud589\uc758 \uc218\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        { id: 1, text: "3, 3, 2, 2", isCorrect: true },
        { id: 2, text: "2, 2, 3, 3", isCorrect: false },
        { id: 3, text: "4, 2, 2, 2", isCorrect: false },
        { id: 4, text: "3, 2, 2, 3", isCorrect: false },
      ],
      rationale:
        "\uc55e\uc5d0\uc11c\ubd80\ud130 \ub0a8\ub294 \ub098\uba38\uc9c0\ub97c \ud558\ub098\uc529 \ucc44\uc6c1\ub2c8\ub2e4. 10/4 = 2...2 \uc774\ubbc0\ub85c \uc55e\uc758 \ub450 \uadf8\ub8f9\uc5d0 1\uac1c\uc529 \ub354 \ucd94\uac00\ud569\ub2c8\ub2e4.",
      hint: "\ubaab\uc740 2, \ub098\uba38\uc9c0\ub294 2. \uc55e\uc5d0\uc11c\ubd80\ud130 \ubcf4\ub108\uc2a4!",
    },
    {
      id: 18,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "\uc708\ub3c4\uc6b0 \ud568\uc218 \uc0ac\uc6a9 \uc2dc `ORDER BY` \uc808\uc774 \uc5c6\uc744 \ub54c `SUM(SAL) OVER()`\uc758 \uacb0\uacfc\ub294?",
      options: [
        {
          id: 1,
          text: "\ub204\uc801 \ud569\uacc4\uac00 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc804\uccb4 \ud589\uc5d0 \ub300\ud574 \ub3d9\uc77c\ud55c \uc804\uccb4 \ud569\uacc4\uac00 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uac01 \ud589\uc758 `SAL` \uac12 \uc790\uccb4\uac00 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\uc21c\uc11c\uac00 \uc5c6\uc73c\uba74 \uc5b4\ub514\uae4c\uc9c0\uac00 \ud604\uc7ac\uc778 \uc9c0 \uc54c \uc218 \uc5c6\uc5b4 \uc804\uccb4\ub97c \ud558\ub098\uc758 \ucc3d\ubb38\uc73c\ub85c \ubd05\ub2c8\ub2e4.",
      hint: "[DAY 10] \ud45c: ORDER BY \uc5c6\uc74c = Grand Total.",
    },
    {
      id: 19,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "`CUME_DIST` \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc0c1\ub300\uc801 \uc21c\uc704\ub97c 0~1 \uc0ac\uc774 \uac12\uc73c\ub85c \ubc18\ud658\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ub204\uc801 \ubd84\ud3ec\ub97c \uad6c\ud558\uba70, (\ub098\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \ud589 \uc218 / \uc804\uccb4 \ud589 \uc218)\ub85c \uacc4\uc0b0\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ud56d\uc0c1 0.5\ub97c \uae30\uc900\uc73c\ub85c \ub300\uce6d\uc801\uc778 \uac12\uc744 \ubc18\ud658\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ub370\uc774\ud130\uac00 10\uac1c\uc77c \ub54c 1\ub4f1\uc758 \uac12\uc740 \ud56d\uc0c1 0.1\uc774\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub204\uc801 \ubd84\ud3ec(Cumulative Distribution) \ud568\uc218\uc785\ub2c8\ub2e4.",
      hint: "\ub098\ub97c \ud3ec\ud568\ud574\uc11c \ub098\ubcf4\ub2e4 \uc0c1\uc704\uad8c\uc774 \uba87 \uba85\uc778\uac00?",
    },
    {
      id: 20,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "`FIRST_VALUE`\uc640 `LAST_VALUE` \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`LAST_VALUE`\ub294 \ud56d\uc0c1 \uc804\uccb4 \ud30c\ud2f0\uc158\uc758 \ub9c8\uc9c0\ub9c9 \uac12\uc744 \uc815\ud655\ud788 \uac00\uc838\uc628\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`LAST_VALUE` \uc0ac\uc6a9 \uc2dc \ubc94\uc704\ub97c `UNBOUNDED FOLLOWING`\uae4c\uc9c0 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ud604\uc7ac \ud589\uc774 \ub9c8\uc9c0\ub9c9 \uac12\uc774 \ub41c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "`FIRST_VALUE`\ub294 `ORDER BY` \uc808\uc774 \uc5c6\uc5b4\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ub450 \ud568\uc218\ub294 \uc218\uce58\ud615 \ub370\uc774\ud130\uc5d0\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\uc708\ub3c4\uc6b0 \uae30\ubcf8 \ubc94\uc704\uac00 '\ud604\uc7ac \ud589\uae4c\uc9c0'\uc774\ubbc0\ub85c `LAST_VALUE`\ub294 \ubc94\uc704 \uc9c0\uc815\uc774 \ud544\uc218\uc785\ub2c8\ub2e4.",
      hint: "\ud83d\udea8 [\uc2dc\ud5d8 \ube48\ucd9c] LAST_VALUE\uc758 \ubc30\uc2e0!",
    },
    {
      id: 21,
      category:
        "[DAY 10] \uc708\ub3c4\uc6b0 \ud568\uc218 (Window Function) - \u2605\ube48\ucd9c\u2605",
      question:
        "\ub2e4\uc74c \uc911 \uc708\ub3c4\uc6b0 \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uacf3\uc740?",
      options: [
        { id: 1, text: "SELECT \uc808", isCorrect: false },
        {
          id: 2,
          text: "UPDATE \ubb38\uc758 SET \uc808 (\uc11c\ube0c\ucffc\ub9ac \ub0b4)",
          isCorrect: false,
        },
        { id: 3, text: "WHERE \uc808", isCorrect: true },
        { id: 4, text: "ORDER BY \uc808", isCorrect: false },
      ],
      rationale:
        "\uc708\ub3c4\uc6b0 \ud568\uc218\ub294 \uacb0\uacfc\uac00 \ucd94\ucd9c\ub41c \ud6c4 \ud3ec\uc2a4\ud2b8\uc787\ucc98\ub7fc \ubd99\ub294 \uae30\ub2a5\uc774\ub77c `WHERE` \uc808\uc5d0\uc11c \ud544\ud130\ub9c1 \uc870\uac74\uc73c\ub85c \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      hint: "\uc21c\uc704\ub85c \uc790\ub974\ub824\uba74 \uc11c\ube0c\ucffc\ub9ac(\uc778\ub77c\uc778 \ubdf0)\ub97c \uac70\uccd0\uc57c \ud569\ub2c8\ub2e4.",
    },
    {
      id: 22,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "Oracle\uc5d0\uc11c `SELECT * FROM EMP WHERE ROWNUM = 2` \uc2e4\ud589 \uc2dc \uacb0\uacfc\ub294?",
      options: [
        {
          id: 1,
          text: "2\ubc88\uc9f8 \ud589\uc774 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc544\ubb34 \ud589\ub3c4 \ucd9c\ub825\ub418\uc9c0 \uc54a\ub294\ub2e4 (0\uac74).",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\uc804\uccb4 \ud589\uc774 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`ROWNUM`\uc740 1\uc774 \uba3c\uc800 \uc120\ud0dd\ub418\uc5b4\uc57c 2\uac00 \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. 1\uc774 \uc5c6\uc73c\uba74 2\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      hint: "[DAY 11] ROWNUM\uc758 '1'\uc758 \ubc95\uce59.",
    },
    {
      id: 23,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "\ub2e4\uc74c \uc911 \uacc4\uce35\ud615 \uc9c8\uc758\uc5d0\uc11c `PRIOR` \ud0a4\uc6cc\ub4dc\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`PRIOR \uc790\uc2dd = \ubd80\ubaa8` \ud615\ud0dc\ub294 \uc704\uc5d0\uc11c \uc544\ub798\ub85c \ub0b4\ub824\uac00\ub294 \uc21c\ubc29\ud5a5 \uc804\uac1c\uc774\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`PRIOR \ubd80\ubaa8 = \uc790\uc2dd` \ud615\ud0dc\ub294 \uc544\ub798\uc5d0\uc11c \uc704\ub85c \uc62c\ub77c\uac00\ub294 \uc5ed\ubc29\ud5a5 \uc804\uac1c\uc774\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`PRIOR`\ub294 '\uc9c1\uc804\uc5d0 \uc77d\uc740 \ub370\uc774\ud130'\ub97c \uc758\ubbf8\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`PRIOR`\ub294 \ubc18\ub4dc\uc2dc `START WITH` \uc808\uc5d0\ub9cc \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`PRIOR`\ub294 \uc774\uc804 \ub2e8\uacc4\uc758 \uac12\uc744 \ucc38\uc870\ud569\ub2c8\ub2e4. `PRIOR \ubd80\ubaa8 = \uc790\uc2dd`\uc774 \uc21c\ubc29\ud5a5\uc785\ub2c8\ub2e4.",
      hint: "\uc0ac\uc7a5\ub2d8(PRIOR)\uc758 \ubc88\ud638\uac00 \ub0b4 \uc0c1\uc0ac \ubc88\ud638\uc778 \ub140\uc11d\ub4e4 \ub098\uc640\ub77c! (\uc21c\ubc29\ud5a5)",
    },
    {
      id: 24,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "\uacc4\uce35\ud615 \uc9c8\uc758\uc758 \uac00\uc0c1 \uceec\ub7fc \uc911 \ub9d0\ub2e8 \ub178\ub4dc(\uc790\uc2dd\uc774 \uc5c6\ub294 \ub178\ub4dc)\ub97c \ud310\ubcc4\ud558\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "`LEVEL`", isCorrect: false },
        { id: 2, text: "`CONNECT_BY_ISLEAF`", isCorrect: true },
        { id: 3, text: "`SYS_CONNECT_BY_PATH`", isCorrect: false },
        { id: 4, text: "`CONNECT_BY_ROOT`", isCorrect: false },
      ],
      rationale:
        "\ub098\ubb47\uc78e(Leaf)\uc740 \ud2b8\ub9ac\uc758 \ub05d\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub05d\uc774\uba74 1\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.",
      hint: "Leaf = \ub9d0\ub2e8 \uc0ac\uc6d0.",
    },
    {
      id: 25,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "\ub2e4\uc74c SQL\uc758 \uc2e4\ud589 \uacb0\uacfc\ub85c \uac00\uc7a5 \uc801\uc808\ud55c \uac83\uc740?",
      code: "SELECT ENAME FROM EMP\nSTART WITH ENAME = 'KING'\nCONNECT BY PRIOR EMPNO = MGR\nORDER SIBLINGS BY ENAME;",
      options: [
        {
          id: 1,
          text: "\uc804\uccb4 \uc0ac\uc6d0\uc744 \uc774\ub984\uc21c\uc73c\ub85c \uc815\ub82c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uacc4\uce35 \uad6c\uc870\ub97c \uc720\uc9c0\ud558\uba74\uc11c \ub3d9\uc77c \ub808\ubca8\uc758 \ud615\uc81c\ub4e4\ub07c\ub9ac\ub9cc \uc774\ub984\uc21c\uc73c\ub85c \uc815\ub82c\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "'KING'\uc758 \ubd80\ud558\uc9c1\uc6d0\ub4e4\ub9cc \uc774\ub984 \uc5ed\uc21c\uc73c\ub85c \uc815\ub82c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`ORDER SIBLINGS BY`\ub294 \uacc4\uce35 \ud2b8\ub9ac\ub97c \uae68\ub728\ub9ac\uc9c0 \uc54a\uace0 \ud615\uc81c \ub178\ub4dc \ub0b4\uc5d0\uc11c\ub9cc \uc815\ub82c\ud569\ub2c8\ub2e4.",
      hint: "\uc871\ubcf4 \uc21c\uc11c\ub97c \uc9c0\ud0a4\uba74\uc11c \ud615\uc81c\ub07c\ub9ac \ud0a4\uc21c\uc73c\ub85c \uc11c\uae30.",
    },
    {
      id: 26,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "\uc140\ud504 \uc870\uc778(Self Join) \uc2dc \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\ud14c\uc774\ube14\uc758 \ubcc4\uce6d(Alias)",
          isCorrect: true,
        },
        { id: 2, text: "`UNION` \uc5f0\uc0b0\uc790", isCorrect: false },
        {
          id: 3,
          text: "\uc678\ubd80 \uc870\uc778(Outer Join) \uad6c\ubb38",
          isCorrect: false,
        },
        { id: 4, text: "`CONNECT BY` \uc808", isCorrect: false },
      ],
      rationale:
        "\ub3d9\uc77c\ud55c \ud14c\uc774\ube14\uc744 \ub450 \ubc88 \ud638\ucd9c\ud558\ubbc0\ub85c \uad6c\ubd84\ud558\uae30 \uc704\ud55c \ubcc4\uce6d\uc774 \ud544\uc218\uc785\ub2c8\ub2e4.",
      hint: "\ub098\uc640 \ub098\uc758 \uc0c1\uc0ac\ub97c \uad6c\ubd84\ud560 '\uac00\uba74(Alias)'\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
    },
    {
      id: 27,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "`START WITH` \uc808\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc0dd\ub7b5\ud560 \uacbd\uc6b0 \uc804\uccb4 \ud589\uc744 \ub8e8\ud2b8\ub85c \ubcf4\uace0 \uacc4\uce35\uc744 \uc804\uac1c\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "\ubc18\ub4dc\uc2dc `NULL` \uac12\ub9cc \uc870\uac74\uc73c\ub85c \uc904 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uacc4\uce35 \uc804\uac1c\uc758 \uc885\ub8cc \uc870\uac74\uc744 \uae30\uc220\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "`CONNECT BY` \uc808\ubcf4\ub2e4 \ub4a4\uc5d0 \uc704\uce58\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`START WITH`\ub294 \uc2dc\uc791\uc810\uc774\uba70, \uc0dd\ub7b5 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      hint: "\uc5b4\ub514\uc11c\ubd80\ud130 \uc871\ubcf4\ub97c \uc2dc\uc791\ud560 \uac83\uc778\uac00?",
    },
    {
      id: 28,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "`SYS_CONNECT_BY_PATH(ENAME, '/')`\uc758 \uacb0\uacfc\uac12 \uc608\uc2dc\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        { id: 1, text: "/KING/BLAKE/ALLEN", isCorrect: true },
        { id: 2, text: "KING-BLAKE-ALLEN", isCorrect: false },
        { id: 3, text: "ALLEN/BLAKE/KING", isCorrect: false },
        { id: 4, text: "/ALLEN", isCorrect: false },
      ],
      rationale:
        "\ub8e8\ud2b8\ubd80\ud130 \ud604\uc7ac \ud589\uae4c\uc9c0\uc758 \uacbd\ub85c\ub97c \uad6c\ubd84\uc790\uc640 \ud568\uaed8 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",
      hint: "\ud30c\uc77c \ud0d0\uc0c9\uae30 \uc8fc\uc18c\ucc3d\uacfc \ube44\uc2b7\ud569\ub2c8\ub2e4.",
    },
    {
      id: 29,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "`CONNECT BY` \uc808\uc5d0\uc11c `NOCYCLE` \uc635\uc158\uc758 \uc5ed\ud560\uc740?",
      options: [
        {
          id: 1,
          text: "\uacc4\uce35 \uc804\uac1c \uc18d\ub3c4\ub97c \ub192\uc778\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ubb34\ud55c \ub8e8\ud504(Cycle)\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc5d0\ub7ec\ub97c \ub0b4\uc9c0 \uc54a\uace0 \uc911\ub2e8\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ub9ac\ud504 \ub178\ub4dc\ub9cc \ucd9c\ub825\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc911\ubcf5\ub41c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ubd80\ubaa8\uac00 \uc790\uc2dd\uc774 \ub418\uace0 \uc790\uc2dd\uc774 \ub2e4\uc2dc \ubd80\ubaa8\uac00 \ub418\ub294 \uc21c\ud658 \uad6c\uc870\ub97c \ubc29\uc9c0\ud569\ub2c8\ub2e4.",
      hint: "Cycle = \ube91\ube91\uc774 \ubc29\uc9c0.",
    },
    {
      id: 30,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "SQL Server\uc5d0\uc11c \uc0c1\uc704 5\uac1c\uc758 \ud589\uc744 \ucd9c\ub825\ud558\ub294 \uc62c\ubc14\ub978 \uad6c\ubb38\uc740?",
      options: [
        {
          id: 1,
          text: "`SELECT * FROM EMP WHERE ROWNUM <= 5;`",
          isCorrect: false,
        },
        { id: 2, text: "`SELECT TOP(5) * FROM EMP;`", isCorrect: true },
        {
          id: 3,
          text: "`SELECT * FROM EMP FETCH FIRST 5 ROWS ONLY;`",
          isCorrect: false,
        },
        { id: 4, text: "`SELECT * FROM EMP LIMIT 5;`", isCorrect: false },
      ],
      rationale:
        "SQL Server\ub294 `TOP` \uc808\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
      hint: "[DAY 11] 1.2 SQL Server: TOP \uc808.",
    },
    {
      id: 31,
      category:
        "[DAY 11] \uace0\uae09 \uc9c8\uc758 (Top N, Self Join, Hierarchical) - \u2605\ube48\ucd9c\u2605",
      question:
        "`OFFSET 5 ROWS FETCH NEXT 10 ROWS ONLY` \uad6c\ubb38\uc758 \uc758\ubbf8\ub294?",
      options: [
        {
          id: 1,
          text: "1\ud589\ubd80\ud130 10\ud589\uae4c\uc9c0 \ucd9c\ub825\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "5\ud589\uc744 \uc81c\uc678\ud55c \ub098\uba38\uc9c0 \uc804\uccb4\ub97c \ucd9c\ub825\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc55e\uc758 5\ud589\uc744 \uac74\ub108\ub6f0\uace0 \uadf8 \ub2e4\uc74c 10\uac1c\uc758 \ud589\uc744 \ucd9c\ub825\ud55c\ub2e4 (6~15\ud589).",
          isCorrect: true,
        },
        {
          id: 4,
          text: "5\ud589\uacfc 10\ud589\ub9cc \ucd9c\ub825\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ud398\uc774\uc9d5 \ucc98\ub9ac\uc758 \ud45c\uc900 \ubb38\ubc95\uc785\ub2c8\ub2e4.",
      hint: "Offset(\uac74\ub108\ub6f0\uae30), Fetch(\uac00\uc838\uc624\uae30).",
    },
    {
      id: 32,
      category:
        "[DAY 12] PIVOT & \uc815\uaddc\ud45c\ud604\uc2dd (PIVOT & Regex)",
      question:
        "`PIVOT` \ud568\uc218 \uc0ac\uc6a9 \uc2dc \ubc18\ub4dc\uc2dc \ud3ec\ud568\ub418\uc5b4\uc57c \ud558\ub294 \uc694\uc18c\ub294?",
      options: [
        { id: 1, text: "`GROUP BY` \uc808", isCorrect: false },
        {
          id: 2,
          text: "\uc9d1\uacc4 \ud568\uc218 (SUM, AVG \ub4f1)",
          isCorrect: true,
        },
        { id: 3, text: "`ORDER BY` \uc808", isCorrect: false },
        { id: 4, text: "`CONNECT BY` \uc808", isCorrect: false },
      ],
      rationale:
        "\ud589\uacfc \uc5f4\uc774 \ub9cc\ub098\ub294 \uc9c0\uc810\uc758 \uac12\uc744 \uc694\uc57d\ud560 \uc9d1\uacc4 \ud568\uc218\uac00 \ud544\uc218\uc785\ub2c8\ub2e4.",
      hint: "\uc5d1\uc140 \ud53c\ubc97 \ud14c\uc774\ube14\uc744 \ub9cc\ub4e4 \ub54c '\uac12' \uc601\uc5ed\uc5d0 \ubb58 \ub123\uc744\uc9c0 \uc0dd\uac01\ud558\uc138\uc694.",
    },
    {
      id: 33,
      category:
        "[DAY 12] PIVOT & \uc815\uaddc\ud45c\ud604\uc2dd (PIVOT & Regex)",
      question:
        "\uc815\uaddc\ud45c\ud604\uc2dd \uba54\ud0c0 \ubb38\uc790 \uc911 '\ubb38\uc790\uc5f4\uc758 \ub05d'\uc744 \uc758\ubbf8\ud558\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "`^`", isCorrect: false },
        { id: 2, text: "`*`", isCorrect: false },
        { id: 3, text: "`$`", isCorrect: true },
        { id: 4, text: "`.`", isCorrect: false },
      ],
      rationale: "`^`\ub294 \uc2dc\uc791, `$`\ub294 \ub05d\uc785\ub2c8\ub2e4.",
      hint: "`$money`\ub294 \ub3c8\uc758 \ub05d(\uacb0\uacfc)\uc774\ub77c\uace0 \uc678\uc6cc\ubcf4\uc138\uc694.",
    },
    {
      id: 34,
      category:
        "[DAY 12] PIVOT & \uc815\uaddc\ud45c\ud604\uc2dd (PIVOT & Regex)",
      question:
        "`REGEXP_LIKE(ENAME, '^[A-C]')`\uc758 \uacb0\uacfc\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc774\ub984\uc5d0 A, B, C\uac00 \ud3ec\ud568\ub41c \ubaa8\ub4e0 \uc0ac\uc6d0",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc774\ub984\uc774 A, B, \ub610\ub294 C\ub85c \uc2dc\uc791\ud558\ub294 \uc0ac\uc6d0",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc774\ub984\uc774 A, B, \ub610\ub294 C\ub85c \ub05d\ub098\ub294 \uc0ac\uc6d0",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc774\ub984\uc774 \uc815\ud655\ud788 'ABC'\uc778 \uc0ac\uc6d0",
          isCorrect: false,
        },
      ],
      rationale:
        "`^`\ub294 \uc2dc\uc791, `[A-C]`\ub294 A\ubd80\ud130 C \uc0ac\uc774\uc758 \ubb38\uc790 \uc911 \ud558\ub098\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.",
      hint: "[DAY 12] \ud45c: ^(\uc2dc\uc791), [](https://www.google.com/search?q=%ED%83%9D1).",
    },
    {
      id: 35,
      category:
        "[DAY 12] PIVOT & \uc815\uaddc\ud45c\ud604\uc2dd (PIVOT & Regex)",
      question:
        "`UNPIVOT`\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\ud589\uc744 \uc5f4\ub85c \ubcc0\ud658\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc5f4\uc744 \ud589\uc73c\ub85c \ubcc0\ud658\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc911\ubcf5\ub41c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uacc4\uce35 \uad6c\uc870\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "PIVOT\uc758 \ubc18\ub300\uc774\uba70, Wide \ub370\uc774\ud130\ub97c Long \ub370\uc774\ud130\ub85c \ub9cc\ub4ed\ub2c8\ub2e4.",
      hint: "\ud3bc\uccd0\uc9c4 \uceec\ub7fc\ub4e4\uc744 \ub2e4\uc2dc \uc544\ub798\ub85c \uc313\uae30.",
    },
    {
      id: 36,
      category: "[DAY 13] \uad00\ub9ac \uad6c\ubb38 (DML, TCL, DDL, DCL)",
      question:
        "\ub2e4\uc74c \uc911 DDL\uc5d0 \ud574\ub2f9\ud558\ub294 \uba85\ub839\uc5b4\ub85c\ub9cc \uc9dd\uc9c0\uc5b4\uc9c4 \uac83\uc740?",
      options: [
        { id: 1, text: "CREATE, ALTER, INSERT", isCorrect: false },
        { id: 2, text: "UPDATE, DELETE, MERGE", isCorrect: false },
        { id: 3, text: "CREATE, DROP, TRUNCATE", isCorrect: true },
        { id: 4, text: "GRANT, REVOKE, COMMIT", isCorrect: false },
      ],
      rationale:
        "DDL\uc740 \uad6c\uc870\ub97c \uc815\uc758\ud558\ub294 CREATE, ALTER, DROP, TRUNCATE \ub4f1\uc785\ub2c8\ub2e4.",
      hint: "[DAY 13] 3.1 DDL \uba85\ub839\uc5b4 \uc885\ub958.",
    },
    {
      id: 37,
      category: "[DAY 13] \uad00\ub9ac \uad6c\ubb38 (DML, TCL, DDL, DCL)",
      question:
        "`DELETE`, `TRUNCATE`, `DROP`\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ud2c0\ub9b0 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`DELETE`\ub294 `ROLLBACK`\uc774 \uac00\ub2a5\ud558\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`TRUNCATE`\ub294 \ud14c\uc774\ube14\uc758 \uad6c\uc870\ub294 \ub0a8\uae30\uace0 \ub370\uc774\ud130\ub9cc \uc0ad\uc81c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`DROP`\uc740 \ud14c\uc774\ube14 \uc790\uccb4\ub97c \uc0ad\uc81c\ud558\uba70 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "`TRUNCATE`\ub294 `DELETE`\ubcf4\ub2e4 \uc18d\ub3c4\uac00 \ub290\ub9ac\uc9c0\ub9cc \uc548\uc804\ud558\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "`TRUNCATE`\ub294 \ub85c\uadf8\ub97c \ub0a8\uae30\uc9c0 \uc54a\uc544 `DELETE`\ubcf4\ub2e4 \uc555\ub3c4\uc801\uc73c\ub85c \ube60\ub985\ub2c8\ub2e4.",
      hint: "\uc18d\ub3c4\ub294 TRUNCATE > DELETE.",
    },
    {
      id: 38,
      category: "[DAY 13] \uad00\ub9ac \uad6c\ubb38 (DML, TCL, DDL, DCL)",
      question:
        "\ud2b8\ub79c\uc7ad\uc158\uc758 \ud2b9\uc131 \uc911 'All or Nothing'\uc744 \uc758\ubbf8\ud558\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "\uc6d0\uc790\uc131(Atomicity)", isCorrect: true },
        { id: 2, text: "\uc77c\uad00\uc131(Consistency)", isCorrect: false },
        { id: 3, text: "\uace0\ub9bd\uc131(Isolation)", isCorrect: false },
        { id: 4, text: "\uc9c0\uc18d\uc131(Durability)", isCorrect: false },
      ],
      rationale:
        "\ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc758 \uc791\uc5c5\uc740 \ubaa8\ub450 \uc131\uacf5\ud558\uac70\ub098 \ubaa8\ub450 \uc2e4\ud328\ud574\uc57c \ud569\ub2c8\ub2e4.",
      hint: "\uc6d0\uc790\ub294 \ub354 \uc774\uc0c1 \ucabc\uac24 \uc218 \uc5c6\ub294 \ucd5c\uc18c \ub2e8\uc704\uc785\ub2c8\ub2e4.",
    },
    {
      id: 39,
      category: "[DAY 13] \uad00\ub9ac \uad6c\ubb38 (DML, TCL, DDL, DCL)",
      question:
        "Oracle\uc5d0\uc11c DML \uc218\ud589 \ud6c4 `CREATE TABLE`\uc744 \uc2e4\ud589\ud588\uc744 \ub54c \ubc1c\uc0dd\ud558\ub294 \ud604\uc0c1\uc740?",
      options: [
        {
          id: 1,
          text: "\uc774\uc804 DML \ub0b4\uc5ed\uc774 `ROLLBACK` \ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "DDL \uc2e4\ud589 \uc9c1\uc804\uc5d0 \uc790\ub3d9 `COMMIT`\uc774 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc5ec DDL\uc774 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc0ac\uc6a9\uc790\uac00 \uba85\uc2dc\uc801\uc73c\ub85c `COMMIT`\uc744 \ud560 \ub54c\uae4c\uc9c0 \ub300\uae30\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "Oracle\uc5d0\uc11c DDL\uc740 \uc2e4\ud589 \uc804\ud6c4\ub85c \uc790\ub3d9 \ucee4\ubc0b\uc744 \uc77c\uc73c\ud0b5\ub2c8\ub2e4.",
      hint: "DDL\uc740 \ubb34\uc11c\uc6b4 \ub140\uc11d\uc785\ub2c8\ub2e4. \uc2e4\ud589 \uc989\uc2dc \uacfc\uac70\ub97c \ud655\uc815 \uc9d3\uc2b5\ub2c8\ub2e4.",
    },
    {
      id: 40,
      category: "[DAY 13] \uad00\ub9ac \uad6c\ubb38 (DML, TCL, DDL, DCL)",
      question:
        "`MERGE` \ubb38\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc870\uac74\uc5d0 \ub530\ub77c `INSERT`\uc640 `UPDATE`\ub97c \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`WHEN MATCHED` \uc808\uc740 \uc870\uac74\uc774 \uc77c\uce58\ud560 \ub54c \uc2e4\ud589\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`WHEN NOT MATCHED` \uc808\uc740 \ubc18\ub4dc\uc2dc \uc0dd\ub7b5\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`UPDATE` \uc808 \ub0b4\uc5d0\uc11c `DELETE`\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "`WHEN NOT MATCHED`\ub294 \uc870\uac74\uc774 \ub9de\uc9c0 \uc54a\uc744 \ub54c \uc2e0\uaddc \uc0bd\uc785\uc744 \uc704\ud574 \uc8fc\ub85c \uc0ac\uc6a9\ub418\uba70, \uc120\ud0dd \uc0ac\ud56d\uc785\ub2c8\ub2e4.",
      hint: "\uc788\uc73c\uba74 UPDATE, \uc5c6\uc73c\uba74 INSERT.",
    },
  ],
  16: [
    {
      id: 1,
      category: "엔터티의 속성",
      question:
        "다음 중 엔터티(Entity)가 성립하기 위한 6가지 필수 조건으로 옳지 않은 것은?",
      options: [
        {
          id: 1,
          text: "해당 업무에서 반드시 필요하고 관리하고자 하는 정보여야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "유일함을 보장할 수 있는 식별자(PK)를 가져야 한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "반드시 1개 이상의 인스턴스(데이터 행)를 가져야 한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "반드시 2개 이상의 속성(컬럼)을 가져야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "엔터티는 반드시 '2개 이상'의 인스턴스들의 집합이어야 성립합니다.",
      hint: "데이터가 단 1개뿐이라면 굳이 테이블로 설계할 이유가 없습니다.",
    },
    {
      id: 2,
      category: "엔터티의 속성",
      question:
        "다음 <보기> 중 엔터티(Entity) 성립을 위한 필수 조건으로 옳은 것을 모두 고르시오.",
      code: "a. 반드시 1개 이상의 인스턴스(데이터 행)를 가져야 한다.\nb. 유일함을 보장할 수 있는 식별자(PK)를 가져야 한다.\nc. 다른 엔터티와 반드시 1개 이상의 관계가 성립해야 하며, 예외는 절대 없다.\nd. 실제 업무 프로세스(조회, 수정 등)에 의해 이용되어야 한다.",
      options: [
        { id: 1, text: "a, b", isCorrect: false },
        { id: 2, text: "b, d", isCorrect: true },
        { id: 3, text: "a, c, d", isCorrect: false },
        { id: 4, text: "b, c, d", isCorrect: false },
      ],
      rationale:
        "a는 틀렸습니다(반드시 2개 이상). c도 틀렸습니다(통계성, 코드성 엔터티는 예외적으로 관계 생략이 가능합니다).",
      hint: "숫자의 함정과 '절대 없다'와 같은 극단적인 단어를 조심하세요.",
    },
    {
      id: 3,
      category: "엔터티의 분류",
      question:
        "물리적 형태는 없으나 업무상 관리해야 할 추상적 개념인 '개념 엔터티'의 예시로 가장 적절한 것은?",
      options: [
        { id: 1, text: "사원", isCorrect: false },
        { id: 2, text: "상품", isCorrect: false },
        { id: 3, text: "부서", isCorrect: true },
        { id: 4, text: "주문내역", isCorrect: false },
      ],
      rationale:
        "부서, 조직, 장소, 보험상품 등은 눈에 보이지 않지만 관리해야 하는 개념 엔터티입니다.",
      hint: "만질 수 없는 대상을 찾아보세요.",
    },
    {
      id: 4,
      category: "엔터티의 분류",
      question:
        "다음 <보기> 중 엔터티의 분류에 대한 설명으로 옳은 것을 모두 고르시오.",
      code: "a. '주문내역', '입금내역'은 2개 이상의 부모로부터 발생하며 자주 내용이 바뀌는 행위(Active) 엔터티에 해당한다.\nb. 발생 시점에 따라 유형, 개념, 사건 엔터티로 구분한다.\nc. '사원', '부서', '고객'은 업무에 원래 존재하는 중심(Main) 엔터티이다.\nd. '장소', '조직', '보험상품'은 물리적 형태는 없으나 관리해야 할 개념 엔터티이다.",
      options: [
        { id: 1, text: "a, b", isCorrect: false },
        { id: 2, text: "c, d", isCorrect: false },
        { id: 3, text: "a, d", isCorrect: true },
        { id: 4, text: "b, c", isCorrect: false },
      ],
      rationale:
        "b는 '유무형'에 따른 분류입니다. c의 사원, 부서, 고객은 원래 존재하는 독립적인 정보이므로 '기본(Key) 엔터티'입니다.",
      hint: "분류의 기준(유무형 vs 발생시점)을 섞어 놓은 오답을 걸러내세요.",
    },
    {
      id: 5,
      category: "엔터티의 분류",
      question: "다음 중 '중심(Main) 엔터티'에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "업무에 원래 존재하는 가장 독립적인 엔터티이다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "데이터 양이 가장 많고 내용이 수시로 변경된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "기본 엔터티로부터 발생하며, 행위 엔터티를 생성하는 역할을 한다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "물리적인 형태가 존재하는 엔터티를 총칭한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "중심 엔터티는 기본 엔터티로부터 파생되어 행위 엔터티를 생성하는 계약, 사고, 예금원장 등입니다.",
      hint: "기본과 행위의 중간에서 다리 역할을 하는 엔터티입니다.",
    },
    {
      id: 6,
      category: "엔터티의 분류",
      question:
        "다음 <보기> 중 [기·중·행] 엔터티에 대한 설명으로 옳은 것을 모두 고르시오.",
      code: "a. 기본(Key) 엔터티는 다른 엔터티의 부모 역할을 하며, 독립적으로 생성된다.\nb. 계약, 사고, 예금원장 등은 대표적인 중심(Main) 엔터티이다.\nc. 행위(Active) 엔터티는 2개 이상의 부모로부터 발생하며 내용이 자주 바뀐다.\nd. '고객'이 '상품'을 주문하여 발생하는 '주문'은 기본 엔터티에 해당한다.",
      options: [
        { id: 1, text: "a, b, c", isCorrect: true },
        { id: 2, text: "a, c, d", isCorrect: false },
        { id: 3, text: "b, c, d", isCorrect: false },
        { id: 4, text: "a, b, d", isCorrect: false },
      ],
      rationale:
        "d에서 기본 엔터티로부터 파생되는 '주문'은 중심 엔터티에 해당합니다.",
      hint: "고객(기본) ➔ 주문(중심) ➔ 주문내역(행위) 흐름을 떠올려 보세요.",
    },
    {
      id: 7,
      category: "엔터티 명명 규칙",
      question: "엔터티의 명명 규칙으로 가장 부적절한 것은?",
      options: [
        {
          id: 1,
          text: "현업에서 실제로 사용하는 업무 용어를 사용한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "의미를 명확히 하기 위해 띄어쓰기를 포함한 서술형으로 작성한다.",
          isCorrect: true,
        },
        { id: 3, text: "약어 사용은 최대한 자제한다.", isCorrect: false },
        {
          id: 4,
          text: "전체 데이터 모델 내에서 유일한 이름을 부여해야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "엔터티의 이름은 띄어쓰기 없이 단수 명사로 표현해야 하며, 서술식은 피해야 합니다.",
      hint: "테이블 이름을 지을 때 길게 문장처럼 쓰는지 생각해 보세요.",
    },
    {
      id: 8,
      category: "엔터티 명명 규칙",
      question:
        "다음 <보기> 중 도메인(Domain) 및 명명 규칙에 대한 설명으로 옳은 것을 모두 고르시오.",
      code: "a. 도메인은 각 속성이 가질 수 있는 값의 범위(데이터 타입, 크기 등)를 의미한다.\nb. 엔터티 명명 시 약어 사용은 최대한 자제하고 복수 명사로 표현해야 한다.\nc. 전체 데이터 모델 내에서 속성 이름은 유일성을 확보하는 것을 권장한다.\nd. '학년'의 도메인을 1~6으로 제한하는 것은 물리적 모델링 단계에서 제약조건(Check)으로 구현될 수 있다.",
      options: [
        { id: 1, text: "a, b, c", isCorrect: false },
        { id: 2, text: "a, c, d", isCorrect: true },
        { id: 3, text: "b, c, d", isCorrect: false },
        { id: 4, text: "a, b, d", isCorrect: false },
      ],
      rationale:
        "b에서 엔터티의 이름은 복수 명사가 아닌 단수 명사로 표현해야 합니다.",
      hint: "테이블 이름은 '고객들'이 아니라 '고객'으로 짓습니다.",
    },
    {
      id: 9,
      category: "데이터 모델링 용어",
      question:
        "데이터 모델링 용어와 관계형 DB, 엑셀 용어의 매핑이 올바르게 짝지어진 것은?",
      options: [
        { id: 1, text: "엔터티 - 로우(Row) - 셀 데이터", isCorrect: false },
        { id: 2, text: "인스턴스 - 컬럼(Column) - 가로줄", isCorrect: false },
        { id: 3, text: "속성 - 컬럼(Column) - 세로줄", isCorrect: true },
        { id: 4, text: "속성값 - 테이블(Table) - 시트", isCorrect: false },
      ],
      rationale:
        "속성(Attribute)은 데이터의 특징을 나타내며, 관계형 DB의 컬럼(열), 엑셀의 세로줄에 해당합니다.",
      hint: "나이, 가입일 같은 항목들이 엑셀의 어디에 위치하는지 연상해 보세요.",
    },
    {
      id: 10,
      category: "데이터 모델링 용어",
      question:
        "다음 <보기> 중 실무 엑셀 비유와 데이터 모델링 용어의 매핑으로 올바른 것을 모두 고르시오.",
      code: "a. 엔터티(Entity)는 엑셀의 시트(Sheet)나 관계형 DB의 테이블(Table)에 해당한다.\nb. 인스턴스(Instance)는 엑셀의 세로줄(Column)에 해당한다.\nc. 속성(Attribute)은 엑셀의 가로줄(Row)에 해당한다.\nd. 속성값(Value)은 엑셀의 개별 셀(Cell) 데이터에 해당한다.",
      options: [
        { id: 1, text: "a, d", isCorrect: true },
        { id: 2, text: "b, c", isCorrect: false },
        { id: 3, text: "a, b, d", isCorrect: false },
        { id: 4, text: "a, c, d", isCorrect: false },
      ],
      rationale:
        "b와 c가 서로 바뀌었습니다. 인스턴스는 가로줄(데이터 한 줄, Row)이고, 속성은 세로줄(컬럼명, Column)입니다.",
      hint: "0교시 맵핑 테이블을 시각적으로 상상해 보세요.",
    },
    {
      id: 11,
      category: "속성의 특징",
      question:
        "속성(Attribute)의 '원자성(Atomicity)'에 대한 설명으로 옳은 것은?",
      options: [
        {
          id: 1,
          text: "하나의 속성은 반드시 두 개 이상의 인스턴스를 가져야 한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "하나의 속성은 반드시 1개의 속성값(단일값)만 가져야 한다.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "여러 속성이 모여 하나의 주식별자를 구성해야 한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "속성은 다른 엔터티와 독립적으로 존재해야 한다.",
          isCorrect: false,
        },
      ],
      rationale:
        "원자성이란 속성이 더 이상 쪼갤 수 없는 최소 단위로서 오직 하나의 값만 가져야 한다는 성질입니다.",
      hint: "원자(Atom)는 쪼갤 수 없는 기본 단위입니다.",
    },
    {
      id: 12,
      category: "속성의 특징",
      question:
        "다음 <보기> 중 속성의 특징 및 분류에 대해 바르게 설명한 것을 모두 고르시오.",
      code: "a. 하나의 속성은 반드시 1개의 속성값(단일값)만 가져야 하며, 이를 원자성이라 한다.\nb. 다중값 속성(예: 한 직원이 전화번호 2개 보유)은 하나의 컬럼에 쉼표로 구분하여 저장하는 것이 원칙이다.\nc. 속성은 정해진 주식별자에 함수적으로 완전 종속되어야 한다.\nd. '주소(시+구+동)'처럼 분리될 수 있는 속성을 다중값 속성이라고 한다.",
      options: [
        { id: 1, text: "a, b", isCorrect: false },
        { id: 2, text: "a, c", isCorrect: true },
        { id: 3, text: "c, d", isCorrect: false },
        { id: 4, text: "b, c, d", isCorrect: false },
      ],
      rationale:
        "b는 다중값 속성을 별도의 엔터티로 분리해야 한다는 원칙에 위배됩니다. d에서 분리될 수 있는 속성은 '복합 속성'입니다.",
      hint: "관계형 DB는 하나의 셀에 쉼표로 여러 값을 넣는 것을 극도로 싫어합니다.",
    },
    {
      id: 13,
      category: "속성의 분류",
      question: "다음 중 '설계 속성(Designed Attribute)'에 해당하는 예시는?",
      options: [
        { id: 1, text: "고객의 이름", isCorrect: false },
        { id: 2, text: "상품의 제조일자", isCorrect: false },
        { id: 3, text: "직원의 사원번호", isCorrect: true },
        { id: 4, text: "장바구니 총합계", isCorrect: false },
      ],
      rationale:
        "사원번호, 상품코드 등은 원래 업무에 있던 것이 아니라 데이터를 식별하고 관리하기 위해 인위적으로 부여한 '설계 속성'입니다.",
      hint: "자연적으로 존재하는 정보인지, 인위적으로 만든 코드/번호인지 구분해 보세요.",
    },
    {
      id: 14,
      category: "속성의 분류",
      question:
        "다음 <보기> 중 속성의 특성에 따른 분류에 대한 설명으로 옳은 것을 모두 고르시오.",
      code: "a. 설계 속성(Designed Attribute)은 모델링을 위해 인위적으로 새로 만들거나 부여한 속성이다.\nb. 파생 속성(Derived Attribute)은 다른 속성으로부터 계산되어 만들어지며, 데이터 정합성 유지를 위해 적극적인 사용을 권장한다.\nc. 기본 속성(Basic Attribute)은 업무로부터 원래 존재하는 가장 일반적인 속성이다.\nd. '상품코드', '사원번호'는 기본 속성의 대표적인 예시이다.",
      options: [
        { id: 1, text: "a, c", isCorrect: true },
        { id: 2, text: "a, b, c", isCorrect: false },
        { id: 3, text: "b, d", isCorrect: false },
        { id: 4, text: "c, d", isCorrect: false },
      ],
      rationale:
        "b에서 파생 속성은 데이터 정합성을 깨뜨릴 위험이 있어 가급적 '적게' 사용하는 것이 원칙입니다. d에서 상품코드, 사번은 '설계 속성'입니다.",
      hint: "파생 속성의 딜레마를 기억하세요.",
    },
    {
      id: 15,
      category: "속성의 분류",
      question:
        "다음 중 '파생 속성(Derived Attribute)'을 사용할 때의 특징 및 주의점으로 가장 적절한 것은?",
      options: [
        {
          id: 1,
          text: "업무로부터 원래 존재하는 정보이므로 가장 많이 생성된다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "데이터 조회 성능을 저하시키므로 절대 사용해서는 안 된다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "다른 속성으로부터 계산되어 만들어지므로 데이터 정합성을 깨뜨릴 위험이 있다.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "인스턴스를 유일하게 식별하는 기본키(PK)로 주로 사용된다.",
          isCorrect: false,
        },
      ],
      rationale:
        "재고량이나 총금액 같은 파생 속성은 조회를 빠르게 돕지만, 원본 데이터가 변경될 때 함께 업데이트되지 않으면 정합성(일치성)이 깨질 수 있습니다.",
      hint: "계산된 값은 원본이 바뀔 때 어떤 문제가 생길지 생각해 보세요.",
    },
    {
      id: 16,
      category: "속성의 분류",
      question:
        "다음 <보기> 중 속성의 구성 방식 및 분해 여부에 따른 분류로 옳은 것을 모두 고르시오.",
      code: "a. 엔터티 구성 방식에 따라 PK 속성, FK 속성, 일반 속성으로 나뉜다.\nb. 파생 속성은 미리 계산해 두기 때문에 데이터 조회 성능을 높일 수 있다는 장점이 있다.\nc. 복합 속성은 더 이상 쪼갤 수 없는 단일 의미를 가진 속성을 말한다.\nd. '이름', '나이' 등은 단일 속성에 해당한다.",
      options: [
        { id: 1, text: "a, b, c", isCorrect: false },
        { id: 2, text: "a, c, d", isCorrect: false },
        { id: 3, text: "a, b, d", isCorrect: true },
        { id: 4, text: "b, c, d", isCorrect: false },
      ],
      rationale:
        "c에서 더 이상 쪼갤 수 없는 단일 의미 속성은 '단일 속성'이며, 시+구+동처럼 쪼갤 수 있는 속성이 '복합 속성'입니다.",
      hint: "단어의 뉘앙스 그대로 '복합'은 여러 개가 결합되어 있음을 의미합니다.",
    },
    {
      id: 17,
      category: "속성의 활용",
      question:
        "한 직원이 두 개의 전화번호를 가지고 있는 경우, 이는 어떤 속성에 해당하며 어떻게 처리해야 하는가?",
      options: [
        {
          id: 1,
          text: "복합 속성 - 하나의 컬럼에 쉼표로 구분하여 저장한다.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "다중값 속성 - 쉼표로 구분하여 저장한다.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "복합 속성 - 별도의 엔터티로 분리한다.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "다중값 속성 - 별도의 엔터티로 분리(1차 정규화)한다.",
          isCorrect: true,
        },
      ],
      rationale:
        "하나의 속성에 여러 값을 가지는 것을 '다중값 속성'이라 하며, 관계형 DB는 원자성을 위배하는 것을 허용하지 않으므로 반드시 별도 엔터티로 분리해야 합니다.",
      hint: "동일한 성격의 데이터가 여러 개일 때의 처리 방법입니다.",
    },
    {
      id: 18,
      category: "데이터 모델 규칙",
      question:
        '다음 빈칸에 들어갈 알맞은 숫자를 순서대로 나열한 것은?\n\n"한 개의 엔터티는 ( A )개 이상의 인스턴스를 갖는다.\n한 개의 엔터티는 ( B )개 이상의 속성을 갖는다.\n한 개의 속성은 ( C )개의 속성값만 갖는다."',
      options: [
        { id: 1, text: "1, 1, 2", isCorrect: false },
        { id: 2, text: "2, 2, 1", isCorrect: true },
        { id: 3, text: "2, 1, 1", isCorrect: false },
        { id: 4, text: "1, 2, 1", isCorrect: false },
      ],
      rationale:
        "엔터티 필수 조건에 의해 인스턴스와 속성은 2개 이상이어야 하며, 속성은 원자성에 의해 1개의 속성값만 가집니다.",
      hint: "3교시의 수량 관계 공식입니다.",
    },
    {
      id: 19,
      category: "데이터 모델 규칙",
      question:
        "다음 <보기> 중 데이터 모델링 용어들의 상호 포함 관계로 옳은 것을 모두 고르시오.",
      code: "a. 한 개의 엔터티는 두 개 이상의 인스턴스를 갖는다.\nb. 한 개의 인스턴스는 한 개의 속성만 갖는다.\nc. 한 개의 엔터티는 두 개 이상의 속성을 갖는다.\nd. 한 개의 속성은 오직 하나의 속성값만 갖는다.",
      options: [
        { id: 1, text: "a, b", isCorrect: false },
        { id: 2, text: "a, c, d", isCorrect: true },
        { id: 3, text: "b, c, d", isCorrect: false },
        { id: 4, text: "a, b, c, d", isCorrect: false },
      ],
      rationale:
        "b에서 한 개의 인스턴스(가로줄 데이터 하나)는 반드시 두 개 이상의 속성(세로줄 컬럼들)을 가져야 합니다.",
      hint: "회원 데이터 한 줄에 이름 하나만 있을까요?",
    },
    {
      id: 20,
      category: "종합 복습",
      question:
        "다음 <보기> 중 16일차 내용 전체에 대한 종합적인 설명으로 옳은 것을 모두 고르시오.",
      code: "a. 인스턴스가 단 1개뿐인 경우라도, 향후 확장성을 고려한다면 우선 엔터티로 설계하는 것이 모델링의 원칙이다.\nb. 인스턴스란 엔터티라는 껍데기(테이블) 안에 실제로 들어가는 데이터 하나하나의 실체(행, Row)를 의미한다.\nc. 속성 명명 시 서술식 속성명(수식어가 긴 이름)의 사용을 지양해야 한다.\nd. 통계성 엔터티나 코드성 엔터티는 관계를 생략할 수 있는 예외 케이스이다.",
      options: [
        { id: 1, text: "a, b, c", isCorrect: false },
        { id: 2, text: "b, c, d", isCorrect: true },
        { id: 3, text: "a, c, d", isCorrect: false },
        { id: 4, text: "a, b, d", isCorrect: false },
      ],
      rationale:
        "a는 틀렸습니다. 데이터가 1개뿐이면 관리를 위한 테이블(엔터티)로 만들 필요가 없으며, 필수 조건(2개 이상의 인스턴스)에 위배됩니다.",
      hint: "오늘 배운 모든 예외와 특징을 종합한 최종 문항입니다.",
    },
  ],
  17: [
    {
      id: 1,
      category: "관계의 개념",
      question: "관계의 개념에 대한 설명으로 가장 부적절한 것은?",
      options: [
        { id: 1, text: "엔터티의 인스턴스 사이의 논리적인 연관성이다.", isCorrect: false },
        { id: 2, text: "존재의 형태나 행위로서 서로에게 연관성이 부여된 상태를 말한다.", isCorrect: false },
        { id: 3, text: "ERD 표기법에서는 존재적 관계와 행위적 관계를 실선과 점선으로 구분하여 표기한다.", isCorrect: true },
        { id: 4, text: "관계를 정의할 때는 시작 엔터티와 끝 엔터티 관점에서 각각 동사로 표현한다.", isCorrect: false },
      ],
      rationale: "ERD 표기법에서는 존재적 관계와 행위적 관계를 시각적으로 구분하지 않습니다. 이를 구분하여 표현하는 것은 UML 클래스 다이어그램입니다.",
      hint: "실선과 점선을 구분하는 기준은 'UML'인지 '식별자 관계'인지에 따라 다릅니다.",
    },
    {
      id: 2,
      category: "관계의 표기법",
      question: "관계의 표기법 3요소 [명.차.선]에 해당하지 않는 것은?",
      options: [
        { id: 1, text: "관계명 (Membership)", isCorrect: false },
        { id: 2, text: "관계차수 (Cardinality)", isCorrect: false },
        { id: 3, text: "관계구조 (Structure)", isCorrect: true },
        { id: 4, text: "관계선택사양 (Optionality)", isCorrect: false },
      ],
      rationale: "관계의 표기법 3요소는 관계명, 관계차수, 관계선택사양입니다.",
      hint: "암기 공식 '명.차.선'을 떠올려 보세요.",
    },
    {
      id: 3,
      category: "관계의 특징",
      question: "다음 <보기> 중 관계에 대한 설명으로 옳은 것을 모두 고른 것은?",
      code: "가. UML에서는 존재적 관계를 연관 관계(실선)로 표현한다.\n나. 행위적 관계는 특정한 행위가 발생해야 관계가 성립한다.\n다. 관계차수 1:M은 부모 1개에 자식 여러 개가 대응되는 형태다.\n라. 필수적 관계는 참여자가 없을 수도 있는 관계를 의미한다.",
      options: [
        { id: 1, text: "가, 나, 다", isCorrect: true },
        { id: 2, text: "가, 다, 라", isCorrect: false },
        { id: 3, text: "나, 다, 라", isCorrect: false },
        { id: 4, text: "가, 나, 라", isCorrect: false },
      ],
      rationale: "라의 설명은 '선택적 관계'에 대한 설명입니다. 필수적 관계는 참여자가 반드시 존재해야 합니다.",
      hint: "필수 참여는 ERD에서 '|', 선택 참여는 'O'로 표시합니다.",
    },
    {
      id: 4,
      category: "M:N 관계",
      question: "M:N(다대다) 관계의 해소 방법에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "물리 모델링에서도 M:N 관계를 그대로 유지하는 것이 원칙이다.", isCorrect: false },
        { id: 2, text: "두 엔터티 사이에 조인 엔터티를 추가하여 1:M 관계로 분해한다.", isCorrect: true },
        { id: 3, text: "관계가 너무 복잡해지므로 관계 자체를 삭제한다.", isCorrect: false },
        { id: 4, text: "부모 엔터티의 주식별자를 자식의 일반 속성으로만 상속시킨다.", isCorrect: false },
      ],
      rationale: "M:N 관계는 데이터 중복과 관리의 어려움 때문에 교차 엔터티(조인 엔터티)를 도입하여 1:M 관계로 해소해야 합니다.",
      hint: "학생과 과목 사이의 '수강' 엔터티 사례를 생각해보세요.",
    },
    {
      id: 5,
      category: "순환 관계",
      question: "순환 관계(Recursive Relationship)에 대한 설명으로 가장 적절한 것은?",
      options: [
        { id: 1, text: "서로 다른 두 엔터티가 서로를 참조하는 관계다.", isCorrect: false },
        { id: 2, text: "엔터티가 자기 자신과 관계를 맺는 특수한 형태다.", isCorrect: true },
        { id: 3, text: "부모 엔터티가 삭제되면 자식 엔터티도 자동으로 삭제되는 관계다.", isCorrect: false },
        { id: 4, text: "다대다 관계를 1:M으로 해소한 결과물이다.", isCorrect: false },
      ],
      rationale: "조직도(상사-부하)처럼 하나의 엔터티 내에서 인스턴스끼리 계층 구조를 갖는 관계를 순환 관계라고 합니다.",
      hint: "계층형 쿼리(CONNECT BY)의 기초가 되는 관계입니다.",
    },
    {
      id: 6,
      category: "주식별자의 특징",
      question: "주식별자의 4대 특징 [유.최.불.존] 중 다음 설명에 해당하는 것은?\n\n\"식별자를 구성하는 속성의 수는 유일성을 만족하는 최소한의 개수여야 한다.\"",
      options: [
        { id: 1, text: "유일성", isCorrect: false },
        { id: 2, text: "최소성", isCorrect: true },
        { id: 3, text: "불변성", isCorrect: false },
        { id: 4, text: "존재성", isCorrect: false },
      ],
      rationale: "유일성을 보장하는 범위 내에서 속성의 수가 가장 적어야 한다는 원칙은 '최소성'입니다.",
      hint: "하나라도 빼면 유일성이 깨지는 상태를 말합니다.",
    },
    {
      id: 7,
      category: "주식별자의 특징",
      question: "주식별자의 특징 중 '불변성'에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "주식별자 속성에는 NULL이 들어갈 수 없다.", isCorrect: false },
        { id: 2, text: "모든 인스턴스는 주식별자에 의해 유일하게 구분되어야 한다.", isCorrect: false },
        { id: 3, text: "주식별자 값이 한 번 지정되면 절대 바뀌지 않아야 한다.", isCorrect: true },
        { id: 4, text: "업무적으로 대표성을 가져야 한다.", isCorrect: false },
      ],
      rationale: "불변성은 지정된 식별자 값이 변하지 않아야 함을 의미합니다. (NULL 불가 설명은 '존재성'입니다.)",
      hint: "변하지 않는다는 단어의 의미를 생각해보세요.",
    },
    {
      id: 8,
      category: "인조 식별자",
      question: "다음 중 인조(대리) 식별자를 도출하는 기준으로 부적절한 것은?",
      options: [
        { id: 1, text: "주식별자가 너무 많은 속성으로 구성된 복합 식별자일 때", isCorrect: false },
        { id: 2, text: "보안상의 이유로 원래의 주식별자를 숨기고 싶을 때", isCorrect: false },
        { id: 3, text: "업무적으로 원래 존재하는 속성을 주식별자로 쓰고 싶을 때", isCorrect: true },
        { id: 4, text: "시스템의 성능 향상을 위해 일련번호가 필요할 때", isCorrect: false },
      ],
      rationale: "업무적으로 원래 존재하는 속성을 그대로 쓰는 것은 '본질 식별자'입니다. 인조 식별자는 이를 대체하기 위해 인위적으로 만든 것입니다.",
      hint: "인조 식별자는 '인위적'으로 만든 대리인입니다.",
    },
    {
      id: 9,
      category: "식별자의 분류",
      question: "식별자의 분류 중 '생성 여부'에 따른 분류로 짝지어진 것은?",
      options: [
        { id: 1, text: "주식별자 - 보조식별자", isCorrect: false },
        { id: 2, text: "단일식별자 - 복합식별자", isCorrect: false },
        { id: 3, text: "내부식별자 - 외부식별자", isCorrect: true },
        { id: 4, text: "본질식별자 - 인조식별자", isCorrect: false },
      ],
      rationale: "스스로 생성되면 내부식별자, 다른 엔터티로부터 받아오면 외부식별자(FK)입니다.",
      hint: "안에서 생겼는지, 밖에서 왔는지(Foreign)를 구분하세요.",
    },
    {
      id: 10,
      category: "키(Key)의 계층 구조",
      question: "다음 <보기> 중 키(Key)의 계층 구조에 대한 설명으로 틀린 것을 모두 고른 것은?",
      code: "가. 후보키는 유일성은 만족하지만 최소성은 만족하지 못할 수 있다.\n나. 모든 후보키는 주식별자가 될 수 있는 자격을 갖추고 있다.\n다. 대체키는 후보키 중 주식별자로 선택되지 못한 남은 키다.\n라. 슈퍼키는 유일성과 최소성을 모두 만족해야 한다.",
      options: [
        { id: 1, text: "가, 나", isCorrect: false },
        { id: 2, text: "나, 다", isCorrect: false },
        { id: 3, text: "가, 라", isCorrect: true },
        { id: 4, text: "다, 라", isCorrect: false },
      ],
      rationale: "가) 후보키는 유일성과 최소성을 모두 만족해야 합니다. 라) 슈퍼키는 유일성은 만족하지만 최소성은 만족하지 못할 수 있습니다.",
      hint: "후보키는 '최종 후보'이므로 유일성과 최소성이라는 시험을 통과한 상태입니다.",
    },
    {
      id: 11,
      category: "키(Key)의 포함 관계",
      question: "키(Key)들 간의 포함 관계를 바르게 표현한 것은?",
      options: [
        { id: 1, text: "후보키 ⊃ 슈퍼키 ⊃ 주식별자", isCorrect: false },
        { id: 2, text: "슈퍼키 ⊃ 후보키 ⊃ 주식별자", isCorrect: true },
        { id: 3, text: "주식별자 ⊃ 후보키 ⊃ 슈퍼키", isCorrect: false },
        { id: 4, text: "후보키 ⊃ 주식별자 ⊃ 대체키", isCorrect: false },
      ],
      rationale: "슈퍼키(유일성만) 안에 후보키(유일성+최소성)가 있고, 그 안에 주식별자가 포함됩니다.",
      hint: "가장 큰 범위는 '유일성'만 가진 슈퍼키입니다.",
    },
    {
      id: 12,
      category: "Crow's Foot 표기법",
      question: "Crow's Foot 표기법에서 \"반드시 1개여야 한다(필수 참여, 단수)\"를 의미하는 기호는?",
      options: [
        { id: 1, text: "○|", isCorrect: false },
        { id: 2, text: "○く", isCorrect: false },
        { id: 3, text: "||", isCorrect: true },
        { id: 4, text: "|く", isCorrect: false },
      ],
      rationale: "안쪽의 '|'는 필수(Mandatory), 바깥쪽의 '|'는 1(One)을 의미합니다.",
      hint: "독해 공식 \"안쪽(선택)에서 바깥쪽(차수)으로 읽는다\"를 적용하세요.",
    },
    {
      id: 13,
      category: "Crow's Foot 독해",
      question: "다음 Crow's Foot 표기법에 대한 독해로 옳은 것은?\n\n> **기호: ○く**",
      options: [
        { id: 1, text: "반드시 1개여야 한다.", isCorrect: false },
        { id: 2, text: "1개 이상일 수 있다.", isCorrect: false },
        { id: 3, text: "0개 또는 여러 개일 수 있다.", isCorrect: true },
        { id: 4, text: "반드시 여러 개여야 한다.", isCorrect: false },
      ],
      rationale: "안쪽 '○'는 선택(0개 가능), 바깥쪽 'く'는 복수(Many)를 의미하므로 \"0개 이상\"입니다.",
      hint: "동그라미(○)는 \"없어도 된다\"는 뜻입니다.",
    },
    {
      id: 14,
      category: "식별자 관계",
      question: "식별자 관계(실선)에 대한 설명으로 가장 부적절한 것은?",
      options: [
        { id: 1, text: "부모 엔터티의 주식별자가 자식 엔터티의 주식별자로 상속된다.", isCorrect: false },
        { id: 2, text: "부모 엔터티가 존재해야만 자식 엔터티가 존재할 수 있는 강한 연결 관계다.", isCorrect: false },
        { id: 3, text: "ERD에서 실선으로 표시한다.", isCorrect: false },
        { id: 4, text: "부모 엔터티가 사라져도 자식 데이터는 독립적으로 유지하기 위해 사용한다.", isCorrect: true },
      ],
      rationale: "부모가 사라져도 자식이 남아야 하는 경우는 '비식별자 관계'입니다. 식별자 관계는 강한 종속성을 가집니다.",
      hint: "자식의 '이름표(PK)'에 부모의 키가 포함되어 있는지 생각해보세요.",
    },
    {
      id: 15,
      category: "비식별자 관계",
      question: "다음 중 비식별자 관계(점선)를 선택해야 하는 상황이 아닌 것은?",
      options: [
        { id: 1, text: "부모 엔터티와 자식 엔터티의 생명주기가 서로 다를 때", isCorrect: false },
        { id: 2, text: "자식 엔터티에 별도의 독립적인 주식별자를 생성하는 것이 유리할 때", isCorrect: false },
        { id: 3, text: "부모 엔터티의 주식별자를 자식의 주식별자로 써야만 유일성이 보장될 때", isCorrect: true },
        { id: 4, text: "SQL 복잡도를 낮추기 위해 주식별자 상속을 차단하고 싶을 때", isCorrect: false },
      ],
      rationale: "부모 키가 없으면 자식의 유일성 보장이 안 될 정도로 종속적이라면 '식별자 관계'를 맺어야 합니다.",
      hint: "점선(비식별자)은 '약한 연결'입니다.",
    },
    {
      id: 16,
      category: "식별자 vs 비식별자",
      question: "식별자 관계와 비식별자 관계의 비교로 옳은 것을 모두 고른 것은?",
      code: "가. 식별자 관계는 JOIN 시 부모를 거치지 않아도 되는 경우가 많아 SQL이 단순해질 수 있다.\n나. 비식별자 관계는 점선으로 표기하며 부모 PK는 자식의 일반 속성(FK)이 된다.\n다. 식별자 관계가 지속되면 자식 엔터티의 PK 속성 개수가 늘어나는 단점이 있다.\n라. 비식별자 관계는 부모와 자식 간의 연결 강도가 매우 강하다.",
      options: [
        { id: 1, text: "가, 나, 다", isCorrect: true },
        { id: 2, text: "나, 다, 라", isCorrect: false },
        { id: 3, text: "가, 다, 라", isCorrect: false },
        { id: 4, text: "가, 나, 라", isCorrect: false },
      ],
      rationale: "라) 비식별자 관계는 연결 강도가 '약한' 관계입니다.",
      hint: "실선은 튼튼한(강한) 연결, 점선은 끊어지기 쉬운(약한) 연결입니다.",
    },
    {
      id: 17,
      category: "주식별자 선정",
      question: "다음 중 주식별자 도출 기준에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "이름, 주소와 같이 의미가 명확한 속성을 가급적 주식별자로 쓴다.", isCorrect: false },
        { id: 2, text: "해당 업무에서 자주 쓰이는 속성을 주식별자로 선정한다.", isCorrect: true },
        { id: 3, text: "복합 식별자를 구성할 때 속성의 개수는 많을수록 좋다.", isCorrect: false },
        { id: 4, text: "불변성을 유지하기 위해 수시로 변하는 값을 주식별자로 선정한다.", isCorrect: false },
      ],
      rationale: "1) 명칭/내역은 값이 변하기 쉬워 지양합니다. 3) 속성이 너무 많으면 인조 식별자를 고려해야 합니다. 4) 수시로 변하는 값은 불변성에 위배됩니다.",
      hint: "주식별자는 '대표성'과 '고정성'이 중요합니다.",
    },
    {
      id: 18,
      category: "종합 응용",
      question: "다음 관계 읽기 7가지 체크리스트 중 '양방향 읽기'와 관련된 질문은?",
      options: [
        { id: 1, text: "두 개의 엔터티 사이에 관심 있는 연관성이 존재하는가?", isCorrect: false },
        { id: 2, text: "부모 → 자식뿐만 아니라 자식 → 부모 방향으로도 말이 되는가?", isCorrect: true },
        { id: 3, text: "엔터티 내의 속성으로 관계를 표현하고 있지는 않는가?", isCorrect: false },
        { id: 4, text: "정보의 조합이 발생하는가?", isCorrect: false },
      ],
      rationale: "관계는 항상 양방향으로 검토하여 능동/수동 동사구가 적절한지 확인해야 합니다.",
      hint: "부서와 사원의 관계를 서로의 입장에서 생각해보세요.",
    },
    {
      id: 19,
      category: "외부식별자",
      question: "외부식별자(Foreign Key)에 대한 설명으로 옳은 것은?",
      options: [
        { id: 1, text: "엔터티 내부에서 스스로 생성되는 식별자다.", isCorrect: false },
        { id: 2, text: "주식별자의 특징인 유최불존을 반드시 모두 만족해야 한다.", isCorrect: false },
        { id: 3, text: "다른 엔터티와의 관계를 통해 상속받은 속성이다.", isCorrect: true },
        { id: 4, text: "보조식별자와 동일한 개념이다.", isCorrect: false },
      ],
      rationale: "외부식별자는 타 엔터티의 주식별자를 참조하는 FK(Foreign Key)를 의미합니다.",
      hint: "밖에서 온(Foreign) 식별자입니다.",
    },
    {
      id: 20,
      category: "식별자와 성능",
      question: "다음 중 식별자 관계와 비식별자 관계의 전환에 대한 설명으로 틀린 것은?",
      options: [
        { id: 1, text: "식별자 관계는 자식 엔터티의 주식별자가 너무 복잡해질 우려가 있다.", isCorrect: false },
        { id: 2, text: "비식별자 관계는 부모 엔터티까지 JOIN 해야 하는 경우가 생겨 성능 저하를 유발할 수 있다.", isCorrect: false },
        { id: 3, text: "부모 없이 자식이 존재할 수 있다면 반드시 식별자 관계로 설정해야 한다.", isCorrect: true },
        { id: 4, text: "생명주기가 다른 경우(부모 삭제 시 자식 보존) 비식별자 관계가 적합하다.", isCorrect: false },
      ],
      rationale: "부모 없이 자식이 존재할 수 있는 '약한 종속성'의 경우 '비식별자 관계'로 설정해야 합니다.",
      hint: "3번의 상황은 점선(비식별자)의 전형적인 사례입니다.",
    },
  ],
  18: [
    {
      id: 1,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "데이터 모델링에서 정규화(Normalization)를 수행하는 가장 근본적인 목적은 무엇인가?",
      options: [
        { id: 1, text: "테이블 간의 조인(JOIN)을 최소화하여 조회 성능을 극대화하기 위해", isCorrect: false },
        { id: 2, text: "데이터의 중복을 제거하여 삽입, 갱신, 삭제 시 발생하는 이상현상(Anomaly)을 방지하기 위해", isCorrect: true },
        { id: 3, text: "데이터베이스의 저장 용량을 무한대로 늘리기 위해", isCorrect: false },
        { id: 4, text: "물리 데이터 모델링 단계에서 인덱스를 효율적으로 생성하기 위해", isCorrect: false },
      ],
      rationale: "정규화는 데이터 중복을 최소화하여 무결성을 유지하고 이상현상을 방지하는 것이 주된 목적입니다. 논리 데이터 모델링 시점에 수행됩니다.",
      hint: "정규화의 핵심 키워드는 '중복 제거'와 '이상현상 방지'입니다.",
    },
    {
      id: 2,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "속성 A의 값을 알면 속성 B의 값을 유일하게 알 수 있을 때, 이를 함수적 종속성이라고 한다. 이때 A와 B를 지칭하는 용어로 올바르게 짝지어진 것은?",
      options: [
        { id: 1, text: "A: 종속자, B: 결정자", isCorrect: false },
        { id: 2, text: "A: 결정자, B: 종속자", isCorrect: true },
        { id: 3, text: "A: 후보키, B: 기본키", isCorrect: false },
        { id: 4, text: "A: 외래키, B: 대리키", isCorrect: false },
      ],
      rationale: "`A ➡️ B` 관계에서, 값을 결정하는 A를 결정자(Determinant)라 하고, A에 의해 값이 정해지는 B를 종속자(Dependent)라고 합니다.",
      hint: "원인이 되는 쪽이 '결정'을 내립니다.",
    },
    {
      id: 3,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "다음 중 정규화의 단계별 암기 공식인 [두.부.이.결]의 각 의미가 잘못 연결된 것은?",
      options: [
        { id: 1, text: "두 - 도메인 원자값 확보 (1NF)", isCorrect: false },
        { id: 2, text: "부 - 부분 함수 종속 제거 (2NF)", isCorrect: false },
        { id: 3, text: "이 - 이상현상 완벽 제거 (3NF)", isCorrect: true },
        { id: 4, text: "결 - 모든 결정자는 후보키 (BCNF)", isCorrect: false },
      ],
      rationale: "3NF의 '이'는 이행적 종속 제거를 의미합니다. (A->B->C 관계 단절)",
      hint: "사번->부서코드->부서명 처럼 꼬리를 무는 종속의 이름이 무엇이었는지 떠올려보세요.",
    },
    {
      id: 4,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "정규화가 데이터베이스 성능에 미치는 영향에 대한 설명으로 가장 적절하지 않은 것은?",
      options: [
        { id: 1, text: "정규화를 수행하면 일반적으로 데이터가 한 곳으로 모이므로 입력/수정/삭제(CUD) 성능이 향상된다.", isCorrect: false },
        { id: 2, text: "정규화로 인해 엔터티(테이블)가 분리되면 데이터를 조회(SELECT)할 때 조인(JOIN)이 발생하여 성능이 저하될 수 있다.", isCorrect: false },
        { id: 3, text: "조회 성능 저하를 막기 위해 처음부터 정규화를 수행하지 않고 단일 테이블로 설계하는 것이 실무적인 원칙이다.", isCorrect: true },
        { id: 4, text: "과도한 조인으로 조회 성능 심각하게 저하될 경우 최후의 수단으로 반정규화(De-Normalization)를 고려할 수 있다.", isCorrect: false },
      ],
      rationale: "아무리 조회 성능이 중요하더라도 논리 모델링 단계에서는 일단 정규화를 완벽하게 수행하는 것이 원칙입니다. 이후 성능 테스트를 거쳐 꼭 필요한 부분에만 제한적으로 반정규화를 적용해야 합니다.",
      hint: "정규화는 선택이 아니라 필수 뼈대 작업입니다.",
    },
    {
      id: 5,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "제3정규화(3NF)를 수행하기 위한 전제 조건으로 알맞은 것은?",
      options: [
        { id: 1, text: "제1정규형을 만족해야 한다.", isCorrect: false },
        { id: 2, text: "제2정규형을 만족하고 있어야 한다.", isCorrect: true },
        { id: 3, text: "BCNF를 만족해야 한다.", isCorrect: false },
        { id: 4, text: "테이블 내의 모든 키가 복합키여야 한다.", isCorrect: false },
      ],
      rationale: "정규화는 순차적으로 진행됩니다. 3NF를 수행하려면 반드시 1NF와 2NF(부분 종속 제거)가 선행되어 완료된 상태여야 합니다.",
      hint: "3단계로 가려면 2단계를 패스해야 합니다.",
    },
    {
      id: 6,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "이상현상(Anomaly) 중 \"특정 정보를 삭제할 때 연관된 다른 유용한 정보까지 의도치 않게 함께 삭제되는 현상\"을 무엇이라고 하는가?",
      options: [
        { id: 1, text: "삭제 이상 (Deletion Anomaly)", isCorrect: true },
        { id: 2, text: "갱신 이상 (Update Anomaly)", isCorrect: false },
        { id: 3, text: "삽입 이상 (Insertion Anomaly)", isCorrect: false },
        { id: 4, text: "논리 이상 (Logical Anomaly)", isCorrect: false },
      ],
      rationale: "하나의 테이블에 여러 주제의 정보가 섞여 있을 때 행을 삭제하면서 원치 않는 정보까지 소실되는 현상입니다.",
      hint: "지문 안에 정답이 숨어 있습니다 (\"삭제될 때\").",
    },
    {
      id: 7,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "테이블 내에 주식별자가 단일키(하나의 컬럼)로 구성되어 있을 때, 해당 테이블은 원자성만 만족한다면 절대 위배할 일이 없는 정규화 단계는?",
      options: [
        { id: 1, text: "제1정규화 (1NF)", isCorrect: false },
        { id: 2, text: "제2정규화 (2NF)", isCorrect: true },
        { id: 3, text: "제3정규화 (3NF)", isCorrect: false },
        { id: 4, text: "BCNF", isCorrect: false },
      ],
      rationale: "2NF의 대상이 되는 '부분 함수 종속'은 반드시 주식별자가 2개 이상의 속성으로 묶인 복합키일 때만 발생합니다. 단일키라면 부분 종속 자체가 성립할 수 없으므로 자동으로 2NF를 만족합니다.",
      hint: "'부분'이라는 말은 전체가 여러 개로 나뉘어 있을 때만 쓸 수 있습니다.",
    },
    {
      id: 8,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "어떤 릴레이션(테이블) R에서 X와 Y가 R의 속성 집합일 때, X의 값이 Y의 값을 유일하게 결정한다. 이 관계를 올바르게 표현한 기호는?",
      options: [
        { id: 1, text: "X ⬅️ Y", isCorrect: false },
        { id: 2, text: "X ➡️ Y", isCorrect: true },
        { id: 3, text: "X ↔️ Y", isCorrect: false },
        { id: 4, text: "X = Y", isCorrect: false },
      ],
      rationale: "X(결정자)가 Y(종속자)를 결정할 때 화살표는 결정자에서 종속자 방향으로 향합니다.",
      hint: "화살을 쏘는 쪽이 원인(결정)입니다.",
    },
    {
      id: 9,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "정규화의 단점을 극복하기 위한 기법으로, 시스템의 성능 향상과 개발/운영의 단순화를 위해 데이터 중복을 허용하고 테이블을 병합하거나 컬럼을 추가하는 과정은?",
      options: [
        { id: 1, text: "재정규화", isCorrect: false },
        { id: 2, text: "반정규화 (De-Normalization)", isCorrect: true },
        { id: 3, text: "파티셔닝", isCorrect: false },
        { id: 4, text: "인덱싱", isCorrect: false },
      ],
      rationale: "잦은 조인으로 인한 조회 성능 저하 문제를 해결하기 위해 최후의 수단으로 데이터 중복을 감수하는 기법이 반정규화(역정규화)입니다.",
      hint: "정규화의 반대 방향으로 되돌아가는 작업입니다.",
    },
    {
      id: 10,
      category: "개념 및 성능 관계형 (기본~중급 10문항)",
      question: "다음 빈칸 (A), (B)에 들어갈 말로 알맞게 짝지어진 것은?",
      code: "정규화를 수행하면 데이터가 분산되어 데이터의 ( A ) 시 성능은 향상되지만, 데이터 ( B ) 시에는 조인(JOIN)으로 인해 성능이 저하될 우려가 있다.",
      options: [
        { id: 1, text: "(A) 입력/수정/삭제 , (B) 조회", isCorrect: true },
        { id: 2, text: "(A) 조회 , (B) 입력/수정/삭제", isCorrect: false },
        { id: 3, text: "(A) 무결성 , (B) 정합성", isCorrect: false },
        { id: 4, text: "(A) 추출 , (B) 적재", isCorrect: false },
      ],
      rationale: "정규화는 갱신해야 할 중복 데이터 양을 줄여 CUD(입력/수정/삭제) 성능은 높이지만, 쪼개진 테이블을 다시 모아서 봐야 하는 SELECT(조회) 성능은 낮출 수 있습니다.",
      hint: "데이터가 모여있으면 한 번에 읽기 좋고, 데이터가 쪼개져 있으면 수정할 때 한 곳만 고치면 됩니다.",
    },
    {
      id: 11,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "다음 [그로스_캠페인] 테이블에서 발생한 문제점을 해결하기 위해 가장 먼저 수행해야 하는 정규화 단계는 무엇인가?",
      tables: [
        {
          name: "[그로스_캠페인]",
          headers: ["캠페인ID(PK)", "캠페인명", "타겟_매체"],
          rows: [
            ["C001", "봄시즌_프로모션", "Meta, Google Ads"],
            ["C002", "신규회원_유치", "Naver"],
          ]
        }
      ],
      options: [
        { id: 1, text: "제1정규화 (1NF)", isCorrect: true },
        { id: 2, text: "제2정규화 (2NF)", isCorrect: false },
        { id: 3, text: "제3정규화 (3NF)", isCorrect: false },
        { id: 4, text: "BCNF", isCorrect: false }
      ],
      rationale: "'타겟_매체' 컬럼에 'Meta, Google Ads'라는 여러 개의 값이 들어가 있어 속성의 원자성을 위배했습니다. 도메인 원자값을 확보하는 1NF 대상입니다.",
      hint: "[두.부.이.결] 중 '두(도)' - 속성에는 쉼표(,)로 구분된 다중값이 들어갈 수 없습니다.",
    },
    {
      id: 12,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "다음 [광고_성과] 테이블에 대한 설명으로 가장 적절한 것은?",
      tables: [
        {
          name: "[광고_성과]",
          headers: ["광고그룹ID(PK)", "소재ID(PK)", "소재명", "클릭수"],
          rows: [
            ["G10", "M01", "A/B테스트_이미지1", "1500"],
            ["G10", "M02", "A/B테스트_영상1", "2100"]
          ]
        }
      ],
      options: [
        { id: 1, text: "이 테이블은 현재 제2정규형을 만족하고 있다.", isCorrect: false },
        { id: 2, text: "'소재명'은 기본키 전체가 아닌 '소재ID'에만 종속되므로 제2정규화 대상이다.", isCorrect: true },
        { id: 3, text: "'클릭수'가 '소재명'에 종속되는 이행적 종속이 발생하므로 제3정규화 대상이다.", isCorrect: false },
        { id: 4, text: "모든 결정자가 후보키가 아니므로 BCNF 대상이다.", isCorrect: false }
      ],
      rationale: "주식별자가 {광고그룹ID + 소재ID}인 복합키입니다. 여기서 '소재명'은 복합키의 일부인 '소재ID'만 알아도 결정되는 부분 함수 종속성을 가집니다. 이를 분리하는 것이 2NF입니다.",
      hint: "복합키 테이블이 나오면 가장 먼저 주식별자의 '일부'에만 종속되는 일반 속성이 있는지 확인하세요.",
    },
    {
      id: 13,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "아래 [수강생_정보] 테이블을 두 개의 테이블로 분리하여 정규화를 수행하고자 한다. 적용해야 할 정규화 단계는?",
      tables: [
        {
          name: "[수강생_정보]",
          headers: ["수강생ID(PK)", "이름", "멤버십등급", "할인율"],
          rows: [
            ["S991", "김그로스", "VIP", "20%"],
            ["S992", "이마켓", "GOLD", "10%"]
          ]
        }
      ],
      options: [
        { id: 1, text: "제1정규화 (1NF)", isCorrect: false },
        { id: 2, text: "제2정규화 (2NF)", isCorrect: false },
        { id: 3, text: "제3정규화 (3NF)", isCorrect: true },
        { id: 4, text: "제4정규화 (4NF)", isCorrect: false }
      ],
      rationale: "`수강생ID ➡️ 멤버십등급 ➡️ 할인율`의 관계가 성립합니다. 일반 속성인 '멤버십등급'이 또 다른 일반 속성인 '할인율'을 결정하는 이행적 종속이 발생했으므로 3NF를 통해 테이블 분리가 필요합니다.",
      hint: "A -> B -> C 처럼 일반 속성끼리 꼬리를 무는 관계를 찾으세요.",
    },
    {
      id: 14,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "다음 [특강_수강] 테이블은 제3정규형(3NF)까지 만족한다. 그러나 이상현상이 발생하여 추가적인 정규화가 필요하다. 어떤 정규화가 필요한가?\n(단, 한 강사는 하나의 주제만 강의하며, 한 주제는 여러 강사가 강의할 수 있다.)",
      tables: [
        {
          name: "[특강_수강]",
          headers: ["회원ID(PK)", "특강주제(PK)", "담당강사"],
          rows: [
            ["U001", "SQL기초", "박데이터"],
            ["U002", "SQL기초", "김쿼리"]
          ]
        }
      ],
      options: [
        { id: 1, text: "제1정규화", isCorrect: false },
        { id: 2, text: "제2정규화", isCorrect: false },
        { id: 3, text: "제3정규화", isCorrect: false },
        { id: 4, text: "BCNF", isCorrect: true }
      ],
      rationale: "'담당강사'가 '특강주제'를 결정(`담당강사 ➡️ 특강주제`)하지만, '담당강사'는 이 테이블의 후보키가 아닙니다. 일반 속성이 주식별자의 일부를 결정하는 BCNF 위배 상황입니다.",
      hint: "결정자 역할을 하지만 후보키(PK의 자격)가 아닌 속성이 있는지 살펴보세요.",
    },
    {
      id: 15,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "다음 중 제1정규화(1NF)를 수행해야 하는 비정규형 테이블의 모습으로 가장 알맞은 것은?",
      options: [
        { id: 1, text: "복합키로 이루어진 테이블에서 일부 컬럼이 PK의 절반에만 종속된 테이블", isCorrect: false },
        { id: 2, text: "'회원ID', '가입일', '관심사1', '관심사2', '관심사3' 컬럼으로 구성된 테이블", isCorrect: true },
        { id: 3, text: "사원번호가 PK이며, 부서코드와 부서위치 컬럼이 함께 존재하는 테이블", isCorrect: false },
        { id: 4, text: "조인(JOIN)이 너무 많이 발생하여 성능이 저하된 테이블", isCorrect: false }
      ],
      rationale: "'관심사1, 2, 3'처럼 유사한 속성이 반복되는 그룹이 존재하는 경우도 도메인 원자성을 위배한 것으로 보아 제1정규화의 분해 대상이 됩니다.",
      hint: "하나의 컬럼에 다중값이 있거나, 비슷한 컬럼이 옆으로 나열되어 있으면 1NF 대상입니다.",
    },
    {
      id: 16,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "다음 [주문_배송] 테이블을 보고 올바르게 정규화한 결과를 고르시오.",
      tables: [
        {
          name: "[주문_배송]",
          headers: ["주문번호(PK)", "상품코드(PK)", "주문수량", "고객ID", "고객명"],
          rows: []
        }
      ],
      options: [
        { id: 1, text: "제2정규화를 통해 `[주문번호, 상품코드, 주문수량]`과 `[고객ID, 고객명]`으로 분리한다.", isCorrect: false },
        { id: 2, text: "제2정규화를 통해 `[주문번호, 상품코드, 주문수량]`(주문상세)과 `[주문번호, 고객ID, 고객명]`(주문기본)으로 부분 종속을 제거하여 분리한다.", isCorrect: true },
        { id: 3, text: "제2정규화를 통해 부분 종속을 제거하여 `[주문번호, 고객ID, 고객명]` 테이블을 독립시킨다.", isCorrect: false },
        { id: 4, text: "'주문번호' ➡️ '고객ID' ➡️ '고객명'의 이행적 종속이 있으므로 제3정규화가 필요하다.", isCorrect: false }
      ],
      rationale: "이 테이블에서 '고객ID'와 '고객명'은 복합키 전체가 아닌 '주문번호'에만 종속됩니다(부분 함수 종속). 따라서 제2정규화를 통해 `[주문번호, 상품코드, 주문수량]`(주문상세)과 `[주문번호, 고객ID, 고객명]`(주문기본)으로 분리해야 합니다.",
      hint: "복합키 중 하나인 '주문번호'만 알아도 '고객' 누군지 알 수 있죠? 부분 종속입니다.",
    },
    {
      id: 17,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "정규화를 진행하여 아래와 같이 테이블이 쪼개졌다. 어떤 정규화를 수행한 것인가?",
      code: "[변경 전] [사번(PK), 이름, 직급, 직급수당]\n[변경 후] [사번(PK), 이름, 직급(FK)] / [직급(PK), 직급수당]",
      options: [
        { id: 1, text: "제1정규화 (1NF)", isCorrect: false },
        { id: 2, text: "제2정규화 (2NF)", isCorrect: false },
        { id: 3, text: "제3정규화 (3NF)", isCorrect: true },
        { id: 4, text: "BCNF", isCorrect: false }
      ],
      rationale: "변경 전 테이블에서 `사번 ➡️ 직급 ➡️ 직급수당`이라는 이행적 종속이 존재했습니다. 일반 속성인 직급과 직급수당의 관계를 끊어내어 두 테이블로 분리했으므로 제3정규화입니다.",
      hint: "PK가 단일키(사번)일 때 쪼개졌다면 2NF(부분종속)는 불가능하므로 3NF를 의심하세요.",
    },
    {
      id: 18,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "다음 [도서_대출] 테이블에서 발생할 수 있는 이상현상(Anomaly)이 아닌 것은?\n(단, 회원명은 회원번호에 종속되고, 도서명은 대출도서코드에 종속된다. 현재 대출하지 않은 신규 회원은 대출도서코드가 없다.)",
      tables: [
        {
          name: "[도서_대출]",
          headers: ["회원번호(PK)", "회원명", "대출도서코드", "도서명"],
          rows: [
            ["M01", "홍길동", "B99", "SQLD정복"]
          ]
        }
      ],
      options: [
        { id: 1, text: "삽입 이상: 대출을 아직 하지 않은 신규 회원을 등록하려면, 기본키의 일부인 '대출도서코드'가 없어 Null이 되므로 데이터 삽입이 불가능하다. (PK 복합키 가정 시)", isCorrect: false },
        { id: 2, text: "갱신 이상: 홍길동이 이름을 '홍길순'으로 개명할 경우, 대출 건수만큼 여러 번 수정해야 하며 일부만 수정 시 데이터 불일치가 발생한다.", isCorrect: false },
        { id: 3, text: "삭제 이상: 홍길동이 대출한 'SQLD정복' 도서 반납 처리를 위해 행을 삭제하면, 홍길동이라는 회원 정보 자체도 함께 날아간다.", isCorrect: false },
        { id: 4, text: "조회 이상: 데이터를 조회할 때 조인이 너무 많이 발생하여 시스템이 다운된다.", isCorrect: true }
      ],
      rationale: "정규화 이론에서 다루는 이상현상은 삽입(Insertion), 갱신(Update), 삭제(Deletion) 이상 세 가지뿐입니다. 조회 이상이라는 용어는 없습니다.",
      hint: "이상현상의 종류 3가지를 명확히 암기하세요 (삽입, 갱신, 삭제).",
    },
    {
      id: 19,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "아래의 함수적 종속성 다이어그램을 보고, 현재 테이블이 제1정규형(1NF)만 만족한다고 가정할 때 가장 먼저 수행해야 할 작업은?",
      code: "주문번호 + 상품코드 ➡️ 주문수량\n상품코드 ➡️ 상품단가",
      options: [
        { id: 1, text: "일반 속성 간의 이행적 종속을 제거한다.", isCorrect: false },
        { id: 2, text: "모든 결정자가 후보키가 되도록 분리한다.", isCorrect: false },
        { id: 3, text: "복합키의 일부에만 종속되는 부분 함수 종속을 제거한다.", isCorrect: true },
        { id: 4, text: "다중값을 가지는 속성을 분리한다.", isCorrect: false }
      ],
      rationale: "다이어그램에서 '상품단가'가 복합키의 일부인 '상품코드'에만 종속되어 있습니다. 이는 부분 함수 종속이므로 제2정규화 대상입니다.",
      hint: "다이어그램에서 화살표가 복합키 전체가 아닌 하나에서만 출발하는 것을 찾으세요.",
    },
    {
      id: 20,
      category: "실전 테이블 분석형 (고난도 10문항)",
      question: "채널의 [영상_콘텐츠] 테이블 설계 중이다. 다음 중 BCNF 정규화를 완벽하게 설명한 상황은?",
      options: [
        { id: 1, text: "키워드 컬럼에 '마케팅, 그로스해킹, 데이터' 등 여러 값이 들어가 있어 행을 나눈다.", isCorrect: false },
        { id: 2, text: "'콘텐츠ID'라는 단일 PK 테이블에서 '담당자사번'이 '담당자이름'을 결정하여 분리한다.", isCorrect: false },
        { id: 3, text: "{채널ID, 영상ID} 복합키 상태에서 '조회수'는 전체에 종속되나 '채널명'은 '채널ID'에만 종속되어 분리한다.", isCorrect: false },
        { id: 4, text: "3NF를 만족하는 상태에서 일반 속성인 '카테고리명'이 PK의 일부인 '담당에디터'를 결정짓고 있어 이를 기준으로 분리한다. (결정자이면서 후보키가 아닌 것 분리)", isCorrect: true }
      ],
      rationale: "①은 1NF, ②는 3NF, ③은 2NF에 대한 설명입니다. ④가 모든 결정자가 후보키여야 한다는 BCNF의 분해 기준을 정확히 설명하고 있습니다.",
      hint: "BCNF의 핵심 키워드는 '결정자'와 '후보키'입니다.",
    }
  ],
  142: [
    {
      id: 1,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 NULL\uc5d0 \ub300\ud55c \uc0b0\uc220 \uc5f0\uc0b0 \uacb0\uacfc\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        { id: 1, text: "NULL + 100 = 100", isCorrect: false },
        { id: 2, text: "NULL * 0 = 0", isCorrect: false },
        { id: 3, text: "NULL / 5 = NULL", isCorrect: true },
        { id: 4, text: "NULL - NULL = 0", isCorrect: false },
      ],
      rationale:
        "NULL\uc740 '\uc54c \uc218 \uc5c6\ub294 \uac12'\uc774\ubbc0\ub85c \uc5b4\ub5a4 \uc22b\uc790\uc640 \uc5f0\uc0b0\ud574\ub3c4 \uacb0\uacfc\ub294 \ud56d\uc0c1 NULL\uc785\ub2c8\ub2e4.",
      hint: "NULL\uacfc \ub180\uba74 \uacb0\uacfc\ub294 \ud56d\uc0c1 NULL\uc774 \ub41c\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud558\uc138\uc694.",
    },
    {
      id: 2,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c SQL \ubb38\uc7a5\uc758 \uc2e4\ud589 \uc21c\uc11c\ub85c \uc62c\ubc14\ub978 \uac83\uc740?",
      code: "SELECT ENAME, SAL FROM EMP WHERE SAL > 2000 ORDER BY ENAME;",
      options: [
        {
          id: 1,
          text: "SELECT -> FROM -> WHERE -> ORDER BY",
          isCorrect: false,
        },
        { id: 2, text: "FROM -> WHERE -> SELECT -> ORDER BY", isCorrect: true },
        {
          id: 3,
          text: "FROM -> SELECT -> WHERE -> ORDER BY",
          isCorrect: false,
        },
        {
          id: 4,
          text: "WHERE -> FROM -> SELECT -> ORDER BY",
          isCorrect: false,
        },
      ],
      rationale:
        "SQL\uc758 \ub17c\ub9ac\uc801 \uc2e4\ud589 \uc21c\uc11c\ub294 FROM(\uc7ac\ub8cc) -> WHERE(\ud544\ud130) -> SELECT(\ucd94\ucd9c) -> ORDER BY(\uc815\ub82c) \uc21c\uc785\ub2c8\ub2e4.",
      hint: "\ud504-\uc6e8-\uadf8-\ud558-\uc140-\uc624(FWGHSO)\ub97c \uc554\uae30\ud558\uc138\uc694.",
    },
    {
      id: 3,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 SQL \ubb38\uc7a5\uc740?",
      options: [
        {
          id: 1,
          text: "`SELECT ENAME AS \uc774\ub984 FROM EMP WHERE SAL > 2000;`",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`SELECT ENAME \uc774\ub984 FROM EMP ORDER BY \uc774\ub984;`",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`SELECT ENAME AS \uc774\ub984 FROM EMP WHERE \uc774\ub984 = 'SMITH';`",
          isCorrect: true,
        },
        { id: 4, text: "`SELECT * FROM EMP;`", isCorrect: false },
      ],
      rationale:
        "WHERE \uc808\uc740 SELECT \uc808\ubcf4\ub2e4 \uba3c\uc800 \uc2e4\ud589\ub418\ubbc0\ub85c SELECT \uc808\uc5d0\uc11c \uc815\uc758\ud55c \ubcc4\uce6d(Alias)\uc744 WHERE \uc808\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      hint: "\uc2e4\ud589 \uc21c\uc11c\uc0c1 WHERE \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc544\uc9c1 '\uc774\ub984'\uc774\ub77c\ub294 \ubcc4\uba85\uc774 \ud0dc\uc5b4\ub098\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
    },
    {
      id: 4,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 \uc911\ubcf5\ub41c \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\uace0 \uc885\ub958\ubcc4\ub85c \ud558\ub098\uc529\ub9cc \ucd9c\ub825\ud558\ub294 \ud0a4\uc6cc\ub4dc\ub294?",
      options: [
        { id: 1, text: "ALL", isCorrect: false },
        { id: 2, text: "DISTINCT", isCorrect: true },
        { id: 3, text: "UNIQUE", isCorrect: false },
        { id: 4, text: "GROUP BY", isCorrect: false },
      ],
      rationale:
        "SELECT \ubc14\ub85c \ub4a4\uc5d0 DISTINCT\ub97c \ubd99\uc774\uba74 \uc911\ubcf5 \ud589\uc744 \uc81c\uac70\ud55c \uacb0\uacfc\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4.",
      hint: "1\uc77c\ucc28 \uac15\uc758\uc548\uc758 '\uc911\ubcf5 \uc81c\uac70' \ud30c\ud2b8\ub97c \ucc38\uace0\ud558\uc138\uc694.",
    },
    {
      id: 5,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 \ubb38\uc790\uc5f4 \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`LOWER`\ub294 \ubb38\uc790\uc5f4\uc744 \uc18c\ubb38\uc790\ub85c \ubcc0\ud658\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`SUBSTR('ABCDE', 2, 2)`\uc758 \uacb0\uacfc\ub294 'BC'\uc774\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`LTRIM`\uc740 \ubb38\uc790\uc5f4 \uc624\ub978\ucabd\uc758 \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`CONCAT`\uc740 \ub450 \ubb38\uc790\uc5f4\uc744 \ud558\ub098\ub85c \ud569\uce5c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "LTRIM\uc740 \uc67c\ucabd(Left) \uacf5\ubc31\uc744 \uc81c\uac70\ud558\uba70, \uc624\ub978\ucabd \uacf5\ubc31 \uc81c\uac70\ub294 RTRIM\uc785\ub2c8\ub2e4.",
      hint: "L\uc740 Left, R\uc740 Right\uc785\ub2c8\ub2e4.",
    },
    {
      id: 6,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\uc624\ub77c\ud074 \ud658\uacbd\uc5d0\uc11c `ROUND(123.456, 1)`\uc758 \uc2e4\ud589 \uacb0\uacfc\ub294?",
      options: [
        { id: 1, text: "123", isCorrect: false },
        { id: 2, text: "123.4", isCorrect: false },
        { id: 3, text: "123.5", isCorrect: true },
        { id: 4, text: "120", isCorrect: false },
      ],
      rationale:
        "\uc18c\uc218\uc810 \uccab\uc9f8 \uc790\ub9ac\uae4c\uc9c0 \ud45c\uc2dc\ud558\uae30 \uc704\ud574 \ub458\uc9f8 \uc790\ub9ac\uc5d0\uc11c \ubc18\uc62c\ub9bc\ud569\ub2c8\ub2e4.",
      hint: "\uc591\uc218 \uc778\ub371\uc2a4\ub294 \uc18c\uc218\uc810 \uc790\ub9bf\uc218\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.",
    },
    {
      id: 7,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 \ub0a0\uc9dc \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`SYSDATE`\ub294 SQL Server\uc758 \ud604\uc7ac \uc2dc\uac04\uc744 \uac00\uc838\uc628\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`\ub0a0\uc9dc + 1`\uc740 \ud574\ub2f9 \ub0a0\uc9dc\uc5d0 1\uc2dc\uac04\uc744 \ub354\ud55c \uacb0\uacfc\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`EXTRACT(YEAR FROM SYSDATE)`\ub294 \ud604\uc7ac \ub144\ub3c4\ub97c \uc22b\uc790\ub85c \ubc18\ud658\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\ub0a0\uc9dc\uc640 \ub0a0\uc9dc\ub97c \ub354\ud558\uba74 \ub450 \ub0a0\uc9dc \uc0ac\uc774\uc758 \uc77c\uc218\uac00 \uacc4\uc0b0\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "EXTRACT\ub294 \ud2b9\uc815 \ub0a0\uc9dc \uc694\uc18c\ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4. 2\ubc88\uc740 1\uc77c(24\uc2dc\uac04)\uc744 \ub354\ud558\ub294 \uac83\uc774\uba70, 4\ubc88\uc740 \ub0a0\uc9dc \uac04\uc758 \ube84\uc148\uc774 \uc77c\uc218 \uacc4\uc0b0\uc785\ub2c8\ub2e4.",
      hint: "\ub0a0\uc9dc \uc5f0\uc0b0\uc758 \uae30\ubcf8 \ub2e8\uc704\ub294 '\uc77c(Day)'\uc785\ub2c8\ub2e4.",
    },
    {
      id: 8,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ubcf4\ub108\uc2a4(COMM) \uceec\ub7fc\uc774 NULL\uc778 \uacbd\uc6b0 0\uc73c\ub85c \uce58\ud658\ud558\uc5ec \uae09\uc5ec(SAL)\uc640 \ub354\ud558\ub294 \ud568\uc218\ub85c \uc801\uc808\ud55c \uac83\uc740? (Oracle \uae30\uc900)",
      options: [
        { id: 1, text: "`ISNULL(COMM, 0)`", isCorrect: false },
        { id: 2, text: "`NVL(COMM, 0)`", isCorrect: true },
        { id: 3, text: "`NULLIF(COMM, 0)`", isCorrect: false },
        { id: 4, text: "`COALESCE(COMM, 0)`", isCorrect: false },
      ],
      rationale:
        "NVL(\uac12, \ub300\uccb4\uac12)\uc740 \uac12\uc774 NULL\uc778 \uacbd\uc6b0 \ub300\uccb4\uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. 1\ubc88\uc740 SQL Server \ud568\uc218\uc785\ub2c8\ub2e4.",
      hint: "3\uc77c\ucc28 NULL \ucc98\ub9ac \ud568\uc218 \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 9,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 \uc9d1\uacc4 \ud568\uc218\uc640 NULL\uc758 \uad00\uacc4\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ud2c0\ub9b0 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`COUNT(*)`\ub294 NULL\uc744 \ud3ec\ud568\ud558\uc5ec \ud589\uc758 \uc218\ub97c \uc0cc\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`SUM(SAL)`\uc740 SAL\uc774 NULL\uc778 \ud589\uc744 \uc81c\uc678\ud558\uace0 \ud569\uacc4\ub97c \uad6c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`AVG(SAL)`\uc740 \uc804\uccb4 \ud589 \uc218\ub85c \ud569\uacc4\ub97c \ub098\ub204\uc5b4 \ud3c9\uade0\uc744 \uad6c\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`MAX`\uc640 `MIN`\uc740 NULL\uc744 \ubb34\uc2dc\ud558\uace0 \uacc4\uc0b0\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "AVG\ub294 NULL\uc778 \ud589\uc744 '\ubd84\ubaa8'\uc5d0\uc11c\ub3c4 \uc81c\uc678\ud558\uace0 \ud3c9\uade0\uc744 \uad6c\ud569\ub2c8\ub2e4. (\ud569\uacc4 / NULL\uc774 \uc544\ub2cc \ud589\uc758 \uc218)",
      hint: "\uc9d1\uacc4 \ud568\uc218\ub294 \uae30\ubcf8\uc801\uc73c\ub85c NULL\uc744 '\ubb34\uc2dc'\ud569\ub2c8\ub2e4.",
    },
    {
      id: 10,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\uc544\ub798 SQL \ubb38\uc7a5\uc758 \uc5d0\ub7ec \uc6d0\uc778\uc73c\ub85c \uac00\uc7a5 \uc801\uc808\ud55c \uac83\uc740?",
      code: "SELECT DEPTNO, ENAME, SUM(SAL)\nFROM EMP\nGROUP BY DEPTNO;",
      options: [
        {
          id: 1,
          text: "SUM \ud568\uc218\ub294 GROUP BY\uc640 \ud568\uaed8 \uc4f8 \uc218 \uc5c6\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "ENAME \uceec\ub7fc\uc774 GROUP BY \uc808\uc5d0 \uba85\uc2dc\ub418\uc9c0 \uc54a\uc558\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "DEPTNO\ub294 \uc22b\uc790\ud615\uc774\ub77c \uadf8\ub8f9\ud654\ud560 \uc218 \uc5c6\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "FROM \uc808\uc5d0 \ud14c\uc774\ube14 \ubcc4\uce6d\uc774 \uc5c6\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "GROUP BY \uc0ac\uc6a9 \uc2dc SELECT \uc808\uc5d0 \uc788\ub294 \uc9d1\uacc4\ub418\uc9c0 \uc54a\uc740 \uc77c\ubc18 \uceec\ub7fc\uc740 \ubc18\ub4dc\uc2dc GROUP BY\uc5d0 \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.",
      hint: '4\uc77c\ucc28 "\ud300\ubcc4 \ud68c\uc2dd\ube44 \uc815\uc0b0" \ube44\uc720\ub97c \ub5a0\uc62c\ub824\ubcf4\uc138\uc694.',
    },
    {
      id: 11,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 HAVING \uc808\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "WHERE \uc808\uacfc \ub3d9\uc77c\ud55c \uae30\ub2a5\uc744 \uc218\ud589\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc9d1\uacc4 \ud568\uc218\ub97c \uc774\uc6a9\ud55c \uc870\uac74 \ud544\ud130\ub9c1\uc774 \uac00\ub2a5\ud558\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "GROUP BY \uc808 \uc5c6\uc774\ub3c4 \ub2e8\ub3c5\uc73c\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc2e4\ud589 \uc21c\uc11c\uc0c1 WHERE \uc808\ubcf4\ub2e4 \uba3c\uc800 \uc2e4\ud589\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "HAVING\uc740 \uadf8\ub8f9\ud654\ub41c \uacb0\uacfc(\uc9d1\uacc4 \uacb0\uacfc)\uc5d0 \uc870\uac74\uc744 \uac78 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
      hint: "4\uc77c\ucc28 \uc0ac\uacfc \uc120\ubcc4 \uc791\uc5c5 \ube44\uc720\uc5d0\uc11c '\ubc15\uc2a4 \ubb34\uac8c \uc7ac\uae30' \ub2e8\uacc4\uc785\ub2c8\ub2e4.",
    },
    {
      id: 12,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 INNER JOIN\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uac00\uc7a5 \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc870\uc778 \uc870\uac74\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\uac00 \uc591\ucabd \ud14c\uc774\ube14\uc5d0 \ubaa8\ub450 \uc788\uc744 \ub54c\ub9cc \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uad50\uc9d1\ud569\uacfc \uc720\uc0ac\ud55c \uc131\uaca9\uc744 \uac16\ub294\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Oracle\uc5d0\uc11c\ub294 WHERE \uc808\uc5d0 \uc870\uc778 \uc870\uac74\uc744 \uae30\uc220\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ud55c\ucabd \ud14c\uc774\ube14\uc5d0\ub9cc \ub370\uc774\ud130\uac00 \uc788\uc5b4\ub3c4 \ubb34\uc870\uac74 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "\uc591\ucabd \ubaa8\ub450 \uc874\uc7ac\ud574\uc57c \ud558\ub294 \uac83\uc774 INNER JOIN\uc774\uba70, \ud55c\ucabd\ub9cc \uc788\uc5b4\ub3c4 \ucd9c\ub825\ub418\ub294 \uac83\uc740 OUTER JOIN\uc785\ub2c8\ub2e4.",
      hint: "\uc18c\uac1c\ud305\uc5d0\uc11c \ub9e4\uce6d\ub41c \ucee4\ud50c\ub9cc \ubcf4\uc5ec\uc8fc\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.",
    },
    {
      id: 13,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 NATURAL JOIN\uc758 \ud2b9\uc9d5\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc870\uc778 \uceec\ub7fc\uc5d0 \ud14c\uc774\ube14 \ubcc4\uce6d(Alias)\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "ON \uc808\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc870\uc778 \uc870\uac74\uc744 \uba85\uc2dc\ud574\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc774\ub984\uc740 \ub2e4\ub974\uc9c0\ub9cc \ud0c0\uc785\uc774 \uac19\uc740 \uceec\ub7fc\uc744 \ucc3e\uc544 \uc870\uc778\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "INNER JOIN\ubcf4\ub2e4 \uc131\ub2a5\uc774 \ud56d\uc0c1 \uc6b0\uc218\ud558\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "NATURAL JOIN\uc740 \uc790\ub3d9\uc73c\ub85c \uceec\ub7fc\uc744 \ucc3e\uc73c\ubbc0\ub85c \uc870\uc778 \uceec\ub7fc\uc5d0 \uc2dd\ubcc4\uc790(E.DEPTNO \ub4f1)\ub97c \ubd99\uc774\uba74 \uc5d0\ub7ec\uac00 \ub0a9\ub2c8\ub2e4.",
      hint: "5\uc77c\ucc28 '\uacf5\ud1b5 \uceec\ub7fc\uc740 \ucfe8\ud558\uac8c \ud63c\uc790' \ud30c\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 14,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "LEFT OUTER JOIN\uc5d0\uc11c \uc67c\ucabd \ud14c\uc774\ube14\uc5d0\ub294 \ub370\uc774\ud130\uac00 \uc788\uace0 \uc624\ub978\ucabd \ud14c\uc774\ube14\uc5d0\ub294 \ub9e4\uce6d\ub418\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc744 \ub54c \ucd9c\ub825\uac12\uc740?",
      options: [
        {
          id: 1,
          text: "\ud574\ub2f9 \ud589\uc740 \ucd9c\ub825\ub418\uc9c0 \uc54a\ub294\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc624\ub978\ucabd \ud14c\uc774\ube14\uc758 \uceec\ub7fc\uac12\ub4e4\uc774 NULL\ub85c \ucc44\uc6cc\uc838 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\uc67c\ucabd \ud14c\uc774\ube14\uc758 \ub370\uc774\ud130\ub3c4 \uc0ad\uc81c\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\uae30\uc900 \ud14c\uc774\ube14(\uc67c\ucabd)\uc758 \ub370\uc774\ud130\ub294 \ub2e4 \ubcf4\uc5ec\uc8fc\ub418 \uc9dd\uc774 \uc5c6\uc73c\uba74 \ube48\uce78(NULL)\uc73c\ub85c \ub098\uc635\ub2c8\ub2e4.",
      hint: "5\uc77c\ucc28 '\uad6c\ub9e4 \uc548 \ud55c \ud68c\uc6d0' \uc608\uc2dc\ub97c \ub5a0\uc62c\ub824\ubcf4\uc138\uc694.",
    },
    {
      id: 15,
      category: "[PART 1] SQL \uae30\ubcf8 (DAY 1 ~ 5)",
      question:
        "\ub2e4\uc74c \uc911 3\uac1c\uc758 \ud14c\uc774\ube14\uc744 \uc870\uc778\ud560 \ub54c \ud544\uc694\ud55c \ucd5c\uc18c \uc870\uc778 \uc870\uac74\uc758 \uac1c\uc218\ub294?",
      options: [
        { id: 1, text: "1\uac1c", isCorrect: false },
        { id: 2, text: "2\uac1c", isCorrect: true },
        { id: 3, text: "3\uac1c", isCorrect: false },
        { id: 4, text: "\uc5c6\uc74c", isCorrect: false },
      ],
      rationale:
        "N\uac1c\uc758 \ud14c\uc774\ube14\uc744 \uc870\uc778\ud558\ub824\uba74 \ucd5c\uc18c N-1\uac1c\uc758 \uc870\uac74\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
      hint: "N-1\uc758 \ubc95\uce59\uc744 \uae30\uc5b5\ud558\uc138\uc694.",
    },
    {
      id: 16,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ub2e4\uc74c \uc911 \uc11c\ube0c\ucffc\ub9ac\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc11c\ube0c\ucffc\ub9ac\ub294 \ud56d\uc0c1 \uad04\ud638\ub85c \uac10\uc2f8\uc57c \ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ub2e8\uc77c \ud589 \uc11c\ube0c\ucffc\ub9ac\ub294 \uacb0\uacfc\uac00 2\uac74 \uc774\uc0c1\uc774\uc5b4\ub3c4 \uc0c1\uad00\uc5c6\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc11c\ube0c\ucffc\ub9ac \ub0b4\uc5d0\uc11c\ub294 ORDER BY \uc808\uc744 \uc4f8 \uc218 \uc5c6\ub2e4 (\uc778\ub77c\uc778 \ubdf0 \uc81c\uc678).",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc11c\ube0c\ucffc\ub9ac\ub294 \uba54\uc778\ucffc\ub9ac\uc758 \uceec\ub7fc\uc744 \ucc38\uc870\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub2e8\uc77c \ud589 \uc11c\ube0c\ucffc\ub9ac\uc5d0 \uacb0\uacfc\uac00 2\uac74 \uc774\uc0c1 \ub098\uc624\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.",
      hint: "8\uc77c\ucc28 \ub2e8\uc77c \ud589 vs \ub2e4\uc911 \ud589 \uc5f0\uc0b0\uc790\ub97c \uad6c\ubd84\ud558\uc138\uc694.",
    },
    {
      id: 17,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ub2e4\uc74c \uc911 \ub2e4\uc911 \ud589 \uc5f0\uc0b0\uc790\uac00 \uc544\ub2cc \uac83\uc740?",
      options: [
        { id: 1, text: "IN", isCorrect: false },
        { id: 2, text: "ANY", isCorrect: false },
        { id: 3, text: "<>", isCorrect: true },
        { id: 4, text: "ALL", isCorrect: false },
      ],
      rationale:
        "`<>`\ub294 \ub2e8\uc77c \ud589 \ube44\uad50 \uc5f0\uc0b0\uc790\uc785\ub2c8\ub2e4.",
      hint: "8\uc77c\ucc28 \ub2e4\uc911 \ud589 \ud544\uc218 \uc554\uae30 \uc5f0\uc0b0\uc790 \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 18,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ubdf0(View)\ub97c \uc0ac\uc6a9\ud558\ub294 \uc7a5\uc810 \uc911 '\ubcf4\uc548\uc131'\uacfc \uad00\ub828 \uc788\ub294 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\ubcf5\uc7a1\ud55c \ucffc\ub9ac\ub97c \ub2e8\uc21c\ud654\uc2dc\ud0a8\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ud2b9\uc815 \uceec\ub7fc\uc744 \uc81c\uc678\ud558\uace0 \ubdf0\ub97c \uc0dd\uc131\ud558\uc5ec \uad8c\ud55c\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc6d0\ubcf8 \ud14c\uc774\ube14 \uad6c\uc870\uac00 \ubc14\ub00c\uc5b4\ub3c4 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\ub294\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ub370\uc774\ud130 \uc800\uc7a5 \uacf5\uac04\uc744 \uc808\uc57d\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ubbfc\uac10\ud55c \uc815\ubcf4(\uae09\uc5ec \ub4f1)\ub97c \ube7c\uace0 \ubdf0\ub97c \ub9cc\ub4e4\uc5b4 \uacf5\uac1c\ud568\uc73c\ub85c\uc368 \ubcf4\uc548\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4.",
      hint: "'\ub3c5\u00b7\ud3b8\u00b7\ubcf4'\uc758 \ubcf4\uc548\uc131\uc785\ub2c8\ub2e4.",
    },
    {
      id: 19,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ub2e4\uc74c \uc911 \uc9d1\ud569 \uc5f0\uc0b0\uc790 `UNION`\uacfc `UNION ALL`\uc758 \uacb0\uc815\uc801 \ucc28\uc774\ub294?",
      options: [
        {
          id: 1,
          text: "\ud569\uce58\ub294 \ub370\uc774\ud130\uc758 \ud0c0\uc785",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uacb0\uacfc\uc758 \uc911\ubcf5 \uc81c\uac70 \uc5ec\ubd80 \ubc0f \uc815\ub82c \ubc1c\uc0dd \uc5ec\ubd80",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uceec\ub7fc\uc758 \uac1c\uc218 \uc77c\uce58 \uc5ec\ubd80",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc0ac\uc6a9 \uac00\ub2a5\ud55c DBMS\uc758 \uc885\ub958",
          isCorrect: false,
        },
      ],
      rationale:
        "UNION\uc740 \uc911\ubcf5\uc744 \uc81c\uac70\ud558\uace0 \uc815\ub82c\uc744 \uc218\ud589\ud558\uba70, UNION ALL\uc740 \uc911\ubcf5\uc744 \ud5c8\uc6a9\ud558\uace0 \uc815\ub82c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
      hint: "\uc815\ub82c(Sort)\uc740 \uc131\ub2a5\uc5d0 \uc601\ud5a5\uc744 \uc90d\ub2c8\ub2e4.",
    },
    {
      id: 20,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "`ROLLUP(A, B)` \uc2e4\ud589 \uc2dc \uc9d1\uacc4\ub418\ub294 \uc870\ud569\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        { id: 1, text: "(A, B), (A), ()", isCorrect: true },
        { id: 2, text: "(A, B), (B), ()", isCorrect: false },
        { id: 3, text: "(A), (B), ()", isCorrect: false },
        { id: 4, text: "(A, B), (A), (B), ()", isCorrect: false },
      ],
      rationale:
        "ROLLUP\uc740 \uacc4\uce35\uc801\uc73c\ub85c \uc624\ub978\ucabd \uceec\ub7fc\ubd80\ud130 \ud558\ub098\uc529 \ube7c\uba74\uc11c \uc9d1\uacc4\ud569\ub2c8\ub2e4.",
      hint: "9\uc77c\ucc28 ROLLUP \uacf5\uc2dd (A+B -> A -> \ucd1d\uacc4)\uc744 \uae30\uc5b5\ud558\uc138\uc694.",
    },
    {
      id: 21,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ub2e4\uc74c \uc911 \uc21c\uc704 \ud568\uc218 3\ub300\uc7a5\uc758 \uc124\uba85\uc73c\ub85c \ud2c0\ub9b0 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`RANK`: 1, 1, 3 \uc21c\uc704 \ubd80\uc5ec (\uac74\ub108\ub700)",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`DENSE_RANK`: 1, 1, 2 \uc21c\uc704 \ubd80\uc5ec (\ube7d\ube7d\ud568)",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`ROW_NUMBER`: 1, 2, 3 \uc21c\uc704 \ubd80\uc5ec (\ubb34\uc870\uac74 \ub2e4\ub984)",
          isCorrect: false,
        },
        {
          id: 4,
          text: "`RANK`: \ubc18\ub4dc\uc2dc `PARTITION BY`\uac00 \uc788\uc5b4\uc57c \uc2e4\ud589\ub41c\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "PARTITION BY\ub294 \uc120\ud0dd \uc0ac\ud56d\uc774\uba70, \uc5c6\uc73c\uba74 \uc804\uccb4 \ub370\uc774\ud130 \uae30\uc900\uc785\ub2c8\ub2e4.",
      hint: "10\uc77c\ucc28 \uc62c\ub9bc\ud53d \uba54\ub2ec \ube44\uc720\ub97c \ub5a0\uc62c\ub824\ubcf4\uc138\uc694.",
    },
    {
      id: 22,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "`ROWS`\uc640 `RANGE`\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`ROWS`\ub294 \uac12\uc758 \ud06c\uae30\ub97c \uae30\uc900\uc73c\ub85c \ubc94\uc704\ub97c \uc815\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`RANGE`\ub294 \ubb3c\ub9ac\uc801\uc778 \ud589\uc758 \uc218\ub97c \uae30\uc900\uc73c\ub85c \ubc94\uc704\ub97c \uc815\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`RANGE`\ub294 \ub3d9\uc77c\ud55c \uac12\uc774 \uc788\uc744 \uacbd\uc6b0 \ud55c\uaebc\ubc88\uc5d0 \ucc98\ub9ac\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`ORDER BY`\uac00 \uc788\uc73c\uba74 \ubb34\uc870\uac74 `ROWS`\uac00 \uae30\ubcf8\uac12\uc774\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "RANGE\ub294 \ub17c\ub9ac\uc801 \uac12 \uae30\uc900\uc774\ubbc0\ub85c \uac12\uc774 \uac19\uc73c\uba74 \ub3d9\uc2dc\uc5d0 \ub204\uc801 \uc5f0\uc0b0\ub429\ub2c8\ub2e4.",
      hint: "10\uc77c\ucc28 100\uc6d0, 100\uc6d0 \uc785\uae08 \uc0ac\ub840\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 23,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\uc708\ub3c4\uc6b0 \ud568\uc218\uc5d0\uc11c \uc774\uc804 \ud589\uc758 \uac12\uc744 \uac00\uc838\uc624\ub294 \ud568\uc218\ub294?",
      options: [
        { id: 1, text: "LEAD", isCorrect: false },
        { id: 2, text: "LAG", isCorrect: true },
        { id: 3, text: "FIRST_VALUE", isCorrect: false },
        { id: 4, text: "NTILE", isCorrect: false },
      ],
      rationale:
        "LAG\ub294 \uc774\uc804(\uacfc\uac70) \ud589, LEAD\ub294 \ub2e4\uc74c(\ubbf8\ub798) \ud589\uc758 \uac12\uc744 \uac00\uc838\uc635\ub2c8\ub2e4.",
      hint: "Lagging(\ub4a4\ucc98\uc9d0)\uc740 \uacfc\uac70\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.",
    },
    {
      id: 24,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "Oracle\uc5d0\uc11c \uc0c1\uc704 5\uac1c\uc758 \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud558\uae30 \uc704\ud574 \uac00\uc7a5 \uc801\uc808\ud55c \ubc29\ubc95\uc740?",
      code: "-- (A)\nSELECT * FROM EMP WHERE ROWNUM <= 5 ORDER BY SAL DESC;\n-- (B)\nSELECT * FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 5;",
      options: [
        { id: 1, text: "(A)\uac00 \ub9de\ub2e4.", isCorrect: false },
        { id: 2, text: "(B)\uac00 \ub9de\ub2e4.", isCorrect: true },
        {
          id: 3,
          text: "\ub458 \ub2e4 \uacb0\uacfc\uac00 \uac19\ub2e4.",
          isCorrect: false,
        },
        { id: 4, text: "\ub458 \ub2e4 \ud2c0\ub838\ub2e4.", isCorrect: false },
      ],
      rationale:
        "ROWNUM\uc740 \ud589 \ucd94\ucd9c \uc2dc \ubc88\ud638\uac00 \ub9e4\uaca8\uc9c0\ubbc0\ub85c, \uc815\ub82c\uc744 \uba3c\uc800 \uc218\ud589\ud55c \uc11c\ube0c\ucffc\ub9ac \uacb0\uacfc\ub97c \ub300\uc0c1\uc73c\ub85c \uc798\ub77c\uc57c \ud569\ub2c8\ub2e4.",
      hint: "11\uc77c\ucc28 ROWNUM '\ubb38 \uc55e \ubc88\ud638\ud45c' \ube44\uc720\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 25,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ub2e4\uc74c \uacc4\uce35\ud615 \uc9c8\uc758\uc5d0\uc11c \uc21c\ubc29\ud5a5 \uc804\uac1c(\ubd80\ubaa8->\uc790\uc2dd)\ub97c \uc758\ubbf8\ud558\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "`CONNECT BY PRIOR EMPNO = MGR`", isCorrect: true },
        { id: 2, text: "`CONNECT BY EMPNO = PRIOR MGR`", isCorrect: false },
        { id: 3, text: "`START WITH MGR IS NULL`", isCorrect: false },
        { id: 4, text: "`ORDER SIBLINGS BY ENAME`", isCorrect: false },
      ],
      rationale:
        "`PRIOR \uc0ac\ubc88 = \uad00\ub9ac\uc790\uc0ac\ubc88`\uc740 \ubc29\uae08 \uc77d\uc740 \uc0ac\ub78c(\ubd80\ubaa8)\uc774 \ub204\uad70\uac00\uc758 \uad00\ub9ac\uc790\uc778 \uacbd\uc6b0\ub97c \ucc3e\ub294 \uc21c\ubc29\ud5a5\uc785\ub2c8\ub2e4.",
      hint: "PRIOR\ub294 '\uc9c1\uc804\uc5d0 \uc77d\uc740 \ub370\uc774\ud130'\uc785\ub2c8\ub2e4.",
    },
    {
      id: 26,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\uacc4\uce35\ud615 \uc9c8\uc758\uc758 \uac00\uc0c1 \uceec\ub7fc \uc911 \ub8e8\ud2b8 \ub178\ub4dc(\ucd5c\uc0c1\uc704)\uba74 1, \uadf8 \ud558\uc704\uba74 2... \uc2dd\uc73c\ub85c \uae4a\uc774\ub97c \ub098\ud0c0\ub0b4\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "LEVEL", isCorrect: true },
        { id: 2, text: "CONNECT_BY_ISLEAF", isCorrect: false },
        { id: 3, text: "SYS_CONNECT_BY_PATH", isCorrect: false },
        { id: 4, text: "CONNECT_BY_ROOT", isCorrect: false },
      ],
      rationale:
        "LEVEL\uc740 \ud2b8\ub9ac\uc758 \uae4a\uc774\ub97c \ub098\ud0c0\ub0b4\ub294 \uac00\uc0c1 \uceec\ub7fc\uc785\ub2c8\ub2e4.",
      hint: "11\uc77c\ucc28 \uac00\uc0c1 \uceec\ub7fc \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 27,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\ub2e4\uc74c \uc911 \uc140\ud504 \uc870\uc778(Self Join)\uc774 \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uc0c1\ud669\uc740?",
      options: [
        {
          id: 1,
          text: "\uc0ac\uc6d0 \uc815\ubcf4\uc640 \ubd80\uc11c \uc815\ubcf4\ub97c \ud569\uce60 \ub54c",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ud55c \ud14c\uc774\ube14 \ub0b4\uc5d0\uc11c \uc0ac\uc6d0\uacfc \uadf8 \uc0ac\uc6d0\uc758 \ub9e4\ub2c8\uc800 \uc815\ubcf4\ub97c \ud568\uaed8 \ubcf4\uace0 \uc2f6\uc744 \ub54c",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ub450 \ud14c\uc774\ube14\uc758 \uad50\uc9d1\ud569\uc744 \uad6c\ud560 \ub54c",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc911\ubcf5 \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\uace0 \uc2f6\uc744 \ub54c",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub9e4\ub2c8\uc800 \uc815\ubcf4\ub3c4 \uc0ac\uc6d0 \ud14c\uc774\ube14 \uc548\uc5d0 \uc788\uc73c\ubbc0\ub85c \ub098 \uc790\uc2e0\uacfc \uc870\uc778\ud574\uc57c \ud569\ub2c8\ub2e4.",
      hint: "11\uc77c\ucc28 \ucd5c\ub300\ub9ac(301)\uc640 \uc774\ubd80\uc7a5(201) \uc0ac\ub840\ub97c \ub5a0\uc62c\ub824\ubcf4\uc138\uc694.",
    },
    {
      id: 28,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "`LAST_VALUE` \ud568\uc218 \uc0ac\uc6a9 \uc2dc \ubc94\uc704\ub97c `UNBOUNDED FOLLOWING`\uae4c\uc9c0 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ubc1c\uc0dd\ud558\ub294 \ud604\uc0c1\uc740?",
      options: [
        {
          id: 1,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ud56d\uc0c1 \uc804\uccb4\uc758 \ub9c8\uc9c0\ub9c9 \uac12\uc774 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "'\ud604\uc7ac \ud589'\uc774 \ub9c8\uc9c0\ub9c9 \uac12\uc73c\ub85c \uac04\uc8fc\ub418\uc5b4 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "NULL\uc774 \ucd9c\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\uc708\ub3c4\uc6b0 \uae30\ubcf8 \ubc94\uc704\uac00 '\ud604\uc7ac \ud589'\uae4c\uc9c0\uc774\ubbc0\ub85c LAST_VALUE\ub294 \ubc94\uc704\ub97c \ub05d\uae4c\uc9c0 \uc5f4\uc5b4\uc8fc\uc9c0 \uc54a\uc73c\uba74 \ubb34\uc758\ubbf8\ud574\uc9d1\ub2c8\ub2e4.",
      hint: "10\uc77c\ucc28 \ud83d\udea8 LAST_VALUE\uc758 \ubc30\uc2e0 \ud30c\ud2b8\ub97c \ucc38\uace0\ud558\uc138\uc694.",
    },
    {
      id: 29,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "`NTILE(4)` \ud568\uc218\ub97c 10\uac1c\uc758 \ub370\uc774\ud130\uc5d0 \uc801\uc6a9\ud588\uc744 \ub54c 1\uadf8\ub8f9\uc5d0 \ubc30\uc815\ub418\ub294 \ud589\uc758 \uc218\ub294?",
      options: [
        { id: 1, text: "2\uac1c", isCorrect: false },
        { id: 2, text: "3\uac1c", isCorrect: true },
        { id: 3, text: "4\uac1c", isCorrect: false },
        { id: 4, text: "1\uac1c", isCorrect: false },
      ],
      rationale:
        "10\uc744 4\ub85c \ub098\ub204\uba74 \ubaab\uc774 2, \ub098\uba38\uc9c0\uac00 2\uc774\ubbc0\ub85c \uc55e\uc758 1, 2\uadf8\ub8f9\uc5d0 \ud558\ub098\uc529 \ub354 \ubc30\uc815\ud569\ub2c8\ub2e4. (3, 3, 2, 2)",
      hint: "\ub098\uba38\uc9c0\ub294 \uc55e \uc870\ubd80\ud130 \ud55c \uba85\uc529 \ub354 \ucc44\uc6c1\ub2c8\ub2e4.",
    },
    {
      id: 30,
      category: "[PART 2] SQL \ud65c\uc6a9 (DAY 8 ~ 11)",
      question:
        "\uacc4\uce35\ud615 \uc9c8\uc758\uc5d0\uc11c \ub3d9\uc77c \ub808\ubca8(\ud615\uc81c \ub178\ub4dc)\ub07c\ub9ac\ub9cc \uc815\ub82c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uad6c\ubb38\uc740?",
      options: [
        { id: 1, text: "ORDER BY", isCorrect: false },
        { id: 2, text: "GROUP BY", isCorrect: false },
        { id: 3, text: "ORDER SIBLINGS BY", isCorrect: true },
        { id: 4, text: "CONNECT BY PRIOR", isCorrect: false },
      ],
      rationale:
        "\uacc4\uce35 \uad6c\uc870\ub97c \uae68\uc9c0 \uc54a\uc73c\uba74\uc11c \ud615\uc81c\ub4e4\ub07c\ub9ac\ub9cc \uc815\ub82c\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
      hint: "SIBLINGS\ub294 \ud615\uc81c\uc790\ub9e4\ub77c\ub294 \ub73b\uc785\ub2c8\ub2e4.",
    },
    {
      id: 31,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "`PIVOT` \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc5f4\uc744 \ud589\uc73c\ub85c \ubcc0\ud658\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\ud589 \ub370\uc774\ud130\ub97c \uc5f4\ub85c \ud68c\uc804\uc2dc\ucf1c \uc694\uc57d \ubcf4\uace0\uc11c\ub97c \ub9cc\ub4e0\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc911\ubcf5\ub41c \ud589\uc744 \uc81c\uac70\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ub370\uc774\ud130\ub97c \uc815\uaddc\ud654\ud560 \ub54c \uc8fc\ub85c \uc0ac\uc6a9\ud55c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "PIVOT\uc740 Long \ub370\uc774\ud130\ub97c Wide\ud558\uac8c \ubcc0\ud658\ud558\ub294 \ud589-\uc5f4 \uc804\ud658 \ud568\uc218\uc785\ub2c8\ub2e4.",
      hint: "12\uc77c\ucc28 \uc5d1\uc140 \ud53c\ubc97 \ub9ac\ud3ec\ud2b8 \ube44\uc720\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 32,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\uc815\uaddc\ud45c\ud604\uc2dd \uba54\ud0c0 \ubb38\uc790 \uc911 '\uc784\uc758\uc758 \ud55c \ubb38\uc790'\ub97c \uc758\ubbf8\ud558\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "*", isCorrect: false },
        { id: 2, text: "+", isCorrect: false },
        { id: 3, text: ".", isCorrect: true },
        { id: 4, text: "?", isCorrect: false },
      ],
      rationale:
        "\ub9c8\uce68\ud45c(.)\ub294 \uc5b4\ub5a4 \ubb38\uc790\ub4e0 \ub531 \ud55c \uae00\uc790\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.",
      hint: "12\uc77c\ucc28 \uba54\ud0c0 \ubb38\uc790 \uc554\uae30 \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 33,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question: "`REGEXP_LIKE(ENAME, '^A')`\uc758 \uc758\ubbf8\ub294?",
      options: [
        {
          id: 1,
          text: "\uc774\ub984\uc5d0 A\uac00 \ud3ec\ud568\ub41c \uc0ac\uc6d0",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc774\ub984\uc774 A\ub85c \ub05d\ub098\ub294 \uc0ac\uc6d0",
          isCorrect: false,
        },
        {
          id: 3,
          text: "\uc774\ub984\uc774 A\ub85c \uc2dc\uc791\ud558\ub294 \uc0ac\uc6d0",
          isCorrect: true,
        },
        {
          id: 4,
          text: "\uc774\ub984\uc758 \ub450 \ubc88\uc9f8 \uae00\uc790\uac00 A\uc778 \uc0ac\uc6d0",
          isCorrect: false,
        },
      ],
      rationale:
        "`^`\ub294 \ubb38\uc790\uc5f4\uc758 \uc2dc\uc791\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",
      hint: "`$`\ub294 \ub05d, `^`\ub294 \uc2dc\uc791\uc785\ub2c8\ub2e4.",
    },
    {
      id: 34,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ub2e4\uc74c \uc911 DML(\ub370\uc774\ud130 \uc870\uc791\uc5b4)\uc5d0 \ud574\ub2f9\ud558\uc9c0 \uc54a\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "INSERT", isCorrect: false },
        { id: 2, text: "UPDATE", isCorrect: false },
        { id: 3, text: "TRUNCATE", isCorrect: true },
        { id: 4, text: "DELETE", isCorrect: false },
      ],
      rationale:
        "TRUNCATE\ub294 DDL(\ub370\uc774\ud130 \uc815\uc758\uc5b4)\ub85c \ubd84\ub958\ub429\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 \uba85\ub839\uc5b4 \ubd84\ub958 \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 35,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "`DELETE`, `TRUNCATE`, `DROP`\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ud2c0\ub9b0 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`DELETE`\ub294 \ub85c\uadf8\ub97c \ub0a8\uae30\ubbc0\ub85c \uc18d\ub3c4\uac00 \uac00\uc7a5 \ub290\ub9ac\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`TRUNCATE`\ub294 \ubcf5\uad6c(ROLLBACK)\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`DROP`\uc740 \ud14c\uc774\ube14\uc758 \uad6c\uc870\uae4c\uc9c0 \uc644\uc804\ud788 \uc0ad\uc81c\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "`TRUNCATE`\ub294 `WHERE` \uc808\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc77c\ubd80 \ub370\uc774\ud130\ub9cc \uc9c0\uc6b8 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "TRUNCATE\ub294 \ud14c\uc774\ube14 \uc804\uccb4\ub97c \ucd08\uae30\ud654\ud558\ub294 \uba85\ub839\uc5b4\ub85c \ubcc4\ub3c4\uc758 \uc870\uac74\uc744 \uac78 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 3\ub300 \uc0ad\uc81c \uba85\ub839\uc5b4 \ube44\uad50 \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 36,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ud2b8\ub79c\uc7ad\uc158\uc758 \ud2b9\uc131 \uc911 'All or Nothing'\uc744 \uc758\ubbf8\ud558\ub294 \uac83\uc740?",
      options: [
        { id: 1, text: "\uc6d0\uc790\uc131(Atomicity)", isCorrect: true },
        { id: 2, text: "\uc77c\uad00\uc131(Consistency)", isCorrect: false },
        { id: 3, text: "\uace0\ub9bd\uc131(Isolation)", isCorrect: false },
        { id: 4, text: "\uc9c0\uc18d\uc131(Durability)", isCorrect: false },
      ],
      rationale:
        "\ud2b8\ub79c\uc7ad\uc158 \ub0b4 \uc5f0\uc0b0\uc740 \ubaa8\ub450 \uc131\uacf5\ud558\uac70\ub098 \uc804\ud600 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4.",
      hint: "\uc6d0\uc790\ub294 \ub354 \uc774\uc0c1 \ucabc\uac24 \uc218 \uc5c6\ub294 \ucd5c\uc18c \ub2e8\uc704\uc785\ub2c8\ub2e4.",
    },
    {
      id: 37,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "Oracle \ud658\uacbd\uc5d0\uc11c DML\uc744 \uc218\ud589\ud55c \uc9c1\ud6c4 `CREATE TABLE`\uc744 \uc2e4\ud589\ud558\uace0 `ROLLBACK`\uc744 \ud558\uba74 \uc5b4\ub5a4 \uacb0\uacfc\uac00 \ubc1c\uc0dd\ud558\ub294\uac00?",
      options: [
        {
          id: 1,
          text: "DML \uacb0\uacfc\uac00 \ucde8\uc18c\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "DDL \uc2e4\ud589 \uc2dc \uc790\ub3d9 \ucee4\ubc0b\uc774 \ubc1c\uc0dd\ud558\uc5ec DML \uacb0\uacfc\uac00 \ucde8\uc18c\ub418\uc9c0 \uc54a\ub294\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "DDL\ub9cc \ucde8\uc18c\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "Oracle\uc5d0\uc11c DDL\uc740 \uc2e4\ud589 \uc804\ud6c4\ub85c \uc790\ub3d9 COMMIT\uc744 \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 \ud83d\udea8 \uc2e4\uc804 \uc624\ub2f5 \ud3ec\uc778\ud2b8 1\ubc88\uc744 \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 38,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ub2e4\uc74c \uc911 \uc81c\uc57d\uc870\uac74(Constraint)\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \ubd80\uc801\uc808\ud55c \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "`PRIMARY KEY`\ub294 NULL\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`UNIQUE KEY`\ub294 NULL \uac12\uc744 \ud5c8\uc6a9\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`FOREIGN KEY`\ub294 \ucc38\uc870 \ubb34\uacb0\uc131\uc744 \uc9c0\ud0a4\uae30 \uc704\ud574 \uc0ac\uc6a9\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ud55c \ud14c\uc774\ube14\uc5d0 `PRIMARY KEY`\ub97c \uc5ec\ub7ec \uac1c \uc124\uc815\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
      ],
      rationale:
        "\uae30\ubcf8\ud0a4(PK)\ub294 \ud14c\uc774\ube14\ub2f9 \uc624\uc9c1 1\uac1c\ub9cc \uc124\uc815 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      hint: "\uc2dd\ubcc4\uc790\ub294 \ub2e8 \ud558\ub098\uc5ec\uc57c \ud569\ub2c8\ub2e4.",
    },
    {
      id: 39,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "`MERGE` \ubb38\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud558\ub294 \uc6a9\ub3c4\ub85c\ub9cc \uc0ac\uc6a9\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc870\uac74\uc5d0 \ub530\ub77c `INSERT`\uc640 `UPDATE`\ub97c \ud55c \ubc88\uc5d0 \uc218\ud589\ud55c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "`ROLLBACK`\uc774 \ubd88\uac00\ub2a5\ud55c DDL \ubb38\uc7a5\uc774\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc624\uc9c1 \ud558\ub098\uc758 \ud14c\uc774\ube14\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub450 \ud14c\uc774\ube14\uc744 \ube44\uad50\ud558\uc5ec \ub370\uc774\ud130\uac00 \uc788\uc73c\uba74 \uc218\uc815, \uc5c6\uc73c\uba74 \uc0bd\uc785\ud569\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 1.2 \uc2ec\ud654 DML \ud30c\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 40,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\ub294 DCL \uba85\ub839\uc5b4\ub294?",
      options: [
        { id: 1, text: "REVOKE", isCorrect: false },
        { id: 2, text: "GRANT", isCorrect: true },
        { id: 3, text: "COMMIT", isCorrect: false },
        { id: 4, text: "ROLLBACK", isCorrect: false },
      ],
      rationale:
        "GRANT\ub294 \uad8c\ud55c \ubd80\uc5ec, REVOKE\ub294 \uad8c\ud55c \ud68c\uc218\uc785\ub2c8\ub2e4.",
      hint: "Grant\ub294 '\uc8fc\ub2e4/\uc2b9\uc778\ud558\ub2e4'\ub294 \ub73b\uc785\ub2c8\ub2e4.",
    },
    {
      id: 41,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "`SAVEPOINT`\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud655\uc815 \uc9d3\ub294 \uc9c0\uc810\uc774\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "`ROLLBACK TO \uc9c0\uc810\uba85`\uc744 \ud1b5\ud574 \ud2b9\uc815 \uc2dc\uc810\uae4c\uc9c0\ub9cc \ubcf5\uad6c\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "`COMMIT` \ud6c4\uc5d0\ub3c4 `SAVEPOINT`\ub85c \ub3cc\uc544\uac08 \uc218 \uc788\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "SQL Server\uc5d0\uc11c\ub9cc \uc9c0\uc6d0\ud558\ub294 \uae30\ub2a5\uc774\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "\ud2b8\ub79c\uc7ad\uc158\uc744 \uc791\uac8c \ucabc\uac1c\uc5b4 \ubd80\ubd84 \ubcf5\uad6c\ub97c \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4. COMMIT \ud6c4\uc5d0\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc885\ub8cc\ub418\uc5b4 \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      hint: "\uac8c\uc784\uc758 '\uc138\uc774\ube0c \ud3ec\uc778\ud2b8'\uc640 \uac19\uc2b5\ub2c8\ub2e4.",
    },
    {
      id: 42,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ub2e4\uc74c \uc911 \uace0\uc720\ud0a4(UNIQUE KEY)\uac00 \uac78\ub9b0 \uceec\ub7fc\uc5d0 `NULL, NULL`\uc744 \uc785\ub825\ud558\ub824\uace0 \ud560 \ub54c\uc758 \uacb0\uacfc\ub294? (Oracle \uae30\uc900)",
      options: [
        {
          id: 1,
          text: "\uc911\ubcf5 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc5d0\ub7ec \uc5c6\uc774 \uc785\ub825\ub41c\ub2e4.",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\ud558\ub098\uc758 NULL\ub9cc \uc785\ub825\ub418\uace0 \ub098\uba38\uc9c0\ub294 \uac70\ubd80\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uc790\ub3d9\uc73c\ub85c 0\uc73c\ub85c \ubcc0\ud658\ub418\uc5b4 \uc785\ub825\ub41c\ub2e4.",
          isCorrect: false,
        },
      ],
      rationale:
        "NULL\uc740 \uac12\uc774 \uc5c6\ub294 \uc0c1\ud0dc\uc774\ubbc0\ub85c \uc911\ubcf5 \uccb4\ud06c \ub300\uc0c1\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\uc758 NULL \uc785\ub825\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 3.2 \uc81c\uc57d\uc870\uac74 \ud30c\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 43,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "`DROP TABLE` \uc2dc \ub2e4\ub978 \ud14c\uc774\ube14\uc5d0\uc11c \ucc38\uc870 \uc911\uc778 \uc678\ub798\ud0a4 \uc81c\uc57d\uc870\uac74\uae4c\uc9c0 \ud568\uaed8 \uc0ad\uc81c\ud558\uba70 \ud14c\uc774\ube14\uc744 \uc9c0\uc6b0\ub294 \uc635\uc158\uc740?",
      options: [
        { id: 1, text: "CASCADE CONSTRAINTS", isCorrect: true },
        { id: 2, text: "DELETE ALL", isCorrect: false },
        { id: 3, text: "TRUNCATE", isCorrect: false },
        { id: 4, text: "FORCE", isCorrect: false },
      ],
      rationale:
        "\ubd80\ubaa8 \ud14c\uc774\ube14 \uc0ad\uc81c \uc2dc \uc790\uc2dd\uc758 \uc678\ub798\ud0a4 \uc81c\uc57d\uc870\uac74\uc744 \ud568\uaed8 \ub0a0\ub824\ubc84\ub9ac\ub294 \uc635\uc158\uc785\ub2c8\ub2e4.",
      hint: "\ud3ed\ud3ec\ucc98\ub7fc \uc5f0\uacb0\ub41c \uac83\uc744 \uc9c0\uc6b0\ub294 CASCADE\uc785\ub2c8\ub2e4.",
    },
    {
      id: 44,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ud6a8\uc728\uc801\uc778 \uad8c\ud55c \uad00\ub9ac\ub97c \uc704\ud574 \uc5ec\ub7ec \uad8c\ud55c\uc744 \ud558\ub098\ub85c \ubb36\uc5b4 \uad00\ub9ac\ud558\ub294 \uac1c\ub150\uc740?",
      options: [
        { id: 1, text: "GROUP", isCorrect: false },
        { id: 2, text: "ROLE", isCorrect: true },
        { id: 3, text: "PACKAGE", isCorrect: false },
        { id: 4, text: "BUNDLE", isCorrect: false },
      ],
      rationale:
        "ROLE(\ub864)\uc744 \uc0dd\uc131\ud558\uc5ec \uad8c\ud55c\uc744 \ub2f4\uace0 \uc774\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubd80\uc5ec\ud569\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 4.2 ROLE \ud30c\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 45,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        '\ub2e4\uc74c \uc815\uaddc\ud45c\ud604\uc2dd\uc758 \uc758\ubbf8\ub85c \uc801\uc808\ud55c \uac83\uc740? "^[0-9]+$"',
      options: [
        {
          id: 1,
          text: "\uc22b\uc790\ub85c \uc2dc\uc791\ud558\uac70\ub098 \ub05d\ub098\ub294 \ubb38\uc790\uc5f4",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc624\uc9c1 \uc22b\uc790\ub85c\ub9cc \uad6c\uc131\ub41c \ubb38\uc790\uc5f4",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc22b\uc790\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740 \ubb38\uc790\uc5f4",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\uccab \uae00\uc790\ub9cc \uc22b\uc790\uc778 \ubb38\uc790\uc5f4",
          isCorrect: false,
        },
      ],
      rationale:
        "`^`(\uc2dc\uc791)\ubd80\ud130 `$`(\ub05d)\uae4c\uc9c0 `[0-9]`(\uc22b\uc790)\uac00 `+`(1\uac1c \uc774\uc0c1) \uc788\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4.",
      hint: "\uc804\uccb4\uac00 \uc22b\uc790\uc778\uc9c0 \uac80\uc0ac\ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4.",
    },
    {
      id: 46,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question: "`UNPIVOT`\uc758 \uc8fc\ub41c \uc0ac\uc6a9 \ubaa9\uc801\uc740?",
      options: [
        {
          id: 1,
          text: "\uc694\uc57d \ubcf4\uace0\uc11c \uc791\uc131",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Wide \ub370\uc774\ud130\ub97c Long \ub370\uc774\ud130\ub85c \uc815\uaddc\ud654",
          isCorrect: true,
        },
        {
          id: 3,
          text: "\uc911\ubcf5 \ub370\uc774\ud130 \uc81c\uac70",
          isCorrect: false,
        },
        {
          id: 4,
          text: "\ud14c\uc774\ube14 \uad6c\uc870 \ubcc0\uacbd(DDL)",
          isCorrect: false,
        },
      ],
      rationale:
        "\uc5ec\ub7ec \uc5f4\ub85c \ub098\uc5f4\ub41c \ub370\uc774\ud130\ub97c \ud589\uc73c\ub85c \ub0b4\ub824\uc11c \uc815\uaddc\ud654\ub41c \ud615\ud0dc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",
      hint: "PIVOT\uc758 \ubc18\ub300\uc785\ub2c8\ub2e4.",
    },
    {
      id: 47,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ub2e4\uc74c \uc911 `NULLIF(A, B)`\uc758 \uacb0\uacfc\uac00 NULL\uc778 \uacbd\uc6b0\ub294?",
      options: [
        { id: 1, text: "A\uac00 NULL\uc77c \ub54c", isCorrect: false },
        { id: 2, text: "B\uac00 NULL\uc77c \ub54c", isCorrect: false },
        { id: 3, text: "A\uc640 B\uac00 \uac19\uc744 \ub54c", isCorrect: true },
        {
          id: 4,
          text: "A\uc640 B\uac00 \ub2e4\ub97c \ub54c",
          isCorrect: false,
        },
      ],
      rationale:
        "\ub450 \uac12\uc774 \uac19\uc73c\uba74 NULL\uc744, \ub2e4\ub974\uba74 \uccab \ubc88\uc9f8 \uac12(A)\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.",
      hint: "3\uc77c\ucc28 NULL \ucc98\ub9ac \ud568\uc218 \ud45c\ub97c \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 48,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "SQL Server\uc5d0\uc11c \uc790\ub3d9 \ucee4\ubc0b(Auto-Commit)\uc744 \ubc29\uc9c0\ud558\uace0 \uba85\uc2dc\uc801 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2dc\uc791\ud558\ub294 \uba85\ub839\uc5b4\ub294?",
      options: [
        { id: 1, text: "START TRANSACTION", isCorrect: false },
        { id: 2, text: "BEGIN TRAN", isCorrect: true },
        { id: 3, text: "SET COMMIT OFF", isCorrect: false },
        { id: 4, text: "COMMIT", isCorrect: false },
      ],
      rationale:
        "SQL Server\ub294 \uae30\ubcf8\uc774 \uc790\ub3d9 \ucee4\ubc0b\uc774\ubbc0\ub85c BEGIN TRAN\uc73c\ub85c \uba85\uc2dc\uc801 \uc2dc\uc791\uc744 \uc54c\ub9bd\ub2c8\ub2e4.",
      hint: "13\uc77c\ucc28 DBMS\ubcc4 \ucc28\uc774\uc810\uc744 \ud655\uc778\ud558\uc138\uc694.",
    },
    {
      id: 49,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ub2e4\uc74c \uc911 `DELETE FROM EMP;` \uc2e4\ud589 \ud6c4\uc758 \uc0c1\ud0dc\ub85c \uc633\uc740 \uac83\uc740?",
      options: [
        {
          id: 1,
          text: "\ud14c\uc774\ube14 \uad6c\uc870\uac00 \uc0ac\ub77c\uc9c4\ub2e4.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "\uc800\uc7a5 \uacf5\uac04\uc774 \uc989\uc2dc \ubc18\ud658\ub41c\ub2e4.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "`ROLLBACK`\uc744 \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ubcf5\uad6c\ud560 \uc218 \uc788\ub2e4.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "`COMMIT`\uc744 \ud558\uc9c0 \uc54a\uc544\ub3c4 \uc989\uc2dc \uc601\uad6c \ubc18\uc601\ub41c\ub2e4(Oracle \uae30\uc900).",
          isCorrect: false,
        },
      ],
      rationale:
        "DELETE\ub294 DML\uc774\ubbc0\ub85c \uc0ac\uc6a9\uc790\uac00 \ud655\uc815 \uc9d3\uae30 \uc804\uae4c\uc9c0\ub294 \ub864\ubc31\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      hint: "DML\uc740 \uc2e0\uc911\ud558\uac8c, \ud558\uc9c0\ub9cc \ucde8\uc18c\ub294 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
    },
    {
      id: 50,
      category:
        "[PART 3] \uace0\uae09 SQL & \uad00\ub9ac \uad6c\ubb38 (DAY 12 ~ 13)",
      question:
        "\ub2e4\uc74c \uc911 SQL \uc2e4\ud589 \uc21c\uc11c\uac00 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc778 \uac83\uc740?",
      options: [
        { id: 1, text: "WHERE", isCorrect: false },
        { id: 2, text: "SELECT", isCorrect: false },
        { id: 3, text: "ORDER BY", isCorrect: true },
        { id: 4, text: "HAVING", isCorrect: false },
      ],
      rationale:
        "\uc815\ub82c(ORDER BY)\uc740 \ubaa8\ub4e0 \uacb0\uacfc\ub97c \ubf51\uc544\ub0b8 \ud6c4 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \uc218\ud589\ub429\ub2c8\ub2e4.",
      hint: "\ud504-\uc6e8-\uadf8-\ud558-\uc140-\uc624!",
    },
  ],
};
