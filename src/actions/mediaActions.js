// @flow
import axios from 'axios';
import { request, success, error } from './genericActions';
import { UPLOAD_MEDIA } from '../constants/reducerTypes';
import * as API from '../constants/API';

export const uploadMedia = (payload: Object) => (dispatch: Function) => {
  const reducer = UPLOAD_MEDIA;
  dispatch(request(reducer));
  const formData = new FormData();
  formData.append('title', payload.name);
  formData.append('file', payload.file);
  
  return axios.post(API.BASE_URL + API.WP_V2 + API.MEDIA, formData)
    .then((response) => {
      dispatch(success(reducer, response.data));
      return response;
    })
    .catch((errors) => {
      dispatch(error(reducer, errors));
      return Promise.reject(errors);
    });
}
