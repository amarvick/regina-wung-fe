import BlogActionTypes from '../actiontypes/blogActionTypes'

export function getBlogPosts() {
  return function action(dispatch) {
    dispatch({
      type: BlogActionTypes.FETCHING_BLOG_POSTS
    })
    fetch('https://regina-wung-be.herokuapp.com/fetchBlogPosts', {mode: 'cors'}) 
      .then(data => data.json())
      .then(res => {
        dispatch({
          type: BlogActionTypes.FETCH_BLOG_POSTS_SUCCESS,
          payload: res
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