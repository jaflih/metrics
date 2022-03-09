describe('Loading Company Profile', () => {
  it('displays the company details', () => {
    cy.visit('/company/spy');
    cy.contains('SPY');
    cy.contains('SPDR S&P 500 ETF Trust');
    cy.contains('USD');
    cy.get('*[class^="profile-price"]');
    cy.get('*[class^="profile-changes"]');
    cy.get('*[class^="profile-exchangeShortName"]');
    cy.get('*[class^="profile-image"]');
    cy.get('*[class^="profile-sector"]');
    cy.get('*[class^="profile-country"]');
  });
});
