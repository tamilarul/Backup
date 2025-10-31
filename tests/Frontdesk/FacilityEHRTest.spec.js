const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { EHR } from "../../POM_Frontdesk/FacilityEHR.js";

import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const EHRdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "EHR");

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

        test("TC003 -Facility EHR module", async ({ }) => {
            const EHRTest = new EHR(page);

            console.log("Excel data:", EHRdata);

            const { PetName, Temperature, PulseRate, Respiratory, Mucous, Capillary, PulseQuality, GumColour, HeartRate, PainResponse, Weight } = EHRdata[0];
            await EHRTest.Testspecies();
            await EHRTest.searchAndClickView(PetName);
            await EHRTest.EHR(Temperature, PulseRate, Respiratory, Mucous, Capillary, PulseQuality, GumColour, HeartRate, PainResponse, Weight);

        });
        test.skip("TC004 - Cancel EHR module", async ({ }) => {
            const EHRTest = new EHR(page);
            await EHRTest.cancelEHR();


        });
        test("TC005 - Submit EHR module", async ({ }) => {
            const EHRTest = new EHR(page);
            await EHRTest.submitEHR();


        });
    });