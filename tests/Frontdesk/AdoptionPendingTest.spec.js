const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { AdoptPending } from "../../POM_Frontdesk/AdoptionPending.js";

import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const AdoptPendingdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","AdoptionPending");

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

     test("TC003 - Adoption PendingModule(Request)", async ({}) => {
        const PendingTest = new AdoptPending(page);

 
         await PendingTest.Adoptionpending();
         console.log("Excel data:", AdoptPendingdata);
          const {PetName}=AdoptPendingdata[0]
         await PendingTest.searchAndClickView(PetName);
         
      
     });

     
    });