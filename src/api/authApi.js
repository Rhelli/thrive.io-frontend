import humps from 'humps';
import { setUser, authError } from '../state/auth/authActions';

const createUserRequest = user => dispatch => {
  user.preventDefault();
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: user.target.name.value,
        email: user.target.email.value,
        password: user.target.password.value,
        user_type: user.target.userType.value,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      console.log(data);
      if (!data.error) {
        localStorage.setItem('token', data.jwt);
        dispatch(setUser(data.user));
      }
    })
    .catch(error => {
      dispatch(authError(error.message));
    });
};

const signInRequest = user => dispatch => {
  user.preventDefault();
  fetch('http://localhost:3001/api/v1/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: user.target.email.value,
        password: user.target.password.value,
      },
    }),
  })
    .then(data => data.json())
    .then(data => humps.camelizeKeys(data))
    .then(data => {
      if (!data.error) {
        localStorage.setItem('token', data.jwt);
        dispatch(setUser(data.user));
      }
    })
    .catch(error => {
      dispatch(authError(error.messages));
    });
};

const autoLoginRequest = () => dispatch => {
  fetch('http://localhost:3001/api/v1/auto-login', {
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
        dispatch(setUser(data));
      }
    })
    .catch(error => {
      dispatch(authError(error.message));
    });
};

export { createUserRequest, signInRequest, autoLoginRequest };
