import React from 'react';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';
import { PulseLoader } from 'react-spinners';

import { IoIosPeople } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { FaUserFriends, FaStar } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';

import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

import {
  Container,
  Profile,
  Star,
  Info,
  Data,
  Title,
  StyledCard,
} from './styles';

import { Center } from '~/pages/Home/styles';
import Search from '~/components/Search';

export default function User() {
  const user = useSelector((state) => state.user.user);
  const repositories = useSelector((state) => state.user.repos);
  const loading = useSelector((state) => state.user.loading);

  const sortedRepos = orderBy(repositories, ['stargazers_count'], 'desc');

  return (
    <>
      <Search row />
      <Container>
        {!loading ? (
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
          </Grid>
        ) : (
          <Center>
            <PulseLoader size={28} color="#fff" loading={loading} />
          </Center>
        )}
      </Container>
    </>
  );
}
