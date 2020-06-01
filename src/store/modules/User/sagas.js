/* eslint-disable object-curly-newline */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { searchSuccess, searchFailure } from './actions';

export function* getUser({ payload }) {
  try {
    const { login } = payload;

    const responseUser = yield call(api.get, `/users/${login}`);
    const repos = yield call(
      api.get,
      `/users/${login}/repos?page=1&per_page=10`
    );

    if (repos.data.length === 0) {
      toast.error('This user doesnt have any repository');
    }

    yield put(searchSuccess(responseUser.data, repos.data));
    history.push('/users');
  } catch (err) {
    toast.error('User not found');

    yield put(searchFailure());
  }
}

export default all([takeLatest('@user/SEARCH_REQUEST', getUser)]);
