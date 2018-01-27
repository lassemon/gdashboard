import React from 'react';
import Header from '../Header/';
import ItemList from '../../components/ItemList/'

class CoreLayout extends React.Component {
  render() {
    return (
      <div className="">
        <Header />
        <ItemList />
      </div>
    );
  }
}

export default CoreLayout;
