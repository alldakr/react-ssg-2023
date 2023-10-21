import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/globals.css';
import App from './App';

const rootElement = document.getElementById('root');

rootElement &&
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
