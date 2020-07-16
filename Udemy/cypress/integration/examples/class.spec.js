class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}
class HomePage extends BasePage {
    static scrollBottom() {
        cy.get('#submit-button').scrollIntoView() 
    }
    static scrollTop() {
        cy.get('header').scrollIntoView() 
    }
}


describe('Abstraction with classes', () => {
    before(function () {
        //runs befor all tests inside describe
        // setup your test data or test context
        //deed or reset the database
        HomePage.loadHomePage()
    })
    after(function () {
        // runs after all tests inside describe block are done
        // test clean up
        // clean cookies or local storage
    })
    beforeEach(function () {
        // runs before each it block in the describe
    })
    afterEach(function () {
        // runs after each it block in the describe
    })
    it('should scroll down and up on the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollBottom()
        HomePage.wait(5000)
        HomePage.scrollTop()
        HomePage.wait(3000)
      })    
})
