const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage";
import { Newentry } from "../../POM_Frontdesk/NewEntry";
import { deathcertificate } from "../../POM_Frontdesk/Death Certificate"; 
const Logindata=require('../../utils/Logindata.json') ;
const Deathdata=require('../../utils/DeathCertificatedata.json');


let page
let context;
test.describe("SC001", () => {
    
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

    test("TC002 - Navigate to facilityfacility", async ({}) => {
        const facilityTest = new Newentry(page);
        await facilityTest.Facility();
    });
    
     test("TC003 - Navigate death module and enter valid petname", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);

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
      test("TC010 - Print the certificate ", async ({}) => {
        const deathcertificateTest = new deathcertificate(page);
        await deathcertificateTest.Print();

});



});