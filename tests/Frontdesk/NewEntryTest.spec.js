const{test,expect}=require("@playwright/test")
import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { readExcel } from '../../utils/logindata.js';

let page;
 let context;
const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const NewEntrydata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "NewEntry");

test.describe.serial("SC001", () => {
 test("TC001 - Login with valid data",async({browser})=>{
        context=await browser.newContext();
        page=await context.newPage();
        const loginTest=new LoginPage(page);
       
        const { Url, Username, Password } = logindata[0];
    await loginTest.navigateURL(Url);
    await loginTest.credentials(Username, Password);



  });

   test("TC002 - Fill Stray form with valid data",async({})=>{
   const newEntryTest = new Newentry(page); 
       await newEntryTest.Facility();
       await newEntryTest.Newentry();
               const { Team,Petname,PetID,Compliant,Collor,filepath1,filepath2} = NewEntrydata[0];

        await newEntryTest.stray(Team,Petname,PetID,Compliant);
        await newEntryTest.collor(Collor);
        await newEntryTest.Uploadfile(filepath1,filepath2);
       
    });

    test("TC003 - Click Submit button",async({})=>{
   const newEntryTest = new Newentry(page); 
        await newEntryTest.submitstray();
        
    });


});
