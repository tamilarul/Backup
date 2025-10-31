class consum{
    constructor(page){
    this.page=page;
    //To click Stray Surrender 
    this.Testspecies_Module=page.locator("//b[text()='Testspecies ']/../../..");

      //Tabs
        this.tabs = page.locator("div.v-tab");
        // Search the pet
        this.searchBox = page.locator("input[placeholder='Search']");
        // Viewbutton
        this.viewbutton=page.locator("//button[@class='btn view-btn btn-secondary']");

    this.consumption_tab=page.locator("//div[contains(text(),'  Consumption')]");
    this.Addbutton=page.locator("//button[@class='btn primary-btn update-btn-size btn-secondary']");

    // To Search the consumption
    this.consumptionSearch = page.locator("#searchInput");
        this.waitForCon = page.locator("#search-formul-list-one");

        this.selectConsumpName = page.locator("//b[text()=' Paracetomol ']");
        //batch
        this.selectBatch = page.locator("//select[@id='batchNo']");
        //quantity
        this.quantity = page.locator("#quantityNo");
        //Additional Comments
        this.additionalcom = page.locator("//textarea[@placeholder='Add Comments/Instructions']");
        //Add
        this.clickAddBtn = page.locator("//button[normalize-space()='Add']");
        this.waitForConsumptiondet = page.locator("//table[contains(@class,'tablestyle')]");

        //cancel
        this.cancelbtn=page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-2 btn-secondary']");
        //Edit btn
        this.clickEditbtn = page.locator("//td[@class='mx-1 border']//*[name()='svg'][1]/*[name()='path'][1]");
        //delete
        this.deleteBtn = page.locator("//td[contains(@class,'mx-1 border')]//*[name()='svg'][2]/*[name()='path'][1]");
        //save
        this.savebtn=page.locator("//button[@class='btn continue-btn submitbtn-color btn-primary']");
    }
    async Testspecies(room,petname){
        await this.Testspecies_Module.click(); 
        await this.page.waitForTimeout(2000);
  

    }
    async searchAndClickView(petName) {
        const tabCount = await this.tabs.count();
        for (let i = 0; i < tabCount; i++) {
            await this.tabs.nth(i).click();
            await this.page.waitForTimeout(2000);

            // Search
            await this.searchBox.fill(""); // clear previous
            await this.searchBox.fill(petName);
            await this.page.waitForTimeout(2000);

            //const isPetVisible = await this.page.locator(`//p[contains(text(),'${petName}')]`).isVisible().catch(() => false);
            const pet = this.page.locator(`//p[contains(text(),'${petName}')]`);

            if (await pet.isVisible().catch(() => false)) {
                //  If the element is visible, do something
                
                console.log(`Pet '${petName}' is visible`);
                await this.page.waitForTimeout(2000);
                  await this.viewbutton.click();
                break;
            }
            else {
                //  If not visible, handle it
                console.log(`Pet '${petName}' not found`);
            }

        }
    }
     async Consumption(consumpName){
        await this.consumption_tab.click();
        await this.Addbutton.click();
    await this.consumptionSearch.fill(consumpName);
        await this.waitForCon.waitFor({ state: 'visible', timeout: 60000 });
        await this.selectConsumpName.click();
        await this.page.waitForTimeout(2000);
 
    }
 
    async batchNo(batch) {
        await this.selectBatch.selectOption(batch);
        await this.page.waitForTimeout(2000);
    }
    async quantityNo(qty) {
 
        await this.quantity.fill(qty);
        await this.page.waitForTimeout(1000);
 
    }
    async additionalComments(add) {
        await this.additionalcom.fill(add);
        await this.page.waitForTimeout(1000);
    }
    async cancel(){
        await this.cancelbtn.click();
    }
 
    async addBtn() {
        await this.clickAddBtn.click();
        await this.waitForConsumptiondet.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
    }
    async editConsumption() {
        await this.clickEditbtn.click();
        await this.page.waitForTimeout(1000);
    }
    async deleteConsumption() {
    await this.deleteBtn.click();
    await this.page.waitForTimeout(1000);
   
    }
    async saveConsumption() {
    await this.savebtn.click();
}
}
module.exports={consum};
