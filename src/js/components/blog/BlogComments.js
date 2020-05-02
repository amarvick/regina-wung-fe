import React, { Component } from 'react';
import BlogComment from './BlogComment';
import './BlogComments.scss';

class BlogComments extends Component {   
  render() {
    return (
      <div className="blog-comments-section-container">  
        <h1>Comments</h1> 
        <div className="blog-comments-container">
          {this.props.comments.map(comment => {
            return (
              <BlogComment margin={0} comment={comment}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default BlogComments;
