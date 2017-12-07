import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'

export function fetchPostsApi() {
  return fetch(`http://localhost:3001/posts`, {
      headers : {
        'Authorization' : 'token',
      }
    })
    .then(response => response.json())
}

export function* fetchPosts(reddit) {
  //yield put(actions.requestPosts())
  //yield call(fetch, '/scores', { method: 'GET', body: { score } })
  const posts = yield call(fetchPostsApi)
  yield put(actions.receivePosts(posts))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* fetchPostsAsync() {
  yield takeEvery(actions.REQUEST_POSTS, fetchPosts)
}
