describe('Find the element and make a search', () => {
    it('gets the post', () => {
       const getIframeSearch = () => {
            return cy
            .get('#iframeResult')
            .its('0.contentDocument').should('exist')
          }
          const getIframeBody = () => {
            return getIframeSearch()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
          }

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
        getIframeBody().wait(3000).find('.fa').click()
        getIframeBody().find('.gsc-input').type('bold')
      })
    })
