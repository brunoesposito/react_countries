/* eslint-disable jest/expect-expect */
import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Details from '../../../../pages/Details';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    state: {
      __typename: 'Flag',
      emoji: '🇦🇫',
      svgFile: 'https://restcountries.eu/data/afg.svg',
      emojiUnicode: 'U+1F1E6 U+1F1EB',
      country: {
        __typename: 'Country',
        name: 'Afghanistan',
        capital: 'Kabul',
        area: 652230,
        population: 27657145,
        currencies: [
          {__typename: 'Currency', name: 'Afghan afghani', symbol: '؋'},
        ],
        officialLanguages: [
          {__typename: 'Language', name: 'Turkmen'},
          {__typename: 'Language', name: 'Uzbek'},
          {__typename: 'Language', name: 'Pashto'},
        ],
        timezones: [{__typename: 'Timezone', name: 'UTC+04:30'}],
        topLevelDomains: [{__typename: 'TopLevelDomain', name: '.af'}],
        distanceToOtherCountries: [
          {
            __typename: 'DistanceToOtherCountry',
            distanceInKm: 580.1756134947343,
            countryName: 'Pakistan',
          },
          {
            __typename: 'DistanceToOtherCountry',
            distanceInKm: 858.6712938343873,
            countryName: 'Tajikistan',
          },
          {
            __typename: 'DistanceToOtherCountry',
            distanceInKm: 894.9634913698932,
            countryName: 'Uzbekistan',
          },
          {
            __typename: 'DistanceToOtherCountry',
            distanceInKm: 898.1622450790759,
            countryName: 'Turkmenistan',
          },
          {
            __typename: 'DistanceToOtherCountry',
            distanceInKm: 1131.4927206301777,
            countryName: 'Iran (Islamic Republic of)',
          },
        ],
        nameTranslations: [{__typename: 'Translation', value: 'Afeganistão'}],
      },
    },
  }),
  useParams: () => ({
    push: jest.fn(),
  }),
}));

describe('Structure testing', () => {
  it('renders without crashing', () => {
    window.scrollTo = jest.fn();
    const div = document.createElement('div');
    render(<Details />, div);
  });
});
