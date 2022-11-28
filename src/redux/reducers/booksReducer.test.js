import { booksReducer } from './booksReducer'
import * as types from '../types'

describe('Reducer', () => {
  it('Shows "loading" when request fetch pending', () => {
    const initialState = { booksReducer: [], loading: false }
    const action = {
      type: types.FETCH_BOOKS_PENDING,
    }
    const state = booksReducer(action, initialState)
    expect(state.loading).toBeTruthy()
  })
  it('Add books to state when request fetch successful', () => {
    const books = [
      { id: 1, name: 'The Streaming Wars' },
      { id: 2, name: "Token's Life Matters" },
      { id: 3, name: "Shelley's Secret Baby" },
    ]
    const initialState = {
      books,
      loading: false,
    }
    const action = {
      types: types.FETCH_BOOKS_SUCCESS,
      payload: books,
    }
    const state = booksReducer(action, initialState)
    expect(state.books).toEqual(books)
    expect(state.loading).toBe(false)
    expect(state.books.length).toBe(3)
  })
})
