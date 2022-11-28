import * as types from '../types'

const initialState = {
  books: [],
  loading: false,
}

export const booksReducer = (action, state = initialState) => {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      }
    default:
      return state
  }
}
