// ivana-cajina-378753

import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={this.props.imageName} className="image" alt={this.props.imageName} />
      </div>
    );
  }
}

export default Image;
