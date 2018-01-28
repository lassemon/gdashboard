import { LOADING_PODCASTS, GET_PODCASTS } from "../actions/podcasts.js";
const initialState = {
  isLoadingPodcasts: false,
  loadingPodcastsError: false,
  podcasts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PODCASTS:
      return {
        ...state,
        isLoadingPodcasts: true
      };
    case GET_PODCASTS:
      return {
        ...state,
        podcasts: action.payload,
        isLoadingPodcasts: !state.isLoadingPodcasts
      };
    default:
      return state;
  }
};

export const fetchPodcasts = () => {
  return dispatch => {
    dispatch({
      type: LOADING_PODCASTS
    })

    return setTimeout(() => {
      dispatch({
        type: GET_PODCASTS,
        payload: ['test', 'foo', 'bar']
      })
    }, 2000)
  }
}
