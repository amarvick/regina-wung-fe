import BlogActionTypes from '../actiontypes/blogActionTypes';
import axios from 'axios';

export function getBlogPosts() {
  return function action(dispatch) {
    dispatch({
      type: BlogActionTypes.FETCHING_BLOG_POSTS
    })
    axios.get('https://regina-wung-be.herokuapp.com/fetchBlogPosts') 
      .then(res => {
        dispatch({
          type: BlogActionTypes.FETCH_BLOG_POSTS_SUCCESS,
          payload: res.data
        })
      }) 

      .catch(function(error) {
        dispatch({
          type: BlogActionTypes.FETCH_BLOG_POSTS_ERROR,
          payload: error
        })
      })
  }
}