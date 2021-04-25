import humps from 'humps';
import { setUser, authError, loadUser } from '../state/auth/authActions';

const { REACT_APP_REST_API_LOCATION } = process.env;

const createUserRequest = newUser => dispatch => {
  dispatch(loadUser);
  fetch(`${REACT_APP_REST_API_LOCATION}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: newUser.name,
        email: newUser.email,
        dob: newUser.dob,
        password: newUser.password,
        user_type: newUser.userType,
        advertiser_type: newUser.advertiserType,
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
      dispatch(authError(error.message));
    });
};

const signInRequest = user => dispatch => {
  user.preventDefault();
  dispatch(loadUser);
  fetch(`${REACT_APP_REST_API_LOCATION}/signin`, {
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
      } else {
        dispatch(authError(data.error));
      }
    })
    .catch(error => {
      dispatch(authError(error.messages));
    });
};

const autoLoginRequest = () => dispatch => {
  dispatch(loadUser);
  fetch(`${REACT_APP_REST_API_LOCATION}/auto-login`, {
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
      } else {
        dispatch(authError(data.error));
      }
    })
    .catch(error => {
      dispatch(authError(error.message));
    });
};

export { createUserRequest, signInRequest, autoLoginRequest };
