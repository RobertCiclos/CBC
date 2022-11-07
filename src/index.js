import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './app/store';

const rootNode = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
  </Provider>
, rootNode);


