const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { ReadyforAdoption } from "../../POM_Frontdesk/ReadyForAdoption.js";

import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const ReadyForAdoptiondata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "ReadyforAdoption");

test.describe.serial
   ("SC001", () => {

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

      test("TC003 - Ready for Adoption module", async ({ }) => {
         const ReadyForAdoptionTest = new ReadyforAdoption(page);

         console.log("Excel data:", ReadyForAdoptiondata);
         const { Tab } = ReadyForAdoptiondata[0];
         await ReadyForAdoptionTest.ReadyForAdoption(Tab);
         await ReadyForAdoptionTest.ApplyFilter();


      });

      test.skip("TC004 - To View the pet", async ({ }) => {
         const ReadyForAdoptionTest = new ReadyforAdoption(page);
         const { PetNameView } = ReadyForAdoptiondata[2];
         await ReadyForAdoptionTest.viewbtn(PetNameView);

      });

      test("TC005 - To Adopt the pet", async ({ }) => {
         const ReadyForAdoptionTest = new ReadyforAdoption(page);
         const { PetNameAdopt, CustName, CusNo, Form } = ReadyForAdoptiondata[0];
         await ReadyForAdoptionTest.adoptbtn(PetNameAdopt, CustName, CusNo, Form);
      });

      test("TC006 - To cancel", async ({ }) => {
         const ReadyForAdoptionTest = new ReadyforAdoption(page);
         const { Form } = ReadyForAdoptiondata[0];
         await ReadyForAdoptionTest.cancelform(Form);
      });

      test.skip("TC005 - To submit the pet", async ({ }) => {
         const ReadyForAdoptionTest = new ReadyforAdoption(page);
         const { Form } = ReadyForAdoptiondata[0];
         await ReadyForAdoptionTest.submitform(Form);

      });


   })