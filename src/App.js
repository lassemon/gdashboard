import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './layouts/Header/';
import Home from './layouts/Home/'
import Podcasts from './layouts/Podcasts/'

class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <div>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/podcasts" component={Podcasts}/>
          </div>
        </Router>
      </main>
    );
  }
}

export default App;
