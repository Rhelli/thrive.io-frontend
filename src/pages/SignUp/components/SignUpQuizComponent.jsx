import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignUpQuizComponent = ({ createUserRequest }) => {
  const [userType, setUserType] = useState(null);

  return (
    <div>
      <form onSubmit={event => createUserRequest(event)}>
        <div>
          <h1>Sign Up</h1>
          <p>Please complete this form to create a Thrive account</p>
          <hr />

          <label htmlFor="name">
            Name
            <input id="name" type="text" required />
          </label>

          <label htmlFor="email">
            Email
            <input id="email" type="text" required />
          </label>

          <label htmlFor="dob">
            Date Of Birth
            <input id="dob" type="date" required />
          </label>

          <label htmlFor="password">
            Password
            <input id="password" type="password" required />
          </label>
          <hr />

          <h3>Are you looking or advertising for a place?</h3>
          <div>
            <span>
              <label htmlFor="looking">
                Looking
                <input type="radio" id="looking" name="userType" value="Looking" onChange={setUserType('looking')} />
              </label>
            </span>
            <span>
              <label htmlFor="advertising">
                Advertising
                <input type="radio" id="advertising" name="userType" value="Advertising" onChange={setUserType('advertising')} />
              </label>
            </span>
          </div>

          <div>
            <button type="submit">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

SignUpQuizComponent.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
};

export default SignUpQuizComponent;
