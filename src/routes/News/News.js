import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RootLayout from '../../layouts/RootLayout.js'
import ItemList from '../../components/ItemList'
import Spinner from '../../components/Spinner';
import { fetchNews } from '../../modules/news.js';

class News extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render(){
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

const mapStateToProps = state => ({
  loading: state.news.loading,
  error: state.news.error,
  items: state.news.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNews
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
