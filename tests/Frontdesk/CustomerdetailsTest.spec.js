const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";

import { customer } from "../../POM_Frontdesk/Customerdetals.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const customerdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Customerdetails");

test.describe.serial("SC001", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {

        context = await browser.newContext({ viewport: { height: 800, width: 1200 } });
        page = await context.newPage();

        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];

        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });
    test("TC002- Customer details module ", async ({ }) => {
        const customerTest = new customer(page);
        const { CusName, CusID } = customerdata[0]
        await customerTest.customer(CusName, CusID);
        await customerTest.edit();
        const { FirstName, LastName } = customerdata[0]
        await customerTest.customerName(FirstName, LastName);

        //const { Gender } = customerdata[0]
        //await customerTest.selectGender(Gender);
        
        const { Language } = customerdata[0]
        await customerTest.click_On_Language(Language);
        const { Mobile, Email, Martial } = customerdata[0]
        await customerTest.Mobile_and_Email(Mobile, Email);
        const { EmergencyNo, Address, EmirateID, Emirate, TRN } = customerdata[0]
        await customerTest.selectMaritalStatus(Martial);
        await customerTest.selectEmergency_Address_Emirates_TrnNo(EmergencyNo, Address, EmirateID, Emirate, TRN);
        const { Filepath } = customerdata[0];
        await customerTest.uploadProfile(Filepath);
        await customerTest.upload_IdProof(Filepath);
        await customerTest.uploadOtherDocuments_photos(Filepath);



    });
    test("TC003- cancel profile ", async ({ }) => {
        const customerTest = new customer(page);

        await customerTest.cancelprofile();

    });
    test.skip("TC004- submit profile ", async ({ }) => {
        const customerTest = new customer(page);
        await customerTest.submitprofile();

    });
});
