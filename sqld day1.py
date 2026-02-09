import sys

def run_quiz():
    # Data
    table_name = "SALES"
    headers = ["DEPT", "JOB", "SALARY"]
    rows = [
        ["IT", "DEV", 1000],
        ["IT", "OPS", 2000],
        ["HR", "ADM", 3000],
    ]
    question = "다음 [SALES] 테이블을 대상으로 아래 SQL을 실행했을 때, 조회되는 결과 행(Row)의 개수는 몇 개인가?"
    sql = """SELECT DEPT, JOB, SUM(SALARY)
FROM SALES
GROUP BY ROLLUP(DEPT, JOB);"""
    options = [
        {"id": 1, "text": "3개", "isCorrect": False},
        {"id": 2, "text": "4개", "isCorrect": False},
        {"id": 3, "text": "6개", "isCorrect": True},
        {"id": 4, "text": "7개", "isCorrect": False},
    ]
    rationale = """ROLLUP(A, B)는 (A, B), (A), () 총 3가지 그룹핑 세트를 생성합니다. 
1. (DEPT, JOB): IT-DEV, IT-OPS, HR-ADM (3건)
2. (DEPT): IT 소계, HR 소계 (2건)
3. (): 전체 총계 (1건)
따라서 3 + 2 + 1 = 총 6개의 행이 조회됩니다."""

    # UI
    print("="*60)
    print(f"SQLD Day 10 실전 미션 - {table_name}")
    print("="*60)
    
    print(f"\n[원본 데이터: {table_name}]")
    print("-" * 40)
    print(f"{headers[0]:<10} {headers[1]:<10} {headers[2]:<10}")
    print("-" * 40)
    for row in rows:
        print(f"{row[0]:<10} {row[1]:<10} {row[2]:<10}")
    print("-" * 40)
    
    print("\n[문제]")
    print(question)
    
    print("\n[SQL]")
    print("-" * 40)
    print(sql)
    print("-" * 40)
    
    print("\n[보기]")
    for opt in options:
        print(f"{opt['id']}. {opt['text']}")
        
    while True:
        try:
            choice = input("\n정답을 선택하세요 (번호 입력): ")
            choice_id = int(choice)
            if 1 <= choice_id <= 4:
                break
            print("1에서 4 사이의 숫자를 입력해주세요.")
        except ValueError:
            print("숫자를 입력해주세요.")

    selected = next(o for o in options if o['id'] == choice_id)
    
    print("\n" + "="*60)
    if selected['isCorrect']:
        print("✅ 훌륭합니다! 정답이에요.")
    else:
        print("❌ 아쉽네요, 틀렸습니다.")
    
    print("\n[해설]")
    print(rationale)
    print("="*60)

if __name__ == "__main__":
    run_quiz()