class customer {
    constructor(page) {
        this.page = page;
        //To click Invoice module
        this.Customer_module = page.locator("//a[contains(text(),'Customer Details')]");

        this.search=page.locator("#patienthistoryquickFilter");
        // to click edit button
        this.editbtn=page.locator("//button[@class='btn primary-btn edit-btn-size btn-secondary']");

            this.firstName1 = page.locator("#firstName");
    this.lastName1 = page.locator("#lastName");
    this.genderName = page.locator("#gender");

    //DOB
    this.DOB_cancel_hover=page.locator("//span[@class='el-input__suffix-inner']");

    this.datepicker = page.locator("#dateOfBirth");
    this.currentDate = page.locator("//td[@class='available today']/div");
 
    this.selectLanguage = page.locator("#language");   //Language
 
    this.clickMobileNo = page.locator("#mobileNumber");    //MObileNumber
 
    this.clickEmail = page.locator("#email"); //E-mail
 
    this.clickMaritalStatus = page.locator("#maritalStatus");  //Marital Status
    this.scrollToMarital = page.locator("//label[text()='ID Proof']") // scroll to Marital Status
 
    this.clickEmergencyNumber = page.locator("#emergencyContactNumber");  //Emergency Number
 
    this.clickAddress = page.locator("#address");  //Address
 
    this.clickEmiratesId = page.locator("#emiratesId");  //Emirates Id
 
    this.clickEmirates = page.locator("#emirateValue");  //Emirates
 
    this.clickTrnNo = page.locator("#trnNo") //TrnNo

    this.hoverprofile=page.locator("//div[@class='overlay']");
    this.editicon=page.locator("//*[name()='svg' and @class='svg-inline--fa fa-pencil-alt fa-w-16']");

    //Click the upload icon
    this.uploadPhotoTrigger = page.locator("//div[@class='dz-default dz-message']/span[text()='UPLOAD PHOTO']");
 
    // clicks the Id Proof
    this.uploadIdProof = page.locator("//i[@class='fa fa-cloud-upload']").nth(1);
 
    // Clicks the OtherDocuments
    this.uploadOtherDocuments = page.locator("//i[@class='fa fa-cloud-upload']").nth(2);


    this.cancelbtn=page.locator("//button[contains(text(),' Cancel')]");
    this.cancel_no=page.locator("//span[contains(text(),' No')]");
    this.cancel_Yes=page.locator("//span[contains(text(),'Yes')]");

    //back button
    this.backbtn=page.locator("//button[contains(text(),'Back')]");

    // to click submit
    this.submit=page.locator("//button[contains(text(),'Submit')]");
    this.submit_no=page.locator("//span[contains(text(),' No')]");
    this.submit_Yes=page.locator("//span[contains(text(),'Yes')]");





    }
    async customer(cusname,cusID){
        await this.Customer_module.click();
        await this.search.fill(cusname)
        await this.page.locator(`//div[text()='${cusID}']/following-sibling::div[@col-id='action']/div`).click();
    }
    async edit(){
        await this.editbtn.click();
    }
    //firstname & Last name
  async customerName(firstnam, lastnam) {
    await this.firstName1.fill(firstnam);
    await this.lastName1.fill(lastnam);
 
  }
  // gender
  async selectGender(gender) {
    await this.genderName.selectOption(gender);
 
  }
  //DOB
  async dateOfBirth() {
    await this.DOB_cancel_hover.hover();
    await this.DOB_cancel_hover.click();
    await this.datepicker.click();
    await this.currentDate.click(); 
  }
 
  //Language
  async click_On_Language(language) {
    await this.selectLanguage.selectOption(language);
  }
 
  async Mobile_and_Email(mobileNo, Email) {
    await this.clickMobileNo.fill(mobileNo);
    await this.clickEmail.fill(Email);
  }
  //Marital Status
  async selectMaritalStatus(marital) {
    await this.clickMaritalStatus.selectOption(marital)
 
  }
  //Emergency,Address,EmiratesId,TRN
  async selectEmergency_Address_Emirates_TrnNo(Emergency, Address, EmiratesId,Emirate,Trn) {
    await this.clickEmergencyNumber.fill(Emergency);
    await this.clickAddress.fill(Address);
    await this.clickEmiratesId.fill(EmiratesId);
    await this.clickEmirates.selectOption(Emirate)
    await this.clickTrnNo.fill(Trn);
  }
  //New method for photo upload
  async uploadProfile(file) {
    await this.hoverprofile.hover();
    await this.editicon.click();
 
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      await this.uploadPhotoTrigger.click(),  // Trigger the file chooser
    ]);
 
    await fileChooser.setFiles(file);  // Set the file to upload
   
  }
 
 
  //New method for ID photo upload
  async upload_IdProof(file) {
   
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      await this.uploadIdProof.click(),  // Trigger the file chooser
    ]);
 
    await fileChooser.setFiles(file);  // Set the file to upload
 
  }
 
 
  //New method for Other Photo upload
  async uploadOtherDocuments_photos(file) {
   
const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      await this.uploadOtherDocuments.click(),  // Trigger the file chooser
    ]);
 
    await fileChooser.setFiles(file);  // Set the file to upload
    
 
 
  }
  async cancelprofile(){
    await this.cancelbtn.click();
    await this.cancel_no.click();
     await this.cancelbtn.click();
     await this.cancel_Yes.click();
     await this.backbtn.click();

  }
  async submitprofile(){
    await this.submit.click();
    await this.submit_no.click();
     await this.submit.click();
     await this.submit_Yes.click();

  }
 
}
module.exports={customer}