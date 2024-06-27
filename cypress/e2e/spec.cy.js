/// <reference types="cypress" />

beforeEach(() => {
  cy.intercept('**/asset/data.json', { fixture: 'example.json' }).as('asset');

  cy.intercept('**/assets/data.json', { fixture: 'example.json' }).as('assets');
});

describe('page', () => {
  it('asset work', () => {
    fetch('/__cypress/asset/data.json');
    cy.wait('@asset')
  })

  // don't work when path includes __cypress/assets
  it('assets work', () => {
    fetch('/__cypress/assets/data.json');
    cy.wait('@assets')
  })
})
