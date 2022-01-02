const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TEST_SITE_URL = 'https://devexpress.github.io/testcafe/example';

const SETTINGS = {
    headless: true
}

describe('test number of elements on the site and text with assertions', () => {

    it('has correct h1 text', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();
        await page.goto(TEST_SITE_URL);

        const pageUrl = await page.url();
        const h1Text = await page.$eval('h1', element => element.textContent);
 
        expect(h1Text).to.be.a('string', 'Example'); // Type and content assertions
        expect( pageUrl).to.include('/example')

        await browser.close();
    })
})