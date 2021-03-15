import axios from 'axios'
import setAuthToken from '../../auth/setAuthToken'
import jwt_decode from 'jwt-decode'

import AuthActionTypes from '../actiontypes/authActionTypes'

// Login - Get User Token
export function loginUser(password) {
  return function action(dispatch) {
    axios
      .post('http://localhost:9000/login', {password: 'testpassword'})
      .then(res => {
        // Save to localStorage
        // Set token to localStorage
        console.log(res);
        const { token } = res.data
        localStorage.setItem("jwtToken", token)

        // set Token to Auth header
        setAuthToken(token)

        // Decode token to get user data
        const decoded = jwt_decode(token)

        // Set current user
        dispatch(setCurrentUser(decoded))
      })

      .catch(err => {
        console.log(err)
        dispatch({
          type: AuthActionTypes.GET_ERRORS,
          payload: err.response.data
        })
      })
  }
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: AuthActionTypes.SET_CURRENT_USER,
    payload: decoded
  }
}

// User loading
export const setUserLoading = () => {
  return {
    type: AuthActionTypes.USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');

  // Remove auth header for future requests
  setAuthToken(false)

  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}
