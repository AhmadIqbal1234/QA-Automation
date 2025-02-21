const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const addPelangganPage = require('../pageobjects/user/addPelanggan.page');
// const DashboardPage = require('../pageobjects/addPengguna/dashboard.page');

const pages = {
    login: addPelangganPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].openLogin();
});

When(/^I login with email and password$/, async () => {
    await addPelangganPage.login('ngabs@yopmail.com', '12345678Aa!');
});

When(/^I click on the user menu$/, async () => {
    await addPelangganPage.userMenu();
});

When(/^I click on the add button$/, async () => {
    await addPelangganPage.addUserButton();
})
When(/^I add a user with a (.+), (.+), (.+), and (.+)$/, async (name, no, alamat, keterangan) => {
    await addPelangganPage.addUser(name, no, alamat, keterangan);
});

Then(/^I will see the user that has been added (.*)$/, async (message) => {
    if (message === "tambah") {
            //  berhasil add user
            await expect(addPelangganPage.dashboardHeader).toBeExisting();
            await expect(addPelangganPage.dashboardHeader).toHaveText(message);
        } else {
            //  gagal
            await expect(addPelangganPage.messageContainer).toBeExisting();
            await expect(addPelangganPage.messageContainer).toHaveText(message);
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
