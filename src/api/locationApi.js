import {
  fetchSinglePropertyLocationRequest, fetchSinglePropertyLocationSuccess,
  fetchSinglePropertyLocationError,
} from '../state/property/propertyActions';

const fetchPropertyLocation = propertyAddress => dispatch => {
  dispatch(fetchSinglePropertyLocationRequest);
  fetch(`http://www.mapquestapi.com/geocoding/v1/address/?key=rVLtbqkrD1Lpf4azp2EmvGbwkWwLu8pj&location=${propertyAddress}`)
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
