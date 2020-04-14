import React from 'react';
import './FooterLink.scss';

class FooterLink extends React.Component {
  render() {
    return (
      <a className="footer-link" href={this.props.link} target="_blank">
        <img
          className="social-media"
          src={this.props.imageLink}
        />
      </a>
    );
  }
}

export default FooterLink;
