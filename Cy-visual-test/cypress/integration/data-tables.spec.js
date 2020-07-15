describe('Visual regression - Data Tables', () => {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html');
      cy.get('#signin_button').click()
      cy.get('#user_login').type('username')
      cy.get('#user_password').type('password')
      cy.get('#user_remember_me').click()
      cy.get('input[name="submit"]').click()
    })

    it('should load accoun activity', () => {
        cy.get("#account_activity_tab").click()
    })

    it('Desktop layout', () => {
       cy.setResolution([1280, 720])
       cy.matchImageSnapshot() 
    })

    it('Tablet Layout', () => {
        cy.setResolution('ipad-2')
        cy.matchImageSnapshot()
    })

    it('Mobile Layout', () => {
        cy.setResolution("iphone-6")
        cy.matchImageSnapshot()
    });
})