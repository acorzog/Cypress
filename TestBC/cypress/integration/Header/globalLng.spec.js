import {TodoPage} from "../../page-objects/todo-page"
import data from "./example"

describe('Validate Header Elements', () => {
    const todoPage = new TodoPage()

    before(() => {
        cy.visit('/en')
    })

    it('should open the Global modal', () => {
        todoPage.globalLanguageButton()
        todoPage.countriesContainer()
    })

    it('should load countries', () => {

        for (let i = 0; i < data.continent.length; i++) {
            todoPage.validateContinent(data.continent[i])
            todoPage.numberOfContinents(data.countries[i])
        }    
        
    })
})