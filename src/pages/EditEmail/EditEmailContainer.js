import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import formValidator from '../../utils/FormUtils';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import { updateCurrentUserEmailApiRequest } from '../../api/profileSettingsApi';
import EditEmailFormComponent from './components/EditEmailFormComponent/EditEmailFormComponent';
import styles from './EditEmailContainer.module.scss';

const EditEmailContainer = ({ userProfile, updateCurrentUserEmailApiRequest }) => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');
  const [email, setEmail] = useState(userProfile.email);
  const [emailError, setEmailError] = useState(null);

  const handleEmailUpdate = event => {
    event.preventDefault();
    if (!formValidator(email, 'email')) {
      updateCurrentUserEmailApiRequest(event);
      history.push('/myaccount');
    } else {
      setEmailError('Invalid email address. Please try again.');
    }
  };

  return (
    <div className={styles.editEmailContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditEmailFormComponent
        userProfile={userProfile}
        handleEmailUpdate={handleEmailUpdate}
        emailError={emailError}
        setEmail={setEmail}
        setEmailError={setEmailError}
      />
    </div>
  );
};

EditEmailContainer.propTypes = {
  userProfile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  updateCurrentUserEmailApiRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUserEmailApiRequest: event => {
    dispatch(updateCurrentUserEmailApiRequest(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmailContainer);
