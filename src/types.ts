import { Media, News } from 'interfaces';

// state types
export interface RootState {
  news: NewsState;
  podcasts: PodcastsState;
}

export type PodcastsState = {
  loading: boolean,
  error: boolean,
  items: Array<Media>
};

export type NewsState = {
  loading: boolean,
  error: boolean,
  items: Array<News>
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
export type GetPodcastsPayload = Array<Media>;
export type GetNewsPayload = Array<News>;
