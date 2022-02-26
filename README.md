**Cypress Automation using java-Script**

Testcase 1 :

1. Open https://github.com/login 

2. Type email/username into the "Username or email address" field.

3. Type password into the password field.

4. Click on the Sign-in button.

5. On the top right corner, there is a view profile icon. Click on that icon that should list a bunch of profile related options (Your profile, Your repositories, Sign out etc.).

6. Verify that the right username/email address is displayed on the text "Signed in as <username/email address>".

7. Click on the Sign-out button. 

Testcase 2 :
1. Open https://github.com/login 

2. Type email/username into the "Username or email address" field.

3. Type password into the password field.

4. Click on the sign-in button.

5. On the left-hand pane, click on the New button to create a new repository.

6. Create a new repository with the following inputs -

               a. Repository name - cypress-assignment

               b. Check Public

               c. Check Add .gitignore and select “Node” from the options

               d. Click on the “Create repository” button.

7. Validate the name of the repo and if the .gitignore file is present.

8. Click on Sign out.

**Mochawesome Report:**
<img width="859" alt="image" src="https://user-images.githubusercontent.com/55028448/155854571-3fa09208-185c-41d1-9ff8-912db93e5f5d.png">


Run Locally 🚀

git clone : https://github.com/prasanthvb/cypress-automation.git

npm install

npm run cy-test

✔️ Cypress Command Line Test Results

<img width="569" alt="image" src="https://user-images.githubusercontent.com/55028448/155854631-028ff5cb-2e47-42ca-bbb6-f3ef5300fe23.png">


<img width="564" alt="image" src="https://user-images.githubusercontent.com/55028448/155854653-952ca8b4-0523-46e3-9a98-f23f7f003ec3.png">
