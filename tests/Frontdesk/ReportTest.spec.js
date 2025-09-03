const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { report } from "../../POM_Frontdesk/Report.js";
import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");

const reportdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Report");
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
     test("TC003 - ReportModule", async ({}) => {
        const reportTest = new report(page);
      
      const {Year,Month,Date} = reportdata[0];
               await reportTest.report(Year,Month,Date);
    });
     test("TC004 - End Date field in Report Module", async ({}) => {
        const reportTest = new report(page);
      
      const {Year,Month,Date} = reportdata[1];
       await reportTest.end_date(Year,Month,Date);

 const {Species,Stage,Search} = reportdata[0];
       await reportTest.Pet_species(Species,Stage,Search);
       
    });
    test("TC005 - Navigate to dashboard", async ({}) => {
        const reportTest = new report(page);
        await reportTest.dashboardclick();

    });
    

});