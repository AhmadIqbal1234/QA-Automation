const { $ } = require('@wdio/globals');
const Page = require('../register/page');

class addPenggunaPage extends Page {
    get inputEmail() {
        return $('input[type="email"]');
    }

    get inputPassword() {
        return $('input[type="password"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get btnUserMenu() {
        return $('a[href="/users"]'); // selector untur tombol user
    }
    
    get btnAddUser() {
        return $('a[href="/users/create"]'); // selector untur tombol tambah
    }
    
    get inputName() {
        return $('input[id="nama"]'); // selector untur nama
    }
    
    get inputEmailField() {
        return $('input[id="email"]'); // selector untur email
    }
    
    get inputPasswordField() {
        return $('input[id="password"]'); // selector untuk password
    }

    get btnSaveUser() {
        return $('button[class="chakra-button css-l5lnz6"]');//selector unturk tombol simpan
    
    }
    
    get messageContainer() {
        return $('div[role="alert"].chakra-alert.css-qwanz3'); // selector untuk error message
    }

    get dashboardHeader() {
        return $('a[href="/users/create"]'); // Selector untuk elemen header di dashboard
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    openLogin() {
        return super.openLogin('login');
    }

    async userMenu() {
        await this.btnUserMenu.click();
    }

    async addUserButton() {
        await this.btnAddUser.click();
    }

    async addUser(name, email, password) {
        await this.btnUserMenu.click();
        await this.btnAddUser.click();
        await this.inputName.setValue(name);
        await this.inputEmailField.setValue(email);
        await this.inputPasswordField.setValue(password);
        await this.btnSaveUser.click();
    }
}
    module.exports = new addPenggunaPage();



