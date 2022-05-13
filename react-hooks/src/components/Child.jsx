import React, { useEffect, useRef, useContext } from 'react';
import { AppStateContext, useAuth } from '../contexts';

function Child({ onUpdateCount }) {
  const propCallbackRef = useRef(null);
  const { appState } = useContext(AppStateContext);

  useEffect(() => {
    if (!propCallbackRef.current) {
      propCallbackRef.current = onUpdateCount; // onUpdateCount: f(){}
    } else {
      // console.log(Object.is(propCallbackRef.current, onUpdateCount));
    }
  });

  return (
    <span>
      <button type="button" onClick={onUpdateCount}>
        Child
      </button>
    </span>
  );
}

export default React.memo(Child);
