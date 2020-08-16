import React from 'react';

import {Container} from '@material-ui/core';

import Error from '../Error';

import Loading from './components/Loading';
import Countrys from './components/Countrys';

const Home = ({loading, error, data}) => {
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Container fixed>
      <Countrys data={data} />
    </Container>
  );
};

export default Home;
