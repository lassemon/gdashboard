import React from 'react';
import logo from '../../gofore-logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Header extends React.Component{
  render(){

    const NavContainer = styled.ul`
      list-style: disc;
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
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Welcome to Gofore dashboard</h1>
        <NavContainer>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to ="podcasts">Podcasts</Link></NavItem>
        </NavContainer>
      </header>
    );
  }
};

export default Header;
