class checkin{
    constructor(page){
        this.page=page;

        this.checkinbtn=page.locator("//b[text()='Check In']/../../..");
        this.pet=page.locator("#searchInput");

       // this.select_pet=page.locator("//li[contains(text(),'Pet ID: 27252')]");

        this.cancelicon=page.locator(".btn.closeiconclass.btn-secondary");
        this.select_location=page.locator("#category");

        this.checkbutton=page.locator(".bottom_checkin.mt-3");

        

        this.cancel_button=page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-2 btn-secondary']");
        this.submit_button=page.locator("//*[name()='svg' and @class='eyeicon svg-inline--fa fa-check fa-w-16']");
        
        this.popup=page.locator("//div[@class='alert-change']");
        this.view=page.locator("//button[@class='btn submitbtn-color btn-secondary']");

          //facility dashboaed
            this.dashboard=page.locator("//a[text()='Facility Dashboard']");

    }

    async checkin(petname, petID){
        await this.checkinbtn.click();
        await this.pet.fill(petname);
       
        await this.page.locator(`//li[contains(text(),'Pet ID: ${petID}')]`).click();
        
    }

    async cancel(){
        await this.cancelicon.click();

    }
    
    async location(location1){
      await this.select_location.selectOption(location1);
      await this.checkbutton.click();
      
    }

    async Room(roomname){
        await this.page.locator(`//p[text()='${roomname}']`).click();
    }

    async cancelbutton(){
        await this.cancel_button.click();
}
async submitbutton(){
        await this.submit_button.click();
        console.log(await this.popup.textContent());
        await this.view.click();
}
async dashboardclick(){
        await this.dashboard.click();
    }
}
module.exports = { checkin };