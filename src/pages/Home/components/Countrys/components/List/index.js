/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

import SkeletonLoader from '../Skeleton';
import {FixText} from './styles';

const List = ({filterData}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [getLocal, setGetLocal] = useState([]);

  const getStorageAndUpdateInfo = async () => {
    const local = JSON.parse(
      await localStorage.getItem('@react_countries:update'),
    );
    setGetLocal(local);
  };

  const getLoopAndEdit = (data) => {
    let nameCountry = data.country.nameTranslations[0].value;
    let nameCapital = data.country.capital;

    if (getLocal) {
      getLocal.find((lo) => {
        if (lo.country === nameCountry) {
          nameCountry = lo.name;
          nameCapital = lo.capital;
        }
      });
    }

    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image={data.svgFile}
            title={data.country.nameTranslations[0].value}
            height="140"
            component="img"
          />
          <CardContent>
            <FixText gutterBottom variant="h5" component="h1">
              {data.emoji} {nameCountry}
            </FixText>
            <FixText variant="subtitle1" component="p">
              <b>Capital:</b> {nameCapital}
            </FixText>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => history.push(`/country/${nameCountry}`, data)}
          >
            Mais detalhes
          </Button>
        </CardActions>
      </Card>
    );
  };

  useEffect(() => {
    setLoading(false);
    getStorageAndUpdateInfo();
  }, []);

  return Object.keys(filterData).length > 0 ? (
    filterData.map((data) => (
      <Grid item xs={6} md={3} key={data.emojiUnicode}>
        {getLoopAndEdit(data)}
      </Grid>
    ))
  ) : (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flexGrow={1}
        >
          <Typography gutterBottom variant="h4" component="h4">
            Ops!
          </Typography>
          <Typography variant="subtitle1" component="p">
            Nenhum país foi encontrado, apague a pesquisa ou digite outro nome.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default List;
