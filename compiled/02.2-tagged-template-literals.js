"use strict";

var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var node = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: {
    cssText: ''
  }
};

var styled = function styled(styles, target) {
  target.style.cssText += styles.reduce(function (combined, style) {
    return combined + style;
  }, '');
};

var nestedStyled = function nestedStyled(node) {
  return function (styles) {
    return node.style.cssText += styles.reduce(function (combined, style) {
      return combined + style;
    }, '');
  };
};

nestedStyled(document.body)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  margin: 4rem;\n  box-sizing: border-box;\n"])));