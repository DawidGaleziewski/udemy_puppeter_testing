const puppeteer = require('puppeteer');

// constants
const TEST_SITE_URL = 'https://devexpress.github.io/testcafe/example';

const SETTINGS = {
    headless: true,
}

describe('test if text is correct', () => {

    it('has correct h1', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();
        await page.goto(TEST_SITE_URL);

        const h1text = await page.$eval('h1', element => element.textContent); // there is no function for getting text, we can use however eval to get a DOM element
        
        console.log('h1 value is', h1text)

        await browser.close();
    })
})