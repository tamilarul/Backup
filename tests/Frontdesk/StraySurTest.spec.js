const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { Straysur } from "../../POM_Frontdesk/StraySurHist.js";

import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const Straysurdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","StraySurHis");

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

     test("TC003 - Room Occupancy Module", async ({}) => {
        const StraysurTest = new Straysur(page);

 console.log("Excel data:", Straysurdata);
         const{Year,Month,StartDate,EndDate}=Straysurdata[0];
         await StraysurTest.StraySurrender(Year,Month,StartDate,EndDate);
      
     });
     test.skip("TC004 - Click cancel in date", async ({}) => {
        const StraysurTest = new Straysur(page);
        await StraysurTest.canceldate();
     });
      test("TC005 - Stray", async ({}) => {
        const StraysurTest = new Straysur(page);
        const{Tab,PetID,CusName}=Straysurdata[0];
        await StraysurTest.straycol(Tab,PetID,CusName);


      });
     

    });