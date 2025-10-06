class OP{
    constructor(page){
    this.page=page;

    //To click Stray Surrender 
    this.OP_module=page.locator("//p[contains(text(),'  Outpatient ')]");
    this.cancelicon=page.locator("//button[@class='close']");
    this.pending=page.locator("//span[@style='background-color: rgb(3, 185, 186);']/..");
    this.Ongoing=page.locator("//div[contains(text(),' Ongoing')]");
    this.wrap_up=page.locator("//div[contains(text(),'  Wrap-up')]");
    this.Invoice_pending=page.locator("//div[contains(text(),' Invoice Pending')]");
    this.Payment_pending=page.locator("//div[contains(text(),' Payment Pending')]");
    this.completed=page.locator(`//div[contains(text(),' Completed')]`)
      this.cancelled=page.locator(`//div[contains(text(),' Cancelled')]`)

    this.search=page.locator("#appointmentFilter");

    }
    async op(petname,status){
        await this.OP_module.click();
           await this.page.waitForTimeout(9000);
      //await this.page.waitForSelector("//div[@col-id='petName']", { state: 'visible', timeout: 5000 });
        //await this.page.locator(`//div[contains(text(),'     ${tab}')]`).click();
        await this.page.locator(`//b[text()='${petname}']/../../../../following-sibling::div/div[@id='status-render']/span[contains(text(),' ${status}')]/../../following-sibling::div[@col-id='action']/div/div/span/button[@class='btn view-appointment-btn btn-secondary']`).click();
        await this.cancelicon.click();
    }
    async PendingtabView (cusname,appID){
         await this.pending.click();
         await this.search.fill(cusname);
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div/div/span/button[@class='btn view-appointment-btn btn-secondary']`).click();
        await this.cancelicon.click();
    }
    async slot(appid){
        await this.page.locator(`//div[text()='${appid}']/following-sibling::div[@col-id='action']/div/div/span/button[@class='btn edit-appointment-btn btn-secondary']`).click();

    }
    async Ongoingtab (appID){
         await this.Ongoing.click();
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div`).click();
        await this.cancelicon.click();
    }
     async wrap_uptab (appID){
         await this.wrap_up.click();
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div`).click();
        await this.cancelicon.click();
    }
    async Invoicependingtab (appID){
         await this.Invoice_pending.click();
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div`).click();
        
    }
    async Paymentpendingtab (appID){
         await this.Payment_pending.click();
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div`).click();
        
    }
    async completedtab (appID){
         await this.completed.click();
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div`).click();
        await this.cancelicon.click();
    }
     async cancelledtab (appID){
         await this.cancelled.click();
         await this.page.locator(`//div[text()='${appID}']/following-sibling::div[@col-id='action']/div`).click();
          await this.cancelicon.click();
    }
}
module.exports={OP}