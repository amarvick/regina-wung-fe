import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Button from '../utils/Button';
import './BlogPost.scss';

class BlogCommentReply extends Component {   
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  handleChange(e) {
    this.setState({
      comment: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Input 
          type="textarea" 
          rows={3}
          onChange={e => this.handleChange(e)}
        /><br/>
        <Button onclick={() => {}} label="Reply"/>
      </div>
    );
  }
}

export default BlogCommentReply;
