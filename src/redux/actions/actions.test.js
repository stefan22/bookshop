/**
 * @jest-environment jsdom
 */
import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as types from '../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BooklistContainer actions', () => {
  describe('Fetching data', () => {
    it('should fetch data successfully', () => {
      const books = [
        { id: 1, name: 'The Streaming Wars' },
        { id: 2, name: "Token's Life Matters" },
        { id: 3, name: "Shelley's Secret Baby" },
      ]
      axios.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ data: books }))

      const expectedActions = [
        { type: types.FETCH_BOOKS_PENDING },
        { type: types.FETCH_BOOKS_SUCCESS, payload: books },
      ]
      const store = mockStore({ books: [] })

      return store.dispatch(actions.fetchBooks()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        expect(store.getActions()).toHaveLength(2)
        const dataArray = store.getActions()[1].payload
        expect(dataArray).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: 'The Streaming Wars' }),
            expect.objectContaining({ name: "Token's Life Matters" }),
            expect.objectContaining({
              name: "Shelley's Secret Baby",
            }),
          ])
        )
      })
    })

    it('Search data with term', () => {
      const books = [
        { id: 1, name: 'The Streaming Wars' },
        { id: 2, name: "Token's Life Matters" },
        { id: 3, name: "Shelley's Secret Baby" },
      ]
      axios.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ data: books }))

      const store = mockStore({ books: [] })
      return store
        .dispatch(actions.setSearchTerm('wars'))
        .then(() => {
          expect(axios.get).toHaveBeenCalledWith(
            'http://localhost:8080/books?q=wars'
          )
        })
    })

    it('should fetch books with an error', () => {
      axios.get = jest
        .fn()
        .mockImplementation(() =>
          Promise.reject(new Error('Something went wrong'))
        )
      const expectedActions = [
        { type: 'FETCH_BOOKS_PENDING' },
        {
          type: 'FETCH_BOOKS_FAILED',
          err: 'Something went wrong',
        },
      ]
      const store = mockStore({ books: [] })
      return store.dispatch(actions.fetchBooks()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
