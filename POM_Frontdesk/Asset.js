class AssetPage{
    constructor(page){
        this.page=page;

        //TO Click My Asset Module
        this.AssetModule=page.locator("//p[text()='My Asset']");
        this.DownloadButton=page.locator("//button[@data-test='download-button']");

        //To print the asset names
        this.assetname="//div[@col-id='assetName']";
        this.back=page.locator("//*[name()='svg' and  @class='fa-xs back-arrow svg-inline--fa fa-arrow-left fa-w-14']");
       
        //To Click Maintainance Request
        this.maintainance=page.locator("//*[name()='svg' and @class='svg-inline--fa fa-info-circle fa-w-16']");
        this.create=page.locator("//button[@class='btn primary-btn submit-btn-size mr-2 btn-secondary']");

        //To Select Asset
        this.Assetdropdown=page.locator("//label[text()='Asset Name']/following-sibling::select[@class='custom-select']");

        //To enter Task Name
        this.Taskname=page.locator("// label[text()='Task Name']/following-sibling::input");
        this.project=page.locator("//label[text()='Project']/following-sibling::select[@class='custom-select']");

        //To select Planned Hours
        this.plannedHours=page.locator("//label[text()='Planned Hours']/../div/input");

       //To Select Start Time
        this.starttime=page.locator("//label[text()='Start Time']/../div/input");
        this.okbutton=page.locator("//button[text()='OK']");
        
        // to Select End Time
        this.endtime=page.locator("//label[text()='End Time']/../div/input");
        this.okbutton1=page.locator("(//button[text()='OK'])[2]")
        
        this.priority=page.locator("(//*[name()='svg' and @class='bi-star b-icon bi text-warning'])[1]");
        this.description=page.locator("//textarea[@id='descValue']");

        //to cancel the appointment
        this.cancel=page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']");
        this.no=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.yes=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

        //To Submit the Appointmtnet
        this.submit=page.locator("//button[@class='btn primary-btn submit-btn-size btn-secondary']");
        this.submnitNo=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.yessubmit=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

        //toast message
        this.toastMessage=page.locator("//p[@class='v-toast__text']");
        this.search=page.locator("#MyAssetQuickFilter");
        this.searchmaintenance=page.locator("#MaintenanceQuickFilter");

        

    }

    async Asset(){
        await this.AssetModule.click();
        await this.DownloadButton.click();  

        //to print the asset names
        const asset1=await this.page.$$(this.assetname);
        for(const asset of asset1){
            const text=await asset.textContent();
            console.log(text);   
        };  

    }
    async SearchAsset(AssetID){
        await this.search.fill(AssetID);
        await this.search.fill(" ");
}
    async name(assetname){
     await this.page.locator(`//div[text()="${assetname}"]/following-sibling::div/div/../following-sibling::div/div`).click();

}
     async maintainanceRequest(){
        await this.back.click();
        await this.maintainance.click();
        await this.create.click();
     }

    
        async Request(assetnamedropdown,Task,time,des){

            // to select the dropdown value using visible text
             await this.Assetdropdown.selectOption({ label: assetnamedropdown });
        await this.Taskname.fill(Task);
        await this.project.selectOption({label: 'Asset Maintenance Request'});
        await this.plannedHours.click();
        
        await this.page.locator(`//div[text()='${time}']`).click();
        await this.starttime.click();
        await this.okbutton.click();
        await this.endtime.click();
        await this.okbutton1.click();
        await this.priority.click();
        await this.description.fill(des)

        }
        //To cancel the request
        async CancelRequest(AssetID){
        await this.cancel.click();
        await this.no.click();
        await this.cancel.click();
        await this.yes.click();
        await this.searchmaintenance.fill(AssetID)
        }

         async submitrequest(){
         await this.submit.click();
         await this.submnitNo.click();
         await this.submit.click();
         await this.yessubmit.click();

     // to print pop  up message 
        const text=await this.toastMessage.textContent();
        console.log("Toast Message:", text);

}
   
}
module.exports={AssetPage};