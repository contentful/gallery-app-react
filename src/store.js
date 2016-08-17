import { createStore, bindActionCreators, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { useRouterHistory } from 'react-router'
import rootReducer from './reducers/index'
import { createHistory } from 'history'

import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'

const middleware = applyMiddleware(promiseMiddleware(), thunk, logger())

function RunDevToolExtensionIfNotInProduction () {
  const shouldExposeState = (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') &&
                            window.devToolsExtension

  return (shouldExposeState ? window.devToolsExtension() : (f) => f)
}

export const store = createStore(
  rootReducer,
  compose(middleware, RunDevToolExtensionIfNotInProduction())
)

export const history = useRouterHistory(createHistory)({
  basename: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? '/gallery-app-react/' : '/'
})

export const mapStateToProps = state => state

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export function connectComponent (component) {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}
