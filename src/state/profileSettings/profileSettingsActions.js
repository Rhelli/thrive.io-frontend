import {
  UPDATE_CURRENT_USER_PROFILE_REQUEST, UPDATE_CURRENT_USER_PROFILE_SUCCESS,
  UPDATE_CURRENT_USER_PROFILE_ERROR, DELETE_CURRENT_USER_PROFILE_REQUEST,
  DELETE_CURRENT_USER_PROFILE_SUCCESS, DELETE_CURRENT_USER_PROFILE_ERROR,
  UPDATE_CURRENT_USER_EMAIL_REQUEST, UPDATE_CURRENT_USER_EMAIL_SUCCESS,
  UPDATE_CURRENT_USER_EMAIL_ERROR, UPDATE_CURRENT_USER_PASSWORD_REQUEST,
  UPDATE_CURRENT_USER_PASSWORD_SUCCESS, UPDATE_CURRENT_USER_PASSWORD_ERROR,
} from './profileSettingsTypes';

export const updateCurrentUserProfileRequest = () => ({
  type: UPDATE_CURRENT_USER_PROFILE_REQUEST,
});

export const updateCurrentUserProfileSuccess = user => ({
  type: UPDATE_CURRENT_USER_PROFILE_SUCCESS,
  payload: user,
});

export const updateCurrentUserProfileError = error => ({
  type: UPDATE_CURRENT_USER_PROFILE_ERROR,
  payload: error,
});

export const deleteCurrentUserProfileRequest = () => ({
  type: DELETE_CURRENT_USER_PROFILE_REQUEST,
});

export const deleteCurrentUserProfileSuccess = confirmation => ({
  type: DELETE_CURRENT_USER_PROFILE_SUCCESS,
  payload: confirmation,
});

export const deleteCurrentUserProfileError = error => ({
  type: DELETE_CURRENT_USER_PROFILE_ERROR,
  payload: error,
});

export const updateCurrentUserEmailRequest = () => ({
  type: UPDATE_CURRENT_USER_EMAIL_REQUEST,
});

export const updateCurrentUserEmailSuccess = user => ({
  type: UPDATE_CURRENT_USER_EMAIL_SUCCESS,
  payload: user,
});

export const updateCurrentUserEmailError = error => ({
  type: UPDATE_CURRENT_USER_EMAIL_ERROR,
  payload: error,
});

export const updateCurrentUserPasswordRequest = () => ({
  type: UPDATE_CURRENT_USER_PASSWORD_REQUEST,
});

export const updateCurrentUserPasswordSuccess = user => ({
  type: UPDATE_CURRENT_USER_PASSWORD_SUCCESS,
  payload: user,
});

export const updateCurrentUserPasswordError = error => ({
  type: UPDATE_CURRENT_USER_PASSWORD_ERROR,
  payload: error,
});
