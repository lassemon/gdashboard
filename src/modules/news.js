// actions
export const LOADING_NEWS = 'LOADING_NEWS';
export const GET_NEWS = 'GET_NEWS';

const initialState = {
  loading: false,
  error: false,
  items: []
};

// reducer
export default (state = initialState, action) => {
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

// action creator (async thunk)
export const fetchNews = () => {
  return dispatch => {
    dispatch({
      type: LOADING_NEWS
    })

    return setTimeout(() => {
      dispatch({
        type: GET_NEWS,
        payload: ['news 1', 'news 2', 'news 3']
      })
    }, 1500)
  }
}
