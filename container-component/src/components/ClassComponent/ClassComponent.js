import { parent, child } from './ClassComponent.module.css';
import React, { Component } from 'react';

export class ClassComponent extends Component {
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

function ChildComponent({ brand, onChangeBrand }) {
  return (
    <button type="button" className={child} onClick={onChangeBrand}>
      {brand}
    </button>
  );
}
