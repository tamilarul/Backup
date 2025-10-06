class pet {
    constructor(page) {
        this.page = page;


        this.petbtn = page.locator("//b[text()='Pet']/../../..");

        this.download = page.locator("//button[@class='btn w-auto mr-2 d-none d-sm-inline btn-primary']")
        this.search = page.locator('#petdetailsquickFilter');

        // edit button Profile

        this.profileedit = page.locator("//button[@class='btn primary-btn edit-btn-size btn-secondary']");

        this.petName = page.locator("#fullName"); //first name
        this.colour = page.locator("#colorType"); //
        this.weightprofilefield = page.locator("#weight");
        this.behaviour = page.locator("//select[@id='behavior']")



        this.temper = page.locator("//label[text()='Temparament']/..//textarea[@class='form-control']");
        this.suited = page.locator("//label[text()='Suited To']/..//textarea[@class='form-control']");
        this.story = page.locator("//label[text()='My Story']/..//textarea[@class='form-control']");
        this.goodCat = page.locator("//label[text()='Good with Cats']/..//textarea[@class='form-control']");
        this.goodDog = page.locator("//label[text()='Good with Dogs']/..//textarea[@class='form-control']")
        this.GoodKids = page.locator("//label[text()='Good with Kids']/..//textarea[@class='form-control']")
        this.movetoAdditional = page.locator("//label[text()='Additional Images']");
        this.UploadPreview = page.locator("//button[@class='btn submitbtn-color create-btn-size btn-secondary']");    //Click upload button and preview will display                                                        
        this.uploadfile = page.locator("//div[@class='dropzone-custom-content']");
        //              //click upload to upload file from local file manager                                                                              
        this.medicalbtn = page.locator("//button[@class='btn primary-btn submit-btn-size mb-2 btn-secondary']");
        // medical history
        this.meddatepicker = page.locator("#historyDate");
        this.meddateselect = page.locator("//tr[@class='el-date-table__row']/td[@class='available today']");

        this.medDetails = page.locator("#historyDescription");
        this.medi_cancel = page.locator("//button[@class='btn cancelbtn-color btn-secondary']");

        //med details click
        this.medi_Save = page.locator("//span[contains(text(),'Save')]"); //med save
        this.save_no = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.save_yes = page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

        // edit the medical history
        this.medi_Edit = page.locator("//button[@class='btn edit-btn btn-secondary btn-sm']")
        this.updatebtn = page.locator("//button[@class='btn primary-btn submit-btn-size mb-2 btn-secondary']");

        // med delete
        this.medi_delete = page.locator("//button[@class='btn ml-2 btn-danger btn-sm']");
        this.delete_no = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.delete_yes = page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");

        // click arrow
        this.uparrow = page.locator("//div[@class='row emraccordionrow']/a[contains(text(),'Profile')]")  //move to profile and click

        this.cancel_profile = page.locator("//button[@class='btn secondary-btn cancel-btn-size mr-4 btn-secondary']");
        this.cancel_no = page.locator("//button[@class='el-button el-button--default el-button--small']");
        this.cancel_yes = page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");
        // Click submit
        this.submit_profile = page.locator("//button[@class='btn primary-btn submit-btn-size btn-secondary']");


        //Vitals
        this.vitalsbtn = page.locator("//div[text()='Vitals']");
        //To click the edit button
        this.editbtn = page.locator("//button[@class='btn primary-btn edit-btn-size btn-secondary']");

        this.temp = page.locator("//label[contains(text(),'Temperature')]/following-sibling::div//input");  //Temperature
        this.pr = page.locator("//label[contains(text(),'Pulse Rate (BPM)')]/../following-sibling::div/input");   //pulse rate
        this.respiratory = page.locator("//label[contains(text(),'Respiratory Rate')]/../following-sibling::div/input");  //Respiratory rate
        this.mucous = page.locator("//label[contains(text(),'Mucous Membrane Color')]/..//input"); //Mucous colour membrane
        this.crt = page.locator("//label[contains(text(),'Capillary Refill Time (CRT)')]/..//input"); //Capillary refill time
        this.pq = page.locator("//label[contains(text(),'Pulse Quality')]/..//input"); //Pulse Quality
        this.gum = page.locator("//label[contains(text(),'Gum Color')]/..//input");  //Gum Color
        this.hr = page.locator("//label[contains(text(),'Heart Rate')]/..//input");  //Heart Rate
        this.painRes = page.locator("//label[contains(text(),'Pain Response')]/..//input");  //Pain Response
        this.weightvitalfield = page.locator("//label[contains(text(),'Weight in Kgs')]/following-sibling::div/div/input");  //Weight in Kgs

        // to cancel vital
        this.cancel = page.locator("//button[contains(text(),'Cancel')]");
        this.no_cancel = page.locator("//span[contains(text(),'   No')]");
        this.yes_cancel = page.locator("//span[contains(text(),'   Yes')]");

        //To Submit vital
        this.submitbtn = page.locator("//span[contains(text(),'Submit')]");

        //Vaccination
        this.vaccinebtn = page.locator("//div[text()='Vaccination']");
        //Treatment
        this.Treatmentbtn = page.locator("//div[text()='Treatment']");


    }
    async pet_module(petname, petid) {
        await this.petbtn.click();
        await this.page.waitForSelector("//span[text()='Pet Name']", { state: 'visible' });
        await this.download.click();
        await this.search.fill(petname);
        await this.page.waitForTimeout(3000);
        await this.page.locator(`//div[contains(text(),'${petid}')]/following-sibling::div[@col-id='action']/div`).click();

    }

    async editProfile() {
        await this.profileedit.click();
        await this.page.waitForTimeout(1000)

    }
    async editPetdetails(namePet, colur, wght, behave, age, spray, temp, suit, stor, cat, dog, kid) {
        await this.petName.fill(namePet);
        await this.colour.fill(colur);
        await this.page.waitForTimeout(1000)
        await this.weightprofilefield.fill(wght);
        await this.behaviour.selectOption(behave);
        await this.page.locator(`//span[text()='${age}']`);

        await this.page.locator(`//label[text()='Spayed/Neutered']/..//label/span[text()='${spray}']`).click();
        await this.temper.fill(temp);
        await this.suited.fill(suit);
        await this.story.fill(stor);
        await this.goodCat.fill(cat);
        await this.goodDog.fill(dog);
        await this.GoodKids.fill(kid);
        await this.movetoAdditional.scrollIntoViewIfNeeded();

    }

    async picProfile(filepath) {

        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.waitForTimeout(2000);
        //await this.page.UploadPreview.scrollIntoViewIfNeeded();
        // await this.UploadPreview.click();
        await this.uploadfile.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filepath);
        await this.page.waitForTimeout(2000);
    }

    async medicalHistory(des) {
        await this.medicalbtn.click();
        await this.meddatepicker.click();
        await this.page.waitForTimeout(1000);
        await this.meddateselect.click();
        await this.medDetails.type(des);
    }
    async cancelmedical() {
        await this.medi_cancel.click();
    }
    async savemedical() {
        await this.medicalbtn.scrollIntoViewIfNeeded();
        await this.medi_Save.click();
        await this.save_no.click();
        await this.medi_Save.click();
        await this.save_yes.click();
        await this.page.waitForTimeout(1000);
    }


    async editmedical() {
        await this.medicalbtn.scrollIntoViewIfNeeded();
        await this.medi_Edit.click();
        await this.updatebtn.click();
        await this.page.waitForTimeout(1000);
    }

    async deletemedical() {
        await this.medicalbtn.scrollIntoViewIfNeeded();
        await this.medi_delete.click();
        await this.delete_no.click();
        await this.medi_delete.click();
        await this.delete_yes.click();
        await this.page.waitForTimeout(1000);
    }
    async arrow() {
        await this.uparrow.click();
    }
    async cancelprofile() {
        // to scroll 

        await this.cancel_profile.click();
        await this.cancel_no.click();

        await this.medicalbtn.scrollIntoViewIfNeeded();
        await this.cancel_profile.click();
        await this.cancel_yes.click();
    }
    async submitprofile() {
        // to scroll
        await this.medicalbtn.scrollIntoViewIfNeeded();
        await this.submit_profile.click();
    }
    async Vitals(temperature, pulseRate, respiratoryRate, mucousMembrane, capillaryTime, pulseQuality, gumColour,
        heartRate, painResponse, weightInKg) {
        await this.vitalsbtn.click();
        await this.editbtn.click();
        await this.temp.fill(temperature)
        await this.pr.fill(pulseRate)
        await this.respiratory.fill(respiratoryRate)
        await this.mucous.fill(mucousMembrane)
        await this.crt.fill(capillaryTime)
        await this.pq.fill(pulseQuality)
        await this.gum.fill(gumColour)
        await this.hr.fill(heartRate)
        await this.painRes.fill(painResponse)
        await this.weightvitalfield.fill(weightInKg)
    }

    async cancelvitals() {
        await this.cancel.click();
        await this.no_cancel.click();

        await this.cancel.click();
        await this.yes_cancel.click()
    }
    async submitvitals() {
        await this.submitbtn.click();
    }
    async vaccinationmodule() {
        await this.vaccinebtn.click();
    }
    async Treatment() {
        await this.Treatmentbtn.click();
    }

}

module.exports = { pet };