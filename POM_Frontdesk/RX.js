class Rx{
    constructor(page){
    this.page=page;
    //To click Stray Surrender 
    this.Testspecies_Module=page.locator("//b[text()='Testspecies ']/../../..");

    }
    async Testspecies(){
        await this.Testspecies_Module.click();
    }

        async species(room,petname){
         await this.page.locator(`//div[contains(text(),' ${room}')]`).click();
         await this.page.locator(`//p[contains(text(),'${petname}')]/../../../following-sibling::div[@col-id='action']`).click();
         
    }
    async Rx(rxtab){
        await this.page.locator(`//div[contains(text(),'${rxtab}')]`).click();
    }
}
module.exports={Rx}