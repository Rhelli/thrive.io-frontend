import humps from 'humps';
import {
  updateCurrentUserProfileRequest, updateCurrentUserProfileSuccess,
  updateCurrentUserProfileError, deleteCurrentUserProfileRequest,
  deleteCurrentUserProfileSuccess, deleteCurrentUserProfileError,
  updateCurrentUserEmailRequest, updateCurrentUserEmailSuccess,
  updateCurrentUserEmailError, updateCurrentUserPasswordRequest,
  updateCurrentUserPasswordSuccess, updateCurrentUserPasswordError,
} from '../state/profileSettings/profileSettingsActions';
import {
  deletePropertyRequest, deletePropertySuccess, deletePropertyError,
} from '../state/property/propertyActions';

const { REACT_APP_REST_API_LOCATION } = process.env;

export const updateCurrentUserProfileApiRequest = updatedDetails => dispatch => {
  dispatch(updateCurrentUserProfileRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/myaccount/settings/edit-profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      user: {
        name: updatedDetails.name,
        user_type: updatedDetails.userType,
        advertiser_type: updatedDetails.advertiserType,
        about: updatedDetails.about,
        occupation: updatedDetails.occupation,
        gender: updatedDetails.gender,
        couple: updatedDetails.couple,
        pets: updatedDetails.pets,
        smoking: updatedDetails.smoking,
        min_budget: updatedDetails.minBudget,
        max_budget: updatedDetails.maxBudget,
        areas_looking: updatedDetails.areasLooking,
        email: updatedDetails.email,
        id: updatedDetails.id,
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

export const updateCurrentUserEmailApiRequest = updatedEmail => dispatch => {
  dispatch(updateCurrentUserEmailRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/myaccount/settings/edit-profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      user: {
        id: updatedEmail.target.id.value,
        email: updatedEmail.target.email.value,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(updateCurrentUserEmailSuccess(data));
      } else {
        dispatch(updateCurrentUserEmailError(data.error));
      }
    })
    .catch(error => {
      dispatch(updateCurrentUserEmailError(error));
    });
};

export const deleteCurrentUserProfileApiRequest = user => dispatch => {
  user.preventDefault();
  dispatch(deleteCurrentUserProfileRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/myaccount/settings/delete-profile`, {
    method: 'DELETE',
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

export const updateCurrentUserPasswordApiRequest = passwordData => dispatch => {
  dispatch(updateCurrentUserPasswordRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: passwordData.email,
        password: passwordData.currentPassword,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        fetch(`${REACT_APP_REST_API_LOCATION}/myaccount/settings/edit-profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accepts: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            user: {
              id: passwordData.id,
              password: passwordData.newPassword,
            },
          }),
        })
          .then(data => data.json())
          .then(data => humps.camelizeKeys(data))
          .then(data => {
            if (!data.error) {
              dispatch(updateCurrentUserPasswordSuccess(data));
            }
          })
          .catch(error => {
            dispatch(updateCurrentUserPasswordError(error));
          });
      }
    })
    .catch(error => {
      dispatch(updateCurrentUserPasswordError(error));
    });
};

export const updateCurrentUserTypeApiRequest = (updatedDetails, propertyIds) => dispatch => {
  dispatch(deletePropertyRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/delete-managed-properties`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      properties: {
        propertyIds,
      },
    }),
  })
    .then(data => data.json())
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(deletePropertySuccess(data.message));
      }
    })
    .then(
      updateCurrentUserProfileRequest(updatedDetails),
    )
    .catch(error => {
      dispatch(deletePropertyError(error.messages));
    });
};
