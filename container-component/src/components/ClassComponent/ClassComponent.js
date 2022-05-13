import { parent, child } from './ClassComponent.module.css';
import React, { Component } from 'react';
import { PropTypes } from 'utils';

export class ClassComponent extends Component {
  static defaultProps = {
    as: 'div', // string (html standard element name) | React ComponentType | React Fragment
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

const NestedComponent = ({ brand, onChangeBrand }) => (
  <>
    <h2
      style={{
        color: '#fff',
      }}
    >
      Nested Component
    </h2>
    <ChildComponent brand={brand} onChangeBrand={onChangeBrand} />
  </>
);

NestedComponent.propTypes = {
  // 매뉴얼 방식의 prop validation
  brand: PropTypes.string,
};

function ChildComponent({ brand, onChangeBrand }) {
  return (
    <button type="button" className={child} onClick={onChangeBrand}>
      {brand}
    </button>
  );
}

ChildComponent.propTypes = {
  // 매뉴얼 방식의 prop validation
  brand(props, propName, ComponentName) {
    let value = props[propName];
    let valueType = typeof value;
    if (valueType !== 'string') {
      throw new Error(
        `${ComponentName} 컴포넌트에 전달된 ${propName} prop의 기대 타입은 string이지만, 전달된 값의 타입은 ${valueType}입니다.`
      );
    }
  },
};

ChildComponent.propTypes = {
  // 매뉴얼 방식의 prop validation
  brand: PropTypes.string,
};
