/* eslint-disable object-curly-newline */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { searchSuccess, searchFailure, updateReposSuccess } from './actions';

export function* getUser({ payload }) {
  try {
    const { login } = payload;

    const responseUser = yield call(api.get, `/users/${login}`);
    const repos = yield call(
      api.get,
      `/users/${login}/repos?page=1&per_page=10`
    );

    yield put(searchSuccess(responseUser.data, repos.data));

    history.push('/users');
  } catch (err) {
    toast.error('User not found');

    yield put(searchFailure());
  }
}

export function* updateRepos({ payload }) {
  try {
    const { login, page } = payload;

    const repos = yield call(
      api.get,
      `/users/${login}/repos?page=${page}&per_page=10`
    );

    yield put(updateReposSuccess(repos.data));
  } catch (err) {
    toast.error(err);
  }
}

export default all([
  takeLatest('@user/SEARCH_REQUEST', getUser),
  takeLatest('@user/UPDATE_REPOS_REQUEST', updateRepos),
]);
