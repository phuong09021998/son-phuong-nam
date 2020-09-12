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

const userSaga = [fork(watchGetUsersRequest)];

export default userSaga;
