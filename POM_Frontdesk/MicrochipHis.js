class MicrochipHis {
    constructor(page) {
        this.page = page;

        //To click Stray Surrender 
        this.Microchiphis_module = page.locator("//b[text()='Pet Microchip History']/../../..");

        // to Click download button
        this.downloadbtn = page.locator("//button[@data-test='download-button']");
        // To Search 
        this.search = page.locator("#petMicrchipHistoryQuickFilter");
        //  to Click New Entry Button
        this.newentrybtn = page.locator("//button[@class='btn new-btn btn-secondary']");
        // To Click Facility Dashboard
        this.dashboard = page.locator("//a[text()='Facility Dashboard']");

    }

    async Microchip(tab) {
        await this.Microchiphis_module.click();

        //await this.page.waitForTimout(2000);
        await this.page.locator(`//div[contains(text(),'${tab}')]`).click();
        await this.downloadbtn.click();
    }
    async newentry() {
        await this.newentrybtn.click();

    }

    async navigateback(cusname) {
        await this.search.fill(cusname);
        await this.dashboard.click();
    }

}


module.exports = { MicrochipHis }