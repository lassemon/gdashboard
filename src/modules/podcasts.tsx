import { ApiAction, FetchPodcastsPayload } from '../types';
import { LOADING_PODCASTS, GET_PODCASTS, } from './podcastActions';

const initialState = {
  loading: false,
  error: false,
  items: []
};

// reducer
export default (state = initialState, action: ApiAction<FetchPodcastsPayload>) => {
  switch (action.type) {
    case LOADING_PODCASTS:
      return {
        ...state,
        loading: true
      };
    case GET_PODCASTS:
      return {
        ...state,
        items: action.payload,
        loading: !state.loading
      };
    default:
      return state;
  }
};