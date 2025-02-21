const { $ } = require('@wdio/globals');
const Page = require('../register/page');

class LoginPage extends Page {
    get inputEmail() {
        return $('input[type="email"]');
    }

    get inputPassword() {
        return $('input[type="password"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    

    get errorMessage() {
        return $('div[role="alert"]'); // Selector untuk pesan error div[role="alert"]

    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.openLogin();
    }
}

module.exports = new LoginPage();
