import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button 
        className="regina-button"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;