import * as types from './actions';
import { RSAA } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'

  export const getData = () => ({
    [RSAA]: {
      endpoint: 'https://swapi.co/api/people',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [types.GET_DATA_PENDING, types.GET_DATA_FULFILLED, types.GET_DATA_REJECTED]
    }
  })
