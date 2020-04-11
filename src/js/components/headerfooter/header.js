import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {   
  const parallaxStyling = {
    backgroundImage: `url('${require('../../../images/ReginaBooks.jpeg')}')`,
    height: '600px',
    opacity: '0.5',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'center',
    textAlign: 'center',
  };

  return (
    <div style={{backgroundColor: '#1aa6dd'}}>
      <div style={parallaxStyling}/>
      {/* <Container className="header">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Row>
            <Col>    
              <Link to='/'>
                Home
              </Link>
            </Col>
            <Col>
              <Link to='/about'>
                About
              </Link>
            </Col>
            <Col>
              <Link to='/contact'>
                Contact
              </Link>
            </Col>
            <Col>
              <Link to='/blog'>
                Blog
              </Link>
            </Col>
          </Row>
        </Col>
      </Container> */}
    </div>
  );
}

export default Header;
