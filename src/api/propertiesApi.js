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
  fetch(`${REACT_APP_REST_API_LOCATION}/new-property`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      property: {
        owner_id: property.ownerId,
        title: property.title,
        blurb: property.blurb,
        address: property.address,
        town: property.town,
        postcode: property.postcode,
        price: property.price,
        bills: property.bills,
        parking: property.parking,
        deposit: property.deposit,
        min_age: property.minAge,
        max_age: property.maxAge,
        internet: property.internet,
        genders: property.genders,
        furnished: property.furnished,
        disabled_access: property.disabledAccess,
        occupant_count: property.occupantCount,
        occupations: property.occupations,
        outside_area: property.outsideArea,
        pets: property.pets,
        room_count: property.roomCount,
        smoking: property.smoking,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.errors) {
        dispatch(createPropertySuccess(data));
      } else {
        dispatch(createPropertyError(data.errors));
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
  fetch(`${REACT_APP_REST_API_LOCATION}/delete-property/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      property: {
        id: property.id,
      },
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
