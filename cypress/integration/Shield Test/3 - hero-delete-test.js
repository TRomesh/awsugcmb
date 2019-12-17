describe('Deleting heroes at S.H.I.E.L.D', function () {
    it('Typing the credentials and logging in', function () {
        cy.visit('https://master.d3vtj69ovb94wy.amplifyapp.com');
        cy.get('[data-test=username-input]').type('andrew');
        cy.get('[data-test=sign-in-password-input]').type('Andrew1996');
        cy.get('[data-test=sign-in-sign-in-button]').click();
    });

    it('Deleting Star-Lord from S.H.I.E.L.D', function () {
        cy.get('[data-cy=hero-tile]').contains('[data-cy=hero-tile]', 'Peter Quill').first().find('[data-cy=delete-hero-button]').click();
        cy.wait(5000);
    });

    it('Checking the deleted hero at S.H.I.E.L.D', function () {
        cy.get('[data-cy=hero-tile]').should('not.contain', 'Star-Lord');
        cy.get('[data-cy=hero-tile]').should('not.contain', 'Peter Quill');
    });

    it('Logging Out', function () {
        cy.get('[data-cy=logout-button]').click();
    });
});