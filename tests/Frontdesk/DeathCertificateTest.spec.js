const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { deathcertificate } from "../../POM_Frontdesk/Death Certificate"; 
const Logindata=require('../../utils/Logindata.json') ;
const Deathdata=require('../../utils/DeathCertificatedata.json');


let page
let context;
const logindata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "login");
const Assetdata = readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx", "Asset");

test.describe.serial("SC001", () => {
    
    test("TC001 - Login with valid credentials", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        const loginTest = new LoginPage(page);
                const { Url, Username, Password } = logindata[0];
                await loginTest.navigateURL(Url);
                await loginTest.credentials(Username, Password);
    });

    test("TC002 - Navigate to facilityfacility", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });
    
     test("TC003 - Navigate death module and enter valid petname", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
          const { Url, Username, Password } = logindata[0];
        const petname1=Deathdata.petname;
        const Id=Deathdata.petid;
        await deathcertificateTest.death(petname1,Id);

    });

      test.skip("TC004 - Click cancel icon", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.cancelicon();

    });

    test("TC005 - Death  Registration", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);

        
        const reason1=Deathdata.Reason;
        const vet1=Deathdata.Veterianrian;
        
        await deathcertificateTest.registration(reason1,vet1);

    });
     test.skip("TC006 - Click cancel register", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.cancelRegister();

    });
    test.skip("TC007 - Click submit register", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.submitregister();

    });
     test("TC008 - Search and view the certificate", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        const search1=Deathdata.Search;
        await deathcertificateTest.search_pet(search1);
        const view1 =Deathdata.View;
        await deathcertificateTest.view(view1)
     });

      test.skip("TC009 - Navigate back", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.back();



      });
      test.skip("TC010 - Cancel the certificate ", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.cancel();



      });
      test("TC011 - Print the certificate ", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.Print();

});



});