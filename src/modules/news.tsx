import { ApiAction, FetchNewsPayload } from '../types';
import { LOADING_NEWS, GET_NEWS } from './newsActions';

const initialState = {
  loading: false,
  error: false,
  items: []
};

// reducer
export default (state = initialState, action: ApiAction<FetchNewsPayload>) => {
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
        loading: !state.loading
      };
    default:
      return state;
  }
};
