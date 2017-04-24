"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (_ref) {
  var baseClass = _ref.baseClass;

  // return execute class
  return function (_baseClass) {
    _inherits(videPluginModeVue, _baseClass);

    function videPluginModeVue() {
      _classCallCheck(this, videPluginModeVue);

      return _possibleConstructorReturn(this, (videPluginModeVue.__proto__ || Object.getPrototypeOf(videPluginModeVue)).apply(this, arguments));
    }

    return videPluginModeVue;
  }(baseClass);
};