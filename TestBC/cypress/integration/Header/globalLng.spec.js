import {Region} from "../../page-objects/headerPO"
import data from "../../fixtures/example"

describe('Validate Header Elements', () => {
    const selectRegion = new Region()

    before(() => {
        cy.visit('/en')
    })

    it('should open the Global modal', () => {
        selectRegion.globalLanguageButton()
        selectRegion.countriesContainer()
    })

    it('should load countries', () => {

        for (let i = 0; i < data.continent.length; i++) {
            selectRegion.validateContinent(data.continent[i])
            selectRegion.numberOfContinents(data.countries[i])
        }    
    })
    it('should close the modal', () => {
        cy.get('.basic-country-selector-close-button').click()
    });
})