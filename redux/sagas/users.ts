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
  try {
    const result = yield call(api.loginUser, payload);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchLoginUser() {
  yield takeLatest(actions.Types.LOGIN_USER, loginUser);
}

function* getUsers() {
  try {
    const result = yield call(api.getUser);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (e) {
    yield put(
      actions.usersError({
        error: 'An error occurred when trying to get the users',
      }),
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USER, getUsers);
}

const userSagas = [fork(watchLoginUser), fork(watchGetUsersRequest)];

export default userSagas;
