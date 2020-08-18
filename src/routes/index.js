import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {useQuery, gql} from '@apollo/client';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Error from '../pages/Error';

const Routes = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1a7ecf',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
        },
      },
    },
  });
  const EXCHANGE_COUNTRIES = gql`
    query GetExchangeCountries {
      Flag {
        emoji
        svgFile
        emojiUnicode
        country {
          name
          capital
          area
          population
          currencies {
            name
            symbol
          }
          officialLanguages {
            name
          }
          timezones {
            name
          }
          topLevelDomains {
            name
          }
          distanceToOtherCountries(first: 5) {
            distanceInKm
            countryName
          }
          officialLanguages {
            name
          }
          nameTranslations(filter: {languageCode: "pt"}) {
            value
          }
        }
      }
    }
  `;
  const {loading, error, data} = useQuery(EXCHANGE_COUNTRIES);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home loading={loading} error={error} data={data} />
          </Route>
          <Route path="/country/:name">
            <Details />
          </Route>
          <Route path="*">
            <Error noPath />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
