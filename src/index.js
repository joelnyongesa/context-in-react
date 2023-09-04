import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import PauseProvider from './context/paused';
import { CountProvider } from './context/count';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PauseProvider>
      <CountProvider>
        <App />
      </CountProvider>
    </PauseProvider>
  </React.StrictMode>
);

