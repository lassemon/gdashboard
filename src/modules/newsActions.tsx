import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { NewsState } from '../types';
import { Item } from 'interfaces';

// actions
export const LOADING_NEWS = 'LOADING_NEWS';
export type LOADING_NEWS_TYPE = typeof LOADING_NEWS; // Is equal to type LOADING_NEWS = 'LOADING_NEWS';
export interface LoadingNews {
  type: LOADING_NEWS_TYPE;
  payload: '';
}

export const loadingNewsAction: ActionCreator<Action> = () => {
  return {
    type: LOADING_NEWS
  };
};

export const GET_NEWS = 'GET_NEWS';
export type GET_NEWS = typeof GET_NEWS; // Is equal to type GET_NEWS = 'GET_NEWS';
export interface GetNews {
  type: GET_NEWS;
  payload: Array<string>;
}

export const getNewsAction: ActionCreator<Action> = (news: Array<Item>) => {
  return {
    type: GET_NEWS,
    payload: news
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

// fetchNews is a function with the type ActionCreator
// ActionCreator is an interface wich returns a type defined in brackets <>, in this case ThunkAction
// ThunkAction is the type for asyncronous actions. ThunkAction<R, S, E>
// R : return value of ThunkAction
// S : type of Dispatch
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
          { title: 'news 1', mediaId: 1 },
          { title: 'news 2', mediaId: 2 },
          { title: 'news 3', mediaId: 3 }
        ]
      );
      return dispatch({
        type: GET_NEWS,
        payload: news
      });
    };
  };
