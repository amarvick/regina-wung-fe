import CommentActionTypes from '../actiontypes/commentActionTypes'

export function getComments() {
  return function action(dispatch) {
    dispatch({
      type: CommentActionTypes.FETCHING_COMMENTS
    })
    fetch('http://localhost:9000/fetchComments') 
      .then(data => data.json())
      .then(res => {
        dispatch({
          type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
          payload: res
        })
      }) 

      .catch(function(error) {
        dispatch({
          type: CommentActionTypes.FETCH_COMMENTS_ERROR,
          payload: error
        })
      })
  }
}