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

export function fetchCategoryPostsApi(category) {
  return fetch(`http://localhost:3001/${category}/posts`, {
      headers : {
        'Authorization' : 'token',
      }
    })
    .then(response => response.json())
}

export function fetchPostDetailApi(postId) {
  return fetch(`http://localhost:3001/posts/${postId}`, {
      headers : {
        'Authorization' : 'token',
      }
    })
    .then(response => response.json())
}

//without category
export function* fetchPosts() {
  const posts = yield call(fetchPostsApi)
  yield put(actions.receivePosts(posts))
}

export function* fetchPostsAsync() {
  yield takeEvery(actions.REQUEST_POSTS, fetchPosts)
}

//with category
export function* fetchPostsWithCategory({category}) {
  const posts = yield call(fetchCategoryPostsApi, category)
  yield put(actions.receivePosts(posts))
}

export function* fetchPostsWithCategoryAsync() {
  yield takeEvery(actions.REQUEST_POSTS_WITH_CATEGORY, fetchPostsWithCategory)
}


//post details
export function* fetchPostDetail({postId}) {
  const post = yield call(fetchPostDetailApi, postId)
  yield put(actions.receivePostDetails(post))
}

export function* fetchPostDetailAsync() {
  yield takeEvery(actions.REQUEST_POST_DETAIL, fetchPostDetail)
}
