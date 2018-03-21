import { combineReducers } from 'redux';
import genericReducers from './genericReducers';
import * as ReducerTypes from '../constants/reducerTypes';

export function createReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return reducerFunction(state, action);
  }
}

const appReducer = combineReducers({
  ...genericReducers,
});

const rootReducer = (state, action) => {
  if (action.name === ReducerTypes.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
