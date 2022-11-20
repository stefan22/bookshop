import axios from 'axios'
import { books } from './books'

export const removeBooks = () =>
  axios
    .delete('http://localhost:8080/books?_cleanup=true')
    .catch(err => err)

export const addBooks = () =>
  books.map(itm =>
    axios.post('http://localhost:8080/books', itm, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  )

export const gotoApp = () => {
  cy.visit('http://localhost:3000/')
}
