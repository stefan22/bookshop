import {
  gotoApp,
  doBookList,
  doBook,
  getFirstBook,
  doBookReview,
  doSearch,
} from '../helpers'

describe('Bookshop', () => {
  beforeEach(() => {
    gotoApp()
  })

  it('has heading "Bookshop"', () => {
    cy.get('[data-testid="heading"]').contains('Bookshop')
  })

  it('shows booklist', () => {
    cy.wait(2000)
    doBookList().should('exist')
    doBook().should('have.length', 3)
  })

  it('shows three books initial state', () => {
    cy.wait(4000)
    doBook().should(books => {
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

describe('Book search by title', () => {
  beforeEach(() => {
    gotoApp()
  })
  it('filters results on real-time', () => {
    doSearch().type('Wars')
    doBook().should('have.length', 1)
    doBook().eq(0).contains('The Streaming Wars')
  })
})

describe('Book "View details" button', () => {
  it('routes user to its book details page when clicked', () => {
    getFirstBook()
    cy.url().should('include', '/books/1')
  })
})

describe('Book reviews below book details', () => {
  it('shows that first book has 2 reviews at initialisation', () => {
    doBookReview().should('have.length', 2)
  })
  it('shows first book title "It was alright"', () => {
    doBookReview().eq(0).contains('It was alright')
  })
})
