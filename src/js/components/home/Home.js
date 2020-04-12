import React, { Component, StartupActions } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Container, Row, Col } from 'reactstrap';
import PortfolioContainer from './PortfolioContainer';
import About from '../about/About';
import ContactModal from '../contact/ContactModal';
import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      portfolioProjects: [],
      displayContactModal: false, 
      projectsToShow: 3,
    };
  }

  toggleModal() {
    this.setState(prevState => ({
      displayContactModal: !prevState.displayContactModal
    }));
  }

  getPortfolioProjects() {
    fetch("http://localhost:9000/portfolio")
      .then(res => res.text())
      .then(res => this.setState({ 
        portfolioProjects: JSON.parse(res) 
      }));
  }
  
  componentWillMount() {
    this.getPortfolioProjects();
  }

  // To emulate infinite scrolling behavior
  displayMoreProjects(imagesToShow) {
    console.log('displaying more');
    this.setState(prevState => ({
      projectsToShow: prevState.projectsToShow + imagesToShow
    }));
  }

  render() {
    const state = this.state;
    return (
      <div className="App">
        <div id="portfolio">
          {state.portfolioProjects.slice(0, state.projectsToShow).map(portfolio => {
            return (
              <PortfolioContainer data={portfolio}/>
            )
          })}
          <Button 
            id="show-more-projects"
            color="primary"
            style={{
              display: state.projectsToShow < state.portfolioProjects.length 
                ? 'block' 
                : 'none'
            }} 
            onClick={() => this.displayMoreProjects(3)}>
              See More
          </Button>
        </div>

        <About toggleModal={() => this.toggleModal()}/>
        <ContactModal 
          display={this.state.displayContactModal} 
          toggleModal={() => this.toggleModal()}
        />
      </div>
    );
  }
}

export default Home;
