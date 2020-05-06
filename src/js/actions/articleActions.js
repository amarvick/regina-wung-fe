import ArticleActionTypes from '../actiontypes/articleActionTypes'

export function getArticles() {
  return function action(dispatch) {
    dispatch({
      type: ArticleActionTypes.FETCHING_ARTICLES
    })
    fetch('https://regina-wung-be.herokuapp.com/fetchArticles', {mode: 'cors'}) 
      .then(data => data.json())
      .then(res => {
        dispatch({
          type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
          payload: res
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