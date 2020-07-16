describe('Custom Comamands', () => {
  it('Should login app using custom cypress commands', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.login('username', 'password')
  })  
})