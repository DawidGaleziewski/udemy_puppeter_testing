const puppeteer = require('puppeteer');


// starts browser. Headless false will start physical browser. We can specify other staring options like slowMo to see what is happening
const DEV_SETTINGS = { headless: false, slowMo: 500, devtools: true } // settings useful when developing tests

const SETTINGS = {
	headless: true
}

describe('My first test suit', () => {
	it('should launch browser', async function () {
		const browser = await puppeteer.launch(SETTINGS); 

		const page = await browser.newPage(); // we need to open new page that we will use our methods on

		await page.goto('http://example.com/'); // will go to specific url

		await page.waitForTimeout(1) // pause test - way of implicit pausing the test. Historically used was waitFor

		await page.waitForSelector('h1'); // will try to find this element. If it finds it it will move on. If not it will throw an error

		await page.reload(); // reload browser

		await page.goto('https://dev.to/');
		await page.waitForSelector("#snack-zone");
		// This won't work due to a issue with puppeter
		// await page.goBack();
		// await page.waitForSelector('h1');
		// await page.goForward();
		// await page.waitForSelector("#snack-zone");

		await browser.close();
	});
});
