const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { petmap } from "../../POM_Frontdesk/PetMap.js";
//const Petmapdata=require('../../utils/Petmapdata.json');
import { readExcel } from '../../utils/logindata';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const mapdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","PetMap");

test.describe.serial("SC001", () => {
    
    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
       const {Url,Username,Password } = logindata[0];

         
       await loginTest.navigateURL(Url);
        await loginTest.credentials(Username,Password);
    });

    test("TC002 - Navigate to facilityfacility", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });
     test("TC003 - Pet Map Module", async ({}) => {
        const petmapTest = new petmap(page);
      
               const {Cusname,CusID } = mapdata[0];

        await petmapTest.petmap_module(Cusname,CusID)
    });

     test.skip("TC004 - click cancel icon in customer field ", async ({}) => {
        const petmapTest = new petmap(page);
        await petmapTest.cancel_icon_cus();

     });

     test("TC005 - pet search ", async ({}) => {
        const petmapTest = new petmap(page);
         const {Petname,PetID } = mapdata[0];
        await petmapTest.pet_map(Petname,PetID);


     });

      test.skip("TC006 - click cancel icon in pet field ", async ({}) => {
        const petmapTest = new petmap(page);
        await petmapTest.cancelicon_pet();
        
     });

       test("TC007 - Click Submit ", async ({}) => {
        const petmapTest = new petmap(page);
        await petmapTest.submit_Petmap();
        
     });

      test("TC008 - pet search in Unmap ", async ({}) => {
        const petmapTest = new petmap(page);
       const {Petname,PetID } = mapdata[0];
        await petmapTest.pet_unmap(Petname,PetID);
      });

      test.skip("TC009 - click cancel icon in pet field(Unmap) ", async ({}) => {
        const petmapTest = new petmap(page);
        await petmapTest.cancelicon_pet();
        
     });

     test("TC010 - Click Submit ", async ({}) => {
        const petmapTest = new petmap(page);
         const {Reason} = mapdata[0];
        await petmapTest.submitunmap(Reason);
        
     });





});