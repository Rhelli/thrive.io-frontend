import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ProfileSettingsNavbar from '../ProfileSettingsNavbar';

const handleBackButtonClick = jest.fn(() => 'Clicked!');

const profileSettingsNavbar = (
  <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
);

describe('The appearance and functionality of the ProfileSettingsNavbar component', () => {
  it('Should match the previous snapshot', () => {
    const tree = renderer.create(profileSettingsNavbar).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a master container with the correct attributes', () => {
    const { container } = render(profileSettingsNavbar);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('profileSettingsNavbarContainer')).toBe(true);
  });

  it('Contains the title span element with the button and title inside it', () => {
    const { container, getByText } = render(profileSettingsNavbar);
    const span = container.firstChild.firstChild;
    expect(span.nodeName).toBe('SPAN');
    expect(span.firstChild.nodeName).toBe('BUTTON');
    expect(span.firstChild.firstChild.nodeName).toBe('svg');
    expect(span.lastChild.nodeName).toBe('H1');
    getByText('Settings');
  });

  it('Contains the image span with the thrive logo inside of it', () => {
    const { container } = render(profileSettingsNavbar);
    const span = container.firstChild.lastChild;
    expect(span.firstChild.nodeName).toBe('IMG');
    expect(span.firstChild).toHaveAttribute('src', 'thrive-t-transparent.png');
  });
});
