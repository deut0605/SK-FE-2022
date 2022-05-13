import React, { useState } from 'react';
import Parent from './components/Parent';
import SignIn from './components/SignIn';
import { AuthProvider, AppStateContext } from './contexts';

// 1. Context를 생성한다.
// 2. Context.Provider 컴포넌트를 사용해 value prop을 통해 `context` value를 공급한다.
// 3-1. Conotext.Consumer 컴포넌트를 사용(render props 패턴)해 `context` value를 수급한다. (class)
// 3-2. useContext 훅을 사용해 `context` value를 수급한다. (function)

export default function App() {
  const [appState, setAppState] = useState('app state');

  const contextValue = React.useMemo(
    () => ({
      appState,
      setAppState,
    }),
    [appState]
  );

  return (
    <AuthProvider>
      <div className="app" style={{ padding: 30 }}>
        <AppStateContext.Provider value={contextValue}>
          <Parent />
        </AppStateContext.Provider>
        <SignIn />
      </div>
    </AuthProvider>
  );
}
