import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './layouts/Header/';
import Home from './layouts/Home/'
import Podcasts from './layouts/Podcasts/'

class App extends React.Component {
  render() {
    return (
      <main>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/podcasts" component={Podcasts}/>
      </main>
    );
  }
}

export default App;
