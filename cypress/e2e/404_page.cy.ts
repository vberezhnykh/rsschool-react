describe('The 404 Page', () => {
  it('loads if bad route', () => {
    cy.visit('/abracadabra');

    cy.get('header').contains('span', /Error Page/i);
  });
});
