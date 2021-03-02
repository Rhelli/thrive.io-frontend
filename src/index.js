import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import setupStore from './state/store';
import NavbarComponent from './common/NavbarComponent';
import './index.css';

require('dotenv').config();

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavbarComponent />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
