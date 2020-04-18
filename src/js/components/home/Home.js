import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import About from '../about/About';
import ContactModal from '../contact/ContactModal';
import Carousel from 'react-multi-carousel';
import './Home.scss';
import 'react-multi-carousel/lib/styles.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { 
      portfolioProjects: [],
      displayContactModal: false,
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

  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 10000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <div className="App">
        <div id="portfolio">
          <Carousel 
            responsive={responsive}
            autoPlay={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {this.state.portfolioProjects.map(portfolio => {
              return (
                <PortfolioContainer data={portfolio}/>
              )
            })}
          </Carousel>
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
