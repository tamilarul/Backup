

class RoomOccupancy {
    constructor(page) {
        this.page = page;
        //To click Romm Occupancy
        this.RoomOccupancy_module = page.locator("//b[text()='Room Occupancy']/../../..");
        //Tabs
        this.tabs = page.locator("div.v-tab");
        this.next = page.locator("//div[@class='v-slide-group__next']");
        this.previous = page.locator("//div[@class='v-slide-group__prev']")
        this.dashboard = page.locator("//a[text()='Facility Dashboard']");



    }
    async RoomOccupancytab() {
        await this.RoomOccupancy_module.click();
        await this.page.waitForTimeout(2000);

    }
    async searchAndClickView() {
        const tabCount = await this.tabs.count();
        for (let i = 0; i < tabCount; i++) {
            await this.tabs.nth(i).click();
            await this.page.waitForTimeout(3000);

        }
    }
    async navigation() {
        await this.next.click();
        await this.previous.click();
        await this.dashboard.click();
    }

}
module.exports = { RoomOccupancy }
