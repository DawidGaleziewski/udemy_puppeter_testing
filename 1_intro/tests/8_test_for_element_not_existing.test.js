const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TEST_SITE_URL = 'http://zero.webappsecurity.com/';

const SETTINGS = {
    headless: false,
    slowMo: 400
}

describe('test if element will be hidden', () => {

    it('enter press', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();

        await page.goto(TEST_SITE_URL);

        await page.waitForSelector('#searchTerm'); 
        await page.type('#searchTerm', 'Hello World');
        await page.keyboard.press('Enter');

        await page.waitForSelector('#searchTerm', {hidden: true, timeout: 3000}) // we cam ovrride the timout in the function
        await browser.close();
    })
})