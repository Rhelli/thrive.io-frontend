import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserProfileAboutComponent from '../UserProfileAboutComponent';

Enzyme.configure({ adapter: new Adapter() });

const userProfile = {
  id: 3,
  name: 'Tonita',
  dob: '1936-08-19',
  email: 'thi@glover-rowe.org',
  userType: 'Looking',
  avatar: 'someimageurl.com',
  about: 'Sequi esse nesciunt ab.',
  occupation: 'Student',
  gender: 'Male',
  couple: 'Non-Couple',
  pets: ['Cats'],
  smoking: 'Smoking',
  minBudget: 1075,
  maxBudget: 1400,
  areasLooking: ['Dulwich', 'Camden'],
  advertiserType: null,
};

const partialUserProfile = {
  id: 3,
  name: 'Tonita',
  dob: '1936-08-19',
  email: 'thi@glover-rowe.org',
  userType: 'Looking',
  avatar: 'someimageurl.com',
  about: '',
  occupation: '',
  gender: '',
  couple: '',
  pets: [],
  smoking: '',
  minBudget: null,
  maxBudget: null,
  areasLooking: [''],
  advertiserType: null,
};

const userProfileAboutComponent = (
  <UserProfileAboutComponent userProfile={userProfile} />
);

const partialProfileAboutComponent = (
  <UserProfileAboutComponent userProfile={partialUserProfile} />
);

describe('The appearance and functionality of the UserProfileAbout component', () => {
  const container = mount(userProfileAboutComponent);
  const partialContainer = mount(partialProfileAboutComponent);

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(userProfileAboutComponent);
    expect(tree).toMatchSnapshot();
  });


})