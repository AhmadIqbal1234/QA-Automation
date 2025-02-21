const assert = require('assert');

describe('Open Browser', () => {
    it('Open Browser', async () => {
        // Buka URL awal
        await browser.url('/');

        // Ambil URL saat ini
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://www.saucedemo.com/';

        // Verifikasi URL menggunakan assert
        await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`
        );
    });
});
