import React from 'react';
import ReactDOM from 'react-dom';
import { BrowswerRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

