import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function Contact() {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="name">Name *</Label>
          <Input type="name" name="name" id="name" placeholder="Name..." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email *</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message *</Label>
          <Input type="textarea" name="message" id="message" rows={10} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
