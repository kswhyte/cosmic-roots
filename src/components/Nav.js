import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/thewild'>content</Link></li>
            <li><Link to='/thewild'>contact</Link></li>
            <li><Link to='/blog'>blog</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
