import { createReducer } from './reducers';
import { GET_MOVIES, POST_MOVIE } from '../constants/reducerTypes';
import * as ActionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  length: -1,
  success: false,
  error: false,
  errorMessage: [],
  totalPages: 0,
  currentPage: 0,
};

function genericRequest(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {
        ...state,
        isFetching: true,
        success: false,
        error: false,
        errorMessage: [],
      };
    case ActionTypes.SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        error: false,
        data: action.data,
        length: action.length,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
      };
    case ActionTypes.SUCCESS_PAGINATED:
      return {
        ...state,
        isFetching: false,
        success: true,
        error: false,
        data: action.appendData ? [ ...state.data, ...action.data] : action.data,
        elementsFetched: action.elementsFetched,
        nextPageURL: action.nextPageURL,
        query: action.query,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        isFetching: false,
        success: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    case ActionTypes.REFRESH:
      return INITIAL_STATE;
    default: return state
  }
}

const genericReducers = {
  [GET_MOVIES]: createReducer(genericRequest, GET_MOVIES),
  [POST_MOVIE]: createReducer(genericRequest, POST_MOVIE),
};

export default genericReducers;
