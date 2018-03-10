import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RequestAction, LoadingAction, PodcastsState, GetPodcastsPayload } from '../types';

// actions
export const LOADING_PODCASTS = 'LOADING_PODCASTS';
export type LOADING_PODCASTS_TYPE = typeof LOADING_PODCASTS; // Is equal to type LOADING_NEWS = 'LOADING_NEWS';
export interface LoadingPodcastsAction extends LoadingAction {
  readonly type: LOADING_PODCASTS_TYPE;
}

export const GET_PODCASTS = 'GET_PODCASTS';
export type GET_PODCASTS = typeof GET_PODCASTS; // Is equal to type LOADING_NEWS = 'LOADING_NEWS';
export interface GetPodcastsAction extends RequestAction<GetPodcastsPayload> {
  readonly type: GET_PODCASTS;
  payload: GetPodcastsPayload;
}

export type PodcastAction = LoadingPodcastsAction | GetPodcastsAction;

// action creator (async thunk)

// fetchPodcasts is a function with the type ActionCreator
// ActionCreator is an interface wich returns a type defined in brackets <>, in this case ThunkAction
// ThunkAction is the type for asyncronous actions. ThunkAction<R, S, E>
// R : return value of ThunkAction
// S : type of Dispatch
// E : optional extra argument
//
// ThunkAction is a function that takes in
//  - dispatch <= of type Dispatch<S>
//  - getState <= defaults to function that returns S
//  - extraArgument <= of type E
// and returns type R
export const fetchPodcasts: ActionCreator<
  ThunkAction<Promise<Action>, PodcastsState, void>
  > = () => {
    return async (dispatch: Dispatch<PodcastsState>): Promise<Action> => {
      dispatch({
        type: LOADING_PODCASTS
      });

      const podcasts = await resolveAfter2Seconds(
        [
          { mediaId: '1', title: 'podcast 1', description: '', tags: [], type: 'Video', url: '' },
          { mediaId: '2', title: 'podcast 2', description: '', tags: [], type: 'Audio', url: '' },
          { mediaId: '3', title: 'podcast 3', description: '', tags: [], type: 'Video', url: '' }
        ]
      );
      return dispatch({
        type: GET_PODCASTS,
        payload: podcasts
      });
    };
  };

// temporary helper function to mock backend request
function resolveAfter2Seconds(x: GetPodcastsPayload) {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(x);
      },
      1500);
  });
}