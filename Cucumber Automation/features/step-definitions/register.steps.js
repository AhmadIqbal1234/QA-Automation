const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/register/login.page');
const RegisterPage = require('../pageobjects/register/register.page');
const DashboardPage = require('../pageobjects/register/dashboard.page');

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

When(/^I click on the register button$/, async () => {
    await LoginPage.clickRegister();
});

When(/^I register with (.+), (.+), and (.+)$/, async (storeName, email, password) => {
    await RegisterPage.register(storeName, email, password);
});

Then(/^I should see a message saying (.*)$/, async (message) => {
    if (message === "hai, kasirAja") {
        // Verifikasi halaman login muncul setelah registrasi berhasil
        //await expect(LoginPage.inputEmail).toBeExisting();  // Halaman login muncul kembali setelah reload
        await expect(DashboardPage.dashboardHeader).toBeExisting();
        await expect(DashboardPage.dashboardHeader).toHaveText(message);
    } else {
        // Verifikasi jika ada pesan error yang muncul
        await expect(RegisterPage.errorMessage).toBeExisting();
        await expect(RegisterPage.errorMessage).toHaveText(message);
    }
});