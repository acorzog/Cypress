describe('Searchbox test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should type into searchbox and submit with pressing enter', () => {
        cy.get('.search-query').type('some text {enter}')
    })

    it('Should show search result page', () => {
        cy.get('h2').contains('Search Result')
        
    })
})