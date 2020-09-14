import { takeLatest, takeEvery, take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/admins';
import * as api from '../api/admins';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({ ...result.data.users }));
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
  try {
    yield call(api.createUserByAdmin, {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role,
    });

    yield call(getUsers);
  } catch (error) {
    const errordata = error.response.data;
    if (errordata.error.includes('E11000')) {
      yield put(actions.createUserError({ error: 'Email đã tồn tại' }));
    } else {
      yield put(actions.createUserError({ error: 'Đăng ký thất bại' }));
    }
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER, createUser);
}

interface DeleteUser {
  id: string;
}

function* deleteUser(payload: DeleteUser) {
  try {
    yield call(api.deleteUser, payload);
    yield call(getUsers);
  } catch (e) {
    yield put(actions.deleteUserError({ error: 'Xóa thất bại' }));
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const { payload } = yield take(actions.Types.DELETE_USER);
    yield call(deleteUser, payload);
  }
}

function* updateUser({ payload }: any) {
  try {
    yield call(api.editUser, {
      name: payload.fields.name,
      email: payload.fields.email,
      password: payload.fields.password,
      role: payload.fields.role,
      id: payload.id,
    });

    yield call(getUsers);
  } catch (error) {
    console.log(error);
  }
}

function* watchUpdateUserRequest() {
  yield takeLatest(actions.Types.EDIT_USER, updateUser);
}

const userSaga = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
  fork(watchUpdateUserRequest),
];

export default userSaga;
