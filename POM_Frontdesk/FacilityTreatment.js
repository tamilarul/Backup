class Treatment{
    constructor(page){
    this.page=page;
    //To click Stray Surrender 
    this.Testspecies_Module=page.locator("//b[text()='Testspecies ']/../../..");
    // to Click the EHR Tab
    this.Treatmenttab=page.locator("//div[contains(text(),'  Treatment')]");
    //To click the add button
    this.addbtn=page.locator("//button[@class='btn primary-btn add-btn-size btn-secondary']");

    this.searchtreatmentName = page.locator("#searchInput")
       
        this.treatmentVeterinarian = page.locator("//select[@id='doctorname']")  //Treatment veterinarian select
        this.TreatmentDate = page.locator("#treatmentdate");
 
 
        this.clickTreatmentDate = page.locator("//td[@class='normal disabled']/preceding-sibling::td[@class='available today']/preceding-sibling::td[@class='available'][3]");
        //this.clickTreatmentDate = page.locator("//tr[@class='el-date-table__row']/td[@class='available today']");

        this.NextDate = page.locator("//label[text()='Treatment Date']/../following-sibling::div//input");
        this.clickNextDate = page.locator("(//tr[@class='el-date-table__row']/td[@class='normal disabled']/following-sibling::td[@class='available'])[1]");

        this.treatCancel = page.locator("//div[@id='treatment-details-sidebar']//button[contains(text(),'Cancel')]");
        this.clickCancelNo = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.treatSubmit = page.locator("//div[@id='treatment-details-sidebar']//span[contains(text(),'Submit')]")
    }

     async Testspecies(room,petname){
        await this.Testspecies_Module.click();
         await this.page.locator(`//div[contains(text(),' ${room}')]`).click();
        await this.page.locator(`//p[contains(text(),'${petname}')]/../../../following-sibling::div[@col-id='action']`).click();

    }
    async Treatmentmodule(Treatmentname,treatmentdrop) {
    await this.Treatmenttab.click();
    await this.addbtn.click();
    await this.searchtreatmentName.fill(Treatmentname);
    await this.page.locator(`//b[contains(text(),' ${treatmentdrop}')]`).click();
        await this.page.waitForTimeout(1000);
    }
     
    async treatmentVet(trVet) {
        await this.treatmentVeterinarian.selectOption({label: trVet});
    }
    async treatment_Date() {
        await this.TreatmentDate.click();
        await this.clickTreatmentDate.click();
 
    }
    async treatNextDate(month,monthname,mon) {
        await this.NextDate.click();
        await this.clickNextDate.click();
         /*await this.page.locator(`(//span[text()='${month}'])[5]`).click();
       await this.page.locator(`(//a[text()='${monthname}'])[5]`).click();
       await this.page.locator(`//span[text()='${mon}']/../following-sibling::div/table/tbody/tr[@class='el-date-table__row']/td[@class='available']/div/span[contains(text(),' 21')]`).click();
       await this.page.waitForTimeout(2000);*/
   
        
 
    }
 
    async treatCancel_Submit() {
        await this.treatCancel.click();
        await this.clickCancelNo.click()
        await this.page.waitForTimeout(1000);
        await this.treatSubmit.click()
        await this.clicksubmitYes.click()
 
    }

}
module.exports={Treatment};