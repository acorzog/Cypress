describe('Search', () => {
    
it('Open the search', () => {
    cy.visit('/de');
    cy.get('.navigation-desktop-search-open').click()
     cy.get('.navigation-desktop-search-bar-input').type('Merck')
 })
})