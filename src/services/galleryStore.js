import {getClient} from './contentfulClient'

function loadGalleries(contentTypeId) {
  return getClient().getEntries({
    content_type: contentTypeId
  }).then(payload => {
    return payload.items;
  })
}

function loadGallery(id) {
  return getClient().getEntries({'sys.id': id}).then(payload => {
    if ( ! payload.items.length ) {
      throw new Error( 'Entry not found' )
    }

    return payload.items[ 0 ];
  })
}


export {
  loadGalleries,
  loadGallery
}
