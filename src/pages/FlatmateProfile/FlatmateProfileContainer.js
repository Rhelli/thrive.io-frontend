import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatmateProfileImageComponent from './components/FlatmateProfileImageComponent';
import FlatmateProfileAboutComponent from './components/FlatmateProfileAboutComponent';
import FlatmateProfileInfoComponent from './components/FlatmateProfileInfoComponent';
import styles from './FlatmateProfileContainer.module.scss';

const FlatmateProfileContainer = ({ flatmatesInfo }) => {
  const {
    name, email, userType, avatar, about, areasLooking, couple, gender, maxBudget, minBudget,
    occupation, pets, smoking,
  } = flatmatesInfo;

  return (
    <div className={styles.profileContainer}>
      <FlatmateProfileImageComponent
        email={email}
        avatar={avatar}
      />
      <FlatmateProfileAboutComponent
        name={name}
        userType={userType}
        occupation={occupation}
        about={about}
      />
      <FlatmateProfileInfoComponent
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
