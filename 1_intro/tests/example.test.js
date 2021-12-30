const puppeteer = require('puppeteer');

describe('My first test suit', () => {
	it('should launch browser', async function () {
		const browser = await puppeteer.launch({ headless: false }); // starts browser. Headless false will start physical browser

		const page = await browser.newPage(); // we need to open new page that we will use our methods on

		await page.goto('http://example.com/'); // will go to specific url

		await page.waitForSelector('h1'); // will try to find this element. If it finds it it will move on. If not it will throw an error

		await browser.close();
	});
});
