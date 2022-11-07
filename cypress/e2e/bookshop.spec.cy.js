describe('Bookshop', () => {
  it('visits bookshop', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookshop')
  })
  it('shows a booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should('have.length', 2)
  })
  it('should have "Homer" and "South Park" among titles', () => {
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(2)
      const titles = [...books].map(
        bk => bk.querySelector('h2').innerHTML
      )
      expect(titles).to.deep.equal(['Homer', 'South Park'])
    })
  })
})
