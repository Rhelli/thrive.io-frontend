import humps from 'humps';
import {
  fetchCurrentUserProfileRequest, fetchCurrentUserProfileSuccess,
  fetchCurrentUserProfileError,
} from '../state/userProfile/userProfileActions';

const { REACT_APP_REST_API_LOCATION } = process.env;

const fetchUserProfileApiRequest = () => dispatch => {
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

export default fetchUserProfileApiRequest;
