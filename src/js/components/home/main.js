import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.scss';

function Home() {
  return (
    <Container className="body">
      <Row>
        {/* <Col>
          <img className="regina-image" src={require('../../../images/Regina.jpeg')} />
        </Col> */}
        <Col>
          <p>My name is Regina Wung and I like to write. Yay!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
