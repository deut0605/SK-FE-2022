import './styles/main.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';

const containerNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  containerNode
);
