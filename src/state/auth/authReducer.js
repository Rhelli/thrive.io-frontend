import {
  SET_USER, SIGN_OUT, AUTH_ERROR, LOAD_USER,
} from './authTypes';

const initialState = {
  loading: true,
  signedIn: false,
  user: {},
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: return {
      ...state,
      loading: true,
    };

    case SET_USER:
      return {
        loading: false,
        signedIn: true,
        user: { ...action.payload },
        error: '',
      };

    case SIGN_OUT:
      localStorage.clear();
      return {
        ...state,
        loggedIn: false,
        user: {},
      };

    case AUTH_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
    };

    default: return state;
  }
};

export default authReducer;
