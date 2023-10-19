// 패키지 모듈 불러오기
import { defineConfig } from 'vite';
// 플러그인 모듈 불러오기
import reactPlugin from '@vitejs/plugin-react';

// Vite 개발 도구 구성
const viteConfig = defineConfig({
  // 플러그인 구성
  plugins: [reactPlugin()],
  // 서버 구성
  server: {
    host: true,
    port: 3000,
  },
});

// 모듈 기본 내보내기
export default viteConfig;
