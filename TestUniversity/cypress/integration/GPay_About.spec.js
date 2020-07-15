/// <reference types="cypress" />
import {GpayTodo} from '../page-objects/Gpay_TODO'

describe('Header visualization', () => {
    before(() => GpayTodo.navigate())

    beforeEach(() => cy.eyesOpen({
        appName: 'Gpay About', batchName: 'Gpay About',
        browser: [
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768},
            {deviceName: 'iPhone 11'},
        ]
    }))
    
    afterEach(() => cy.eyesClose())

    it('NavBar should be present', () => {
        cy.eyesCheckWindow('Header is pressent')
        GpayTodo.('Clean Room')
        GpayTodo.('Learn JavaScript')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('Mark as completed')
    })
})

