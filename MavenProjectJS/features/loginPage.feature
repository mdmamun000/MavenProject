Feature: Login Functionality for OpenCart E-commerce Website
## As a user of the Open Cart website
## I want to be able to log in with my account
## So that I can access my account-related features and manage my orders
## I want to use this template for my feature file

  Background: 
  Given I am on the OpenCart Login Page
  
  Scenario: Successful login with valid credentials
    Given I have entered a valid username and password
    When I click on the login button
    Then I should be logged in successfully
    
  
  Scenario Outline: Unsuccessful login with invalid or empty credentials
    Given I have entered invalid "<username>" and "<password>"
    When I clicked on the login button
    Then I should see an error message indicating "<error_message>"

    Examples: 
      | username          | password             | error_message                                         |
      | invalid@gmail.com | invalidPassword      | Warning: No match for E-Mail Address and/or Password. |
      | abdcs             | validPassword        | Warning: No match for E-Mail address and/or Password. |
      | valid@gmail.com   | agdd                 | Warning: No match for E-Mail address and/or Password. |
     
     Scenario: Navigating for the forgotten password page
     When I click on the "Forgotten Password" link
     Then I should be redirected to the possword reset page
     