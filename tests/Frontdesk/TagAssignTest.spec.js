
const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { tagassign } from "../../POM_Frontdesk/TagAssign.js";

import { readExcel } from '../../utils/logindata.js';

let page;
let context;
const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const TagAssigndata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "TagAssign");

test.describe.serial("New Entry Test", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);

        const { Url, Username, Password } = logindata[0];
        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);

    });

    test("TC002 - Click facility Module", async ({ }) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });

    test("TC003 -Click Tag assign module", async ({ }) => {
        const tagAssignTest = new tagassign(page);
        await tagAssignTest.tagassignmodule();
        const { PetName, PetID } = TagAssigndata[0];
        await tagAssignTest.petsearch_permanent(PetName, PetID);
    });

    test.skip("TC004 - Click cancel icon in permanent", async ({ }) => {
        const tagAssignTest = new tagassign(page);
        await tagAssignTest.cancelicon();

    });

    test("TC005 - Assign an permanent tag", async ({ }) => {
        const tagAssignTest = new tagassign(page);

        const { PerTag } = TagAssigndata[0];
        await tagAssignTest.permanenttag(PerTag);
        await tagAssignTest.assignbutton_perm();
    });

    test("TC006 - Click temporary tag", async ({ }) => {
        const tagAssignTest = new tagassign(page);
        const { PetName, PetID } = TagAssigndata[0];
        await tagAssignTest.petsearch_temp(PetName, PetID);
    });

    test.skip("TC007 - Click cancel icon in temporary", async ({ }) => {
        const tagAssignTest = new tagassign(page);
        await tagAssignTest.cancelicon_tem();
    });

    test("TC008 - Assign temporary tag", async ({ }) => {
        const tagAssignTest = new tagassign(page);
        const { TemTag } = TagAssigndata[0];
        await tagAssignTest.assigntag_temp(TemTag);

    });


});