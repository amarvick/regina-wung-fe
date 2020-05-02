import React from 'react';
import './FooterLink.scss';

class FooterLink extends React.Component {
  render() {
    return (
      <a className="footer-link" href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img
          className="social-media"
          alt={`Social Media Link for ${this.props.socialMediaType}`}
          src={this.props.imageLink}
        />
      </a>
    );
  }
}

export default FooterLink;
