import React from 'react';
import Lottie from 'react-lottie';

import WorldAnimation from './animation/world.json';
import {Container} from './styles';

const Loading = () => {
  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: WorldAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width="60%"
        height="60%"
      />
    </Container>
  );
};

export default Loading;
