// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'; // Ensure this is the correct path to your store

ReactDOM.render(
  <Provider store={store}>
    <center>
    <App />
    </center>
  </Provider>,
  document.getElementById('root')
);
