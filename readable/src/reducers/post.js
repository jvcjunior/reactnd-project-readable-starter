import {
    REQUEST_POST_DETAIL,
    RECEIVE_POST_DETAIL,
    REQUEST_POST_COMMENTS,
    RECEIVE_POST_COMMENTS,
  } from '../actions'

  function PostReducer(state = {
    isFetching: false,
    post: []
  }, action) {
    switch (action.type) {
      case REQUEST_POST_DETAIL:
        return { ...state, isFetching: true }

      case RECEIVE_POST_DETAIL:
        return {
          ...state,
          isFetching: false,
          post: action.post,
        }

      case REQUEST_POST_COMMENTS:
        return { ...state, isFetching: true }

      case RECEIVE_POST_COMMENTS:
        return {
          ...state,
          isFetching: false,
          comments: action.comments,
        }
      default:
        return state
    }
  }

  export default PostReducer;