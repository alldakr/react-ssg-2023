import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from '@/app/App';

const rootElement = document.getElementById('root');

// StrictMode는 컴포넌트의 순수성 체크
// - 체크 방법 (2회 렌더링)
// - 동일 입력(props) → 동일 출력(JSX 마크업)
// - 배포(production) 시에는 사용되지 않음 (번들에 미포함)

rootElement &&
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
