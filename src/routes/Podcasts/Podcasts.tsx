import React from 'react';
import { bindActionCreators, ActionCreator, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import RootLayout from '../../layouts/RootLayout';
import ItemList from '../../components/ItemList';
import Spinner from '../../components/Spinner';
import { fetchPodcasts } from '../../modules/podcastActions';
import { Item } from 'interfaces';
import { PodcastsState, RootState } from '../../types';

interface Props {
  fetchPodcasts: ActionCreator<ThunkAction<Promise<Action>, PodcastsState, void>>;
  loading: boolean;
  error: boolean;
  items: Array<Item>;
}

class Podcasts extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchPodcasts();
  }

  render() {
    const loading = this.props.loading;
    const items = this.props.items;

    return (
      <RootLayout>
        <h1>Podcasts</h1>
        {loading ? (
          <Spinner />
        ) : (
            <ItemList items={items} />
          )}
      </RootLayout>
    );
  }
}

const mapStateToProps = (state: RootState): PodcastsState => ({
  loading: state.podcasts.loading,
  error: state.podcasts.error,
  items: state.podcasts.items
});

const mapDispatchToProps = (dispatch: Dispatch<PodcastsState>) => bindActionCreators(
  {
    fetchPodcasts
  },
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podcasts);
