import CommentActionTypes from '../actiontypes/commentActionTypes';

export default function reducer(state={
  comments: [],
  commentsFetching: false,
  commentsLoadingError: null,
}, action) {
  switch(action.type) {
    case CommentActionTypes.FETCHING_COMMENTS: {
      return {
        ...state,
        commentsFetching: true
      }
    }

    case CommentActionTypes.FETCH_COMMENTS_SUCCESS: {
      return {
        commentsLoadingError: null,
        comments: action.payload,
        commentsFetching: false,
      }
    }
    
    case CommentActionTypes.FETCH_COMMENTS_ERROR: {
      return {
        ...state,
        commentsLoadingError: `${action.payload}`,
        commentsFetching: false,
      }
    }

    default: {}
  }
  return state;
}