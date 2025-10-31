class assessment {
   constructor(page) {
      this.page = page;
      //To click Stray Surrender 
      this.Testspecies_Module = page.locator("//b[text()='Testspecies ']/../../..");
      // to get the tabs
      this.tabs = page.locator("div.v-tab");
      // to serach
      this.searchBox = page.locator("input[placeholder='Search']");
      // to view button
      this.viewbutton=page.locator("//button[@class='btn view-btn btn-secondary']");
      // to click edit button
      this.editbtn = page.locator("//button[@class='btn primary-btn addcategory-btn-size btn-secondary']");
      // health field
      this.healthfield = page.locator("//div[@id='infohealth']/textarea");
      // behaviour
      this.behaviourfield = page.locator("//div[@id='infobehavior']/textarea");
      // hold on
      this.holdonfield = page.locator("//div[@id='infohold_7_days_until']/textarea");
      // nextstep
      this.nextstepfield = page.locator("//div[@id='infonext_step']/textarea");
      // click cancel button
      this.cancelbtn = page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']");
      this.cancelno = page.locator("//button[@class='el-button el-button--default el-button--small']");
      this.cancelyes = page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");
      // click save btn
      this.savebtn = page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-3 btn-secondary']/following-sibling::button[@class='btn primary-btn submit-btn-size btn-secondary']");

      // assessment history
      this.assesshistory = page.locator("//button[@title='View Assessment History']");
      this.cancelicon = page.locator("//strong[text()='Assessment History']/../button[@class='close text-dark']");

      //rooms
      this.checkin = page.locator("//img[@class='image-div']");
      //cancel room
      this.cancelroombtn = page.locator("//button[@class='btn mr-4 cancel-btn-size secondary-btn btn-secondary']");
      //submit room
      this.submitroombtn = page.locator("//button[@class='btn submit-btn-size primary-btn btn-secondary']");

      //switch
      this.switchbtn = page.locator("//span[@class='mdi mdi-swap-horizontal eyeicon']");

      //profile
      this.profileview = page.locator("//button[contains(text(),'View')]")
      // profile edt
      this.profileeditbtn = page.locator("//button[@class='btn edit-btn-size primary-btn btn-secondary']");
      this.profilecancelbtn = page.locator("//button[@class='btn mr-4 secondary-btn  cancel-btn-size btn-secondary']");


      this.profilesubmitbtn = page.locator("//button[@class='btn primary-btn submit-btn-size btn-secondary']")

      //overall History
      this.overallhisbtn = page.locator("//button[@class='btn latest-btn btn-secondary btn-sm']/following-sibling::button");
      this.historycloseicon = page.locator("//strong[text()='Overall History']/../button[@class='close text-dark']");

      //Add notes
      this.addnotesbtn = page.locator("//button[@class='btn primary-btn btn-size btn-secondary']");
      //Notes field
      this.notesfield = page.locator("//div[@id='infonotes']/textarea");
      //file
      this.image = page.locator("#dropzone")

      //treatment
      this.treatment = page.locator("//button[@class='btn btn-outline-success rounded-pill']");









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

   async Assess(health, behave, holdon, sterlized, next) {
      await this.editbtn.click();
      await this.healthfield.fill(health);
      await this.behaviourfield.fill(behave);
      await this.holdonfield.fill(holdon);
      await this.page.locator(`//label[contains(text(),'   Sterilized')]/following-sibling::div/div/label/span[text()='${sterlized}']`).click();
      await this.nextstepfield.fill(next);
   }
   //To cancel the request
   async Cancel() {
      await this.cancelbtn.click();
      await this.cancelno.click();
      await this.cancelbtn.click();
      await this.cancelyes.click();
   }

   async save() {
      await this.savebtn.click();
   }

   async roomhistoryview(history, icon) {
      await this.page.locator(`//button[contains(text(),'${history}')]`).click();
      await this.page.locator(`//strong[text()='${icon}']/../button[@class='close text-dark']`).click();
   }

   async checkinmodule(tab, checkinroom) {
      await this.page.locator(`//div[contains(text(),' ${tab}')]`).click();
      await this.checkin.click();
      await this.page.locator(`//p[text()='${checkinroom}']`).click();
   }

   async cancel_room() {
      await this.cancelroombtn.click();
   }

   async submit_room() {
      await this.submitroombtn.click();
   }

   async switchroom(checkinroom) {
      await this.switchbtn.click();
      await this.page.locator(`//p[text()='${checkinroom}']`).click();
   }

   async profile() {
      await this.profileview.click();
      await this.profileeditbtn.click();
   }

   async adoptionready(Adopt) {
      await this.page.locator(`//div[@id='adoptionReady']/div/label/span[text()='${Adopt}']`).click();
   }

   async trialready(trial) {
      await this.page.locator(`//div[@id='trialReady']/div/label/span[text()='${trial}']`).click();
   }

   async fosterready(foster) {
      await this.page.locator(`//div[@id='fosterReady']/div/label/span[text()='${foster}']`).click();
   }

   async profile_cancel() {
      await this.profilecancelbtn.click();
      await this.cancelno.click();
      await this.profilecancelbtn.click();
      await this.cancelyes.click();
   }


   async profile_submit() {
      await this.profilesubmitbtn.click();
   }
   async overallhistory() {
      await this.overallhisbtn.click()
      await this.historycloseicon.click();
   }

   async Addnotes(note, filepath) {
      await this.addnotesbtn.click();
      await this.notesfield.fill(note);

      // Click the additional images button and wait for the file chooser
      const [fileChooser] = await Promise.all([
         this.page.waitForEvent('filechooser'),
         this.image.click()
      ]);

      await fileChooser.setFiles(filepath);


   }
   async Treatment_tab(tab) {
      await this.page.locator(`//div[contains(text(),' ${tab}')]`).click();
      await this.treatment.click();
   }
}
module.exports = { assessment }