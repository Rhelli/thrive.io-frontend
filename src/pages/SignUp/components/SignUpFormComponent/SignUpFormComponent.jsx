import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SignUpFormComponent.module.scss';

const SignUpFormComponent = ({ handleUserCreation }) => {
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
        <div className={styles.signUpFormContainer}>
          <h1>Sign Up</h1>
          <p>Please complete this form to create a Thrive account</p>
          <hr />

          <div className={styles.textInput} onChange={event => setName(event.target.value)}>
            <label htmlFor="name">
              Name
              <input id="name" type="text" placeholder="Enter either your name or a chosen username..." required />
            </label>
          </div>

          <div className={styles.textInput} onChange={event => setEmail(event.target.value)}>
            <label htmlFor="email">
              Email
              <input id="email" type="text" placeholder="Enter your email address..." required />
            </label>
          </div>

          <div className={styles.textInput} onChange={event => setDob(event.target.value)}>
            <label htmlFor="dob">
              Date Of Birth
              <input id="dob" type="date" min="1900-01-01" max="2100-01-01" required />
            </label>
          </div>

          <div className={styles.textInput} onChange={event => setPassword(event.target.value)}>
            <label htmlFor="password">
              Password
              <input id="password" type="password" placeholder="Choose a password (min 8 characters)..." required />
            </label>
          </div>
          <hr />

          <h3>Are you looking or advertising for a place?</h3>
          <div className={styles.radioField} onChange={event => setUserType(event.target.value)}>
            <span>
              <input type="radio" id="looking" name="userType" value="Looking" />
              <label htmlFor="looking">Looking</label>
            </span>
            <span>
              <input type="radio" id="advertising" name="userType" value="Advertising" />
              <label htmlFor="advertising">Advertising</label>
            </span>
          </div>
          {
            userType === 'Advertising' ? (
              <div
                className={styles.radioField}
                onChange={event => setAdvertiserType(event.target.value)}
              >
                <span>
                  <input type="radio" id="flatmate" name="advertisingType" value="Flatmate" />
                  <label htmlFor="flatmate">Flatmate</label>
                </span>
                <span>
                  <input type="radio" id="landlord" name="advertisingType" value="Landlord" />
                  <label htmlFor="landlord">Landlord</label>
                </span>
              </div>
            ) : (
              null
            )
          }
          <div className={styles.signUpButton}>
            <button type="submit">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

SignUpFormComponent.propTypes = {
  handleUserCreation: PropTypes.func.isRequired,
};

export default SignUpFormComponent;
