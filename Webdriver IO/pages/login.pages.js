
class LoginPage {
    //deskripsi locator element
    get input_username() {
        return $('#user-name'); //locator field username
    }
    get input_password() {
        return $('#password'); //locator field password
    }
    get btn_login() {
        return $('#login-button'); //locator tombol login
    }
    get errorMsg() {
        return $('//*[@data-test="error"]'); //locator error message
    }

    //definisikan action/interaksi yang dilakukan
    async login(username, password) {
        await this.input_username.setValue(username);
        await this.input_password.setValue(password);
        await this.btn_login.click();
    }

    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMsg).toHaveText(expectedErrorMessage);
    }
    async getErrorMessage() {
        return this.errorMsg.getText();
    }
}
module.exports = new LoginPage();