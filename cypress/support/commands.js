import Homepage from "../pageObjects/Homepage";
import jsonData from "../fixtures/jsonData.config.json"

const homePage = new Homepage();
const firstName = jsonData.firstName
const lastName = jsonData.lastName
const Address = jsonData.Address
const City = jsonData.City
const State = jsonData.State
const Zip = jsonData.Zip
const PhoneNum = jsonData.PhoneNum
const Ssn = jsonData.SSN
const Username = jsonData.Username
const password = jsonData.Password
const WelcomeTxt = jsonData.WelcomeTxt
const InvalidPassword = jsonData.InvalidPassword

// Generate a random username
const randomUsername = `user${Math.floor(Math.random() * 1000000)}`;

Cypress.Commands.add('Register', () => {

        homePage.getRegister().should('have.text', 'Register').click();
        cy.wait(5000)
        homePage.getFirstNane().type(firstName)
        homePage.getLstName().type(lastName)
        homePage.getAddress().type(Address)
        homePage.getCity().type(City)
        homePage.getState().type(State)
        homePage.getZipcode().type(Zip)
        homePage.getphnNum().type(PhoneNum)
        homePage.getSsn().type(Ssn)
        homePage.getUsername().type(randomUsername)
        homePage.getPassword().type(password)
        homePage.getRepeatPass().type(password)
        homePage.getSubmitReg().should('have.value', 'Register').click()

        homePage.getWelcomeTxt().within(() => {
          cy.contains(`Welcome ${randomUsername}`).should('be.visible');
          cy.contains(WelcomeTxt).should('be.visible');
        });
        homePage.getLogout().should('have.text', 'Log Out').click()
        homePage.getLoginTxt().should('have.text', 'Customer Login')
});

Cypress.Commands.add('Login', () => {

        cy.wait(5000)
  //Negative Login : Invalid username and valid password
        homePage.getLgnUsername().type(Username)
        homePage.getLgnPassword().type(password)
        homePage.getLgnBtn().click()

        homePage.getWelcomeTxt().within(() => {
          cy.contains('Error')
          cy.contains('The username and password could not be verified.')
        })
  //Negative Login : Valid username and invalid password
        homePage.getLgnUsername().clear().type(Username)
        homePage.getLgnPassword().clear().type(InvalidPassword)
        homePage.getLgnBtn().click()
        homePage.getWelcomeTxt().within(() => {
          cy.contains('Error')
          cy.contains('The username and password could not be verified.')
        })

  //Positive Login
        homePage.getLgnUsername().clear().type(randomUsername)
        homePage.getLgnPassword().clear().type(password)
        homePage.getLgnBtn().click()

        homePage.getAcctOverview().within(() => {
          // Assert the main heading
          cy.contains('Accounts Overview');
        
          // Assert the table headers
          homePage.getTableHeaders().within(() => {
            cy.get('th').eq(0).should('have.text', 'Account');
            cy.get('th').eq(1).should('have.text', 'Balance*');
            cy.get('th').eq(2).should('have.text', 'Available Amount');
          });
        
          // Assert the first row of the tbody
          homePage.getTableFirstRow().eq(0).within(() => {
            cy.get('td').eq(0).should('exist');
            cy.get('td').eq(1).should('have.text', '$515.50');
            cy.get('td').eq(2).should('have.text', '$515.50');
          });
        
          // Assert the total row
          homePage.getTableRow().eq(1).within(() => {
            cy.get('td').eq(0).should('have.text', 'Total');
            cy.get('td').eq(1).should('contain', '$515.50');
            cy.get('td').eq(2).should('exist');
          });

          //Store ACCT ID to be used during New Account opening
          let AcctId;

          homePage.getAcctId().invoke('val').then((value) => {
            AcctId = value;
          
            cy.log('Account ID:', AcctId);
            // Store AcctId globally so it can be accessed elsewhere
            Cypress.env('AcctId', AcctId);
          });
        
          // Assert the table footer
          homePage.getTableFooter().within(() => {
            cy.get('td').should('have.text', '*Balance includes deposits that may be subject to holds');
          });

           // Assert the footer text
           cy.get('table#accountTable tfoot tr td')
           .should('have.text', '*Balance includes deposits that may be subject to holds');
      
        });

        })

        Cypress.Commands.add('AccountOpening', () => {
          const AcctId = Cypress.env('AcctId');

          homePage.getOpenAcct().should('have.text', 'Open New Account').click()
          homePage.getAcctType().select('SAVINGS')
          cy.log(AcctId)
          cy.wait(5000)
          homePage.getFrmAcctID().should('contain', AcctId)
          homePage.getOpenNewAcct().click()

          cy.wait(5000)
          homePage.getWelcomeTxt().within(() => {
              cy.contains('Account Opened!')
              cy.contains('Congratulations, your account is now open.')
          })

})
        Cypress.Commands.add('Transfer', () => {
          homePage.getTransferFunds().should('have.text', 'Transfer Funds').click()
          homePage.getAmtField().type('500')
          homePage.getTransferBtn().click()

          cy.wait(5000)
          homePage.getWelcomeTxt().within(() => {
            cy.contains('Transfer Complete!')
            cy.contains('See Account Activity for more details.')
          })
})

        Cypress.Commands.add('RequestALoan', () => {
            homePage.getReqLoanBtn().should('have.text', 'Request Loan').click()
            //homePage.getLoanPageTitle().should('include', 'Apply for a Loan')
            homePage.getLoanAmt().type('500')
            homePage.getDwnPayment().type('50')
            homePage.getLoanbtn().click()
            cy.wait(5000)
            homePage.getWelcomeTxt().within(() => {
              cy.contains('Loan Request Processed')
              cy.contains('Congratulations, your loan has been approved.')
            })
            homePage.getLoanStatus().should('have.text', 'Approved')
        })

        Cypress.Commands.add('LogOut', () => {
          homePage.getLogout().should('have.text', 'Log Out').click()
          homePage.getLoginTxt().should('have.text', 'Customer Login')
        })
