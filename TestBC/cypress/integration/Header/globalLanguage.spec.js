import {Region} from "../../page-objects/headerPO"

describe('Validate Header Elements', () => {
    const selectRegion = new Region()

    before(() => {
        cy.visit('/en')
    })

    it('should open the Global modal', () => {
        selectRegion.globalLanguageButton()
        selectRegion.countriesContainer()
        
    })

    it('should make sure all countries are visible per Continent', () => {
        selectRegion.validateContinent('africa')
        selectRegion.numberOfContinents('51')
    })


    it('should All Asia countries be present', () => {
        selectRegion.countriesContainer()
        selectRegion.validateContinent('asia')
        selectRegion.numberOfContinents('28')
    })

    it('should All Europe countries be present', () => {
        selectRegion.countriesContainer()
        selectRegion.validateContinent('europe')
        selectRegion.numberOfContinents('37')
    })
    
    it('should All Latin America countries be present', () => {
        selectRegion.countriesContainer()
        selectRegion.validateContinent('latinAmerica')
        selectRegion.numberOfContinents('28')
    })

    it('should All North America countries be present', () => {
        selectRegion.countriesContainer()
        selectRegion.validateContinent('northAmerica')
        selectRegion.numberOfContinents('2')
    })

    it('should All Oceania countries be present', () => {
        selectRegion.countriesContainer()
        selectRegion.validateContinent('oceania')
        selectRegion.numberOfContinents('2')
    })
})






