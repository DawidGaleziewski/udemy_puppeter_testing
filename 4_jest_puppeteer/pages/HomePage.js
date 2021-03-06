import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    async visit(){
        await page.goto('http://zero.webappsecurity.com/');
        await page.waitForSelector('#nav');
    }

    async isNavbarDisplayed(){
        await page.waitForSelector('#pages-nav');
        await page.waitForSelector('#homeMenu');
        await page.waitForSelector('#onlineBankingMenu');
    }

    async clickHomepageLink(){
        await page.click('#homeMenu');
    }

    async clickOnlineBankingLink(){
        await page.click('#onlineBankingMenu');
    }

    async clickHomepageLink(){
        await page.click('#homeMenu');
    }
}