import { combineReducers } from 'redux';

import article from './articleReducer';
import auth from './authReducer';
import blog from './blogReducer';
import comment from './commentReducer';

export default combineReducers ({
  article,
  auth,
  blog,
  comment,
});