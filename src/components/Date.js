import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Date.css'

function Date({ date }) {
  if ( date ) {
    return (
      <div styleName="c-date">
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <span>{ date }</span>
      </div>
    )
  }
}

Date.propTypes = { date: React.PropTypes.string };

export default CSSModules(Date, styles)