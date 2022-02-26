class CreateRepoPage {

    repoNametxt() {
        return cy.get('#repository_name')
    }
    PublicRbtn() {
        return cy.get('#repository_visibility_public')
    }

    gitIgnoreCb() {
        return cy.get('#repository_gitignore_template_toggle')
    }

    gitTemplateDd() {
        return cy.get(':nth-child(5) > .form-checkbox-details > .details-reset > .select-menu-button')
    }

    gitIgnoreSearchbox() {
        return cy.get('input[placeholder="Filter ignores…"]')
    }

    visibleSearchFilter() {
        return cy.get('span[class*=select-menu-item-text]:visible')
    }

    createRepoBtn() {
        return cy.get('.btn-primary')
    }
    
}
export default CreateRepoPage;
