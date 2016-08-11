import { createClient } from 'contentful'

let client
let authorized

function initClient (spaceId, accessToken ) {
  client = createClient({
    space: spaceId,
    accessToken,
    host: 'cdn.contentful.com'
  })
  return client.getSpace()
    .then((space) => {
      authorized = true
      return space
    })
}

function getClient () {
  return authorized && client
}

export { initClient, getClient }
