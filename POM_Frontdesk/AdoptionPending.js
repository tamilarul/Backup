class AdoptPending{
    constructor(page){
       this.page=page;

       this.AdoptionPendingmodule=page.locator("//b[text()='Adoption Pending']/../../..")
       // To Click  Back Icon
     this.Backicon=page.locator("//*[name()='svg' and @class='fa-xs back-arrow svg-inline--fa fa-arrow-left fa-w-14']");
     this.searchbox=page.locator("#FosterFilter");
      // To Click Facility Dashboard
     this.dashboard=page.locator("//a[text()='Facility Dashboard']");

}
    async Adoptionpending(){
        await this.AdoptionPendingmodule.click();
        
    }


 async foster(Tab,petname,cusname){
    await this.page.waitForTimeout(1000);
    await this.page.locator(`(//div[contains(text(),' ${Tab}')])[1]`).click();
    await this.page.locator(`//div[text()='${petname}']/following-sibling::div/div`).click();
    await this.Backicon.click();
    await this.searchbox.fill(cusname);
   

 }
 async Activecolumn(Tab,petname,cusname){
    await this.page.locator(`(//div[contains(text(),' ${Tab}')])[2]`).click();

    await this.page.locator(`//div[text()='${petname}']/following-sibling::div/div`).click();
    
    await this.Backicon.click();
    await this.searchbox.fill(cusname);
   
     await this.dashboard.click();
 }


}
module.exports={AdoptPending};