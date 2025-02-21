const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/Login/login.page');
const SecurePage = require('../pageobjects/Dashboard/dashboard.page');
const dashboardPage = require('../pageobjects/Dashboard/dashboard.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    if (message === "Billing") {
        // Login berhasil
        await expect(dashboardPage.dashboard).toBeExisting();
        await expect(dashboardPage.dashboard).toHaveText(message);
    } else if (message === "Email must be a valid email address") {
        // Login gagal (semua pesan error lain)
        await expect(LoginPage.errorMessage1).toBeExisting();
        await expect(LoginPage.errorMessage1).toHaveText(message);
    }else {
        // Login gagal (semua pesan error lain)
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveText(message);
    }
});

