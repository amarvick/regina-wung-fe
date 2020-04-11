import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Contact from './Contact';

class ContactModal extends React.Component {
  render() {
    return (
      <Modal 
        isOpen={this.props.display} 
        toggle={this.props.toggleModal} 
        className='contact-modal'
        size='lg'>
        <ModalHeader toggle={this.props.toggleModal}>Contact</ModalHeader>
        <ModalBody>
          <Contact />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggleModal}>Send</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ContactModal;
