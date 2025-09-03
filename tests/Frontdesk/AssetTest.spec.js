const{test,expect}=require("@playwright/test")
import { AssetPage } from "../../POM_Frontdesk/Asset.js"; 
import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";
const Logindata = require('../../utils/Logindata.json');
const Assetdata = require('../../utils/Assetdata.json');

test.describe("Asset",()=>{

    test("TC001 - Asset Test",async({page})=>{
        
         const loginTest = new LoginPage(page);
       const url=Logindata.url;
       await loginTest.navigateURL(url);

       const username=Logindata.username;
       const password=Logindata.password;
        await loginTest.credentials(username,password);
   

        const assetTest=new AssetPage(page);
        await assetTest.Asset();
        await assetTest.SearchAsset(Assetdata.AssetID);

        await page.waitForTimeout(2000);
        await assetTest.name(Assetdata.AssetName);
        
        //Value for Taskname,planned hours,des,AssetID
        await assetTest.maintainanceRequest();

        const assetname1=Assetdata.Assetnamedrop;
        const taskname=Assetdata.Task;
        const plannedhour=Assetdata.time;
        const des=Assetdata.description;



        await assetTest.Request(assetname1,taskname,plannedhour,des);
        await assetTest.submitrequest();
       
           
    })
})