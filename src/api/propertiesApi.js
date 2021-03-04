import humps from 'humps';
import {
  fetchPropertiesRequest, fetchPropertiesSuccess, fetchPropertiesError, updatePropertyRequest,
  updatePropertySuccess, updatePropertyError, createPropertyRequest, createPropertySuccess,
  createPropertyError, deletePropertyRequest, deletePropertySuccess, deletePropertyError,
} from '../state/property/propertyActions';

export const fetchAllPropertiesRequest = () => dispatch => {
  dispatch(fetchPropertiesRequest);
  fetch('http://localhost:3001/api/v1/properties', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        dispatch(fetchPropertiesSuccess(data));
      }
    })
    .catch(error => {
      dispatch(fetchPropertiesError(error.messages));
    });
};

export const createNewPropertyRequest = property => dispatch => {
  dispatch(createPropertyRequest);
  const formattedProperty = humps.decamelizeKeys(property);
  fetch('https://localhost:3001/api/v1/new-property', {
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
  fetch(`https://localhost:3001/api/v1/edit-property/${id}`, {
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
  fetch(`https://localhost:3001/api/v1/delete-property/${id}`, {
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
