/* eslint-disable no-unused-vars */
import {
  FETCH_CURRENT_USER_PROFILE_REQUEST, FETCH_CURRENT_USER_PROFILE_SUCCESS,
  FETCH_CURRENT_USER_PROFILE_ERROR, UPDATE_CURRENT_USER_PROFILE_REQUEST,
  UPDATE_CURRENT_USER_PROFILE_SUCCESS, UPDATE_CURRENT_USER_PROFILE_ERROR,
  DELETE_CURRENT_USER_PROFILE_REQUEST, DELETE_CURRENT_USER_PROFILE_SUCCESS,
  DELETE_CURRENT_USER_PROFILE_ERROR,
} from './userProfileTypes';

export const fetchCurrentUserProfileRequest = () => ({
  type: FETCH_CURRENT_USER_PROFILE_REQUEST,
});

export const fetchCurrentUserProfileSuccess = user => ({
  type: FETCH_CURRENT_USER_PROFILE_SUCCESS,
  payload: user,
});

export const fetchCurrentUserProfileError = error => ({
  type: FETCH_CURRENT_USER_PROFILE_ERROR,
  payload: error,
});

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
