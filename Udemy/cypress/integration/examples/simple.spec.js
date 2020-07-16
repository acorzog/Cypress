// describe('browser actions', () => {

//     it('Should load correct URL', () => {
//         cy.visit('http://example.com/', {timeout: 10000})
//     })
//     it('Should correct URL', () => {
//         cy.url().should('include', 'example.com')
//     })
//     it('Should wait for 3 seconds', () => {
//         cy.wait(3000)
//     })
//     it('Should pause the execution', () => {
//         cy.pause()
//     })
//     it('Should check for the correct element on the page', () => {
//         cy.get('h1').should('be.visible')
//     })
// })


describe('browser actions', () => {
    it('Should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout:10000})
        cy.url().should('include', 'index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After reload')
    })
    it('Should click on Travel category', () => {
        cy.get('.nav > :nth-child(1) > ul > :nth-child(1) > a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })
    it('Should display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11)
    })
    it('Should switch to Poetry category', () => {
        cy.get(':nth-child(22) > a')
            .contains('Poetry')
            .click()
        cy.get('h1').contains('Poetry')
    })
    it('Should click on Olio book', () => {
        cy.get('a')
            .contains('Olio')
            .click()
        cy.url().should('include', 'olio_984')
    })
    it('Should validate price', () => {
        cy.get('.price_color').should('be', '£23.88')
    })
})