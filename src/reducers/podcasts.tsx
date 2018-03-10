import { LOADING_PODCASTS, GET_PODCASTS, PodcastAction } from '../actions/podcasts';

const initialState = {
  loading: false,
  error: false,
  items: []
};

export default (state = initialState, action: PodcastAction) => {
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
        loading: false
      };
    default:
      return state;
  }
};