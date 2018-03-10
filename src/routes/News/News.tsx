import React from 'react';
import { bindActionCreators, ActionCreator, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import RootLayout from '../../layouts/RootLayout';
import ItemList from '../../components/ItemList';
import Spinner from '../../components/Spinner';
import { fetchNews } from '../../actions/news';
import { RootState, NewsState, } from '../../types';
import { Item } from 'interfaces';

interface Props {
  fetchNews: ActionCreator<ThunkAction<Promise<Action>, NewsState, void>>;
  loading: boolean;
  error: boolean;
  items: Array<Item>;
}

class News extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const loading = this.props.loading;
    const items = this.props.items;

    return (
      <RootLayout>
        <h1>News</h1>
        {loading ? (
          <Spinner />
        ) : (
            <ItemList items={items} />
          )}
      </RootLayout>
    );
  }
}

const mapStateToProps = (state: RootState): NewsState => ({
  loading: state.news.loading,
  error: state.news.error,
  items: state.news.items
});

// Turns an object whose values are action creators, into an object with the same keys,
// but with every action creator wrapped into a dispatch call so they may be invoked directly.
const mapDispatchToProps = (dispatch: Dispatch<NewsState>) => bindActionCreators(
  {
    fetchNews
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
