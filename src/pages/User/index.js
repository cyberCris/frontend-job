/* eslint-disable comma-dangle */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderBy } from 'lodash';
import { PulseLoader } from 'react-spinners';

import { IoIosPeople } from 'react-icons/io';
import { FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaUserFriends, FaStar } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';

import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

import { toast } from 'react-toastify';
import Search from '~/components/Search';
import { searchRepo } from '~/store/modules/user/actions';
import api from '~/services/api';

import {
  Container,
  Profile,
  Star,
  Info,
  Data,
  Title,
  StyledCard,
  Navigation,
  Button,
  Hidden,
} from './styles';
import { Center } from '~/pages/Home/styles';

export default function User() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [disabledB, setDisabledB] = useState(false);
  const [repoLoading, setRepoLoading] = useState(false);

  const user = useSelector((state) => state.user.user);
  const repositories = useSelector((state) => state.user.repos);
  const loading = useSelector((state) => state.user.loading);

  const sortedRepos = orderBy(repositories, ['stargazers_count'], 'desc');

  useEffect(() => {
    if (page === 1) {
      setDisabledB(true);
    } else {
      setDisabledB(false);
    }
  }, [page]);

  const GetRepos = useCallback(
    async (login, pag) => {
      try {
        const { data } = await api.get(
          `/users/${login}/repos?page=${pag}&per_page=10`
        );

        dispatch(searchRepo(data));
      } catch (err) {
        toast.error(err);
      }
    },
    [dispatch]
  );

  function handleNext() {
    setPage(page + 1);
    GetRepos(user.login, page + 1);
  }

  function handlePrevious() {
    setPage(page - 1);
    GetRepos(user.login, page - 1);
  }

  return (
    <>
      <Search row />
      <Container>
        {!loading ? (
          <>
            <Grid container spacing={3}>
              <Grid item sm={3} xs={12}>
                <StyledCard>
                  <CardContent>
                    <Profile>
                      <img src={user.avatar_url} alt="user avatar" />
                      <p>@{user.login}</p>
                      <Data>
                        <Info bio>
                          <p>{user.bio}</p>
                        </Info>

                        <Info>
                          <FiMapPin />
                          <p>{user.location ? user.location : 'no location'}</p>
                        </Info>

                        <Info>
                          <GoPackage />
                          <p>{user.public_repos}</p>
                        </Info>

                        <Info>
                          <FaUserFriends />
                          <p>{user.following}</p>
                        </Info>

                        <Info>
                          <IoIosPeople />
                          <p>{user.followers}</p>
                        </Info>
                      </Data>
                    </Profile>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item sm={9} xs={12}>
                <Grid container spacing={2}>
                  {sortedRepos.map((repo) => (
                    <Grid item key={repo.name} sm={6} xs={6}>
                      <StyledCard>
                        <CardContent>
                          <Title>{repo.name}</Title>
                          <Star>
                            <FaStar />
                            <p>{repo.stargazers_count}</p>
                          </Star>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Hidden />
              </Grid>
              <Grid item sm={9} xs={12}>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={6}>
                    <Navigation>
                      <Button
                        type="button"
                        onClick={handlePrevious}
                        disabled={disabledB}
                        left
                      >
                        <FiArrowLeft size={30} color="#fff" />
                      </Button>
                    </Navigation>
                  </Grid>
                  <Grid item sm={6} xs={6}>
                    <Navigation start>
                      <Button type="button" onClick={handleNext} right>
                        <FiArrowRight size={30} color="#fff" />
                      </Button>
                    </Navigation>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <Center>
            <PulseLoader size={28} color="#fff" loading={loading} />
          </Center>
        )}
      </Container>
    </>
  );
}
