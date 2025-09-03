class SSH{
    constructor(page){
    this.page=page;

     this.SSH_module=page.locator("//b[text()='Stray / Surrender History']/../../..");
     this.search_cus=page.locator("#straySurrenderHistoryQuickFilter");
     this.download=page.locator("//button[@class='btn mr-2 btn-primary']");
     this.datepicker=page.locator("#datepicker__ubyrl2mme");
     this.year_title=page.locator(".//button[text()='2024']");
     this.year=page.locator("/li[text()='2024']");
     this.month=page.locator("//button[text()='May']");

     this.surrenderpage=page.locator("//*[name()='svg' and @class='svg-inline--fa fa-handshake fa-w-20']");




    



}

async SSH_history(cusname){
     await this.SSH_module.click();
     await this.search_cus.fill(cusname);
     await this.download.click();


}
 async clickPetAction(petid) {
    await this.page
      .locator(`//div[text()='${petid}']/following-sibling::div[@col-id='action']/div`)
      .click();
  }

  async surrender(Petid){
     await this.surrenderpage.click();
     await this.page.locator(`//div[text()='${Petid}']/following-sibling::div[@col-id='action']/div`).click();


  }



}
module.exports={SSH}