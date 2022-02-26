class NewRepoPage {

    repoName() {
        return cy.get('strong[itemprop ="name"] > a')
    }
    gitIgnoreFile() {
        return cy.get('a[title=".gitignore"]')
    }

    userProfile() {
        return cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar')
    }

    signout() {
        return cy.get('button[class*="dropdown-signout"]')
    }
}
export default NewRepoPage;
