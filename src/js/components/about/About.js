import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <Container className="body">
        <Row>
          <Col>
            <img className="regina-image" src={require('../../../images/Regina.jpeg')} />
          </Col>
          <Col>
            <Row>
              <h1 id="header-content">About Me</h1>
            </Row>
            <Row>
              <p class="about-content">Regina is an avid storyteller who loves to write about her personal experiences. A communications professional by day, she enjoys scrapbooking, practicing aerial yoga, and traveling in her spare time. She is a strong proponent of the Oxford comma, despises incorrect uses of the semi-colon, and loves to ask questions. When she's not exploring foreign places, she can be found in Seattle.</p>
            </Row>
            <Row>
              <p class="about-content">Want to get in touch?</p>
            </Row>
            <Row>
              <Button color="primary" onClick={this.props.toggleModal} class="about-content">Contact Me</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
