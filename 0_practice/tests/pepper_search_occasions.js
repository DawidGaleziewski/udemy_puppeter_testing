const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// constants
const TARGET_URL = 'https://www.pepper.pl/';
const SEARCH_PHRASE = 'konsola ps5';
const SEARCH_INPUT_SELECTOR = ".nav form.search input";
const SINGLE_ITEM_SELECTOR = "div.cept-event-deals article.thread"

const SETTINGS = {
    headless: true,
}

describe('test if we can buy cheaply', () => {

    it('find PS5', async() => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();
        await page.goto(TARGET_URL);

        await page.waitForSelector(SEARCH_INPUT_SELECTOR);
        await page.type(SEARCH_INPUT_SELECTOR, SEARCH_PHRASE);
        await page.keyboard.press('Enter');

        await page.waitForTimeout(1000);

        const buyItems = await page.$$eval(SINGLE_ITEM_SELECTOR, elements => elements);

        console.log('buy items', buyItems.length)
        await browser.close();
    })
})