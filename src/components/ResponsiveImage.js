import React, { PropTypes } from 'react'
import ReactDom from 'react-dom'
import CSSModules from 'react-css-modules'
import styles from './ResponsiveImage.css'

class ImageShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = { src : props.src, alt : props.alt, mounted : false }
  }

  componentDidMount() {
    this.setState( {
      width: Math.round(ReactDom.findDOMNode(this).getBoundingClientRect().width),
      mounted: true
    } );
  }

  render () {
    return (
      <img styleName="responsiveImage"
            src={ this.state.mounted && `${this.state.src}?w=${this.state.width}`} alt={this.state.alt}  />
    )
  }
}

export default CSSModules(ImageShow, styles)
