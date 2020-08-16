import styled from 'styled-components';
import {Typography} from '@material-ui/core';

export const FixText = styled(Typography)`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
`;
