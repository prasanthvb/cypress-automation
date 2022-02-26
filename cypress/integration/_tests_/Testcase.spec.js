// type definitions for Cypress object "cy"
/// <reference types="cypress" />

//Imports for Test Data and Page Objects
import * as data from '../../fixtures/TestData.json';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import CreateRepoPage from '../pages/CreateRepoPage';
import NewRepoPage from '../pages/NewRepoPage';
import {
  randomIntValue
} from '../../Utility'


describe('Automation for Github application using Page Object Model', function () {
  //random Int value added with repoName to avoid duplicates
  let repoName = data.repoName + randomIntValue();

  const loginPage = new LoginPage();
  const landingPage = new LandingPage();
  const createRepoPage = new CreateRepoPage();
  const newRepoPage = new NewRepoPage();


  // Launch the url
  this.beforeEach('Launch url and sign in with given credentials', () => {
    cy.visit('/');

    //Login to Github
    loginPage.userName().type(data.userName);
    loginPage.password().type(data.password);
    loginPage.signIn().should('be.visible');
    loginPage.signIn().should('be.enabled').click();

  });

  // This test is used to verify the username/email address in the user profile
  it('Test to verify userName/email in user profile', function () {

    //Click on view profile icon
    landingPage.userProfile().click();

    /* Verify that the right username/email address is 
    displayed on the text "Signed in as <username/email address>" */
    landingPage.userName().should('contain.text', data.userName);

    //Click on the Sign-out button
    landingPage.signout().should('be.enabled').click();

  });

  // This test is to create a new repository with .gitignore file
  it('Test to create and verify a new repository with .gitignore file', function () {

    //Click on New button to create a new repository
    landingPage.newRepoBtn().click();

    /* ---------User Navigates to Create Repository Page----------- */

    createRepoPage.repoNametxt().type(repoName); //Enter Repository name
    createRepoPage.PublicRbtn().click(); //Check Public radio button
    createRepoPage.gitIgnoreCb().check(); // Check .gitignore checkbox
    createRepoPage.gitTemplateDd().click(); // Click on gitignore template drop down
    createRepoPage.gitIgnoreSearchbox().type(data.ignoreFile); // Search Node
    createRepoPage.visibleSearchFilter().should('contain.text', data.ignoreFile).click(); // Select Node
    createRepoPage.createRepoBtn().should('be.enabled').click(); // Click on the “Create repository” button

    /* ---------User Navigates to New Repository Page----------- */

    //Verify the New repository name
    newRepoPage.repoName().should('contain.text', repoName);

    //Verify that the .gitignore file is added to repo
    newRepoPage.gitIgnoreFile().should('be.visible');

    //Click on user profile icon
    newRepoPage.userProfile().click();

    //Click on Signout button
    newRepoPage.signout().click();

  });
});
