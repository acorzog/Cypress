describe('Find transaction test', () => {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
      cy.url().should('include', 'index.html')
      cy.get('#signin_button').click()
      cy.fixture('user').then(user => {
          const username = user.id
          const password = user.pwd
          cy.login(username,password)
      })
    })
    it('Should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('2000')
        cy.get('button[type="submit"]').click()
    
    })

})