import React from 'react';
import './Footer.scss';
import FooterLink from './FooterLink.js'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-row">
          <FooterLink 
            link='https://www.facebook.com/regina.wung'
            imageLink={require('../../../images/Facebook.jpg')}
            socialMediaType="Facebook"
          />
          <FooterLink 
            link='https://www.linkedin.com/in/reginawung'
            imageLink={require('../../../images/Linkedin.jpg')}
            socialMediaType="LinkedIn"
          />
          <FooterLink 
            link='https://www.instagram.com/reginawung'
            imageLink={require('../../../images/Instagram.jpg')}
            socialMediaType="Instagram"
          />
        </div>
        <div className="footer-row">
          <p>Regina Wung, {new Date().getFullYear()}</p>
        </div>
        <div className="footer-row">
          Developed by <a href="http://github.com/amarvick" target="_blank" rel="noopener noreferrer">Alex Marvick</a>
        </div>
      </div>
    );
  }
}

export default Footer;
