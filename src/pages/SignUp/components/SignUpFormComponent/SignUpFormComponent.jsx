/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormErrorComponent from '../../../../common/FormErrrorComponent/FormErrorComponent';
import styles from './SignUpFormComponent.module.scss';

const SignUpFormComponent = ({
  handleUserCreation, setName, setEmail, setDob, setPassword, setUserType, setAdvertiserType,
  nameError, emailError, dobError, passwordError, userTypeError, advertiserTypeError, userType,
}) => (
  <div>
    <form onSubmit={event => handleUserCreation(event)}>
      <div className={styles.signUpFormContainer}>
        <h1>Sign Up</h1>
        <p>Please complete this form to create a Thrive account</p>
        <hr />
        <div
          className={styles.textInput}
          onChange={event => setName(event.target.value)}
        >
          <label htmlFor="name">
            <div>
              <span>
                <h3>Name</h3>
              </span>
              <span>
                <FormErrorComponent errorMessage={nameError} />
              </span>
            </div>
            <div>
              <input id="name" type="text" placeholder="Enter either your name or a chosen username..." required />
            </div>
          </label>
        </div>
        <div
          className={styles.textInput}
          onChange={event => setEmail(event.target.value)}
        >
          <label htmlFor="email">
            <div>
              <span>
                <h3>Email</h3>
              </span>
              <span>
                <FormErrorComponent errorMessage={emailError} />
              </span>
            </div>
            <div>
              <input id="email" type="text" placeholder="Enter your email address..." required />
            </div>
          </label>
        </div>
        <div
          className={styles.textInput}
          onChange={event => setDob(event.target.value)}
        >
          <label htmlFor="dob">
            <div>
              <span>
                <h3>Date Of Birth</h3>
              </span>
              <span>
                <FormErrorComponent errorMessage={dobError} />
              </span>
            </div>
            <div>
              <input id="dob" type="date" min="1900-01-01" max="2100-01-01" required />
            </div>
          </label>
        </div>
        <div
          className={styles.textInput}
          onChange={event => setPassword(event.target.value)}
        >
          <label htmlFor="password">
            <div>
              <span>
                <h3>Password</h3>
              </span>
              <span>
                <FormErrorComponent errorMessage={passwordError} />
              </span>
            </div>
            <div>
              <input id="password" type="password" placeholder="Choose a password (min 8 characters)..." required />
            </div>
          </label>
        </div>
        <hr />
        <h3>Are you looking or advertising for a place?</h3>
        <div
          className={styles.radioField}
          onChange={event => setUserType(event.target.value)}
        >
          <div>
            <FormErrorComponent errorMessage={userTypeError} />
          </div>
          <div>
            <span>
              <input type="radio" id="looking" name="userType" value="Looking" />
              <label htmlFor="looking">Looking</label>
            </span>
            <span>
              <input type="radio" id="advertising" name="userType" value="Advertising" />
              <label htmlFor="advertising">Advertising</label>
            </span>
          </div>
        </div>
        {
          userType === 'Advertising' ? (
            <div
              className={styles.radioField}
              onChange={event => setAdvertiserType(event.target.value)}
            >
              <div>
                <FormErrorComponent errorMessage={advertiserTypeError} />
              </div>
              <div>
                <span>
                  <input type="radio" id="flatmate" name="advertisingType" value="Flatmate" />
                  <label htmlFor="flatmate">Flatmate</label>
                </span>
                <span>
                  <input type="radio" id="landlord" name="advertisingType" value="Landlord" />
                  <label htmlFor="landlord">Landlord</label>
                </span>
              </div>
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

SignUpFormComponent.defaultProps = {
  nameError: '',
  emailError: '',
  dobError: '',
  passwordError: '',
  userType: '',
  userTypeError: '',
  advertiserTypeError: '',
};

SignUpFormComponent.propTypes = {
  handleUserCreation: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  nameError: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  setDob: PropTypes.func.isRequired,
  dobError: PropTypes.string,
  setPassword: PropTypes.func.isRequired,
  passwordError: PropTypes.string,
  userType: PropTypes.string,
  setUserType: PropTypes.func.isRequired,
  userTypeError: PropTypes.string,
  setAdvertiserType: PropTypes.func.isRequired,
  advertiserTypeError: PropTypes.string,
};

export default SignUpFormComponent;
