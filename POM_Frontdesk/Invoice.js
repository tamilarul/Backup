class invoice {
    constructor(page) {
        this.page = page;
        //To click Invoice module
        this.Invoicemodule = page.locator("//p[contains(text(),' Invoice')]");
        //search for invoice pending
        this.search_invoice = page.locator("#patientquickFilter");
        this.createinvoicebtn = page.locator("//button[@class='btn primary-btn large-btn-size btn-primary']");

        this.createinvoiceinside = page.locator(`(//button[@class='btn primary-btn large-btn-size btn-secondary'])[1]`);
        this.invoice_no = page.locator(`//button[@class='el-button el-button--default el-button--small']/span`);
        this.invoice_yes = page.locator(`//button[@class='el-button el-button--default el-button--small el-button--primary ']`);

        this.paybtn = page.locator("(//button[@class='btn primary-btn submit-btn-size btn-secondary'])[3]");

        this.cancel_payment = page.locator("//button[@class='btn mr-3 secondary-btn  cancel-btn-size btn-secondary']");
        this.cancel_no = page.locator(`//button[@class='el-button el-button--default el-button--small']`);
        this.cancel_yes = page.locator(`//button[@class='el-button el-button--default el-button--small el-button--primary ']`);

        this.register_payment = page.locator("//button[contains(text(),'Register Payment')]");
        this.register_no = page.locator(`//button[@class='el-button el-button--default el-button--small']`);
        this.register_yes = page.locator(`//button[@class='el-button el-button--default el-button--small el-button--primary ']`);

        this.backbtn = page.locator("//button[@class='cancelbtn-color']");

        this.dashboardbtn = page.locator("//button[@class='btn close-btn btn-secondary btn-sm']");
        this.dash_no = page.locator(`//button[@class='el-button el-button--default el-button--small']`);
        this.dash_yes = page.locator(`//button[@class='el-button el-button--default el-button--small el-button--primary ']`);

        this.printbtn = page.locator("//button[@class='submit_btn primary_btn submitbtn-color']")


        // payment pending
        this.pending_search = page.locator("#pendingquickFilter");

        this.historybtn = page.locator("//button[@title='History']");
        this.search_history = page.locator("#pharmacyhistoryFilter");
        this.download = page.locator("//button[@data-test='download-button']");
        this.bill = page.locator("//button[@class='btn reference-btn btn-secondary']");
    }
    async invoice_module() {
        await this.Invoicemodule.click();
    }


    async invoice(tab, search) {

        await this.page.locator(`//h5[text()='Invoice Pending']/../../../../preceding-sibling::div/div/following-sibling::div/div/div[contains(text(),'${tab}')]`).click();

        await this.search_invoice.fill(search)
    }
    async viewicon(petname) {
        await this.page.locator(`//div[text()='${petname}']/following-sibling::div[@col-id='action']/div/div/button[@class='btn edit-btn btn-secondary']`).click();
        await this.createinvoicebtn.click();
        await this.page.waitForTimeout(3000);
    }
    async createicon(petname) {
        await this.page.locator(`//div[text()='${petname}']/following-sibling::div[@col-id='action']/div/div/button[@class='btn active-btn btn-secondary']`).click();

    }
    async createinvoice() {
        await this.createinvoiceinside.click();
        // await this.page.pause();
        await this.invoice_no.click();
        //await this.page.pause();
        await this.createinvoiceinside.click();
        await this.invoice_yes.click();
        await this.page.waitForTimeout(3000);

    }
    async clickPaybtn() {
         await this.page.waitForTimeout(3000);
        await this.paybtn.click();
        await this.page.waitForTimeout(3000);

    }
    async paymentmethod(pay) {
         await this.page.waitForTimeout(3000);
        await this.page.locator(`//div[contains(text(),'${pay}')]`).click();
        await this.page.waitForTimeout(3000);

    }
    async cancelpayment() {
        await this.cancel_payment.click();
        await this.cancel_no.click();
        await this.cancel_payment.click();
        await this.cancel_yes.click();
    }
    async registerpayment() {
        await this.register_payment.click();
        await this.register_no.click();
        await this.register_payment.click();
        await this.register_yes.click();

    }
    async back() {
        await this.backbtn.click();
        await this.dashboardbtn.click();
        await this.dash_no.click();
        await this.dashboardbtn.click();
        await this.dash_yes.click();
    }
    async print() {
        await this.printbtn.click();
    }
    async payment_pending(tab, customername) {
        await this.page.locator(`//h5[contains(text(),' Payment Pending')]/../../../../preceding-sibling::div/div/following-sibling::div/div/div[contains(text(),'${tab}')] `).click();
        await this.pending_search.fill(customername);

    }
    async click_payment_icon(orderid) {
        await this.page.locator(`//b[text()='${orderid}']/../../../following-sibling::div[@col-id='action']/div`).click();

    }
    async history(his) {
        await this.historybtn.click();
        await this.download.click();
        await this.search_history.click();
        await this.page.locator(`//b[text()='${his}']/../../../following-sibling::div[@col-id='action']/div`).click();
        await this.bill.click();
        await this.backbtn.click();
    }


}
module.exports = { invoice };