import CommentActionTypes from '../actiontypes/commentActionTypes'
import axios from 'axios';

export function getComments() {
  return function action(dispatch) {
    dispatch({
      type: CommentActionTypes.FETCHING_COMMENTS
    })
    axios.get('https://regina-wung-be.herokuapp.com/fetchComments')
      .then(res => {
        dispatch({
          type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
          payload: res.data
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