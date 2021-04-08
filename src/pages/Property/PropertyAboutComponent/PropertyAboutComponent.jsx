import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertyAboutComponent.module.scss';

const PropertyAboutComponent = ({ singleProperty }) => {
  const { title, blurb } = singleProperty;

  return (
    <div className={styles.propertyAboutContainer}>
      <div className={styles.propertyAboutInnerContainer}>
        <h2>About</h2>
        <div className={styles.propertyAboutTitleBlurb}>
          <h3>
            {title}
          </h3>
          <div className={styles.propertyAboutBlurb}>
            <p>
              {blurb}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyAboutComponent.defaultProps = {
  singleProperty: {
    title: '',
    blurb: '',
  },
};

PropertyAboutComponent.propTypes = {
  singleProperty: PropTypes.shape({
    title: PropTypes.string,
    blurb: PropTypes.string,
  }),
};

export default PropertyAboutComponent;
