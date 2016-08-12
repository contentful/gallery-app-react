import * as galleryService from '../services/galleryStore'

export function setAppClientState (authState) {
  return {
    type: 'LOADED_CLIENT',
    authState
  }
}

export function loadGalleries ({contentTypeId}) {
  return {
    type: 'LOAD_GALLERIES',
    payload: galleryService.loadGalleries(contentTypeId)
  }
}

export function loadGallery (id) {
  return {
    type: 'LOAD_GALLERY',
    payload: galleryService.loadGallery(id),
    meta: {
      id
    }
  }
}
