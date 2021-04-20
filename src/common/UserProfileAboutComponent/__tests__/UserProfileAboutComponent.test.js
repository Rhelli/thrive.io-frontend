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
  areasLooking: [],
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
  const bottomSection = container.find('.userProfileAboutBottomSection');
  const bottomSectionPartial = partialContainer.find('.userProfileAboutBottomSection');

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(userProfileAboutComponent);
    expect(tree).toMatchSnapshot();
  });

  it('Has a master container with the correct attributes', () => {
    expect(container.childAt(0).hasClass('userProfileAboutContainer')).toBe(true);
  });

  it('Displays the profile top section with the provided prop info', () => {
    const aboutSection = container.find('.userProfileAboutTopSection');
    expect(aboutSection.childAt(0).text()).toContain('About');
    expect(aboutSection.childAt(1).text()).toBe('Sequi esse nesciunt ab.');
    expect(aboutSection.childAt(2).childAt(1).text()).toBe('Dulwich, Camden.');
  });

  it('Displays placeholder messages if there is no information provided', () => {
    const aboutSectionPartial = partialContainer.find('.userProfileAboutTopSection');
    expect(aboutSectionPartial.childAt(0).text()).toContain('About');
    expect(aboutSectionPartial.childAt(1).text()).toBe("This user hasn't added any information yet!");
    expect(aboutSectionPartial.childAt(2).childAt(1).text()).toBe('No areas added yet.');
  });

  it('Displays the profile bottom section with the provided info', () => {
    expect(bottomSection.childAt(0).childAt(1).text()).toBe('£1075');
    expect(bottomSection.childAt(0).childAt(3).text()).toBe('£1400');
    expect(bottomSection.childAt(1).childAt(0).text()).toBe('Gender:');
    expect(bottomSection.childAt(1).childAt(1).childAt(0).childAt(0).name()).toBe('FontAwesomeIcon');
    expect(bottomSection.childAt(1).childAt(1).childAt(1).text()).toBe('Male');
  });

  it('Displays placeholder messages if there is not information provided', () => {
    expect(bottomSectionPartial.childAt(0).childAt(1).text()).toBe('£tbd');
    expect(bottomSectionPartial.childAt(0).childAt(3).text()).toBe('£tbd');
    expect(bottomSectionPartial.childAt(1).childAt(0).text()).toBe('Gender:');
    expect(bottomSectionPartial.childAt(1).childAt(1).childAt(0).text()).toBe('tbd');
  });

  it('Displays the couple information correctly', () => {
    expect(bottomSection.childAt(2).childAt(0).text()).toBe('Couple?');
    expect(bottomSection.childAt(2).childAt(1).text()).toBe('Non-Couple');
  });

  it('Displays placeholder information if no couple info is available', () => {
    const bottomSectionPartial = partialContainer.find('.userProfileAboutBottomSection');
    expect(bottomSectionPartial.childAt(2).childAt(1).text()).toBe('tbd');
  });

  it('Displays the smoking information correctly', () => {
    expect(bottomSection.childAt(3).childAt(0).text()).toBe('Smoking?');
    expect(bottomSection.childAt(3).childAt(1).text()).toBe('Smoking');
  });

  it('Displays placeholder information if no smoking info is provided', () => {
    expect(bottomSectionPartial.childAt(3).childAt(1).text()).toBe('tbd');
  });

  it('Displays the pets information properly', () => {
    expect(bottomSection.childAt(4).childAt(0).text()).toBe('Pets?');
    expect(bottomSection.childAt(4).childAt(1).text()).toBe('Cats.');
  });

  it('Displays a placeholder if there is no pet information provided', () => {
    expect(bottomSectionPartial.childAt(4).childAt(1).text()).toBe('tbd');
  });
});
