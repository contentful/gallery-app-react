import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { api } from './api'
import { app } from './app'
import { galleries } from './galleries'


const rootReducer = combineReducers({api, app, galleries, routing: routerReducer})

export default rootReducer
