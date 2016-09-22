import { Map, fromJS } from 'immutable';

export const _stateInit = new Map();

export function _stateIterator(state, callback) {
  const listState = Object.keys(state).map(key => state[key]);
  return listState.forEach(callback);
}

export function _stateGetter(state, key) {
 return fromJS(state).get(key);	
};

export function _stateSetter(state, key, value) {
 return state.set(key, value);
};
