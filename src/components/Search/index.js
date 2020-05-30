import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Form } from './styles';

export default function Search({ row }) {
  return (
    <Container row={row}>
      <Link to="/">
        <h1>
          Github <span>Search</span>
        </h1>
      </Link>

      <Form>
        <input type="text" placeholder="Enter with your github username" />
      </Form>
    </Container>
  );
}

Search.propTypes = {
  row: PropTypes.bool.isRequired,
};
