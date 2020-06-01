import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { searchRequest, updatePage } from '~/store/modules/user/actions';

import { Container, Form } from './styles';

export default function Search({ row }) {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [login, setLogin] = useState(row ? user.login : '');

  function handleInputChange(e) {
    setLogin(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(searchRequest(login));
    dispatch(updatePage(1));
  }

  return (
    <Container row={row}>
      <Link to="/">
        <h1>
          Github <span>Search</span>
        </h1>
      </Link>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter with your github username"
          value={login}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </Form>
    </Container>
  );
}

Search.propTypes = {
  row: PropTypes.bool,
};

Search.defaultProps = {
  row: false,
};
