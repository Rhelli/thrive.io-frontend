import axios from 'axios';
import humps from 'humps';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data), 
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest, 
  ],
})
