
const { test, expect } = require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { checkin } from "../../POM_Frontdesk/Checkin";
import { readExcel } from "../../utils/logindata";


let page;
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const Checkindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Checkin");

test.describe.serial("New Entry Test", () => {

    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];
        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });

    test("TC002 - Navigate to facility", async ({ }) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });

    test("TC003 - Navigate Checkin module", async ({ }) => {
        const checkinTest = new checkin(page);
        const {PetName,PetId} = Checkindata[0];
        await checkinTest.checkin(PetName,PetId);
    });

    test.skip("TC004 - Click cancelicon", async ({ }) => {
        const checkinTest = new checkin(page);
        await checkinTest.cancel();
    });

    //To choose location and click checkin button
    test("TC005 - Selectlocation", async ({ }) => {
        const checkinTest = new checkin(page);
         const {location} = Checkindata[2];  //0-->TestRoom, 2->Testcage  4-->Testkennel
        await checkinTest.location
        (location);
    });

    test("TC006 - To Select room", async ({ }) => {
        const checkinTest = new checkin(page);
        const {roomname} = Checkindata[2];     //0-->TestRoomOne, 2->TestcageOne, 4-->TestkennelOne
                                              // 1-->TestRoomtwo, 3->TestcagrTwo, 5-->Testkenneltwo
        await checkinTest.Room(roomname);
    });

    test.skip("TC007 - To click cancel button", async ({ }) => {
        const checkinTest = new checkin(page);
        await checkinTest.cancelbutton();
    });

    test.skip("TC008 - Navigate to dashboard", async ({ }) => {
        const checkinTest = new checkin(page);
        await checkinTest.dashboardclick();
    });



    test("TC009 - Click submit button", async ({ }) => {
        const checkinTest = new checkin(page);
        await checkinTest.submitbutton();
    });


});