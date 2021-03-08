import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import fetchFlatmatesApiRequest from '../../api/flatmatesApi';
import { fetchSingleFlatmate } from '../../state/flatmates/flatmatesActions';
import FlatmatesListItemComponent from './components/FlatmatesListItemComponent';
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

  console.log(flatmateData);

  // eslint-disable-next-line no-nested-ternary
  return flatmateData.loading ? (
    <h2>Loading flatmate data...</h2>
  ) : flatmateData.error ? (
    <h2>
      Error!
      {flatmateData.error}
    </h2>
  ) : (
    <div className={styles.flatmatesListContainer}>
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
            flatmateClickThrough={() => flatmateClickThrough(user)}
          />
        ))
      }
    </div>
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
