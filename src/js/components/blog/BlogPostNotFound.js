import React, { Component } from 'react';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import './BlogPostNotFound.scss';

class BlogPostNotFound extends Component {
  render() {
    return (
      <div className="blog-post-not-found-container">
        <h5>The blog post does not exist :( Click the button to go back to the blog.</h5><br/>
        <Link to='/blog'>
          <Button label="Go back"/>
        </Link>
      </div>
    );
  }
}

export default BlogPostNotFound;
