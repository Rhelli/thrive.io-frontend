import React from 'react';
import thriveLogo from '../../../../assets/img/thrive-full-transparent-alt.png';
import styles from './SignInBrandingHeaderComponent.module.scss';

const SignInBrandingHeaderComponent = () => (
  <header className={styles.brandingHeader}>
    <img src={thriveLogo} alt="Thrive" />
  </header>
);

export default SignInBrandingHeaderComponent;
