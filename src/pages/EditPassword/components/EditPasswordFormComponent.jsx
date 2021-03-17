import React from 'react';
import styles from './EditPasswordFormComponent.module.scss';

const EditPasswordFormComponent = () => (
  <div className={styles.editPasswordFormContainer}>
    <form>
      <div className={styles.editPasswordRow}>
        <label htmlFor="password">
          <h3>New Password</h3>
          <input id="password" type="password" required />
        </label>
      </div>
      <div className={styles.editPasswordConfirmationRow}>
        <label htmlFor="passwordConfirm">
          <h3>Password Confirmation</h3>
          <input id="passwordConfirm" type="password" required />
        </label>
      </div>
      <div className={styles.editPasswordSubmitButton}>
        <button type="submit">
          Change Password
        </button>
      </div>
    </form>
  </div>
);

export default EditPasswordFormComponent;
