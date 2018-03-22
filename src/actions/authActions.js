// @flow
import axios from 'axios';
import { request, success, error } from './genericActions';
import Auth from '../handlers/auth';
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_PROFILE_CHANGE
} from '../constants/actionTypes';
import { AUTH, SIGNUP } from '../constants/reducerTypes';
import * as API from '../constants/API';

export const loginSuccess = (data: Object, user: Object) => ({
  name: AUTH,
  type: LOGIN_SUCCESS,
  data,
  user
});

export const loginRequest = () => ({
  name: AUTH,
  type: LOGIN_REQUEST,
});

export const loginError = (errorMessage: string) => ({
  name: AUTH,
  type: LOGIN_ERROR,
  errorMessage
});

export const logoutSuccess = () => ({
  name: AUTH,
  type: LOGOUT_SUCCESS
});

export const userProfileChange = (user: Object) => ({
  name: AUTH,
  type: USER_PROFILE_CHANGE,
  user
});

export const login = (username: string, password: string) => (dispatch: Function) => {
  dispatch(loginRequest());

  return axios.post(API.BASE_URL + API.JWT + API.TOKEN, {
    username,
    password
  }).then((response) => {
    dispatch(loginSuccess(response.data, response.data.user_email));
    Auth.onSignedIn(response);
    return response;
  }).catch((errors) => {
    dispatch(loginError(errors));
    return Promise.reject(errors);
  });
}

export const logout = () => (dispatch: Function) => {
  Auth.onSignedOut();
  dispatch(logoutSuccess());
}

export const signup = (payload: Object) =>  (dispatch: Function) => {
  const reducer = SIGNUP;
  dispatch(request(reducer));
  return axios.post(API.BASE_URL + API.WP_V2 + API.USERS, {
    ...payload,
    roles: ['subscriber']
  })
    .then((response) => {
      dispatch(success(reducer, response.data));
      dispatch(login(payload.username, payload.password));
      return response;
    })
    .catch((errors) => {
      dispatch(error(reducer, errors));
      return Promise.reject(errors);
    });
}
