import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import { updateCurrentUserEmailApiRequest } from '../../api/userProfileApi';
import EditEmailFormComponent from './components/EditEmailFormComponent';

const EditEmailContainer = ({ userProfile, updateCurrentUserEmailApiRequest }) => {
  const history = useHistory();
  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handleEmailUpdate = event => {
    event.preventDefault();
    updateCurrentUserEmailApiRequest(event);
  };

  return (
    <div>
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
