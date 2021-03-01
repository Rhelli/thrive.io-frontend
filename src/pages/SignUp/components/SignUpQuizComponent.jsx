import React from 'react';

const SignUpQuizComponent = () => {
  <div>
    <form>
      <div>
        <h1>Sign Up</h1>
        <p>Please complete this form to create a Thrive account</p>
        <hr></hr>
        
        <label htmlFor="name">Name</label>
        <input id="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="text" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="text" required />
        <hr></hr>

        <h3>Are you looking or advertising for a place?</h3>
        <div>
          <span>
            <label htmlFor="looking">Looking</label>
            <input type="radio" id="looking" name="userType" value="Looking" />
          </span>
          <span>
            <label htmlFor="advertising">Advertising</label>
            <input type="radio" id="advertising" name="userType" value="Advertising" />
          </span>
        </div>
        
        <div>
          <button type="submit">Create Account</button>
        </div>
      </div>
    </form>
  </div>
}