import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import podcasts from './podcasts.js'
import news from './news.js'

export default combineReducers({
  routing: routerReducer,
  podcasts: podcasts,
  news: news
})
