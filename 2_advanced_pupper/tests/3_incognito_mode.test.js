const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TEST_SITE_URL = 'http://zero.webappsecurity.com/';

const SETTINGS = {
    headless:true,
}

describe('test device emulation', () => {
    // Variables common to the tests can be setup here
    let browser;
    let page;

    // Before hook alows us to run test setup. It will run before first test (it) block
    before(async () => {
        browser = await puppeteer.launch(SETTINGS);
        const context = await browser.createIncognitoBrowserContext(); // we use context to create a incognito browser mode
        page = await context.newPage();
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
    
})