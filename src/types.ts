import { Item } from 'interfaces';

// state types
export interface RootState {
  news: NewsState;
  podcasts: PodcastsState;
}

export type PodcastsState = {
  loading: boolean,
  error: boolean,
  items: Array<Item>
};

export type NewsState = {
  loading: boolean,
  error: boolean,
  items: Array<Item>
};

// action types
export interface RequestAction<T> {
  type: string;
  payload: T;
}

export interface LoadingAction {
  type: string;
}

// payload types
export type GetNewsPayload = Array<Item>;
export type GetPodcastsPayload = Array<Item>;
