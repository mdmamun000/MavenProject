Feature: Login verification in FB

  Scenario Outline: Verify the login functionality in FB
    Given User is in FB Login Page
    When User enters "<username>"
    And user enters "<password>"
    Then user in FB Home Page

    Examples: 
      | username                | password      |
      | saintjohn.usc@gmail.com |    ee           |
      | saintjohn.usc@gmail.com | Fatimaruja518 |
