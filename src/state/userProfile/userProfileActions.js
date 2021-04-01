import {
  FETCH_CURRENT_USER_PROFILE_REQUEST, FETCH_CURRENT_USER_PROFILE_SUCCESS,
  FETCH_CURRENT_USER_PROFILE_ERROR,
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
