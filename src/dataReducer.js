import {
    GET_DATA_FULFILLED,
    GET_DATA_PENDING,
    GET_DATA_REJECTED,
  } from './actions';

  export const initialState = {
    results: [],
    loading: false,
    loaded: false,
    error: null,
  };

  export default function reducer(state = initialState, action) {

    console.log(action)
    switch (action.type) {

      case GET_DATA_PENDING:
        return {
          ...state,
          error: null,
          loading: true,
          loaded: false,
        };


      case GET_DATA_FULFILLED: {
        return {
          ...state,
          error: null,
          loading: false,
          loaded: true,
          results: action.payload.results,
        };
      }

      case GET_DATA_REJECTED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  }