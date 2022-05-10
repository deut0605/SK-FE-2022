"use strict";

var _class;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ButtonClass = (_class = function () {
  function ButtonClass(type, label) {
    if (type === void 0) {
      type = 'submit';
    }

    this.type = type;
    this._label = label;
  }

  var _proto = ButtonClass.prototype;

  _proto.getType = function getType() {
    return this.type;
  };

  _createClass(ButtonClass, [{
    key: "label",
    get: function get() {
      return this._label;
    },
    set: function set(newLabel) {
      this._label = newLabel;
    }
  }]);

  return ButtonClass;
}(), _class.version = '1.0.0', _class);

var AriaButtonClass = function (_ButtonClass) {
  _inheritsLoose(AriaButtonClass, _ButtonClass);

  function AriaButtonClass(_ref) {
    var _this;

    var type = _ref.type,
        label = _ref.label,
        _ref$usingAria = _ref.usingAria,
        usingAria = _ref$usingAria === void 0 ? true : _ref$usingAria;
    _this = _ButtonClass.call(this, type, label) || this;
    _this.usingAria = usingAria;
    return _this;
  }

  var _proto2 = AriaButtonClass.prototype;

  _proto2.getVersion = function getVersion() {
    return AriaButtonClass.displayName;
  };

  return AriaButtonClass;
}(ButtonClass);

AriaButtonClass.displayName = 'AriaButton';