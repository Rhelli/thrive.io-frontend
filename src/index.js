import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import setupStore from './state/store';
import App from './app';
import './index.scss';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
