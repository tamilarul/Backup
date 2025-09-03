class report{
    constructor(page){
    this.page=page;
    //To select date for Start Date field
 this.report_module=page.locator("//b[text()='Report']/../../..");
 this.startdate=page.locator("#startDate");
 this.startdate_year=page.locator("//span[text()='2025 ']");

 //To select date for Start Date field
 this.enddate=page.locator("#endDate");
 this.Enddate_year=page.locator("(//span[text()='2025 '])[2]");

 // to select Petspecies Dropdown
 this.species_field=page.locator("#petSpecies");
 this.Stage=page.locator("#reportType");

 this.petnames="//div[@col-id='petname']";
 this.downloadbutton=page.locator("//button[@class='btn btn-primary disabled']");
 this.search=page.locator("#petReportquickFilter");

 //facility dashboard
            this.dashboard=page.locator("//a[text()='Facility Dashboard']");






}
async report(year,month,date){
    await this.page.waitForTimeout(2000);
    await this.report_module.click();
    await this.startdate.click();
     await this.page.waitForTimeout(2000);
    await this.page.locator(`//a[text()='${year}']`);
    await this.page.locator(`//a[text()='${month}']`);
    await this.page.locator(`//span[contains(text(),'${date}')]`);

}

async end_date(year,month,date){
  await this.enddate.click();
  await this.Enddate_year.click();
    await this.page.locator(`//a[text()='${year}']`);
    await this.page.locator(`//a[text()='${month}']`);
    await this.page.locator(`//span[contains(text(),'${date}')]`);
  

}
async Pet_species(petspecies,petstage,createdby){
   await this.species_field.selectOption({ label: petspecies });
   await this.Stage.selectOption({label: petstage});

   await this.downloadbutton.click();
        await this.search.fill(createdby);
    //to print the pet names
        const pet=await this.page.$$(this.petnames);
        for(const pet1 of pet){
            const text=await pet1.textContent();
            console.log(text);   
        };  



}
async dashboardclick(){
        await this.dashboard.click();
    }

}
module.exports={report};