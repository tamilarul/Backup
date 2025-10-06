class Straysur{
    constructor(page){
    this.page=page;
    //To click Stray Surrender 
 this.StraySurrenderhis_module=page.locator("//b[text()='Stray / Surrender History']/../../..");
 this.cancelicon_Date=page.locator("//button[@class='vd-icon vd-icon--link']");
 this.datepicker=page.locator("//input[@name='datepicker']");
 this.year_heading=page.locator("//button[text()='2025']");
 this.ok_date=page.locator("//button[@class='vd-picker-validate__button vd-picker-validate__button-validate']");
 this.cancel_date=page.locator("//button[@class='vd-picker-validate__button vd-picker-validate__button-cancel']");
     this.Backicon=page.locator("//*[name()='svg' and @class='fa-xs back-arrow svg-inline--fa fa-arrow-left fa-w-14']");
     this.downloadbtn=page.locator("//button[@data-test='download-button']");
     this.search=page.locator("#straySurrenderHistoryQuickFilter");
 this.dashboard=page.locator("//a[text()='Facility Dashboard']");





    }

    async StraySurrender(year,month,startdate,enddate){
     await this.StraySurrenderhis_module.click();
     await this.cancelicon_Date.click();
     await this.datepicker.click();
     await this.year_heading.click();

     await this.page.locator(`//li[text()='${year}']`).click();
     await this.page.locator(`//button[text()='${month}']`).click();
     await this.page.locator(`//span[contains(text(),'${startdate}')]`).click();
     await this.page.locator(`//span[contains(text(),'${enddate}')]`).click();
     await this.ok_date.click();
    }
    async canceldate(){
        await this.cancel_date.click();
    }
    async straycol(tab,petid,cusname){
        await this.page.locator(`//div[contains(text(),'${tab}')]`).click();
        await this.page.locator(`//div[text()='${petid}']/following-sibling::div/div[@id='stray-surrender-history-rendered']`).click();
    await this.Backicon.click();
    await this.downloadbtn.click();
    await this.search.fill(cusname);
     await this.dashboard.click();

    }
}
module.exports={Straysur};
