

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { surrender } from "../../POM_Frontdesk/Surrender";

import { readExcel } from '../../utils/logindata.js';


let page;
let context;
const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const surrenderdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Surrender");

test.describe.serial("Surrender Test", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];
        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    

});


test("TC002 - Click New Entry Module", async ({ }) => {
    const newEntryTest = new Newentry(page);
    await newEntryTest.Facility();
    await newEntryTest.Newentry();
});


test("TC003 - enter the Customer", async ({ }) => {
    const surrenderTest = new surrender(page);
    const { CusName,CusID } = surrenderdata[0];
    await surrenderTest.surrenderPet(CusName,CusID);
});

test.skip("TC004 - Click cancel icon in  customer field", async ({ }) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.cancelcustomer();
});


test("TC005 - Enter the Pet name", async ({ }) => {
    const surrenderTest = new surrender(page);
    const {PetName}=surrenderdata[0];
    await surrenderTest.pet(PetName);


});

test.skip("TC006 - Click the cancel icon in  pet field", async ({ }) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.cancelpet();
});

test.skip("TC007 - Click Checkbox", async ({ }) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.checkboxclick();
});

test("TC008 - Fill the  Surrenderform", async ({ }) => {
    const surrenderTest = new surrender(page);

    const {Personality, Where, Hours, Length, Vet, Pastinjuires}=surrenderdata[0];

    await surrenderTest.surrenderform(Personality, Where, Hours, Length, Vet, Pastinjuires);
});

test("TC009 - File upload ", async ({ }) => {
    const surrenderTest = new surrender(page);
      const {filepath1,filepath2}=surrenderdata[0];
    await surrenderTest.uploadfile(filepath1, filepath2);
});

test.skip("TC010 - submit surrender form", async ({ }) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.submit();
});
test.skip("TC011 - Click history click", async ({ }) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.historyclick();
});

test("TC012 - Navigate to dashboard page ", async ({ }) => {
    const surrenderTest = new surrender(page);
    await surrenderTest.dashboardclick();
});
});
