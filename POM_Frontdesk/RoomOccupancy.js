

class RoomOccupancy{
    constructor(page){
    this.page=page;
    //To click Romm Occupancy
 this.RoomOccupancy_module=page.locator("//b[text()='Room Occupancy']/../../..");
 this.next=page.locator("//div[@class='v-slide-group__next']");
 this.previous=page.locator("//div[@class='v-slide-group__prev']")
 this.dashboard=page.locator("//a[text()='Facility Dashboard']");



    }
    async RoomOccupancytab(species){
        await this.RoomOccupancy_module.click();
        await this.page.locator(`//span[contains(text(),'${species}')]`).click();
        await this.next.click();
        await this.previous.click();
        await this.dashboard.click();
    }

}
module.exports={RoomOccupancy}
