import { combineReducers } from 'redux'
import { app } from './app'
import { galleries } from './galleries'

const rootReducer = combineReducers({app, galleries})

export default rootReducer
