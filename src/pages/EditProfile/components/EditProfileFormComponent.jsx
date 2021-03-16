import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { areasOptions } from '../data';

const EditProfileFormComponent = () => {
  const petsOptions = [
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Cats', label: 'Cats' },
    { value: 'Birds', label: 'Birds' },
    { value: 'Rodents', label: 'Rodents' },
    { value: 'Reptiles', label: 'Reptiles' },
    { value: 'Other', label: 'Other' },
  ];

  const areasOptions = [
    { value: 'Camden', label: 'Camden' },
    { value: 'Belgravia', label: 'Belgravia' },
    { value: 'Abbey Road', label: 'Abbey Road' },
  ];

  return (
    <div>
      <form>
        <div>
        <label htmlFor="name">
          Your Name
          <input id="name" type="text" required />
        </label>
      </div>
        <div>
        <label htmlFor="age">
          Date Of Birth
          <input id="dob" type="date" />
        </label>
      </div>
        <div>
        <span>
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="Male" />
            <span>Male</span>
          </label>
        </span>
        <span>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="Female" />
            <span>Female</span>
          </label>
        </span>
        <span>
          <label htmlFor="transgender">
            <input type="radio" id="transgender" name="gender" value="Transgender" />
            <span>Transgender</span>
          </label>
        </span>
        <span>
          <label htmlFor="other">
            <input type="radio" id="other" name="gender" value="Other" />
            <span>Other</span>
          </label>
        </span>
      </div>
        <div>
          <span>
            <label htmlFor="professional">
              <input type="radio" id="professional" name="occupation" value="Professional" />
              <span>Professional</span>
            </label>
          </span>
          <span>
            <label htmlFor="student">
              <input type="radio" id="student" name="occupation" value="Student" />
              <span>Student</span>
            </label>
          </span>
        </div>
        <div>
        <span>
          <label htmlFor="non-couple">
            <input type="radio" id="non-couple" name="couple" value="non-couple" />
            <span>Non-Couple</span>
          </label>
        </span>
        <span>
          <label htmlFor="couple">
            <input type="radio" id="couple" name="couple" value="couple" />
            <span>Couple</span>
          </label>
        </span>
      </div>
        <div>
        <span>
          <label htmlFor="minBudget">
            Minimum Budget
            <input id="minBudget" type="number" />
          </label>
        </span>
        <span>
          <label htmlFor="maxBudget">
            Maximum Budget
            <input id="maxBudget" type="number" />
          </label>
        </span>
      </div>
        <div>
        <span>
          <label htmlFor="non-smoking">
            <input type="radio" id="non-smoking" name="smoking" value="Non-Smoking" />
            <span>Non-Smoking</span>
          </label>
        </span>
        <span>
          <label htmlFor="occasionally">
            <input type="radio" id="occasionally" name="smoking" value="Occasionally" />
            <span>Occasionally</span>
          </label>
        </span>
        <span>
          <label htmlFor="smoking">
            <input type="radio" id="smoking" name="smoking" value="Smoking" />
            <span>Smoking</span>
          </label>
        </span>
      </div>
        <div>
          <Select options={petsOptions} />
        </div>
        <div>
          <CreatableSelect
            isMulti
            options={areasOptions}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfileFormComponent;
