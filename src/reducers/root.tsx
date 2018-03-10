import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import podcasts from '../reducers/podcasts';
import news from '../reducers/news';

export default combineReducers({
  routing: routerReducer,
  podcasts: podcasts,
  news: news
});
