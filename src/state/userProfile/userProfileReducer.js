import {
  FETCH_CURRENT_USER_PROFILE_REQUEST, FETCH_CURRENT_USER_PROFILE_SUCCESS,
  FETCH_CURRENT_USER_PROFILE_ERROR, UPDATE_CURRENT_USER_PROFILE_REQUEST,
  UPDATE_CURRENT_USER_PROFILE_SUCCESS, UPDATE_CURRENT_USER_PROFILE_ERROR,
  DELETE_CURRENT_USER_PROFILE_REQUEST, DELETE_CURRENT_USER_PROFILE_SUCCESS,
  DELETE_CURRENT_USER_PROFILE_ERROR,
} from './userProfileTypes';

const initialState = {
  loading: true,
  userProfile: {},
  error: '',
  message: '',
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_PROFILE_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_CURRENT_USER_PROFILE_SUCCESS: return {
      ...state,
      loading: false,
      userProfile: action.payload,
      error: '',
    };

    case FETCH_CURRENT_USER_PROFILE_ERROR: return {
      ...state,
      loading: false,
      userProfile: {},
      error: action.payload,
    };

    case UPDATE_CURRENT_USER_PROFILE_REQUEST: return {
      ...state,
      loading: true,
    };

    case UPDATE_CURRENT_USER_PROFILE_SUCCESS: return {
      ...state,
      loading: false,
      userProfile: action.payload,
      error: '',
    };

    case UPDATE_CURRENT_USER_PROFILE_ERROR: return {
      ...state,
      loading: false,
      userProfile: {},
      error: action.payload,
    };

    case DELETE_CURRENT_USER_PROFILE_REQUEST: return {
      ...state,
      loading: true,
    };

    case DELETE_CURRENT_USER_PROFILE_SUCCESS: return {
      ...state,
      loading: false,
      userProfile: {},
      error: '',
      message: action.payload,
    };

    case DELETE_CURRENT_USER_PROFILE_ERROR: return {
      ...state,
      loading: false,
      userProfile: {},
      error: action.payload,
    };

    default: return state;
  }
};

export default userProfileReducer;
