// @flow
import { request, success, error } from './genericActions';
import { GET_MOVIES } from '../constants/reducerTypes';
import * as API from '../constants/API';

export const getMovies = () => (dispatch: Function): Promise<Object> => {
  const reducer = GET_MOVIES;
  dispatch(request(reducer));
  return fetch(API.BASE_URL + API.MOVIES_EMBED)
    .then((response) => response.json())
    .then((response) => {
      dispatch(success(reducer, response));
      return response;
    })
    .catch((errors) => {
      dispatch(error(reducer, errors));
      return errors;
    });
}
