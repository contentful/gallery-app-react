import { deliveryAccessToken, galleryTypeId, spaceId } from '../../config'
import { makeReducer } from './util'

export const app = makeReducer(function (action) {
  switch (action.type) {
    case 'LOADED_CLIENT':
      return {authState: action.authState}
  }
}, { authState: 'loading', deliveryAccessToken, galleryTypeId, spaceId })
