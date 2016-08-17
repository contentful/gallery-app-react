import deepExtend from 'deep-extend'

export function makeReducer (createUpdate, defaults = {}) {
  return function reduce (state, action) {
    const update = createUpdate(action)
    return deepExtend({}, state || defaults, update || {})
  }
}
