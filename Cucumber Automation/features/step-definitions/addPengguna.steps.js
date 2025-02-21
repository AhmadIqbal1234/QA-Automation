const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const addPenggunaPage = require('../pageobjects/user/addPengguna.page');
// const DashboardPage = require('../pageobjects/addPengguna/dashboard.page');

const pages = {
    login: addPenggunaPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].openLogin();
});

When(/^I login with email and password$/, async () => {
    await addPenggunaPage.login('ngabs@yopmail.com', '12345678Aa!');
});

When(/^I click on the user menu$/, async () => {
    await addPenggunaPage.userMenu();
});

When(/^I click on the add button$/, async () => {
    await addPenggunaPage.addUserButton();
})
When(/^I add a user with a (.+), (.+), and (.+)$/, async (name, email, password) => {
    await addPenggunaPage.addUser(name, email, password);
});

Then(/^I will see the user that has been added (.*)$/, async (message) => {
    if (message === "tambah") {
            //  berhasil add user
            await expect(addPenggunaPage.dashboardHeader).toBeExisting();
            await expect(addPenggunaPage.dashboardHeader).toHaveText(message);
        } else {
            //  gagal
            await expect(addPenggunaPage.messageContainer).toBeExisting();
            await expect(addPenggunaPage.messageContainer).toHaveText(message);
        }
    
}); //#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1khaxf9 > div.chakra-alert.css-qwanz3

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     if (message === "kasirAja") {
//         // Login berhasil
//         await expect(DashboardPage.dashboardHeader).toBeExisting();
//         await expect(DashboardPage.dashboardHeader).toHaveText(message);
//     } else {
//         // Login gagal
//         await expect(LoginPage.errorMessage).toBeExisting();
//         await expect(LoginPage.errorMessage).toHaveText(message);
//     }
// });
