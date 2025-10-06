

class task{
    constructor(page){
    this.page=page;
    //To click Stray Surrender 
    this.Testspecies_Module=page.locator("//b[text()='Testspecies ']/../../..");
    // to Click the EHR Tab
    this.tasktab=page.locator("//div[contains(text(),'  Task')]");
    //To click the add button
    this.createtaskbtn=page.locator("//button[@class='btn primary-btn submit-btn-size mr-2 btn-secondary']")

    // To enter the task name
    this.taskname=page.locator("#name");
    // project field
    this.projectdrop=page.locator("//label[text()='Project']/following-sibling::select[@class='custom-select']");
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
        this.submit=page.locator("(//button[@class='btn primary-btn submit-btn-size btn-secondary'])[1]");
        this.submnitNo=page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.yessubmit=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

                





    }


    async Testspecies(room,petname){
        await this.Testspecies_Module.click();
         await this.page.locator(`//div[contains(text(),' ${room}')]`).click();
        await this.page.locator(`//p[contains(text(),'${petname}')]/../../../following-sibling::div[@col-id='action']`).click();

    }

     async Taskmodule(task,project,time,des){
        await this.tasktab.click();
        await this.createtaskbtn.click();

        await this.taskname.fill(task);
        await this.projectdrop.selectOption({label: project});
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
        async CancelRequest(){
        await this.cancel.click();
        await this.no.click();
        await this.cancel.click();
        await this.yes.click();
        }

         async submitrequest(){
         await this.submit.click();
         await this.submnitNo.click();
         await this.submit.click();
         await this.yessubmit.click();
     }

     async Tasktab(tab){
      await this.page.locator(`//div[contains(text(),'${tab}')]`).click();
     }
}
module.exports={task};