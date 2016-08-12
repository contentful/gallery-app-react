import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Author.css'

function Author ({ author }) {
  return (
    <div styleName="c-author">
      { author.fields.name }
    </div>
  )
}

Author.propTypes = { author: PropTypes.object }

export default CSSModules(Author, styles)
