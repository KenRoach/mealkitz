import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// 1. Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. Import custom SCSS overrides
import './styles/custom.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 