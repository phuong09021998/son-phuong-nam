import { takeLatest, takeEvery, take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/admins';
import * as api from '../api/admins';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUserSuccess({ ...result.data.users }));
  } catch (e) {
    // yield put(
    //   actions.usersError({
    //     error: 'An error occurred when trying to get the users',
    //   }),
    // );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS, getUsers);
}

function* createUser({ payload }: any) {
  console.log(payload);
  try {
    // console.log('ok');
    const result = yield call(api.createUserByAdmin, {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role,
    });
    console.log(result);

    yield call(getUsers);
  } catch (error) {
    console.log(error);
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER, createUser);
}

const userSaga = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default userSaga;
