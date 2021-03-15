import {
  FETCH_PROPERTIES_REQUEST, FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_ERROR,
  UPDATE_PROPERTY_REQUEST, UPDATE_PROPERTY_SUCCESS, UPDATE_PROPERTY_ERROR, CREATE_PROPERTY_REQUEST,
  CREATE_PROPERTY_SUCCESS, CREATE_PROPERTY_ERROR, DELETE_PROPERTY_REQUEST, DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_ERROR, FETCH_SINGLE_PROPERTY, FETCH_SINGLE_PROPERTY_LOCATION_REQUEST,
  FETCH_SINGLE_PROPERTY_LOCATION_SUCCESS, FETCH_SINGLE_PROPERTY_LOCATION_ERROR,
} from './propertyTypes';

export const fetchPropertiesRequest = () => ({
  type: FETCH_PROPERTIES_REQUEST,
});

export const fetchPropertiesSuccess = properties => ({
  type: FETCH_PROPERTIES_SUCCESS,
  payload: properties,
});

export const fetchPropertiesError = error => ({
  type: FETCH_PROPERTIES_ERROR,
  payload: error,
});

export const updatePropertyRequest = () => ({
  type: UPDATE_PROPERTY_REQUEST,
});

export const updatePropertySuccess = property => ({
  type: UPDATE_PROPERTY_SUCCESS,
  payload: property,
});

export const updatePropertyError = error => ({
  type: UPDATE_PROPERTY_ERROR,
  payload: error,
});

export const createPropertyRequest = () => ({
  type: CREATE_PROPERTY_REQUEST,
});

export const createPropertySuccess = property => ({
  type: CREATE_PROPERTY_SUCCESS,
  payload: property,
});

export const createPropertyError = error => ({
  type: CREATE_PROPERTY_ERROR,
  payload: error,
});

export const deletePropertyRequest = () => ({
  type: DELETE_PROPERTY_REQUEST,
});

export const deletePropertySuccess = message => ({
  type: DELETE_PROPERTY_SUCCESS,
  payload: message,
});

export const deletePropertyError = error => ({
  type: DELETE_PROPERTY_ERROR,
  payload: error,
});

export const fetchSingleProperty = property => ({
  type: FETCH_SINGLE_PROPERTY,
  payload: property,
});

export const fetchSinglePropertyLocationRequest = () => ({
  type: FETCH_SINGLE_PROPERTY_LOCATION_REQUEST,
});

export const fetchSinglePropertyLocationSuccess = location => ({
  type: FETCH_SINGLE_PROPERTY_LOCATION_SUCCESS,
  payload: location,
});

export const fetchSinglePropertyLocationError = error => ({
  type: FETCH_SINGLE_PROPERTY_LOCATION_ERROR,
  payload: error,
});
