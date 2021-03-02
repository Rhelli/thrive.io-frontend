import React from 'react';
import { createUser } from '../../../api/authApi';

const SignUpQuizComponent = () => (
  <div>
    <form onSubmit={event => createUser(event)}>
      <div>
        <h1>Sign Up</h1>
        <p>Please complete this form to create a Thrive account</p>
        <hr />

        <label htmlFor="name">
          Name
          <input id="name" type="text" required />
        </label>

        <label htmlFor="email">
          Email
          <input id="email" type="text" required />
        </label>

        <label htmlFor="password">
          Password
          <input id="password" type="password" required />
        </label>
        <hr />

        <h3>Are you looking or advertising for a place?</h3>
        <div>
          <span>
            <label htmlFor="looking">
              Looking
              <input type="radio" id="looking" name="userType" value="Looking" />
            </label>
          </span>
          <span>
            <label htmlFor="advertising">
              Advertising
              <input type="radio" id="advertising" name="userType" value="Advertising" />
            </label>
          </span>
        </div>

        <div>
          <button type="submit">Create Account</button>
        </div>
      </div>
    </form>
  </div>
);

export default SignUpQuizComponent;
