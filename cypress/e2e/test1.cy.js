/// <reference types="cypress" />

it('Google Search', () => {

    cy.visit('https://google.com')

    cy.get('[name="q"]').type('Automation step by step {Enter}')

    // cy.contains('Google खोजी').click();
    cy.contains('Free Online Tutorials')
})