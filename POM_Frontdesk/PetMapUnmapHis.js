class MapUnmapHis{
    constructor(page){
    this.page=page;

    //To click Stray Surrender 
    this.MapUnmaphis_module=page.locator("//b[text()='Pet Map & Unmap History']/../../..");
    // to Click download button
    this.downloadbtn=page.locator("//button[@data-test='download-button']");
   // To Search 
   this.search=page.locator("#petMapUnmapHistoryQuickFilter");
 //  to Click New Entry Button
   this.newentrybtn=page.locator("//button[@class='btn new-btn btn-secondary']");
   // To Click Facility Dashboard
   this.dashboard=page.locator("//a[text()='Facility Dashboard']");

    }

    async PetMapUnmap(tab){
        await this.MapUnmaphis_module.click();
        await this.page.locator(`//div[contains(text(),' ${tab}')]`).click();
        await this.downloadbtn.click();
    }
    async newentry(){
        await this.newentrybtn.click();
        
    }

async navigateback(cusname){
    await this.search.fill(cusname);
     await this.dashboard.click();
    }

}
module.exports={MapUnmapHis}