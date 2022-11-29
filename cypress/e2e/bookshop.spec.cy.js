import {
  gotoApp,
  doBookList,
  doBookEle,
  getBookByIndex,
  doBookReview,
  doSearch,
  fillOutReviewForm,
} from '../helpers'

describe('Bookshop', () => {
  beforeEach(() => {
    gotoApp()
    cy.wait(2000)
  })

  it('renders  heading correctly', () => {
    cy.get('[data-testid="heading"]').contains('Bookshop')
  })

  it('shows a booklist', () => {
    doBookList().should('exist')
    doBookEle().should('have.length', 3)
  })

  it('renders all 3 book titles from db', () => {
    doBookEle().should(books => {
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
    cy.wait(2000)
  })
  it('filters results on real-time', () => {
    doSearch().type('Wars')
    doBookEle().should('have.length', 1)
  })
  it('Typing "Wars" returns"Streaming Wars" book', () => {
    doSearch().type('Wars')
    doBookEle().eq(0).contains('The Streaming Wars')
  })
  it('Typing "token" returns "Tokens life Matters" book', () => {
    doSearch().type('token')
    doBookEle().contains("Token's Life Matters")
  })
})

describe('Book "View details" btn clicked', () => {
  it('routes to correct book url and book details', () => {
    getBookByIndex(0)
    cy.url().should('include', '/books/1')
  })
  describe('book details page', () => {
    it('shows book title', () => {
      getBookByIndex(0)
      cy.get('[data-testid="book-name"]').should(
        'have.text',
        'The Streaming Wars'
      )
    })
    it('shows books class in the page', () => {
      getBookByIndex(0)
      cy.get('[data-testid="book-description"]').should(
        'have.class',
        'book-description'
      )
    })
    it('renders book-reviews heading under book description', () => {
      getBookByIndex(0)
      cy.get('p.book-reviews__heading').should(
        'have.text',
        'Book reviews'
      )
    })
  })

  describe('Book reviews container', () => {
    it('shows book has 2 reviews', () => {
      doBookReview().should('have.length', 2)
    })
    it('First book-review title:"It was alright"', () => {
      doBookReview().eq(0).contains('It was alright')
    })
  })
})

describe('Adding book-reviews', () => {
  beforeEach(() => {
    const review = {
      name: 'Reeks of Sarcasm',
      desc: 'Only funny because not real',
    }
    fillOutReviewForm(review)
    cy.wait(2000)
  })

  it('adds the new book-review to book-reviews container', () => {
    cy.get('[data-testid="review-item"]').should('have.length', 3)
    cy.get('[data-testid="review-item"]').should(async books => {
      expect(books).to.have.length(3)
    })
  })

  it('renders new book-review title correctly', () => {
    cy.get('[data-testid="review-item"] p')
      .eq(2)
      .should('have.text', 'Only funny because not real')
  })
})
