describe('Working with inputs', () => {
    it('should override the current time', () => {
      const date = new Date(2020, 3, 10).getTime() //return a timestamp 
      cy.clock(date)
      cy.log(date)
    })
    it('Visit Webpage', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.clearCookies({ log:true })
        cy.clearLocalStorage('your item', { log:true })
        cy.title().should('include', 'Zero - Log in')
    })
    it('should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Inavlid name', {delay: 100})
    })

    it('should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Inavlid pass', {delay: 100})
    })

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('Should submit loging form', () => {
        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')     

    })

})
