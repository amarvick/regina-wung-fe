import React from 'react';
import Moment from 'react-moment';
import './ArticleContainer.scss';

Moment.globalFormat = 'MMM D, YYYY';

class ArticleContainer extends React.Component {
  render() {
    return (
      <a title={this.props.data.title} key={`article-${this.props.index}`} className="article" href={this.props.data.link} target="_blank" rel="noopener noreferrer">
        <img 
          src={require(`../../../images/portfolio_images/${this.props.data.image}`)}
          alt="Blog"
          className="article-image"
        />
        <div className="article-text">
          <div className="article-title" role="group">
            <h3>{this.props.data.title}</h3>
          </div>
          <div className="article-date-publication">
            <Moment>{this.props.data.date}</Moment> • {this.props.data.publication}
          </div>
          <div className="article-description">
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default ArticleContainer;
