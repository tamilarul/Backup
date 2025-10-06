const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { invoice } from "../../POM_Frontdesk/Invoice.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const invoicedata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Invoice");

test.describe.serial("SC001", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {

        context = await browser.newContext({viewport :{height:800, width:1200}});
        page = await context.newPage();

        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];

        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });
    test("TC003 - Invoice module ", async ({ }) => {
        const invoiceTest = new invoice(page);
        await invoiceTest.invoice_module();
    });

    test.skip("TC004 - invoice pending and  search  module ", async ({ }) => {
        const invoiceTest = new invoice(page);
        const { Tab } = invoicedata[0];
        const { Search } = invoicedata[2];
        await invoiceTest.invoice(Tab, Search);

    });

    test.skip("TC005 - view and create invoice", async ({ }) => {
        const invoiceTest = new invoice(page);
        const { PetName } = invoicedata[2];
        await invoiceTest.viewicon(PetName);
    });

    test.skip("TC006 -  create invoice button", async ({ }) => {
        const invoiceTest = new invoice(page);
        const { PetName } = invoicedata[2];
        await invoiceTest.createicon(PetName);

    });

    test.skip("TC007 -  create invoice  and pay", async ({ }) => {
        const invoiceTest = new invoice(page);
        await invoiceTest.createinvoice();
        await invoiceTest.clickPaybtn();
        const { PaymentMethod } = invoicedata[0];
        await invoiceTest.paymentmethod(PaymentMethod);

    });
    test.skip("TC008 - cancel payment", async ({ }) => {
        const invoiceTest = new invoice(page);
        await invoiceTest.cancelpayment();


    });
    test.skip("TC009 -  Register payment ,back and click dashboard", async ({ }) => {
        const invoiceTest = new invoice(page);
        await invoiceTest.registerpayment();
        await invoiceTest.back();


    });
    test("TC010 - Payment Pending ", async ({ }) => {
        const invoiceTest = new invoice(page);
        const { Tab } = invoicedata[0];
        const{OrderID}=invoicedata[0];
        await invoiceTest.payment_pending(Tab,OrderID );
        await invoiceTest.click_payment_icon(OrderID);
    });
    test("TC011 -  pay", async ({ }) => {
        const invoiceTest = new invoice(page);
        await invoiceTest.clickPaybtn();

        const { PaymentMethod} = invoicedata[0];
        await invoiceTest.paymentmethod(PaymentMethod);
        await invoiceTest.registerpayment();
        await invoiceTest.back();

    });
     test("TC012 -  History", async ({ }) => {
        const invoiceTest = new invoice(page);
        const{HisOrderID}=invoicedata[0];
        await invoiceTest.history(HisOrderID);
});
});