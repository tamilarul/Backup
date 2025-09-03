const{test,expect}=require("@playwright/test")
import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
const Logindata = require('../../utils/Logindata.json');
const NewEntrydata=require('../../utils/NewEntrydata.json');

let page;
 let context;


 test("TC001 - Login with valid data",async({browser})=>{
        context=await browser.newContext();
        page=await context.newPage();
        const loginTest=new LoginPage(page);
       
        const url=Logindata.url;
       await loginTest.navigateURL(url);

       const username=Logindata.username;
       const password=Logindata.password;
        await loginTest.credentials(username,password);


  });

   test("TC002 - Fill Stray form with valid data",async({})=>{
   const newEntryTest = new Newentry(page); 
       await newEntryTest.Facility();
       await newEntryTest.Newentry();
        await newEntryTest.stray(NewEntrydata.team,NewEntrydata.Petname,NewEntrydata.Compliant);
        await newEntryTest.collor(NewEntrydata.collor);
        await newEntryTest.Uploadfile(NewEntrydata.filepath1,NewEntrydata.filepath2);
       
    });

    test("TC003 - Click Submit button",async({})=>{
   const newEntryTest = new Newentry(page); 
        await newEntryTest.submitstray();
        
    });


    
