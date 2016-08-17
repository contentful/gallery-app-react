import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './App.css'
import { connectComponent } from '../store'
import { initClient } from '../services/contentfulClient'

/*eslint-disable no-unused-vars*/
import Main from '../styles/main.scss'

class App extends React.Component {
  componentWillMount () {
    const { spaceId, deliveryAccessToken } = this.props.app

    initClient(spaceId, deliveryAccessToken)
      .then(
        () => this.props.setAppClientState('success'),
        () => this.props.setAppClientState('error')
    )
  }

  render () {
    return (
      <div>
        <nav styleName='c-nav'>
          <div className='o-container'>
            <Link to={'/'} styleName='c-nav__logo'>
              <img styleName="c-nav__cfImage" src='./contentful_logo_120x90@2x.png' alt="Go to Contentful website" />
              <span>Gallery App</span>
            </Link>
          </div>
          {
            (() => {
              if (this.props.app.authState === 'loading') {
                return (
                  <div styleName="c-nav__spinner">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="k-rotate">
                        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </div>
                )
              }
            })()
          }
        </nav>
        { (() => {
          if (this.props.app.authState === 'success') {
            return (
              <div className="o-container">
                {this.props.children}
              </div>
            )
          }

          if (this.props.app.authState === 'error') {
            return (
              <div role="warning" className="o-warning">
                <p>The connection to contenful could not be established.</p>
                <p className="o-warning__paragraph">Please check your delivery access token and space id</p>
              </div>
            )
          }
        })() }
      </div>
    )
  }
}
App.contextTypes = {
  router: PropTypes.object.isRequired
}

App.propTypes = {
  app: PropTypes.object,
  children: PropTypes.object,
  setAppClientState: PropTypes.func
}

export default connectComponent(CSSModules(App, styles))
