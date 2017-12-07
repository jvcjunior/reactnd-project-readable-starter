import { combineReducers } from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POSTS_WITH_CATEGORY,
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
    case REQUEST_POSTS_WITH_CATEGORY:
      return {
        ...state,
        isFetching: false,
        category: action.category,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    postsReducer,
})

export default rootReducer