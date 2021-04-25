import React, { useState as useStateMock } from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import EditEmailFormComponent from '../EditEmailFormComponent';

Enzyme.configure({ adapter: new Adapter() });

const userProfile = {
  email: 'steve@email.com',
  id: 1,
};

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setEmail = jest.fn();
const setEmailError = jest.fn();
const emailError = null;

const handleEmailUpdate = jest.fn(() => 'Clicked!');

const editEmailFormComponent = (
  <EditEmailFormComponent
    userProfile={userProfile}
    handleEmailUpdate={handleEmailUpdate}
    emailError={emailError}
    setEmail={setEmail}
    setEmailError={setEmailError}
  />
);

describe('The appreance and functionality of the EditEmailForm component', () => {
  const container = mount(editEmailFormComponent);

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setEmail]);
    useStateMock.mockImplementation(init => [init, setEmailError]);
  });

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(editEmailFormComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a main container and form with the correct attributes', () => {
    expect(container.childAt(0).hasClass('editEmailFormContainer')).toBe(true);
    expect(container.childAt(0).childAt(0).name()).toBe('form');
  });

  it('Will sumbit the form if it is manually submitted at form level', () => {
    container.childAt(0).childAt(0).simulate('submit');
    expect(handleEmailUpdate).toHaveBeenCalledTimes(1);
  });

  it('Displays the email address area correctly', () => {
    expect(container.find('.textInput').childAt(0).childAt(0).text()).toBe('Your Email Address');
  });

  it('Pre-populates the email input field with the users current email address', () => {
    expect(container.find('.textInput').childAt(0).childAt(2).instance().value).toBe('steve@email.com');
  });
});
