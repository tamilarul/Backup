const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { FacilityDashboard } from "../../POM_Frontdesk/loop.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const loopdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "loop");

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
  test("TC003 - home page of facility(Testspecies)", async ({ }) => {
    const loopTest = new FacilityDashboard(page);
    await loopTest.Testspecies();


    const petName = 'Dove';


    // Search and click View
    await loopTest.searchAndClickView(petName);

  });
});
