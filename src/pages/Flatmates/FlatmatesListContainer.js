/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchFlatmatesApiRequest from '../../api/flatmatesApi';
import { fetchSingleFlatmate } from '../../state/flatmates/flatmatesActions';

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
    <div>
      <h2>Heres where the data goes</h2>
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
  }).isRequired,
  fetchFlatmatesApiRequest: PropTypes.func.isRequired,
  fetchSingleFlatmate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchFlatmatesApiRequest: () => dispatch(fetchFlatmatesApiRequest()),
  fetchSingleFlatmate: flatmate => dispatch(fetchSingleFlatmate(flatmate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatmatesListContainer);
