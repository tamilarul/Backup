class deathcertificate{
    constructor(page){
        this.page=page;

        this.deathcertificate_Module=page.locator("//b[text()='Death Certificate']/../../..");
        this.register_button=page.locator("//button[@class='btn primary-btn register-btn-size w-auto mr-2 btn-secondary']");
        this.pet_search=page.locator("#searchInput");
        this.cancel_icon=page.locator("#remove-tooltip-pet");
        this.reasonfordeath=page.locator("#deathReason");
        this.veterinarian=page.locator("#examinedVeterinarian");
        this.date=page.locator("#dateOfDeath");
        this.date_today=page.locator("//td[@class='available today']/div");

        this.time=page.locator("//div[@class='el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--time']/input");
        this.cancel_time=page.locator("//button[@class='el-time-panel__btn cancel']");
        this.ok_button=page.locator("//button[@class='el-time-panel__btn confirm']");

        this.cancel_register=page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']");
        this.cancel_no=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.cancel_yes=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

         this.submit_register=page.locator("//button[@class='btn primary-btn register-btn-size btn-secondary']");
         this.register_no=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.register_yes=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

      this.search=this.page.locator("#petDeathHistoryQuickFilter");
      this.backicon=page.locator("//*[name()='svg' and @class='fa-xs back-arrow svg-inline--fa fa-arrow-left fa-w-14']");

      this.cancel_button=page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']");
      this.cancel_no=page.locator("//button[@class='el-button el-button--default el-button--small']");
      this.cancel_yes=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

      this.print_button=page.locator("//button[@class='btn primary-btn print-btn-size btn-primary']");
      this.back_button-=page.locator("//button[@class='btn cancel-btn-size secondary-btn btn-secondary']");

    }
    async death(petname,PetID){
        this.deathcertificate_Module.click();
        this.register_button.click();
        this.pet_search.fill(petname);
         await this.page.locator(`//b[contains(text(),'Pet ID: ${PetID}')]`).click();

         
    }

    
    async cancelicon(){
    await this.cancel_icon.click();
}

async registration(reason,vet){
    await this.reasonfordeath.selectOption({ label: reason});
    await this.veterinarian.selectOption({label: vet});
    await this.date.click();
    await this.date_today.click();
    await this.time.click();
    await this.cancel_time.click();
    await this.time.click();
    await this.ok_button.click();
}
async cancelRegister(){
    await this.cancel_register.click();
    await this.cancel_no.click();
    await this.cancel_register.click();
    await this.cancel_yes.click();

}

async submitregister(){
 await this.submit_register.click();
 await this.register_no.click();
 await this.submit_register.click();
 await this.register_yes.click();

}
async search_pet(mobilenumber){
await this.search.fill(mobilenumber)
}
async view(mob){
    await this.page.locator(`//div[text()='${mob}']/following-sibling::div[@col-id='view']`);
   

}
async back(){
    await this.backicon.click();
}
async cancel(){
    await this.cancel_button.click();
    await this.cancel_no.click();
    await this.cancel_yes.click();

}
async Print(){
    await this.print_button.click();
    await this.back_btn_print.click();
   

}

}
module.exports={deathcertificate};
