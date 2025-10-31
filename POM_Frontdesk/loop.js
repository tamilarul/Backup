export class FacilityDashboard {
  constructor(page) {
    this.page = page;

    this.Testspecies_Module = page.locator("//b[text()='Testspecies ']/../../..");
    //Tabs
    this.tabs = page.locator("div.v-tab");
    this.searchBox = page.locator("input[placeholder='Search']");
    this.viewButton = page.locator(`#patient-history-rendered`);
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

        await this.viewButton.click();
        break; // or any other action

      }
      else {
        //  If not visible, handle it
        console.log(`Pet '${petName}' not found`);
      }

    }
  }
}
