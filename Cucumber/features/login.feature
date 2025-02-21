Feature: Sauce Demo Website

  Scenario Outline: As a user, I can log into the Sauce Demo website

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username      | password | message                              |
      | standard_user | secret_sauce | Products                          |
      | lockedt_user | secret_sauce | Epic sadface: Username and password do not match any user in this service |
