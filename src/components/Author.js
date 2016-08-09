import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Author.css'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = { author : props.entry }
  }
  render () {
    return (
      <div styleName="c-author">
        { this.state.author.fields.name }
      </div>
    )
  }
}

Gallery.propTypes = { entry: React.PropTypes.object };

export default CSSModules(Gallery, styles)
