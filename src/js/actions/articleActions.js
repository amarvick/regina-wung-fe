import ArticleActionTypes from '../actiontypes/articleActionTypes'

import data from '../../data/data.json';

export function getArticles() {
  return function action(dispatch) {
    dispatch({
      type: ArticleActionTypes.FETCHING_ARTICLES
    })
    dispatch({
      type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
      payload: data
    })
  }
}