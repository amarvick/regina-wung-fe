import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <a href="https://www.facebook.com/regina.wung">
            <img 
              className="social-media" 
              src={require('../../../images/Facebook.jpg')}
            />
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/reginawung">
            <img 
              className="social-media" 
              src={require('../../../images/Linkedin.jpg')} 
            />
          </a>
        </Col>
        <Col>
          <img 
            className="social-media" 
            src={require('../../../images/Location.jpg')} 
          />
          <p>Seattle, WA</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Regina Wung, {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
