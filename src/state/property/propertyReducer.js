import {
  FETCH_PROPERTIES_REQUEST, FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_ERROR,
  UPDATE_PROPERTY_REQUEST, UPDATE_PROPERTY_SUCCESS, UPDATE_PROPERTY_ERROR, CREATE_PROPERTY_REQUEST,
  CREATE_PROPERTY_SUCCESS, CREATE_PROPERTY_ERROR, DELETE_PROPERTY_REQUEST, DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_ERROR, FETCH_SINGLE_PROPERTY, FETCH_SINGLE_PROPERTY_LOCATION_REQUEST,
  FETCH_SINGLE_PROPERTY_LOCATION_SUCCESS, FETCH_SINGLE_PROPERTY_LOCATION_ERROR,
} from './propertyTypes';

const initialState = {
  loading: true,
  properties: [],
  singleProperty: {},
  singlePropertyLocation: {},
  error: '',
  message: '',
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_PROPERTIES_SUCCESS: return {
      ...state,
      loading: false,
      properties: action.payload,
      error: '',
    };

    case FETCH_PROPERTIES_ERROR: return {
      ...state,
      loading: false,
      properties: [],
      error: action.payload,
    };

    case UPDATE_PROPERTY_REQUEST: return {
      ...state,
      loading: true,
    };

    case UPDATE_PROPERTY_SUCCESS: return {
      ...state,
      loading: false,
      singleProperty: action.payload,
      error: '',
    };

    case UPDATE_PROPERTY_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
    };

    case CREATE_PROPERTY_REQUEST: return {
      ...state,
      loading: true,
    };

    case CREATE_PROPERTY_SUCCESS: return {
      ...state,
      loading: false,
      singleProperty: action.payload,
    };

    case CREATE_PROPERTY_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
    };

    case DELETE_PROPERTY_REQUEST: return {
      ...state,
      loading: true,
    };

    case DELETE_PROPERTY_SUCCESS: return {
      ...state,
      loading: false,
      message: action.payload,
    };

    case DELETE_PROPERTY_ERROR: return {
      ...state,
      loading: false,
      error: action.payload,
    };

    case FETCH_SINGLE_PROPERTY: return {
      ...state,
      singleProperty: action.payload,
    };

    case FETCH_SINGLE_PROPERTY_LOCATION_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_SINGLE_PROPERTY_LOCATION_SUCCESS: return {
      ...state,
      loading: false,
      error: '',
      singlePropertyLocation: action.payload,
    };

    case FETCH_SINGLE_PROPERTY_LOCATION_ERROR: return {
      ...state,
      singlePropertyLocation: {},
      error: action.payload,
      loading: false,
    };

    default: return {
      ...state,
    };
  }
};

export default propertyReducer;
