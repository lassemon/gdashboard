import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

class RootLayout extends React.Component {
  render() {
    const Main = styled.main`
      margin: 0 1em;
    `;

    return [
      <Header key="header" />,
      (
        <Main key="main" role="main">
          {this.props.children}
        </Main>
      )
    ];
  }
}

export default RootLayout;
