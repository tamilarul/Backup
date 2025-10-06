const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { OP } from "../../POM_Frontdesk/OP.js";

import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const OPdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "OP");

test.describe.serial("SC001", () => {

  test("TC001 - Login with valid credentials", async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();

    const loginTest = new LoginPage(page);
    const { Url, Username, Password } = logindata[0];
    await loginTest.navigateURL(Url);
    await loginTest.credentials(Username, Password);
  });


  test("TC002 - OP", async ({ }) => {
    const OPTest = new OP(page);
    const { PetName, Status } = OPdata[0];
    await OPTest.op(PetName, Status);

  });
  test("TC003 - pending", async ({ }) => {
    const OPTest = new OP(page);
    const { CusName, Pendingappt } = OPdata[0];
    await OPTest.PendingtabView(CusName, Pendingappt)

  });
  test("TC003 - ongoing", async ({ }) => {
    const OPTest = new OP(page);
    const { Ongoingappt } = OPdata[0];
    await OPTest.Ongoingtab(Ongoingappt);

  });
  test("TC004 - wrap up", async ({ }) => {
    const OPTest = new OP(page);
    const { wrapappt } = OPdata[0];
    await OPTest.wrap_uptab(wrapappt)

  });
  test.skip("TC004 - invoice pending", async ({ }) => {
    const OPTest = new OP(page);
    const { invoiceappt } = OPdata[0];
    await OPTest.Invoicependingtab(invoiceappt)

  });
  test.skip("TC005 - Payment pending", async ({ }) => {
    const OPTest = new OP(page);
    const { paymentaapt } = OPdata[0];
    await OPTest.Paymentpendingtab(paymentaapt);

  });


  test("TC003 - completed", async ({ }) => {
    const OPTest = new OP(page);
    const { CompletedApptID } = OPdata[0];
    await OPTest.completedtab(CompletedApptID);

  });
  test("TC004 - cancelled", async ({ }) => {
    const OPTest = new OP(page);
    const { CancelledApptID } = OPdata[0];
    await OPTest.cancelledtab(CancelledApptID);

  });

});