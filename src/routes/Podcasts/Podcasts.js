import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RootLayout from '../../layouts/RootLayout.js'
import ItemList from '../../components/ItemList'
import Spinner from '../../components/Spinner';
import { fetchPodcasts } from '../../modules/podcasts.js';

class Podcasts extends React.Component {
  componentDidMount() {
    this.props.fetchPodcasts();
  }

  render(){
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

const mapStateToProps = state => ({
  loading: state.podcasts.loading,
  error: state.podcasts.error,
  items: state.podcasts.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPodcasts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podcasts)
