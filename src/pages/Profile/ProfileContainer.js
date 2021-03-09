import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileImageComponent from './components/ProfileImageComponent';
import ProfileAboutComponent from './components/ProfileAboutComponent';
import ProfileInfoComponent from './components/ProfileInfoComponent';
import styles from './ProfileContainer.module.scss';

const ProfileContainer = ({ profileInfo }) => {
  const {
    name, email, userType, avatar, about, areasLooking, couple, gender, maxBudget, minBudget,
    occupation, pets, smoking,
  } = profileInfo;

  return (
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
  );
};

ProfileContainer.propTypes = {
  profileInfo: PropTypes.shape({
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
  profileInfo: state.flatmateStore.singleFlatmate,
});

export default connect(mapStateToProps, null)(ProfileContainer);
