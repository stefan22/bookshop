import {
  removeBooks,
  addBooks,
  gotoApp,
} from '../../src/helpers/tests'

describe('Bookshop', () => {
  afterEach(() => {
    removeBooks()
  })

  beforeEach(() => {
    addBooks()
  })

  it('Bookshop landing', () => {
    gotoApp()
    cy.get('[data-testid="heading"]').contains('Bookshop')
  })

  it('shows a booklist', () => {
    gotoApp()
    cy.wait(2000)
    cy.get('[data-testid="book-list"]').should('exist')
    cy.get('div.book-item').should('have.length', 3)
  })

  it('should have all 3 book titles', () => {
    gotoApp()
    cy.wait(4000)
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(3)

      const titles = [...books].map(
        bk => bk.querySelector('h2').innerHTML
      )
      expect(titles).to.deep.equal([
        'The Streaming Wars',
        "Token's Life Matters",
        "Shelley's Secret Baby",
      ])
    })
  })
})

describe('Book details page', () => {
  it('routes user to book details page', () => {
    gotoApp()
    cy.get('[data-testid="book-item"]')
      .contains('View details')
      .eq(0)
      .click()
    cy.wait(4000)
    cy.url().should('include', '/books/1')
  })
})

describe('Searching by book name', () => {
  gotoApp()
  cy.get('[data-testid="search"]').type('Wars')
  cy.get('[data-testid="book-item"]').should('have.length', 1)
  cy.get('div.book-item').eq(0).contains('The Streaming Wars')
})
