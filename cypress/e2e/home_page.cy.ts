/// <reference types="cypress" />
describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  function openModal() {
    cy.get('[data-testid="cards-list"]').should('be.visible');
    cy.get('[data-testid="cards-list"]').children().first().click();
    cy.get('[data-testid="background-overlay"]');
    cy.get('[data-testid="modal"]');
  }

  it('successfully load and updates cards on input change', () => {
    const CARDS_MAX_LENGTH = 150;

    cy.get('header').contains('span', /Main Page/i);
    cy.get('input').should('have.value', '');
    cy.get('[data-testid="cards-list"]').should('be.visible');
    cy.get('[data-testid="cards-list"]').children().should('have.length', CARDS_MAX_LENGTH);
    cy.get('input').type('Rain{enter}').and('have.value', 'Rain');
    cy.get('[data-testid="cards-list"]').children().should('have.length.below', CARDS_MAX_LENGTH);
  });

  it('successfully save search input value when routing between pages', () => {
    cy.get('input').should('have.value', '');
    cy.get('input').type('Rain{enter}').and('have.value', 'Rain');
    cy.get('a[href*="/about"').click();
    cy.get('header').contains('span', /About Page/i);
    cy.get('a[href="/"').click();
    cy.get('input').should('have.value', 'Rain');
  });

  it('shows error message if no cards are found', () => {
    cy.get('input').should('have.value', '');
    cy.get('input').type('abracadabra{enter}').and('have.value', 'abracadabra');
    cy.contains('No results were found for your query...');
  });

  it('opens and closes (on close button) modal successfully', () => {
    openModal();
    cy.get('[alt="close-button"]').click();
    cy.get('[data-testid="modal"]').should('not.exist');
  });

  it('opens and closes (on overlay click) modal successfully', () => {
    openModal();
    cy.get('[data-testid="background-overlay"]').click({ force: true });
    cy.get('[data-testid="modal"]').should('not.exist');
  });
});
