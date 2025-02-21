const assert = require('assert');

describe('Succes login', () => {

    it('invalid username', async () => {
        // Buka URL awal
        await browser.url('/');

        //masukin username (css locator)
        await $('#user-name').setValue('invalid_user');
        //masukin password (css locator)
        await $('#password').setValue('secret_sauce');
        //klik tombol login
        await $('#login-button').click();
        //assertion
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    });

    it('invalid password', async () => {
        // Buka URL awal
        await browser.url('/');

        //masukin username (css locator)
        await $('#user-name').setValue('invalid_user');
        //masukin password (css locator)
        await $('#password').setValue('invalid_password');
        //klik tombol login
        await $('#login-button').click();
        //assertion
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    });

    it('succes login', async () => {
        // Buka URL awal
        await browser.url('/');

        //masukin username (css locator)
        await $('#user-name').setValue('standard_user');
        //masukin password (css locator)
        await $('#password').setValue('secret_sauce');
        //klik tombol login
        await $('#login-button').click();
        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    });
