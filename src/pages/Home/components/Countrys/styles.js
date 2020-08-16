import styled from 'styled-components';
import {Box} from '@material-ui/core';

import {Form} from '@unform/web';
import Input from '../../../Components/Input';

export const Header = styled(Box)`
  margin-bottom: 20px;
`;

export const BoxForm = styled(Form)`
  display: flex;
  justify-content: flex-end;
`;

export const TextInput = styled(Input)`
  width: 100%;
  margin-right: 10px;

  input {
    padding: 9.5px 14px;
  }
`;
