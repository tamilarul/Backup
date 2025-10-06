const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { vaccine } from "../../POM_Frontdesk/FacilityVaccine.js";
import { readExcel } from '../../utils/logindata.js';
import { Treatment } from "../../POM_Frontdesk/FacilityTreatment.js";

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const Treatmentdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Treatment");

test.describe.serial("SC001", () => {
    
    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
       const {Url,Username,Password } = logindata[0];

         
       await loginTest.navigateURL(Url);
        await loginTest.credentials(Username,Password);
    });

    test("TC002 - Navigate to facility", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });

test("TC003 -Facility treatment module", async ({}) => {
    
        const TreatmentTest = new Treatment(page);
    
         console.log("Excel data:", Treatmentdata);
         const{Room,PetName,TreatmentName,TreatmentDrop,Veterinarian}=Treatmentdata[0];

         await TreatmentTest.Testspecies(Room,PetName);
         await TreatmentTest.Treatmentmodule(TreatmentName,TreatmentDrop);
         await TreatmentTest.treatmentVet(Veterinarian);
         await TreatmentTest.treatment_Date();

          const {Month,Monthname,MonthDate} =Treatmentdata[0]
         await TreatmentTest.treatNextDate();

         //await TreatmentTest.treatCancel_Submit();



});
});