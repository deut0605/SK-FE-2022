"use strict";

var truncateText = function truncateText(text, limit) {
  if (limit === void 0) {
    limit = 100;
  }

  return text.slice(0, limit).trim() + "...";
};

var testStr = 'ECMAScript NEXT를 사용해 함수를 작성합니다.';
test("truncateText('" + testStr + "', 10)\uC758 \uAE00\uC790 \uAE38\uC774\uB294 13\uC774\uB2E4.", function () {
  expect(truncateText(testStr, 10)).toHaveLength(13);
});