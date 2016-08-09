export function api (state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_API_PREVIEW':
      return Object.assign({}, state, {selectedApi: 'delivery'})
  }
  return state
}
