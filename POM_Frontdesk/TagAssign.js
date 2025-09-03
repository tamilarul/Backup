class tagassign{
    constructor(page){
        this.page=page;

        this.tagassign_module=page.locator("//b[text()='Tag Assign & Removal']/../../..");
        this.pet_search=page.locator("(//div[contains(text(),'Permanent')])[1]/../../../../following-sibling::div/div/div/div/div/following-sibling::div/div/div/div/input");

       this.cancel_icon=page.locator("#remove-tooltip-pet");

     this.permanent_tag=page.locator("#newMappingRfId");
      this.Assign_button=page.locator("(//div[contains(text(),'   Permanent')])[1]/../../../../following-sibling::div/following-sibling::div/div/div/div/button");
      this.no_button_per=page.locator("//button[@class='el-button el-button--default el-button--small']");
      this.yes_button_per=page.locator("//button[@class='el-button el-button--default el-button--small']");

      this.toastmsg_per=page.locator("//p[@class='v-toast__text']");

      //Temporay
      this.temporary=page.locator("//span[text()='Tag Assign']/../../../../following-sibling::div/div/div/div/following-sibling::div/div/div/following-sibling::div[2]");
     this.pet_search_temp=page.locator("(//div[contains(text(),'Temporary')])[1]/../../../../following-sibling::div/div/div/div/div/following-sibling::div/div/div/div/input");
      this.assign_tem=page.locator("#newMappingRfId");
    this.Assign_button_temp=page.locator("(//div[contains(text(),'      Temporary')])[1]/../../../../following-sibling::div/following-sibling::div/div/div/div/button");

this.no_button_tem=page.locator("(//button[@class='el-button el-button--default el-button--small'])[1]");
this.yes_button_tem=page.locator("(//button[@class='el-button el-button--default el-button--small el-button--primary '])[1] ");
 
this.toastmsg_tem=page.locator("//p[@class='v-toast__text']");


    }



    async tagassignmodule(){
        await this.tagassign_module.click();

    }

    async petsearch_permanent(petname,PetID){
        await this.pet_search.fill(petname);
        await this.page.locator(`//b[contains(text(),'Pet ID: ${PetID}')]`).click();
        
}
async cancelicon(){
    await this.cancel_icon.click();
}

async permanenttag(tag){
    await this.permanent_tag.fill(tag);
}

async assignbutton_perm(){

    await this.Assign_button.click();
    await this.no_button_per.click();

    await this.page.waitForTimeout(2000);
     await this.Assign_button.click();
    await this.yes_button_per.click();

    //const text=await this.toastmsg_per.textContent();
    //console.log(text);
}

async petsearch_temp(petname,petID){
    await this.temporary.click();
    await this.pet_search_temp.fill(petname);
     await this.page.locator(`//b[contains(text(),'Pet ID: ${petID}')]`).click();
}

async cancelicon_tem(){
    await this.cancel_icon.click();         
}

async assigntag_temp(temtag){

    await this.assign_tem.fill(temtag);
    await this.Assign_button_temp.click();
    await this.no_button_tem.click();
     await this.Assign_button_temp.click();
     await this.yes_button_tem.click();

  
}



}
module.exports = { tagassign };