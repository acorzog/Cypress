describe('Xpaths with Cypress Examples', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on elemnt using Xpath', () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible') 
        cy.xpath('//button[@id="signin_button"]').click()
    })
    it('Should display login form', () => {
        cy.xpath('//form').should('have.length', 1)
        // cy.get()
    })
})