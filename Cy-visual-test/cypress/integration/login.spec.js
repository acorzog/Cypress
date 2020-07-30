describe('Visual regression - Login Page', () => {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html');
      cy.get('#signin_button').click()
      cy.get('#user_login').type('user')
      cy.get('#user_password').type('test')
      cy.get('#user_remember_me').click()
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