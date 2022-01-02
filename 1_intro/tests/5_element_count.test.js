const puppeteer = require('puppeteer');

// constants
const TEST_SITE_URL = 'https://devexpress.github.io/testcafe/example';

const SETTINGS = {
    headless: true
}

describe('test number of elements on the site', () => {

    it('has correct h1', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();
        await page.goto(TEST_SITE_URL);

        const pElementsCount = await page.$$eval('p', elements => elements.length); // $$ == querySelecotrAll
        
        console.log('number of p tags', pElementsCount)

        await browser.close();
    })
})