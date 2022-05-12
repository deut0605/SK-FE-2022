import styles from './A11yHidden.module.css';
import React from 'react';
import classNames from 'classnames';

export const A11yHidden = ({
  as: Comp = 'span',
  focusable,
  className,
  external,
  ...restProps
}) => (
  <Comp
    className={classNames(
      styles.container,
      focusable ? styles.focusable : '',
      className
    )}
    target={external && '_blank'}
    rel={external && 'noopener noreferrer'}
    {...restProps}
  />
);
