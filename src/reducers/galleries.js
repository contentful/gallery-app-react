function gallery(state = { fetching: false }, payload) {
  return Object.assign(
    {},
    state,
    payload
  )
}


export function galleries (state = {items: []}, action) {
  switch (action.type) {
    case 'LOAD_GALLERIES_PENDING':
      console.log( 'pending', action.payload );
      return Object.assign(
        {},
        state,
        {fetching: true}
      )
    case 'LOAD_GALLERIES_FULFILLED':
      return Object.assign(
        {},
        state,
        {
          fetching: false,
          entries: action.payload.reduce( ( collection, entry ) => {
            collection[ entry.sys.id ] = entry
            return collection
          }, {} )
        }
      )
    case 'LOAD_GALLERIES_REJECTED':
      return Object.assign(
        {},
        state,
        { error: true, fetching: false }
      )



    case 'LOAD_GALLERY_PENDING':
      const payload = {
        fetching: true
      }

      state.entries = Object.assign(
        state.entries,
        {
          [ action.meta.id ] : gallery( state.entries[ action.meta.id ], payload )
        }
      )

      return Object.assign( {}, state );
    case 'LOAD_GALLERY_FULFILLED':
      action.payload.fetching = false;

      state.entries = Object.assign(
        state.entries, { [ action.meta.id ] : action.payload }
      )

      return Object.assign( {}, state )
    case 'LOAD_GALLERY_REJECTED':
      state.entries = Object.assign(
        state.entries, { [ action.meta.id ] : { error: true, fetching: false } }
      )

      return Object.assign( {}, state );
  }
  return state
}
