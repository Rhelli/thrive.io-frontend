import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignUpQuizComponent = ({ handleUserCreation }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDob] = useState(null);
  const [password, setPassword] = useState(null);
  const [userType, setUserType] = useState(null);
  const [advertiserType, setAdvertiserType] = useState(null);

  const newUser = {
    name, email, dob, password, userType, advertiserType,
  };

  return (
    <div>
      <form onSubmit={event => handleUserCreation(event, newUser)}>
        <div>
          <h1>Sign Up</h1>
          <p>Please complete this form to create a Thrive account</p>
          <hr />

          <div onChange={event => setName(event.target.value)}>
            <label htmlFor="name">
              Name
              <input id="name" type="text" required />
            </label>
          </div>

          <div onChange={event => setEmail(event.target.value)}>
            <label htmlFor="email">
              Email
              <input id="email" type="text" required />
            </label>
          </div>

          <div onChange={event => setDob(event.target.value)}>
            <label htmlFor="dob">
              Date Of Birth
              <input id="dob" type="date" min="1900-01-01" max="2100-01-01" required />
            </label>
          </div>

          <div onChange={event => setPassword(event.target.value)}>
            <label htmlFor="password">
              Password
              <input id="password" type="password" required />
            </label>
          </div>
          <hr />

          <h3>Are you looking or advertising for a place?</h3>
          <div onChange={event => setUserType(event.target.value)}>
            <span>
              <label htmlFor="looking">
                Looking
                <input type="radio" id="looking" name="userType" value="Looking" />
              </label>
            </span>
            <span>
              <label htmlFor="advertising">
                Advertising
                <input type="radio" id="advertising" name="userType" value="Advertising" />
              </label>
            </span>
          </div>
          {
            userType === 'Advertising' ? (
              <div onChange={event => setAdvertiserType(event.target.value)}>
                <span>
                  <label htmlFor="flatmate">
                    Flatmate
                    <input type="radio" id="flatmate" name="advertisingType" value="Flatmate" />
                  </label>
                </span>
                <span>
                  <label htmlFor="landlord">
                    Landlord
                    <input type="radio" id="landlord" name="advertisingType" value="Landlord" />
                  </label>
                </span>
              </div>
            ) : (
              null
            )
          }
          <div>
            <button type="submit">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

SignUpQuizComponent.propTypes = {
  handleUserCreation: PropTypes.func.isRequired,
};

export default SignUpQuizComponent;
