Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

/// <reference types = 'cypress' />


describe('main', () => {

    // Visiting the URL
    it('visit-url', () => {

        cy.visit('https://demoqa.com/')

    })

it('Clicking on Book Store', () => {

    cy.xpath('//*[@id="app"]/div/div/div[2]/div/div[6]')
    .click()

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[6]/span/div')
    .click()

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[6]/div/ul')
    .find('li')
    .eq(1)
    .click({force: true})

    cy.xpath('//*[@id="app"]/div/div/div[1]/div')
    .should('contain.text', "Book Store")

    cy.xpath('//*[@id="see-book-Understanding ECMAScript 6"]').click()

})

it('Verifying Book Details', () => {

    cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]')
    .within(() => {

        cy.xpath('//*[@id="ISBN-wrapper"]/div[2]')
        .should('contain', '9781593277574')
        
        cy.xpath('//*[@id="title-wrapper"]/div[2]')
        .should('contain', 'Understanding ECMAScript 6')
        
        cy.xpath('//*[@id="author-wrapper"]/div[2]')
        .should('contain', 'Nicholas C. Zakas')
        
        cy.xpath('//*[@id="pages-wrapper"]/div[2]')
        .should('contain', '352')

      })

})

describe('Intercepting API', () => {


    it('Get Request', () => {

        cy.request({

            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574',

        }).then((response)=> {

            cy.expect(response.body.isbn).to.eq('9781593277574');
            cy.expect(response.body.title).to.eq('Understanding ECMAScript 6');
            cy.expect(response.body.subTitle).to.eq('The Definitive Guide for JavaScript Developers');
            cy.expect(response.body.author).to.eq('Nicholas C. Zakas');
            cy.expect(response.body.publish_date).to.eq('2016-09-03T00:00:00.000Z')
            cy.expect(response.body.publisher).to.eq('No Starch Press')
            cy.expect(response.body.pages).to.eq(352);
            cy.expect(response.body.description).to.eq('ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E');
            cy.expect(response.body.website).to.eq('https://leanpub.com/understandinges6/read')



        })



    })



})









})