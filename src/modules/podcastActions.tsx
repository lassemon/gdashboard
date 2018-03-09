import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { PodcastsState } from '../types';
import { Item } from 'interfaces';

// actions
export const LOADING_PODCASTS = 'LOADING_PODCASTS';
export type LOADING_PODCASTS = typeof LOADING_PODCASTS; // Is equal to type LOADING_NEWS = 'LOADING_NEWS';
export interface LoadingPodcasts {
  type: LOADING_PODCASTS;
}
export const loadingPodcastsAction: ActionCreator<Action> = () => {
  return {
    type: LOADING_PODCASTS
  };
};

export const GET_PODCASTS = 'GET_PODCASTS';
export type GET_PODCASTS = typeof GET_PODCASTS; // Is equal to type LOADING_NEWS = 'LOADING_NEWS';
export interface GetPodcasts {
  type: GET_PODCASTS;
  payload: Array<string>;
}
export const getPodcastsAction: ActionCreator<Action> = (podcasts: Array<Item>) => {
  return {
    type: GET_PODCASTS,
    payload: podcasts
  };
};

function resolveAfter2Seconds(x: Item[]) {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(x);
      },
      2000);
  });
}

// action creator (async thunk)
export const fetchPodcasts: ActionCreator<
  ThunkAction<Promise<Action>, PodcastsState, void>
  > = () => {
    return async (dispatch: Dispatch<PodcastsState>): Promise<Action> => {
      dispatch({
        type: LOADING_PODCASTS
      });

      const podcasts = await resolveAfter2Seconds(
        [
          { title: 'podcast 1', mediaId: 1 },
          { title: 'podcast 2', mediaId: 2 },
          { title: 'podcast 3', mediaId: 3 }
        ]
      );
      return dispatch({
        type: GET_PODCASTS,
        payload: podcasts
      });
    };
  };
