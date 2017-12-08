import { all } from 'redux-saga/effects'
import {
  fetchPostsAsync,
  fetchPostsWithCategoryAsync,
  fetchPostDetailAsync
} from './fetchPosts'

export default function* root() {
  yield all([
    fetchPostsAsync(),
    fetchPostsWithCategoryAsync(),
    fetchPostDetailAsync()
  ])
}