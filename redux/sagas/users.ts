import { takeLatest, takeEvery, take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

interface LoginUser {
  type: string;
  payload: {
    email: string;
    password: string;
  };
}

function* loginUser({ payload }: LoginUser) {
  // console.log(payload);
  try {
    const result = yield call(api.loginUser, payload);
    // console.log(result.data.user);
    yield put(actions.getUsersSuccess({ ...result.data.user }));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchLoginUser() {
  yield takeLatest(actions.Types.LOGIN_USER, loginUser);
}

const userSaga = [fork(watchLoginUser)];

export default userSaga;
