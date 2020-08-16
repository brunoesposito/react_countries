/* eslint-disable jest/expect-expect */
import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Error from '../index';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('react-lottie', () => 'react-lottie');

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Error />, div);
});
