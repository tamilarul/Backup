
class Newentry{
    constructor(page){
       this.page=page;

       this.facility=page.locator("//p[contains(text(),'Facility')]");
       this.Newentrybtn=page.locator("//b[text()='New Entry']/../../..")
       this.customer=page.locator("//label[contains(text(),'Customer')]/../following-sibling::div/div/div/div/input");
       this.cusname=page.locator("//b[text()=' Animal Control Team( User ID : 5928, Phone : 9488811186, Date of birth : 2024-08-07 )']");
       this.pet=page.locator("//label[contains(text(),'Pet')]/../following-sibling::div/div/div/div/input");

       this.petname=page.locator("#search-formul-list-three");

       this.date=page.locator("//div[@class='el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date']");
       this.todaydate=page.locator("//td[@class='available today']/div");
       this.complaint=page.locator("#complaint");

       this.additional=page.locator("//label[text()='Additional Images']/following-sibling::div/div/div");
       this.consent=page.locator("//label[text()='Consent/Attachment']/following-sibling::div/div/div");

       this.terms=page.locator("//span[text()='(Terms & Conditions)']");
       this.close=page.locator("//button[@class='close']");

         this.agree=page.locator("//label[text()='Agree']");
         this.submit1=page.locator("//div[@class='row no-gutters']/div/button");


         

    }
    async Facility(){
        await this.facility.click();
    }
    async Newentry(){
        await this.Newentrybtn.click();

    }
        async stray(Team,petname,complaint1){
        await this.customer.fill(Team);
        await this.cusname.click();
        await this.pet.fill(petname);
        await this.petname.click();
        await this.date.click();
        await this.todaydate.click();
        await this.complaint.fill(complaint1);
    }

    async collor(Collor1){
        await this.page.locator(`//span[text()="${Collor1}"]`);
      

    }
async Uploadfile(filepath, filepath1) {
    // Click the additional images button and wait for the file chooser
    const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        this.additional.click()
    ]);
    await fileChooser.setFiles(filepath);

    // Click the consent button and wait for the file chooser again
    const [fileChooser2] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        this.consent.click()
    ]);
    await fileChooser2.setFiles(filepath1);
    await this.terms.click();
    await this.close.click();
    await this.agree.click();
}
    async submitstray(){
        await this.submit1.click();

    }
    }



module.exports={Newentry};