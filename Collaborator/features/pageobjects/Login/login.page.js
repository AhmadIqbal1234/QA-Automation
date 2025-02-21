const { $ } = require('@wdio/globals')
const Page = require('../Base_URL/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('input[type="email"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnSubmit () {
        return $('body > app-root > app-auth-layout > div > div > div > div > div.d-flex.justify-content-center.align-items-center > form > div > div.mb-2.mt-3 > button > div > div');
    }

    get errorMessage1() {
        return $(
            // Selector untuk pesan "Double check your E-mail and Password!"
           // 'body > app-root > app-auth-layout > div > div > div > div > div.d-flex.justify-content-center.align-items-center > form > div > div.text-center.desc > div.text-danger.my-3.ng-star-inserted'
            // Selector untuk pesan "Email must be a valid email address"
            'body > app-root > app-auth-layout > div > div > div > div > div.d-flex.justify-content-center.align-items-center > form > div > div.form-group.mt-1 > div > span'
        );
    }
    get errorMessage() {
        return $(
            // Selector untuk pesan "Double check your E-mail and Password!"
            'body > app-root > app-auth-layout > div > div > div > div > div.d-flex.justify-content-center.align-items-center > form > div > div.text-center.desc > div.text-danger.my-3.ng-star-inserted'
            // Selector untuk pesan "Email must be a valid email address"
            // '.text-danger',
        );
    }

    /**
     * Method untuk login menggunakan email dan password
     */
    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * Method untuk mendapatkan pesan error
     */
    // async getErrorMessage() {
    //     for (const selector of this.errorMessageSelectors) {
    //         const element = await $(selector);
    //         if (await element.isExisting()) {
    //             return await element.getText();
    //         }
    //     }
    //     throw new Error('No error message found!');
    // }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
