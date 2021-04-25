import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatmateProfileImageComponent from './components/FlatmateProfileImageComponent/FlatmateProfileImageComponent';
import UserProfileBasicInfoComponent from '../../common/UserProfileBasicInfoComponent/UserProfileBasicInfoComponent';
import UserProfileAboutComponent from '../../common/UserProfileAboutComponent/UserProfileAboutComponent';
import styles from './FlatmateProfileContainer.module.scss';

const FlatmateProfileContainer = ({ flatmatesInfo }) => {
  const { email, avatar } = flatmatesInfo;

  return (
    <div className={styles.profileContainer}>
      <FlatmateProfileImageComponent
        email={email}
        avatar={avatar}
      />
      <UserProfileBasicInfoComponent userProfile={flatmatesInfo} />
      <UserProfileAboutComponent userProfile={flatmatesInfo} />
    </div>
  );
};

FlatmateProfileContainer.propTypes = {
  flatmatesInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    about: PropTypes.string,
    areasLooking: PropTypes.arrayOf(PropTypes.string),
    couple: PropTypes.string,
    gender: PropTypes.string,
    maxBudget: PropTypes.number,
    minBudget: PropTypes.number,
    occupation: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  flatmatesInfo: state.flatmateStore.singleFlatmate,
  authInfo: state.authStore.user,
});

export default connect(mapStateToProps, null)(FlatmateProfileContainer);
