import React from 'react';
import Moment from 'react-moment';
import './PortfolioContainer.scss';

Moment.globalFormat = 'MMM D, YYYY';

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="portfolio-piece" href={this.props.data.link} target="_blank">
        <img 
          src={require(`../../../images/portfolio_images/${this.props.data.image}`)}
          style={{
            height: '250px',
            width: '100%',
          }}
        />
        <div className="portfolio-piece-text">
          <div className="portfolio-title">
            <h3>{this.props.data.title}</h3>
          </div>
          <div className="portfolio-date-publication">
            <Moment>{this.props.data.date}</Moment> • {this.props.data.publication}
          </div>
          <div className="portfolio-description">
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default PortfolioContainer;
