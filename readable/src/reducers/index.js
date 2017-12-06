import { combineReducers } from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions'

function postsReducer(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true }

    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    postsReducer,
})

export default rootReducer