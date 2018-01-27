import React from 'react';
import logo from '../../gofore-logo.png';

class Header extends React.Component{
  render(){
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Welcome to Gofore dashboard</h1>
      </header>
    );
  }
};

export default Header;
