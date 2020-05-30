/* eslint-disable object-curly-newline */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { searchSuccess } from './actions';

export function* getUser({ payload }) {
  try {
    const { username } = payload;

    const responseUser = yield call(api.get, `/users/${username}`);
    const repos = yield call(api.get, `/users/${username}/repos`);

    yield put(searchSuccess(responseUser.data, repos.data));

    history.push('/users');
  } catch (err) {
    toast.error('User not found');
  }
}

export default all([takeLatest('@githubsearch/SEARCH_REQUEST', getUser)]);
