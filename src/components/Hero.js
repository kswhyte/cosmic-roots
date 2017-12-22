import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo/cosmic-roots-logo-W.svg';

class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}

export default Hero;



