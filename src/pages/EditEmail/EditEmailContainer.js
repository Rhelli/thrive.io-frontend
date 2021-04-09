import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import { updateCurrentUserEmailApiRequest } from '../../api/profileSettingsApi';
import EditEmailFormComponent from './components/EditEmailFormComponent/EditEmailFormComponent';
import styles from './EditEmailContainer.module.scss';

const EditEmailContainer = ({ userProfile, updateCurrentUserEmailApiRequest }) => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handleEmailUpdate = event => {
    event.preventDefault();
    updateCurrentUserEmailApiRequest(event);
    history.push('/myaccount');
  };

  return (
    <div className={styles.editEmailContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditEmailFormComponent
        userProfile={userProfile}
        handleEmailUpdate={handleEmailUpdate}
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
