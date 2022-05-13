import React, { useState, useCallback } from 'react';
import Display from './Display';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(100);
  const [anotherState, setAnotherState] = useState(null);
  const handleUpdateCount = useCallback(() => setCount((c) => c + 10), []);

  return (
    <div
      className="parent"
      style={{ display: 'flex', flexFlow: 'column', gap: 8 }}
    >
      <Child onUpdateCount={handleUpdateCount} />
      <Child onUpdateCount={handleUpdateCount} />
      <Display value={count} />
      <Child onUpdateCount={handleUpdateCount} />
      <Child onUpdateCount={handleUpdateCount} />
    </div>
  );
}

export default React.memo(Parent);
