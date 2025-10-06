const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { awcOP } from "../../POM_Frontdesk/AWCOP.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const AWCOPdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "AWCOP");

test.describe.serial("SC001", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {

        context = await browser.newContext();
        page = await context.newPage();

        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];
        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });


    test("TC002 - OP(ALL TAB)", async ({ }) => {
        const AWCOPTest = new awcOP(page);
        const { PetName, Status } = AWCOPdata[0];
        await AWCOPTest.awcop(PetName, Status);

    });
    test("TC003 - pending", async ({ }) => {
        const AWCOPTest = new awcOP(page);
        const { CusName, Pendingappt } = AWCOPdata[0];
        await AWCOPTest.PendingtabView(CusName, Pendingappt)

    });
    test("TC004 - ongoing", async ({ }) => {
        const AWCOPTest = new awcOP(page);
        const { Ongoingappt } = AWCOPdata[0];
        await AWCOPTest.Ongoingtab(Ongoingappt);

    });
    test.skip("TC005 - wrap up", async ({ }) => {
        const AWCOPTest = new awcOP(page);
        const { wrapappt } = AWCOPdata[0];
        await AWCOPTest.wrap_uptab(wrapappt)

    });


    test("TC006 - completed", async ({ }) => {
        const AWCOPTest = new awcOP(page);
        const { CompletedApptID } = AWCOPdata[0];
        await AWCOPTest.completedtab(CompletedApptID);

    });
    test("TC007 - cancelled", async ({ }) => {
        const AWCOPTest = new awcOP(page);
        const { CancelledApptID } = AWCOPdata[0];
        await AWCOPTest.cancelledtab(CancelledApptID);

    });

});