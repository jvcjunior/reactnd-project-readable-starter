export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS_WITH_CATEGORY = 'REQUEST_POSTS_WITH_CATEGORY'

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

export function requestPostsWithCategory(category) {
  return {
    type: REQUEST_POSTS,
    category
  }
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    items: posts,
  }
}