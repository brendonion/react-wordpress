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

export const loginSuccess = (data, user) => ({
  name: AUTH,
  type: LOGIN_SUCCESS,
  data,
  user
});

export const loginRequest = () => ({
  name: AUTH,
  type: LOGIN_REQUEST,
});

export const loginError = (errorMessage) => ({
  name: AUTH,
  type: LOGIN_ERROR,
  errorMessage
});

export const logoutSuccess = () => ({
  name: AUTH,
  type: LOGOUT_SUCCESS
});

export const userProfileChange = (user) => ({
  name: AUTH,
  type: USER_PROFILE_CHANGE,
  user
});

export const login = (requestData) => (dispatch) => {
  dispatch(loginRequest());


  // Auth.onSignedIn(fakeResponse);
  // dispatch(loginSuccess(fakeResponse.data, fakeResponse.data.user_data));
  
  // const { email, password } = requestData;
  // axios.post(API.BASE_URL + API.LOGIN, {
  //   email,
  //   password
  // }).then(response => {
  //   const successful = Handlers.handleResponse(response);
  //   if (successful) {
  //     Auth.onSignedIn(response);
  //     dispatch(loginSuccess(response.data, response.data.user_data));
  //   } else {
  //     dispatch(loginError(response));
      
  //     const err = { response };
  //     dispatch(toastErrorMessage(err));
  //   }
    
  // }).catch(err => {
  //   dispatch(loginError(err));
  //   dispatch(toastErrorMessage(err));
  // });
}

export const logout = () => (dispatch) => {
  Auth.onSignedOut();
  dispatch(logoutSuccess());
}

export const signup = (payload: Object) =>  (dispatch: Function) => {
  const reducer = SIGNUP;
  dispatch(request(reducer));
  return axios.post(API.BASE_URL + API.WP_V2 + API.USERS, payload)
    .then((response) => {
      dispatch(success(reducer, response.data));
      return response;
    })
    .catch((errors) => {
      dispatch(error(reducer, errors));
      return Promise.reject(errors);
    });
}
