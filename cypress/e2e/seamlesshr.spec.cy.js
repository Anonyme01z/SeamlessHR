import jsonData from "../fixtures/jsonData.config.json"
import Homepage from "../pageObjects/Homepage";

describe('SeamlessHr', {
  viewportHeight: 1300,
  viewportWidth: 960,
})

beforeEach(() => {
  const Url = jsonData.Url;
  const pageTitle = jsonData.pageTitle;

  cy.visit(Url); 
  cy.title().should('eq', pageTitle);
});


it('Tests', () => {
    cy.Register();
    cy.Login();
    cy.AccountOpening();
    cy.Transfer();
    cy.RequestALoan();
    cy.LogOut();
})

