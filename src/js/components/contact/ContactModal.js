import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Contact from './Contact';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '', 
      message: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendMessage() {
    const messageInfo = this.state;
    fetch(`http://localhost:9000/email?name=${messageInfo.name}&email=${messageInfo.email}&message=${messageInfo.message}`, {
      method: 'POST'
    })
      .then(res => {
        alert('message sent!');
        this.props.toggleModal();
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <Modal 
        isOpen={this.props.display} 
        toggle={this.props.toggleModal} 
        className='contact-modal'
        size='lg'>
        <ModalHeader toggle={this.props.toggleModal}>Contact</ModalHeader>
        <ModalBody>
          <Contact 
            handleChange={(e) => this.handleChange(e)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.sendMessage()}>Send</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ContactModal;
