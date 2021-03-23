import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditPasswordFormComponent from './components/EditPasswordFormComponent';
import { updateCurrentUserPasswordApiRequest } from '../../api/profileSettingsApi';
import styles from './EditPasswordContainer.module.scss';

const EditPasswordContainer = ({
  updateCurrentUserPasswordApiRequest, userProfile,
}) => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handlePasswordChange = (event, passwordData) => {
    event.preventDefault();
    updateCurrentUserPasswordApiRequest(passwordData);
    history.push('/myaccount');
  };

  return (
    <div className={styles.editPasswordContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditPasswordFormComponent
        handlePasswordChange={handlePasswordChange}
        userProfile={userProfile}
      />
    </div>
  );
};

EditPasswordContainer.propTypes = {
  updateCurrentUserPasswordApiRequest: PropTypes.func.isRequired,
  userProfile: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUserPasswordApiRequest: password => {
    dispatch(updateCurrentUserPasswordApiRequest(password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordContainer);
