import axios from 'axios'
import * as types from '../types'

export const fetchBooks = () => (dispatch, getState) => {
  dispatch({ type: types.FETCH_BOOKS_PENDING })
  const state = getState()
  return axios
    .get(`http://localhost:8080/books?q=${state.term || ''}`)
    .then(res => {
      dispatch({ type: types.FETCH_BOOKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({
        type: types.FETCH_BOOKS_FAILED,
        err: err.message,
      })
    })
}

export const fetchBook = id => dispatch => {
  dispatch({ type: types.FETCH_BOOK_PENDING })
  return axios
    .get(`http://localhost:8080/books/${id}`)
    .then(res => {
      dispatch({ type: types.FETCH_BOOK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({
        type: types.FETCH_BOOK_FAILED,
        payload: { message: err.message },
      })
    })
}

export const createBookReview = (id, review) => dispatch => {
  const options = {
    headers: { 'Content-Type': 'application/json ' },
  }

  dispatch({ type: types.CREATE_BOOK_REVIEW_PENDING })
  return axios
    .post(
      `http://localhost:8080/books/${id}/reviews`,
      JSON.stringify(review),
      options
    )
    .then(res => {
      dispatch({
        type: types.CREATE_BOOK_REVIEW_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: types.CREATE_BOOK_REVIEW_FAILED,
        payload: { message: err.message },
      })
    })
}

export const updateBookReview = (id, review) => dispatch => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  dispatch({ type: types.UPDATE_BOOK_REVIEW_PENDING })
  return axios
    .post(
      `http://localhost:8080/reviews/${id}`,
      JSON.stringify(review),
      options
    )
    .then(res => {
      dispatch({
        type: types.UPDATE_BOOK_REVIEW_SUCCESS,
        payload: res.data,
      })
      dispatch(fetchBook(review.bookId))
    })
    .catch(err => {
      dispatch({
        type: types.UPDATE_BOOK_REVIEW_FAILURE,
        payload: { message: err.message },
      })
    })
}

export const createBook = book => dispatch => {
  const options = {
    headers: {
      'Content-Type': 'applications/json',
    },
  }
  dispatch({ type: types.CREATE_BOOK_PENDING })
  return axios
    .post(
      `http://localhost:8080/books`,
      JSON.stringify(book),
      options
    )
    .then(res => {
      dispatch({
        type: types.CREATE_BOOK_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err =>
      dispatch({
        type: types.CREATE_BOOK_FAILURE,
        payload: { message: err.message },
      })
    )
}

export const setSearchTerm = term => dispatch => {
  dispatch({ type: types.SET_SEARCH_TERM_PENDING })
  return axios
    .get(`http://localhost:8080/books?q=${term}`)
    .then(res => {
      dispatch({
        type: types.SET_SEARCH_TERM_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: types.SET_SEARCH_TERM_FAILED,
        err: err.message,
      })
    })
}
