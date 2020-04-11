import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <img src={require('../../../images/Facebook.jpeg')} />
          <p>facebook.com/regina.wung</p>
        </Col>
        <Col>
          <img src={require('../../../images/Linkedin.jpeg')} />
          <p>linkedin.com/in/reginawung</p>
        </Col>
        <Col>
          <img src={require('../../../images/Location.jpeg')} />
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
