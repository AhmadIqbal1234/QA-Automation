const { $ } = require('@wdio/globals');
const Page = require('../register/page');

class addPelangganPage extends Page {
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
        return $('a[href="/customers"]'); // selector untur tombol user
    }
    
    get btnAddUser() {
        return $('a[href="/customers/create"]'); // selector untur tombol tambah
    }
    
    get inputName() {
        return $('input[id="nama"]'); // selector untur nama
    }
    
    get inputNo() {
        return $('input[id="no.hp"]'); // selector untur no
    }

    get inputAlamat() {
        return $('input[id="alamat"]'); // selector untur alamat
    }
    get inputKeterangan() {
        return $('input[id="keterangan"]'); // selector untur email
    }

    get btnSaveUser() {
        return $('button[type="button"].chakra-button.css-l5lnz6');//selector unturk tombol simpan
    
    }
    
    get messageContainer() {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1khaxf9 > div.chakra-alert.css-qwanz3'); // selector untuk error message
    }

    get dashboardHeader() {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1khaxf9 > a'); // Selector untuk elemen header di dashboard
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

    async addUser(name, no, alamat, keterangan) {
        await this.inputName.setValue(name);
        await this.inputNo.setValue(no);
        await this.inputAlamat.setValue(alamat);
        await this.inputKeterangan.setValue(keterangan);
        await this.btnSaveUser.click();
    }
}
    module.exports = new addPelangganPage();



