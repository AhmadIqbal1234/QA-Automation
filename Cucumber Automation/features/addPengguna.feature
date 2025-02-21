Feature: Kasiraja Add Pengguna Functionality

  Scenario Outline: 
    Given I am on the login page
    When I login with email and password
    When I click on the user menu
    When I click on the add button
    When I add a user with a <name>, <email>, and <password>
    Then I will see the user that has been added <message>

  

    Examples: User invalid
      |name             | email              | password    | message                       |
      |new user invalid | user@             | 12345678Aa! | "email" must be a valid email  |
      #|new user valid   | user@yopmail.com   | 12345678Aa! | tambah                     |

      
      
