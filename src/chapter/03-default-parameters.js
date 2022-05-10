/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// const defaultArg = (value, initialValue) => {
//   if (value === null || value === undefined) {
//     value = initialValue;
//   }
//   return value;
// };

const truncateText = (text, limit = 100) => {
  return `${text.slice(0, limit).trim()}...`;
};

let testStr = 'ECMAScript NEXT를 사용해 함수를 작성합니다.';

test(`truncateText('${testStr}', 10)의 글자 길이는 13이다.`, () => {
  // 기대값(expect), 전달값(received)
  expect(truncateText(testStr, 10)).toHaveLength(13);
});
