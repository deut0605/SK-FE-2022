import React from 'react';

function Display({ value }) {
  return <output>{value}</output>;
}

export default React.memo(Display);
