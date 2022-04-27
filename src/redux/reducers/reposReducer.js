import { SET_REPOS } from '../consts'

const defaultState = {
  items: [],
  isFetching: true,
}

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
      }

    default:
      return state
  }
}
