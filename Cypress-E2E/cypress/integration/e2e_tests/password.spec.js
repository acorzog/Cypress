describe('Password Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')

    })
    it('should click on the sign in button', () => {
        cy.get('#signin_button').click()
    })
    it('should click on the forgotten passwords', () => {
        cy.get('.offset3 > a').click()
    })
    it('should fill email form', () => {
        cy.get('#user_email').type('testemail@email.com')
    })
    it('should submit the form', () => {
        cy.contains('Send Password').click()
    })
})