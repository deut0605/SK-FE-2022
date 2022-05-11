import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Greeting, IconButton } from './components';

const containerNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Greeting message="안녕하세요!" />
  </React.StrictMode>,
  containerNode
)