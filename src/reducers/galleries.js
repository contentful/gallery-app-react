import { makeReducer } from './util'

export const galleries = makeReducer(function (action) {
  switch (action.type) {
    case 'LOAD_GALLERIES_PENDING':
      return { fetching: true }
    case 'LOAD_GALLERIES_FULFILLED':
      return {
        fetching: false,
        entries: action.payload.reduce((collection, entry) => {
          collection[ entry.sys.id ] = entry
          return collection
        }, {})
      }
    case 'LOAD_GALLERIES_REJECTED':
      return { error: true, fetching: false }

    case 'LOAD_GALLERY_PENDING':
      return {
        entries: {
          [ action.meta.id ]: {
            fetching: true
          }
        }
      }
    case 'LOAD_GALLERY_FULFILLED':
      action.payload.fetching = false

      action.payload.fields.images.forEach(image => {
        image.thumbnail = `${image.fields.photo.fields.file.url}?w=120`
      })

      return {
        entries: {
          [ action.meta.id ]: action.payload
        }
      }
    case 'LOAD_GALLERY_REJECTED':
      return {
        entries: {
          [ action.meta.id ]: {
            error: true,
            fetching: false
          }
        }
      }
  }
}, { entries: [] })
