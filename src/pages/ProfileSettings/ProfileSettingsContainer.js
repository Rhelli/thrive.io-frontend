import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import ProfileSettingsButtonsComponent from './components/ProfileSettingsButtonsComponent/ProfileSettingsButtonsComponent';
import styles from './ProfileSettingsContainer.module.scss';

const ProfileSettingsContainer = ({ userProfile }) => {
  const { email } = userProfile;
  const history = useHistory();

  const handleEditProfileClick = () => history.push('/myaccount/settings/edit-profile');
  const handleChangePasswordClick = () => history.push('/myaccount/settings/edit-password');
  const handleChangeEmailClick = () => history.push('/myaccount/settings/edit-email');
  const handleBackButtonClick = () => history.push('/myaccount');

  return (
    <div className={styles.profileSettingsContainer}>
      <ProfileSettingsNavbar
        handleBackButtonClick={handleBackButtonClick}
        className={styles.navbar}
      />
      <ProfileSettingsButtonsComponent
        handleEditProfileClick={handleEditProfileClick}
        handleChangePasswordClick={handleChangePasswordClick}
        handleChangeEmailClick={handleChangeEmailClick}
        email={email}
      />
    </div>
  );
};

ProfileSettingsContainer.propTypes = {
  userProfile: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

export default connect(mapStateToProps, null)(ProfileSettingsContainer);
