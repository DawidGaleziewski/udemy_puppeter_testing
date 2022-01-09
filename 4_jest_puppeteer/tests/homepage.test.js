import HomePage from '../pages/HomePage';
import TopBar from "../pages/components/TopBar";
import LoginPage from '../pages/LoginPage';

describe('Example', () => {
    let homepage;
    let topbar;
    let loginpage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage(); // initialize so we have access to those utils in all tests
        topbar = new TopBar();
        loginpage = new LoginPage();
    });

    it('homepage should work', async () => {
        await homepage.visit();
    });

    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it('try to login with wrong password', async() => {
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('test1', 'test2');
    })

})