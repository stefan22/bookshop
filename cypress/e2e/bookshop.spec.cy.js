import axios from 'axios'

describe('Bookshop', () => {
  afterEach(() => {
    axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err)
  })

  beforeEach(() => {
    const books = [
      { name: 'The Streaming Wars' },
      { name: 'Tokens Life Matters' },
      { name: 'Shelley Secret Baby' },
    ]
    return books.map(itm =>
      axios.post('http://localhost:8080/books', itm, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )
  })

  xit('Bookshop landing', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="heading"]').contains('Bookshop')
  })

  xit('shows a booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(2000)
    cy.get('[data-testid="book-list"]').should('exist')
    cy.get('div.book-item').should('have.length', 3)
  })

  xit('should have all 3 book titles', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(4000)
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(3)

      const titles = [...books].map(
        bk => bk.querySelector('h2').innerHTML
      )
      expect(titles).to.deep.equal([
        'The Streaming Wars',
        'Tokens Life Matters',
        'Shelley Secret Baby',
      ])
    })
  })
})

describe('Book details page', () => {
  before(() => {
    axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err)
  })

  afterEach(() => {
    axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err)
  })

  beforeEach(() => {
    const books = [
      { name: 'The Streaming Wars' },
      { name: 'Tokens Life Matters' },
      { name: 'Shelley Secret Baby' },
    ]

    return books.map(itm =>
      axios.post('http://localhost:8080/books', itm, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )
  })

  xit('routes user to book details page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="book-item"]')
      .contains('View details')
      .eq(0)
      .click()
    cy.wait(4000)
    cy.url().should('include', '/books/1')
  })
})
