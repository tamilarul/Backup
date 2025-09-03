
const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { tagassign} from "../../POM_Frontdesk/TagAssign.js";
const Logindata = require('../../utils/Logindata.json');
const TagAssigndata=require('../../utils/TagAssigndata.json');


let page;
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

    test("TC002 - Click facility Module", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });

    test("TC003 -Click Tag assign module", async ({}) => {
        const tagAssignTest = new tagassign(page);
        await tagAssignTest.tagassignmodule();
        const petname1=TagAssigndata.petname;
    
        const ID=TagAssigndata.petid;
        await tagAssignTest.petsearch_permanent(petname1,ID);
    });
    
    test.skip("TC004 - Click cancel icon in permanent", async ({}) => {
        const tagAssignTest = new tagassign(page);
        await tagAssignTest.cancelicon();

    });

    test("TC005 - Assign an permanent tag", async ({}) => {
        const tagAssignTest = new tagassign(page);

        const per_tag=TagAssigndata.Permaent_Tag;
        await tagAssignTest.permanenttag(per_tag);
        await tagAssignTest.assignbutton_perm();
    });

    test("TC006 - Click temporary tag", async ({}) => {
        const tagAssignTest = new tagassign(page);
          const petname_tem=TagAssigndata.petnametempoary;
                const ID=TagAssigndata.petidtempoary;
        await tagAssignTest.petsearch_temp(petname,ID);
    });

    test.skip("TC007 - Click cancel icon in temporary", async ({}) => {
        const tagAssignTest = new tagassign(page);
        await tagAssignTest.cancelicon_tem();
    });

    test("TC008 - Assign temporary tag", async ({}) => {
        const tagAssignTest = new tagassign(page);
        const Tag_Tempoary=TagAssigndata.Temporary_Tag;
        await tagAssignTest.assigntag_temp(Tag_Tempoary);

    });


    });