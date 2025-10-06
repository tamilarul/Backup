

class AdoptHis{
    constructor(page){
       this.page=page;
      
       this.Adopthismodule=page.locator("//b[text()='Adoption History']/../../..");
       this.search_adoption=page.locator("#petAdoptionHistoryQuickFilter");


       this.fostertab=page.locator("//*[name()='svg' and @class='svg-inline--fa fa-hospital-user fa-w-20']");
       this.Trialtab=page.locator("//*[name()='svg' and @class='svg-inline--fa fa-paw fa-w-16']");
      this.Returntab=page.locator("//*[name()='svg' and @class='svg-inline--fa fa-undo fa-w-16']");
this.dashboard=page.locator("//a[text()='Facility Dashboard']");

    }

async AdoptionHistory(petnameadoption,petnamefoster,petnameTrial,petnamereturn){

    await this.Adopthismodule.click();
    await this.search_adoption.fill(petnameadoption);
    await this.fostertab.click();
    await this.search_adoption.fill(petnamefoster);

    await this.Trialtab.click();
    await this.search_adoption.fill(petnameTrial);

    await this.Returntab.click();
    await this.search_adoption.fill(petnamereturn);
   
        await this.dashboard.click();
    

    
}

}
    module.exports={AdoptHis}