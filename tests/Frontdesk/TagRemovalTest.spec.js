
const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { tagassign } from "../../POM_Frontdesk/TagAssign";
import { tagremove } from "../../POM_Frontdesk/TagRemoval";
import { readExcel } from '../../utils/logindata.js';



let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const TagRemovaldata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "TagRemoval");

test.describe.serial("New Entry Test", () => {

  test("TC001 - Login with valid credentials", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const loginTest = new LoginPage(page);

    const { Url, Username, Password } = logindata[0];
    await loginTest.navigateURL(Url);
    await loginTest.credentials(Username, Password);
  });

  test("TC002 - Click facility Module ", async ({ }) => {
    const facilityTest = new Newentry(page);
    await facilityTest.Facility();
  });

  test("TC003 -Click Tag assign module", async ({ }) => {
    const tagAssignTest = new tagassign(page);
    await tagAssignTest.tagassignmodule();
  });


  test("TC004 - Tag Remove module permanent", async ({ }) => {
    const tagremoveTest = new tagremove(page);
    const { PetName, PetID } = TagAssigndata[0];
    await tagremoveTest.tagremoval_per(PetName, PetID);
  });

  test.skip("TC005 - Click cancelicon in  permanent", async ({ }) => {
    const tagremoveTest = new tagremove(page);
    await tagremoveTest.cancelicon();

  });

  test("TC006 - Click submit button in pernamnent", async ({ }) => {
    const tagremoveTest = new tagremove(page);
    const reason1 = TagRemovedata.Reason;
    await tagremoveTest.submitpermanent(reason1);

  });

  test("TC007 - Click Tag Remove module in  temporary", async ({ }) => {
    const tagremoveTest = new tagremove(page);
    const { PetName, PetID } = TagAssigndata[0];
    await tagremoveTest.tagremoval_tem(PetName, PetID);
  });

  test.skip("TC008 - Click cancelicon in  temporary", async ({ }) => {
    const tagremoveTest = new tagremove(page);
    await tagremoveTest.cancelicon();

  });

  test("TC009 - Click submit button in temporary", async ({ }) => {
    const tagremoveTest = new tagremove(page);
    await tagremoveTest.submittemporary();

  });


});