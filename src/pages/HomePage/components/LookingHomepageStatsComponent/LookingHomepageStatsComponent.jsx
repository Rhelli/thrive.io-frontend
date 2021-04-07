/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import { useHistory } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import { v4 as uuidv4 } from 'uuid';
import en from 'javascript-time-ago/locale/en';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pluralize from 'pluralize';
import { faStar, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { profileCompleter, sentenceCapitaliser } from '../../../../utils/homepageUtils';
import { arrayToString } from '../../../../utils/managePropertiesUtils';
import styles from './LookingHomepageStatsComponent.module.scss';

const LookingHomepageStatsComponent = ({ userProfile, handlePropertyNavigation }) => {
  const { shortlistedProperties } = userProfile;
  TimeAgo.addLocale(en);
  const history = useHistory();
  const profileCompletion = profileCompleter(userProfile);
  const handleShortlistNavigation = () => history.push('/shortlist');
  const handleProfileNavigation = () => history.push('/myaccount');

  return (
    <div className={styles.lookingHomepageStatsContainer}>
      <div className={styles.shortlistStats}>
        <button type="button" onClick={handleShortlistNavigation} className={styles.shortlistIcon}>
          <FontAwesomeIcon icon={faStar} />
        </button>
        {
          shortlistedProperties.length > 0 ? (
            <div className={styles.shortlistInfo}>
              <div className={styles.shortlistTitle}>
                <h3>
                  {shortlistedProperties.length}
                  {' '}
                  Shortlisted
                  {' '}
                  {pluralize('Property', shortlistedProperties.length)}
                </h3>
              </div>
              <div className={styles.shortlistList}>
                {
                  shortlistedProperties.map(property => (
                    <div key={uuidv4()} className={styles.shortlistItem}>
                      <div className={styles.shortlistItemTitle}>
                        <button type="button" onClick={() => handlePropertyNavigation(property)}>
                          {property.title}
                        </button>
                      </div>
                      <div className={styles.townAddedRow}>
                        <span className={styles.shortlistItemTown}>
                          <p>{property.town}</p>
                        </span>
                        <span className={styles.shortlistItemDate}>
                          <ReactTimeAgo date={property.createdAt} locale="en-US" />
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ) : (
            <div>
              <h3>
                No Shortlisted Properties Yet
              </h3>
            </div>
          )
        }
      </div>
      <div className={styles.shortlistProfileCompletion}>
        {
          profileCompletion.length > 0 ? (
            <div className={styles.shortlistProfileInfoContainer}>
              <button onClick={handleProfileNavigation} type="button" className={styles.shortlistIcon}>
                <FontAwesomeIcon icon={faExclamation} />
              </button>
              <div className={styles.shortlistProfileInfo}>
                <div className={styles.shortlistProfileInfoTitle}>
                  <h3>
                    {profileCompletion.length}
                    {' '}
                    Incomplete Profile
                    {' '}
                    {pluralize('Element', profileCompletion.length)}
                  </h3>
                  <p>
                    A more complete profile holds more attention and trust.
                  </p>
                </div>
                <div className={styles.completionGrid}>
                  <span className={styles.toComplete}>
                    <p>To Complete:</p>
                  </span>
                  <span className={styles.completionList}>
                    <p>{sentenceCapitaliser(arrayToString(profileCompletion))}</p>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            null
          )
        }
      </div>
    </div>
  );
};

LookingHomepageStatsComponent.propTypes = {
  userProfile: PropTypes.shape({
    shortlistedProperties: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  handlePropertyNavigation: PropTypes.func.isRequired,
};

export default LookingHomepageStatsComponent;
