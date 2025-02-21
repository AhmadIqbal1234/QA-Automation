const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login/login.page');
const DashboardPage = require('../pageobjects/login/dashboard.page');

const pages = {
    login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    if (message === "kasirAja") {
        // Login berhasil
        await expect(DashboardPage.dashboardHeader).toBeExisting();
        await expect(DashboardPage.dashboardHeader).toHaveText(message);
    } else {
        // Login gagal
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveText(message);
    }
});
