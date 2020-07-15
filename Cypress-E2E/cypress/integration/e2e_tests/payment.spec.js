describe('Should create a new page', () => {
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
    it('should send new payment (fake)', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('1000')
        cy.get('#sp_date').type('2020-01-10 {enter}')
        cy.get('#sp_description').type('description')
        cy.get('#pay_saved_payees').click()
    });
    it('Should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The payment was successfully submitted')
    });

})