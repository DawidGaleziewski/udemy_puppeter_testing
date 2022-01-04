const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TEST_SITE_URL = 'http://zero.webappsecurity.com/';

const SETTINGS = {
    headless: true
}

describe('test if element will be hidden', () => {
    // Variables common to the tests can be setup here
    let browser;
    let page;

    // Before hook alows us to run test setup. It will run before first test (it) block
    before(async () => {
        browser = await puppeteer.launch(SETTINGS);
        page = await browser.newPage();
        // await page.setDefaultTimeout(5000);
        // await page.setDefaultNavigationTimeout(5000)
    });

    // Closes browser after last test is finished
    after(async () => {
        await browser.close();
    })

    // // beafore each test
    // beforeEach(async () => {
    //     // before each it block
    // })

    // afterEach(async () => {
    //     // after each it block
    // })

    it('enter press', async() => {
        await page.goto(TEST_SITE_URL);
    })
})