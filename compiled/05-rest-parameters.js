'use strict';

var multiplyCount = function multiplyCount() {
  var first = arguments[0];
  // 유사 배열이 배열인 것처럼, 배열의 메서드를 빌려쓰기
  var rest = [].slice.call(arguments, 1);

  for (var i = 0, l = rest.length; i < l; ++i) {
    if (i === 0) first += rest[i];
    else first *= rest[i];
  }

  return first;
};
