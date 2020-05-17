import React from 'react';
import { Form, FormFeedback, FormGroup, Label, Input, Container } from 'reactstrap';
import Button from '../utils/Button';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      missingName: false,
      missingEmail: false, 
      missingSubject: false,
      missingMessage: false,
    };
  }

  validateMessage(e) {
    let error = false;
    this.setState({
      missingName: false,
      missingEmail: false,
      missingSubject: false,
      missingMessage: false,
    });

    if (this.props.data.name === '') {
      error = true;
      this.setState({
        missingName: true,
      })
    }
    if (this.props.data.email === '') {
      error = true;
      this.setState({
        missingEmail: true,
      })
    }
    if (this.props.data.subject === '') {
      error = true;
      this.setState({
        missingSubject: true,
      })
    }
    if (this.props.data.message === '') {
      error = true;
      this.setState({
        missingMessage: true,
      })
    }

    if (error) {
      return;
    } else {
      this.props.sendMessage(e);
    }
  }

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
              invalid={this.state.missingName}
              required 
            />
            <FormFeedback/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email *</Label>
            <Input 
              type="email" 
              name="email"
              placeholder="Email" 
              onChange={e => this.props.handleChange(e)} 
              invalid={this.state.missingEmail}
              required 
            />
            <FormFeedback/>
          </FormGroup>
          <FormGroup>
            <Label for="subject">Subject *</Label>
            <Input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              onChange={e => this.props.handleChange(e)} 
              invalid={this.state.missingSubject}
              required 
            />
            <FormFeedback/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message *</Label>
            <Input 
              type="textarea" 
              name="message"
              rows={10} 
              onChange={e => this.props.handleChange(e)} 
              invalid={this.state.missingMessage}
              required 
            />
            <FormFeedback/>
          </FormGroup>
          <Button 
            onClick={(e) => this.validateMessage(e)}
            label="Send"
          />
        </Form>
      </Container>
    );
  }
}

export default Contact;
