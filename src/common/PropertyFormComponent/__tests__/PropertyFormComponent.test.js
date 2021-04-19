import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PropertyFormComponent from '../PropertyFormComponent';

Enzyme.configure({ adapter: new Adapter() });

const handleFormSubmission = jest.fn(() => 'Form Submitted');
const ownerId = 1;
const singleProperty = {
  address: '10 Everest Road',
  bills: 'Included',
  blurb: 'A lovely house',
  deposit: 500,
  disabledAccess: 'No Disabled Access',
  furnished: 'Furnished',
  genders: ['Male', 'Male', 'Male'],
  id: 2,
  internet: 'Internet Included',
  maxAge: 29,
  minAge: 26,
  occupantCount: 3,
  occupations: ['Professional', 'Professional', 'Professional'],
  outsideArea: ['Garden'],
  parking: 'No Parking',
  pets: ['Dogs'],
  postcode: 'TW12 0HG',
  price: 1200,
  roomCount: 6,
  smoking: 'Any',
  title: 'Small Residential House',
  town: 'Bethlehem',
};

const emptySingleProperty = {
  address: '',
  bills: '',
  blurb: '',
  deposit: null,
  disabledAccess: '',
  furnished: '',
  genders: [''],
  id: null,
  internet: '',
  maxAge: null,
  minAge: null,
  occupantCount: null,
  occupations: [''],
  outsideArea: [''],
  parking: '',
  pets: [''],
  postcode: '',
  price: null,
  roomCount: null,
  smoking: '',
  title: '',
  town: '',
};

const propertyFormComponent = (
  <PropertyFormComponent
    handleFormSubmission={handleFormSubmission}
    ownerId={ownerId}
    singleProperty={singleProperty}
  />
);

const emptyPropertyFormComponent = (
  <PropertyFormComponent
    handleFormSubmission={handleFormSubmission}
    ownerId={ownerId}
    singleProperty={emptySingleProperty}
  />
);

