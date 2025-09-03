

const {test,expect}=   require('@playwright/test');
import { LoginPage} from '../../POM_Frontdesk/LoginPage';
const Logindata = require('../../utils/Logindata.json');
import { readExcel } from '../../utils/logindata';

 const data=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
test.describe('Login Test Suite', () => {

    test("TC001 - Login Test", async ({page}) => {
   const loginTest=new LoginPage(page);
console.log("Excel data:", data);
 const {Url,Username,Password } = data[0];
  // const url=Logindata.url;
       await loginTest.navigateURL(Url);

      // const username=Logindata.username;
       //const password=Logindata.password;
        await loginTest.credentials(Username,Password);
    
    });

});