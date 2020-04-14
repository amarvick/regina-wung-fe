import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
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

  genArrow = (direction) => {
    return(
      <div className="circle-container">
        <img className={`arrow arrow-${direction}`} src={require(`../../../images/arrow-${direction}.png`)} />
      </div>
    )
  }

  render() {
    const state = this.state;
    return (
      <div className="App">
        <div id="portfolio">
          <ScrollMenu
            data={state.portfolioProjects.map(portfolio => {
              return (
                <PortfolioContainer data={portfolio}/>
              )
            })}
            arrowLeft={this.genArrow('left')}
            arrowRight={this.genArrow('right')}
          />
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
