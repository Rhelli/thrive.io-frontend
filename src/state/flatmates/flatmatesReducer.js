import {
  FETCH_FLATMATES_REQUEST, FETCH_FLATMATES_SUCCESS,
  FETCH_FLATMATES_ERROR, FETCH_SINGLE_FLATMATE,
} from './flatmatesTypes';

const initialState = {
  loading: false,
  flatmates: {},
  singleFlatmate: [],
  error: '',
  message: '',
};

const flatmatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLATMATES_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_FLATMATES_SUCCESS: return {
      ...state,
      loading: false,
      flatmates: action.payload,
      error: '',
    };

    case FETCH_FLATMATES_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
      flatmates: [],
    };

    case FETCH_SINGLE_FLATMATE: return {
      ...state,
      singleFlatmate: action.payload,
    };

    default: return state;
  }
};

export default flatmatesReducer;
