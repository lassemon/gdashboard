import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import podcasts from './podcasts.js'

export default combineReducers({
  routing: routerReducer,
  podcasts: podcasts
})
