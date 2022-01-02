const puppeteer = require('puppeteer');

// constants
const TEST_SITE_URL = 'https://devexpress.github.io/testcafe/example';

const SETTINGS = {
    headless: true
}


describe('Working with input', () => {
    it('changes when typed inside', async () => {

        const browser = await puppeteer.launch(SETTINGS)

        const page = await browser.newPage();
        await page.goto(TEST_SITE_URL);

        await page.type('#developer-name', 'Mike', {delay: 200}); // First param is the selector, second one is the value we input. Last paaram is a setting object. Delay should be used for debbuging or checking out stuff. Never for prod as it will make tests longer

        await page.waitForTimeout(500);

        browser.close();
    })

    it('allows us to check the checkbox', async () => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();

        await page.goto(TEST_SITE_URL);

        await page.click('#tried-test-cafe', { clickCount: 1}); // we specify the selector. There are optional settings like the number of counts.

        await page.waitForTimeout(500);

        await browser.close();
    });

    it('allows us to use dropdown', async () => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();
        await page.goto(TEST_SITE_URL);

        await page.select('#preferred-interface', 'JavaScript API'); // in order to select a element we need to first chose the selector for the dropdown form and secondly chose the text inside the option

        await browser.close();
    });
})


describe('e2e testing of the form', ()=> {

    it('allows us to fill the form and send it', async () => {
        const browser = await puppeteer.launch(SETTINGS);
        const page = await browser.newPage();

        await page.goto(TEST_SITE_URL);
        await page.type('#developer-name', 'Johnny');
        await page.click('#tried-test-cafe');
        await page.select('#preferred-interface', 'Both');
        await page.type('#comments', 'Lov ya <3!');
        await page.click('#submit-button');

        await browser.close();
    })
})