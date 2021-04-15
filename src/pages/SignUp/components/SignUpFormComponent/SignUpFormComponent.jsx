/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormErrorComponent from '../../../../common/FormErrrorComponent/FormErrorComponent';
import styles from './SignUpFormComponent.module.scss';

const SignUpFormComponent = ({ handleUserCreation, formState, setFormState }) => {
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

          <div
            className={styles.textInput}
            onChange={event => setFormState({ ...formState, name: event.target.value })}
          >
            <label htmlFor="name">
              <div>
                <span>
                  <h3>Name</h3>
                </span>
                <span>
                  <FormErrorComponent errorMessage={formState.nameError} />
                </span>
              </div>
              <div>
                <input id="name" type="text" placeholder="Enter either your name or a chosen username..." required />
              </div>
            </label>
          </div>

          <div
            className={styles.textInput}
            onChange={event => setFormState({ ...formState, email: event.target.value })}
          >
            <label htmlFor="email">
              <div>
                <span>
                  <h3>Email</h3>
                </span>
                <span>
                  <FormErrorComponent errorMessage={formState.emailError} />
                </span>
              </div>
              <div>
                <input id="email" type="text" placeholder="Enter your email address..." required />
              </div>
            </label>
          </div>

          <div
            className={styles.textInput}
            onChange={event => setFormState({ ...formState, dob: event.target.value })}
          >
            <label htmlFor="dob">
              <div>
                <span>
                  <h3>Date Of Birth</h3>
                </span>
                <span>
                  <FormErrorComponent errorMesasage={formState.dobError} />
                </span>
              </div>
              <div>
                <input id="dob" type="date" min="1900-01-01" max="2100-01-01" required />
              </div>
            </label>
          </div>

          <div
            className={styles.textInput}
            onChange={event => setFormState({ ...formState, password: event.target.value })}
          >
            <label htmlFor="password">
              <div>
                <span>
                  <h3>Password</h3>
                </span>
                <span>
                  <FormErrorComponent errorMessage={formState.passwordError} />
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
            onChange={event => setFormState({ ...formState, userType: event.target.value })}
          >
            <div>
              <FormErrorComponent errorMessage={formState.userTypeError} />
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
            formState.userType === 'Advertising' ? (
              <div
                className={styles.radioField}
                // eslint-disable-next-line max-len
                onChange={event => setFormState({ ...formState, advertiserType: event.target.value })}
              >
                <div>
                  <FormErrorComponent errorMessage={formState.advertiserTypeError} />
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
};

SignUpFormComponent.propTypes = {
  handleUserCreation: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string,
    nameError: PropTypes.string,
    email: PropTypes.string,
    emailError: PropTypes.string,
    dob: PropTypes.string,
    dobError: PropTypes.string,
    password: PropTypes.string,
    passwordError: PropTypes.string,
    userType: PropTypes.string,
    userTypeError: PropTypes.string,
    advertiserType: PropTypes.string,
    advertiserTypeError: PropTypes.string,
  }).isRequired,
  setFormState: PropTypes.func.isRequired,
};

export default SignUpFormComponent;
