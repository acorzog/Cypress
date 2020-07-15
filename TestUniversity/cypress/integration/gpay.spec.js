/// <reference types="cypress" />

it('Header visualization', () => {
    cy.visit('https://pay.google.com/about/')
    cy.get('.header__lockup > .header__company-logo > .header__company-logo-link').click()
    cy.get('.header__lockup > .header__company-logo > .header__company-logo-link').should('have.attr', 'href', '/about/')
})

