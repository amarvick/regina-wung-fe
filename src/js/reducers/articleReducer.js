
import ArticleActionTypes from '../actiontypes/articleActionTypes'

export default function reducer(state={
  articles: [],
  articlesFetching: false,
  articlesLoadingError: null,
}, action) {
  switch(action.type) {
    case ArticleActionTypes.FETCHING_ARTICLES: {
      return {
        ...state,
        articlesFetching: true
      }
    }

    case ArticleActionTypes.FETCH_ARTICLES_SUCCESS: {
      return {
        articlesLoadingError: null,
        articles: action.payload,
        articlesFetching: false,
      }
    }
    
    case ArticleActionTypes.FETCH_ARTICLES_ERROR: {
      return {
        ...state,
        articlesLoadingError: `${action.payload}`,
        articlesFetching: false,
      }
    }

    default: {}
  }
  return state;
}