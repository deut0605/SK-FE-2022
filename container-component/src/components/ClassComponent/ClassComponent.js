/* eslint-disable no-unused-vars */

import { parent } from './ClassComponent.module.css';
import React, { Component } from 'react';
import { NestedComponent } from './NestedComponent';
import {
  string,
  number,
  oneOfType,
  oneOf,
  node,
  elementType,
  shape,
  arrayOf,
} from 'prop-types';

export class ClassComponent extends Component {
  static defaultProps = {
    as: 'div',
  };

  static propTypes = {
    /** 렌더링 될 요소 또는 컴포넌트 타입을 설정합니다. */
    as: oneOfType([string, node, elementType]),
    // type: oneOf(['hamberger', 'cart', 'flag']),
    // numbers: arrayOf(oneOfType([number, string])),
    // accordionList: arrayOf(shape({
    //   id: string.isRequired,
    //   title: string.isRequired,
    //   description: string.isRequired,
    // }),
  };

  state = {
    brand: 'euid',
  };

  changeBrand = (e) => {
    this.setState(({ brand }) => ({
      brand: brand.includes('euid') ? 'google' : 'euid',
    }));
  };

  render() {
    return (
      <div className={parent}>
        <span>{this.state.brand}</span>
        <NestedComponent
          brand={this.state.brand}
          onChangeBrand={this.changeBrand}
        />
      </div>
    );
  }
}
