import React, {useEffect, useState, useRef} from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import Close from '@material-ui/icons/Close';

import List from './components/List';
import {Header, BoxForm, TextInput, Empty} from './styles';

const Countrys = ({data}) => {
  const formRef = useRef(null);
  const [getFilter, setGetFilter] = useState('');
  const [filterData, setFilterData] = useState([]);

  const handleSubmit = ({country}) => {
    const cleanCountry = country
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    setGetFilter(cleanCountry.toLowerCase());
  };

  const deleteAndResetSearchForm = () => {
    formRef.current.reset();
    setGetFilter('');
  };

  useEffect(() => {
    if (getFilter) {
      return setFilterData(
        data.Flag.filter((flag) => {
          const cleanName = flag.country.nameTranslations[0].value
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

          return cleanName.match(getFilter);
        }),
      );
    }

    return setFilterData(data.Flag);
  }, [data, getFilter]);

  return (
    <>
      <Header>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h1">
              Todos os Países
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <BoxForm ref={formRef} onSubmit={handleSubmit}>
              <TextInput
                name="country"
                type="text"
                placeholder="Procura algum país?"
                variant="outlined"
              />
              <Button variant="contained" color="primary" type="submit">
                Buscar
              </Button>
            </BoxForm>
          </Grid>
        </Grid>
      </Header>
      {getFilter && (
        <Typography gutterBottom variant="inherit" component="p">
          Você pesquisou por: <b>{getFilter}</b>{' '}
          <Empty onClick={() => deleteAndResetSearchForm()}>
            <Close />
          </Empty>
        </Typography>
      )}
      <Grid container spacing={2}>
        <List filterData={filterData} />
      </Grid>
    </>
  );
};

export default Countrys;
