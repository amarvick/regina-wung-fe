import React from 'react';
import './Articles.scss';

class ArticleError extends React.Component {
  render() {
    return (
      <div id="article-error">
        <p>Sorry, but the articles failed to load. You can try to load again by clicking on the button or refreshing the page.</p>
        <button className="reload-data-button" onClick={this.props.reloadArticles}>Reload</button>
        <p>Alternatively, if the articles still aren't loading, you can view them on 
            my <a href="https://www.linkedin.com/in/reginawung" rel="noopener noreferrer" target="_blank">
            LinkedIn!
        </a>
        </p>
        <p>Error: {this.props.error}</p>
      </div> 
    );
  }
}

export default ArticleError;
