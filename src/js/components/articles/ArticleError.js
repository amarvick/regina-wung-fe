import React from 'react';
import './Articles.scss';
import Button from '../utils/Button';

class ArticleError extends React.Component {
  render() {
    return (
      <div id="article-error">
        <p>Sorry, but the articles failed to load. You can try to load again by clicking on the button or refreshing the page.</p>
        <Button 
          onClick={this.props.reloadArticles}
          label="Reload"
        />
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
