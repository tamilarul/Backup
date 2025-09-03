const { stat } = require("fs");

class surrender{
    constructor(page){

        this.page=page;
        //To Click Surrender button
        this.surrenderbtn=page.locator("//button[@class='btn form-toggle-btn btn-secondary form-toggle-btn']");

        // To Search the customer
        this.customer_search=page.locator("//div[@class='d-inline-flex mb-2']/following-sibling::div/div/div/div/input");
       this.customer_name=page.locator("//b[text()=' Tamilselvi A( User ID : 14439, Phone : 9345816343, Date of birth : 2002-11-15 )']")

       //to search the pet
        this.cancelcust=page.locator("#remove-tooltip");
        this.cancel_pet=page.locator("#remove-tooltip-pet");

        //to pet
        this.wait_element=page.locator("//b[text()='Ponni ']");

        //To Click Check Box
        this.checkbox=page.locator("#checkbox-1");
        this.element=page.locator("(//label[@class='custom-control-label'])[1]");

        //date brought in
        this.datebrought=page.locator("#date_brought_in");
        this.date=page.locator("//td[@class='available today']/div");

        this.personality=page.locator("#personality_quirks");
        this.where_when=page.locator("#where_and_when");
        this.hours=page.locator("#hours_alone");

        this.why_surrender=page.locator("//span[text()='Pet is too hyperactive']");

        this.length_of_stray=page.locator("#length_of_stay");
        this.current_vet=page.locator("#current_vet");

        this.last_rabies_vaccine=page.locator("#last_rabies_vaccine");

        this.last_vaccine=page.locator("#last_vaccine");

        this.last_flea_tick_preventative=page.locator("#last_flea_tick_preventative");

        this.past_injuries_surgeries=page.locator("#past_injuries_surgeries");
        
       this.additional=page.locator("//label[text()='Additional Images']/following-sibling::div/div/div");
       this.consent=page.locator("//label[text()='Consent/Attachment']/following-sibling::div/div/div");

       this.terms=page.locator("//span[text()='(Terms & Conditions)']");
       this.close=page.locator("//button[@class='close']");
         this.agree=page.locator("//label[text()='Agree']");

         this.submit=page.locator("//div[@class='row no-gutters']/div/button");
         //history bu
            this.history=page.locator("//button[@class='btn edit-btn btn-secondary btn-sm']");

            //facility dashboaed
            this.dashboard=page.locator("//a[text()='Facility Dashboard']");


    }

    async surrenderPet(cus){
      await this.surrenderbtn.click();
      await this.customer_search.fill(cus);
      await this.customer_name.click();
      await this.page.waitForTimeout(5000);
      await this.wait_element.waitFor({state: 'visible'});
      
      
    }

    async cancelcustomer(){
       await this.cancelcust.click();

    }
    async pet(petname){
        await this.page.click(`//b[text()="${petname}"]`);

    }
     async cancelpet(){
       await this.cancel_pet.click();

    }

     async scrollToElement() {
     await this.element.scrollIntoViewIfNeeded();
}
    async checkboxclick(){
       
        await this.checkbox.click();
    }
    async surrenderform(personality1,where1,hours1,length1,vet1, past_injuries_surgeries){
       await this.datebrought.click();
       await this.date.click();
       await this.personality.fill(personality1);
       await this.where_when.fill(where1);
       await this.hours.fill(hours1);
       await this.why_surrender.click();
       await this.length_of_stray.fill(length1);
       await this.current_vet.fill(vet1);
     
       await this.last_rabies_vaccine.click();
         await this.date.click();

       await this.last_vaccine.click();
       await this.date.click();

         await this.last_flea_tick_preventative.click();
         await this.date.click();

         await this.past_injuries_surgeries.fill(past_injuries_surgeries);
      
    }
    async uploadfile(filepath, filepath1) {
  // Click the additional images button and wait for the file chooser
    const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        this.additional.click()
    ]);
    await fileChooser.setFiles(filepath);

    // Click the consent button and wait for the file chooser again
    const [fileChooser2] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        this.consent.click()
    ]);
    await fileChooser2.setFiles(filepath1);
    await this.terms.click();
    await this.close.click();
    await this.agree.click();

    }
     async submit(){
        await this.submit.click();

    }
    async historyclick(){
        await this.history.click();
    }
    async dashboardclick(){
        await this.dashboard.click();
    }
    



}
module.exports={surrender};