import { combineReducers } from 'redux';

import authReducer from './auth';
import authReducers from './authReducers';
import movieReducers from './movieReducers';
import mediaReducers from './mediaReducers';
import { LOGOUT_SUCCESS } from '../constants/actionTypes';

export function createReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return reducerFunction(state, action);
  }
}

const appReducer = combineReducers({
  authReducer,
  ...authReducers,
  ...movieReducers,
  ...mediaReducers,
});

const rootReducer = (state, action) => {
  if (action.name === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
