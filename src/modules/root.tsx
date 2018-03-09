import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import podcasts from './podcasts';
import news from './news';

export default combineReducers({
  routing: routerReducer,
  podcasts: podcasts,
  news: news
});
