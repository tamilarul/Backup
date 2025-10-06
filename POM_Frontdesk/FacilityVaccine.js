class vaccine{
    constructor(page){
    this.page=page;
    //To click Stray Surrender 
    this.Testspecies_Module=page.locator("//b[text()='Testspecies ']/../../..");
    // to Click the EHR Tab
    this.vaccine_tab=page.locator("//div[contains(text(),'  Vaccine')]");
    //To click the add button
    this.addbtn=page.locator("//button[@class='btn primary-btn add-btn-size btn-secondary']");

    this.searchvaccine = page.locator("//div[@id='vaccinename']//input")  //  search bar -->type Vaccine name
        this.vaccineName = page.locator("//b[contains(text(),' TestVaccine')]");  //vaccine name in tables
        this.vacBatch = page.locator("#batchno");
        this.vacManufacture = page.locator("#manufacturer");

        this.vaccineExpiry = page.locator("#expirydate");
        this.vaccineExpiryDate = page.locator("(//tr[@class='el-date-table__row']/td[@class='available today']/div/span)[1]");

        this.veterinarianSelect = page.locator("//select[@id='doctorname']");

        this.vaccinateddate = page.locator("#vaccinateddate");
        this.select_vaccinateddate=page.locator("//td[@class='available today']/div");

        this.vaccinedate_year=page.locator("(//span[text()='2025 '])[3]");

        this.nextVaccinefield = page.locator("#nextdate")  //click next date
      //  this.nextdate_year=page.locator("(//span[text()='2025 '])[3]");
      
this.cancelbtn=page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']");
this.no_cancel=page.locator("//button[@class='el-button el-button--default el-button--small']");
this.yes_cancel=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

//submit
this.submitbtn=page.locator("(//button[@class='btn primary-btn submit-btn-size btn-secondary'])[1]");
this.no_submit=page.locator("//button[@class='el-button el-button--default el-button--small']");
this.yes_submit=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");




    }
    async Testspecies(room,petname){
        await this.Testspecies_Module.click();
         await this.page.locator(`//div[contains(text(),' ${room}')]`).click();
        await this.page.locator(`//p[contains(text(),'${petname}')]/../../../following-sibling::div[@col-id='action']`).click();

    }
   async vaccinetab(){
 await this.vaccine_tab.click();
   }
async vaccine(nameOfVaccine,vaccinedrop) {
   
    await this.addbtn.click();
      await this.searchvaccine.type(nameOfVaccine);

        await this.page.locator(`//b[contains(text(),' ${vaccinedrop}')]`).click();
        await this.page.waitForTimeout(1000);
    }
    async vaccineBatch_VaccineManufacture(batch, manuftre) {
        await this.vacBatch.fill(batch);
        await this.vacManufacture.fill(manuftre)
 
 
    }
    //Vaccine date
    async expiryDate() {
        await this.vaccineExpiry.click();
        // await this.page.waitForTimeout(1000);
        await this.vaccineExpiryDate.click();
        // await this.page.waitForTimeout(2000);
    }
 
    async selectVeterinarian(vetName) {
    // select by visible label
    await this.veterinarianSelect.selectOption({ label: vetName });
    }
    async vaccinedate() {
 
        await this.vaccinateddate.click();
        await this.select_vaccinateddate.click();
        
        /*await this.vaccinedate_year.click();
        await this.page.locator(`//a[text()='${year}']`).click();
    await this.page.locator(`//a[text()='${month}']`).click();
    await this.page.locator(`//span[contains(text(),'${date}')]`).click();*/

 
    }
    async nextDate(month,monthname,mon) {
        await this.nextVaccinefield.click();
       await this.page.locator(`(//span[text()='${month}'])[3]`).click();
       await this.page.locator(`(//a[text()='${monthname}'])[3]`).click();
       await this.page.locator(`//span[text()='${mon}']/../following-sibling::div/table/tbody/tr[@class='el-date-table__row']/td[@class='available']/div/span[contains(text(),' 21')]`).click();
       await this.page.waitForTimeout(2000);
   
 
}
  async cancelvaccine() {
    await this.cancelbtn.click();
    await this.no_cancel.click();
    await this.cancelbtn.click();
    await this.yes_cancel.click();

  }
  async submitvaccine() {
    await this.submitbtn.click();
    await this.yes_submit.click();

  }

}
module.exports={vaccine};