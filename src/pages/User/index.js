import React from 'react';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';

import { IoIosPeople } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { FaUserFriends, FaStar } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import { Container, Profile, Star, Info, Data } from './styles';
import Search from '../../components/Search';

const StyledCard = withStyles({
  root: {
    background: '#342e47',
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
  },
})(Card);

export default function User() {
  const user = useSelector((state) => state.user.user);
  const repositories = useSelector((state) => state.user.repos);

  const sortedRepos = orderBy(repositories, ['stargazers_count'], 'desc');

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12} xs={12}>
          <Search row />
        </Grid>
        <Grid item sm={3} xs={12}>
          <StyledCard>
            <CardContent>
              <Profile>
                <img
                  src={user.avatar_url}
                  style={{
                    height: 'auto',
                    width: '110px',
                    borderRadius: '50%',
                    border: '3px solid #fff',
                  }}
                  alt="user avatar"
                />
                <p>@{user.login}</p>
                <Data>
                  <Info bio>
                    <p>{user.bio}</p>
                  </Info>

                  <Info>
                    <FiMapPin style={{ marginRight: '5px' }} />
                    <p>{user.location ? user.location : 'no location'}</p>
                  </Info>

                  <Info>
                    <GoPackage style={{ marginRight: '5px' }} />
                    <p>{user.public_repos}</p>
                  </Info>

                  <Info>
                    <FaUserFriends style={{ marginRight: '5px' }} />
                    <p>{user.following}</p>
                  </Info>

                  <Info>
                    <IoIosPeople style={{ marginRight: '5px' }} />
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
                    <h3 style={{ fontWeight: 100 }}>{repo.name}</h3>
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
    </Container>
  );
}
