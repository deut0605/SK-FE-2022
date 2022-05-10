"use strict";

var multiplyCount = function multiplyCount() {
  var first = arguments[0];
  var rest = [].slice.call(arguments, 1);

  for (var i = 0, l = rest.length; i < l; ++i) {
    if (i === 0) first += rest[i];else first *= rest[i];
  }

  return first;
};