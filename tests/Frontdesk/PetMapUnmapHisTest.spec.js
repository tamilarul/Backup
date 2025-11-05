const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { MapUnmapHis } from "../../POM_Frontdesk/PetMapUnmapHis.js";

import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const mapUnmapHisdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","PetmapUnmapHis");

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


     test("TC003 - Pet Map and Unmap Module", async ({}) => {
        const  mapUnmapTest = new MapUnmapHis(page);

          console.log("Excel data:", mapUnmapHisdata);
         const{PetName}=mapUnmapHisdata[0];
         await mapUnmapTest.PetMapUnmap();
         await mapUnmapTest.searchAndClickView(PetName);
         await mapUnmapTest.download();
      
     });

     test.skip("TC004 - New Entry Navigate", async ({}) => {
        const  mapUnmapTest = new MapUnmapHis(page);
        await mapUnmapTest.newentry();
     });

     test("TC005 - Facility Navigate", async ({}) => {
        const  mapUnmapTest = new MapUnmapHis(page);
        await mapUnmapTest.navigateback();
     });

    });