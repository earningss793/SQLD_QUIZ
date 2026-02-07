# SQLD Day 01 퀴즈 (React)

SQL 데이터 조회(SELECT) 마스터 퀴즈 20문항 – 로컬 실행 및 GitHub Pages 배포용 프로젝트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속

## GitHub 연결 및 배포

### 1. GitHub 저장소 만들기

1. [GitHub](https://github.com/new)에서 **New repository** 생성
2. 저장소 이름 입력 (예: `sqld-day1-quiz`)
3. **Create repository** 클릭 (README 추가 안 해도 됨)

### 2. 프로젝트를 Git으로 올리기

터미널에서 **dat1-app 폴더**로 이동한 뒤:

```bash
cd dat1-app

# Git 초기화 (이미 되어 있으면 생략)
git init

# 모든 파일 스테이징
git add .

# 첫 커밋
git commit -m "SQLD Day1 퀴즈 20문항 앱"

# 기본 브랜치를 main으로 (필요 시)
git branch -M main

# GitHub 저장소 연결 (본인 저장소 URL로 변경)
# 예: earningss793 계정 → https://github.com/earningss793/SQLD_QUIZ.git
git remote add origin https://github.com/<사용자명>/<저장소명>.git

# 푸시
git push -u origin main
```

### 3. GitHub Pages 설정

1. GitHub 저장소 페이지에서 **Settings** → **Pages**
2. **Build and deployment**에서:
   - **Source**: **GitHub Actions** 선택
3. 저장 후, **main** 브랜치에 push가 있으면 자동으로 워크플로가 돌면서 배포됩니다.

### 4. 배포 주소

배포가 끝나면 다음 주소로 접속할 수 있습니다.

- **https://\<사용자명>.github.io/\<저장소명>/**

예: 저장소가 `nawonoh/sqld-day1-quiz`면  
**https://nawonoh.github.io/sqld-day1-quiz/**

---

이후에는 코드 수정 후 `git add .` → `git commit -m "메시지"` → `git push`만 하면 자동으로 다시 배포됩니다.
