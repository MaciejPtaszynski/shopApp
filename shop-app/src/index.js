import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <StrictMode>
  <App />
  </StrictMode>,
  document.getElementById('root')
);
