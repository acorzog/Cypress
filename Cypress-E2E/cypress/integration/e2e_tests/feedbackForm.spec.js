describe('Fulfill the feedback form', () => {
  before(function() {
      cy.visit('http://zero.webappsecurity.com/')
  });  
  it('Should load feedback form', () => {
    cy.contains('Feedback').click()
    cy.url().should('include', 'feedback.html')
    cy.get('form').should('be.visible')
  });
  it('Should filling feddback form', () => {
      cy.get('#name').type('Andrea Corzo')
      cy.get('#email').type('ac10@yopmail.com')
      cy.get('#subject').type('Fill feedback')
      cy.get('#comment').type('Fill your question')
  });
  it('Should submit feedback information', () => {
      cy.contains('Send Message').click()
  });
  it('Should display feedback confirmation message', () => {
      cy.get('#feedback-title')
  });
})