'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._stateInit = undefined;
exports._stateIterator = _stateIterator;
exports._stateGetter = _stateGetter;
exports._stateSetter = _stateSetter;

var _immutable = require('immutable');

var _stateInit = exports._stateInit = new _immutable.Map();

function _stateIterator(state, callback) {
  var listState = Object.keys(state).map(function (key) {
    return state[key];
  });
  return listState.forEach(callback);
}

function _stateGetter(state, key) {
  return (0, _immutable.fromJS)(state).get(key);
};

function _stateSetter(state, key, value) {
  return state.set(key, value);
};