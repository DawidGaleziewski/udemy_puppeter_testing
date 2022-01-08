const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require('jest-image-snapshot');

expect.extend({toMatchImageSnapshot});

describe('Visual regression testing', ()=> {
    let browser;
    let page;

    beforeAll(async function(){
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage()
    })

    afterAll(async function(){
        await browser.close();
    })

    test('Full page snapshot', async function(){
        await page.goto('https://example.com/');
        await page.waitForSelector('h1');

        // save the image
        const image = await page.screenshot(); // taking snap
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'pixel', // unit we calculate how much it can differ
            failureThreshold: 500 // how many px we can tolerate
        });
    })

    test('Single element snapshot', async function(){
        await page.goto('https://example.com/');
        
        const h1 = await page.waitForSelector('h1'); // saving component
        const image = await h1.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01
        });
    })

    test('responsive tests for Mobile', async function(){
        await page.goto('https://example.com/');
        await page.waitForSelector('h1');
        await page.emulate(puppeteer.devices['iPhone X'])
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01
        })
    })

    test('responsive tests for Tablet', async function(){
        await page.goto('https://example.com/');
        await page.waitForSelector('h1');
        await page.emulate(puppeteer.devices['iPad landscape'])
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01
        })
    })

    test('hide elements like timestamps to not break snapshot', async function(){
        await page.goto('https://example.com/');
        await page.waitForSelector('h1');
        await page.evaluate(() => {
            (document.querySelectorAll('h1') || []).forEach(el => el.remove())
        })
        await page.emulate(puppeteer.devices['iPad landscape'])
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01
        })
    })
})