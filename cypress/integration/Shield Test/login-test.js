describe('Login into the website', function () {
    it('Typing the credentials and logging in', function () {
        cy.visit('http://localhost:4200');
        cy.get('[data-test=username-input]').type('username');
        cy.get('[data-test=sign-in-password-input]').type('password');
        cy.get('[data-test=sign-in-sign-in-button]').click();
        // cy.get('#text-box').type("As you can see, Cypress types like a normal person. But MUCH MUCH FASTER! Isn't it fun to watch?");

        // cy.wait(1000);

        // cy.get('#username-field').type('cypressUser');

        // cy.get('#password-field').type('cypress123');

        // cy.get('#checkbox-field').click();

        // cy.get('#clear-button').click();

        // cy.get('#username-field').type('cypressUser');

        // cy.get('#password-field').type('cypress123');

        // cy.get('#checkbox-field').click();

        // cy.get('#submit-button').click();

        // cy.wait(1000);

        // cy.get('#goback-button').click();

    });
});