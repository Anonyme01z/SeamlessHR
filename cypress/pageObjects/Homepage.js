class Homepage {
      getRegister(){
        return cy.get('#loginPanel > :nth-child(3) > a')
      }
      getFirstNane(){
        return cy.get('#customer\\.firstName')
      }
      getLstName(){
        return cy.get('#customer\\.lastName')
      }
      getAddress(){
        return cy.get('#customer\\.address\\.street')
      }
      getCity(){
        return cy.get('#customer\\.address\\.city')
      }
      getState(){
        return cy.get('#customer\\.address\\.state')
      }
      getZipcode(){
        return cy.get('#customer\\.address\\.zipCode')
      }
      getphnNum(){
        return cy.get('#customer\\.phoneNumber')
      }
      getSsn(){
        return cy.get('#customer\\.ssn')
      }
      getUsername(){
        return cy.get('#customer\\.username')
      }
      getPassword(){
        return cy.get('#customer\\.password')
      }
      getRepeatPass(){
        return cy.get('#repeatedPassword')
      }
      getSubmitReg(){
        return cy.get('input.button[value="Register"]')
      }
      getWelcomeTxt(){
        return cy.get('#rightPanel')
      }
      getLogout(){
        return cy.get('#leftPanel > ul > :nth-child(8) > a')
      }
      getLoginTxt(){
        return cy.get('h2')
      }
      getLgnUsername(){
        return cy.get(':nth-child(2) > .input')
      }
      getLgnPassword(){
        return cy.get(':nth-child(4) > .input')
      }
      getLgnBtn(){
        return cy.get(':nth-child(5) > .button')
      }
      getAcctOverview(){
        return cy.get('#overviewAccountsApp')
      }
      getTableHeaders(){
        return cy.get('table#accountTable thead tr')
      }
      getTableFirstRow(){
        return cy.get('table#accountTable tbody tr')
      }
      getTableRow(){
        return cy.get('table#accountTable tbody tr')
      }
      getTableFooter(){
        return cy.get('table#accountTable tfoot tr')
      }
      getOpenAcct(){
        return cy.get('#leftPanel > ul > :nth-child(1) > a')
      }
      getAcctType(){
        return cy.get('#type')
      }
      getFrmAcctID(){
        return cy.get('#fromAccountId')
      }
      getOpenNewAcct(){
        return cy.get('form > div > .button')
      }
      getAcctId(){
        return cy.get('tbody > :nth-child(1) > :nth-child(1) > a')
      }
      getTransferFunds(){
        return cy.get('#leftPanel > ul > :nth-child(3) > a')
      }
      getTransTitle(){
        return cy.get('#showForm > .title')
      }
      getAmtField(){
        return cy.get('#amount')
      }
      getTransferBtn(){
        return cy.get(':nth-child(4) > .button')
      }
      getReqLoanBtn(){
        return cy.get('#leftPanel > ul > :nth-child(7) > a')
      }
      getLoanPageTitle(){
        return cy.get('#requestLoanForm > .title')
      }
      getLoanAmt(){
        return cy.get('#amount')
      }
      getDwnPayment(){
        return cy.get('#downPayment')
      }
      getLoanbtn(){
        return cy.get('[colspan="2"] > .button')
      }
      getLoanStatus(){
        return cy.get('#loanStatus')
      }
}
export default Homepage;