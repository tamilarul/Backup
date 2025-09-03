class tagremove{
    constructor(page){
        this.page=page;

        this.search_pet_permanent=page.locator("(//div[contains(text(),'Permanent')])[2]/../../../../following-sibling::div/div/div/div/div/following-sibling::div/div/div/div/input");
        this.cancel_icon=page.locator("#remove-tooltip-pet");

        this.removal_reason=page.locator("#descValue");

        this.submitbutton_per=page.locator("(//div[contains(text(),'   Permanent')])[2]/../../../../following-sibling::div/following-sibling::div/div/div/div/button");
        this.no_button_per=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.yes_button_per=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");




//Tempoary
      this.temporary=page.locator("//span[text()='Tag Removal']/../../following-sibling::div/div/div/following-sibling::div/div/div/following-sibling::div[2]");

        this.search_pet_tem=page.locator("(//div[contains(text(),' Temporary')])[2]/../../../../following-sibling::div/div/div/div/div/following-sibling::div/div/div/div/input");
       
        this.submitbutton_tem=page.locator("(//div[contains(text(),'   Temporary')])[2]/../../../../following-sibling::div/following-sibling::div/div/div/div/button");
       this.no_button_tem=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.yes_button_tem=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");



    }
    async tagremoval_per(petname,PetID){
    await this.search_pet_permanent.fill(petname);
     await this.page.locator(`//b[contains(text(),'Pet ID: ${PetID}')]`).click();
      await this.page.waitForTimeout(5000);
   

    }

    async cancelicon(){
    await this.cancel_icon.click();
}
async  submitpermanent(reason){
    await this.removal_reason.fill(reason);
       await this.page.waitForTimeout(5000);

    await this.submitbutton_per.click();
    await this.no_button_per.click();
    await this.submitbutton_per.click();
    await this.yes_button_per.click();

}

 async tagremoval_tem(petname,PetID){
    await this.temporary.click();
    
    await this.search_pet_tem.fill(petname);
     await this.page.locator(`//b[contains(text(),'Pet ID: ${PetID}')]`).click();
       
 }

 async  submittemporary(){
    await this.submitbutton_tem.click();
    await this.no_button_tem.click();
    await this.submitbutton_tem.click();
    await this.yes_button_tem.click();

 }

  
}
module.exports={tagremove};
