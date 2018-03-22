import { createReducer } from './reducers';
import { genericReducer } from './generic';
import { GET_MOVIES, POST_MOVIE } from '../constants/reducerTypes';

const movieReducers = {
  [GET_MOVIES]: createReducer(genericReducer, GET_MOVIES),
  [POST_MOVIE]: createReducer(genericReducer, POST_MOVIE),
};

export default movieReducers;
