import App from './js/app.js';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss'; 


ReactDOM.render(
  <App className={style.app}/>,
  document.getElementById('root')
);
