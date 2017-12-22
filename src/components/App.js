import React, { Component } from 'react';

import Nav from './Nav.js'
import Hero from './Hero.js'
import Header from './Header.js'
import Main from './Main.js'
// import Image from './Image.js'
import '../css/app.css';

// import darkSky from '../images/ivana-cajina-378753.jpg';
// import waterSplash from '../images/biel-morro-126773.jpg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="hero-block">
          <Nav />
          <Hero />
        </div>
        <Header />
        {/* <Image 
          imageName={waterSplash}
        /> */}
        <div className="image"></div>
        <Main />
      </div>
    );
  }
}

export default App;
