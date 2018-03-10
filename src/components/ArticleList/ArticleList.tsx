import React from 'react';
import styled from 'styled-components';
import ArticleItem from '../../components/ArticleItem';

import { News } from 'interfaces';

interface ItemListProps { items: Array<News>; }
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

    var items = this.props.items.map(function (item: News, index: number) {
      return (
        <ArticleItem item={item.title} key={item.mediaId} />
      );
    });
    return (
      <ItemListContainer>
        <h3>A list of items</h3>
        <ItemList className="styleMap.itemList">
          {items}
        </ItemList>
      </ItemListContainer>
    );
  }
}

export default ItemListComponent;
