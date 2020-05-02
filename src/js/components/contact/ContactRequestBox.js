import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import './ContactRequestBox.scss';

class ContactRequestBox extends React.Component {
  closeModal() {
    this.props.setError(null);
    this.props.toggleContactRequestBox();
  }

  render() {
    const display = this.props.isFetching ? (<p>Loading</p>) : 
      this.props.contactRequestError == null 
        ? (<p>Message sent successfully!</p>)
        : (<p>Message failed to send :( {`${this.props.contactRequestError}`}</p>);

    return this.props.display ? (
      <Modal 
        isOpen={this.props.display} 
        toggle={this.props.toggleContactModal}
        centered={true}
      >
        <ModalBody>
          {display}
          <button onClick={() => this.closeModal()}>Close</button>
        </ModalBody>
      </Modal>
    ) : null;
  }
}

export default ContactRequestBox;
