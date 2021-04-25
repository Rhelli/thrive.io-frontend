import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import MobileNavbarLinksComponent from '../MobileNavbarLinksComponent';

const mobileNavbarLinksComponent = (
  <MobileNavbarLinksComponent />
);

describe('The appearance and functionality of the mobileNavbarLinks component', () => {
  it('Matches the previous snapshot of the MobileNavbarLinksComponent', () => {
    const tree = renderer.create(mobileNavbarLinksComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a master container with the correctly provided class name', () => {
    const { container } = render(mobileNavbarLinksComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('mobileNavbarLinksContainer')).toBe(true);
  });

  it("Contains and displays the fixed 'home' link correctly", () => {
    const { container, getByText } = render(mobileNavbarLinksComponent);
    const homeLink = container.firstChild.firstChild;
    expect(homeLink.nodeName).toBe('A');
    expect(homeLink).toHaveAttribute('href', '/');
    expect(homeLink.firstChild.nodeName).toBe('svg');
    expect(homeLink.firstChild.nextSibling.nodeName).toBe('P');
    getByText('Home');
  });

  it("Contains and displays the fixed 'Flatmates' link correctly", () => {
    const { container, getByText } = render(mobileNavbarLinksComponent);
    const flatmatesLink = container.firstChild.firstChild.nextSibling;
    expect(flatmatesLink.nodeName).toBe('A');
    expect(flatmatesLink).toHaveAttribute('href', '/looking');
    expect(flatmatesLink.firstChild.nodeName).toBe('svg');
    expect(flatmatesLink.lastChild.nodeName).toBe('P');
    getByText('Flatmates');
  });

  it("Contains and displays the fixed 'Properties' link correctly", () => {
    const { container, getByText } = render(mobileNavbarLinksComponent);
    const propertiesLink = container.firstChild.lastChild;
    expect(propertiesLink.nodeName).toBe('A');
    expect(propertiesLink).toHaveAttribute('href', '/advertising');
    expect(propertiesLink.firstChild.nodeName).toBe('svg');
    expect(propertiesLink.lastChild.nodeName).toBe('P');
    getByText('Properties');
  });
});
