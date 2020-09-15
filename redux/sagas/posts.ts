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

function* createPostByAdmin({ payload }: any) {
  try {
    yield call(api.createPost, payload);
    yield call(getPostsByAdmin);
  } catch (error) {
    console.log(error);
  }
}

function* watchCreatePostsByAdminRequest() {
  yield takeLatest(actions.Types.CREATE_POST, createPostByAdmin);
}

const postSagas = [fork(watchGetPostsByAdminRequest), fork(watchCreatePostsByAdminRequest)];

export default postSagas;
