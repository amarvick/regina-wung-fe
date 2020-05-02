
import BlogActionTypes from '../actiontypes/blogActionTypes'

export default function reducer(state={
  blogPosts: [],
  blogPostsFetching: false,
  blogPostsLoadingError: null,
}, action) {
  switch(action.type) {
    case BlogActionTypes.FETCHING_BLOG_POSTS: {
      return {
        ...state,
        blogPostsFetching: true
      }
    }

    case BlogActionTypes.FETCH_BLOG_POSTS_SUCCESS: {
      return {
        blogPostsLoadingError: null,
        blogPosts: action.payload,
        blogPostsFetching: false,
      }
    }
    
    case BlogActionTypes.FETCH_BLOG_POSTS_ERROR: {
      return {
        ...state,
        blogPostsLoadingError: `${action.payload}`,
        blogPostsFetching: false,
      }
    }

    default: {}
  }
  return state;
}