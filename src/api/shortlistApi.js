import humps from 'humps';
import {
  deleteShortlistItemRequest, deleteShortlistItemSuccess, deleteShortlistItemError,
  createShortlistItemRequest, createShortlistItemSuccess, createShortlistItemError,
} from '../state/shortlist/shortlistActions';

const { REACT_APP_REST_API_LOCATION } = process.env;

export const createShortlistedProperty = property => dispatch => {
  dispatch(createShortlistItemRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/new-shortlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      shortlist: {
        property_id: property.id,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.errors) {
        dispatch(createShortlistItemSuccess(data));
      } else {
        dispatch(createShortlistItemError(data));
      }
    })
    .catch(error => {
      dispatch(createShortlistItemError(error));
    });
};

export const deleteShortlistedProperty = property => dispatch => {
  dispatch(deleteShortlistItemRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/delete-shortlist`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      shortlist: {
        property_id: property.id,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.errors) {
        dispatch(deleteShortlistItemSuccess(data));
        window.location.reload();
      } else {
        dispatch(deleteShortlistItemError(data));
      }
    })
    .catch(error => {
      dispatch(deleteShortlistItemError(error));
    });
};
