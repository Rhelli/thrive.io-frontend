import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PropertyListItemComponent from '../PropertyListItemComponent';

Enzyme.configure({ adapter: new Adapter() });

const properties = [
  {
    id: 1,
    title: 'Dolorem fuga provident.',
    blurb: 'Necessitatibus et ex et maiores provident dolorum est eius enim dignissimos sit magnam.',
    address: '152 Chanelle Villages',
    town: 'Brixton',
    postcode: 'SW18 9NB',
    price: 1050,
    deposit: 802,
    bills: 'Included',
    furnished: 'Furnished',
    parking: 'No Parking',
    outsideArea: [],
    disabledAccess: 'No Disabled Access',
    internet: 'Internet Included',
    occupantCount: 7,
    roomCount: 8,
    minAge: 18,
    maxAge: 51,
    smoking: 'Any',
    pets: ['None'],
    genders: ['Female', 'Transgender', 'Male', 'Female', 'Male', 'Transgender', 'Transgender'],
    occupations: ['Student', 'Professional', 'Student', 'Professional', 'Professional', 'Student', 'Student'],
  },
  {
    id: 2,
    title: 'Non in beatae unde nostrum hic.',
    blurb: 'Et unde dignissimos qui eveniet ipsa blanditiis quasi sunt dicta alias est ut eaque iusto excepturi ea voluptatem tempora officiis voluptatem sed amet.',
    address: '999 Graham Crossing',
    town: 'Bayswater',
    postcode: 'SW6 1PW',
    price: 1475,
    deposit: 1042,
    bills: 'Not Included',
    furnished: 'Furnished',
    parking: 'Parking',
    outsideArea: [],
    disabledAccess: 'No Disabled Access',
    internet: 'No Internet Included',
    occupantCount: 4,
    roomCount: 5,
    minAuge: 29,
    maxAuge: 59,
    smoking: 'Any',
    pets: ['Rodents'],
    genders: ['Male', 'Female', 'Male', 'Transgender'],
    occupations: ['Professional', 'Professional', 'Professional', 'Professional'],
  },
];
const noProperties = [];
const propertyClickThrough = jest.fn(() => 'Now on property page.');
const handlePropertyOptionButton = jest.fn(() => 'Property option button clicked');
const shortlistListItemType = 'Shortlist';
const manageListItemType = 'Manage';

const shortlistPropertyListItemComponent = (
  <PropertyListItemComponent
    properties={properties}
    propertyClickThrough={propertyClickThrough}
    handlePropertyOptionButton={handlePropertyOptionButton}
    listItemType={shortlistListItemType}
  />
);

const emptyShortlistPropertyListItemComponent = (
  <PropertyListItemComponent
    properties={noProperties}
    propertyClickThrough={propertyClickThrough}
    handlePropertyOptionButton={handlePropertyOptionButton}
    listItemType={shortlistListItemType}
  />
);

const managePropertyListItemComponent = (
  <PropertyListItemComponent
    properties={properties}
    propertyClickThrough={propertyClickThrough}
    handlePropertyOptionButton={handlePropertyOptionButton}
    listItemType={manageListItemType}
  />
);

