import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    async visit(){
        await page.goto("http://zero.webappsecurity.com/login.html")
    }

    async isLoginFormDisplayed(){
        await page.waitForSelector('#login_form');
        await page.waitForSelector('#user_login');
        await page.waitForSelector('#user_password');
        await page.waitForSelector('#user_remember_me');
    }

    async login(username, password){
        await page.waitForSelector('#login_form');
        await page.type('#user_login', username);
        await page.type('#user_password', password);
        await page.click('.btn.btn-primary');
    }
}