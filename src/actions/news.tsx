import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RequestAction, LoadingAction, NewsState, GetNewsPayload } from '../types';

export const LOADING_NEWS = 'LOADING_NEWS';
export type LOADING_NEWS_TYPE = typeof LOADING_NEWS; // Is equal to type LOADING_NEWS = 'LOADING_NEWS';
interface LoadingNewsAction extends LoadingAction {
  readonly type: LOADING_NEWS_TYPE;
}

export const GET_NEWS = 'GET_NEWS';
export type GET_NEWS_TYPE = typeof GET_NEWS; // Is equal to type GET_NEWS = 'GET_NEWS';
interface GetNewsAction extends RequestAction<GetNewsPayload> {
  readonly type: GET_NEWS_TYPE;
  payload: GetNewsPayload;
}

export type NewsAction = LoadingNewsAction | GetNewsAction;

// action creator (async thunk)

// fetchNews is a function with the type ActionCreator
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
export const fetchNews: ActionCreator<
  ThunkAction<Promise<Action>, NewsState, void>
  > = () => {
    return async (dispatch: Dispatch<NewsState>): Promise<Action> => {
      dispatch({
        type: LOADING_NEWS
      });

      const news = await resolveAfter2Seconds(
        [
          { mediaId: '1', title: 'news 1', text: 'foo bar' },
          { mediaId: '2', title: 'news 2', text: 'foo bar' },
          { mediaId: '3', title: 'news 3', text: 'foo bar' }
        ]
      );
      return dispatch({
        type: GET_NEWS,
        payload: news
      });
    };
  };

// temporary helper function to mock backend request
function resolveAfter2Seconds(x: GetNewsPayload) {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(x);
      },
      1500);
  });
}