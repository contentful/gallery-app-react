import { deliveryAccessToken, galleryTypeId, spaceId } from '../../config'

export function app (state = { authState: 'loading', deliveryAccessToken, galleryTypeId, spaceId }, action) {
  switch (action.type) {
    case 'LOADED_CLIENT':
      return Object.assign({}, state, {authState: action.authState})
  }
  return state
}
