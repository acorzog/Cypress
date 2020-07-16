describe('Keyboard press simulation', () => {
    it('should submit searchbox with pressing ENTER', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just text {enter}')
    })
})