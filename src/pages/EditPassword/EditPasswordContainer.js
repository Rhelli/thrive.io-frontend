/* eslint-disable no-undef */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditPasswordFormComponent from './components/EditPasswordFormComponent';
import styles from './EditPasswordContainer.module.scss';

const EditPasswordContainer = () => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');

  return (
    <div className={styles.editPasswordContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditPasswordFormComponent />
    </div>
  );
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

export default connect(mapStateToProps, null)(EditPasswordContainer);
