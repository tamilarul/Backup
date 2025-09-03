
const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { tagassign} from "../../POM_Frontdesk/TagAssign";
import { tagremove } from "../../POM_Frontdesk/TagRemoval";
const Logindata = require('../../utils/Logindata.json');
const TagRemovedata=require('../../utils/TagRemovedata.json');



let page
let context;
test.describe("New Entry Test", () => {
    
    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
        
        const url=Logindata.url;
       await loginTest.navigateURL(url);

       const username=Logindata.username;
       const password=Logindata.password;
        await loginTest.credentials(username,password);
    });

    test("TC002 - Click facility Module ", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });

     test("TC003 -Click Tag assign module", async ({}) => {
           const tagAssignTest = new tagassign(page);
           await tagAssignTest.tagassignmodule();
});


     test("TC004 - Tag Remove module permanent", async ({}) => {
           const tagremoveTest = new tagremove(page);

           const petname1=TagRemovedata.Petname;
           const ID=TagRemovedata.petid;
      
          
           await  tagremoveTest.tagremoval_per(petname1,ID);
});

  test.skip("TC005 - Click cancelicon in  permanent", async ({}) => {
    const tagremoveTest = new tagremove(page);
    await tagremoveTest.cancelicon();

  });

  test("TC006 - Click submit button in pernamnent", async ({}) => {
    const tagremoveTest = new tagremove(page);
    const reason1=TagRemovedata.Reason;
    await tagremoveTest.submitpermanent(reason1);
   
  });

   test("TC007 - Click Tag Remove module in  temporary", async ({}) => {
           const tagremoveTest = new tagremove(page);

           const petname1=TagRemovedata.Petname_tem;
           const ID=TagRemovedata.petid_tem;
           
           await tagremoveTest.tagremoval_tem(petname1,ID);
});

 test.skip("TC008 - Click cancelicon in  temporary", async ({}) => {
    const tagremoveTest = new tagremove(page);
    await tagremoveTest.cancelicon();

  });

  test("TC009 - Click submit button in temporary", async ({}) => {
    const tagremoveTest = new tagremove(page);
    await tagremoveTest.submittemporary();
   
  });


});