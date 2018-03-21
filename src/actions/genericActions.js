import * as ActionTypes from '../constants/actionTypes';

export const success = (reducer, data) => {
  return {
    name: reducer,
    type: ActionTypes.SUCCESS,
    data: data,
  }
}

export const successPaginated = (reducer, data, appendData) => {
  return {
    name: reducer,
    type: ActionTypes.SUCCESS_PAGINATED,
    data: data.data,
    nextPageURL: data.links.next,
    appendData: appendData,
    query: data.query,
  }
}

export const request = (reducer) => {
  return {
    name: reducer,
    type: ActionTypes.REQUEST,
  }
}

export const error = (reducer, error) => {
  return {
    name: reducer,
    type: ActionTypes.ERROR,
    errorMessage: error.message,
    status: error.response ? error.response.status : null,
  }
}

export const refresh = (reducer) => {
  return {
    name: reducer,
    type: ActionTypes.REFRESH,
  }
}
