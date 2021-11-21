import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 只有.js可以省略 .css不行

ReactDOM.render(
  <React.StrictMode>  
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);