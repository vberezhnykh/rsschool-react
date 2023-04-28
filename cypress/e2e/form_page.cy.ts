/// <reference types="cypress" />
describe('Form Page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('creates card successfully', () => {
    cy.get('header').contains('span', /Form Page/i);
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="surname"]').type('Doe');
    cy.get('input[name="dateOfBirth"]').type('1999-12-31');
    cy.get('input[type="file"]').selectFile('public/test.png');
    cy.get('select').select('Russia');
    cy.get('input[name="sex"]').check('Male');
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="submit"]').click();
    cy.contains('Nothing has been sumbitted yet.').should('not.exist');
  });

  it('shows error messages on invalid values', () => {
    cy.get('input[type="submit"]').click();
    cy.contains('Name is required');
    cy.contains('Surname is required');
    cy.contains('Date of Birth is required');
    cy.contains('Photo is required');
    cy.contains('Residence is required');
    cy.contains('Sex is required');
  });
});
