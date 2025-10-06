class waiting {
    constructor(page) {
        this.page = page;
        //To click Invoice module
        this.WaitingQueuemodule = page.locator("//p[contains(text(),' Waiting')]");
        this.doctorname=page.locator("//p[@class='m-0 patient-name-div is-patient']");
        this.currentdate=page.locator("//p[@class='m-0 current-date']");
        this.customename=page.locator("//p[@class='mb-1 patient-name-div is-patient']");
        this.petname=page.locator("//span[@class='pet-name-details']")

        this.back=page.locator("//img[@class='medayaanlogo img-border']");
    }
    async waitingQueue_module(){

        await this.WaitingQueuemodule.click();
       const doctor = await this.doctorname.allTextContents(); 
        for(const text of doctor){
            console.log(text);   
        };  
        const date=await this.currentdate.textContent();
        console.log(date); 
        const cus=await this.customename.textContent();
        console.log(cus); 
        const pet=await this.petname.textContent();
        console.log(pet); 
        
        await this.back.click();


    }
}
module.exports={waiting}