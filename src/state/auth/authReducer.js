import { SET_USER, SIGN_OUT, AUTH_ERROR } from './authTypes';

const initialState = {
  signedIn: false,
  user: {},
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
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
      error: action.payload,
    };

    default: return state;
  }
};

export default authReducer;
