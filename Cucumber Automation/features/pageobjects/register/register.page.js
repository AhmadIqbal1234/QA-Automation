const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * Page Object untuk halaman Register
 */
class RegisterPage extends Page {
    /**
     * Elemen-elemen di halaman register
     */
    get inputStoreName() {
        return $('input[id="name"]');
    }

    get inputEmail() {
        return $('input[id="email"]');
    }

    get inputPassword() {
        return $('input[id="password"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get errorMessage() {
        return $('div[role="alert"].chakra-alert.css-qwanz3'); // Selector untuk pesan error div[role="alert"].chakra-alert.css-qwanz3
    }

    async register(storeName, email, password) {
        await this.inputStoreName.setValue(storeName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.openRegister();
    }
}

module.exports = new RegisterPage();
