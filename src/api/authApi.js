import { setUser, authError } from '../state/auth/authActions';

const createUserRequest = user => dispatch => {
  fetch('http://localhost:3001/api/v1/users/', {
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
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

const signInRequest = event => dispatch => {
  fetch('http://localhost:3001/api/v1/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: event.target.email.value,
        password: event.target.password.value,
      },
    }),
  })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

const autoLoginRequest = () => dispatch => {
  fetch('http://localhost:3001/api/v1/auto_login', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    })
    .catch(error => {
      dispatch(authError(error.message));
    });
};

export { createUserRequest, signInRequest, autoLoginRequest };
