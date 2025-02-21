Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | email                        | password    | message                                   |
      | testcollaborator@            | 12345678Aa! | Email must be a valid email address       |
      | testcollaborator@yopmail.com | 12345678    | Double check your E-mail and Password!    |
      | testcollaborator@yopmail.com | 12345678Aa! | Billing                                   |
