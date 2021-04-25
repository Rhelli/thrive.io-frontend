import {
  FETCH_FLATMATES_REQUEST, FETCH_FLATMATES_SUCCESS,
  FETCH_FLATMATES_ERROR, FETCH_SINGLE_FLATMATE,
} from './flatmatesTypes';

export const fetchFlatmatesRequest = () => ({
  type: FETCH_FLATMATES_REQUEST,
});

export const fetchFlatmatesSuccess = flatmates => ({
  type: FETCH_FLATMATES_SUCCESS,
  payload: flatmates,
});

export const fetchFlatmatesError = error => ({
  type: FETCH_FLATMATES_ERROR,
  payload: error,
});

export const fetchSingleFlatmate = flatmate => ({
  type: FETCH_SINGLE_FLATMATE,
  payload: flatmate,
});
