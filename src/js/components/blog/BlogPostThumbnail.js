import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import './BlogPostThumbnail.scss';

Moment.globalFormat = 'MMM D, YYYY'

class BlogPostThumbnail extends React.Component {
  render() {
    return (
      <Link to={`/blog/${this.props.post.id}`}>
        <div className="blog-thumbnail">
          <div className="blog-image">
            <img 
              src={require(`../../../images/portfolio_images/ChapelHill.jpg`)}
              alt="Blog"
              style={{
                height: '300px',
                width: '300px',
              }}
            />
          </div>
          <div className="blog-post-text">
            <div className="blog-post-title">
              <h1>{this.props.post.title}</h1>
            </div>
            <div className="blog-post-description">
              <p>{this.props.post.content}</p>
            </div>
            <div className="blog-post-date">
              <span><b>{this.props.post.topic}</b></span> • 
              <Moment>{this.props.post.date}</Moment> • 
              <span>{this.props.post.commentCount} Comments</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default BlogPostThumbnail;