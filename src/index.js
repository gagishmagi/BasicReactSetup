import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloEl from './HelloEl'

ReactDOM.render(
  <React.StrictMode>
    <h1>React Intro</h1>
    <HelloEl/>
  </React.StrictMode>,
  document.getElementById('root')
);

