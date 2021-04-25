import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import LoadingErrorMessageComponent from '../LoadingErrorMessageComponent';

const message = {
  message: 'this is the message',
};

const loadingErrorMessageComponent = (
  <LoadingErrorMessageComponent message={message} />
);

describe('The appearance and functionality of the LoadingErrorMessage component', () => {
  it('Matches the LoadingErrorMessage snapshot', () => {
    const tree = renderer.create(loadingErrorMessageComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains a master container with the correct styles class', () => {
    const { container } = render(loadingErrorMessageComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('loadingErrorContainer')).toBe(true);
  });

  it('Contains and displays the error message title', () => {
    const { container, getByText } = render(loadingErrorMessageComponent);
    expect(container.firstChild.firstChild.nodeName).toBe('H2');
    getByText('Oops!');
  });

  it('Contains and displays the error message provided by props in a paragraph tag', () => {
    const { container, getByText } = render(loadingErrorMessageComponent);
    expect(container.firstChild.lastChild.firstChild.nodeName).toBe('P');
    getByText('Error! this is the message');
  });
});
