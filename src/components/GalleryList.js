import React, { PropTypes } from 'react'
import { getClient } from '../services/contentfulClient'
import GalleryThumb from './GalleryThumb'
import { bindToGlobalState } from '../store'


class GalleryList extends React.Component {
  componentWillMount() {
    const { galleryTypeId } = this.props.app

    this.props.loadGalleries({contentTypeId: galleryTypeId})
  }

  render () {
    return (
      <div className="u-paddingDefault">
        <ul className="o-listThirdsWithSpace">
          {
            Object.keys( this.props.galleries.entries ).map( id => {
              return (
                <li key={ id }>
                  <GalleryThumb gallery={ this.props.galleries.entries[ id ] }></GalleryThumb>
                </li>
              )
            } )
          }
        </ul>

        { this.maybeRenderWarning() }
      </div>
    )
  }

  maybeRenderWarning () {
    if ( this.props.galleries.error ) {
      return (
        <div className="o-warning">
          <p>The gallery content type you specified does not exist.</p>
          <p className="o-warning__paragraph">Please check your gallery content type token</p>
        </div>
      )
    }
  }
}

export default bindToGlobalState(GalleryList)
