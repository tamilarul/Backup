class SSH {
   constructor(page) {
      this.page = page;

      this.SSH_module = page.locator("//b[text()='Stray / Surrender History']/../../..");
      //Tabs
      this.tabs = page.locator("div.v-tab");
      // Search the pet
      this.searchBox = page.locator("input[placeholder='Search']");
      // Viewbutton
      this.viewbutton = page.locator("//button[@class='btn view-btn btn-secondary']");
      this.download = page.locator("//button[@class='btn mr-2 btn-primary']");
      this.datepicker = page.locator("#datepicker__ubyrl2mme");
      this.year_title = page.locator(".//button[text()='2024']");
      this.year = page.locator("/li[text()='2024']");
      this.month = page.locator("//button[text()='May']");

      this.surrenderpage = page.locator("//*[name()='svg' and @class='svg-inline--fa fa-handshake fa-w-20']");


   }

   async SSH_history() {
      await this.SSH_module.click();
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
            await this.page.waitForTimeout(3000);
            await this.viewbutton.click();
            break;
         }
         else {
            //  If not visible, handle it
            console.log(`Pet '${petName}' not found`);
         }

      }
   }
   async ClickDownload() {
      await this.download.click();


   }



}




module.exports = { SSH }