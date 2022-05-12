import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on https://www.pickswise.com/", () => {
	cy.visit("/");
	cy.wait(200);
});

When("I Select the Next Up Sports Filter", () => {
	cy.get(".Logo_logoImage__2K43B").should("be.visible");
//	cy.get("select").select('NHL');
//    cy.get('.Select_select__24c5n').select('All Sports');
//    cy.get(*[@id="__next"]/div[3]/div[1]/section[1]/div/div/div/div[1]/div/div/select).click();
//<select class="Select_select__24c5n" aria-label="select"><option value="All Sports" selected="">All Sports</option><option value="Soccer">Soccer</option><option value="MLB">MLB</option><option value="NBA">NBA</option><option value="NHL">NHL</option></select>
    cy.get('select').select('All Sports').should('have.value', 'All Sports');
    cy.get('select').select('MLB').should('have.value', 'MLB');
    cy.get('select').select('NHL').should('have.value', 'NHL');
    cy.get('select').select('NBA').should('have.value', 'NBA');
//    cy.xpath('//[@id="__next"]/div[3]/div[1]/section[1]/div/div/div/div[1]/div/div/select');
//    cy.get('[data-cy="__next"]')
});

Then("I can see an available list of Sports to filter by", () => {
    cy.get('select').should('have.value', 'NBA')
});

When("I want to see the soccer picks", () => {
    cy.contains('Soccer').click();
    cy.contains('Predictions').click({force: true});
    cy.get('a[href*="/soccer/predictions/"]').click()
});

Then("I can see the correct soccer picks page", () => {
    cy.url().should('include', '/soccer/picks');
    cy.contains('BET365').should('be.visible')
});
