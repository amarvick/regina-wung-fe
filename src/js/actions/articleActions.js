import ArticleActionTypes from '../actiontypes/articleActionTypes'
import axios from 'axios';

export function getArticles() {
  return function action(dispatch) {
    dispatch({
      type: ArticleActionTypes.FETCHING_ARTICLES
    })
    axios.get('https://regina-wung-be.herokuapp.com/fetchArticles') 
      .then(res => {
        dispatch({
          type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
          payload: res.data
        })
      }) 

      .catch(function(error) {
        dispatch({
          type: ArticleActionTypes.FETCH_ARTICLES_ERROR,
          payload: error
        })
      })
  }
}