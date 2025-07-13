import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './components/error-boundary.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('#root element not found DOM');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ErrorBoundary fallback={<h1>ErrorBoundary test works</h1>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
