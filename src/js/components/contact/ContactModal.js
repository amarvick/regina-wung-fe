import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Contact from './Contact';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '', 
      subject: '',
      message: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendMessage(e) {
    e.preventDefault();
    this.props.setFetching(true);
    this.props.toggleContactRequestBox();

    const messageInfo = this.state;
    fetch('http://localhost:9000/email' +
            `?name=${messageInfo.name}` +
            `&email=${messageInfo.email}` +
            `&subject=${messageInfo.subject}` +
            `&message=${messageInfo.message}`, {
      method: 'POST'
    })
      .then(_res => {
        this.props.toggleContactModal();
        this.props.setFetching(false);
      })
      .catch(error => {
        this.props.setFetching(false);
        this.props.setError(error);
      });
  }

  render() {
    return (
      <Modal 
        isOpen={this.props.display} 
        toggle={this.props.toggleContactModal}
        size='lg'
      >
        <ModalHeader toggle={this.props.toggleContactModal}>Email me!</ModalHeader>
        <ModalBody>
          <Contact 
            handleChange={(e) => this.handleChange(e)}
            sendMessage={(e) => this.sendMessage(e)}
            data={this.state}
          />
        </ModalBody>
      </Modal>
    );
  }
}

export default ContactModal;
