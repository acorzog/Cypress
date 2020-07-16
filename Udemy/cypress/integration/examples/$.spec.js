describe('Cypress.$ Funtion', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('Should expose jQuery element in the ', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })  
    
})