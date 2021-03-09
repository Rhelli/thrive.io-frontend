import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileImageComponent from './components/ProfileImageComponent';
import ProfileAboutComponent from './components/ProfileAboutComponent';
import ProfileInfoComponent from './components/ProfileInfoComponent';
import styles from './ProfileContainer.module.scss';

const ProfileContainer = ({ flatmatesInfo, authInfo }) => {
  const {
    name, email, userType, avatar, about, areasLooking, couple, gender, maxBudget, minBudget,
    occupation, pets, smoking,
  } = flatmatesInfo;

  const history = useHistory();
  const location = history.location.pathname;

  return location !== '/profile' ? (
    <div className={styles.profileContainer}>
      <ProfileImageComponent
        email={email}
        avatar={avatar}
      />
      <ProfileAboutComponent
        name={name}
        userType={userType}
        occupation={occupation}
        about={about}
      />
      <ProfileInfoComponent
        minBudget={minBudget}
        maxBudget={maxBudget}
        areasLooking={areasLooking}
        couple={couple}
        gender={gender}
        smoking={smoking}
        pets={pets}
      />
    </div>
  ) : (
    <div className={styles.profileContainer}>
      <ProfileImageComponent
        email={authInfo.email}
        avatar={authInfo.avatar}
      />
      <ProfileAboutComponent
        name={authInfo.name}
        userType={authInfo.userType}
        occupation={authInfo.occupation}
        about={authInfo.about}
      />
      <ProfileInfoComponent
        minBudget={authInfo.minBudget}
        maxBudget={authInfo.maxBudget}
        areasLooking={authInfo.areasLooking}
        couple={authInfo.couple}
        gender={authInfo.gender}
        smoking={authInfo.smoking}
        pets={authInfo.pets}
      />
    </div>
  );
};

ProfileContainer.propTypes = {
  flatmatesInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    about: PropTypes.string,
    areasLooking: PropTypes.string,
    couple: PropTypes.string,
    gender: PropTypes.string,
    maxBudget: PropTypes.number,
    minBudget: PropTypes.number,
    occupation: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
  }).isRequired,
  authInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    about: PropTypes.string,
    areasLooking: PropTypes.string,
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

export default connect(mapStateToProps, null)(ProfileContainer);
