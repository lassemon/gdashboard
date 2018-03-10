import { LOADING_NEWS, GET_NEWS, NewsAction } from '../actions/news';

const initialState = {
  loading: false,
  error: false,
  items: []
};

export default (state = initialState, action: NewsAction) => {
  switch (action.type) {
    case LOADING_NEWS:
      return {
        ...state,
        loading: true
      };
    case GET_NEWS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
