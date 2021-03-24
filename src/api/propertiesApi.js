import humps from 'humps';
import {
  fetchAllPropertiesRequest, fetchAllPropertiesSuccess, fetchAllPropertiesError,
  fetchManagedPropertiesRequest, fetchManagedPropertiesSuccess,
  fetchManagedPropertiesError, updatePropertyRequest, updatePropertySuccess,
  updatePropertyError, createPropertyRequest, createPropertySuccess,
  createPropertyError, deletePropertyRequest, deletePropertySuccess,
  deletePropertyError,
} from '../state/property/propertyActions';

const { REACT_APP_REST_API_LOCATION } = process.env;

export const fetchAllPropertiesListRequest = () => dispatch => {
  dispatch(fetchAllPropertiesRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/properties`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(fetchAllPropertiesSuccess(data));
      }
    })
    .catch(error => {
      dispatch(fetchAllPropertiesError(error.messages));
    });
};

export const fetchManagedPropertiesListRequest = () => dispatch => {
  dispatch(fetchManagedPropertiesRequest);
  fetch(`${REACT_APP_REST_API_LOCATION}/manage-properties`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(fetchManagedPropertiesSuccess(data));
      } else {
        dispatch(fetchManagedPropertiesError(data.error));
      }
    })
    .catch(error => {
      dispatch(fetchManagedPropertiesError(error));
    });
};

export const createNewPropertyRequest = property => dispatch => {
  dispatch(createPropertyRequest);
  const formattedProperty = humps.decamelizeKeys(property);
  fetch(`${REACT_APP_REST_API_LOCATION}/new-property`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      property: { ...formattedProperty },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(createPropertySuccess(data));
      }
    })
    .catch(error => {
      dispatch(createPropertyError(error.messages));
    });
};

export const updatePropertyDetailsRequest = property => dispatch => {
  dispatch(updatePropertyRequest);
  const { id } = property;
  const formattedProperty = humps.decamelizeKeys(property);
  fetch(`${REACT_APP_REST_API_LOCATION}/edit-property/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: {
      property: { ...formattedProperty },
    },
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(updatePropertySuccess(data));
      }
    })
    .catch(error => {
      dispatch(updatePropertyError(error.messages));
    });
};

export const deletePropertyApiRequest = property => dispatch => {
  dispatch(deletePropertyRequest);
  const { id } = property;
  const formattedProperty = humps.decamelizeKeys(property);
  fetch(`${REACT_APP_REST_API_LOCATION}/delete-property/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      property: { ...formattedProperty },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(deletePropertySuccess(data.message));
      }
    })
    .catch(error => {
      dispatch(deletePropertyError(error.messages));
    });
};
