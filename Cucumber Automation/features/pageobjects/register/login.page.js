const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * Page Object untuk halaman Login
 */
class LoginPage extends Page {
    /**
     * Elemen di halaman login
     */
    get btnRegister() {
        return $('#root > div > div > div > div.css-1w7v3tn > div > div.css-4rvv7a > a'); // Gantilah selector ini sesuai dengan tombol Daftar di halaman login
    }

    /**
     * Method untuk klik tombol Register dan membuka halaman registrasi
     */
    async clickRegister() {
        await this.btnRegister.click();
    }

    /**
     * Override method open untuk membuka halaman login
     */
    open() {
        return super.openLogin();
    }
}

module.exports = new LoginPage();
