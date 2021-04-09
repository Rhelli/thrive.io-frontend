import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import fetchFlatmatesApiRequest from '../../api/flatmatesApi';
import { fetchSingleFlatmate } from '../../state/flatmates/flatmatesActions';
import thriveLogo from '../../assets/img/thrive-t-transparent.png';
import FlatmatesListItemComponent from './components/FlatmatesListItemComponent';
import LoadingErrorMessageComponent from '../../common/LoadingErrorMessageComponent/LoadingErrorMessageComponent';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './FlatmatesListContainer.module.scss';

const FlatmatesListContainer = ({
  flatmateData, fetchSingleFlatmate, fetchFlatmatesApiRequest,
}) => {
  useLayoutEffect(() => {
    fetchFlatmatesApiRequest();
  }, []);

  const history = useHistory();

  const flatmateClickThrough = flatmate => {
    fetchSingleFlatmate(flatmate);
    history.push(`/flatmates/${flatmate.id}`);
  };

  return flatmateData.loading ? (
    <Loader
      type="ThreeDots"
      color="white"
      height={80}
      width={80}
      className={styles.loader}
    />
  ) : flatmateData.error ? (
    <LoadingErrorMessageComponent message={flatmateData.error} />
  ) : !flatmateData.loading ? (
    <div className={styles.flatmatesListContainer}>
      <div className={styles.brandingHeader}>
        <span className={styles.titleSpan}>
          <h1>Flatmates</h1>
        </span>
        <span className={styles.imageSpan}>
          <img src={thriveLogo} alt="Thrive" />
        </span>
      </div>
      {
        flatmateData.flatmates.map(user => (
          <FlatmatesListItemComponent
            key={uuidv4()}
            name={user.name}
            avatar={user.avatar}
            gender={user.gender}
            occupation={user.occupation}
            maxBudget={user.maxBudget}
            minBudget={user.minBudget}
            couple={user.couple}
            dob={user.dob}
            flatmateClickThrough={() => flatmateClickThrough(user)}
          />
        ))
      }
    </div>
  ) : (
    null
  );
};

const mapStateToProps = state => ({
  flatmateData: state.flatmateStore,
});

FlatmatesListContainer.propTypes = {
  flatmateData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    flatmates: PropTypes.arrayOf(
      PropTypes.shape({
        about: PropTypes.string,
        areasLooking: PropTypes.arrayOf(PropTypes.string),
        avatar: PropTypes.string,
        couple: PropTypes.string,
        email: PropTypes.string,
        gender: PropTypes.string,
        id: PropTypes.number,
        maxBudget: PropTypes.number,
        minBudget: PropTypes.number,
        name: PropTypes.string,
        occupation: PropTypes.string,
        smoking: PropTypes.string,
        userType: PropTypes.string,
      }).isRequired,
    ),
  }).isRequired,
  fetchFlatmatesApiRequest: PropTypes.func.isRequired,
  fetchSingleFlatmate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchFlatmatesApiRequest: () => dispatch(fetchFlatmatesApiRequest()),
  fetchSingleFlatmate: flatmate => dispatch(fetchSingleFlatmate(flatmate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatmatesListContainer);
