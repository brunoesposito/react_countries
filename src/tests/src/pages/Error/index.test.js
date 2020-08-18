/* eslint-disable jest/expect-expect */
import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';

import Error from '../../../../pages/Error';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('react-lottie', () => 'react-lottie');

describe('Structure testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Error />, div);
  });

  it('Searching and checking the page title', () => {
    render(<Error />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Algo de errado aconteceu!',
    );
  });
});
