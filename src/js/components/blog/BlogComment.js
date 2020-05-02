import React, { Component } from 'react';
import BlogCommentReply from './BlogCommentReply';
import './BlogComment.scss';

class BlogComment extends Component {   
  constructor(props) {
    super(props);

    this.state = {
      showReplyText: false,
    }
  }

  toggleReplyText() {
    this.setState(prevState => {
      return {
        showReplyText: !prevState.showReplyText,
      }
    })
  }

  replyToComment() {
    const commentId = this.props.comment.id;
  }

  render() {
    const nestedComments = this.props.comment.responses.map(c => {
      return <BlogComment margin={25} comment={c}/>
    });
    return (
      <div className="blog-comment-container" style={{margin: this.props.margin}}>   
        <span><b>{this.props.comment.name}</b></span> • <span className="blog-comment-date">{this.props.comment.date}</span>
        <p>{this.props.comment.text}</p>
        {this.state.showReplyText ? <BlogCommentReply /> : null}
        <span onClick={() => this.toggleReplyText()}>Reply</span>
        {nestedComments}
      </div>
    );
  }
}

export default BlogComment;
