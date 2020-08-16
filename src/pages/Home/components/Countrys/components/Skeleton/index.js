/* eslint-disable no-plusplus */
import React from 'react';
import {Grid, Card, CardActionArea, CardContent} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const SkeletonLoader = () => {
  return (
    <>
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <Skeleton variant="rect" width="100%" height={140} />
            <CardContent>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <br />
              <br />
              <Skeleton width="40%" />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <Skeleton variant="rect" width="100%" height={140} />
            <CardContent>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <br />
              <br />
              <Skeleton width="40%" />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <Skeleton variant="rect" width="100%" height={140} />
            <CardContent>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <br />
              <br />
              <Skeleton width="40%" />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <Skeleton variant="rect" width="100%" height={140} />
            <CardContent>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <br />
              <br />
              <Skeleton width="40%" />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <Skeleton variant="rect" width="100%" height={140} />
            <CardContent>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <br />
              <br />
              <Skeleton width="40%" />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <Skeleton variant="rect" width="100%" height={140} />
            <CardContent>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <br />
              <br />
              <Skeleton width="40%" />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default SkeletonLoader;
