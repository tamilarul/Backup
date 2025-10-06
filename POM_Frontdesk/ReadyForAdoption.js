class ReadyforAdoption {
    constructor(page) {
        this.page = page;
        //To click Stray Surrender 
        this.ReadyforAdopt_module = page.locator("//b[text()='Ready For Adoption ']/../../..");
        // to Click filter
        this.filter = page.locator("//button[text()='Pet Species']");
        this.value_filter = page.locator("//label[contains(text(),' testspecies')]");

        this.adoptionrequst_btn = page.locator("//*[name()='svg' and @class='eyeicon svg-inline--fa fa-hand-holding-heart fa-w-18']");
        this.custsearch = page.locator("#searchInput");

        this.seventhQues = page.locator("//input[@value='Agreed']");

        this.cancel_no = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.cancel_yes = page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

        this.submit_no = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.submit_yes = page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

        this.facilitydashboard = page.locator("//a[text()='Facility Dashboard']");
        this.Availableadoption=page.locator("//a[text()='Available for Adoption']");

    }
    async ReadyForAdoption(tab) {
        await this.ReadyforAdopt_module.click();
        await this.page.locator(`//div[contains(text(),' ${tab}')]`).click();
        await this.filter.click();
        await this.value_filter.click();
    }

    async viewbtn(petname) {
        await this.page.locator(`//b[text()='${petname}']/../../following-sibling::div/button[@class='btn primary-btn submit-btn-size mr-3 btn-secondary']`).click();
    }

    async adoptbtn(adopt, cusname, cusno, form) {
        await this.page.locator(`//b[text()='${adopt}']/../../following-sibling::div/button[@class='btn primary-btn submit-btn-size btn-secondary']`).click();
        // Wait for 3 seconds
        await this.page.waitForTimeout(3000);
        await this.adoptionrequst_btn.click();
        await this.custsearch.fill(cusname);
        await this.page.locator(`//b[contains(text(),'${cusno}')]`).click();

        await this.page.locator(`//div[contains(text(),'${form}')]/..`).click();

    }
    async questions(firstQues, secondQues, thirdQues, fourQues, fifthQues, sixthQues) {
        await this.page.locator(`//label[contains(text(),'to pets?')]/../div/div/label/span[text()='${firstQues}']`).click();
        await this.page.locator(`//label[contains(text(),'collar')]/../div/div/label/span[text()='${secondQues}']`).click();
        await this.page.locator(`//label[contains(text(),'adopt a pet')]/../div/div/label/span[text()='${thirdQues}']`).click();
        await this.page.locator(`//label[contains(text(),'sleep')]/../div/div/label/span[text()='${fourQues}']`).click();
        await this.page.locator(`//label[contains(text(),'actions')]/../div/div/label/span[text()='${fifthQues}']`).click();
        await this.page.locator(`//label[contains(text(),'NOT')]/../div/div/label/span[text()='${sixthQues}']`).click();
        await this.seventhQues.click({ force: true });

    }
    async cancelform(tab) {
        await this.page.locator(`//span[contains(text(),' ${tab}')]/../../../following-sibling::div/div/div/div/button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']`).click();
        await this.cancel_no.click();
         await this.page.locator(`//span[contains(text(),' ${tab}')]/../../../following-sibling::div/div/div/div/button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']`).click();
        await this.cancel_yes.click();
        await this.page.waitForTimeout(3000);
        await this.Availableadoption.click();
        await this.facilitydashboard.click();

    }
    async submitform(tab) {
        await this.page.locator(`//span[contains(text(),' ${tab}')]/../../../following-sibling::div/div/div/div/button[@class='btn primary-btn submit-btn-size btn-secondary']`).click();
        await this.submit_no.click();
        await this.page.locator(`//span[contains(text(),' ${tab}')]/../../../following-sibling::div/div/div/div/button[@class='btn primary-btn submit-btn-size btn-secondary']`).click();
        await this.submit_yes.click();
        await this.facilitydashboard.click();
    }
}
module.exports = { ReadyforAdoption }
