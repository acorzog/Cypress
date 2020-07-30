import {TodoPage} from "../../page-objects/todo-page"

const pages = ["https://www.merckgroup.com/en"]
const sizes = [[1200, 800]]

describe('Validate Header Elements', () => {

    const todoPage = new TodoPage()

    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
            })
        })
    })
    it('should All Africa countries be present', () => {
        todoPage.globalLanguageButton()
        todoPage.countriesContainer()
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