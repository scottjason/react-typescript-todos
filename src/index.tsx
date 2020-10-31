import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment) {
  reportWebVitals(console.log);
}
