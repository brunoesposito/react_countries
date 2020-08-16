import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI_GRAPHCOUNTRIES,
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query GetCountries {
      Flag {
        emoji
        svgFile
        emojiUnicode
        country {
          name
          capital
          currencies {
            name
            symbol
          }
          timezones {
            name
          }
          distanceToOtherCountries(first: 5) {
            distanceInKm
            countryName
          }
        }
      }
    }
  `,
});

export default client;
