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
    console.log(error);
  }
}

function* watchLoginUser() {
  yield takeLatest(actions.Types.LOGIN_USER, loginUser);
}

function* getUser() {
  try {
    const result = yield call(api.getUser);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (e) {
    // yield put(actions.getUserSuccess({ ...result.data.user }));
    yield put(actions.getUserError());
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USER, getUser);
}

function* createUser({ payload }: any) {
  try {
    const result = yield call(api.createUser, payload);
    console.log(result);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (error) {
    console.log(error.response);
  }
}

function* loginByGoogle({ payload }: any) {
  try {
    const result = yield call(api.loginByGoogle, payload);
    console.log(result);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (error) {
    const errorData = error.response.data;
    if (errorData.error === 'Email is already in use.') {
      yield put(actions.loginByGoogleError({ error: 'Email đã tồn tại' }));
    } else {
      yield put(actions.loginByGoogleError({ error: 'Lỗi bất ngờ đã xảy ra' }));
    }
  }
}

function* watchCreateUser() {
  yield takeLatest(actions.Types.CREATE_USER, createUser);
}

function* watchLoginByGoogle() {
  yield takeLatest(actions.Types.LOGIN_BY_GOOGLE, loginByGoogle);
}

function* watchLogOutUser() {
  while (true) {
    yield take(actions.Types.LOG_OUT_USER);
    yield call(api.logoutUser);
    yield call(getUser);
  }
}

const userSagas = [
  fork(watchLoginUser),
  fork(watchGetUsersRequest),
  fork(watchCreateUser),
  fork(watchLoginByGoogle),
  fork(watchLogOutUser),
];

export default userSagas;
