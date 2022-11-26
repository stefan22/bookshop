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

// book ele dom node wrapper
export const doBookList = () => cy.get('[data-testid="book-list"]')
// input searchbox
export const doSearch = () => cy.get('[data-testid="search"]')
// returns book ele
export const doBookEle = () => cy.get('[data-testid="book-item"]')

/*
 * @fn getBookByIndex
 * @params: book index
 * @return: Book details page
 * */
export const getBookByIndex = (index = 0) => {
  gotoApp()
  cy.wait(3000)
  cy.get('[data-testid="book-item"]')
    .eq(Number(index))
    .contains('View details')
    .click()
}

export const doBookReview = (index = 0) => {
  gotoApp()
  cy.wait(1000)
  getBookByIndex(index)
  cy.wait(1000)
  return cy.get('[data-testid="review-item"]')
}

export const fillOutReviewForm = ({ name, desc }, index = 0) => {
  getBookByIndex(index)
  cy.wait(1000)
  cy.get('[data-testid="add-review-book-item"]').click()
  cy.get('[data-testid="books-review-form-input"]').type(name)
  cy.get('[data-testid="books-review-form-textarea"]').type(desc)
  cy.wait(1000)
  cy.get('[data-testid="books-review-form-submit"]').click()
}
