import React from 'react';
const logo = require('../../gofore-logo.png');
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class HeaderComponent extends React.Component {
  render() {
    const Logo = styled.img`
      height: 4em;
    `;

    const Header = styled.header`
      background-color: #343F68;
      padding: 1em 1em .5em 1em;
      color: white;
    `;

    const Title = styled.h1`
      font-size: 1.5em;
    `;

    const NavContainer = styled.ul`
      list-style: none;
      margin: 0;
      padding: 0;
    `;

    const NavItem = styled.li`
      display: inline-block;
      a {
        color: white;
        text-decoration: none;
        margin: 0 1em 0 0;
      }
      a:hover {
        text-decoration: underline;
      }
    `;

    return (
      <Header>
        <Logo src={logo} className="logo" alt="logo" />
        <Title>Welcome to Gofore dashboard</Title>
        <NavContainer>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="podcasts">Podcasts</Link>
          </NavItem>
          <NavItem>
            <Link to="news">News</Link>
          </NavItem>
        </NavContainer>
      </Header>
    );
  }
}

export default HeaderComponent;
