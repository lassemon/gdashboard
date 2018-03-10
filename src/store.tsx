import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/root';

export const history = createHistory();

const initialState = {};
// tslint:disable-next-line:no-any
const enhancers: Array<any> = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;