describe('The appearance and functionality of the PropertyListItemComponent when it is in shortlist mode', () => {
  const container = mount(shortlistPropertyListItemComponent);
  const propertyList = container.find('.propertyList');
  const firstProperty = propertyList.at(0).childAt(0);

  it('Matches the previous snapshot of the shortlist PropertyListItemComponent', () => {
    const tree = renderer.create(shortlistPropertyListItemComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a master container with the appropriate attributes', () => {
    const container = mount(shortlistPropertyListItemComponent);
    expect(container.childAt(0).name()).toBe('div');
    expect(container.childAt(0).hasClass('propertyListItemContainer')).toBe(true);
  });

  it('Iterates over and displays the correct number of shortlisted properties as passed in via the properties prop', () => {
    const container = mount(shortlistPropertyListItemComponent);
    expect(container.find('.propertyList').length).toBe(2);
  });

  it('Displays nothing but a friendly message if there are no properties in the shortlist', () => {
    const emptyContainer = mount(emptyShortlistPropertyListItemComponent);
    expect(emptyContainer.find('.propertyList').length).toBe(0);
    const errorMessages = emptyContainer.find('.noPropertiesMessages');
    expect(errorMessages.childAt(0).text()).toBe("There isn't anything here!");
  });

  it('Displays the property image element correctly', () => {
    expect(firstProperty.childAt(0).name()).toBe('div');
    expect(firstProperty.childAt(0).hasClass('propertyImage')).toBe(true);
    expect(firstProperty.childAt(0).childAt(0).text()).toBe('IMAGE');
  });

  it('Displays the property title and price correctly', () => {
    expect(firstProperty.childAt(1).hasClass('propertyInfoContainer')).toBe(true);
    expect(firstProperty.childAt(1).childAt(0).children().length).toBe(2);
    expect(firstProperty.childAt(1).childAt(0).childAt(0).text()).toBe('Dolorem fuga provident.');
    expect(firstProperty.childAt(1).childAt(0).childAt(1).text()).toBe('£1050');
  });

  it('Displays the property address and town correctly', () => {
    expect(firstProperty.childAt(1).childAt(1).hasClass('propertyLocation')).toBe(true);
    expect(firstProperty.childAt(1).childAt(1).childAt(0).hasClass('propertyLocationIcon'));
    expect(firstProperty.childAt(1).childAt(1).childAt(0).childAt(0).name()).toBe('FontAwesomeIcon');
    expect(firstProperty.childAt(1).childAt(1).childAt(1).hasClass('propertyAddress')).toBe(true);
    expect(firstProperty.childAt(1).childAt(1).childAt(1).childAt(0).text()).toBe('152 Chanelle Villages, Brixton');
  });

  it('Displays the property room and flatmate count correctly', () => {
    expect(firstProperty.childAt(1).childAt(2).hasClass('propertyDetails')).toBe(true);
    expect(firstProperty.childAt(1).childAt(2).childAt(0).childAt(0).name()).toBe('FontAwesomeIcon');
    expect(firstProperty.childAt(1).childAt(2).childAt(0).childAt(1).text()).toBe('8 Rooms');
    expect(firstProperty.childAt(1).childAt(2).childAt(1).childAt(0).name()).toBe('FontAwesomeIcon');
    expect(firstProperty.childAt(1).childAt(2).childAt(1).childAt(1).text()).toBe('7 Flatmates');
  });

  it('Formats and displays the occupations of the flatmates correctly', () => {
    expect(firstProperty.childAt(1).childAt(2).childAt(2).childAt(0).name()).toBe('FontAwesomeIcon');
    expect(firstProperty.childAt(1).childAt(2).childAt(2).childAt(1).text()).toBe('Student');
  });

  it('Displays a functioning shortlist delete button', () => {
    const deleteButton = container.find('.shortlistDeleteButtonContainer');
    expect(deleteButton.at(0).childAt(0).name()).toBe('button');
    deleteButton.at(0).childAt(0).simulate('click');
    expect(handlePropertyOptionButton).toHaveBeenCalledTimes(1);
  });
});

describe('The appearance and functionality of the PropertyListItem component when in manage mode', () => {
  const container = mount(managePropertyListItemComponent);
  const propertyList = container.find('.propertyList');
  const firstProperty = propertyList.at(0).childAt(0);

  it('Displays a functioning settings button in the property image', () => {
    expect(firstProperty.childAt(0).childAt(0).name()).toBe('button');
    expect(firstProperty.childAt(0).childAt(0).hasClass('propertySettingsButton')).toBe(true);
    firstProperty.childAt(0).childAt(0).simulate('click');
    expect(handlePropertyOptionButton).toHaveBeenCalledTimes(1);
  });
});

