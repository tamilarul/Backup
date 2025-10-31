class AdoptPending {
    constructor(page) {
        this.page = page;

        this.AdoptionPendingmodule = page.locator("//b[text()='Adoption Pending']/../../..")
        // To Click  Back Icon
        this.Backicon = page.locator("//*[name()='svg' and @class='fa-xs back-arrow svg-inline--fa fa-arrow-left fa-w-14']");
       
        //Tabs
        this.tabs = page.locator("div.v-tab");
        //this.searchBox = page.locator("input[placeholder='Search']");
        this.searchBox = page.locator("#FosterFilter");
        //Click view icon
        this.viewicon = page.locator("//button[@class='btn view-btn btn-secondary']");
        // To Click Facility Dashboard
        this.dashboard = page.locator("//a[text()='Facility Dashboard']");

    } 
    async Adoptionpending() {
        await this.AdoptionPendingmodule.click();
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
                await this.viewicon.click();
                await this.Backicon.click();
                await this.page.waitForTimeout(2000);
                break;
            }
            else {
                //  If not visible, handle it
                console.log(`Pet '${petName}' not found`);
            }

        }
    }








}
module.exports = { AdoptPending };