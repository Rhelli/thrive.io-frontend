import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PropertyMoreInfoGrid from '../PropertyMoreInfoGrid';

Enzyme.configure({ adapter: new Adapter() });

const property = {
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
};

const propertyMoreInfoGrid = (
  <PropertyMoreInfoGrid property={property} />
);

describe('The appearance and functionality of the propertyListGrid component', () => {
  const container = mount(propertyMoreInfoGrid);
  const grid = container.find('.infoSegmentsContainer');

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(propertyMoreInfoGrid).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a master container with the correct attributes and a title', () => {
    expect(container.childAt(0).hasClass('additionalInfoContainer')).toBe(true);
    expect(container.childAt(0).childAt(0).text()).toBe('Additional Information');
  });

  it('Displays the bills correctly', () => {
    expect(grid.childAt(0).childAt(0).childAt(1).text()).toBe('Bills?');
    expect(grid.childAt(0).childAt(0).childAt(2).text()).toBe('Not Included');
  });

  it('Displays the internet info correctly', () => {
    expect(grid.childAt(0).childAt(1).childAt(1).text()).toBe('Internet?');
    expect(grid.childAt(0).childAt(1).childAt(2).text()).toBe('No Internet Included');
  });

  it('Displays the furnished info correctly', () => {
    expect(grid.childAt(1).childAt(0).childAt(1).text('Furnished?'));
    expect(grid.childAt(1).childAt(0).childAt(2).text('Furnished'));
  });

  it('Displays the outside area info correctly', () => {
    expect(grid.childAt(1).childAt(1).childAt(1).text()).toBe('Outside Areas?');
    expect(grid.childAt(1).childAt(1).childAt(2).text()).toBe('None');
  });

  it('Displays the pets info correctly', () => {
    expect(grid.childAt(2).childAt(0).childAt(1).text()).toBe('Pets?');
    expect(grid.childAt(2).childAt(0).childAt(2).text()).toBe('Rodents');
  });

  it('Displays the smoking info correctly', () => {
    expect(grid.childAt(2).childAt(1).childAt(1).text()).toBe('Smoking?');
    expect(grid.childAt(2).childAt(1).childAt(2).text()).toBe('Any');
  });

  it('Displays the disabled access info correctly', () => {
    expect(grid.childAt(3).childAt(0).childAt(1).text()).toBe('Disabled Access?');
    expect(grid.childAt(3).childAt(0).childAt(2).text()).toBe('No Disabled Access');
  });

  it('Displays the parking info correctly', () => {
    expect(grid.childAt(3).childAt(1).childAt(1).text()).toBe('Parking?');
    expect(grid.childAt(3).childAt(1).childAt(2).text()).toBe('Parking');
  });
});
