import humps from 'humps';
import {
  fetchCurrentUserProfileRequest, fetchCurrentUserProfileSuccess,
  fetchCurrentUserProfileError,
} from '../state/userProfile/userProfileActions';

const fetchUserProfileApiRequest = () => dispatch => {
  dispatch(fetchCurrentUserProfileRequest);
  fetch('http://localhost:3001/api/v1/myaccount', {
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
      }
    })
    .catch(error => {
      dispatch(fetchCurrentUserProfileError(error.messages));
    });
};

export default fetchUserProfileApiRequest;
