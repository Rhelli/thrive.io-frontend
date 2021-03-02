const createUser = event => {
  fetch('http://localhost:3001/api/v1/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
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

export default createUser;
