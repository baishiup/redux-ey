"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function disAction(model) {
  var actions = _defineProperty({}, model.name, function (state, _ref) {
    var payload = _ref.payload;
    return _extends({}, state, payload);
  });
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : model.state;
    var action = arguments[1];

    return Object.keys(actions).indexOf(action.type) !== -1 ? actions[action.type](state, action) : state;
  };
}

exports.default = disAction;