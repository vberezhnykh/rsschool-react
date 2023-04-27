describe('Form Page', () => {
  it('loads successfully', () => {
    cy.visit('/form');

    cy.get('header').contains('span', /Form Page/i);
  });

  it('creates card successfully', () => {
    cy.visit('/form');
    //const fakeFile = new File(['fakeFile'], 'fakeFile.png', { type: 'image/png' });

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
});
