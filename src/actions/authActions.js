import axios from 'axios';
import { PROD_URL } from '../helpers/constants';

export function setToken(authToken) {
  return {
    type: 'SET_TOKEN',
    authToken,
  };
}

export function requestLogin() {
  return {
    type: 'REQUEST_LOGIN',
  };
}

export function receiveLogin(authToken) {
  return {
    type: 'RECEIVE_LOGIN',
    authToken,
  };
}

export function receiveLoginError(error) {
  return {
    type: 'RECEIVE_LOGIN_ERROR',
    error,
  };
}

export function requestSignUp() {
  return {
    type: 'REQUEST_SIGNUP',
  };
}

export function receiveSignUp(authToken) {
  return {
    type: 'RECEIVE_SIGNUP',
    authToken,
  };
}

export function receiveSignUpError(error) {
  return {
    type: 'RECEIVE_SIGNUP_ERROR',
    error,
  };
}

export function loginCall(loginInfo) {
  return dispatch => {
    dispatch(requestLogin);
    const data = axios.post(`${PROD_URL}/auth/login`, loginInfo)
      .then(response => {
        console.log(response);
        dispatch(receiveLogin(response.data.auth_token));
      }).catch(error => {
        dispatch(receiveLoginError(error.message));
      });
    return data;
  };
}

export function signUpCall(signUpInfo) {
  return dispatch => {
    dispatch(requestSignUp);
    return axios.post(`${PROD_URL}/signup`, signUpInfo)
      .then(response => {
        dispatch(receiveSignUp(response.data.auth_token));
      }).catch(error => {
        dispatch(receiveSignUpError(error.message));
      });
  };
}
