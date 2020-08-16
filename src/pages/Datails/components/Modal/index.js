import React, {useState, forwardRef} from 'react';
import {Typography} from '@material-ui/core';

import {Form} from '@unform/web';

import {Container, TextInput, ButtonSave} from './styles';

const ModalEdit = forwardRef(({name, tabIndex}, ref) => {
  const [error, setError] = useState(false);

  const handleSubmit = async (data, {reset}) => {
    reset();

    if (!data.name || !data.capital) {
      return setError(true);
    }
    data.country = name;

    const local = JSON.parse(
      await localStorage.getItem('@react_countries:update'),
    );

    if (!local) {
      return localStorage.setItem(
        '@react_countries:update',
        JSON.stringify([data]),
      );
    }

    local.find((lo, i) => {
      if (lo.country === name) {
        local[i] = data;
        return localStorage.setItem(
          '@react_countries:update',
          JSON.stringify(local),
        );
      }

      const newData = [];
      newData.push(...local, data);
      return localStorage.setItem(
        '@react_countries:update',
        JSON.stringify(newData),
      );
    });

    return setError(false);
  };

  return (
    <Container ref={ref} tabIndex={tabIndex}>
      <Typography variant="h5" component="h5" id="modal-title">
        Editar {name}
      </Typography>
      <Form onSubmit={handleSubmit} id="modal-description">
        <TextInput
          placeholder="Novo nome do País"
          name="name"
          type="text"
          error={error}
          variant="outlined"
        />
        <TextInput
          placeholder="Novo nome da Capital"
          name="capital"
          type="text"
          error={error}
          variant="outlined"
        />
        <ButtonSave type="submit" variant="contained" color="primary">
          Salvar
        </ButtonSave>
      </Form>
    </Container>
  );
});

export default ModalEdit;
