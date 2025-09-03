
const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { checkin } from "../../POM_Frontdesk/Checkin";
const Logindata = require('../../utils/Logindata.json');
const Checkindata = require('../../utils/Checkindata.json');


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

    test("TC002 - Navigate to facility", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });

    test("TC003 - Navigate Checkin module", async ({}) => {
        const checkinTest = new checkin(page);
        await checkinTest.checkin(Checkindata.PetName,Checkindata.PetId);
    });

    test.skip("TC004 - Click cancelicon", async ({}) => {
        const checkinTest = new checkin(page);
        await checkinTest.cancel();
    });

//To choose location and click checkin button
    test("TC005 - Selectlocation", async ({}) => {
        const checkinTest = new checkin(page);

        
        const location2=Checkindata.location;//TestKennel

        await checkinTest.location(location2);
    });

    test("TC006 - To Select room", async ({}) => {
        const checkinTest = new checkin(page);

        const roomname1=Checkindata.roomname;//TestKennelTwo
        await checkinTest.Room(roomname1);
    });

    test.skip("TC007 - To click cancel button", async ({}) => {
        const checkinTest = new checkin(page);
        await checkinTest.cancelbutton();
    });

    test.skip("TC008 - Navigate to dashboard", async ({}) => {
        const checkinTest = new checkin(page);  
        await checkinTest.dashboardclick();
    }); 



    test("TC009 - Click submit button", async ({}) => {
        const checkinTest = new checkin(page);
        await checkinTest.submitbutton();
    });

    
});