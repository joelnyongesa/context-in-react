import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import PauseProvider from './context/paused';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PauseProvider>
      <App />
    </PauseProvider>
  </React.StrictMode>
);

