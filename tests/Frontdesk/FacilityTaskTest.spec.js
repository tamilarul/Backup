const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { task } from "../../POM_Frontdesk/FacilityTask.js";
import { readExcel } from '../../utils/logindata.js';

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const taskdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Task");

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
test("TC003 -Facility Vaccine module", async ({}) => {
    
        const taskTest = new task(page);
        

         console.log("Excel data:", taskdata);
       
          const {Room,PetName} = taskdata[0];
            await taskTest.Testspecies(Room,PetName);
            const {TaskName,Project,Description} = taskdata[0];
            await taskTest.Taskmodule(TaskName,Project,"00:10",Description);
            

});
test("TC004 -Cancel Task Moudle module", async ({}) => {
    
        const taskTest = new task(page);
        await taskTest.CancelRequest();

});

test.skip("TC005 -Submit Task Moudle module", async ({}) => {
        const taskTest = new task(page);
        await taskTest.submitrequest();

});
test("TC006 - View the task in tab", async ({}) => {
        const taskTest = new task(page);
    
        const {Tab} = taskdata[0];
        await taskTest.Tasktab(Tab);


});
});