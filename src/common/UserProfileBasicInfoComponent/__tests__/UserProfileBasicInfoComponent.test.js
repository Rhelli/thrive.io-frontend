import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserProfileBasicInfoComponent from '../UserProfileBasicInfoComponent';

Enzyme.configure({ adapter: new Adapter() });

const userProfile = {
  name: 'Tonita',
  userType: 'Looking',
  occupation: 'Student',
};

const partialUserProfile = {
  name: 'Stevie G',
  userType: 'Looking',
  occupation: '',
};

const userProfileBasicInfoComponent = (
  <UserProfileBasicInfoComponent userProfile={userProfile} />
);

const partialUserProfileBasicInfoComponent = (
  <UserProfileBasicInfoComponent userProfile={partialUserProfile} />
);

describe('The appearance and functionality of the userProfileBasicInfo component', () => {
  const container = mount(userProfileBasicInfoComponent);
  const partialContainer = mount(partialUserProfileBasicInfoComponent);

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(userProfileBasicInfoComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has the correct outer container with the correct attributes', () => {
    expect(container.childAt(0).hasClass('userProfileBasicContainer')).toBe(true);
  });

  it('Displays the users name correctly', () => {
    expect(container.find('.userProfileName').childAt(0).text()).toBe('Tonita');
  });

  it('Displays the users occupation when provided', () => {
    expect(container.find('.userProfileOccupationType').childAt(0).text()).toBe('Student');
  });

  it('Displays a placeholder if there is no occupation information available', () => {
    expect(partialContainer.find('.userProfileOccupationType').childAt(0).text()).toBe('No Occupation Yet');
  });

  it('Displays the user type correctly', () => {
    expect(container.find('.userProfileOccupationType').childAt(2).text()).toBe('Looking');
  });
});
