import React from 'react';
import styled from 'styled-components';
import AudioItem from '../../components/AudioItem';
import VideoItem from '../../components/VideoItem';

import { Media } from 'interfaces';

interface ItemListProps { items: Array<Media>; }
interface ItemListState { }

class ItemListComponent extends React.Component<ItemListProps, ItemListState> {
  render() {
    const ItemListContainer = styled.div`
      padding: 0 1em;
      box-sizing: border-box;
    `;

    const ItemList = styled.ul`
      list-style: none;
    `;

    const items = this.props.items.map(function (item: Media, index: number) {
      if (item.type === 'Audio') {
        return (
          <AudioItem item={item.title} key={item.mediaId} />
        );
      } else {
        return (
          <VideoItem item={item.title} key={item.mediaId} />
        );
      }
    });
    return (
      <ItemListContainer>
        <h3>A list of items</h3>
        <ItemList className="styleMap.itemList">
          {items}
        </ItemList>
      </ItemListContainer >
    );
  }
}

export default ItemListComponent;
