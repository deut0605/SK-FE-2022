import './A11yHidden.css';
import React from 'react';
import classNames from 'classnames';

export const A11yHidden = ({ as, focusable, className, ...restProps }) => {
  const Comp = as;

  return (
    <Comp
      className={classNames('a11yHidden', { focusable }, className)}
      {...restProps}
    />
  );
};

// export const A11yHidden = ({ as, focusable, className, ...restProps }) => {
//   return React.createElement(as, {
//     className: classNames('a11yHidden', { focusable }, className),
//     ...restProps,
//   });
// };
