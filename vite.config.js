import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// GitHub Pages 프로젝트 사이트: https://<user>.github.io/<repo>/
// 배포 시 base를 저장소 이름으로 맞추면 됩니다 (Actions에서 BASE_PATH 설정).
const base = process.env.BASE_PATH || '/';

// GitHub Pages에서 /day2, /day3 등 직접 접근 시 404.html → index.html 로딩
function copy404() {
  return {
    name: 'copy-404',
    closeBundle() {
      const out = join(process.cwd(), 'dist');
      const index = join(out, 'index.html');
      const dest = join(out, '404.html');
      if (existsSync(index)) {
        copyFileSync(index, dest);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copy404()],
  base,
  root: '.',
});
