import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditPasswordFormComponent from './components/EditPasswordFormComponent/EditPasswordFormComponent';
import { updateCurrentUserPasswordApiRequest } from '../../api/profileSettingsApi';
import styles from './EditPasswordContainer.module.scss';

const EditPasswordContainer = ({
  updateCurrentUserPasswordApiRequest, profileStore, profileSettingsStore,
}) => {
  const history = useHistory();
  const { userProfile } = profileStore;
  const { loading, error } = profileSettingsStore;
  const [passwordChangeError, setPasswordChangeError] = useState(null);
  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handlePasswordChange = (event, passwordData) => {
    event.preventDefault();
    updateCurrentUserPasswordApiRequest(passwordData);
    if (!loading && !error) {
      setPasswordChangeError(null);
      history.push('/myaccount');
    } else {
      setPasswordChangeError(error);
    }
  };

  return (
    <div className={styles.editPasswordContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditPasswordFormComponent
        handlePasswordChange={handlePasswordChange}
        userProfile={userProfile}
        error={passwordChangeError}
      />
    </div>
  );
};

EditPasswordContainer.propTypes = {
  updateCurrentUserPasswordApiRequest: PropTypes.func.isRequired,
  profileStore: PropTypes.shape({
    userProfile: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  profileSettingsStore: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  profileStore: state.profileStore,
  profileSettingsStore: state.profileSettingsStore,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUserPasswordApiRequest: password => {
    dispatch(updateCurrentUserPasswordApiRequest(password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordContainer);
