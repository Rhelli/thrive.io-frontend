import {
  fetchSinglePropertyLocationRequest, fetchSinglePropertyLocationSuccess,
  fetchSinglePropertyLocationError,
} from '../state/property/propertyActions';

const { REACT_APP_MAP_QUEST_KEY } = process.env;

const fetchPropertyLocation = propertyAddress => dispatch => {
  dispatch(fetchSinglePropertyLocationRequest);
  fetch(`https://www.mapquestapi.com/geocoding/v1/address/?key=${REACT_APP_MAP_QUEST_KEY}&location=${propertyAddress}`)
    .then(data => data.json())
    .then(data => {
      if (!data.error) {
        dispatch(fetchSinglePropertyLocationSuccess(data));
      } else {
        dispatch(fetchSinglePropertyLocationError(data));
      }
    })
    .catch(error => {
      dispatch(fetchSinglePropertyLocationError(error));
    });
};

export default fetchPropertyLocation;
