import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment) {
  reportWebVitals(console.log);
}
