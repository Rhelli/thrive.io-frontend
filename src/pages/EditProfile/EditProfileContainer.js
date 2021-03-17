import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditProfileFormComponent from './components/EditProfileFormComponent';
import styles from './EditProfileContainer.module.scss';

const EditProfileContainer = ({ userProfile }) => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');
  return (
    <div className={styles.editProfileContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditProfileFormComponent userProfile={userProfile} />
    </div>
  );
};

EditProfileContainer.propTypes = {
  userProfile: PropTypes.shape({
    about: PropTypes.string,
    areasLooking: PropTypes.arrayOf(PropTypes.string),
    avatar: PropTypes.string,
    couple: PropTypes.string,
    gender: PropTypes.string,
    maxBudget: PropTypes.number,
    minBudget: PropTypes.number,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    userType: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

export default connect(mapStateToProps, null)(EditProfileContainer);
