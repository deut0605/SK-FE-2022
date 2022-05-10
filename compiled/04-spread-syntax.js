'use strict';

const integers = [-1, 0, 32, -101, 24];
// 메서드 빌려쓰기 패턴:  Function.prototype.call|apply|bind
// ES5
// let maxInt = Math.max.apply(Math, [302, 1, 2, 30, -101].concat(integers));

// ES6
let maxInt = Matn.max(...[302, 1, 2, 30, -101, ...integers]);

// 믹스인 디자인 패턴
// 객체 합성 > 객체 상속
var extend = function extend() {
  var _mixinObject = arguments[0];

  var _restObjects = [].slice.call(arguments, 1);

  var _mixin = function _mixin(o1, o2) {
    for (var key in o2) {
      if ({}.hasOwnProperty.call(o2, key)) {
        var value = o2[key];

        if (value && typeof value === 'object' && value.length) {
          o1[key] = (o1[key] || []).concat(value);
        } else if (value && typeof value === 'object' && !value.length) {
          o1[key] = _mixin(o1[key] || {}, value);
        } else {
          o1[key] = value;
        }
      }
    }

    return o1;
  };

  for (var i = 0, l = _restObjects.length; i < l; ++i) {
    _mixin(_mixinObject, _restObjects[i]);
  }

  return _mixinObject;
};

// 상태 업데이트 함수
// const setState = (newState) => extend({}, state, newState);
const setState = (newState) => ({
  ...state,
  ...newState,
  data: [...state.data, ...newState.data],
});

// 불변(immutable) 상태
const state = Object.freeze({
  loading: false,
  error: null,
  data: [
    {
      id: 101,
      title: '초기 데이터',
    },
  ],
});

// React의 업데이트
// 업데이트 된 상태 (이전 상태와 합성된 새로운 상태)
console.log(
  setState({
    loading: true,
    data: [
      {
        id: 201,
        title: '데이터 업데이트',
      },
    ],
  })
);
