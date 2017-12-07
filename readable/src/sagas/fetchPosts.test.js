import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as actions from '../actions'
import { fetchPostsAsync, fetchPosts , fetchPostsApi } from './fetchPosts'

it('fetchPostsAsync Saga test', () => {
  const gen = fetchPosts()
  const mockPosts = [1, 2, 3]

  // Check that Saga asks to call the API
  expect(
    gen.next().value,
  ).toEqual(
    call(fetchPostsApi)
  );

  expect(
    gen.next(mockPosts).value,
  ).toEqual(
    put(actions.receivePosts(mockPosts))
  );

});