import { Item } from 'interfaces';

export interface RootState {
  news: NewsState;
  podcasts: PodcastsState;
}

export type ApiAction<T> = {
  type: string,
  payload: T
};

export type LoadingNewsState = {
  type: string
};
export type NewsState = {
  loading: boolean,
  error: boolean,
  items: Array<Item>
};
export type FetchNewsPayload = Array<string>;

export type LoadinPodcastsState = {
  type: string
};
export type PodcastsState = {
  loading: boolean,
  error: boolean,
  items: Array<Item>
};
export type FetchPodcastsPayload = Array<string>;
