// actions
export const LOADING_PODCASTS = 'LOADING_PODCASTS';
export const GET_PODCASTS = 'GET_PODCASTS';

const initialState = {
  loading: false,
  error: false,
  items: []
};

// reducer
export default (state = initialState, action) => {
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

// action creator (async thunk)
export const fetchPodcasts = () => {
  return dispatch => {
    dispatch({
      type: LOADING_PODCASTS
    })

    return setTimeout(() => {
      dispatch({
        type: GET_PODCASTS,
        payload: ['podcast 1', 'podcast 2', 'podcast 3']
      })
    }, 1500)
  }
}
