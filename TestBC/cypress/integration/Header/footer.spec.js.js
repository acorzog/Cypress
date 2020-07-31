import {NavBar} from "../../page-objects/headerPO"

describe('Validate Navigation Links', () => {
    
    beforeEach(() => {
        cy.visit('/en')
    })
    const valNavPath = new NavBar()

    it('Should open #4', () => {

        cy.fixture("navBarPaths").then(navBarPaths =>{
            navBarPaths.forEach(data =>{
                const navSection = data.navSection
                const navSectionItem = data.navSectionItem
                const navItemPath = data.navItemPath 

                valNavPath.displayNavContnt(navSection)
                valNavPath.selecItemList(navSectionItem)
                valNavPath.navPathValidation(navItemPath)
            })
        })
    })
})