const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { assessment } from "../../POM_Frontdesk/Assessment.js";
import { readExcel } from '../../utils/logindata.js';
import { skip } from "node:test";

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const assessdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Assessment");

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
    test("TC003 - home page of facility(Testspecies)", async ({}) => {
        const assessTest = new assessment(page);
        const {PetName} = assessdata[0];
          await assessTest.Testspecies();
          await assessTest.searchAndClickView(PetName);
    });

    //Fill the assessment details
    test.skip("TC004 -Facility assessment module", async ({}) => {
        const assessTest = new assessment(page);
        //to print data in excel
         console.log("Excel data:", assessdata);
        const {Health,Behaviour,HoldOn,Sterlized,NextStep} = assessdata[0];
        await assessTest.Assess(Health,Behaviour,HoldOn,Sterlized,NextStep);
});
     // cancel assessment
    test.skip("TC005 -Cancel assessment module", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.Cancel();
});
     //save assessmet
    test.skip("TC006 -Save assessment module", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.save();
});
    //to checkin
test("TC007 - Checkin", async ({}) => {
        const assessTest = new assessment(page);
        const {Roomscheck,CheckinRoominside} = assessdata[0];  //0->TestRoom, 1->Testcage, 2->Testkennel
        await assessTest.checkinmodule(Roomscheck,CheckinRoominside);
});
   // to cancel checkin
test.skip("TC008 - Cancel checkin room", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.cancel_room();
});
  //to submit checkin
test("TC009 - submit room", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.submit_room();
});

// To swtich room
test("TC010 - switch room", async ({}) => {
        const assessTest = new assessment(page);
        const {SwitchRoom} = assessdata[0];           //0->TestRoomTwo, 1->TestcageTwo, 2->TestkennelTwo
        await assessTest.switchroom(SwitchRoom);
});
// to cancel switch
test("TC011 - Cancel switch room", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.cancel_room();
});

// to submit switch room
test.skip("TC012 - submit switch room", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.submit_room();
});

// To view the room history
test("TC013 - room history", async ({}) => {
        const assessTest = new assessment(page);
       const {Historybutton,Cancelicon} = assessdata[0]; 
        await assessTest.roomhistoryview(Historybutton,Cancelicon);
});

// To view profile
test("TC014 - Profile View", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.profile();
});

 // to select adoption history
test("TC015 - Adoption Ready", async ({}) => {
        const assessTest = new assessment(page);
        const {Adoption} = assessdata[0];
        await assessTest.adoptionready(Adoption);
});

// to select trial history
test("TC016 - trial Ready", async ({}) => {
        const assessTest = new assessment(page);
        const {Trial} = assessdata[0];
        await assessTest.trialready(Trial);
});

// to select foster history
test("TC017 - foster Ready", async ({}) => {
        const assessTest = new assessment(page);
        const {Foster} = assessdata[0];
        await assessTest.fosterready(Foster);


});
// to cancel profile 
test("TC018 - Pet Profile Cancel", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.profile_cancel();
});
// to submit profile
test.skip("TC019 - Pet Profile submit", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.profile_submit();
});

// overall history
test("TC020 - Overall History", async ({}) => {
        const assessTest = new assessment(page);
        await assessTest.overallhistory();
});
// 
test("TC021 - Add Notes", async ({}) => {
        const assessTest = new assessment(page);
         const {Note,Filepath} = assessdata[0];
        await assessTest.Addnotes(Note,Filepath);
});

test("TC022 - Treatment module", async ({}) => {
        const assessTest = new assessment(page);
         const {Room} = assessdata[4];
        await assessTest.Treatment_tab(Room);
});





});