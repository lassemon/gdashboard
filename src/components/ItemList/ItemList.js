import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AudioItem from '../../components/AudioItem';
import Spinner from '../../components/Spinner';
import {
  fetchPodcasts
} from '../../reducers/podcasts.js';

class ItemList extends React.Component {

  componentDidMount() {
    this.props.fetchPodcasts();
  }

  render(){
    const ItemListContainer = styled.div`
      padding: 0 1em;
      box-sizing: border-box;
    `;

    const ItemList = styled.ul`
      list-style: none;
    `;

    if(this.props.error) {
      return (<span>error...</span>);
    }
    if(this.props.loading) {
      return <Spinner />
    }

    var items = this.props.podcasts.map(function(item, index){
      return (
        <AudioItem item={item} key={index} />
      );
    });
    return (
      <ItemListContainer>
        <h3>A list of items</h3>
        <ItemList className="styleMap.itemList">
          {items}
        </ItemList>
      </ItemListContainer>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.podcasts.isLoadingPodcasts,
  error: state.podcasts.errorLoadingPodcasts,
  podcasts: state.podcasts.podcasts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPodcasts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
