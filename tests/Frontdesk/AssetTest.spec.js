const { test, expect } = require("@playwright/test")
import { AssetPage } from "../../POM_Frontdesk/Asset.js";
import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
//json data
//const Logindata = require('../../utils/Logindata.json');
//const Assetdata = require('../../utils/Assetdata.json');
import { readExcel } from '../../utils/logindata.js';
let page;
let context;

const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const Assetdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Asset");
test.describe.serial("Asset", () => {

    test("TC001 - Login Test", async ({ browser }) => {
        context = await browser.newContext(page);
        page = await context.newPage();

        const loginTest = new LoginPage(page);
        const { Url, Username, Password } = logindata[0];
        await loginTest.navigateURL(Url);
        await loginTest.credentials(Username, Password);
    });

    test("TC001 - Asset Test", async ({ }) => {
        const assetTest = new AssetPage(page);
        const { AssetID, AssetName, Assetnamedrop, Task, description } = Assetdata[0];
        await assetTest.Asset();

        await assetTest.SearchAsset(AssetID);
        await page.waitForTimeout(2000);
        await assetTest.name(AssetName);
        //Value for Taskname,planned hours,des,AssetID
        await assetTest.maintainanceRequest();
        await assetTest.Request(Assetnamedrop, Task, "09:30", description);
       
    })
    test.skip("TC002 - cancel request", async ({ }) => {
        const assetTest = new AssetPage(page);
        await assetTest.CancelRequest();

    });
    test("TC003 - Submit request", async ({ }) => {
        const assetTest = new AssetPage(page);
        await assetTest.submitrequest();

    });
});