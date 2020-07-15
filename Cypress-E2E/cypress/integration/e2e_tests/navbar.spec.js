describe('Navbar Test', () => {
  before(function() {
      cy.visit('http://zero.webappsecurity.com/')
  })  
  it('Should display online banking content', () => {
      cy.contains('Online Banking').click()
      cy.url().should('include', 'online-banking.html')
      cy.get('h1').should('be.visible')
  });
  it('Should display feedback content', () => {
    cy.contains('Feedback').click()
    cy.url().should('include', 'feedback.html')

  });
  it('Should display Home Page content', () => {
      cy.get('.brand').click()
      cy.url().should('include', 'index.html')
  });
})