class MapUnmapHis {
    constructor(page) {
        this.page = page;

        //To click Stray Surrender 
        this.MapUnmaphis_module = page.locator("//b[text()='Pet Map & Unmap History']/../../..");
        //Tabs
        this.tabs = page.locator("div.v-tab");
        // Search the pet
        this.searchBox = page.locator("input[placeholder='Search']");
        // to Click download button
        this.downloadbtn = page.locator("//button[@data-test='download-button']");
        //  to Click New Entry Button
        this.newentrybtn = page.locator("//button[@class='btn new-btn btn-secondary']");
        // To Click Facility Dashboard
        this.dashboard = page.locator("//a[text()='Facility Dashboard']");

    }
    async PetMapUnmap() {
        await this.MapUnmaphis_module.click();
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

            }
            else {
                //  If not visible, handle it
                console.log(`Pet '${petName}' not found`);
            }

        }
    }
    async download() {
        await this.downloadbtn.click();
    }
    async newentry() {
        await this.newentrybtn.click();

    }

    async navigateback() {

        await this.dashboard.click();
    }

}
module.exports = { MapUnmapHis }