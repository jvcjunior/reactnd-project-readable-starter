import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import * as actions from '../actions'

export function fetchPostsApi() {
  return fetch(`http://localhost:3001/posts` )
          .then(response => response.json() )
          .then(json => json.data.children.map(child => child.data) )
}

export function* fetchPosts(reddit) {
  yield put( actions.requestPosts(reddit) )
  const posts = yield call(fetchPostsApi)
  yield put( actions.receivePosts(posts) )
}


export default function* root() {
  yield fork(fetchPosts)
}