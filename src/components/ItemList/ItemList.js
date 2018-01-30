import React from 'react';
import styled from 'styled-components';
import AudioItem from '../../components/AudioItem';

class ItemList extends React.Component {
  render(){
    const ItemListContainer = styled.div`
      padding: 0 1em;
      box-sizing: border-box;
    `;

    const ItemList = styled.ul`
      list-style: none;
    `;

    var items = this.props.items.map(function(item, index){
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

export default ItemList;
