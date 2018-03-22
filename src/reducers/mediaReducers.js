import { createReducer } from './reducers';
import { genericReducer } from './generic';
import { UPLOAD_MEDIA } from '../constants/reducerTypes';

const mediaReducers = {
  [UPLOAD_MEDIA]: createReducer(genericReducer, UPLOAD_MEDIA),
};

export default mediaReducers;
