const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TEST_SITE_URL = 'http://zero.webappsecurity.com/';

const SETTINGS = {
    headless:true,
}

describe('test keyboard press', () => {

    it('enter press', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();

        await page.goto(TEST_SITE_URL);

        await page.waitForSelector('#searchTerm'); // It is common practice to wait for a element on page before starting to type
        await page.type('#searchTerm', 'Hello World');
        await page.keyboard.press('Enter');

        await browser.close();
    })
})