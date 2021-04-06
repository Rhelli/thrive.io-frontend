/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import thriveLogo from '../../../../assets/img/thrive-full-transparent.png';
import findFriends from '../../../../assets/img/find-friends-transparent-crop.png';
import findHouses from '../../../../assets/img/houses-transparent.png';
import manageHouses from '../../../../assets/img/management-transparent-crop.png';
import styles from './UnsignedHomepageComponent.module.scss';

const UnsignedHomepageComponent = () => {
  SwiperCore.use([Autoplay, EffectFade]);

  return (
    <div className={styles.unsignedHomepageContainer}>
      <div className={styles.brandingLogo}>
        <img alt="thrive" src={thriveLogo} />
        <h2>Create, browse and join new households and flatshares across the country.</h2>
      </div>
      <div className={styles.adSection}>
        <Swiper
          spaceBetween={50}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          centeredSlides
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className={styles.swiperImageContainer}>
              <img className={styles.swiperImage} src={findFriends} alt="Find Flatmates" />
            </div>
            <p className={styles.swiperText}>
              Find Flatmates To Live With Based On Habits, Interests And Personality
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperImageContainer}>
              <img className={styles.findHousesImage} src={findHouses} alt="Find Houseshares" />
            </div>
            <p className={styles.swiperText}>
              Find Houseshares To Join Based Off Your Own Living Preferences
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperImageContainer}>
              <img className={styles.swiperImage} src={manageHouses} alt="Create and Manage Multiple Households" />
            </div>
            <p className={styles.swiperText}>
              Create And Manage Households, For You And Your Flatmates, Or For Your Company
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default UnsignedHomepageComponent;
