import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <Container className="footer">
        <Col>
            <Row>
                <i className="fa fa-phone"></i>
                <p>(206) 290 1719</p>
            </Row>
            <Row>
                <i className="fa fa-envelope"></i>
                <p>reginawung@gmail.com</p>
            </Row>
            <Row>
                <i className="fa fa-location-arrow"></i>
                <p>Seattle, WA</p>
            </Row>
        </Col>
        {/* <Col>
            <Row>
                <Col>Facebook</Col>
                <Col>Instagram</Col>
                <Col>Linkedin</Col>
            </Row>
        </Col> */}
    </Container>
  );
}

export default Footer;
