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

function List({filterData}) {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return Object.keys(filterData).length > 0 ? (
    filterData.map((data) => (
      <Grid item xs={6} md={3} key={data.emojiUnicode}>
        <Card>
          <CardActionArea>
            <CardMedia
              image={data.svgFile}
              title={data.country.nameTranslations[0].value}
              height="140"
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h1">
                {data.emoji} {data.country.nameTranslations[0].value}
              </Typography>
              <Typography variant="subtitle1" component="p">
                <b>Capital:</b> {data.country.capital}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                history.push(
                  `/country/${data.country.nameTranslations[0].value}`,
                  data,
                )
              }
            >
              Mais detalhes
            </Button>
          </CardActions>
        </Card>
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
}

export default List;
