import { createReducer } from './reducers';
import { genericReducer } from './generic';
import { SIGNUP } from '../constants/reducerTypes';

const authReducers = {
  [SIGNUP]: createReducer(genericReducer, SIGNUP),
};

export default authReducers;
