Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

/// <reference types = 'cypress' />

describe('main', () => {

    // Visiting the URL
    it('visit-url', () => {

        cy.visit('https://demoqa.com/')

    })

    it('click on forms', () => {
       
        // Clicking on the Form Card
        cy.get('.category-cards > :nth-child(2)').click({force: true})

        // Clicking on the Practice Form
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()

    })

    
    // Filling the Form

    it('filling form', () => {

        cy.get('#firstName')
        .type('Cowlar')

        cy.get('#lastName')
            .type('Developer')

        cy.get('#userEmail').type('qaengineer@cowlar.com')

        cy.get('#gender-radio-1').scrollIntoView().click({force: true})

        cy.get('#userNumber').type('0123456789')

        cy.get('#subjectsInput').type('Computer Science{enter}')

        cy.get('#hobbies-checkbox-3').click({force: true})

        cy.get('#currentAddress').type('Address 1')

        cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').type('{enter}')

        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type('{enter}')    

        cy.get('#submit').click({force: true})



    })

    // Verification of the Submitted Form
    it('verification', () => {

        cy.get('.modal-body').should('be.visible').within(() => {
            
            cy.get('.table-responsive').should('be.visible').within(() => {
            
            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[1]').eq(0).within(() => {
            
            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[1]/td[2]').eq(0).should('contain.text', 'Cowlar Developer'); 
            
            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[2]/td[2]').eq(0).should('contain.text', 'qaengineer@cowlar.com');

            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[3]/td[2]').eq(0).should('contain.text', 'Male')
            
            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[4]/td[2]').eq(0).should('contain.text', '0123456789')

            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[5]/td[2]').eq(0).should('contain.text', '02 December,2023')

            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[6]/td[2]').eq(0).should('contain.text', 'Computer Science')

            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[7]/td[2]').eq(0).should('contain.text', 'Music')

            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[9]/td[2]').eq(0).should('contain.text', 'Address 1');
            
            cy.xpath('/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[10]/td[2]').eq(0).should('contain.text', 'NCR Delhi');

         
                })
            })   
    })

            // Closing Modal
            cy.get('#closeLargeModal').click()

})

})