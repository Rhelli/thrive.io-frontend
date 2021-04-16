import React, { useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserRequest } from '../../api/authApi';
import SignUpFormComponent from './components/SignUpFormComponent/SignUpFormComponent';
import SignInUpBrandingHeaderComponent from '../../common/SignInUpBrandingHeaderComponent/SignInBrandingHeaderComponent';
import formValidator from '../../utils/FormUtils';
import styles from './SignUpContainer.module.scss';

const SignUpContainer = ({ createUserRequest, authInfo }) => {
  const { signedIn } = authInfo;
  const history = useHistory();

  useLayoutEffect(() => {
    if (signedIn === true) {
      history.push('/');
    }
  }, [signedIn]);

  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [dob, setDob] = useState(null);
  const [dobError, setDobError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [userType, setUserType] = useState(null);
  const [userTypeError, setUserTypeError] = useState(null);
  const [advertiserType, setAdvertiserType] = useState(null);
  const [advertiserTypeError, setAdvertiserTypeError] = useState(null);

  const validateForm = () => {
    setNameError(formValidator(name, 'name'));
    setEmailError(formValidator(email, 'email'));
    setDobError(formValidator(dob, 'dob'));
    setPasswordError(formValidator(password, 'password'));
    setUserTypeError(formValidator(userType, 'userType'));
    if (userType === 'Advertising') {
      setAdvertiserTypeError(formValidator(advertiserType, 'advertiserType'));
    }
  };

  const newUser = {
    name, email, dob, password, userType, advertiserType,
  };

  const handleUserCreation = event => {
    event.preventDefault();
    console.log(newUser);
    if (!validateForm()) {
      createUserRequest(newUser);
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <SignInUpBrandingHeaderComponent />
      <SignUpFormComponent
        name={name}
        setName={setName}
        nameError={nameError}
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        dob={dob}
        setDob={setDob}
        dobError={dobError}
        password={password}
        setPassword={setPassword}
        passwordError={passwordError}
        userType={userType}
        setUserType={setUserType}
        userTypeError={userTypeError}
        advertiserType={advertiserType}
        setAdvertiserType={setAdvertiserType}
        advertiserTypeError={advertiserTypeError}
        handleUserCreation={handleUserCreation}
      />
    </div>
  );
};

SignUpContainer.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  createUserRequest: newUser => dispatch(createUserRequest(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
