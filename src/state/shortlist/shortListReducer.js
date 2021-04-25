import {
  CREATE_SHORTLIST_ITEM_REQUEST, CREATE_SHORTLIST_ITEM_SUCCESS,
  CREATE_SHORTLIST_ITEM_ERROR, DELETE_SHORTLIST_ITEM_REQUEST,
  DELETE_SHORTLIST_ITEM_SUCCESS, DELETE_SHORTLIST_ITEM_ERROR,
} from './shortlistTypes';

const initialState = {
  loading: true,
  error: '',
  message: '',
};

const shortlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHORTLIST_ITEM_REQUEST: return {
      ...state,
      loading: true,
    };

    case CREATE_SHORTLIST_ITEM_SUCCESS: return {
      ...state,
      loading: false,
    };

    case CREATE_SHORTLIST_ITEM_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
    };

    case DELETE_SHORTLIST_ITEM_REQUEST: return {
      ...state,
      loading: true,
    };

    case DELETE_SHORTLIST_ITEM_SUCCESS: return {
      ...state,
      loading: false,
      message: action.payload,
    };

    case DELETE_SHORTLIST_ITEM_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
    };

    default: return state;
  }
};

export default shortlistReducer;
