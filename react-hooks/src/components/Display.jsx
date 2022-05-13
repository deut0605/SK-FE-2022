import React, { useContext } from 'react';
import { AppStateContext, useTheme } from '../contexts';

function Display({ value }) {
  const { setAppState } = useContext(AppStateContext);
  const { dark } = useTheme();

  console.log(dark);

  return (
    <>
      <output>{value}</output>
      <button type="button" onClick={() => setAppState('updated')}>
        update app state
      </button>
    </>
  );
}

export default React.memo(Display);
