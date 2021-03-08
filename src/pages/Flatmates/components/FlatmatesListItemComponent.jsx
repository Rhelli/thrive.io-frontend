import React from 'react';
import PropTypes from 'prop-types';

const FlatmatesListItemComponent = props => {
  const {
    name, avatar, gender, occupation, maxBudget, minBudget, couple, flatmateClickThrough,
  } = props;

  return (
    <div onClick={flatmateClickThrough} onKeyDown={flatmateClickThrough} role="button" tabIndex="-1">
      <div>
        <p>{avatar}</p>
      </div>
      <div>
        <div>
          <h4>{name}</h4>
          <p>
            Occupation:
            &nbsp;
            {occupation}
          </p>
          <p>
            Gender:
            &nbsp;
            {gender}
          </p>
          <p>
            Minimum Budget:
            &nbsp;
            {minBudget}
          </p>
          <p>
            Maximum Budget:
            &nbsp;
            {maxBudget}
          </p>
          <p>
            Couple:
            &nbsp;
            {couple}
          </p>
        </div>
      </div>
    </div>
  );
};

FlatmatesListItemComponent.propTypes = {
  avatar: PropTypes.string,
  couple: PropTypes.string,
  gender: PropTypes.string,
  maxBudget: PropTypes.number,
  minBudget: PropTypes.number,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string,
  flatmateClickThrough: PropTypes.func.isRequired,
};

FlatmatesListItemComponent.defaultProps = {
  avatar: '',
  couple: '',
  gender: '',
  maxBudget: 0,
  minBudget: 0,
  occupation: '',
};

export default FlatmatesListItemComponent;
