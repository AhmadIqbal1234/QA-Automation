Feature: Kasiraja Register Functionality

Scenario Outline: As a user, I can register for an account
    Given I am on the login page
    When I click on the register button
    When I register with <storeName>, <email>, and <password>
    Then I should see a message saying <message>

Examples:
    | storeName     | email                | password    | message                     |
    | Jaya          | ngabs@yopmail.com    | 12345678Aa! | Email sudah digunakan       |
    | Jaya          | ngrrwerw@yopmail.com | 12345678Aa! | hai, kasirAja               |
