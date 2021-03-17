import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditEmailFormComponent from './components/EditEmailFormComponent';

const EditEmailContainer = ({ userProfile }) => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');
  return (
    <div>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditEmailFormComponent userProfile={userProfile} />
    </div>
  );
};

EditEmailContainer.propTypes = {
  userProfile: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

export default connect(mapStateToProps, null)(EditEmailContainer);
