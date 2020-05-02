import BlogActionTypes from '../actiontypes/blogActionTypes'

export function getBlogPosts() {
  return function action(dispatch) {
    dispatch({
      type: BlogActionTypes.FETCHING_BLOG_POSTS
    })
    fetch('http://localhost:9000/fetchBlogPosts') 
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