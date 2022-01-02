const puppeteer = require('puppeteer');

// constants
const TEST_SITE_URL = 'https://devexpress.github.io/testcafe/example';

const SETTINGS = {
    headless: true,
}

describe('test site url and title', () => {

    it('has correct url', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();
        await page.goto(TEST_SITE_URL);

        const pageTitle = await page.title();
        const pageUrl = await page.url();

        console.log('page params', pageTitle, pageUrl)

        await browser.close();
    })
})