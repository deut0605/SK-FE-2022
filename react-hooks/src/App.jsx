import Child from './components/Child';
import Display from './components/Display';

import React, {
  useState,
  useEffect,
  createRef, // only class component
  useRef, // only functional component
  createContext,
  useContext,
  useCallback,
  useMemo,
  memo,
} from 'react';

// 성능 관리를 위해 알아야 할 React Hooks
// - useCallback
// - useMemo
// - React.memo

function Parent({ appState }) {
  const [count, setCount] = useState(100);
  const [anotherState, setAnotherState] = useState(null);

  // 참조 동일성
  // const handleUpdateCount = () => setCount((c) => c + 10);
  const handleUpdateCount = useCallback(() => setCount((c) => c + 10), []);
  // const handleUpdateCount = useMemo(() => () => setCount((c) => c + 10), []);

  // const renderElements = useMemo(
  //   () => (
  //     <div
  //       className="parent"
  //       style={{ display: 'flex', flexFlow: 'column', gap: 8 }}
  //     >
  //       <Child onUpdateCount={handleUpdateCount} />
  //       <Child onUpdateCount={handleUpdateCount} />
  //       <Display value={count} />
  //       <Child onUpdateCount={handleUpdateCount} />
  //       <Child onUpdateCount={handleUpdateCount} />
  //     </div>
  //   ),
  //   [count]
  // );

  return (
    <div
      className="parent"
      style={{ display: 'flex', flexFlow: 'column', gap: 8 }}
    >
      <Child appState={appState} onUpdateCount={handleUpdateCount} />
      <Child appState={appState} onUpdateCount={handleUpdateCount} />
      <Display value={count} />
      <Child appState={appState} onUpdateCount={handleUpdateCount} />
      <Child appState={appState} onUpdateCount={handleUpdateCount} />
    </div>
  );
}

export default function App() {
  const [appState] = useState('app state');

  return (
    <div className="app" style={{ padding: 30 }}>
      <Parent appState={appState} />
    </div>
  );
}
