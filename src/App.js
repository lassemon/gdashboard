import React from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/Home/'
import Podcasts from './routes/Podcasts/'
import News from './routes/News/'

class App extends React.Component {
  render(){
    return [
        <Route exact path="/" component={Home} key="home"/>,
        <Route path="/podcasts" component={Podcasts} key="podcasts"/>,
        <Route path="/news" component={News} key="news"/>
    ];
  }
}

export default App;
