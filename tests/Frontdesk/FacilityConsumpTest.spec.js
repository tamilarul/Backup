const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { consum } from "../../POM_Frontdesk/FacilityConsumption.js";

import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const consumdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Consumption");

test.describe.serial
("SC001", () => {
    
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

     test("TC003 - Ready for Adoption module", async ({}) => {
        const consumTest = new consum(page);

         console.log("Excel data:", consumdata);
       
          const {Room,PetName,Searchconsum,Batch,Quantity,Additional} = consumdata[0];
            await consumTest.Testspecies(Room,PetName);
         await consumTest.Consumption(Searchconsum);
         await consumTest.batchNo(Batch);
         await consumTest.quantityNo(Quantity);
         await consumTest.additionalComments(Additional);
     });

      test.skip("TC004 - Cancel", async ({}) => {
        const consumTest = new consum(page);
         await consumTest.cancel();

    });
    test ("TC005 - Add the consumption", async ({}) => {
        const consumTest = new consum(page);
        await consumTest.addBtn();

    });
    test("TC006 - Edit the consumption", async ({}) => {
        const consumTest = new consum(page);
        await consumTest.editConsumption();
        await consumTest.addBtn();


    });
    test.skip("TC007 - Delete the consumption", async ({}) => {
        const consumTest = new consum(page);
        await consumTest.deleteConsumption();

    });
    test("TC008 - save the consumption", async ({}) => {
        const consumTest = new consum(page);
        await consumTest.saveConsumption();
    });



    
});