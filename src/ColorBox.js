import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
<<<<<<< HEAD
    const newValue = this.props.opacity - 0.1;
      if (this.props.opacity >= 0.2) {
        return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={newValue} />
          </div>
        );
      } else {
        return null;
      }
    }
=======
      <div className="color-box" style={{opacity: 2}}>
      if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newValue} />
        </div>
      );
    } else {
      return null;
    }
      </div>
  }
}
>>>>>>> 8a0f58c3e7532db5cc7a2991dcf3a30f55339c2e
}
