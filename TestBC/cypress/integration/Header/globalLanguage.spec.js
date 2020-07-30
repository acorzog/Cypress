import {TodoPage} from "../../page-objects/todo-page"

describe('Validate Header Elements', () => {
    const todoPage = new TodoPage()

    before(() => {
        cy.visit('/en')
    })

    it('should open the Global modal', () => {
        todoPage.globalLanguageButton()
        todoPage.countriesContainer()
        
    })

    it('should make sure all countries are visible per Continent', () => {
        todoPage.validateContinent('africa')
        todoPage.numberOfContinents('51')
    })


    it('should All Asia countries be present', () => {
        todoPage.countriesContainer()
        todoPage.validateContinent('asia')
        todoPage.numberOfContinents('28')
    })

    it('should All Europe countries be present', () => {
        todoPage.countriesContainer()
        todoPage.validateContinent('europe')
        todoPage.numberOfContinents('37')
    })
    
    it('should All Latin America countries be present', () => {
        todoPage.countriesContainer()
        todoPage.validateContinent('latinAmerica')
        todoPage.numberOfContinents('28')
    })

    it('should All North America countries be present', () => {
        todoPage.countriesContainer()
        todoPage.validateContinent('northAmerica')
        todoPage.numberOfContinents('2')
    })

    it('should All Oceania countries be present', () => {
        todoPage.countriesContainer()
        todoPage.validateContinent('oceania')
        todoPage.numberOfContinents('2')
    })
})






