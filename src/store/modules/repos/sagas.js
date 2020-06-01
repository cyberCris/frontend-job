import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateReposSuccess } from './actions';

export function* updateRepos({ payload }) {
  try {
    const { login, page } = payload;

    const repos = yield call(
      api.get,
      `/users/${login}/repos?page=${page}&per_page=8`
    );

    yield put(updateReposSuccess(repos.data));
  } catch (err) {
    toast.error(err);
  }
}

export default all([takeLatest('@repos/UPDATE_REPOS_REQUEST', updateRepos)]);
