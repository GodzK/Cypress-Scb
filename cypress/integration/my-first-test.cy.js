<reference types="Cypress"/>

//หัวข้อใหญ่ ที่จะมีgroup ของtest case
describe("My first test", ()=>{
    //test case 1.
    it('Validate Username',()=>{
        cy.visit('https://www.saucedemo.com')
    })
});