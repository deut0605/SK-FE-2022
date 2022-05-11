import './App.css';
import React from 'react';
import { RandomCountUp } from '../components';

export default function App() {
  const [reload, setReload] = React.useState(0);

  return (
    <div className="app">
      <RandomCountUp key={reload} min={45} max={92} step={3} />
      <button
        type="button"
        className="reloadButton"
        onClick={() => setReload(reload + 1)}
        aria-label="다시 실행"
        title="다시 실행"
      >
        RELOAD
      </button>
    </div>
  );
}
