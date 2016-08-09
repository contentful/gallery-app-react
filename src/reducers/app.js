export function app (state = {}, action) {
  switch (action.type) {
    case 'LOADED_CLIENT':
      return Object.assign({}, state, {authState: action.authState})
  }
  return state
}
