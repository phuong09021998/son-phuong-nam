import { takeLatest, takeEvery, take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/posts';
import * as api from '../api/posts';

function* getPostsByAdmin() {
  try {
    const items = yield call(api.getPostsByAdmin);
    yield put(actions.getPostsByAdminSuccess({ items: items.data.posts }));
    // console.log(items.data.posts);
  } catch (error) {
    // console.log(error);
  }
}

function* watchGetPostsByAdminRequest() {
  yield takeEvery(actions.Types.GET_POSTS_BY_ADMIN, getPostsByAdmin);
}

const postSagas = [fork(watchGetPostsByAdminRequest)];

export default postSagas;
