import React, { Component } from 'react';
import Button from '../utils/Button';
import BlogComments from './BlogComments.js';
import { Link } from 'react-router-dom';
import './BlogPost.scss';

class BlogPost extends Component {
  render() {
    const previousArticle = this.props.previousArticle !== null ? (
      <span id="previous-article">
        <Link to={`/blog/${this.props.previousArticle.id}`}>
          Previous Article: {this.props.previousArticle.title}
        </Link>
      </span>
    ) : null;

    const nextArticle = this.props.nextArticle !== null ? (
      <span id="next-article">
        <Link to={`/blog/${this.props.nextArticle.id}`}>
          Next Article: {this.props.nextArticle.title}
        </Link>
      </span>
    ) : null;

    return (
      <div className="blog-post-container">
        <div className="blog-post-text">
          <h1 id="blog-post-title">{this.props.post.title}</h1>
          <p id="blog-post-info">Regina Wung • {this.props.post.date} • {this.props.post.topic}</p>
          <p id="blog-post-content">{this.props.post.content}</p>
        </div>  
        <div className='blog-options'>
          {previousArticle}
          {nextArticle}
        </div>
        <br/>
        <Link to='/blog'>
          <Button label="Go Back"/>
        </Link>
        <BlogComments comments={this.props.post.comments ?? []} />
      </div>
    );
  }
}

export default BlogPost;
