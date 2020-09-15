import userSagas from './users';
import adminSagas from './admins';
import postSagas from './posts';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([...userSagas, ...adminSagas, ...postSagas]);
}
