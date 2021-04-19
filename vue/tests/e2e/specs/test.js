describe('Vue Application', () => {
  it('Loads correct content on root URL', () => {
    cy.visit('/')
    cy.contains('h3', 'Current Stock Prices')
  })
})
