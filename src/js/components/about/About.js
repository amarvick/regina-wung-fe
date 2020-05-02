import React from 'react';
import { Row, Col } from 'reactstrap';
import Button from '../utils/Button';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <div className="body">
        <Row>
          <Col md="12" lg="5">
            <img 
              className="regina-image"
              alt="Happy Regina"
              src={require('../../../images/Regina.jpeg')} 
            />
          </Col>
          <Col lg="7"> 
            <Row>
              <h1 id="header-content">ABOUT</h1>
            </Row>
            <Row>
              <p className="about-content">
                Regina is an avid storyteller who loves to write about 
                her personal experiences. A communications professional 
                by day, she enjoys scrapbooking, practicing aerial yoga, 
                and traveling in her spare time. She is a strong proponent 
                of the Oxford comma, despises incorrect uses of the 
                semi-colon, and loves to ask questions. When she's not 
                exploring foreign places, she can be found in Seattle.
              </p>
            </Row>
            <Row>
              <p className="about-content">Want to get in touch?</p>
            </Row>
            <Row>
              <Button 
                onClick={this.props.toggleModal} 
                label="Contact Me"
              />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
