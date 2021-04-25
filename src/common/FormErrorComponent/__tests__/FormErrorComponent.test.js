import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import FormErrorComponent from '../FormErrorComponent';

const formErrorComponent = (
  <FormErrorComponent errorMessage="error!" />
);

describe('The appearance and functionality of the FormErrorComponent', () => {
  it('Matches the FormErrorComponent snapshot', () => {
    const tree = renderer.create(formErrorComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains a single paragraph element', () => {
    const { container } = render(formErrorComponent);
    expect(container.firstChild.nodeName).toBe('P');
    expect(container.firstChild.classList.contains('errorMessage')).toBe(true);
  });

  it('Renders the text passed into it via props', () => {
    const { getByText } = render(formErrorComponent);
    getByText('error!');
  });
});
