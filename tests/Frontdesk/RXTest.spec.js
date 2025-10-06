const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { Rx} from "../../POM_Frontdesk/RX.js";

import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const RXdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","RX");

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
        const RxTest = new Rx(page);

         console.log("Excel data:", RXdata);
         await RxTest.Testspecies();

         const{Room,PetName}=RXdata[4];
         await RxTest.species(Room,PetName);

         const{RxTab}=RXdata[1];
         await RxTest.Rx(RxTab);
});
        

        
         
      
     });
    