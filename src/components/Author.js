import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Author.css'

function Gallery ({ author }) {
  return (
    <div styleName="c-author">
      { author.fields.name }
    </div>
  )
}

Gallery.propTypes = { author: React.PropTypes.object };

export default CSSModules(Gallery, styles)
