import { all } from 'redux-saga/effects';
import User from './User/sagas';

export default function* rootSaga() {
  return yield all([User]);
}
