describe('write /reas data to JSON / text file', () => {
    it('Should write data into JSON', () => {
        cy.writeFile('log.json', {name: 'Mike', age: 25})   
    })  
    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello pretty world')  
    })

    it('should read an verify data from json file', () => {
        cy.readFile('log.json')
            .its('age')
            .should('eq', 25)  
    })
    it('should read an verify data from text file', () => {
        cy.readFile('log.txt')
            .should('eq', 'Hello pretty world')  
    })
    it('should read an verify browser document content', () => {
        cy.visit('https://example.com')  
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})

