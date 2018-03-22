// @flow
import axios from 'axios';
import { request, success, error } from './genericActions';
import { GET_MOVIES, POST_MOVIE } from '../constants/reducerTypes';
import * as API from '../constants/API';

export const getMovies = () => (dispatch: Function): Promise<Object> => {
  const reducer = GET_MOVIES;
  dispatch(request(reducer));
  return axios.get(API.BASE_URL + API.WP_V2 +  API.MOVIES_EMBED)
    .then((response) => {
      dispatch(success(reducer, response.data));
      return response;
    })
    .catch((errors) => {
      dispatch(error(reducer, errors));
      return Promise.reject(errors);
    });
}

export const postMovie = (payload: Object) => (dispatch: Function): Promise<Object> => {
  const reducer = POST_MOVIE;
  dispatch(request(reducer));
  return axios.post(API.BASE_URL + API.WP_V2 + API.MOVIES, payload)
    .then((response) => {
      dispatch(success(reducer, response.data));
      return response;
    })
    .catch((errors) => {
      dispatch(error(reducer, errors));
      return Promise.reject(errors);
    });
}
