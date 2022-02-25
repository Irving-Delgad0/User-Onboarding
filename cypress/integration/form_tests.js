describe("Team App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const usernameInput= () => cy.get("input[name=username]")
    const emailInput = () => cy.get("input[name=email]")
    const passwordInput = () => cy.get("input[name=password]")
    const checkBox = () => cy.get("[type='checkbox']")
    const submitBtn = () => cy.get("[type='submit']")

    it("Sanity check to make sure tests are working", () => {
        expect(1+2).to.equal(3)
    })

    it ("check to see if elements are showing correctly", () => {
        usernameInput().should("exist")
        passwordInput().should("exist")
        emailInput().should("exist")
        checkBox().should("exist")
    })

    it("check that inputs can take a value", () => {
        usernameInput().should("have.value", "").type("Irving").should("have.value", "Irving")
        emailInput().should("have.value", "").type("Irving@irving.com").should("have.value", "Irving@irving.com")
        passwordInput().should("have.value", "").type("password").should("have.value", "password")
        checkBox().check()
    })
    it("check that the user can submit the form", () => {
        usernameInput().type("Irving")
        emailInput().type("Irving@irving.com")
        passwordInput().type("password")
        checkBox().check()
        submitBtn().click()
        usernameInput().should("have.value", "")
        emailInput().should("have.value", "")
        passwordInput().should("have.value", "")
    })

    it("check for validation", () => {
        
    })
})




   


