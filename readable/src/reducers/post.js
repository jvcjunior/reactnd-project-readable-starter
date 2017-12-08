import {
    REQUEST_POST_DETAIL,
    RECEIVE_POST_DETAIL,
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
      default:
        return state
    }
  }

  export default PostReducer;