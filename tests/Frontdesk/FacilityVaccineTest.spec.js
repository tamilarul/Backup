const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { vaccine } from "../../POM_Frontdesk/FacilityVaccine.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const Vaccinedata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Vaccine");

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
        test("TC003 -Facility Vaccine module", async ({ }) => {

            const vaccineTest = new vaccine(page);


            console.log("Excel data:", Vaccinedata);

            const { Room, PetName, VaccineName, Vaccinedropdown, Batch, Manufacturer, Veterinarian } = Vaccinedata[0];
            await vaccineTest.Testspecies(Room, PetName);
            await vaccineTest.vaccinetab();
            await vaccineTest.vaccine(VaccineName, Vaccinedropdown);
            await vaccineTest.vaccineBatch_VaccineManufacture(Batch, Manufacturer);
            await vaccineTest.expiryDate();
            await vaccineTest.selectVeterinarian(Veterinarian);

            const { Month, Monthname, MonthDate } = Vaccinedata[0];
            await vaccineTest.vaccinedate();

            await vaccineTest.nextDate(Month, Monthname, MonthDate);



        });
        test.skip("TC004 - Cancel vaccine module", async ({ }) => {
            const vaccineTest = new vaccine(page);
            await vaccineTest.cancelvacine();
        });

        test("TC005 - Submit vaccine module", async ({ }) => {
            const vaccineTest = new vaccine(page);
            await vaccineTest.submitvaccine();

        });


    });