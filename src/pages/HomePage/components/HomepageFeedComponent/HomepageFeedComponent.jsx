/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import styles from './HomepageFeedComponent.module.scss';

const HomepageFeedComponent = ({ properties, handleActivityFeedNavigation }) => {
  console.log(properties);
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo('en-US');

  return properties.length ? (
    <div className={styles.feedContainer}>
      {
        properties.map(property => (
          property.userLikes.map(like => (
            <div>
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
