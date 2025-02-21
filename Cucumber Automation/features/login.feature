Feature: Kasiraja Login Functionality

  Scenario Outline: As a user, I can log into the Kasiraja system

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | email              | password    | message                             |
      | ngabs@yopmail.com  | erere       | Kredensial yang Anda berikan salah  |
      | invalid@gmail.com  | 12345678Aa! | Kredensial yang Anda berikan salah  |
      | ngabs@yopmail.com  | 12345678Aa! | kasirAja                            |
      
