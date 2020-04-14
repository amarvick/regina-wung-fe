import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';
import FooterLink from './FooterLink.js'

function Footer() {
  return (
    <Container className="footer">
      <div className="footer-contents">
        <Col>
          <Row>
            <FooterLink 
              link='https://www.facebook.com/regina.wung'
              imageLink={require('../../../images/Facebook.jpg')}
            />
            <FooterLink 
              link='https://www.linkedin.com/in/reginawung'
              imageLink={require('../../../images/Linkedin.jpg')}
            />
            <FooterLink 
              link='https://www.instagram.com/reginawung'
              imageLink={require('../../../images/Instagram.jpg')}
            />
          </Row>
          <Row>
            <p>Regina Wung, {new Date().getFullYear()}</p>
          </Row>
        </Col>
      </div>
    </Container>
  );
}

export default Footer;