describe("The appearance and functionality of the PropertyForm component's container and form elements", () => {
  it('Matches the previous snapshot of the PropertyForm component', () => {
    const tree = renderer.create(emptyPropertyFormComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains a master container', () => {
    const { container } = render(emptyPropertyFormComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
  });

  it('Contains the form element with the relevant classes and event handlers', () => {
    const { container } = render(emptyPropertyFormComponent);
    expect(container.firstChild.firstChild.nodeName).toBe('FORM');
  });

  it('Submits the form when the form is submitted inline', () => {
    const container = mount(emptyPropertyFormComponent);
    const form = container.find('.newPropertyFormContainer');
    form.simulate('submit');
    expect(handleFormSubmission).toHaveBeenCalledTimes(1);
  });
});

describe('The appearance and functionality of the PropertyForm components text input fields', () => {
  it('Contains a text input field for the title', () => {
    const container = mount(emptyPropertyFormComponent);
    const titleDiv = container.find('#titleInput');
    expect(titleDiv.name()).toBe('div');
    expect(titleDiv.hasClass('textInputContainer')).toBe(true);
    const titleLabel = titleDiv.childAt(0);
    expect(titleLabel.name()).toBe('label');
    expect(titleLabel.childAt(0).name()).toBe('h3');
    expect(titleLabel.childAt(0).text()).toBe('Title *');
    expect(titleLabel.childAt(1).name()).toBe('input');
    expect(titleLabel.childAt(1).text()).toBe('');
  });

  it('Pre-populates the title input field when a property is provided', () => {
    const container = mount(propertyFormComponent);
    const titleInput = container.find('#titleInput').childAt(0).childAt(1);
    expect(titleInput.instance().value).toBe('Small Residential House');
  });

  it('Contains the text input field for the description', () => {
    const container = mount(emptyPropertyFormComponent);
    const descDiv = container.find('#descInput');
    expect(descDiv.name()).toBe('div');
    expect(descDiv.hasClass('textInputContainer')).toBe(true);
    const descLabel = descDiv.childAt(0);
    expect(descLabel.name()).toBe('label');
    expect(descLabel.childAt(0).name()).toBe('h3');
    expect(descLabel.childAt(1).name()).toBe('textarea');
    expect(descLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the description when a property is provided', () => {
    const container = mount(propertyFormComponent);
    const descInput = container.find('#descInput').childAt(0).childAt(1);
    expect(descInput.instance().value).toBe('A lovely house');
  });

  it('Contains the text input field for the address', () => {
    const container = mount(emptyPropertyFormComponent);
    const addressInput = container.find('#addressInput');
    expect(addressInput.name()).toBe('div');
    expect(addressInput.hasClass('textInputContainer')).toBe(true);
    const addressLabel = addressInput.childAt(0);
    expect(addressLabel.name()).toBe('label');
    expect(addressLabel.childAt(0).name()).toBe('h3');
    expect(addressLabel.childAt(1).name()).toBe('input');
    expect(addressLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the address input field when a property is provided', () => {
    const container = mount(propertyFormComponent);
    const addressInput = container.find('#addressInput').childAt(0).childAt(1);
    expect((addressInput).instance().value).toBe('10 Everest Road');
  });

  it('Contains the text input field for a town', () => {
    const container = mount(emptyPropertyFormComponent);
    const townInput = container.find('#townInput');
    expect(townInput.name()).toBe('div');
    expect(townInput.hasClass('textInputContainer')).toBe(true);
    const townLabel = townInput.childAt(0);
    expect(townLabel.childAt(0).name()).toBe('h3');
    expect(townLabel.childAt(0).text()).toBe('Town *');
    expect(townLabel.childAt(1).name()).toBe('input');
    expect(townLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the town input field when a property is provided', () => {
    const container = mount(propertyFormComponent);
    const townInput = container.find('#townInput').childAt(0).childAt(1);
    expect(townInput.instance().value).toBe('Bethlehem');
  });

  it('Contains the text input field for a postcode', () => {
    const container = mount(emptyPropertyFormComponent);
    const postcodeInput = container.find('#postcodeInput');
    expect(postcodeInput.name()).toBe('div');
    expect(postcodeInput.hasClass('textInputContainer'));
    const postcodeLabel = postcodeInput.childAt(0);
    expect(postcodeLabel.name()).toBe('label');
    expect(postcodeLabel.childAt(0).name()).toBe('h3');
    expect(postcodeLabel.childAt(1).name()).toBe('input');
    expect(postcodeLabel.childAt(0).text()).toBe('Postcode / ZipCode *');
    expect(postcodeLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the postcode input field if a property is provided', () => {
    const container = mount(propertyFormComponent);
    const postcodeInput = container.find('#postcodeInput').childAt(0).childAt(1);
    expect(postcodeInput.instance().value).toBe('TW12 0HG');
  });

  it('Contains the text input field for the price', () => {
    const container = mount(emptyPropertyFormComponent);
    const priceInput = container.find('#priceInput');
    expect(priceInput.name()).toBe('div');
    expect(priceInput.hasClass('textInputContainer'));
    const priceLabel = priceInput.childAt(0);
    expect(priceLabel.name()).toBe('label');
    expect(priceLabel.childAt(0).name()).toBe('h3');
    expect(priceLabel.childAt(1).name()).toBe('input');
    expect(priceLabel.childAt(0).text()).toBe('Rent *');
    expect(priceLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the price input field if a property is provided', () => {
    const container = mount(propertyFormComponent);
    const priceInput = container.find('#priceInput').childAt(0).childAt(1);
    expect(priceInput.instance().value).toBe('1200');
  });

  it('Contains the text input field for the deposit', () => {
    const container = mount(emptyPropertyFormComponent);
    const depositInput = container.find('#depositInput');
    expect(depositInput.name()).toBe('div');
    expect(depositInput.hasClass('textInputContainer'));
    const depositLabel = depositInput.childAt(0);
    expect(depositLabel.name()).toBe('label');
    expect(depositLabel.childAt(0).name()).toBe('h3');
    expect(depositLabel.childAt(1).name()).toBe('input');
    expect(depositLabel.childAt(0).text()).toBe('How Much Is The Deposit? *');
    expect(depositLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the deposit input field if a property is provided', () => {
    const container = mount(propertyFormComponent);
    const depositInput = container.find('#depositInput').childAt(0).childAt(1);
    expect(depositInput.instance().value).toBe('500');
  });

  it('Contains the text input field for the number of occupants', () => {
    const container = mount(emptyPropertyFormComponent);
    const occupantInput = container.find('#occupantInput');
    expect(occupantInput.name()).toBe('div');
    expect(occupantInput.hasClass('textInputContainer'));
    const occupantLabel = occupantInput.childAt(0);
    expect(occupantLabel.name()).toBe('label');
    expect(occupantLabel.childAt(0).name()).toBe('h3');
    expect(occupantLabel.childAt(1).name()).toBe('input');
    expect(occupantLabel.childAt(0).text()).toBe('How Many People Live Here Currently? *');
    expect(occupantLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the occupant count input field if a property is provided', () => {
    const container = mount(propertyFormComponent);
    const occupantInput = container.find('#occupantInput').childAt(0).childAt(1);
    expect(occupantInput.instance().value).toBe('3');
  });

  it('Contains the text input field for the number of rooms available', () => {
    const container = mount(emptyPropertyFormComponent);
    const roomInput = container.find('#roomInput');
    expect(roomInput.name()).toBe('div');
    expect(roomInput.hasClass('textInputContainer'));
    const roomLabel = roomInput.childAt(0);
    expect(roomLabel.name()).toBe('label');
    expect(roomLabel.childAt(0).name()).toBe('h3');
    expect(roomLabel.childAt(1).name()).toBe('input');
    expect(roomLabel.childAt(0).text()).toBe('How Many Rooms Are Available? *');
    expect(roomLabel.childAt(1).instance().value).toBe('');
  });

  it('Pre-populates the roomCount field if a property is provided', () => {
    const container = mount(propertyFormComponent);
    const roomInput = container.find('#roomInput').childAt(0).childAt(1);
    expect(roomInput.instance().value).toBe('6');
  });

  it('Contains two text input fields together for min and max ages in the property', () => {
    const container = mount(emptyPropertyFormComponent);
    const agesContainer = container.find('#agesInput');
    const minAgeContainer = agesContainer.childAt(0);
    const maxAgeContainer = agesContainer.childAt(1);
    expect(agesContainer.hasClass('propertyAges')).toBe(true);
    expect(minAgeContainer.name()).toBe('div');
    expect(maxAgeContainer.name()).toBe('div');
    expect(minAgeContainer.childAt(0).name()).toBe('label');
    expect(maxAgeContainer.childAt(0).name()).toBe('label');
    expect(minAgeContainer.childAt(0).childAt(0).name()).toBe('h3');
    expect(minAgeContainer.childAt(0).childAt(0).text()).toBe('Lowest Age');
    expect(maxAgeContainer.childAt(0).childAt(0).name()).toBe('h3');
    expect(maxAgeContainer.childAt(0).childAt(0).text()).toBe('Highest Age');
  });

  it('Pre-populates both of the age fields if a property is provided', () => {
    const container = mount(propertyFormComponent);
    const minAgeInput = container.find('#minAge');
    const maxAgeInput = container.find('#maxAge');
    expect(minAgeInput.instance().value).toBe('26');
    expect(maxAgeInput.instance().value).toBe('29');
  });
});
