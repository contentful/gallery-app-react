import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './GalleryThumb.css'
import Author from './Author'
import Date from './Date'
import Location from './Location'
import ResponsiveImage from './ResponsiveImage'

class GalleryThumb extends React.Component {
  constructor(props) {
    super(props)

    this.state = { gallery : props.entry }
  }
  render () {
    return (
      <div styleName="c-galleryThumb">
        <figure styleName="c-galleryThumb__figure">
          <Link to={`/gallery/${this.state.gallery.sys.id}`} styleName="c-galleryThumb__imageContainer">
            <ResponsiveImage src={ this.state.gallery.fields.coverImage.fields.file.url } alt={ `Open Gallery ${ this.state.gallery.fields.title }` }/>
          </Link>

          <figcaption styleName="c-galleryThumb__caption">
            <div styleName="c-galleryThumb__title">{ this.state.gallery.fields.title }</div>

            <div className="u-marginBottomSmall">
              <Author entry={ this.state.gallery.fields.author }></Author>
            </div>

            { this.renderTags() }

            <div className="u-marginBottomSmall u-flexHorizCenter">
              <Date entry={ this.state.gallery.fields.date } />
              <Location entry={ this.state.gallery.fields.location } />
            </div>

          </figcaption>
        </figure>
        <div className="u-flexHorizCenter u-marginTopAuto u-marginBottomDefault">
          <Link to={`/gallery/${this.state.gallery.sys.id}`} className="o-btnPrimary">View gallery</Link>
        </div>
      </div>
    )
  }

  renderTags() {
    if ( this.state.gallery.fields.tags ) {
      return (
        <ul className="o-listReset">
        {
          this.state.gallery.fields.tags.map(
            ( entry, index ) => ( <li key={index} className="o-tag">{ entry }</li> )
          )
        }
        </ul>
      )
    }
  }
}

GalleryThumb.propTypes = { entry: React.PropTypes.object };

export default CSSModules(GalleryThumb, styles)
