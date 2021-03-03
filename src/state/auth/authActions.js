import { SET_USER, SIGN_OUT, AUTH_ERROR } from './authTypes';

export const setUser = payload => ({
  type: SET_USER,
  payload,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const authError = payload => ({
  type: AUTH_ERROR,
  payload,
});
