class LandingPage {

    userProfile() {
        return cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar')
    }
    userName() {
        return cy.get('strong[class="css-truncate-target"]')
    }

    signout() {
        return cy.get('button[class*="dropdown-signout"]')
    }

    userAccount() {
        return cy.get('header[role="banner"] > :nth-child(1) > a')
    }

    newRepoBtn() {
        return cy.get('#repos-container > h2 > a:visible')
    }

}
export default LandingPage;
