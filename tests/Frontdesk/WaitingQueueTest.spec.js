const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { waiting } from "../../POM_Frontdesk/WaitingQueue.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");

test.describe.serial("SC001", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {

        context = await browser.newContext({viewport :{height:800, width:1200}});
        page = await context.newPage();

        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];

        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });
    test("TC002 - Invoice module ", async ({ }) => {
        const waitingTest = new waiting(page);
        await waitingTest.waitingQueue_module();
    });
});