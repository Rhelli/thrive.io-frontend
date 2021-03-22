import {
  UPDATE_CURRENT_USER_PROFILE_REQUEST, UPDATE_CURRENT_USER_PROFILE_SUCCESS,
  UPDATE_CURRENT_USER_PROFILE_ERROR, DELETE_CURRENT_USER_PROFILE_REQUEST,
  DELETE_CURRENT_USER_PROFILE_SUCCESS, DELETE_CURRENT_USER_PROFILE_ERROR,
  UPDATE_CURRENT_USER_EMAIL_REQUEST, UPDATE_CURRENT_USER_EMAIL_SUCCESS,
  UPDATE_CURRENT_USER_EMAIL_ERROR, UPDATE_CURRENT_USER_PASSWORD_REQUEST,
  UPDATE_CURRENT_USER_PASSWORD_SUCCESS, UPDATE_CURRENT_USER_PASSWORD_ERROR,
} from './profileSettingsTypes';

const initialState = {
  loading: true,
  userProfile: {},
  error: '',
  message: '',
};

const profileSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case UPDATE_CURRENT_USER_EMAIL_REQUEST: return {
      ...state,
      loading: true,
    };

    case UPDATE_CURRENT_USER_EMAIL_SUCCESS: return {
      ...state,
      loading: false,
      userProfile: action.payload,
      error: '',
    };

    case UPDATE_CURRENT_USER_EMAIL_ERROR: return {
      ...state,
      loading: false,
      userProfile: {},
      error: action.payload,
    };

    case UPDATE_CURRENT_USER_PASSWORD_REQUEST: return {
      ...state,
      loading: true,
    };

    case UPDATE_CURRENT_USER_PASSWORD_SUCCESS: return {
      ...state,
      loading: false,
      userProfile: action.payload,
      error: '',
    };

    case UPDATE_CURRENT_USER_PASSWORD_ERROR: return {
      ...state,
      loading: false,
      userProfile: {},
      error: action.payload,
    };

    default: return state;
  }
};

export default profileSettingsReducer;
