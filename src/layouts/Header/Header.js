import React from 'react';
import logo from '../../gofore-logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Welcome to Gofore dashboard</h1>

        <Link to="/">Home</Link>
        <Link to ="podcasts">Podcasts</Link>
      </header>
    );
  }
};

export default Header;
