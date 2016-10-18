import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({username, password}) {

  return function(dispatch) {
    //Submit email, password to the server
    axios.post(`${ROOT_URL}/signin`, {username, password})
      .then(response => {
        //If request is good, we need to update state to indicate user is auth'd
        dispatch({type: AUTH_USER, })
        //Save the JWT token
        localStorage.setItem('token', response.data.token);
        //Redirect to '/home' feature
        browserHistory.push('/home');
      })
      .catch(() => {
        //If request is bad, show an error to the user
        dispatch(authError('Username/Password combination not recognized'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser(){
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  };
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      });
  }
}
