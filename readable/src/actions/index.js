export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS_WITH_CATEGORY = 'REQUEST_POSTS_WITH_CATEGORY'
export const REQUEST_POST_DETAIL = 'REQUEST_POST_DETAIL'
export const RECEIVE_POST_DETAIL = 'RECEIVE_POST_DETAIL'


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

export function requestPostDetails(postId) {
  return {
    type: REQUEST_POST_DETAIL,
    postId
  }
}

export function receivePostDetails(post) {
  return {
    type: RECEIVE_POST_DETAIL,
    post: post,
  }
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    items: posts,
  }
}