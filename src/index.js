import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalCSS from './style/global.css'
import FontStyles from './style/FontStyles'


const root = document.getElementById('root');
ReactDOM.render(
  (
    <>
      <FontStyles />
      <GlobalCSS />
      <App />
    </>
  ), root);

