import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import { v4 as uuidv4 } from 'uuid';
import en from 'javascript-time-ago/locale/en';
import styles from './HomepageFeedComponent.module.scss';

const HomepageFeedComponent = ({ properties, handleActivityFeedNavigation }) => {
  TimeAgo.addLocale(en);

  return properties.length ? (
    <div className={styles.feedContainer}>
      {
        properties.map(property => (
          property.userLikes.map(like => (
            <div key={uuidv4()}>
              <span className={styles.userInfo}>
                <p>
                  {like.name}
                  {' '}
                  shortlisted
                  {' '}
                  <button type="button" onClick={() => handleActivityFeedNavigation(property)}>
                    <p>{property.title}</p>
                  </button>
                  {' '}
                </p>
              </span>
              <span className={styles.timeInfo}>
                <ReactTimeAgo date={like.createdAt} locale="en-US" />
              </span>
            </div>
          ))
        ))
      }
    </div>
  ) : (
    <div className={styles.feedContainer}>
      <p>No recent activity to show</p>
    </div>
  );
};

HomepageFeedComponent.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      userLikes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          created_at: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  handleActivityFeedNavigation: PropTypes.func.isRequired,
};

export default HomepageFeedComponent;
