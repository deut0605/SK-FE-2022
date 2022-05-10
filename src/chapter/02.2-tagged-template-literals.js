/* eslint-disable no-unused-vars */
/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// DOM Node
const node = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styles, target) => {
  target.style.cssText += styles.reduce(
    (combined, style) => combined + style,
    ''
  );
};

const nestedStyled = (node) => (styles) =>
  (node.style.cssText += styles.reduce(
    (combined, style) => combined + style,
    ''
  ));

nestedStyled(document.body)`
  margin: 4rem;
  box-sizing: border-box;
`;
