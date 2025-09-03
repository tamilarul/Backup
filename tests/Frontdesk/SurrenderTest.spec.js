

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { surrender } from "../../POM_Frontdesk/Surrender";
const Logindata = require('../../utils/Logindata.json');
const Surrenderdata=require('../../utils/Surrenderdata.json');

let page;
let context;

test.describe("Surrender Test", () => {

    test("TC001 - Login with valid credentials" ,async ({ browser }) => {
         context=await browser.newContext();
        page=await context.newPage();
        const loginTest = new LoginPage(page);
        
       const url=Logindata.url;
       await loginTest.navigateURL(url);

       const username=Logindata.username;
       const password=Logindata.password;
        await loginTest.credentials(username,password);

    });


    test("TC002 - Click New Entry Module", async ({}) => {
        const newEntryTest = new Newentry(page);
        await newEntryTest.Facility();
    });


    test("TC003 - enter the Customer", async ({}) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.surrenderPet(Surrenderdata.Customer);
    });

    test.skip("TC004 - Click cancel icon in  customer field", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.cancelcustomer();
    });
    

    test("TC005 - Enter the Pet name", async ({}) => {
        const surrenderTest = new surrender(page);
    await surrenderTest.pet(Surrenderdata.Petname);


    });

    test.skip("TC006 - Click the cancel icon in  pet field", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.cancelpet();
    });

    test.skip("TC007 - Click Checkbox", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.checkboxclick();
    });
    
    test("TC008 - Fill the  Surrenderform", async ({}) => {
        const surrenderTest = new surrender(page);

        const personality=Surrenderdata.personality1;
        const where=Surrenderdata.where;
        const hours=Surrenderdata.hours;
        const length=Surrenderdata.length1;
        const vet=Surrenderdata.vet1;
        const pastinjuires=Surrenderdata.past_injuries_surgeries;

        await surrenderTest.surrenderform(personality,where,hours,length,vet,pastinjuires);
    });
    
    test("TC009 - File upload ", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.uploadfile(Surrenderdata.filepath1,Surrenderdata.filepath2);


    });

    test.skip("TC010 - submit surrender form", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.submit();
    });
    test.skip("TC011 - Click history click", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.historyclick();
    });

    test("TC012 - Navigate to dashboard page ", async ({}) => {
        const surrenderTest = new surrender(page);
        await surrenderTest.dashboardclick();
    });
});
