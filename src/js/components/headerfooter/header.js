import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <Container className="header">
        <Row>
            <h1>Regina Wung</h1>
        </Row>
        <Row>
            <h4>Communications Professional</h4>
        </Row>

        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Row>
                <Col>    
                    <Link to='/'>
                        Home
                    </Link>
                </Col>
                <Col>
                    <Link to='/portfolio'>
                        Portfolio
                    </Link>
                </Col>
                <Col>
                    <Link to='/resume'>
                        Resume
                    </Link>
                </Col>
                <Col>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </Col>
            </Row>
        </Col>
    </Container>
  );
}

export default Header;
