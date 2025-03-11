
//หัวข้อใหญ่ ที่จะมีgroup ของtest case
describe("My first test", ()=>{
    //test case 1.
    it('Validate Username',()=>{
        cy.visit('https://www.saucedemo.com')
        //ตอนtest ให้devใส่tag data test
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test = error]').should('have.text','Epic sadface: Username is required')
    })
});