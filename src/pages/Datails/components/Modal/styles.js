import styled from 'styled-components';
import {Box, Button} from '@material-ui/core';
import Input from '../../../Components/Input';

export const Container = styled(Box)`
  position: relative;
  top: 30px;
  width: 50%;
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const TextInput = styled(Input)`
  width: 100%;
  margin-top: 10px;
`;

export const ButtonSave = styled(Button)`
  margin-top: 20px;
`;
