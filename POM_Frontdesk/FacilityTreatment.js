class Treatment {
    constructor(page) {
        this.page = page;
        //To click Stray Surrender 
        this.Testspecies_Module = page.locator("//b[text()='Testspecies ']/../../..");
        //Tabs
        this.tabs = page.locator("div.v-tab");
        // Search the pet
        this.searchBox = page.locator("input[placeholder='Search']");
        // Viewbutton
        this.viewbutton = page.locator("//button[@class='btn view-btn btn-secondary']");
        // to Click the EHR Tab
        this.Treatmenttab = page.locator("//div[contains(text(),'  Treatment')]");
        //To click the add button
        this.addbtn = page.locator("//button[@class='btn primary-btn add-btn-size btn-secondary']");

        this.searchtreatmentName = page.locator("#searchInput")

        this.treatmentVeterinarian = page.locator("//select[@id='doctorname']")  //Treatment veterinarian select
        this.TreatmentDate = page.locator("#treatmentdate");


        this.clickTreatmentDate = page.locator("//td[@class='normal disabled']/preceding-sibling::td[@class='available today']/preceding-sibling::td[@class='available'][3]");
        //this.clickTreatmentDate = page.locator("//tr[@class='el-date-table__row']/td[@class='available today']");

        this.NextDate = page.locator("//label[text()='Treatment Date']/../following-sibling::div//input");
        this.clickNextDate = page.locator("(//tr[@class='el-date-table__row']/td[@class='normal disabled']/following-sibling::td[@class='available'])[1]");

        this.treatCancel = page.locator("//div[@id='treatment-details-sidebar']//button[contains(text(),'Cancel')]");
        this.clickCancelNo = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.treatSubmit = page.locator("//div[@id='treatment-details-sidebar']//span[contains(text(),'Submit')]")
    }

    async Testspecies(room, petname) {
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
    async Treatmentmodule(Treatmentname, treatmentdrop) {
        await this.Treatmenttab.click();
        await this.addbtn.click();
        await this.searchtreatmentName.fill(Treatmentname);
        await this.page.locator(`//b[contains(text(),' ${treatmentdrop}')]`).click();
        await this.page.waitForTimeout(1000);
    }

    async treatmentVet(trVet) {
        await this.treatmentVeterinarian.selectOption({ label: trVet });
    }
    async treatment_Date() {
        await this.TreatmentDate.click();
        await this.clickTreatmentDate.click();

    }
    async treatNextDate(month, monthname, mon) {
        await this.NextDate.click();
        await this.clickNextDate.click();
        /*await this.page.locator(`(//span[text()='${month}'])[5]`).click();
      await this.page.locator(`(//a[text()='${monthname}'])[5]`).click();
      await this.page.locator(`//span[text()='${mon}']/../following-sibling::div/table/tbody/tr[@class='el-date-table__row']/td[@class='available']/div/span[contains(text(),' 21')]`).click();
      await this.page.waitForTimeout(2000);*/



    }

    async treatCancel_Submit() {
        await this.treatCancel.click();
        await this.clickCancelNo.click()
        await this.page.waitForTimeout(1000);
        await this.treatSubmit.click()
        await this.clicksubmitYes.click()

    }

}
module.exports = { Treatment };