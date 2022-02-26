class LoginPage {

    userName() {
        return cy.get('#login_field')
    }
    password() {
        return cy.get('#password')
    }

    signIn(){
        return cy.get('input[type="submit"]')
    }

}
export default LoginPage;


