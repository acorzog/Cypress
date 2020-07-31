export class Region {
    globalLanguageButton() {
        cy.get('.navigation-desktop-country-selector-open-button').click()
    }

    validateContinent(continent) {
        cy.get(`[data-name="${continent}"] > .basic-country-selector-region-list-item > .basic-country-selector-region-list-item-label`).click()
    }
    
    countriesContainer() {
    cy.get('.basic-country-selector-row').should('be.visible')
    }

    numberOfContinents(numberContinents) {
        cy.get('.basic-country-selector-region-panel--active > div > div > div > div').should('have.length', numberContinents)
    }
}

export class NavBar {
    displayNavContnt(navItem) {
        cy.get('.navigation-desktop-primary-list-item-link')
        .contains(`${navItem}`)
        .trigger('mouseover')
    }

    selecItemList(itemList) {
        cy.get('.navigation-desktop-secondary-panel-list-item').contains(`${itemList}`).click()
    }
    
    navPathValidation(navPath) {
        cy.url().should('include', `${navPath}`)
    }
}
