import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { app } from './app'
import { galleries } from './galleries'

const rootReducer = combineReducers({app, galleries, routing: routerReducer})

export default rootReducer
