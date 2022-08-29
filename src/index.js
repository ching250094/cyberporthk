import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalCSS from './style/global.css'


const root = document.getElementById('root');
ReactDOM.render(
  (
    <>
      <GlobalCSS />
      <App />
    </>
  ), root);

