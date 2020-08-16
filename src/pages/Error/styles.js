import styled from 'styled-components';
import {Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const Container = styled(Box)`
  min-height: 100vh;
  background: #1a7ecf;
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 0;
`;

export const Text = styled.p`
  color: #fff;
`;

export const Button = styled(Link)`
  background-color: #fff;
  border-radius: 4px;
  padding: 7px 10px;
  text-decoration: none;
  color: #333;
  margin-top: 20px;
`;
