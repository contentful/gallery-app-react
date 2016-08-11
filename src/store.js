import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'
import { deliveryAccessToken, spaceId, galleryTypeId } from '../config'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'

const middleware = applyMiddleware(promiseMiddleware(), thunk, logger())

function RunDevToolExtensionIfNotInProduction () {
  const shouldExposeState = ( !process.env.NODE_ENV || process.env.NODE_ENV !== 'production')
                            && window.devToolsExtension

  return (shouldExposeState ? window.devToolsExtension() : (f) => f)
}

export const store = createStore(
  rootReducer,
  compose(middleware, RunDevToolExtensionIfNotInProduction())
)

export const history = syncHistoryWithStore(browserHistory, store)


function mapStateToProps (state) {
  return {
    api: state.api,
    app: state.app,
    galleries: state.galleries
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}


export function connectComponent(component) {
   return connect(mapStateToProps, mapDispatchToProps)(component)
}
