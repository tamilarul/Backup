const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { RoomOccupancy } from "../../POM_Frontdesk/RoomOccupancy.js";

import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const RoomOccupancydata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","RoomOccupancy");

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
        const RoomOccupancyTest = new RoomOccupancy(page);

 console.log("Excel data:", RoomOccupancydata);
         const{Species}=RoomOccupancydata[0];
         await RoomOccupancyTest.RoomOccupancytab(Species);
      
     });
    });