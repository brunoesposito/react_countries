import React from 'react';
import Lottie from 'react-lottie';
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';

import {Container, Title, Text} from './styles';

import ErrorAnimation from './animation/404.json';

const Error = (noPath) => {
  const history = useHistory();

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: ErrorAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width="40%"
        height="40%"
      />
      <Title>Algo de errado aconteceu!</Title>
      {noPath ? (
        <>
          <Text>A página que você tentou acessar não existe mais!</Text>
          <Button variant="contained" onClick={() => history.push('/')}>
            Voltar para home
          </Button>
        </>
      ) : (
        <Text>Tente relogar a página e acessar novamente</Text>
      )}
    </Container>
  );
};

export default Error;
