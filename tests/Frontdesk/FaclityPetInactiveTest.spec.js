const {test,expect}=   require('@playwright/test');

import { LoginPage } from "../../POM_Frontdesk/LoginPage.js";import { Newentry } from "../../POM_Frontdesk/NewEntry.js";
import { pet } from "../../POM_Frontdesk/FacilityPetInactive.js";
import { vaccine } from "../../POM_Frontdesk/FacilityVaccine.js";
import { readExcel } from '../../utils/logindata.js';
import { Treatment } from "../../POM_Frontdesk/FacilityTreatment.js";

let page
let context;

const logindata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","login");
const Petdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Pet");
const vitaldata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","EHR");
const Vaccinedata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Vaccine");
const Treatmentdata=readExcel("C:/Users/TamilselviArul/Downloads/data.xlsx","Treatment");

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
        const PetTest = new pet(page);
        const{PetName,PetID}=Petdata[0]
        await PetTest.pet_module(PetName,PetID);

    });
    test("TC004 -  Pet Profile ", async ({}) => {

        const PetTest = new pet(page);
        const{PetName,Colour,Weight,Behaviour,AgeGroup}=Petdata[0]
        const{Spayed,Temparament,SuitedTo,MyStory,GoodwithCats,GoodwithDogs,GoodwithKids,AdditionalImages}=Petdata[0]
        await PetTest.editProfile();
        await PetTest.editPetdetails(PetName,Colour,Weight,Behaviour,AgeGroup,Spayed,Temparament,SuitedTo,MyStory,GoodwithCats,GoodwithDogs,GoodwithKids)
        await PetTest.picProfile(AdditionalImages);
    });
    test("TC005 -  Medical History", async ({}) => {
        const PetTest = new pet(page);
        const{MedicalDetails}=Petdata[0];
        await PetTest.medicalHistory(MedicalDetails);
        
    });
     test("TC006 -  cancel Medical History", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.cancelmedical();
        
    });
     test.skip("TC007 -  save Medical History", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.savemedical();
        
    });
     test.skip("TC008 -  edit Medical History", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.editmedical();        
    });
     test.skip("TC009 -  delete Medical History and click up arrow", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.deletemedical();
        await PetTest.arrow();   
    });
   
    test("TC010 -  Cancel Profile", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.cancelprofile();
    });

    test.skip("TC011 -  submit Profile", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.submitprofile();  
    });

    test("TC012 -  fill the vitals", async ({}) => {
        const PetTest = new pet(page);
           const {Temperature,PulseRate,Respiratory,Mucous,Capillary,PulseQuality,GumColour,HeartRate,PainResponse,Weight} = vitaldata[0];
        await PetTest.Vitals(Temperature,PulseRate,Respiratory,Mucous,Capillary,PulseQuality,GumColour,HeartRate,PainResponse,Weight);  
    });

    test("TC013 -  cancel the vital ", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.cancelvitals(); 
    });

    test.skip("TC014 -  submit Profile", async ({}) => {
        const PetTest = new pet(page);
        await PetTest.submitvitals();  
    });

    test("TC015 -  Vaccinated Profile", async ({}) => {
        const PetTest = new pet(page);
         const vaccineTest = new vaccine(page);
       const {VaccineName,Vaccinedropdown,Batch,Manufacturer,Veterinarian} = Vaccinedata[0];
        await PetTest.vaccinationmodule(); 
        await vaccineTest.vaccine(VaccineName,Vaccinedropdown);
         await vaccineTest.vaccineBatch_VaccineManufacture(Batch,Manufacturer);
         await vaccineTest.expiryDate();
         await vaccineTest.selectVeterinarian(Veterinarian);
         const {Month,Monthname,MonthDate} = Vaccinedata[0];
         await vaccineTest.vaccinedate();
         await vaccineTest.nextDate(Month,Monthname,MonthDate);
          

    });
   test.skip("TC006 - Cancel vaccine module", async ({}) => {
           const vaccineTest = new vaccine(page);
          await  vaccineTest.cancelvacine();
       });
   
       test("TC017 - Submit vaccine module", async ({}) => {
           const vaccineTest = new vaccine(page);
          await  vaccineTest.submitvaccine();
   
       });test("TC018 - treatment module", async ({}) => {
                  const PetTest = new pet(page);
               const TreatmentTest = new Treatment(page);
           
                console.log("Excel data:", Treatmentdata);
                const{TreatmentName,TreatmentDrop,Veterinarian}=Treatmentdata[0];
       
                await PetTest.Treatment();
                await TreatmentTest.Treatmentmodule(TreatmentName,TreatmentDrop);
                await TreatmentTest.treatmentVet(Veterinarian);
                await TreatmentTest.treatment_Date();
       
                 const {Month,Monthname,MonthDate} =Treatmentdata[0]
                await TreatmentTest.treatNextDate();
       
                await TreatmentTest.treatCancel_Submit();
       });






});