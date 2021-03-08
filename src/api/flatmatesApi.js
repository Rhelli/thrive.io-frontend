import humps from 'humps';
import {
  fetchFlatmatesRequest, fetchFlatmatesSuccess, fetchFlatmatesError,
} from '../state/flatmates/flatmatesActions';

const fetchFlatmatesApiRequest = () => dispatch => {
  dispatch(fetchFlatmatesRequest);
  fetch('http://localhost:3001/api/v1/flatmates', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(fetchFlatmatesSuccess(data));
      }
    })
    .catch(error => {
      dispatch(fetchFlatmatesError(error.message));
    });
};

export default fetchFlatmatesApiRequest;
