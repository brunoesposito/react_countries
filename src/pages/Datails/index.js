/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

import {
  Container,
  Grid,
  Link,
  Button,
  CardHeader,
  CardContent,
  Typography,
  Hidden,
} from '@material-ui/core';

import {
  Bread,
  BoxDistance,
  BoxDistanceText,
  BoxCountry,
  BoxCountryImage,
  BoxCountryAvatar,
} from './styles';

const Datails = () => {
  const history = useHistory();
  const {state} = useLocation();
  const {name} = useParams();

  return (
    <Container fixed>
      <Bread aria-label="breadcrumb">
        <Link color="inherit" onClick={() => history.push('/')}>
          Home
        </Link>
        <Typography color="textPrimary">country</Typography>
        <Typography color="textPrimary">{name}</Typography>
      </Bread>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <BoxCountry>
            <CardHeader
              avatar={
                <BoxCountryAvatar aria-label="recipe">
                  {state.emoji}
                </BoxCountryAvatar>
              }
              title={name}
              subheader={`Capital: ${state.country.capital}`}
            />
            <BoxCountryImage image={state.svgFile} title={name} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom variant="inherit" component="p">
                    <b>Área do {name}:</b>{' '}
                    {Number(state.country.area)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                    (km²)
                  </Typography>
                  <Typography gutterBottom variant="inherit" component="p">
                    <b>População:</b>{' '}
                    {Number(state.country.population)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </Typography>
                  <Typography gutterBottom variant="inherit" component="p">
                    <b>Fuso Horário:</b> {state.country.timezones[0].name}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom variant="inherit" component="p">
                    <b>Domínio utilizado:</b>{' '}
                    {state.country.topLevelDomains[0].name}
                  </Typography>
                  <Typography gutterBottom variant="inherit" component="p">
                    <b>Moeda:</b> {state.country.currencies[0].name}(
                    {state.country.currencies[0].symbol})
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </BoxCountry>
          <Hidden only={['xs', 'sm']}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push('/')}
            >
              Voltar
            </Button>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={4}>
          <BoxCountry>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                Os 5 países mais próximos
              </Typography>
              {state.country.distanceToOtherCountries.map((country) => (
                <BoxDistance key={country.countryName}>
                  <CardContent>
                    <BoxDistanceText variant="h5" component="h2">
                      {country.countryName}
                    </BoxDistanceText>
                    <BoxDistanceText variant="body2" component="p">
                      {Number(country.distanceInKm).toFixed(0)}KM de distância
                    </BoxDistanceText>
                  </CardContent>
                </BoxDistance>
              ))}
            </CardContent>
          </BoxCountry>
          <Hidden only={['md', 'lg', 'xl']}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push('/')}
            >
              Voltar
            </Button>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Datails;
