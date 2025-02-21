Feature: Kasiraja Add Pengguna Functionality

  Scenario Outline: 
    Given I am on the login page
    When I login with email and password
    When I click on the user menu
    When I click on the add button
    When I add a user with a <name>, <no>, <alamat>, and <keterangan>
    Then I will see the user that has been added <message>

  

    Examples: User 
    |name        | no              | alamat   | keterangan       | message                 |
    #|pelanggan 1 | 08146546456     | Sleman   | pengguna valid   | tambah                  |
    |pelanggan 2 | dasdad          | Sleman   | pengguna invalid | "phone" must be a number | 

      
      
