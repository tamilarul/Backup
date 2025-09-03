class petmap{
    constructor(page){
        this.page=page;

        this.petmapbtn=page.locator("//b[text()='Pet Map Or Unmap']/../../..");
        this.cus_serach=page.locator("//label[contains(text(),'Customer')]/../following-sibling::div/div/div/div/input");
        this.cancel_icon_cus=page.locator("#remove-tooltip");
        this.pet_search=page.locator("(//label[contains(text(),'Pet')])[1]/../following-sibling::div/div/div/div/input");
        this.pet_cancel_icon=page.locator("#remove-tooltip-pet");
        this.submit=page.locator("//span[text()='Pet Map with Owner']/../../../../following-sibling::div/div/following-sibling::div/button");
      
      this.no_map=page.locator("//button[@class='el-button el-button--default el-button--small']");
      this.yes_map=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']")




        this.popup_map=page.locator("v-toast__text");
        //Petunmap

        this.petsearch_unmap=page.locator("(//label[contains(text(),'Pet')])[2]/../following-sibling::div/div/div/div/input");
        this.reason=page.locator("#descValue");
        this.submit_unmap=page.locator("//span[text()='Pet Un Map with Owner']/../../following-sibling::div/div/following-sibling::div/button");
       this.yes_unmap=page.locator("//button[@class='el-button el-button--default el-button--small el-button--primary ']");
       this.no_unmap=page.locator("//button[@class='el-button el-button--default el-button--small']")

        
    }

    async petmap_module(customername,cusID){
      await this.page.waitForTimeout(1000);
        await this.petmapbtn.click();
        await this.cus_serach.fill(customername);
        await this.page.locator(`//b[contains(text(),'User ID : ${cusID}')]`).click();

    }
     async cancelicon_customer(){
       await this.cancel_icon_cus.click();


    }
     async pet_map(petname,PetID){
        await this.pet_search.fill(petname);

       await this.page.waitForTimeout(2000);
     await this.page.locator(`//b[contains(text(),'Pet ID: ${PetID}')]`).click();
     }
     async cancelicon_pet(){
       await this.cancel_icon_pet.click();


    }
    
    async submit_Petmap(){
       await this.submit.click();
       await this.no_map.click();
        await this.submit.click();
       await this.yes_map.click();
       await this.page.waitForTimeout(5000);
      // console.log(await this.popup_map.textContent());


    }
     async pet_unmap(petname,PetID){
        await this.petsearch_unmap.fill(petname);
        await this.page.waitForTimeout(3000);
        await this.page.locator(`//b[contains(text(),'Pet ID: ${PetID}')]`).click();
     }

      async cancelicon_pet_unmap(){
       await this.cancel_icon_pet.click();


    }
    async submitunmap(removalreason){
      await this.reason.fill(removalreason);
      await this.submit_unmap.click();
      await this.no_unmap.click();
      await this.submit_unmap.click();
      await this.yes_unmap.click();
       await this.page.waitForTimeout(5000);
      // console.log(await this.popup_map.textContent());

    }




    }
    module.exports={petmap}