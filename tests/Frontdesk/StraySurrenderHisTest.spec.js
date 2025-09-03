const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { SSH} from "../../POM_Frontdesk/StaySurHistory.js";
import { readExcel } from '../../utils/logindata';

let page;
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");

const SSHdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","SSH");

test.describe("SC001", () => {
    
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

     test("TC003 - SSH Module", async ({}) => {
        const SSHTest = new SSH(page);
      
      const {Search} = SSHdata[0];
      await SSHTest.SSH_history(Search);
      
      //const {PetID} = SSHdata[0];
      //await SSHTest.clickPetAction(PetID); 



               
    });

    test("TC004 - surrender Tab", async ({}) => {
        const SSHTest = new SSH(page);
      const {PetID} = SSHdata[0];
      await SSHTest.surrender(PetID);
      
      //const {PetID} = SSHdata[0];
      //await SSHTest.clickPetAction(PetID); 



               
    });




});