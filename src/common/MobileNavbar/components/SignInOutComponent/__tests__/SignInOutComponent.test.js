import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import SignInOutComponent from '../SignInOutComponent';

const lookingAuthInfo = {
  signedIn: true,
  authInfo: '',
  user: {
    name: 'Steve',
    userType: 'Looking',
  },
};

const lookingSignInOut = (
  <SignInOutComponent authInfo={lookingAuthInfo} />
);

const flatmateAuthInfo = {
  signedIn: true,
  authInfo: '',
  user: {
    name: 'Kyle',
    userType: 'Advertising',
    advertiserType: 'Flatmate',
  },
};

const flatmateSignInOut = (
  <SignInOutComponent authInfo={flatmateAuthInfo} />
);

const landlordAuthInfo = {
  signedIn: true,
  authInfo: '',
  user: {
    name: 'Paul',
    userType: 'Advertising',
    advertiserType: 'Landlord',
  },
};

const landlordSignInOut = (
  <SignInOutComponent authInfo={landlordAuthInfo} />
);

const unsignedAuthInfo = {
  signedIn: false,
  userType: '',
  authInfo: 'Unauthorized',
  user: {},
};

const unsignedSignInOut = (
  <SignInOutComponent authInfo={unsignedAuthInfo} />
);



describe("The appearance and functionality of the SignInOut component when the user is a 'looking' type", () => {
  it("Matches the snapshot of the SignInOut component in the 'looking' state", () => {
    const tree = renderer.create(lookingSignInOut).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains the shortlist link', () => {
    const { container, getByText } = render(lookingSignInOut);
    expect(container.firstChild.firstChild.nodeName).toBe('A');
    expect(container.firstChild.firstChild).toHaveAttribute('href', '/shortlist');
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.firstChild.lastChild.nodeName).toBe('P');
    getByText('Shortlist');
  });

  it('Contains the user profile link', () => {
    const { container, getByText } = render(lookingSignInOut);
    expect(container.firstChild.lastChild.nodeName).toBe('A');
    expect(container.firstChild.lastChild).toHaveAttribute('href', '/myaccount');
    expect(container.firstChild.lastChild.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.lastChild.lastChild.nodeName).toBe('P');
    getByText('Steve');
  });
});

describe("The appearance and functionality of the SignInOut component when the user is an 'advertising flatmate' type", () => {
  it("Matches the snapshot of the SignInOut component in the 'advertising flatmate' state", () => {
    const tree = renderer.create(flatmateSignInOut);
    expect(tree).toMatchSnapshot();
  });

  it("Contains the 'Manage' link and it's contents", () => {
    const { container, getByText } = render(flatmateSignInOut);
    expect(container.firstChild.firstChild.nodeName).toBe('A');
    expect(container.firstChild.firstChild).toHaveAttribute('href', '/manage-properties');
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.firstChild.lastChild.nodeName).toBe('P');
    getByText('Manage');
  });

  it('Contains the customised user profile link', () => {
    const { container, getByText } = render(flatmateSignInOut);
    expect(container.firstChild.firstChild.nodeName).toBe('A');
    expect(container.firstChild.lastChild).toHaveAttribute('href', '/myaccount');
    expect(container.firstChild.lastChild.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.lastChild.lastChild.nodeName).toBe('P');
    getByText('Kyle');
  });
});

describe("The appearance and functionality of the SignInOut component when the user is the 'advertising landlord' type", () => {
  it('Matches the previous snapshot of the SignInOut component when the user is a landlord', () => {
    const tree = renderer.create(landlordSignInOut);
    expect(tree).toMatchSnapshot();
  });

  it("Contains the 'Manage' link and it's contents", () => {
    const { container, getByText } = render(landlordSignInOut);
    expect(container.firstChild.firstChild.nodeName).toBe('A');
    expect(container.firstChild.firstChild).toHaveAttribute('href', '/manage-properties');
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.firstChild.lastChild.nodeName).toBe('P');
    getByText('Manage');
  });

  it('Contains the customised user profile link', () => {
    const { container, getByText } = render(landlordSignInOut);
    expect(container.firstChild.firstChild.nodeName).toBe('A');
    expect(container.firstChild.lastChild).toHaveAttribute('href', '/myaccount');
    expect(container.firstChild.lastChild.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.lastChild.lastChild.nodeName).toBe('P');
    getByText('Paul');
  });
});
