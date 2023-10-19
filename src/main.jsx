import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/globals.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
