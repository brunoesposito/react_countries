/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useState,
  useEffect,
  createRef,
  useCallback,
  useLayoutEffect,
} from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

import {
  Container,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Modal,
  IconButton,
} from '@material-ui/core';
import {Edit, ArrowLeft} from '@material-ui/icons';

import ModalEdit from './components/Modal';
import {
  BoxCountry,
  BoxCountryAvatar,
  BoxCountryImage,
  BoxDistance,
  BoxDistanceText,
  GoBack,
} from './styles';

const Details = () => {
  const history = useHistory();
  const {state} = useLocation();
  const {name} = useParams();
  const modalRef = createRef();

  const [open, setOpen] = useState(false);
  const [countryCapital, setCountryCapital] = useState(state.country.capital);

  const handleModal = () => {
    setOpen(!open);
  };

  const getStorageAndUpdateInfo = useCallback(async () => {
    const local = JSON.parse(
      await localStorage.getItem('@react_countries:update'),
    );

    if (local) {
      local.find((lo) => {
        if (lo.country === name) {
          setCountryCapital(lo.capital);
        }
      });
    }
  }, [name]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  useEffect(() => {
    getStorageAndUpdateInfo();
  }, [getStorageAndUpdateInfo]);

  return (
    <Container fixed>
      <GoBack
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={() => history.push('/')}
      >
        <ArrowLeft /> Voltar
      </GoBack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <BoxCountry>
            <CardHeader
              avatar={
                <BoxCountryAvatar aria-label="recipe">
                  {state.emoji}
                </BoxCountryAvatar>
              }
              action={
                <IconButton aria-label="settings" onClick={() => handleModal()}>
                  <Edit />
                </IconButton>
              }
              title={name}
              subheader={`Capital: ${countryCapital}`}
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
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleModal}>
        <ModalEdit ref={modalRef} name={name} />
      </Modal>
    </Container>
  );
};

export default Details;
