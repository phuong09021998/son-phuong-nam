import userSagas from './users';
import adminSagas from './admins';
import postSagas from './posts';
import productSagas from './products';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([...userSagas, ...adminSagas, ...postSagas, ...productSagas]);
}
