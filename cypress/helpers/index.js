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

export const gotoApp = () => cy.visit('http://localhost:3000')

export const doBookList = () => cy.get('[data-testid="book-list"]')

export const doSearch = () => cy.get('[data-testid="search"]')

export const doBook = () => cy.get('[data-testid="book-item"]')

export const getFirstBook = () => {
  gotoApp()
  cy.wait(2000)
  return cy
    .get('[data-testid="book-item"]')
    .eq(0)
    .contains('View details')
    .click()
}

export const doBookReview = () => {
  gotoApp()
  getFirstBook()
  cy.wait(2000)
  return cy.get('[data-testid="review-item"]')
}
