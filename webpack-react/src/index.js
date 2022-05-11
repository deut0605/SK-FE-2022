import './styles/main.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { Greeting, IconButton } from './components';

const containerNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  containerNode
)