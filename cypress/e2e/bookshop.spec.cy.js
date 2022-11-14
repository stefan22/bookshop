import axios from 'axios'

describe('Bookshop', () => {
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
      { name: 'Cartman' },
      { name: 'Kenny' },
      { name: 'Lisa' },
    ]
    return books.map(itm =>
      axios.post('http://localhost:8080/books', itm, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    )
  })

  it('Bookshop landing', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookshop')
  })

  it('shows a booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should('have.length', 3)
  })

  it('should have "Homer", "Cartman", "Kenny" and "Lisa" among titles', () => {
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(3)

      const titles = [...books].map(
        bk => bk.querySelector('h2').innerHTML
      )
      console.log(titles)
      expect(titles).to.deep.equal(['Cartman', 'Kenny', 'Lisa'])
    })
  })
})
