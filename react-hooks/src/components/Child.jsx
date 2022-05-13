import React, { useEffect, useRef } from 'react';

function Child({ appState, onUpdateCount }) {
  const propCallbackRef = useRef(null);

  console.log(appState);

  useEffect(() => {
    if (!propCallbackRef.current) {
      propCallbackRef.current = onUpdateCount; // onUpdateCount: f(){}
    } else {
      console.log(Object.is(propCallbackRef.current, onUpdateCount));
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
