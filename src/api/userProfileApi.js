import humps from 'humps';
import {
  fetchCurrentUserProfileRequest, fetchCurrentUserProfileSuccess,
  fetchCurrentUserProfileError, updateCurrentUserProfileRequest,
  updateCurrentUserProfileSuccess, updateCurrentUserProfileError,
  deleteCurrentUserProfileRequest, deleteCurrentUserProfileSuccess,
  deleteCurrentUserProfileError,
} from '../state/userProfile/userProfileActions';

const { REACT_APP_REST_API_LOCATION } = process.env;

export const fetchUserProfileApiRequest = () => dispatch => {
  dispatch(fetchCurrentUserProfileRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/myaccount`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(fetchCurrentUserProfileSuccess(data));
      } else {
        dispatch(fetchCurrentUserProfileError(data.error));
      }
    })
    .catch(error => {
      dispatch(fetchCurrentUserProfileError(error.messages));
    });
};

export const updateCurrentUserProfileApiRequest = user => dispatch => {
  user.preventDefault();
  dispatch(updateCurrentUserProfileRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/myaccount/settings/edit-profile`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      user: {
        name: user.target.name.value,
        userType: user.target.userType.value,
        about: user.target.about.value,
        occupation: user.target.occupation.value,
        gender: user.target.gender.value,
        couple: user.target.couple.value,
        pets: user.target.pets.value,
        smoking: user.target.smoking.value,
        minBudget: user.target.minBudget.value,
        maxBudget: user.target.maxBudget.value,
        areasLooking: user.target.areasLooking.value,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(updateCurrentUserProfileSuccess(data));
      } else {
        dispatch(updateCurrentUserProfileError(data.error));
      }
    })
    .catch(error => {
      dispatch(updateCurrentUserProfileError(error));
    });
};

export const deleteCurrentUserProfileApiRequest = user => dispatch => {
  user.preventDefault();
  dispatch(deleteCurrentUserProfileRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/myaccount/settings/delete-profile`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      user: {
        email: user.target.email.value,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.errors) {
        dispatch(deleteCurrentUserProfileSuccess(data));
      } else {
        dispatch(deleteCurrentUserProfileError(data.error));
      }
    })
    .catch(error => {
      dispatch(deleteCurrentUserProfileError(error));
    });
};
