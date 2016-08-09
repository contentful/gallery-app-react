import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Location.css'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = { location : props.entry }
  }
  render () {
    if ( this.state.location ) {
      return (
        <div styleName="c-location">
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <span>{ this.state.location.lat.toFixed( 3 ) } { this.state.location.lon.toFixed( 3 ) }</span>
        </div>
      )
    }
  }
}

Gallery.propTypes = { entry: React.PropTypes.object };

export default CSSModules(Gallery, styles)
