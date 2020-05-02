import React from 'react';
import Articles from '../articles/Articles';
import About from '../about/About';
import ContactModal from '../contact/ContactModal';
import ContactRequestBox from '../contact/ContactRequestBox';
import 'react-multi-carousel/lib/styles.css';
import './Home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { 
      displayContactModal: false,
      displayContactRequestBox: false,
      contactRequestError: null,
      isFetching: false,
    };
  }

  setFetching(isFetching) {
    this.setState({
      isFetching: isFetching,
    })
  }

  setError(error) {
    this.setState({
      contactRequestError: error,
    })
  }

  toggleContactRequestBox() {
    this.setState(prevState => ({
      displayContactRequestBox: !prevState.displayContactRequestBox,
    }));
  }

  toggleContactModal() {
    this.setState(prevState => ({
      displayContactModal: !prevState.displayContactModal
    }));
  }

  render() {
    return (
      <div className="home">
        <Articles />
        <About toggleModal={() => this.toggleContactModal()}/>
        <ContactModal 
          display={this.state.displayContactModal} 
          setFetching={(isFetching) => this.setFetching(isFetching)}
          setError={(error) => this.setError(error)}
          toggleContactModal={() => this.toggleContactModal()}
          toggleContactRequestBox={() => this.toggleContactRequestBox()}
        />
        <ContactRequestBox 
          display={this.state.displayContactRequestBox}
          contactRequestError={this.state.contactRequestError}
          isFetching={this.state.isFetching}
          setError={(error) => this.setError(error)}
          toggleContactRequestBox={() => this.toggleContactRequestBox()}
        />
      </div>
    );
  }
}

export default Home;
