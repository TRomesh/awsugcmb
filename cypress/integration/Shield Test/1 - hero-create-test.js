describe('Creating heroes at S.H.I.E.L.D', function () {
    it('Typing the credentials and logging in', function () {
        cy.visit('https://master.d3vtj69ovb94wy.amplifyapp.com');
        cy.get('[data-test=username-input]').type('andrew');
        cy.get('[data-test=sign-in-password-input]').type('Andrew1996');
        cy.get('[data-test=sign-in-sign-in-button]').click();
    });

    it('Creating a new hero at S.H.I.E.L.D', function () {
        cy.get('[data-cy=create-hero-button]').click();
        cy.get('[data-cy=hero-name-field]').type('Star-Lord');
        cy.get('[data-cy=hero-power-field]').type('Listens to dank music!');
        cy.get('[data-cy=hero-create-submit-button]').click();
    });

    it('Checking the new hero at S.H.I.E.L.D', function () {
        cy.wait(3000);
        cy.get('[data-cy=hero-tile]').should('contain', 'Star-Lord');
    });

    it('Logging Out', function () {
        cy.get('[data-cy=logout-button]').click();
    });
});