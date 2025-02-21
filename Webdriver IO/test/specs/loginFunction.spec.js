const assert = require('assert');

//menggunakan funtion
async function login(username, password) {
    // Buka URL awal
    await browser.url('/');
    //masukin username (css locator)
    await $('#user-name').setValue(username);
    //masukin password (css locator)
    await $('#password').setValue(password);
    //klik tombol login
    await $('#login-button').click();
}

describe('Succes login', () => {

    it('invalid username', async () => {
        //panggil function login
        await login('invalid_user', 'secret_sauce');
        //assertion
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    });

    it('invalid password', async () => {
        //panggil function login
        await login('standard_user', 'invalid_password');
        //assertion
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    });

    it('succes login', async () => {
        //panggil function login
        await login('standard_user', 'secret_sauce');
        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    });
