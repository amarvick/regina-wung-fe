import React from 'react';
import Moment from 'react-moment';
import './PortfolioContainer.scss';

Moment.globalFormat = 'MMM DD, YYYY';

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.data.link} target="_blank">
        <div className="portfolio-piece" 
          style={{
            border: '1px solid white',
            borderRadius: '5px',
            height: '500px',
            width: '400px',
            padding: '25px',
            margin: '25px',
            display: 'inline-block',
            overflow: 'hidden',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}>
          <img 
            src={this.props.data.image}
            style={{
              height: '250px',
              width: '100%',
            }}
          />
          <div className="portfolio-piece-text">
            <h3>{this.props.data.title}</h3>
            <Moment>{this.props.data.date}</Moment>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default PortfolioContainer;
