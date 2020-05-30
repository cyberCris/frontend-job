import React from 'react';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

import Search from '~/components/Search';

import { Container, Center } from './styles';

export default function Home() {
  const loading = useSelector((state) => state.user.loading);
  return (
    <>
      {!loading ? (
        <Container>
          <Search />
        </Container>
      ) : (
        <Center>
          <PulseLoader size={28} color="#fff" loading={loading} />
        </Center>
      )}
    </>
  );
}
