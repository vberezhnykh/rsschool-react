/// <reference types="cypress" />
describe('The Home Page', () => {
  it('successfully load and updates cards on input change', () => {
    cy.visit('/');

    cy.get('header').contains('span', /Main Page/i);

    cy.get('[data-testid="cards-list"]');
    cy.get('input').should('have.value', '');
    cy.get('[data-testid="cards-list"]').should('be.visible');
    cy.get('[data-testid="cards-list"]').children().should('have.length', 150);
    cy.get('input').type('Rain{enter}');
    cy.get('input').should('have.value', 'Rain');
    cy.get('[data-testid="cards-list"]').children().should('have.length.below', 150);
  });

  it('successfully save search input value when routing between pages', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('input').type('Rain{enter}');
    cy.get('input').should('have.value', 'Rain');

    cy.get('a[href*="/about"').click();

    cy.get('header').contains('span', /About Page/i);

    cy.get('a[href="/"').click();
    cy.get('input').should('have.value', 'Rain');
  });
});
