import React from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, Container } from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="name">Name *</Label>
            <Input 
              type="text" 
              name="name"
              placeholder="Name" 
              onChange={e => this.props.handleChange(e)} 
              required 
            />
            <FormFeedback>I'd like to know who this is :)</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email *</Label>
            <Input 
              type="email" 
              name="email"
              placeholder="Email" 
              onChange={e => this.props.handleChange(e)} 
              required 
            />
            <FormFeedback>I'd like to know how to reach back out to you :)</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message *</Label>
            <Input 
              type="textarea" 
              name="message"
              rows={10} 
              onChange={e => this.props.handleChange(e)} 
              required 
            />
            <FormFeedback>I'd like to know what you have to say :)</FormFeedback>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Contact;
