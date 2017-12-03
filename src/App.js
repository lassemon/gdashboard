import React from 'react';
import logo from './gofore-logo.png';
import './App.css';
import ItemList from './sections/ItemList/ItemList.js'

class App extends React.Component {
  render() {
    return (
      <div className="gnews">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to gnews dashboard</h1>
        </header>
        <ItemList />
      </div>
    );
  }
}

export default App;
