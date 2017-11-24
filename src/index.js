import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <ChatApp />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
