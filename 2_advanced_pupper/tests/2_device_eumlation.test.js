const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TEST_SITE_URL = 'http://zero.webappsecurity.com/';

const SETTINGS = {
    headless: false,
}

describe('test device emulation', () => {
    // Variables common to the tests can be setup here
    let browser;
    let page;

    // Before hook alows us to run test setup. It will run before first test (it) block
    before(async () => {
        browser = await puppeteer.launch(SETTINGS);
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000)
    });

    after(async ()=> {
        browser.close()
    })

    it('desktop device test', async() => {
        await page.setViewport({width: 1650, height: 1050}) // when we set viewport we will have a desktop site
        await page.goto(TEST_SITE_URL);
        // await page.waitForTimeout(2000)
    })
    
    it('tablet device test', async() => {
        const tablet = puppeteer.devices['iPad landscape']; // select a device
        await page.emulate(tablet);

        await page.goto(TEST_SITE_URL);
        // await page.waitForTimeout(2000)
    })
    
    it('mobile device test', async() => {
        await page.goto(TEST_SITE_URL);
        const mobile = puppeteer.devices['iPhone X']; // select a device
        await page.emulate(mobile);

        await page.goto(TEST_SITE_URL);
        // await page.waitForTimeout(2000)

    })
})