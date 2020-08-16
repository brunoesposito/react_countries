import styled from 'styled-components';
import {
  Breadcrumbs,
  Card,
  CardMedia,
  Typography,
  Avatar,
} from '@material-ui/core';

export const Bread = styled(Breadcrumbs)`
  margin: 10px 0 20px;
`;

export const BoxDistance = styled(Card)`
  margin-bottom: 10px;
  background: #1a7ecf;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BoxDistanceText = styled(Typography)`
  color: #fff;
`;

export const BoxCountry = styled(Card)`
  margin-bottom: 10px;
`;

export const BoxCountryImage = styled(CardMedia)`
  height: 300px;
`;

export const BoxCountryAvatar = styled(Avatar)`
  background: #f8f8f8;
`;
