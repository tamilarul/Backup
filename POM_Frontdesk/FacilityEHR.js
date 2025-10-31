class EHR {
    constructor(page) {
        this.page = page;
        //To click Stray Surrender 
        this.Testspecies_Module = page.locator("//b[text()='Testspecies ']/../../..");
         //Tabs
        this.tabs = page.locator("div.v-tab");
        // Search the pet
        this.searchBox = page.locator("input[placeholder='Search']");
        // Viewbutton
        this.viewbutton=page.locator("//button[@class='btn view-btn btn-secondary']");
        // to Click the EHR Tab
        this.EHR_tab = page.locator("//div[contains(text(),'  EHR')]");
        //To click the edit button
        this.editbtn = page.locator("//button[@class='btn primary-btn edit-btn-size btn-secondary']");

        this.temp = page.locator("//label[contains(text(),'Temperature')]/following-sibling::div//input");  //Temperature
        this.pr = page.locator("//label[contains(text(),'Pulse Rate (BPM)')]/../following-sibling::div/input");   //pulse rate
        this.respiratory = page.locator("//label[contains(text(),'Respiratory Rate')]/../following-sibling::div/input");  //Respiratory rate
        this.mucous = page.locator("//label[contains(text(),'Mucous Membrane Color')]/..//input"); //Mucous colour membrane
        this.crt = page.locator("//label[contains(text(),'Capillary Refill Time (CRT)')]/..//input"); //Capillary refill time
        this.pq = page.locator("//label[contains(text(),'Pulse Quality')]/..//input"); //Pulse Quality
        this.gum = page.locator("//label[contains(text(),'Gum Color')]/..//input");  //Gum Color
        this.hr = page.locator("//label[contains(text(),'Heart Rate')]/..//input");  //Heart Rate
        this.painRes = page.locator("//label[contains(text(),'Pain Response')]/..//input");  //Pain Response
        this.weight = page.locator("//label[contains(text(),'   Weight in Kgs')]/following-sibling::div/div/input");  //Weight in Kgs

        // to cancel
        this.cancel = page.locator("(//button[contains(text(),'Cancel')])[1]");
        this.no_cancel = page.locator("//span[contains(text(),'   No')]");
        this.yes_cancel = page.locator("//span[contains(text(),'   Yes')]");

        //To Submit
        this.submitbtn = page.locator("//button[@class='btn submit-btn-size primary-btn btn-secondary']");









    }
    async Testspecies() {
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

    async EHR(temperature, pulseRate, respiratoryRate, mucousMembrane, capillaryTime, pulseQuality, gumColour,
        heartRate, painResponse, weightInKg) {
        await this.EHR_tab.click();
        await this.editbtn.click();
        await this.temp.fill(temperature)
        await this.pr.fill(pulseRate)
        await this.respiratory.fill(respiratoryRate)
        await this.mucous.fill(mucousMembrane)
        await this.crt.fill(capillaryTime)
        await this.pq.fill(pulseQuality)
        await this.gum.fill(gumColour)
        await this.hr.fill(heartRate)
        await this.painRes.fill(painResponse)
        await this.weight.fill(weightInKg)
    }

    async cancelEHR() {
        await this.cancel.click();
        await this.no_cancel.click();

        await this.cancel.click();
        await this.yes_cancel.click()
    }
    async submitEHR() {
        await this.submitbtn.click();
    }
}
module.exports = { EHR }