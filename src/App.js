import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './layouts/Header/';
import Home from './layouts/Home/'
import Podcasts from './layouts/Podcasts/'
import styled from 'styled-components';

class App extends React.Component {
  render() {
    const Main = styled.main`
      margin: 0 1em;
    `;

    return [
      <Header key="header" />,
      <Main key="main" role="main">
        <Route exact path="/" component={Home}/>
        <Route path="/podcasts" component={Podcasts}/>
      </Main>
    ];
  }
}

export default App;
