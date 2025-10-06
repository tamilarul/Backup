const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { MicrochipHis } from "../../POM_Frontdesk/MicrochipHis.js";

import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const Microchipdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "MicrochipHis");

test.describe.serial("SC001", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {

        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];
        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });


    test("TC002 - Navigate to facility", async ({ }) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });


    test("TC003 - Microchip Module", async ({ }) => {
        const MicrochipTest = new MicrochipHis(page);

        console.log("Excel data:", Microchipdata);
        const { Tab } = Microchipdata[1];
        await MicrochipTest.Microchip(Tab);

    });

    test.skip("TC004 - New Entry Navigate", async ({ }) => {
        const MicrochipTest = new MicrochipHis(page);
        await MicrochipTest.newentry();
    });

    test("TC005 - Facility Navigate", async ({ }) => {
        const MicrochipTest = new MicrochipHis(page);
        const { CusName } = Microchipdata[1];
        await MicrochipTest.navigateback(CusName);
    });

});