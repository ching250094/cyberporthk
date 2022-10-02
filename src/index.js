import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import GlobalCSS from './style/global.css'
import FontStyles from './style/FontStyles'
import Spinner from './Spinner'

const App = lazy(() => import('./app'));

const root = document.getElementById('root');
ReactDOM.render(
  (
    <Suspense fallback={<Spinner />}>
      <FontStyles />
      <GlobalCSS />
      <App />
    </Suspense>
  ), root);

