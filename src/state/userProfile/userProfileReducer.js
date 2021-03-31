import {
  FETCH_CURRENT_USER_PROFILE_REQUEST, FETCH_CURRENT_USER_PROFILE_SUCCESS,
  FETCH_CURRENT_USER_PROFILE_ERROR,
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

    default: return state;
  }
};

export default userProfileReducer;
