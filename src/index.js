import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const rootNode = document.getElementById('root');
ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>
, rootNode);


