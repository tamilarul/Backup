

const { test, expect } = require('@playwright/test');
import { LoginPage } from '../../POM_Frontdesk/LoginPage';
const Logindata = require('../../utils/Logindata.json');
import { readExcel } from '../../utils/logindata';

const data = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");

let page;
let context;
test.describe.serial('Login Test Suite', () => {

    test("TC001 - Login Test", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
        console.log("Excel data:", data);
        const { Url} = data[0];
        await loginTest.navigateURL(Url);
    });

    test("TC002 - Login Test", async () => {
        const loginTest = new LoginPage(page);
        const { Username, Password } = data[0];
        await loginTest.credentials(Username, Password);

    });

});
