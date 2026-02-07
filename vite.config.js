import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 프로젝트 사이트: https://<user>.github.io/<repo>/
// 배포 시 base를 저장소 이름으로 맞추면 됩니다 (Actions에서 BASE_PATH 설정).
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
  root: '.',
});
