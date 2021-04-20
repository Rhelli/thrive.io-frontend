import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SignInBrandingHeaderComponent from '../SignInBrandingHeaderComponent';

Enzyme.configure({ adapter: new Adapter() });

const signInBrandingHeaderComponent = (
  <SignInBrandingHeaderComponent />
);

describe('The appearance and functionality of the component', () => {
  const container = mount(signInBrandingHeaderComponent);

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(signInBrandingHeaderComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has the correct container name', () => {
    expect(container.childAt(0).hasClass('brandingHeader')).toBe(true);
  });

  it('Displays the thrive logo image', () => {
    expect(container.childAt(0).childAt(0).name()).toBe('img');
    expect(container.childAt(0).childAt(0).prop('src')).toBe('thrive-full-transparent-alt.png');
  });
});
