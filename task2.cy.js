Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

/// <reference types = 'cypress' />

describe('main', () => {

    // Visiting the URL
    it('visit-url', () => {

        cy.visit('https://demoqa.com/')

    })

    it('Click on Interaction Card', () => {

        cy.xpath('//*[@id="app"]/div/div/div[2]/div/div[5]').click()
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]').should('contain.text', 'Please select an item from left to start practice.')

    })

    // Verification Part

    it('Verifying the tabs', () => {

        cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[1]/span/div') 
      .contains('Elements')
      .should('be.visible');

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[2]/span/div')
      .contains('Forms')
      .should('be.visible');

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[3]/span/div')
      .contains('Alerts, Frame & Windows')
      .should('be.visible');

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[4]/span/div')
      .contains('Widgets')
      .should('be.visible');

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[5]/span/div')
      .contains('Interactions')
      .should('be.visible');

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[6]/span/div')
      .contains('Book Store Application')
      .should('be.visible');

    })

    it('Open Resizable Window', () => {

        cy.xpath("//div[@class='element-list collapse show']//li[@id='item-2']").click()

        cy.xpath("//div[@class='main-header']").should('contain.text', 'Resizable')

    })

    it('Verifies width and height of Box 1', () => {
        
        cy.xpath("//div[@id='resizableBoxWithRestriction']")
          .should('have.css', 'width', '200px')
          .should('have.css', 'height', '200px')

      })

      it('Verifies Box 1 text content and maximum constraints', () => {
    
        cy.xpath("//div[@id='resizableBoxWithRestriction']")
          .contains('Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.');
    
        cy.xpath("//div[@id='resizableBoxWithRestriction']")
          .invoke('css', 'width', '500px')
          .invoke('css', 'height', '300px')
            cy.wait(3000)
        cy.xpath("//div[@id='resizableBoxWithRestriction']")
          .invoke('css', 'width', '150px')
          .invoke('css', 'height', '150px')
          .contains('Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.')
          .should('be.visible');
      })

      it('Box2 is Resizable', () => {

        cy.xpath('//*[@id="resizable"]')
        .invoke('css', 'width', '300')
        .invoke('css', 'height', '300')
        .should('have.css', 'width', '300px')
        .should('have.css', 'height', '300px')
      })

})
