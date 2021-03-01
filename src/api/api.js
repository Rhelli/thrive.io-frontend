import axios from 'axios';
import humps from 'humps';

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data),
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
});

const apiPost = axios.create({
  method: 'post',
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data),
  ],
});

const createUser = event => {
  axios.post('http://localhost:3000/api/v1', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: JSON.stringify({
      user: {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        user_type: event.target.userType.value,
      },
    }),
  })
    .then(response => response.json())
    .then(console.log);
};

export { apiRequest, apiPost, createUser };
